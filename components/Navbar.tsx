'use client'

import { motion } from 'framer-motion'
import { Menu, X, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import ServiceMegaMenu from './ServiceMegaMenu'
import QuickLinksScroll from './QuickLinksScroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hardware-architecture', label: '3D Anatomy' },
    { href: '#pc-builds', label: 'PC Builds', isPill: true },
    { href: '#diagnostic-bench', label: 'Bench Protocol' },
    { href: '#about', label: 'Laboratory' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#EAE6DC] shadow-[0_4px_20px_-4px_rgba(23,25,24,0.06)]'
        : 'bg-[#F5F3EE]/85 backdrop-blur-sm border-b border-[#EAE6DC]/50'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0" aria-label="JSPCS Home">
            <Logo size="md" showText={true} />
          </a>

          {/* Desktop Navigation (Visible on lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5" aria-label="Primary navigation">
            <ServiceMegaMenu />

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors duration-200 shrink-0 ${link.isPill
                  ? 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-graphite-900 text-ivory-100 hover:bg-burnt-500 hover:text-white transition-all shadow-sm text-xs font-mono font-bold tracking-wide uppercase'
                  : 'px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold tracking-tight text-graphite-800 hover:text-burnt-500'
                  }`}
              >
                {link.isPill && (
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-500 shrink-0 animate-pulse" />
                )}
                <span>{link.label}</span>
              </a>
            ))}

            {/* Social Icons (Visible on xl: 1280px+ to preserve breathing room) */}
            <div className="hidden xl:flex items-center gap-1.5 border-l border-[#D8D2C2] pl-3 shrink-0">
              <a
                href="https://www.linkedin.com/company/jai-shankar-pc-services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-graphite-800 hover:bg-[#0A66C2] text-ivory-100 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/shankar.jai.961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-graphite-800 hover:bg-[#1877F2] text-ivory-100 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-graphite-800 hover:bg-[#E1306C] text-ivory-100 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Emergency Technician Contact Button */}
            <motion.a
              href="tel:9842139997"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors shadow-sm shadow-burnt-500/20 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">98421 39997</span>
              <span className="xl:hidden">Call Now</span>
            </motion.a>
          </nav>

          {/* Mobile / Tablet Menu Button (Visible on < lg: 1024px) */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-graphite-800 hover:bg-ivory-200 transition-colors border border-transparent hover:border-[#D8D2C2]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <QuickLinksScroll />
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-[#EAE6DC] bg-[#FAF9F6] px-4 sm:px-6 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-1.5">
            <a
              href="/chip-level-service-in-madurai"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-burnt-500 bg-burnt-500/10 border border-burnt-500/20"
            >
              <span>⚡ All Engineering Services</span>
              <span className="text-xs font-mono">&rarr;</span>
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${link.isPill
                  ? 'text-burnt-500 bg-white border border-[#EAE6DC]'
                  : 'text-graphite-800 hover:bg-ivory-200'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EAE6DC] space-y-3">
            <a
              href="tel:9842139997"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md shadow-burnt-500/25 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Technician: 98421 39997</span>
            </a>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/jai-shankar-pc-services"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-graphite-800 text-white hover:bg-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/shankar.jai.961"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-graphite-800 text-white hover:bg-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-graphite-800 text-white hover:bg-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
