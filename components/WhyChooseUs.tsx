'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Cpu,
  Clock,
  Truck,
  Eye,
  Award,
  Zap,
} from 'lucide-react'

const benchmarks = [
  {
    icon: Cpu,
    tag: 'BENCH PROTOCOL 01',
    title: 'Component-Level Precision',
    description: 'We test individual diodes, capacitors, and power MOSFETs with thermal imaging rather than charging you for an entire new board.',
  },
  {
    icon: Award,
    tag: 'BENCH PROTOCOL 02',
    title: '100% OEM Sourced Parts',
    description: 'Direct factory replacement ICs, power rails, screens, and original cooling fans sourced from certified authorized distributors.',
  },
  {
    icon: ShieldCheck,
    tag: 'BENCH PROTOCOL 03',
    title: '90-Day Written Warranty',
    description: 'Complete peace of mind. If the repaired component or rail shows faults within 90 days, we service it at zero cost.',
  },
  {
    icon: Eye,
    tag: 'BENCH PROTOCOL 04',
    title: 'Transparent Bench Reports',
    description: 'We send you video proof and microscopic photos of the damaged components before and after soldering.',
  },
  {
    icon: Clock,
    tag: 'BENCH PROTOCOL 05',
    title: 'Rapid 24h Turnaround',
    description: 'Priority bench for business-critical rigs, creator workstations, and student machines so you are never left hanging.',
  },
  {
    icon: Truck,
    tag: 'BENCH PROTOCOL 06',
    title: 'Safe Doorstep Pickup & Delivery',
    description: 'Insured anti-static transit boxes for your expensive gaming PCs and laptops across Madurai and all of Tamil Nadu.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-graphite-900 text-ivory-100 overflow-hidden atelier-grid-dark">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 -left-10 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-burnt-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-96 h-72 sm:h-96 max-w-full bg-sage-400/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-400">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineering Integrity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built on Technical Rigor, Not Guesswork.
          </h2>
          <p className="text-sm sm:text-base text-ivory-300/70 font-sans leading-relaxed">
            Standard repair centers replace modules; our atelier solves the electrical physics. Here is why discerning clients and studios trust JSPCS.
          </p>
        </div>

        {/* 6 Benchmark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benchmarks.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-graphite-800/90 border border-white/10 hover:border-burnt-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-burnt-400 tracking-wider">
                      {item.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-burnt-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-burnt-500 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-burnt-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-ivory-300/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-sage-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                  <span>Lab Standard Verified</span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
