'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cpu,
  Zap,
  HardDrive,
  Activity,
  Layers,
  Thermometer,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react'

interface Hotspot {
  title: string
  spec: string
  top: string
  left: string
  placement: 'left' | 'right'
  color: string
}

interface StageInfo {
  id: string
  step: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  ambientAura: string
  telemetry: { label: string; value: string; status?: string }[]
  serviceLink: { href: string; label: string }
  hotspots: Hotspot[]
}

const STAGES: StageInfo[] = [
  {
    id: 'system-overview',
    step: 'STAGE 01 // 04',
    title: 'Titan Apex Hardware Assembly',
    subtitle: 'Dual-Chamber Airflow & Liquid Architecture',
    description: 'Bespoke precision workstation designed for sustained 100% computational load. Dual 360mm copper radiators, custom sleeved cabling, and zero-turbulence acoustic dampening.',
    image: '/black_orange.png',
    imageAlt: 'Titan Apex Custom Liquid Cooled Workstation Rig',
    ambientAura: 'from-burnt-500/25 via-burnt-500/10 to-transparent',
    telemetry: [
      { label: 'Thermal Delta', value: '<48°C Full Load', status: 'Optimal' },
      { label: 'Sound Pressure', value: '<22 dBA', status: 'Silent' },
      { label: 'Bench Protocol', value: '24hr Prime95 & FurMark', status: 'Passed' },
    ],
    serviceLink: {
      href: '/custom-gaming-pc-build-in-madurai',
      label: 'Explore Custom PC Build Protocols',
    },
    hotspots: [
      {
        title: 'Dual 360mm Radiator',
        spec: 'Hardline Acrylic Cooling Loop',
        top: '22%',
        left: '42%',
        placement: 'right',
        color: 'bg-burnt-500',
      },
      {
        title: 'Custom Sleeved PSU Cables',
        spec: '1000W 80+ Gold ATX 3.0',
        top: '74%',
        left: '36%',
        placement: 'right',
        color: 'bg-sage-400',
      },
    ],
  },
  {
    id: 'motherboard-bga',
    step: 'STAGE 02 // 04',
    title: 'Motherboard VRM & BGA Silicon',
    subtitle: 'Component-Level Diagnostic & Micro-Soldering',
    description: 'When other service centers recommend costly board replacements, our laboratory isolates individual damaged MOSFETs, PWM controller ICs, and 0402 ceramic capacitors on the 19V/12V rails.',
    image: '/black_green_board.jpg',
    imageAlt: 'Chip-Level Motherboard Diagnostic & BGA VRM Traces',
    ambientAura: 'from-emerald-500/20 via-sage-400/10 to-transparent',
    telemetry: [
      { label: 'SMD Tolerance', value: '0.01mm Precision', status: 'Calibrated' },
      { label: 'Power Rail Diagnosis', value: '19V / 5V / 3.3V Rails', status: 'Active' },
      { label: 'Component Sourcing', value: '100% OEM ICs', status: 'Certified' },
    ],
    serviceLink: {
      href: '/motherboard-repair-madurai',
      label: 'Inspect Chip-Level Motherboard Repair',
    },
    hotspots: [
      {
        title: '19V Rail PWM MOSFETs',
        spec: 'Short Circuit Rail Isolation',
        top: '34%',
        left: '36%',
        placement: 'right',
        color: 'bg-burnt-500',
      },
      {
        title: 'VCore Power Stage Array',
        spec: 'Oscilloscope Waveform Validated',
        top: '58%',
        left: '60%',
        placement: 'left',
        color: 'bg-sage-400',
      },
    ],
  },
  {
    id: 'gpu-thermals',
    step: 'STAGE 03 // 04',
    title: 'GPU Compute & Thermal Fin Stacks',
    subtitle: 'NVIDIA RTX 40-Series Reballing & Repasting',
    description: 'Overheating gaming laptops and graphics cards suffer from dried thermal paste and micro-fractured BGA solder balls. We restore thermal dissipation using high-grade Kryonaut and micro-reballing.',
    image: '/black_blue.png',
    imageAlt: 'NVIDIA RTX 40-Series GPU Compute and Thermal Architecture',
    ambientAura: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    telemetry: [
      { label: 'VRAM Density', value: '24GB GDDR6X Micron', status: 'High Speed' },
      { label: 'Thermal Interface', value: 'Kryonaut / Phase-Change', status: '15°C Drop' },
      { label: 'BGA Rework', value: 'Lead-Free Reball Station', status: '90-Day Warranty' },
    ],
    serviceLink: {
      href: '/gpu-repair-service-madurai',
      label: 'Inspect GPU BGA & Laptop Thermal Services',
    },
    hotspots: [
      {
        title: 'RTX 4090 GPU Die',
        spec: 'BGA Reballing & Cold Joint Fix',
        top: '52%',
        left: '40%',
        placement: 'right',
        color: 'bg-burnt-500',
      },
      {
        title: 'Vapor Chamber Fin Stack',
        spec: 'Mirror-Finish Copper Heatpipes',
        top: '68%',
        left: '62%',
        placement: 'left',
        color: 'bg-sage-400',
      },
    ],
  },
  {
    id: 'storage-memory',
    step: 'STAGE 04 // 04',
    title: 'Gen5 NVMe SSD & DDR5 Memory Arrays',
    subtitle: 'Forensic Data Recovery & Zero-Loss Clones',
    description: 'Instantaneous 7,450MB/s bitwise transfer rates with zero data loss migration. Unreadable drives and corrupted partitions are extracted in our clean laboratory with dedicated NAND flashing tools.',
    image: '/perfect.png',
    imageAlt: 'Gen5 NVMe High-Speed Solid-State and DDR5 Memory Arrays',
    ambientAura: 'from-amber-400/20 via-burnt-500/10 to-transparent',
    telemetry: [
      { label: 'Read Speed', value: '7,450 MB/s Gen4/Gen5', status: 'Peak' },
      { label: 'Data Recovery Rate', value: '95% Retrieval Success', status: 'Forensic' },
      { label: 'OS Migration Time', value: 'Under 45 Minutes', status: 'Zero Data Loss' },
    ],
    serviceLink: {
      href: '/ssd-upgrade-service-madurai',
      label: 'Inspect SSD Clones & Data Recovery',
    },
    hotspots: [
      {
        title: 'PCIe 5.0 M.2 Heatsink',
        spec: 'Bitwise 1:1 NVMe OS Migration',
        top: '56%',
        left: '46%',
        placement: 'right',
        color: 'bg-burnt-500',
      },
      {
        title: 'DDR5 6000MHz Memory Bank',
        spec: 'Multi-Channel Low Latency CL30',
        top: '30%',
        left: '62%',
        placement: 'left',
        color: 'bg-sage-400',
      },
    ],
  },
]

export default function HardwareArchitectureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStageIndex, setActiveStageIndex] = useState(0)

  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smooth spring for camera zoom and rotational tilt
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  })

  // Responsive transforms mapped to scroll progress
  const scale = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 1.08, 1.14, 1.06])
  const rotateY = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [-6, 8, -8, 4])
  const rotateX = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [4, -4, 6, -2])

  // Update active stage based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.25) {
        setActiveStageIndex(0)
      } else if (latest < 0.50) {
        setActiveStageIndex(1)
      } else if (latest < 0.75) {
        setActiveStageIndex(2)
      } else {
        setActiveStageIndex(3)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const goToStage = (idx: number) => {
    const clampedIdx = Math.max(0, Math.min(STAGES.length - 1, idx))
    setActiveStageIndex(clampedIdx)
    if (typeof window !== 'undefined' && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight
      if (totalScrollable > 0) {
        const targetScrollTop = window.scrollY + rect.top + (clampedIdx / 3) * totalScrollable
        window.scrollTo({ top: targetScrollTop, behavior: 'smooth' })
      }
    }
  }

  const currentStage = STAGES[activeStageIndex]

  return (
    <section
      id="hardware-architecture"
      ref={containerRef}
      className="relative bg-graphite-900 text-ivory-100 border-t border-white/10 min-h-screen lg:min-h-[300vh]"
    >
      {/* Sticky Viewport Container */}
      <div className="lg:sticky lg:top-0 min-h-screen lg:h-screen w-full flex flex-col justify-between overflow-hidden atelier-grid-dark px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 z-20">
        
        {/* Ambient Hardware Lighting */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-10 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-burnt-500/10 rounded-full blur-[100px] sm:blur-[140px]" />
          <div className="absolute bottom-10 -right-10 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-sage-400/10 rounded-full blur-[100px] sm:blur-[140px]" />
        </div>

        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 relative z-30">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-400">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>Scroll-Driven Hardware Exploration</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              Anatomy of Precision Silicon & Thermal Architecture
            </h2>
          </div>

          {/* Stage Step Indicators & Navigation Arrows */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-2xl">
              <button
                onClick={() => goToStage(activeStageIndex - 1)}
                disabled={activeStageIndex === 0}
                aria-label="Previous hardware stage"
                className="p-1.5 rounded-xl text-ivory-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {STAGES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToStage(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    activeStageIndex === idx
                      ? 'bg-burnt-500 text-white shadow-md shadow-burnt-500/25'
                      : 'text-ivory-300/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>0{idx + 1}</span>
                  <span className="hidden md:inline text-[11px] font-sans font-medium">
                    {idx === 0 ? 'Rig' : idx === 1 ? 'Board' : idx === 2 ? 'GPU' : 'Memory'}
                  </span>
                </button>
              ))}
              <button
                onClick={() => goToStage(activeStageIndex + 1)}
                disabled={activeStageIndex === STAGES.length - 1}
                aria-label="Next hardware stage"
                className="p-1.5 rounded-xl text-ivory-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Showcase Grid */}
        <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-4 relative z-30">
          
          {/* Left Column: Interactive Telemetry & Narrative (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs font-bold text-burnt-400 uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{currentStage.step}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                    {currentStage.title}
                  </h3>
                  <p className="text-sm font-mono text-sage-400 font-semibold">
                    {currentStage.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed font-sans">
                  {currentStage.description}
                </p>

                {/* Telemetry Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {currentStage.telemetry.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1"
                    >
                      <span className="text-[10px] font-mono font-bold uppercase text-ivory-300/60 block">
                        {t.label}
                      </span>
                      <div className="text-xs sm:text-sm font-mono font-black text-white">
                        {t.value}
                      </div>
                      {t.status && (
                        <div className="inline-flex items-center gap-1 text-[10px] font-mono text-sage-400">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>{t.status}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Direct Engineering Action Link */}
                <div className="pt-3">
                  <Link
                    href={currentStage.serviceLink.href}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-burnt-500/25 hover:-translate-y-0.5"
                  >
                    <span>{currentStage.serviceLink.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: 3D Hardware Rig with Animated Hotspots (Col 6-12) */}
          <div
            className="lg:col-span-7 relative flex justify-center items-center"
            style={{ perspective: 1200 }}
          >
            {/* 3D Hardware Canvas Container */}
            <div className="relative w-full max-w-[520px] aspect-[4/3] sm:aspect-square rounded-3xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-white/15 overflow-hidden shadow-2xl relative">
              
              {/* Dynamic Atmospheric Radial Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${currentStage.ambientAura} transition-all duration-700 pointer-events-none`}
              />

              {/* Hardware Model with Smooth 3D Perspective Rotation & Morphing Transitions */}
              <motion.div
                style={{
                  scale,
                  rotateY,
                  rotateX,
                }}
                className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStage.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.06 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="relative w-full h-full flex items-center justify-center pointer-events-none"
                  >
                    <Image
                      src={currentStage.image}
                      alt={currentStage.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter contrast-105"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Dedicated Hotspot UI Layer (Rendered cleanly on top of the 3D visual plane with z-50) */}
              <div className="absolute inset-0 pointer-events-none z-40">
                <AnimatePresence>
                  {currentStage.hotspots.map((spot, i) => (
                    <motion.div
                      key={`${currentStage.id}-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.25 }}
                      style={{
                        top: spot.top,
                        left: spot.left,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer z-50"
                    >
                      {/* Pulsing Pin Marker */}
                      <div className="relative flex items-center justify-center">
                        <span className={`w-4 h-4 rounded-full ${spot.color} animate-ping opacity-75 absolute`} />
                        <span className={`w-3.5 h-3.5 rounded-full ${spot.color} ring-4 ring-graphite-950 shadow-xl relative z-10 flex items-center justify-center`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </span>
                      </div>

                      {/* Direction-Aware Callout Popover (Safe from clipping / overlapping) */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 z-50 pointer-events-none whitespace-normal sm:whitespace-nowrap max-w-[130px] xs:max-w-[160px] sm:max-w-none transition-all duration-200 ${
                          spot.placement === 'left' ? 'right-full mr-2 sm:mr-3.5' : 'left-full ml-2 sm:ml-3.5'
                        }`}
                      >
                        <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-graphite-950/95 backdrop-blur-xl border border-white/20 shadow-2xl text-left">
                          <div className="text-[10px] sm:text-[11px] font-mono font-bold text-white flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${spot.color} shrink-0`} />
                            <span className="leading-tight">{spot.title}</span>
                          </div>
                          <div className="text-[9px] sm:text-[10px] font-mono text-ivory-300/80 mt-0.5 leading-tight">
                            {spot.spec}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Bench Certification Stamp */}
              <div className="absolute bottom-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-sage-400 flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ESD Class-1 Calibrated Bench</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Progress Tracker & Scroll Hint */}
        <div className="max-w-7xl mx-auto w-full pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-ivory-300/60 relative z-30">
          <div className="flex items-center gap-2">
            <span>Scroll progress:</span>
            <div className="w-24 sm:w-32 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="h-full bg-burnt-500 origin-left"
              />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-burnt-400 font-semibold animate-pulse">
            <span>Continue scrolling for Component Diagnostics & Laboratory Benches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </section>
  )
}
