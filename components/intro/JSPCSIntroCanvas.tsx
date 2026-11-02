'use client'

import { useRef, useEffect, useCallback, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, AdaptiveDpr } from '@react-three/drei'
import * as THREE from 'three'
import ExplodedPCModel, { PCModelRefs } from './ExplodedPCModel'
import { getScrollProgress } from './scrollStore'

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

// ─────────────────────────────────────────────
//  SCENE INNER: Camera & Exploded Motion
// ─────────────────────────────────────────────
interface SceneProps {
  refs: PCModelRefs
  onComplete: () => void
}

function SceneContents({ refs, onComplete }: SceneProps) {
  const { camera, gl, invalidate, scene } = useThree()

  const progressRef = useRef(0)
  const completedRef = useRef(false)

  // Store original positions of PC components
  const basePositionsRef = useRef(
    new Map<keyof PCModelRefs, THREE.Vector3>()
  )
  // 1. Initial Camera Setup & Force Visibility
  useEffect(() => {
    // Canvas size & camera aspect ratio lock
    gl.setSize(window.innerWidth, window.innerHeight)
    camera.position.set(3.6, 1.4, 3.8)
    camera.lookAt(0, 0.1, 0)
    camera.updateProjectionMatrix()

    // Mesh-கள் மறைந்து போகாமல் இருக்க frustumCulled = false செய்கிறோம்
    Object.values(refs).forEach((ref) => {
      if (ref?.current) {
        ref.current.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            child.frustumCulled = false
          }
        })
      }
    })

    // First frame render
    gl.compile(scene, camera)
    invalidate()

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 50)
    return () => clearTimeout(timer)
  }, [gl, camera, invalidate, scene, refs])

  // 2. Camera waypoints per phase (useMemo போட்டு optimize செய்கிறோம்)
  const camPhases = useMemo(() => [
    { pos: new THREE.Vector3(3.6, 1.4, 3.8), target: new THREE.Vector3(0, 0, 0) },        // 0.00: Full Hero Overview
    { pos: new THREE.Vector3(3.0, 1.0, 3.2), target: new THREE.Vector3(0.2, 0.1, 0) },    // 0.25: Approaching Glass
    { pos: new THREE.Vector3(2.4, 0.7, 3.0), target: new THREE.Vector3(0.3, 0.2, 0) },    // 0.55: Exploded Deconstruction
    { pos: new THREE.Vector3(3.0, 1.2, 3.4), target: new THREE.Vector3(0, 0, 0) },        // 0.75: Reassembly Docking
    { pos: new THREE.Vector3(3.6, 1.3, 3.8), target: new THREE.Vector3(0, 0, 0) },        // 1.00: Final Studio Reveal
  ], [])

  // 3. Exploded offsets (useMemo)
  const explodeOffsets: { [key: string]: THREE.Vector3 } = useMemo(() => ({
    glassPanel: new THREE.Vector3(1.6, 0, 0.4),
    gpu: new THREE.Vector3(1.0, -0.2, 0.6),
    cooler: new THREE.Vector3(0.9, 0.3, -0.1),
    cpu: new THREE.Vector3(0.2, 0, 0),
    ram0: new THREE.Vector3(0.1, 0.7, 0),
    ram1: new THREE.Vector3(0.1, 0.9, 0),
    chassis: new THREE.Vector3(-0.5, 0, 0),
    motherboard: new THREE.Vector3(0, 0, 0),
  }), [])

  useFrame(() => {
    const t = getScrollProgress()
    progressRef.current = t

    // Camera animation logic
    const thresholds = [0, 0.25, 0.55, 0.75, 1.0]
    let phaseIdx = 0
    for (let i = 0; i < thresholds.length - 1; i++) {
      if (t >= thresholds[i] && t <= thresholds[i + 1]) {
        phaseIdx = i
        break
      }
    }
    const phaseProgress = (t - thresholds[phaseIdx]) / (thresholds[phaseIdx + 1] - thresholds[phaseIdx] || 1)
    const fromCam = camPhases[phaseIdx]
    const toCam = camPhases[Math.min(phaseIdx + 1, camPhases.length - 1)]

    const camPos = new THREE.Vector3().lerpVectors(fromCam.pos, toCam.pos, phaseProgress)
    camera.position.lerp(camPos, 0.08)
    camera.lookAt(0, 0.1, 0)

    // Explosion curve
    let explodeFactor = 0
    if (t < 0.20) {
      explodeFactor = 0
    } else if (t <= 0.55) {
      explodeFactor = (t - 0.20) / 0.35
    } else if (t <= 0.80) {
      explodeFactor = lerp(1.0, 0.0, (t - 0.55) / 0.25)
    } else {
      explodeFactor = 0
    }

    // Apply offset to parts
    // const compKeys = Object.keys(refs) as (keyof PCModelRefs)[]
    // compKeys.forEach((key) => {
    //   const group = refs[key]?.current
    //   if (!group) return
    //   const maxOffset = explodeOffsets[key] ?? new THREE.Vector3()
    //   const currentOffset = maxOffset.clone().multiplyScalar(explodeFactor)
    //   group.position.lerp(currentOffset, 0.1)
    // })

    // Apply explosion offsets while preserving original component positions
    // Apply explosion offsets while preserving original component positions
    const compKeys = Object.keys(refs) as (keyof PCModelRefs)[]

    compKeys.forEach((key) => {
      const group = refs[key]?.current
      if (!group) return

      // Capture each component's original position once
      let basePosition = basePositionsRef.current.get(key)

      if (!basePosition) {
        basePosition = group.position.clone()
        basePositionsRef.current.set(key, basePosition)
      }

      // Calculate the target position relative to the original position
      const offset = explodeOffsets[key] ?? new THREE.Vector3()

      const targetPosition = basePosition
        .clone()
        .addScaledVector(offset, explodeFactor)

      // Smoothly animate towards the target
      group.position.lerp(targetPosition, 0.1)
    })

    if (t >= 0.92 && !completedRef.current) {
      completedRef.current = true
      onComplete()
    }
  })

  return null
}
// ─────────────────────────────────────────────
//  STUDIO 4-POINT ILLUMINATION (NO DARK FACES)
// ─────────────────────────────────────────────
function StudioLights() {
  return (
    <>
      {/* 1. Global Ambient Light — ensures everything is readable */}
      <ambientLight intensity={1.3} color="#FFFFFF" />

      {/* 2. Key Front-Top Sun Light */}
      <directionalLight
        position={[6, 9, 6]}
        intensity={3.2}
        color="#FFF6EE"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* 3. Fill Light from Left-Back */}
      <directionalLight
        position={[-6, 5, 4]}
        intensity={2.0}
        color="#E6ECE8"
      />

      {/* 4. Rear Rim / Accent Light for Metallic Bevels */}
      <directionalLight
        position={[0, 6, -6]}
        intensity={2.2}
        color="#9EC5AB"
      />

      {/* 5. Burnt Orange Hardware Specular Point Light */}
      <pointLight
        position={[2.2, 0.6, 1.8]}
        intensity={4.5}
        color="#FF6B26"
        distance={9}
      />
      {/* 6. Lower PSU Shroud Orange Glow */}
      <pointLight
        position={[0.5, -0.8, 1.5]}
        intensity={3.0}
        color="#FF6B26"
        distance={6}
      />
    </>
  )
}

// ─────────────────────────────────────────────
//  BACKGROUND GLOW PARTICLES
// ─────────────────────────────────────────────
// function BackgroundParticles() {
//   const meshRef = useRef<THREE.Points>(null)
//   const { geometry, material } = useMemo(() => {
//     const count = 220
//     const positions = new Float32Array(count * 3)
//     for (let i = 0; i < count; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 14
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 12
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
//     }
//     const geo = new THREE.BufferGeometry()
//     geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//     const mat = new THREE.PointsMaterial({
//       color: new THREE.Color('#FF8C42'),
//       size: 0.025,
//       sizeAttenuation: true,
//       transparent: true,
//       opacity: 0.5,
//     })
//     return { geometry: geo, material: mat }
//   }, [])

//   useFrame((_, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += delta * 0.015
//     }
//   })

//   return <points ref={meshRef} geometry={geometry} material={material} />
// }

// ─────────────────────────────────────────────
//  PREMIUM BACKGROUND GLOW PARTICLES
// ─────────────────────────────────────────────
function BackgroundParticles() {
  const meshRef = useRef<THREE.Points>(null)

  const { geometry, material } = useMemo(() => {
    const count = 1200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const palette = [
      new THREE.Color('#FF6B26'),
      new THREE.Color('#FF8C42'),
      new THREE.Color('#FFB36B'),
      new THREE.Color('#FFD2A6'),
    ]

    for (let i = 0; i < count; i++) {
      // Spread particles across a larger 3D space
      positions[i * 3] = (Math.random() - 0.5) * 24
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16 - 3

      // Different orange shades
      const color = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      // Random particle sizes
      sizes[i] = 0.035 + Math.random() * 0.075
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.PointsMaterial({
      size: 0.075,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    return { geometry: geo, material: mat }
  }, [])

  useFrame(({ clock }, delta) => {
    if (meshRef.current) {
      // Slow cinematic rotation
      meshRef.current.rotation.y += delta * 0.025
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.035

      // Subtle floating movement
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 0.12
    }
  })

  return (
    <points
      ref={meshRef}
      geometry={geometry}
      material={material}
      frustumCulled={false}
    />
  )
}

// ─────────────────────────────────────────────
//  HUD OVERLAY
// ─────────────────────────────────────────────
interface JSPCSIntroCanvasProps {
  onComplete: () => void
  onSkip: () => void
  progress: number
}

function ProgressHUD({ progress, onSkip }: { progress: number; onSkip: () => void }) {
  const pct = Math.round(progress * 100)
  const labels = [
    'SYSTEM INIT // ASSEMBLED RIG',
    'DECONSTRUCTION // GPU & SILICON',
    'EXPLODED HARDWARE SCAN',
    'REASSEMBLY & ACOUSTIC CALIBRATION',
    'JSPCS LABS REVEAL // ENTERING SITE',
  ]
  const phaseIdx = Math.min(Math.floor(progress * 5), 4)

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-8">
      {/* Top Header Row */}
      <div className="flex items-start justify-between w-full">
        {/* Left: Phase indicator */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B26] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#FF9D5C] font-bold">
              {labels[phaseIdx]}
            </span>
          </div>

          <div className="flex items-center gap-3 pl-4">
            {/* Progress bar */}
            <div className="w-32 h-[3px] bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF6B26] to-[#FFA868] rounded-full transition-all duration-100"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-white/80 font-bold">{pct}%</span>
          </div>
        </div>

        {/* Right: Brand Title */}
        <div className="flex flex-col items-end gap-0.5">
          <span className="font-mono text-[11px] font-bold tracking-[0.35em] text-white/60 uppercase">
            JSPCS
          </span>
          <span className="font-mono text-[8px] text-[#A7B5A0] tracking-wider uppercase">
            Hardware Engineering Atelier
          </span>
        </div>
      </div>

      {/* Bottom Row: Interaction Hint & Stage Dots */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-[9px] text-white/70 uppercase tracking-widest flex items-center gap-2">
            <span>Scroll or Drag to Explore</span>
            <span className="text-[#FF6B26] font-bold animate-bounce">↓</span>
          </span>
          <div className="flex gap-1.5">
            {[0.20, 0.55, 0.75, 0.90, 1.0].map((threshold, i) => (
              <div
                key={i}
                className="h-[3px] w-7 rounded-full transition-all duration-300"
                style={{ backgroundColor: progress >= threshold ? '#FF6B26' : 'rgba(255,255,255,0.2)' }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Right: Direct Jump to Homepage button */}
        <button
          onClick={onSkip}
          className="pointer-events-auto font-mono text-[10px] text-[#FF9D5C] hover:text-white uppercase tracking-widest bg-black/50 hover:bg-[#FF6B26] px-3.5 py-1.5 rounded-full border border-[#FF6B26]/40 transition-colors"
        >
          Enter Homepage ↓
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  MASTER CANVAS
// ─────────────────────────────────────────────
export function JSPCSIntroCanvas({ onComplete, onSkip, progress }: JSPCSIntroCanvasProps) {
  const chassisRef = useRef<THREE.Group>(null)
  const motherboardRef = useRef<THREE.Group>(null)
  const cpuRef = useRef<THREE.Group>(null)
  const coolerRef = useRef<THREE.Group>(null)
  const ram0Ref = useRef<THREE.Group>(null)
  const ram1Ref = useRef<THREE.Group>(null)
  const gpuRef = useRef<THREE.Group>(null)
  const glassRef = useRef<THREE.Group>(null)

  const refs: PCModelRefs = useMemo(() => ({
    chassis: chassisRef,
    motherboard: motherboardRef,
    cpu: cpuRef,
    cooler: coolerRef,
    ram0: ram0Ref,
    ram1: ram1Ref,
    gpu: gpuRef,
    glassPanel: glassRef,
  }), [])

  // return (
  //   <div className="relative w-full h-full">
  //     <Canvas
  //       shadows
  //       camera={{ position: [3.6, 1.4, 3.8], fov: 42 }}
  //       gl={{
  //         antialias: true,
  //         alpha: false,
  //         powerPreference: 'high-performance',
  //         toneMapping: THREE.ACESFilmicToneMapping,
  //         toneMappingExposure: 1.1,
  //       }}
  //       onCreated={({ gl }) => {
  //         gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
  //         gl.shadowMap.enabled = true
  //         gl.shadowMap.type = THREE.PCFSoftShadowMap
  //       }}
  //       style={{ background: '#141615' }}
  //     >
  //       <AdaptiveDpr pixelated />

  //       <StudioLights />
  //       <BackgroundParticles />

  //       <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.06}>
  //         <ExplodedPCModel refs={refs} />
  //       </Float>

  //       <SceneContents refs={refs} onComplete={onComplete} />
  //     </Canvas>

  //     <ProgressHUD progress={progress} onSkip={onSkip} />
  //   </div>
  // )
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Canvas
        dpr={[1, 1.25]}
        shadows={false}
        frameloop="always"
        camera={{
          position: [3.6, 1.4, 3.8],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        style={{
          width: '100vw',
          height: '100vh',
          background: '#141615',
        }}
      >
        <AdaptiveDpr pixelated />

        <StudioLights />
        <BackgroundParticles />

        {/* ❌ <Float> Component freeze செய்வதால், அதற்குப் பதில் direct group: */}
        {/* <group position={[0, 0, 0]}>
          <ExplodedPCModel refs={refs} />
        </group> */}

        <SceneContents refs={refs} onComplete={onComplete} />
      </Canvas>

      <ProgressHUD progress={progress} onSkip={onSkip} />
    </div>
  )
}
