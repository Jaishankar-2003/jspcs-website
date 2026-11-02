'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Cpu, Zap, HardDrive, MessageCircle, Layers, ArrowRight, ShieldCheck } from 'lucide-react'

const pcBuilds = [
  {
    id: 'titan-4090',
    category: 'flagship',
    image: '/pc build/build1.jpeg',
    title: 'Titan 4K Extreme Beast',
    tier: 'TIER: FLAGSHIP APEX',
    tagline: 'Uncompromised 4K 144Hz AAA Gaming & Unreal Engine 5 Dev',
    specs: {
      cpu: 'Intel Core i9-14900K // 24-Core 6.0GHz',
      gpu: 'NVIDIA GeForce RTX 4090 24GB GDDR6X',
      ram: '64GB Corsair Dominator DDR5 6000MHz',
      storage: '2TB Samsung 990 PRO Gen4 NVMe (7450MB/s)',
      cooling: '360mm AIO Liquid Cooling Dual Radiator',
      psu: '1000W 80+ Gold Fully Modular ATX 3.0',
    },
    benchmarks: {
      '1080p': { cyberpunk: '185 FPS', competitive: '750+ FPS', render: '4.5x Realtime' },
      '1440p': { cyberpunk: '155 FPS', competitive: '600+ FPS', render: '3.8x Realtime' },
      '4K': { cyberpunk: '115 FPS', competitive: '380+ FPS', render: '2.9x Realtime' },
    },
    accent: 'border-burnt-500/40',
  },
  {
    id: 'studio-workstation',
    category: 'workstation',
    image: '/pc build/build2.jpeg',
    title: 'DaVinci & Blender Studio Rig',
    tier: 'TIER: WORKSTATION PRO',
    tagline: 'Multi-stream 8K RED RAW editing & CUDA Raytracing',
    specs: {
      cpu: 'AMD Ryzen 9 7950X // 16-Core 32-Thread',
      gpu: 'NVIDIA GeForce RTX 4080 Super 16GB',
      ram: '64GB Kingston Fury Beast DDR5',
      storage: '2TB NVMe OS + 4TB Enterprise Scratch Disk',
      cooling: 'High-Static Pressure Silent Air Architecture',
      psu: '850W 80+ Platinum Ultra-Quiet Modular',
    },
    benchmarks: {
      '1080p': { cyberpunk: '160 FPS', competitive: '650+ FPS', render: '4.2x Realtime' },
      '1440p': { cyberpunk: '135 FPS', competitive: '480+ FPS', render: '3.4x Realtime' },
      '4K': { cyberpunk: '92 FPS', competitive: '290+ FPS', render: '2.5x Realtime' },
    },
    accent: 'border-sage-400/40',
  },
  {
    id: 'esports-1440p',
    category: 'gaming',
    image: '/pc build/build3.jpeg',
    title: 'Competitive 1440p Apex Rig',
    tier: 'TIER: HIGH REFRESH GAMING',
    tagline: 'Solid 240+ FPS in CS2, Valorant, Apex Legends & Warzone',
    specs: {
      cpu: 'AMD Ryzen 7 7800X3D // 3D V-Cache Gaming King',
      gpu: 'NVIDIA GeForce RTX 4070 Super 12GB',
      ram: '32GB G.Skill Ripjaws DDR5 6000MHz CL30',
      storage: '1TB WD Black SN850X NVMe SSD',
      cooling: '240mm ARGB Dual Fan Liquid Cooler',
      psu: '750W 80+ Gold High-Efficiency PSU',
    },
    benchmarks: {
      '1080p': { cyberpunk: '145 FPS', competitive: '580+ FPS', render: '3.0x Realtime' },
      '1440p': { cyberpunk: '110 FPS', competitive: '340+ FPS', render: '2.4x Realtime' },
      '4K': { cyberpunk: '70 FPS', competitive: '190+ FPS', render: '1.7x Realtime' },
    },
    accent: 'border-white/20',
  },
  {
    id: 'sff-mini-itx',
    category: 'sff',
    image: '/pc build/build4.jpeg',
    title: 'SFF Stealth Mini-ITX Studio',
    tier: 'TIER: COMPACT ARCHITECTURE',
    tagline: 'Full desktop power inside an 11-litre backpack-friendly footprint',
    specs: {
      cpu: 'Intel Core i7-14700K // 20-Core Turbo',
      gpu: 'NVIDIA GeForce RTX 4070 Dual Fan SFF',
      ram: '32GB Low-Profile DDR5 5600MHz',
      storage: '2TB Crucial T500 Gen4 NVMe SSD',
      cooling: 'Custom Mesh Airflow Spine Architecture',
      psu: '750W SFX Modular Gold Power Supply',
    },
    benchmarks: {
      '1080p': { cyberpunk: '138 FPS', competitive: '520+ FPS', render: '2.8x Realtime' },
      '1440p': { cyberpunk: '102 FPS', competitive: '310+ FPS', render: '2.2x Realtime' },
      '4K': { cyberpunk: '65 FPS', competitive: '170+ FPS', render: '1.5x Realtime' },
    },
    accent: 'border-burnt-500/40',
  },
  {
    id: 'stealth-silent',
    category: 'workstation',
    image: '/pc build/build5.jpeg',
    title: 'Acoustic Silent Studio Tower',
    tier: 'TIER: RECORDING & AUDIO',
    tagline: 'Under 18dB sound pressure at sustained 100% processing load',
    specs: {
      cpu: 'AMD Ryzen 7 7700 // 8-Core Efficient',
      gpu: 'NVIDIA RTX 4060 Ti 16GB Creator Edition',
      ram: '32GB DDR5 5200MHz',
      storage: '2TB Silent Solid-State NVMe Arrays',
      cooling: 'Full BeQuiet Dark Rock Pro Tower',
      psu: '650W Pure Power Gold Silent Wing Fan',
    },
    benchmarks: {
      '1080p': { cyberpunk: '115 FPS', competitive: '440+ FPS', render: '2.4x Realtime' },
      '1440p': { cyberpunk: '82 FPS', competitive: '260+ FPS', render: '1.8x Realtime' },
      '4K': { cyberpunk: '48 FPS', competitive: '130+ FPS', render: '1.2x Realtime' },
    },
    accent: 'border-sage-400/40',
  },
  {
    id: 'budget-sweetspot',
    category: 'budget',
    image: '/pc build/build6.jpeg',
    title: 'Value Champion 1080p Rig',
    tier: 'TIER: VALUE OPTIMIZED',
    tagline: 'Maximum FPS per Rupee spent without cutting board quality',
    specs: {
      cpu: 'Intel Core i5-12400F // 6-Core 12-Thread',
      gpu: 'NVIDIA GeForce RTX 3060 12GB / RTX 4060',
      ram: '16GB DDR4 3200MHz Dual Channel',
      storage: '1TB NVMe High-Speed SSD',
      cooling: 'High-Efficiency DeepCool Air Cooler',
      psu: '650W 80+ Bronze Certified PSU',
    },
    benchmarks: {
      '1080p': { cyberpunk: '90 FPS', competitive: '380+ FPS', render: '1.9x Realtime' },
      '1440p': { cyberpunk: '62 FPS', competitive: '210+ FPS', render: '1.4x Realtime' },
      '4K': { cyberpunk: '35 FPS', competitive: '95 FPS', render: '0.9x Realtime' },
    },
    accent: 'border-white/20',
  },
]

const categories = [
  { id: 'all', label: 'All Atelier Rigs' },
  { id: 'flagship', label: 'Flagship 4K' },
  { id: 'workstation', label: 'Workstations' },
  { id: 'gaming', label: 'Competitive Gaming' },
  { id: 'sff', label: 'Mini-ITX' },
  { id: 'budget', label: 'Value Rigs' },
]

export default function PCBuildsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [resolution, setResolution] = useState<'1080p' | '1440p' | '4K'>('1440p')
  const [activeTab, setActiveTab] = useState<Record<string, 'specs' | 'fps'>>({})

  const filteredBuilds = selectedCategory === 'all'
    ? pcBuilds
    : pcBuilds.filter((b) => b.category === selectedCategory)

  const toggleTab = (id: string, tab: 'specs' | 'fps') => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }))
  }

  return (
    <section id="pc-builds" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#171918] text-ivory-100 atelier-grid-dark overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-burnt-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-sage-400/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 sm:pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-400">
              <Layers className="w-4 h-4" />
              <span>Architectural Hardware Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Bespoke PC Builds & Precision Assemblies
            </h2>
          </div>
          <p className="text-sm font-mono text-ivory-300/70 max-w-md">
            Every build is assembled on an anti-static bench, thermal benchmarked under FurMark & Prime95, and delivered with lifetime wiring maintenance.
          </p>
        </div>

        {/* Filter & Benchmark Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.03] border border-white/10 p-3 sm:p-4 rounded-2xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-burnt-500 text-white shadow-md'
                    : 'bg-white/5 text-ivory-300/80 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Benchmark Resolution Selector */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start shrink-0 bg-black/60 p-1.5 rounded-xl border border-white/10 font-mono text-xs">
            <span className="text-ivory-300/60 px-2 text-[10px] sm:text-[11px] font-bold">BENCH TARGET:</span>
            <div className="flex items-center gap-1">
              {(['1080p', '1440p', '4K'] as const).map((res) => (
                <button
                  key={res}
                  onClick={() => setResolution(res)}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg font-bold transition-all text-xs ${
                    resolution === res
                      ? 'bg-burnt-500 text-white shadow'
                      : 'text-ivory-300/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredBuilds.map((build, index) => {
              const currentCardTab = activeTab[build.id] || 'specs'
              const bench = build.benchmarks[resolution]

              return (
                <motion.div
                  key={build.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative rounded-3xl bg-graphite-900 border border-white/10 hover:border-burnt-500/50 shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                    <Image
                      src={build.image}
                      alt={build.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-transparent" />
                    
                    {/* Tier Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 font-mono text-[10px] font-bold text-burnt-400">
                      {build.tier}
                    </div>

                    {/* Quick Tab Switcher Overlay */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-white/15 font-mono text-[10px]">
                      <button
                        onClick={() => toggleTab(build.id, 'specs')}
                        className={`px-2 py-0.5 rounded font-bold transition-all ${
                          currentCardTab === 'specs'
                            ? 'bg-burnt-500 text-white'
                            : 'text-ivory-300/70 hover:text-white'
                        }`}
                      >
                        Specs
                      </button>
                      <button
                        onClick={() => toggleTab(build.id, 'fps')}
                        className={`px-2 py-0.5 rounded font-bold transition-all ${
                          currentCardTab === 'fps'
                            ? 'bg-sage-400 text-graphite-950 font-black'
                            : 'text-ivory-300/70 hover:text-white'
                        }`}
                      >
                        {resolution} FPS
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-burnt-400 transition-colors">
                        {build.title}
                      </h3>
                      <p className="text-xs text-ivory-300/70 font-sans leading-relaxed">
                        {build.tagline}
                      </p>
                    </div>

                    {/* Dynamic Specs or Benchmarks View */}
                    <div className="min-h-[110px] pt-3 border-t border-white/5">
                      <AnimatePresence mode="wait">
                        {currentCardTab === 'specs' ? (
                          <motion.div
                            key="specs"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="space-y-2 text-[11px] font-mono"
                          >
                            <div className="flex items-center gap-2 text-ivory-200">
                              <Cpu className="w-3.5 h-3.5 text-burnt-400 shrink-0" />
                              <span className="truncate">{build.specs.cpu}</span>
                            </div>
                            <div className="flex items-center gap-2 text-ivory-200">
                              <Zap className="w-3.5 h-3.5 text-sage-400 shrink-0" />
                              <span className="truncate">{build.specs.gpu}</span>
                            </div>
                            <div className="flex items-center gap-2 text-ivory-300/70">
                              <HardDrive className="w-3.5 h-3.5 text-warmgrey-400 shrink-0" />
                              <span className="truncate">{build.specs.ram} // {build.specs.storage}</span>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="fps"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="grid grid-cols-3 gap-1.5 sm:gap-2 font-mono text-center"
                          >
                            <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                              <span className="text-[8px] sm:text-[9px] uppercase text-ivory-300/60 block">Cyberpunk</span>
                              <span className="text-[11px] sm:text-xs font-black text-burnt-400 block">{bench.cyberpunk}</span>
                              <span className="text-[8px] text-ivory-300/50 block">Ray-Traced</span>
                            </div>
                            <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                              <span className="text-[8px] sm:text-[9px] uppercase text-ivory-300/60 block">CS2 / Val</span>
                              <span className="text-[11px] sm:text-xs font-black text-sage-400 block">{bench.competitive}</span>
                              <span className="text-[8px] text-ivory-300/50 block">Esports High</span>
                            </div>
                            <div className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                              <span className="text-[8px] sm:text-[9px] uppercase text-ivory-300/60 block">DaVinci 8K</span>
                              <span className="text-[11px] sm:text-xs font-black text-white block">{bench.render}</span>
                              <span className="text-[8px] text-ivory-300/50 block">CUDA Speed</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 mt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-sage-400">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>Bench Burn-In Passed</span>
                      </span>

                      <a
                        href={`https://wa.me/919842139997?text=Hi%20Jai%20Shankar,%20I%20am%20interested%20in%20custom%20PC%20build:%20${encodeURIComponent(build.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Quote Build</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
