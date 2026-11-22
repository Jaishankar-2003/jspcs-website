import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Phone,
  MessageCircle,
  Cpu,
  CheckCircle2,
  Wrench,
  ShieldCheck,
} from 'lucide-react'
import Logo from '@/components/Logo'
import BuildIcon from '@/components/ui/BuildIcon'
import ToolBadge from '@/components/ui/ToolBadge'
import BuildInquiry from '@/components/BuildInquiry'
import MobileActionBar from '@/components/MobileActionBar'
import { BUILD_CATEGORIES, BUILD_GALLERY } from '@/lib/pc-builds-data'
import { CONTACT, waTopic } from '@/lib/site-config'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Custom PC Builds in Madurai | Gaming, Workstation, Creator & AI Rigs – JSPCS',
  description:
    'Custom PC building in Madurai tailored to your workload: Gaming & Streaming, Video Editing, Software Development, Trading, AI & Deep Learning, Architecture CAD, GIS, and Servers. Call 9842139997.',
  keywords: [
    'custom pc build madurai',
    'gaming pc build madurai',
    'workstation pc build madurai',
    'video editing pc madurai',
    'developer pc build',
    'architecture cad pc',
    'ai workstation madurai',
    'trading pc setup',
    'gis workstation pc',
    'custom pc builder tamil nadu',
  ],
  alternates: {
    canonical: 'https://jspcs.online/custom-pc-builds',
  },
}

export default function CustomPCBuildsHub() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#EAE6DC] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center" aria-label="JSPCS Home">
              <Logo size="sm" showText={true} />
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={CONTACT.tel}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Call {CONTACT.phoneDisplay}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a
                href={waTopic('build')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs font-mono text-warmgrey-400 py-2">
          <li>
            <Link href="/" className="hover:text-burnt-500 transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-warmgrey-300" />
          <li className="text-graphite-900 font-bold">Custom PC Builds</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-burnt-500 font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Custom Workstations &amp; Gaming Rigs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-graphite-900 tracking-tight leading-tight">
            Custom PC Builds Built for Your Workload, Not a Template.
          </h1>
          <p className="text-base sm:text-lg text-warmgrey-500 leading-relaxed font-sans">
            Every user needs a different machine. We plan CPU, GPU, RAM, storage, cooling, and power supplies around
            the specific applications you use every day — whether you are rendering 4K video, training AI models, drafting in Revit,
            competing in esports, or managing a trading desk.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#build-inquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-bold text-sm shadow-burnt-glow transition-colors"
            >
              <Cpu className="w-4 h-4" /> Start Build Inquiry
            </a>
            <a
              href={waTopic('build')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ivory-300 bg-white hover:border-[#25D366] text-graphite-900 font-semibold text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat with Builder
            </a>
          </div>
        </div>
      </section>

      {/* 9 Workload Categories */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-[#EAE6DC]">
        <div className="mb-8 space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Select Your Profession / Workload
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight">
            Explore Build Categories
          </h2>
          <p className="text-sm text-warmgrey-500 max-w-2xl">
            Click into any category to view software compatibility, hardware priority breakdowns, build tiers, and upgrade paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILD_CATEGORIES.map((cat) => (
            <article
              key={cat.slug}
              className="rounded-3xl bg-white border border-[#EAE6DC] overflow-hidden hover:border-burnt-500/50 hover:shadow-atelier transition-all flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-graphite-900">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent" />
                <span className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-burnt-500 text-white flex items-center justify-center shadow-md">
                  <BuildIcon icon={cat.icon} />
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-burnt-500">{cat.tagline}</p>
                  <p className="text-sm text-warmgrey-500 line-clamp-3 leading-relaxed">{cat.summary}</p>
                </div>

                <div className="space-y-3 pt-2 border-t border-[#EAE6DC]/70">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-700 block mb-1.5">
                      Tools &amp; Software Planned:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tools.slice(0, 4).map((tool) => (
                        <ToolBadge key={tool} name={tool} size="sm" showLabel={true} theme="light" />
                      ))}
                      {cat.tools.length > 4 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] text-warmgrey-500 bg-ivory-100 font-mono">
                          +{cat.tools.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/custom-pc-builds/${cat.slug}`}
                    className="inline-flex items-center justify-between w-full pt-2 font-mono text-xs font-bold uppercase tracking-wider text-burnt-500 group-hover:text-burnt-600 transition-colors"
                  >
                    <span>View Specifications &amp; Tiers</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bench Photos */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 border-t border-[#EAE6DC]">
        <div className="mb-6 space-y-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Real Craftsmanship
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight">
            Assembled on the JSPCS Bench
          </h2>
          <p className="text-sm text-warmgrey-500">
            Zero shortcuts. High-efficiency cable routing, thermal pressure testing, and burn-in validation before delivery.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BUILD_GALLERY.map((item, i) => (
            <div key={item.title} className="rounded-2xl overflow-hidden border border-[#EAE6DC] bg-white group flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] overflow-hidden bg-graphite-900">
                <Image
                  src={item.src}
                  alt={`${item.title} custom PC assembled at JSPCS`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono text-[10px] font-bold text-burnt-400">
                  RIG #{i + 1}
                </div>
              </div>
              <div className="p-3.5 space-y-1">
                <h3 className="font-bold text-sm text-graphite-900 truncate">{item.title}</h3>
                <p className="font-mono text-[11px] text-warmgrey-500 truncate">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Configurator / Inquiry */}
      <section id="build-inquiry" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-14 scroll-mt-24 border-t border-[#EAE6DC]">
        <div className="text-center space-y-3 mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Guided Build Selection Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-graphite-900 tracking-tight">
            Plan Your Custom PC in 4 Steps
          </h2>
          <p className="text-sm text-warmgrey-500 max-w-xl mx-auto">
            Select your workload, set your budget, and pick any personal preferences. We will generate a structured inquiry
            and send it directly to our lead builder on WhatsApp.
          </p>
        </div>

        <BuildInquiry />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-graphite-950 text-ivory-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo size="sm" showText={true} inverted={true} />
            <p className="text-xs font-mono text-ivory-300/60">
              © {new Date().getFullYear()} Jai Shankar PC Services (JSPCS). Madurai, Tamil Nadu.
            </p>
          </div>
        </div>
      </footer>

      <MobileActionBar bookHref="#build-inquiry" bookLabel="Build PC" waMessage={waTopic('build')} />
    </div>
  )
}
