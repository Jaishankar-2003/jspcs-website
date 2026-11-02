'use client'

import { allNavRoutes } from '@/lib/navigation-data'
import Link from 'next/link'

export default function QuickLinksScroll() {
  return (
    <div className="hidden sticky top-20 z-40 bg-[#F5F3EE]/95 backdrop-blur-md border-y border-[#EAE6DC] py-2.5 px-4">
      <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth">
        {allNavRoutes.filter(r => r.category !== 'Blog').map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="flex-shrink-0 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-xs font-mono font-medium text-graphite-800 whitespace-nowrap hover:bg-burnt-500 hover:text-white hover:border-burnt-500 transition-all active:scale-95 shadow-sm"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
