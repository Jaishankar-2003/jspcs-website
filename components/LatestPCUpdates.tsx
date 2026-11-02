'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, ShieldCheck, Wrench, Star, Cpu, ArrowUpRight, Activity } from 'lucide-react'

const journalEntries = [
  {
    title: 'Project Obsidian: 4K Liquid Loop Bench',
    date: 'OCTOBER 2026 BENCH',
    specs: ['Intel Core i9-14900KS', 'RTX 4090 OC 24GB', '64GB DDR5 6400MHz', '2TB Gen5 PCIe SSD'],
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    performance: '144+ FPS on Cyberpunk 2077 (Full Path Tracing)',
    tag: 'EXTREME HARDWARE',
  },
  {
    title: 'Precision Workstation Studio: 8K RED Cinema',
    date: 'SEPTEMBER 2026 BENCH',
    specs: ['AMD Ryzen 9 7950X', 'Dual RTX 4080 Super', '128GB High-Stability RAM', '8TB Gen4 Array'],
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    performance: 'Instant Real-time Timeline Playback in DaVinci',
    tag: 'STUDIO GRADE',
  },
  {
    title: 'Micro-ITX Stealth Gaming Rig: 11-Litre',
    date: 'AUGUST 2026 BENCH',
    specs: ['AMD Ryzen 7 7800X3D', 'RTX 4070 Ti Super SFF', '32GB DDR5-6000MHz', 'SFX 850W Platinum'],
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
    performance: 'Whisper Quiet < 20dB under sustained load',
    tag: 'COMPACT ATELIER',
  },
]

const trustMetrics = [
  { icon: Award, value: '850+', label: 'Custom Rigs Assembled', sub: 'Tested under FurMark & Cinebench' },
  { icon: ShieldCheck, value: '90 Days', label: 'Written Warranty', sub: 'Comprehensive component coverage' },
  { icon: Wrench, value: 'Lifetime', label: 'Diagnostic Advisory', sub: 'Direct technician access' },
  { icon: Star, value: '4.9 / 5', label: 'Verified Client Rating', sub: 'Over 500+ Google Reviews' },
]

export default function LatestPCUpdates() {
  return (
    <section className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-t border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        
        {/* Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {trustMetrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#EAE6DC] shadow-sm space-y-1.5 sm:space-y-2 text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-burnt-500/10 text-burnt-500 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-graphite-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-graphite-900 uppercase font-mono tracking-wider leading-tight">
                  {metric.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-warmgrey-400 leading-tight">
                  {metric.sub}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
              <Activity className="w-4 h-4" />
              <span>Laboratory Bench Log</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-900 tracking-tight">
              Recent Engineering Commissions
            </h2>
          </div>
          <p className="text-sm font-mono text-warmgrey-400 max-w-md">
            A documented log of recent bespoke workstation assemblies and thermal architecture builds.
          </p>
        </div>

        {/* Journal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journalEntries.map((pc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white border border-[#EAE6DC] hover:border-burnt-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <Image
                    src={pc.image}
                    alt={pc.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono text-[10px] font-bold text-burnt-400 uppercase tracking-wider">
                    {pc.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <span className="font-mono text-[10px] font-bold text-warmgrey-400 uppercase tracking-wider">
                    {pc.date}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors leading-snug">
                    {pc.title}
                  </h3>

                  <div className="space-y-2 pt-2 text-xs font-mono">
                    {pc.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-warmgrey-400">
                        <Cpu className="w-3.5 h-3.5 text-burnt-500 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Benchmark Result */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="p-3 rounded-2xl bg-ivory-100 border border-[#EAE6DC] flex items-center justify-between text-xs font-mono">
                  <span className="text-graphite-900 font-bold truncate pr-2">
                    {pc.performance}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-burnt-500 shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
