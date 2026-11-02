'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronDown,
  Laptop,
  Gamepad2,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Phone,
} from 'lucide-react'

import {
  brandRepairRoutes,
  technicalServiceRoutes,
  pcBuildRoutes,
} from '@/lib/navigation-data'

export default function ServiceMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`group inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold tracking-tight whitespace-nowrap transition-all duration-200 ${
          isOpen
            ? 'text-burnt-500 bg-graphite-900/5'
            : 'text-graphite-800 hover:text-burnt-500'
        }`}
        aria-expanded={isOpen}
      >
        <span><span className="hidden xl:inline">Engineering </span>Services</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-burnt-500' : 'text-warmgrey-400 group-hover:text-burnt-500'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full -left-20 z-50 pt-3 w-[920px]"
          >
            <div className="relative overflow-hidden rounded-2xl bg-graphite-900 text-ivory-100 border border-white/10 shadow-2xl p-6">
              {/* Subtle Atelier accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-burnt-500 via-sage-400 to-transparent" />

              <div className="grid grid-cols-12 gap-6">
                {/* Brand Repairs (Col 1-4) */}
                <div className="col-span-4 space-y-3 border-r border-white/5 pr-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <div className="p-1.5 rounded-md bg-burnt-500/10 text-burnt-500">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        OEM Laptop Repair
                      </h4>
                      <p className="text-[11px] text-ivory-300/60">Factory-grade diagnostics</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {brandRepairRoutes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-ivory-200 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="font-medium group-hover:text-burnt-400 transition-colors">
                          {route.label}
                        </span>
                        <ArrowRight className="w-3 h-3 text-burnt-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Technical Services (Col 5-8) */}
                <div className="col-span-4 space-y-3 border-r border-white/5 pr-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <div className="p-1.5 rounded-md bg-sage-400/10 text-sage-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        Chip-Level & Hardware
                      </h4>
                      <p className="text-[11px] text-ivory-300/60">BGA, Power rails, Data recovery</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-1 max-h-[260px] overflow-y-auto pr-1">
                    {technicalServiceRoutes.slice(0, 7).map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-ivory-200 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <span className="font-medium group-hover:text-burnt-400 transition-colors">
                          {route.label}
                        </span>
                        <ArrowRight className="w-3 h-3 text-burnt-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/chip-level-service-in-madurai"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-burnt-400 hover:text-burnt-300 transition-colors pt-1"
                  >
                    <span>View all laboratory services</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Custom PC Builds & Lab Highlight (Col 9-12) */}
                <div className="col-span-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                      <div className="p-1.5 rounded-md bg-burnt-500/10 text-burnt-500">
                        <Gamepad2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          Custom Rigs
                        </h4>
                        <p className="text-[11px] text-ivory-300/60">Architectural PC Builds</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {pcBuildRoutes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-ivory-200 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <span className="font-medium group-hover:text-burnt-400 transition-colors">
                            {route.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-burnt-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Certified Lab Badge */}
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-sage-400 shrink-0" />
                      <span className="text-xs font-bold text-white">90-Day Warranty On Service</span>
                    </div>
                    <p className="text-[11px] text-ivory-300/70 leading-relaxed">
                      All motherboard repairs & PC builds are stress-tested with OEM diagnostic benches.
                    </p>
                    <a
                      href="tel:9842139997"
                      className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold transition-colors shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Direct Technician Hotline</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}