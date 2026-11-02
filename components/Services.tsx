'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Cpu,
  Gamepad2,
  Laptop,
  ShieldCheck,
  Database,
  Zap,
  ArrowRight,
  CheckCircle,
  Activity,
  Layers,
} from 'lucide-react'

export default function Services() {
  const primaryServices = [
    {
      id: 'chip-level',
      href: '/chip-level-service-in-madurai',
      tag: 'BENCHMARK SERVICE // BGA LAB',
      title: 'Chip-Level Motherboard Diagnostics & BGA Rework',
      audience: 'Laptops/PCs with no power, liquid spill, sudden shutdown, or blue-screen loops.',
      value: 'Saves 70% compared to buying a replacement board. Component-level repair of power rails, MOSFETs, and controller ICs.',
      spec: '0.01mm SMD Micro-Soldering // IR Rework Bench',
      badge: '90-Day Warranty',
      icon: Cpu,
      isFeatured: true,
    },
    {
      id: 'custom-pc',
      href: '/custom-gaming-pc-build-in-madurai',
      tag: 'ATELIER ASSEMBLY',
      title: 'Architectural Custom Gaming & Workstation Rigs',
      audience: 'Gamers, 3D artists, video editors, and machine learning researchers.',
      value: 'Hand-picked thermals, pressure-tested liquid loops, clean cable management, and BIOS tuning for maximum stability.',
      spec: 'RTX 40-Series // Ryzen 9 & Intel Core i9 // 24hr Burn-In',
      badge: 'Zero Bottleneck Guarantee',
      icon: Gamepad2,
      isFeatured: false,
    },
    {
      id: 'laptop-repair',
      href: '/gaming-laptop-repair-madurai',
      tag: 'PRECISION HARDWARE',
      title: 'OEM Gaming Laptop Screen, Hinge & Thermal Architecture',
      audience: 'Laptops with thermal throttling, cracked IPS/OLED screens, broken hinges, or rattling fans.',
      value: 'Kryonaut / Liquid metal application, OEM panel replacement, and reinforced chassis metal bracket rebuilds.',
      spec: 'Up to 240Hz High Refresh Displays // 15°C Drop',
      badge: 'Same-Day Dispatch',
      icon: Laptop,
      isFeatured: false,
    },
    {
      id: 'data-recovery',
      href: '/data-recovery-service-madurai',
      tag: 'CLEANROOM EXTRACTION',
      title: 'Forensic Data Recovery & Corrupted Drive Restoration',
      audience: 'Unreadable NVMe SSDs, clicking external HDDs, and corrupted partition tables.',
      value: 'Hardware-level extraction tools without risking further NAND degradation or platter scratching.',
      spec: 'Deep Sector Re-imaging // Confidential NDA Protocol',
      badge: '95% Retrieval Rate',
      icon: Database,
      isFeatured: false,
    },
    {
      id: 'amc-support',
      href: '/computer-amc-service-madurai',
      tag: 'CORPORATE SLA',
      title: 'Annual Maintenance Contracts (AMC) & Business IT Support',
      audience: 'Offices, clinics, schools, and design studios across Tamil Nadu.',
      value: 'Scheduled preventative hardware dusting, thermal servicing, backup auditing, and priority technician dispatch.',
      spec: '4-Hour Emergency Response // Server Diagnostics',
      badge: 'Custom Office Plans',
      icon: ShieldCheck,
      isFeatured: false,
    },
    {
      id: 'ssd-ram-upgrade',
      href: '/ssd-upgrade-service-madurai',
      tag: 'PERFORMANCE OVERHAUL',
      title: 'Gen4 NVMe SSD Clones & DDR5 High-Speed Memory Upgrades',
      audience: 'Slow computers requiring an instant 5x speed boost without losing any existing files.',
      value: '1-to-1 bitwise OS migration to blazing NVMe storage with zero data loss or software reinstall hassle.',
      spec: '7000MB/s Read Speeds // Crucial, Samsung, WD',
      badge: '1-Hour Installation',
      icon: Zap,
      isFeatured: false,
    },
  ]

  return (
    <section id="services" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-burnt-500 uppercase tracking-widest">
              <Activity className="w-4 h-4" />
              <span>Engineering Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
              Laboratory Diagnostics & Specialized Build Craft
            </h2>
          </div>
          <p className="text-sm font-mono text-warmgrey-400 max-w-md">
            Every service is handled directly by senior hardware technicians using industrial diagnostic benches.
          </p>
        </div>

        {/* Services Grid with Varied Layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  service.isFeatured
                    ? 'md:col-span-2 lg:col-span-2 bg-graphite-900 text-ivory-100 shadow-2xl border border-white/10 hover:border-burnt-500/50'
                    : 'bg-white text-graphite-900 border border-[#EAE6DC] shadow-sm hover:shadow-xl hover:border-burnt-500/40 hover:-translate-y-1'
                }`}
              >
                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <span className={`font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                      service.isFeatured ? 'text-burnt-400' : 'text-burnt-500'
                    }`}>
                      {service.tag}
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      service.isFeatured 
                        ? 'bg-white/10 text-sage-300 border border-white/10' 
                        : 'bg-sage-400/15 text-graphite-800'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl shrink-0 ${
                      service.isFeatured
                        ? 'bg-burnt-500/15 text-burnt-400 border border-burnt-500/20'
                        : 'bg-[#F5F3EE] text-burnt-500 border border-[#EAE6DC]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold tracking-tight leading-snug group-hover:text-burnt-500 transition-colors ${
                        service.isFeatured ? 'text-white' : 'text-graphite-900'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Who Needs It */}
                  <div className={`p-3.5 rounded-xl text-xs space-y-1 ${
                    service.isFeatured ? 'bg-white/5 border border-white/5' : 'bg-[#FAF9F6] border border-[#EAE6DC]'
                  }`}>
                    <span className="font-mono font-bold uppercase tracking-wide text-[10px] opacity-70 block">
                      Target Symptoms:
                    </span>
                    <p className={`leading-relaxed ${
                      service.isFeatured ? 'text-ivory-200/90' : 'text-graphite-800'
                    }`}>
                      {service.audience}
                    </p>
                  </div>

                  {/* Engineering Value */}
                  <p className={`text-xs leading-relaxed ${
                    service.isFeatured ? 'text-ivory-300/80' : 'text-warmgrey-400'
                  }`}>
                    {service.value}
                  </p>
                </div>

                {/* Card Bottom / Action */}
                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-mono font-medium truncate max-w-[140px] xs:max-w-[180px] sm:max-w-[280px] ${
                    service.isFeatured ? 'text-sage-400' : 'text-warmgrey-400'
                  }`}>
                    {service.spec}
                  </span>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-all group-hover:gap-2.5 shrink-0 ${
                      service.isFeatured ? 'text-burnt-400 hover:text-burnt-300' : 'text-burnt-500 hover:text-burnt-600'
                    }`}
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
