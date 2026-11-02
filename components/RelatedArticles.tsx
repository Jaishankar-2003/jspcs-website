'use client'

import { blogRoutes } from '@/lib/navigation-data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, ArrowRight, Calendar, ChevronRight } from 'lucide-react'

export default function RelatedArticles({ title = 'Technical Knowledge Base & Guides', limit = 3 }) {
  const articles = blogRoutes.slice(0, limit)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] border-t border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
              Editorial Hardware Journal
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-900 tracking-tight">
              {title}
            </h2>
          </div>
          <Link 
            href="/blog/ssd-vs-hdd-performance-comparison" 
            className="inline-flex items-center gap-2 text-burnt-500 font-mono text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all"
          >
            <span>Browse All Technical Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <Link href={article.href} className="block h-full">
                <div className="bg-white border border-[#EAE6DC] rounded-2xl sm:rounded-3xl p-5 sm:p-6 h-full hover:border-burnt-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-ivory-100 text-burnt-500 group-hover:bg-burnt-500 group-hover:text-white transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-warmgrey-400 uppercase tracking-widest">
                        5 Min Read
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors leading-snug">
                      {article.label}
                    </h3>
                    
                    <p className="text-xs text-warmgrey-400 leading-relaxed line-clamp-2">
                      {article.description || 'Comprehensive diagnosis and engineering tips written directly by JSPCS bench technicians.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-6 border-t border-[#EAE6DC] text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-warmgrey-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Lab Archive</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-burnt-500 font-bold group-hover:translate-x-1 transition-transform">
                      Read Guide <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
