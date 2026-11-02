'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  inverted?: boolean
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  showText = true,
  inverted = false
}: LogoProps) {
  const iconBoxSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  const imageSizes = {
    sm: 22,
    md: 28,
    lg: 34,
    xl: 46,
  }

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg xl:text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }

  return (
    <motion.div
      className={`flex items-center gap-2.5 select-none ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Round Emblem without black background or extra circles */}
      <div className="relative flex items-center justify-center shrink-0">
        <div 
          className={`${iconBoxSizes[size]} rounded-full ${
            inverted 
              ? 'bg-white/10 border border-white/20' 
              : 'bg-white border border-[#EAE6DC] shadow-sm'
          } flex items-center justify-center overflow-hidden transition-all`}
        >
          <Image
            src={inverted ? '/logo-emblem-white.png' : '/logo-emblem.png'}
            alt="JSPCS"
            width={imageSizes[size]}
            height={imageSizes[size]}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight ${titleSizes[size]} ${inverted ? 'text-white' : 'text-graphite-900'}`}>
              JSPCS
            </span>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-burnt-500/10 text-burnt-500 border border-burnt-500/20 leading-none">
              LAB
            </span>
          </div>
        </div>
      )}
    </motion.div>
  )
}
