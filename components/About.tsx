'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck, Truck, Cpu, Award, Microscope } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: 'BGA & Chip-Level Lab',
      desc: 'Precision micro-soldering, short-circuit rail isolation, and dedicated reballing stations.',
    },
    {
      icon: ShieldCheck,
      title: 'Genuine OEM Sourcing',
      desc: 'Direct factory replacement ICs, power MOSFETs, controller chips, and original batteries.',
    },
    {
      icon: Clock,
      title: 'Rapid 24-48hr Turnaround',
      desc: 'Fast diagnosis with transparent bench telemetry before proceeding with any repair.',
    },
    {
      icon: Truck,
      title: 'Insured Doorstep Pickup',
      desc: 'Safe packaging and dispatch across Madurai, Chennai, and all districts of Tamil Nadu.',
    },
  ]

  return (
    <section id="about" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-t border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Hardware Atelier Showcase (Col 1-6) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex flex-col"
          >
            {/* Dark Graphite Atelier Engineering Card */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-graphite-900 border border-white/10 p-5 sm:p-8 text-ivory-100 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-burnt-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Lab Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-burnt-400 uppercase font-bold">
                    FACILITY BENCHMARK // 01
                  </span>
                  <h3 className="text-xl font-mono font-bold text-white mt-0.5">
                    Micro-Electronics Laboratory
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <Microscope className="w-5 h-5 text-burnt-500" />
                </div>
              </div>

              {/* Verified Certificate Showcase */}
              <div className="relative rounded-2xl bg-black/40 border border-white/10 p-4 mb-6 overflow-hidden flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-36 h-24 rounded-lg overflow-hidden border border-white/15 bg-white shrink-0">
                  <Image
                    src="/certificates/chip.png"
                    alt="BGA Chip Level Laboratory Certification"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sage-400/20 text-sage-300 font-mono text-[10px] font-bold">
                    <Award className="w-3 h-3" />
                    <span>MASTER BOARD CERTIFIED</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Chip-Level Diagnostics</h4>
                  <p className="text-xs text-ivory-300/70 leading-relaxed">
                    Formal laboratory training in BGA rework, power sequence tracing, and schematics interpretation.
                  </p>
                </div>
              </div>

              {/* Diagnostic Equipment Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-1">
                  <span className="text-burnt-400 font-bold">01 // THERMAL IR CAM</span>
                  <p className="text-[11px] text-ivory-300/60 font-sans">
                    Infrared hotspot identification to locate shorted 0402 ceramic capacitors.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-1">
                  <span className="text-sage-400 font-bold">02 // 100MHz SCOPE</span>
                  <p className="text-[11px] text-ivory-300/60 font-sans">
                    Oscilloscope waveform validation for CPU VCore and RAM voltage rails.
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Milestone Badge */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-white border border-[#D8D2C2] p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 w-fit self-end sm:self-auto">
              <div className="w-10 h-10 rounded-xl bg-burnt-500/10 text-burnt-500 flex items-center justify-center font-bold font-mono text-lg">
                10+
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-graphite-900 uppercase">
                  Years Engineering
                </div>
                <div className="text-[11px] text-warmgrey-400">
                  Trusted across Tamil Nadu
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Pillars (Col 7-12) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-burnt-500 uppercase tracking-widest">
                <span>The JSPCS Atelier Standard</span>
                <span className="w-6 h-px bg-burnt-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight leading-tight">
                Where technical depth meets honest bench craft.
              </h2>
            </div>

            <p className="text-base text-graphite-800 leading-relaxed font-normal">
              Founded and engineered by <strong className="font-semibold text-graphite-900">Jai Shankar</strong>, our atelier is structured around a simple principle: <em>diagnose at the component level instead of forcing expensive whole-board replacements</em>.
            </p>

            <p className="text-sm text-warmgrey-400 leading-relaxed">
              When standard service centers recommend discarding a motherboard or declaring a gaming rig unfixable, our laboratory traces individual power sequences, replaces damaged MOSFETs, reballs graphics processors, and restores hardware to factory spec with warranty.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#EAE6DC] shadow-sm hover:border-burnt-500/40 transition-colors space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-burnt-500/10 text-burnt-500 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-graphite-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-warmgrey-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
