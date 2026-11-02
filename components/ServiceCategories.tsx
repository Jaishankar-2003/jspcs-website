'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  brandRepairRoutes,
  technicalServiceRoutes,
  pcBuildRoutes,
  NavRoute,
} from '@/lib/navigation-data'
import { ArrowRight, ChevronRight, Laptop, Cpu, Gamepad2 } from 'lucide-react'

const categories = [
  { id: 'brands', label: 'OEM Brand Repairs', icon: Laptop, data: brandRepairRoutes },
  { id: 'technical', label: 'Chip-Level & Technical', icon: Cpu, data: technicalServiceRoutes },
  { id: 'pc-builds', label: 'Custom Rigs & Workstations', icon: Gamepad2, data: pcBuildRoutes },
]

export default function ServiceCategories() {
  const [activeTab, setActiveTab] = useState('brands')

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
          Directory & Service Index
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
          Explore Our Complete Engineering Catalog
        </h2>
        <p className="text-sm sm:text-base text-warmgrey-400">
          Select a category to browse specialized repair protocols, brand solutions, and custom hardware builds.
        </p>
      </div>

      {/* Atelier Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id
          const Icon = cat.icon

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-mono font-semibold transition-all duration-200 flex items-center gap-2 ${
                isActive
                  ? 'bg-graphite-900 text-white shadow-md'
                  : 'bg-white text-graphite-800 border border-[#D8D2C2] hover:bg-ivory-100'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-burnt-400' : 'text-warmgrey-400'}`} />
              <span>{cat.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-burnt-500" />
              )}
            </button>
          )
        })}
      </div>

      {/* Service Card Grid */}
      <div className="relative min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {categories.find((c) => c.id === activeTab)?.data.map((service, index) => (
              <ServiceCard key={service.href} service={service} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: NavRoute; index: number }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
    >
      <Link
        href={service.href}
        className="group block h-full p-5 rounded-2xl bg-white border border-[#EAE6DC] hover:border-burnt-500/50 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-ivory-100 group-hover:bg-burnt-500/10 text-graphite-900 group-hover:text-burnt-500 flex items-center justify-center transition-colors">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-bold text-warmgrey-400 uppercase tracking-wider">
              {service.category}
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors">
              {service.label}
            </h3>
            {service.description && (
              <p className="text-xs text-warmgrey-400 leading-relaxed mt-1">
                {service.description}
              </p>
            )}
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-[#EAE6DC]/60 flex items-center justify-between text-xs font-mono font-bold text-burnt-500">
          <span>View Protocol</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}
