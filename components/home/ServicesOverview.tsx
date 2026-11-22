import Link from 'next/link'
import Image from 'next/image'
import {
  Laptop,
  Monitor,
  Gauge,
  AppWindow,
  MemoryStick,
  Gamepad2,
  DatabaseBackup,
  Printer,
  Wifi,
  ArrowRight,
  MessageCircle,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { waLink, waTopic } from '@/lib/site-config'
import { brandRepairRoutes } from '@/lib/navigation-data'

interface ServiceCard {
  icon: LucideIcon
  title: string
  items: string[]
  href: string
  cta: 'Explore Service' | 'Book Repair' | 'Contact Technician'
}

const SERVICES: ServiceCard[] = [
  { icon: Laptop, title: 'Laptop Repair', href: '/laptop-service-center-in-madurai', cta: 'Explore Service',
    items: ['Laptop troubleshooting', 'Display issues', 'Keyboard replacement', 'Battery problems', 'Charging issues', 'Hinge & body repairs', 'Heating & fan issues', 'OS problems', 'Hardware diagnosis'] },
  { icon: Monitor, title: 'Desktop PC Service', href: '/desktop-repair-service-in-madurai', cta: 'Explore Service',
    items: ['Desktop troubleshooting', 'Hardware diagnostics', 'Power & boot issues', 'Cooling issues', 'Component replacement', 'PC assembly', 'System maintenance'] },
  { icon: Gauge, title: 'PC Performance Improvement', href: '/ssd-upgrade-service-madurai', cta: 'Explore Service',
    items: ['Slow PC optimisation', 'SSD & RAM upgrades', 'Startup optimisation', 'Storage clean-up', 'Bottleneck check', 'Performance advice'] },
  { icon: AppWindow, title: 'OS & Software Support', href: '/windows-installation-service-madurai', cta: 'Explore Service',
    items: ['Windows installation', 'Linux installation', 'OS troubleshooting', 'Driver setup', 'Software installation', 'System configuration'] },
  { icon: MemoryStick, title: 'Hardware Upgrades', href: '#upgrades', cta: 'Explore Service',
    items: ['RAM upgrades', 'SSD upgrades', 'HDD replacement', 'GPU upgrades', 'CPU compatibility check', 'Cooling & PSU upgrades', 'Data migration'] },
  { icon: Gamepad2, title: 'Gaming PC Troubleshooting', href: '/gaming-laptop-repair-madurai', cta: 'Book Repair',
    items: ['Low FPS / stutter', 'Overheating & throttling', 'GPU driver issues', 'Game crashes', 'Hardware bottlenecks', 'Upgrade planning'] },
  { icon: DatabaseBackup, title: 'Data & Backup Assistance', href: '/data-recovery-service-madurai', cta: 'Contact Technician',
    items: ['Data transfer', 'Backup setup', 'Storage upgrades', 'Data migration', 'Backup planning'] },
  { icon: Printer, title: 'Printer & Peripheral Support', href: '/business-it-support-madurai', cta: 'Contact Technician',
    items: ['Printer setup', 'Scanner setup', 'Webcam, keyboard, mouse', 'External devices', 'POS peripherals'] },
  { icon: Wifi, title: 'Networking & Wi-Fi', href: '/business-it-support-madurai', cta: 'Contact Technician',
    items: ['Wi-Fi troubleshooting', 'Router setup', 'LAN connectivity', 'Network printers', 'Small-office networks'] },
]

const VISIBLE = 4

export default function ServicesOverview() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-14 sm:py-24 bg-ivory-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <SectionHeader
          id="services-heading"
          eyebrow="Our main service"
          title={<>Laptop &amp; Desktop Service</>}
          description="From everyday laptop problems to desktop hardware failures, we diagnose, repair and improve systems for students, professionals, gamers and businesses."
        />

        {/* Featured lead card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl bg-graphite-900 text-ivory-100 p-5 sm:p-8 flex flex-col justify-between gap-6">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-burnt-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-burnt-400">How a repair works</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Tell us the problem. We find the cause, explain it, and fix it with your OK.</h3>
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  ['1', 'Diagnose', 'We check the system and find the real cause.'],
                  ['2', 'Explain & quote', 'You get a clear estimate before any work.'],
                  ['3', 'Repair & test', 'We fix, test and hand it back working.'],
                ].map(([n, t, d]) => (
                  <li key={n} className="rounded-2xl bg-white/[0.05] border border-white/10 p-3.5">
                    <span className="font-mono text-burnt-400 text-xs font-bold">STEP {n}</span>
                    <p className="font-bold text-white text-sm mt-1">{t}</p>
                    <p className="text-xs text-ivory-300/70 mt-0.5 leading-relaxed">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative flex flex-col sm:flex-row gap-2.5">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white text-sm font-bold">
                <Wrench className="w-4 h-4" /> Book Repair
              </a>
              <a href={waTopic('service')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl border border-white/15 text-white text-sm font-semibold hover:border-[#25D366]">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> Send problem on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 relative min-h-[220px] rounded-3xl overflow-hidden border border-ivory-200 bg-graphite-900">
            <Image src="/img/lookbook/service-laptop.webp" alt="Professional laptop repair and diagnostics bench at JSPCS" fill sizes="(max-width:1024px) 92vw, 35vw" className="object-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-graphite-950/90 to-transparent">
              <p className="text-white font-bold text-sm">Laptops · Desktops · Gaming PCs · Office systems</p>
              <p className="text-ivory-300/80 text-xs">Students, professionals, gamers and businesses</p>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SERVICES.map(({ icon: Icon, title, items, href, cta }) => {
            const extra = items.slice(VISIBLE)
            const ctaHref = cta === 'Explore Service' ? href : waLink(`Hi JSPCS, I need help with ${title.toLowerCase()}. Can I share the details?`)
            const external = cta !== 'Explore Service'
            return (
              <li key={title} className="group flex flex-col rounded-2xl bg-white border border-ivory-200 p-4 sm:p-5 hover:border-burnt-500/50 hover:shadow-atelier transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-xl bg-burnt-500/10 text-burnt-500 flex items-center justify-center shrink-0 group-hover:bg-burnt-500 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-graphite-900 text-[15px] sm:text-base leading-snug">{title}</h3>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {items.slice(0, VISIBLE).map(it => (
                    <li key={it} className="px-2.5 py-1 rounded-lg bg-ivory-100 text-[12.5px] text-graphite-800">{it}</li>
                  ))}
                </ul>
                {extra.length > 0 && (
                  <details className="mt-1.5 group/d">
                    <summary className="cursor-pointer list-none text-xs font-semibold text-burnt-600 py-1.5 min-h-[32px] flex items-center">
                      <span className="group-open/d:hidden">+ {extra.length} more</span>
                      <span className="hidden group-open/d:inline">Show less</span>
                    </summary>
                    <ul className="flex flex-wrap gap-1.5">
                      {extra.map(it => (
                        <li key={it} className="px-2.5 py-1 rounded-lg bg-ivory-100 text-[12.5px] text-graphite-800">{it}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                  <Link
                    href={ctaHref}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-bold text-graphite-900 hover:text-burnt-500"
                  >
                    {cta} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  {!external && (
                    <a
                      href={waLink(`Hi JSPCS, I need help with ${title.toLowerCase()}. Can I share the details?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp JSPCS about ${title}`}
                      className="w-11 h-11 rounded-xl border border-ivory-200 flex items-center justify-center text-[#1fae55] hover:border-[#25D366]"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        {/* Brands */}
        <div className="rounded-2xl bg-white border border-ivory-200 p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <p className="text-sm font-bold text-graphite-900 shrink-0">We service all major laptop brands:</p>
          <ul className="flex flex-wrap gap-2">
            {brandRepairRoutes.map(b => (
              <li key={b.href}>
                <Link href={b.href} className="inline-flex items-center min-h-[40px] px-3.5 rounded-xl bg-ivory-100 border border-ivory-200 text-sm font-semibold text-graphite-800 hover:border-burnt-500 hover:text-burnt-600">
                  {b.label.replace(' Repair', '')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
