'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ─────────────────────────────────────────────
//  HIGH-CONTRAST VISIBLE PALETTE
// ─────────────────────────────────────────────
const CHASSIS_TITANIUM  = '#3A3F3D'  // Visible satin titanium (not black)
const CHASSIS_ACCENT    = '#4E5552'  // Lighter brushed metal highlight
const MOTHERBOARD_PCB   = '#1B2A22'  // Rich dark emerald PCB
const HEATSINK_SILVER   = '#8E9491'  // Brushed silver aluminum
const COPPER_HEATPIPE   = '#D97736'  // Warm metallic copper
const BURNT_ORANGE_GLOW = '#FF6B26'  // High-intensity emissive accent
const SAGE_GLOW         = '#98C9A3'  // Secondary circuit trace glow
const GLASS_TINT        = '#25332C'  // Smoked transparent glass
const IVORY_WHITE       = '#F8F6F0'  // Clean white labels

function color(h: string) { return new THREE.Color(h) }

// Material factory helpers with balanced PBR so they are NEVER black
function satinMetal(c: string, roughness = 0.35, metalness = 0.65) {
  return new THREE.MeshStandardMaterial({
    color: color(c),
    roughness,
    metalness,
  })
}

function glowingMat(c: string, intensity = 2.2) {
  return new THREE.MeshStandardMaterial({
    color: color(c),
    emissive: color(c),
    emissiveIntensity: intensity,
    roughness: 0.2,
    metalness: 0.1,
  })
}

// ─────────────────────────────────────────────
//  COMPONENT: CHASSIS TOWER & FRAME
// ─────────────────────────────────────────────
function ChassisFrameMesh({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const metalMat = useMemo(() => satinMetal(CHASSIS_TITANIUM, 0.4, 0.55), [])
  const accentMat = useMemo(() => satinMetal(CHASSIS_ACCENT, 0.3, 0.7), [])
  const glowMat = useMemo(() => glowingMat(BURNT_ORANGE_GLOW, 1.8), [])

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>}>
      {/* Rear I/O Frame Panel */}
      <mesh position={[0, 0, -1.35]} material={metalMat} castShadow receiveShadow>
        <boxGeometry args={[1.7, 3.1, 0.08]} />
      </mesh>

      {/* Motherboard Backplate Tray */}
      <mesh position={[-0.05, 0.35, 0]} material={metalMat} receiveShadow>
        <boxGeometry args={[0.08, 2.3, 2.5]} />
      </mesh>

      {/* Top Radiator Exhaust Grille */}
      <mesh position={[0, 1.55, 0]} material={accentMat} castShadow>
        <boxGeometry args={[1.7, 0.08, 2.7]} />
      </mesh>
      {/* Top Hex Ventilation Slots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, 1.6, -0.9 + i * 0.26]} material={metalMat}>
          <boxGeometry args={[1.3, 0.02, 0.12]} />
        </mesh>
      ))}

      {/* Bottom PSU Shroud Compartment */}
      <mesh position={[0, -1.05, 0]} material={metalMat} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.9, 2.7]} />
      </mesh>
      {/* PSU Shroud Accent Line with Orange LED Glow */}
      <mesh position={[0.855, -0.75, 0]} material={glowMat}>
        <boxGeometry args={[0.02, 0.04, 2.5]} />
      </mesh>
      {/* PSU Shroud Brand Plate */}
      <mesh position={[0.855, -1.05, 0.5]} material={accentMat}>
        <boxGeometry args={[0.02, 0.28, 1.0]} />
      </mesh>

      {/* 4 Chassis Feet with rubber pads */}
      {[[-0.7, -1.55, 1.1], [0.7, -1.55, 1.1], [-0.7, -1.55, -1.1], [0.7, -1.55, -1.1]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} material={accentMat}>
          <boxGeometry args={[0.2, 0.12, 0.35]} />
        </mesh>
      ))}
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: TRIPLE FRONT INTAKE FANS
// ─────────────────────────────────────────────
function FrontIntakeMesh() {
  const fanRingMat = useMemo(() => glowingMat(BURNT_ORANGE_GLOW, 2.5), [])
  const bladeMat   = useMemo(() => satinMetal('#2D3330', 0.5, 0.3), [])
  const frameMat   = useMemo(() => satinMetal(CHASSIS_TITANIUM, 0.4, 0.6), [])

  const f1 = useRef<THREE.Group>(null)
  const f2 = useRef<THREE.Group>(null)
  const f3 = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    const s = delta * 3.5
    if (f1.current) f1.current.rotation.z += s
    if (f2.current) f2.current.rotation.z += s
    if (f3.current) f3.current.rotation.z += s
  })

  return (
    <group position={[0, 0.35, 1.4]}>
      {/* Front Bezel Frame */}
      <mesh position={[0, 0, 0]} material={frameMat}>
        <boxGeometry args={[1.68, 2.3, 0.1]} />
      </mesh>

      {/* 3 Circular Intake Fan Units stacked vertically */}
      {[-0.68, 0, 0.68].map((y, i) => {
        const ref = i === 0 ? f1 : i === 1 ? f2 : f3
        return (
          <group key={i} position={[0, y, 0.05]}>
            {/* Glowing Halo Ring */}
            <mesh material={fanRingMat}>
              <ringGeometry args={[0.28, 0.32, 28]} />
            </mesh>
            {/* Fan Blades Group */}
            <group ref={ref}>
              {Array.from({ length: 7 }).map((_, bi) => (
                <mesh key={bi} rotation={[0, 0, (bi * Math.PI * 2) / 7]} material={bladeMat}>
                  <boxGeometry args={[0.06, 0.26, 0.015]} />
                </mesh>
              ))}
              {/* Center Hub */}
              <mesh material={frameMat}>
                <cylinderGeometry args={[0.1, 0.1, 0.03, 16]} />
              </mesh>
            </group>
          </group>
        )
      })}
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: ATX MOTHERBOARD
// ─────────────────────────────────────────────
function MotherboardMesh({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const pcbMat      = useMemo(() => satinMetal(MOTHERBOARD_PCB, 0.6, 0.2), [])
  const silverHeatsink = useMemo(() => satinMetal(HEATSINK_SILVER, 0.25, 0.85), [])
  const orangeTrace = useMemo(() => glowingMat(BURNT_ORANGE_GLOW, 1.4), [])
  const goldContact = useMemo(() => satinMetal('#D4AF37', 0.2, 0.95), [])

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>} position={[0, 0.45, 0]}>
      {/* Main Board PCB */}
      <mesh material={pcbMat} receiveShadow castShadow>
        <boxGeometry args={[0.05, 2.1, 1.9]} />
      </mesh>

      {/* Heavy VRM Power Stage Heatsinks (Top & Left of CPU) */}
      <mesh position={[0.06, 0.78, -0.15]} material={silverHeatsink} castShadow>
        <boxGeometry args={[0.08, 0.28, 0.85]} />
      </mesh>
      <mesh position={[0.06, 0.38, -0.65]} material={silverHeatsink} castShadow>
        <boxGeometry args={[0.08, 0.72, 0.22]} />
      </mesh>

      {/* Chipset Heatsink with Orange Accent Stripe */}
      <mesh position={[0.06, -0.55, 0.45]} material={silverHeatsink} castShadow>
        <boxGeometry args={[0.07, 0.55, 0.65]} />
      </mesh>
      <mesh position={[0.1, -0.55, 0.45]} material={orangeTrace}>
        <boxGeometry args={[0.01, 0.04, 0.6]} />
      </mesh>

      {/* Dual M.2 Shield Armor Plates */}
      <mesh position={[0.05, -0.12, 0.3]} material={silverHeatsink} castShadow>
        <boxGeometry args={[0.04, 0.12, 0.75]} />
      </mesh>
      <mesh position={[0.05, -0.72, 0.1]} material={silverHeatsink} castShadow>
        <boxGeometry args={[0.04, 0.12, 0.75]} />
      </mesh>

      {/* Primary PCIe Gen 5 x16 Reinforced Slot */}
      <mesh position={[0.05, 0.05, 0.1]} material={silverHeatsink}>
        <boxGeometry args={[0.06, 0.08, 1.25]} />
      </mesh>
      <mesh position={[0.085, 0.05, 0.1]} material={goldContact}>
        <boxGeometry args={[0.01, 0.02, 1.15]} />
      </mesh>

      {/* Gold Audio Capacitors Column */}
      {[-0.6, -0.45, -0.3, -0.15].map((z, i) => (
        <mesh key={i} position={[0.05, -0.75, z]} material={goldContact}>
          <cylinderGeometry args={[0.035, 0.035, 0.12, 12]} />
        </mesh>
      ))}

      {/* Motherboard Illuminated Circuit Bus Lines */}
      {[-0.4, 0, 0.4].map((z, i) => (
        <mesh key={i} position={[0.03, 0.1 + i * 0.15, z]} material={orangeTrace}>
          <boxGeometry args={[0.005, 0.015, 0.4]} />
        </mesh>
      ))}
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: CPU (LGA SOCKET & SILICON IHS)
// ─────────────────────────────────────────────
function CPUMesh({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const pcbSubstrate = useMemo(() => satinMetal('#163520', 0.5, 0.3), [])
  const nickelIHS    = useMemo(() => satinMetal('#E6ECE8', 0.15, 0.95), [])
  const goldPins     = useMemo(() => satinMetal('#D4AF37', 0.2, 0.9), [])

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>} position={[0.05, 0.55, -0.15]}>
      {/* CPU Substrate */}
      <mesh material={pcbSubstrate} castShadow>
        <boxGeometry args={[0.03, 0.52, 0.52]} />
      </mesh>
      {/* Gleaming Nickel Heatspreader (IHS) */}
      <mesh position={[0.025, 0, 0]} material={nickelIHS} castShadow>
        <boxGeometry args={[0.025, 0.46, 0.46]} />
      </mesh>
      {/* Gold retention lever */}
      <mesh position={[0.03, 0.28, 0]} material={goldPins}>
        <boxGeometry args={[0.015, 0.04, 0.5]} />
      </mesh>
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: LIQUID AIO COOLER PUMP & TUBES
// ─────────────────────────────────────────────
function CoolerMesh({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const pumpBody = useMemo(() => satinMetal(CHASSIS_TITANIUM, 0.3, 0.7), [])
  const copperBase = useMemo(() => satinMetal(COPPER_HEATPIPE, 0.15, 0.92), [])
  const infinityHalo = useMemo(() => glowingMat(BURNT_ORANGE_GLOW, 3.0), [])
  const tubeMat = useMemo(() => satinMetal('#1A1E1C', 0.6, 0.1), [])

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>} position={[0.15, 0.55, -0.15]}>
      {/* Pure Mirror Copper Coldplate Base */}
      <mesh position={[-0.03, 0, 0]} material={copperBase} castShadow>
        <boxGeometry args={[0.02, 0.44, 0.44]} />
      </mesh>

      {/* Cylindrical Pump Head Housing */}
      <mesh rotation={[0, 0, Math.PI / 2]} material={pumpBody} castShadow>
        <cylinderGeometry args={[0.26, 0.26, 0.14, 28]} />
      </mesh>

      {/* Infinity Mirror Face with Glowing Burnt Orange Halo */}
      <mesh position={[0.075, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={infinityHalo}>
        <ringGeometry args={[0.14, 0.22, 28]} />
      </mesh>
      <mesh position={[0.076, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={infinityHalo}>
        <circleGeometry args={[0.06, 16]} />
      </mesh>

      {/* Braided Liquid Tubes connecting toward top radiator */}
      <mesh position={[0.05, 0.32, -0.12]} rotation={[0.4, 0, 0.2]} material={tubeMat} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.75, 14]} />
      </mesh>
      <mesh position={[0.05, 0.32, 0.12]} rotation={[-0.4, 0, 0.2]} material={tubeMat} castShadow>
        <cylinderGeometry args={[0.035, 0.035, 0.75, 14]} />
      </mesh>
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: DUAL-CHANNEL DDR5 RAM MODULES
// ─────────────────────────────────────────────
function RAMStick({ groupRef, offsetZ }: { groupRef: React.RefObject<THREE.Group | null>, offsetZ: number }) {
  const heatsink = useMemo(() => satinMetal(HEATSINK_SILVER, 0.3, 0.8), [])
  const rgbLightbar = useMemo(() => glowingMat('#FF9533', 2.8), [])

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>} position={[0.06, 0.58, 0.25 + offsetZ]}>
      {/* Anodized Aluminum Heatspreader Body */}
      <mesh material={heatsink} castShadow>
        <boxGeometry args={[0.04, 0.72, 0.06]} />
      </mesh>
      {/* Top Diffused RGB Lightbar */}
      <mesh position={[0.02, 0.38, 0]} material={rgbLightbar}>
        <boxGeometry args={[0.025, 0.05, 0.065]} />
      </mesh>
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: TRIPLE-FAN FLAGSHIP WORKSTATION GPU
// ─────────────────────────────────────────────
function GPUMesh({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const shroudMat   = useMemo(() => satinMetal(CHASSIS_TITANIUM, 0.3, 0.75), [])
  const finStackMat = useMemo(() => satinMetal(HEATSINK_SILVER, 0.2, 0.9), [])
  const copperPipe  = useMemo(() => satinMetal(COPPER_HEATPIPE, 0.15, 0.9), [])
  const logoGlow    = useMemo(() => glowingMat(BURNT_ORANGE_GLOW, 2.8), [])
  const bladeMat    = useMemo(() => satinMetal('#242A27', 0.5, 0.25), [])

  const fan1 = useRef<THREE.Group>(null)
  const fan2 = useRef<THREE.Group>(null)
  const fan3 = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    const s = delta * 4.2
    if (fan1.current) fan1.current.rotation.z -= s
    if (fan2.current) fan2.current.rotation.z -= s
    if (fan3.current) fan3.current.rotation.z -= s
  })

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>} position={[0.42, 0.05, 0.1]}>
      {/* Main Massive Triple-Slot Card Body */}
      <mesh material={shroudMat} castShadow receiveShadow>
        <boxGeometry args={[0.68, 0.34, 2.3]} />
      </mesh>

      {/* Dense Aluminum Heatsink Fins (Visible from bottom/top) */}
      <mesh position={[0, -0.08, 0]} material={finStackMat} castShadow>
        <boxGeometry args={[0.62, 0.16, 2.2]} />
      </mesh>

      {/* Copper Heatpipes running through the heatsink */}
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={i} position={[x, -0.08, 0]} rotation={[Math.PI / 2, 0, 0]} material={copperPipe}>
          <cylinderGeometry args={[0.02, 0.02, 2.25, 10]} />
        </mesh>
      ))}

      {/* Side Illuminated "JSPCS LABS // RTX TITAN" Logo Bar */}
      <mesh position={[0.345, 0.08, 0]} material={logoGlow}>
        <boxGeometry args={[0.015, 0.08, 1.4]} />
      </mesh>

      {/* 3 Active Spinning GPU Cooling Fans */}
      {[-0.65, 0, 0.65].map((z, i) => {
        const ref = i === 0 ? fan1 : i === 1 ? fan2 : fan3
        return (
          <group key={i} position={[0.345, -0.04, z]} rotation={[0, Math.PI / 2, 0]}>
            {/* Fan Recess Ring */}
            <mesh material={logoGlow}>
              <ringGeometry args={[0.22, 0.25, 24]} />
            </mesh>
            {/* Spinning Fan Blades */}
            <group ref={ref}>
              {Array.from({ length: 9 }).map((_, bi) => (
                <mesh key={bi} rotation={[0, 0, (bi * Math.PI * 2) / 9]} material={bladeMat}>
                  <boxGeometry args={[0.04, 0.21, 0.015]} />
                </mesh>
              ))}
              <mesh material={shroudMat}>
                <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} />
              </mesh>
            </group>
          </group>
        )
      })}
    </group>
  )
}

// ─────────────────────────────────────────────
//  COMPONENT: TEMPERED GLASS SIDE PANEL
// ─────────────────────────────────────────────
function GlassPanelMesh({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const glassMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: color(GLASS_TINT),
    roughness: 0.04,
    metalness: 0.1,
    transmission: 0.88,
    thickness: 0.5,
    opacity: 0.45,
    transparent: true,
    side: THREE.DoubleSide,
  }), [])

  const frameMat = useMemo(() => satinMetal(CHASSIS_ACCENT, 0.3, 0.7), [])
  const screwMat = useMemo(() => glowingMat(BURNT_ORANGE_GLOW, 1.5), [])

  return (
    <group ref={groupRef as React.RefObject<THREE.Group>} position={[0.88, 0.35, 0]}>
      {/* Translucent Smoked Glass Pane */}
      <mesh material={glassMat} castShadow>
        <boxGeometry args={[0.02, 2.3, 2.65]} />
      </mesh>

      {/* Minimalist Border Trim */}
      <mesh position={[0, 1.13, 0]} material={frameMat}>
        <boxGeometry args={[0.03, 0.05, 2.65]} />
      </mesh>
      <mesh position={[0, -1.13, 0]} material={frameMat}>
        <boxGeometry args={[0.03, 0.05, 2.65]} />
      </mesh>

      {/* 4 Anodized Orange Corner Thumbscrews */}
      {[[-1.0, 1.2], [1.0, 1.2], [-1.0, -1.2], [1.0, -1.2]].map(([y, z], i) => (
        <mesh key={i} position={[0.02, y, z]} rotation={[0, 0, Math.PI / 2]} material={screwMat}>
          <cylinderGeometry args={[0.04, 0.04, 0.03, 16]} />
        </mesh>
      ))}
    </group>
  )
}

// ─────────────────────────────────────────────
//  MASTER EXPORT: ALL HARDWARE GEOMETRIES
// ─────────────────────────────────────────────
export interface PCModelRefs {
  chassis:     React.RefObject<THREE.Group | null>
  motherboard: React.RefObject<THREE.Group | null>
  cpu:         React.RefObject<THREE.Group | null>
  cooler:      React.RefObject<THREE.Group | null>
  ram0:        React.RefObject<THREE.Group | null>
  ram1:        React.RefObject<THREE.Group | null>
  gpu:         React.RefObject<THREE.Group | null>
  glassPanel:  React.RefObject<THREE.Group | null>
}

export default function ExplodedPCModel({ refs }: { refs: PCModelRefs }) {
  return (
    <group position={[0, 0, 0]}>
      {/* 1. Chassis Tower Body */}
      <ChassisFrameMesh groupRef={refs.chassis} />

      {/* 2. Front 3x Intake Fans */}
      <FrontIntakeMesh />

      {/* 3. ATX Motherboard Core */}
      <MotherboardMesh groupRef={refs.motherboard} />

      {/* 4. CPU Silicon */}
      <CPUMesh groupRef={refs.cpu} />

      {/* 5. AIO Liquid Cooler Pump */}
      <CoolerMesh groupRef={refs.cooler} />

      {/* 6. Dual DDR5 RAM Sticks */}
      <RAMStick groupRef={refs.ram0} offsetZ={0} />
      <RAMStick groupRef={refs.ram1} offsetZ={0.14} />

      {/* 7. Flagship Triple-Fan GPU */}
      <GPUMesh groupRef={refs.gpu} />

      {/* 8. Smoked Tempered Glass Panel */}
      <GlassPanelMesh groupRef={refs.glassPanel} />
    </group>
  )
}
