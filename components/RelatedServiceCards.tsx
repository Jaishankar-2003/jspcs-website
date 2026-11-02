'use client'

import { allNavRoutes } from '@/lib/navigation-data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedServiceCardsProps {
  slugs: string[]
  title?: string
}

export default function RelatedServiceCards({ slugs, title = 'Recommended Diagnostic Protocols' }: RelatedServiceCardsProps) {
  const filteredServices = allNavRoutes.filter(s => slugs.includes(s.href))

  if (filteredServices.length === 0) return null

  return (
    <div className="my-10">
      <h3 className="text-lg font-bold text-graphite-900 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-4 bg-burnt-500 rounded-full" />
        <span>{title}</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredServices.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                href={service.href}
                className="group flex items-center gap-3 p-3.5 bg-white border border-[#EAE6DC] rounded-2xl hover:border-burnt-500/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-ivory-100 text-burnt-500 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-burnt-500 group-hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-xs font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors truncate">
                    {service.label}
                  </h4>
                  <p className="text-[11px] text-warmgrey-400 truncate">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-warmgrey-400 group-hover:text-burnt-500 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
