import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Cpu,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  HelpCircle,
} from 'lucide-react'
import Logo from '@/components/Logo'
import BuildIcon from '@/components/ui/BuildIcon'
import ToolBadge from '@/components/ui/ToolBadge'
import BuildInquiry from '@/components/BuildInquiry'
import MobileActionBar from '@/components/MobileActionBar'
import { BUILD_CATEGORIES, getBuildCategory } from '@/lib/pc-builds-data'
import { CONTACT, waLink } from '@/lib/site-config'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return BUILD_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cat = getBuildCategory(slug)
  if (!cat) return {}
  return {
    title: cat.seo.title,
    description: cat.seo.description,
    keywords: cat.seo.keywords,
    alternates: {
      canonical: `https://jspcs.online/custom-pc-builds/${cat.slug}`,
    },
    openGraph: {
      title: cat.seo.title,
      description: cat.seo.description,
      url: `https://jspcs.online/custom-pc-builds/${cat.slug}`,
      siteName: 'JSPCS Online',
      locale: 'en_IN',
      type: 'website',
    },
  }
}

export default async function BuildCategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = getBuildCategory(slug)
  if (!cat) notFound()

  const otherCategories = BUILD_CATEGORIES.filter((c) => c.slug !== cat.slug)

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white">
      {/* Sticky Header */}
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
                href={waLink(`Hi JSPCS, I want to discuss a ${cat.title} build for my requirements.`)}
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

      {/* Breadcrumbs */}
      <nav className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-warmgrey-400 py-2">
          <li>
            <Link href="/" className="hover:text-burnt-500 transition-colors">
              Home
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-warmgrey-300" />
          <li>
            <Link href="/custom-pc-builds" className="hover:text-burnt-500 transition-colors">
              Custom PC Builds
            </Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-warmgrey-300" />
          <li className="text-graphite-900 font-bold truncate max-w-[200px] sm:max-w-none">
            {cat.shortTitle}
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-burnt-500 font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
              <BuildIcon icon={cat.icon} className="w-3.5 h-3.5" />
              <span>Workload-Tailored PC Configuration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight leading-tight">
              {cat.title}
            </h1>
            <p className="text-base sm:text-lg text-burnt-500 font-mono font-semibold">{cat.tagline}</p>
            <p className="text-sm sm:text-base text-warmgrey-600 leading-relaxed font-sans max-w-2xl">
              {cat.summary}
            </p>

            {/* Target Audience Chips */}
            <div className="pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 block mb-2">
                Ideal for:
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.audience.map((aud) => (
                  <span
                    key={aud}
                    className="px-3 py-1 rounded-full bg-white border border-[#EAE6DC] text-xs font-semibold text-graphite-800 shadow-sm"
                  >
                    ✓ {aud}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#build-inquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-bold text-sm shadow-burnt-glow transition-colors"
              >
                <Cpu className="w-4 h-4" /> Plan My {cat.shortTitle}
              </a>
              <a
                href={waLink(`Hi JSPCS, I want to discuss a ${cat.title} build.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#D8D2C2] bg-white hover:border-[#25D366] text-graphite-900 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE6DC] shadow-atelier aspect-[4/3] bg-graphite-900">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span>Hand-assembled in Madurai</span>
                <span className="text-burnt-400 font-bold">Tested before handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Software & Workloads */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-[#EAE6DC]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight">
              Supported Software &amp; Frameworks
            </h2>
            <p className="text-sm text-warmgrey-500 leading-relaxed">
              We test and tune memory timings, GPU acceleration, and CPU scheduling for the specific suite you rely on:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.tools.map((tool) => (
                <ToolBadge key={tool} name={tool} size="md" showLabel={true} theme="light" />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight">
              Common Use Cases Handled
            </h2>
            <p className="text-sm text-warmgrey-500 leading-relaxed">
              Every day tasks this configuration is designed to execute without thermal throttling or memory choke:
            </p>
            <ul className="space-y-2 pt-1">
              {cat.useCases.map((uc) => (
                <li key={uc} className="flex items-center gap-2 text-sm text-graphite-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-burnt-500 shrink-0" />
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hardware Priorities Breakdown */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 border-t border-[#EAE6DC]">
        <div className="mb-8 space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Engineering Strategy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight">
            Which Components Matter Most for This Workload
          </h2>
          <p className="text-sm text-warmgrey-500 max-w-2xl">
            Where to spend your budget and where you can safely save money without sacrificing stability or productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.priorities.map((item, idx) => (
            <div
              key={item.part}
              className="p-5 rounded-2xl bg-white border border-[#EAE6DC] shadow-sm space-y-2 hover:border-burnt-500/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-burnt-500/10 text-burnt-500 font-mono text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="font-bold text-graphite-900 text-base">{item.part}</h3>
              </div>
              <p className="text-xs sm:text-sm text-warmgrey-500 leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Build Tiers */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 border-t border-[#EAE6DC]">
        <div className="mb-8 space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Configuration Tiers
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight">
            Recommended Specification Profiles
          </h2>
          <p className="text-sm text-warmgrey-500 max-w-2xl">
            Baseline recommendations. Exact components are chosen after discussing your preferred brands and budget range.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat.tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-sm hover:shadow-atelier hover:border-burnt-500/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-graphite-900">{tier.name}</h3>
                  <p className="text-xs font-mono text-burnt-500 mt-1 font-semibold">{tier.forWho}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-[#EAE6DC]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-700 block">
                    Core Specifications:
                  </span>
                  <ul className="space-y-1.5">
                    {tier.direction.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-graphite-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-burnt-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4">
                <a
                  href={`#build-inquiry`}
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-ivory-100 hover:bg-burnt-500 hover:text-white text-graphite-900 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Configure This Tier
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Considerations, Upgrade Paths & Notes */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-[#EAE6DC]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#EAE6DC] space-y-3">
            <div className="flex items-center gap-2 text-burnt-500 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Future Upgrade Planning</span>
            </div>
            <h3 className="text-lg font-bold text-graphite-900">Room to Grow</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-warmgrey-600">
              {cat.upgrades.map((up) => (
                <li key={up} className="flex items-start gap-2">
                  <span className="text-burnt-500 font-bold">→</span>
                  <span>{up}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#EAE6DC] space-y-3">
            <div className="flex items-center gap-2 text-graphite-800 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-warmgrey-500" />
              <span>Important Considerations</span>
            </div>
            <h3 className="text-lg font-bold text-graphite-900">Before You Buy</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-warmgrey-600">
              {cat.considerations.map((con) => (
                <li key={con} className="flex items-start gap-2">
                  <span className="text-burnt-500 font-bold">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
            {cat.note && (
              <div className="p-3 rounded-xl bg-ivory-100 border border-ivory-300 text-xs text-graphite-800 font-medium">
                {cat.note}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Inquiry Configurator */}
      <section id="build-inquiry" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-14 scroll-mt-24 border-t border-[#EAE6DC]">
        <div className="text-center space-y-3 mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Interactive Inquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-graphite-900 tracking-tight">
            Configure Your {cat.shortTitle}
          </h2>
          <p className="text-sm text-warmgrey-500 max-w-xl mx-auto">
            Choose your budget and preferences below to generate a tailored WhatsApp inquiry directly for our technicians.
          </p>
        </div>

        <BuildInquiry initialPurpose={cat.inquiryKey} />
      </section>

      {/* FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 border-t border-[#EAE6DC]">
        <div className="mb-6 space-y-1">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight">
            {cat.shortTitle} Hardware Queries
          </h2>
        </div>
        <div className="space-y-3">
          {cat.faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-white border border-[#EAE6DC] rounded-2xl overflow-hidden group shadow-sm"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-graphite-900 font-bold text-sm sm:text-base hover:text-burnt-500 transition-colors">
                <span>{faq.question}</span>
                <span className="ml-4 text-burnt-500 text-lg font-mono font-bold flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-warmgrey-500 leading-relaxed text-xs sm:text-sm border-t border-[#EAE6DC]/60 font-sans">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Cross-Link Other Categories */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 border-t border-[#EAE6DC]">
        <h2 className="text-xl font-bold text-graphite-900 mb-6">Explore Other Custom PC Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {otherCategories.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              href={`/custom-pc-builds/${c.slug}`}
              className="p-4 rounded-2xl bg-white border border-[#EAE6DC] hover:border-burnt-500/50 hover:shadow-sm transition-all group"
            >
              <BuildIcon icon={c.icon} className="w-5 h-5 text-burnt-500 mb-2" />
              <h3 className="text-sm font-bold text-graphite-900 group-hover:text-burnt-500 transition-colors truncate">
                {c.shortTitle}
              </h3>
              <p className="text-xs text-warmgrey-400 truncate mt-0.5">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Subpage Footer */}
      <footer className="border-t border-white/10 bg-graphite-950 text-ivory-100 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" showText={true} inverted={true} />
          <p className="text-xs font-mono text-ivory-300/60">
            © {new Date().getFullYear()} Jai Shankar PC Services (JSPCS). All Rights Reserved.
          </p>
        </div>
      </footer>

      <MobileActionBar
        bookHref="#build-inquiry"
        bookLabel="Build PC"
        waMessage={`Hi JSPCS, I want to discuss a ${cat.title} build.`}
      />
    </div>
  )
}
