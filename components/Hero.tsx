'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import {
  Phone,
  MessageCircle,
  Wrench,
  Cpu,
  ShieldCheck,
  ArrowRight,
  FileText,
  Star,
  Activity,
} from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Interactive 3D tilt using Framer Motion springs
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig)
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const stats = [
    { label: 'Years Bench Experience', value: '10+' },
    { label: 'Motherboard Repairs', value: '4,500+' },
    { label: 'Custom Rigs Built', value: '850+' },
    { label: 'Verified Client Rating', value: '4.9★' },
  ]

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#F5F3EE] atelier-grid"
    >
      {/* Ambient Atelier Lighting */}
      <div className="absolute top-10 right-0 sm:right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] max-w-full bg-burnt-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 sm:left-10 w-72 sm:w-[450px] h-72 sm:h-[450px] max-w-full bg-sage-400/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Editorial Headline & Value (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Atelier Technical Header Tag */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-[#D8D2C2] shadow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-burnt-500 animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-graphite-800 tracking-wider uppercase">
                Hardware Engineering & BGA Diagnostics
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-sage-400/20 text-graphite-800 font-bold shrink-0">
                TN LAB
              </span>
            </div>

            {/* Primary Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-graphite-900 tracking-tight leading-[1.08]">
                Precision PC Craft,
                <br />
                <span className="relative inline-block text-burnt-500">
                  Micro-Soldering
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-burnt-500/30 rounded-full" />
                </span>
                <br />
                & Custom Rigs.
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-warmgrey-400 max-w-xl leading-relaxed font-normal">
              Specialized chip-level laptop motherboard diagnostics, liquid cooling architecture, and custom workstation assembly across Tamil Nadu. Honest bench pricing, OEM replacement parts, and dedicated 90-day hardware warranty.
            </p>

            {/* Action Group */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="https://wa.me/919842139997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs sm:text-sm font-bold tracking-wide uppercase transition-all shadow-md shadow-burnt-500/25 hover:-translate-y-0.5 text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Diagnostics</span>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScv7FSVPdyseb7rq10Ev7MkHIKXxh_huwIAQxzo2Sx2VpgV3Q/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-ivory-50 text-graphite-900 border border-[#D8D2C2] font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:-translate-y-0.5 text-center"
              >
                <Wrench className="w-4 h-4 text-burnt-500 shrink-0" />
                <span>Book Service Desk</span>
              </a>

              <a
                href="tel:9842139997"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-xl text-graphite-800 hover:text-burnt-500 font-mono text-xs sm:text-sm font-semibold transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-sage-400 shrink-0" />
                <span>98421 39997</span>
              </a>
            </div>

            {/* Technical Bench Statistics */}
            <div className="pt-6 border-t border-[#D8D2C2]/70 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-graphite-900">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-sans font-medium text-warmgrey-400 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive 3D Showcase (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center py-4"
            style={{ perspective: 1200 }}
          >
            {/* 3D Hardware Canvas Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[430px] sm:max-w-[460px] min-h-[460px] sm:min-h-[540px] p-4 sm:p-6 flex flex-col justify-between group select-none"
            >
              {/* Card Surface Background & Border (Rounded with overflow contained inside) */}
              <div className="absolute inset-0 rounded-3xl bg-graphite-900 border border-white/10 shadow-2xl overflow-hidden pointer-events-none">
                {/* Dynamic Glare Reflection Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Top Technical Metadata Bar */}
              <div 
                className="flex items-center justify-between text-ivory-300/80 text-[11px] font-mono border-b border-white/10 pb-3 relative z-20"
                style={{ transform: 'translateZ(20px)' }}
              >
                <div className="flex items-center gap-1.5 truncate pr-2">
                  <Activity className="w-3.5 h-3.5 text-burnt-500 animate-pulse shrink-0" />
                  <span className="truncate">RIG ATELIER // SPEC: TITAN-X</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-ivory-100 font-bold shrink-0">
                  BGA CERTIFIED
                </span>
              </div>

              {/* Center Hardware Image with Floating Depth */}
              <div 
                className="relative flex-1 flex items-center justify-center my-2 sm:my-3 pointer-events-none" 
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="relative w-full h-[250px] sm:h-[340px]">
                  <Image
                    src="/black_orange.png"
                    alt="JSPCS Custom Hardware Atelier Rig"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] filter contrast-105 scale-105 sm:scale-110"
                  />
                </div>
              </div>

              {/* Bottom Interactive Spec Badge */}
              <div 
                className="relative z-20 p-3 sm:p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 space-y-2 shadow-lg"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Cpu className="w-4 h-4 text-burnt-400 shrink-0" />
                    <span className="text-xs font-mono font-bold text-white tracking-wide truncate">
                      RTX 4090 OC // DUAL LOOP
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sage-400 font-bold shrink-0">
                    &lt;48°C FULL LOAD
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-ivory-300/70 pt-2 border-t border-white/5">
                  <span className="truncate">Custom Hardline Tubing</span>
                  <span className="text-burnt-400 font-mono font-semibold shrink-0">Ready for Dispatch</span>
                </div>
              </div>

              {/* Floating Technical Annotation Badges (Unclipped with 3D Depth) */}
              <motion.div
                className="absolute -top-3 right-2 sm:-right-2 z-30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-burnt-500 text-white font-mono text-[10px] sm:text-[11px] font-bold shadow-xl flex items-center gap-1.5 ring-2 ring-graphite-900"
                style={{ transform: 'translateZ(50px)' }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>100% OEM Tested</span>
              </motion.div>

              <motion.div
                className="absolute bottom-20 sm:bottom-24 left-2 sm:-left-3 z-30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-graphite-800 text-ivory-100 border border-white/15 font-mono text-[10px] sm:text-[11px] shadow-2xl flex items-center gap-1.5"
                style={{ transform: 'translateZ(45px)' }}
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-sage-400 shrink-0" />
                <span>0.01mm SMD Tolerance</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Journey Indicator */}
        <div className="pt-10 flex flex-col items-center justify-center text-center">
          <a
            href="#hardware-architecture"
            className="group inline-flex flex-col items-center gap-1.5 text-xs font-mono font-semibold text-warmgrey-400 hover:text-burnt-500 transition-colors"
          >
            <span className="tracking-widest uppercase text-[11px]">
              Scroll To Explore Hardware Architecture
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-warmgrey-300 group-hover:border-burnt-500 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-burnt-500"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}
