'use client'

import { Phone, Mail, MessageCircle, Linkedin, Facebook, Instagram, ShieldCheck, MapPin } from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-graphite-950 text-ivory-100 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" showText={true} inverted={true} />
            <p className="text-xs text-ivory-300/70 font-sans leading-relaxed max-w-sm">
              Precision chip-level motherboard diagnostics, specialized BGA rework, and custom architectural gaming & workstation PC builds across Tamil Nadu.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/jai-shankar-pc-services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/shankar.jai.961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 pt-2 text-[11px] font-mono text-sage-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Govt. MSME Registered Laboratory</span>
            </div>
          </div>

          {/* Brand Repairs (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-burnt-400">
              Brand Repairs
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link href="/dell-laptop-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Dell & Alienware</Link></li>
              <li><Link href="/hp-laptop-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">HP & OMEN</Link></li>
              <li><Link href="/lenovo-laptop-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Lenovo Legion & ThinkPad</Link></li>
              <li><Link href="/asus-laptop-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Asus ROG & TUF</Link></li>
              <li><Link href="/msi-gaming-laptop-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">MSI Gaming Laptops</Link></li>
              <li><Link href="/acer-laptop-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Acer Predator & Nitro</Link></li>
            </ul>
          </div>

          {/* Laboratory Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-burnt-400">
              Laboratory Services
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li><Link href="/motherboard-repair-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Chip-Level Motherboard Repair</Link></li>
              <li><Link href="/chip-level-service-in-madurai" className="text-ivory-300/70 hover:text-white transition-colors">BGA Rework & Reballing</Link></li>
              <li><Link href="/custom-gaming-pc-build-in-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Custom Gaming PC Assembly</Link></li>
              <li><Link href="/data-recovery-service-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Forensic Data Recovery</Link></li>
              <li><Link href="/ssd-upgrade-service-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Gen4 NVMe SSD Migration</Link></li>
              <li><Link href="/computer-amc-service-madurai" className="text-ivory-300/70 hover:text-white transition-colors">Corporate Computer AMC</Link></li>
            </ul>
          </div>

          {/* Direct Bench Dispatch (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-burnt-400">
              Bench Contact
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href="tel:9842139997"
                className="flex items-center gap-2 text-ivory-200 hover:text-burnt-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-burnt-500" />
                <span>+91 98421 39997</span>
              </a>
              <a
                href="https://wa.me/919842139997"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ivory-200 hover:text-burnt-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Active 24/7</span>
              </a>
              <a
                href="mailto:jaishankarpcservices2021@gmail.com"
                className="flex items-center gap-2 text-ivory-200 hover:text-burnt-400 transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-sage-400" />
                <span className="font-sans text-[11px]">jaishankarpcservices2021@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-ivory-300/60 font-sans text-[11px] pt-1">
                <MapPin className="w-3.5 h-3.5 text-burnt-500 shrink-0 mt-0.5" />
                <span>Laboratory Bench: Jai Shankar PC Services, Madurai, Tamil Nadu</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory-300/50 text-center sm:text-left">
          <p>
            © {currentYear} Jai Shankar PC Services (JSPCS). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
            <span>Service Coverage: Madurai • Chennai • Coimbatore • Trichy</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
