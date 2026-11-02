'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

const partners = [
  { name: 'NVIDIA', logo: '/partner/nvidia.png' },
  { name: 'ASUS', logo: '/partner/asus.png' },
  { name: 'AMD Ryzen', logo: '/partner/ryzen.svg' },
  { name: 'MSI', logo: '/partner/msi.jpeg' },
  { name: 'Corsair', logo: '/partner/corsair.jpeg' },
  { name: 'Samsung Semiconductor', logo: '/partner/samsung.png' },
  { name: 'Western Digital', logo: '/partner/wd.png' },
]

export default function TrustedPartners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    setIsPaused(true)
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const onMouseUpOrLeave = () => {
    isDragging.current = false
    setIsPaused(false)
  }

  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    let scrollAmount = 0
    const scrollSpeed = 0.5
    let frameId: number

    const scroll = () => {
      if (!isPaused && container) {
        scrollAmount += scrollSpeed
        container.scrollLeft = scrollAmount
        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0
      }
      frameId = requestAnimationFrame(scroll)
    }

    frameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(frameId)
  }, [isPaused])

  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F3EE] border-y border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            <Cpu className="w-3.5 h-3.5" />
            <span>Hardware Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight">
            OEM Components & Diagnostic Compatibility
          </h2>
          <p className="text-xs sm:text-sm text-warmgrey-400 font-mono">
            Direct component sourcing, firmware flashers, and genuine silicon parts.
          </p>
        </div>

        <div className="relative">
          {/* Gradient fade masks */}
          <div className="absolute top-0 left-0 h-full w-8 sm:w-20 bg-gradient-to-r from-[#F5F3EE] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-8 sm:w-20 bg-gradient-to-l from-[#F5F3EE] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-4 no-scrollbar cursor-grab active:cursor-grabbing select-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUpOrLeave}
            onMouseLeave={onMouseUpOrLeave}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-36 h-20 sm:w-44 sm:h-24 rounded-2xl bg-white border border-[#EAE6DC] hover:border-burnt-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-3.5 sm:p-5 group"
              >
                <div className="relative w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
