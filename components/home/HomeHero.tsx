import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  Wrench,
  Cpu,
  ShieldCheck,
  Laptop,
  Zap,
  CircuitBoard,
  Wifi,
  ArrowRight,
  BadgeCheck,
  Stethoscope,
  Truck,
} from 'lucide-react'
import { CONTACT, waTopic, VERIFIED_CLAIMS } from '@/lib/site-config'

const PILLARS = [
  { icon: Laptop, title: 'Laptop & Desktop Service', line: 'Repairs, diagnosis, OS & software', href: '#services' },
  { icon: Cpu, title: 'Custom PC Builds', line: 'Gaming, editing, dev, AI, CAD…', href: '#pc-builds' },
  { icon: ShieldCheck, title: 'PC & IT AMC', line: 'Maintenance plans for home & office', href: '#amc' },
  { icon: Zap, title: 'Hardware Upgrades', line: 'SSD, RAM, GPU, cooling', href: '#upgrades' },
  { icon: CircuitBoard, title: 'Chip-Level Repair', line: 'Motherboard-level diagnosis', href: '#chip-level' },
  { icon: Wifi, title: 'IT Support & Networking', line: 'Wi-Fi, printers, backup, security', href: '#it-support' },
]

export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-graphite-900 text-ivory-100 atelier-grid-dark pt-24 lg:pt-28"
    >
      {/* Ambient glows using brand colours */}
      <div className="pointer-events-none absolute -top-24 right-[-20%] w-[520px] h-[520px] rounded-full bg-burnt-500/20 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-[-15%] w-[420px] h-[420px] rounded-full bg-sage-400/10 blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <p className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-ivory-200">
              <span className="w-2 h-2 rounded-full bg-burnt-500" aria-hidden="true" />
              PC &amp; IT Solutions · Madurai, Tamil Nadu
            </p>

            <h1 id="hero-heading" className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem] font-black tracking-tight text-white">
              Your PC. Your Work. Your Game.{' '}
              <span className="text-burnt-gradient">We Build &amp; Keep It Running.</span>
            </h1>

            <p className="text-[15px] sm:text-lg text-ivory-300/85 leading-relaxed max-w-xl">
              Need a laptop repair, a faster PC, a custom gaming setup or reliable IT support? JSPCS helps you repair, upgrade,
              build and maintain your system – based on what you actually need.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-bold text-[15px] shadow-burnt-glow transition-colors"
              >
                <Wrench className="w-5 h-5" aria-hidden="true" /> Book a PC Service
              </a>
              <a
                href="#build-my-pc"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-xl bg-ivory-100 hover:bg-white text-graphite-900 font-bold text-[15px] transition-colors"
              >
                <Cpu className="w-5 h-5 text-burnt-500" aria-hidden="true" /> Build My PC
              </a>
              <a
                href={waTopic('service')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 rounded-xl border border-white/15 hover:border-[#25D366] text-white font-semibold text-[15px] transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" aria-hidden="true" /> WhatsApp Us
              </a>
            </div>

            <a href={CONTACT.tel} className="inline-flex items-center gap-2.5 text-ivory-200 hover:text-white group">
              <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-burnt-500">
                <Phone className="w-4 h-4 text-burnt-400" aria-hidden="true" />
              </span>
              <span className="text-sm">
                Call a technician: <strong className="font-mono text-base text-white tracking-wide">{CONTACT.phoneDisplay}</strong>
              </span>
            </a>

            {/* Trust indicators – verified / process-based only */}
            <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2 pt-2 text-[13px] text-ivory-300/80">
              {VERIFIED_CLAIMS.msme && (
                <li className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-sage-400 shrink-0" aria-hidden="true" /> Govt. MSME registered</li>
              )}
              <li className="flex items-center gap-1.5"><Stethoscope className="w-4 h-4 text-sage-400 shrink-0" aria-hidden="true" /> Diagnosis before repair</li>
              <li className="flex items-center gap-1.5"><Laptop className="w-4 h-4 text-sage-400 shrink-0" aria-hidden="true" /> All major brands</li>
              <li className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-sage-400 shrink-0" aria-hidden="true" /> Pickup &amp; delivery</li>
            </ul>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              <div className="absolute inset-6 rounded-[2rem] bg-burnt-500/30 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-atelier-dark aspect-[5/4] bg-graphite-950">
                <Image
                  src="/img/hero-rig.webp"
                  alt="Custom-built PC with warm orange lighting, assembled by JSPCS"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-graphite-950/90 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                  {['Repair', 'Upgrade', 'Build', 'Maintain'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Six pillars – the whole business at a glance */}
        <nav aria-label="What JSPCS does" className="relative mt-10 lg:mt-14 pb-10 lg:pb-14">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {PILLARS.map(({ icon: Icon, title, line, href }, i) => (
              <li key={title}>
                <Link
                  href={href}
                  className={`group h-full flex flex-col gap-2 p-3 sm:p-4 rounded-2xl border transition-colors ${
                    i === 0
                      ? 'bg-burnt-500 border-burnt-500 text-white'
                      : 'bg-white/[0.04] border-white/10 hover:border-burnt-500/60 text-ivory-100'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <Icon className={`w-5 h-5 ${i === 0 ? 'text-white' : 'text-burnt-400'}`} aria-hidden="true" />
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition" aria-hidden="true" />
                  </span>
                  <span className="text-[13px] sm:text-sm font-bold leading-snug">{title}</span>
                  <span className={`text-[11.5px] sm:text-xs leading-snug ${i === 0 ? 'text-white/85' : 'text-ivory-300/65'}`}>{line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
