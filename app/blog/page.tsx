import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Calendar, Clock, ArrowRight, Phone, MessageCircle } from 'lucide-react'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Hardware & Engineering Articles | JSPCS Online Madurai',
  description: 'Technical troubleshooting guides, motherboard repair insights, thermal management tips, and gaming PC build recommendations by Jai Shankar PC Services.',
  alternates: {
    canonical: 'https://jspcs.online/blog',
  },
}

const articles = [
  {
    slug: '/blog/how-to-fix-laptop-overheating',
    title: 'How to Fix Laptop Overheating: Complete Thermal & Fan Cleaning Guide',
    date: '2026-03-15',
    readTime: '6 min read',
    category: 'Thermal Architecture',
    excerpt: 'Detailed diagnosis of thermal throttling, heat pipe vapor lock, degraded thermal interface materials (TIM), and fan dust build-up with step-by-step solutions.',
  },
  {
    slug: '/blog/laptop-motherboard-repair-vs-replacement',
    title: 'Laptop Motherboard Repair vs Replacement: Chip-Level Diagnostic Guide',
    date: '2026-03-10',
    readTime: '8 min read',
    category: 'Micro-Soldering',
    excerpt: 'Why replacing a motherboard costs 3x-4x more than isolating a shorted 19V rail MOSFET or PWM controller. Understand component-level bench repair.',
  },
  {
    slug: '/blog/best-gaming-pc-build-under-50000',
    title: 'Best Gaming PC Build Under ₹50,000 in India (2026 Edition)',
    date: '2026-03-05',
    readTime: '7 min read',
    category: 'Custom PC Builds',
    excerpt: 'Optimized budget gaming PC configuration balancing CPU core clock, GPU VRAM, 3200MHz RAM, and 80+ certified PSU for smooth 1080p competitive gaming.',
  },
  {
    slug: '/blog/ssd-vs-hdd-performance-comparison',
    title: 'SSD vs HDD Performance Comparison: NVMe Gen4 Upgrade Benefits',
    date: '2026-02-28',
    readTime: '5 min read',
    category: 'Storage Upgrades',
    excerpt: 'Real-world benchmarks comparing mechanical hard drives against PCIe Gen4 NVMe SSDs for OS boot times, application loading, and gaming frame drops.',
  },
  {
    slug: '/blog/windows-11-vs-windows-10-performance',
    title: 'Windows 11 vs Windows 10 Performance: Gaming & Workstation Benchmarks',
    date: '2026-02-20',
    readTime: '6 min read',
    category: 'OS Optimization',
    excerpt: 'Evaluating Intel Thread Director, DirectX 12 Ultimate DirectStorage, background process scheduling, and RAM overhead for laptops and custom desktops.',
  },
]

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#EAE6DC] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center" aria-label="JSPCS Atelier Home">
              <Logo size="sm" showText={true} />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/#pc-builds"
                className="hidden sm:inline-block px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-graphite-800 hover:text-burnt-500"
              >
                PC Builds
              </Link>
              <Link
                href="/#diagnostic-bench"
                className="hidden sm:inline-block px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-graphite-800 hover:text-burnt-500"
              >
                Bench Protocol
              </Link>
              <a
                href="https://wa.me/919842139997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-[#D8D2C2] pb-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            <BookOpen className="w-4 h-4" />
            <span>Hardware Atelier Engineering Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
            Technical Guides, Diagnostic Insights & Build Protocols
          </h1>
          <p className="text-sm sm:text-base font-normal text-warmgrey-400 max-w-2xl leading-relaxed">
            Authentic hardware knowledge written by practicing chip-level engineers at Jai Shankar PC Services, Madurai.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE6DC] hover:border-burnt-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-warmgrey-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-burnt-500/10 text-burnt-600 font-bold uppercase">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors">
                  <Link href={art.slug}>{art.title}</Link>
                </h2>

                <p className="text-sm text-warmgrey-400 font-sans leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                <span className="font-mono text-xs text-sage-600 font-bold">
                  By Jai Shankar // Lead Technician
                </span>
                <Link
                  href={art.slug}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-burnt-500 group-hover:text-burnt-600 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Support Banner */}
        <div className="p-8 rounded-3xl bg-graphite-900 text-ivory-100 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Need Hands-on Component Diagnostics?</h3>
            <p className="text-xs sm:text-sm text-ivory-300/80">
              Speak directly with technician Jai Shankar for immediate workbench testing in Madurai.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:9842139997"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sage-400" />
              <span>98421 39997</span>
            </a>
            <a
              href="https://wa.me/919842139997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
