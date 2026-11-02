import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, Star, CheckCircle, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react'
import RelatedServiceCards from './RelatedServiceCards'
import RelatedArticles from './RelatedArticles'
import Logo from './Logo'

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceHighlight {
  title: string
  description: string
  icon: string
}

export interface LocalSEOPageProps {
  // Page identity
  pageSlug: string
  city: string
  state: string
  // Hero
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  // Sections
  sections: {
    id: string
    heading: string
    subheading?: string
    content: string // rich HTML or plain text
  }[]
  // Highlights
  serviceHighlights: ServiceHighlight[]
  // FAQs
  faqs: FAQItem[]
  // Schema (injected as JSON-LD)
  schemaData: object[]
  // Breadcrumb label
  breadcrumbLabel: string
  // Internal related pages
  relatedPages?: { href: string; label: string }[]
  // CTA
  ctaHeading?: string
  ctaDescription?: string
}

const PHONE = '9842139997'
const WHATSAPP = 'https://wa.me/919842139997'

export default function LocalSEOPageLayout({
  pageSlug,
  city,
  state,
  heroTitle,
  heroSubtitle,
  heroDescription,
  sections,
  serviceHighlights,
  faqs,
  schemaData,
  breadcrumbLabel,
  relatedPages = [],
  ctaHeading,
  ctaDescription,
}: LocalSEOPageProps) {
  return (
    <>
      {/* Structured Data */}
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white">
        {/* ── Top Nav Bar ─────────────────────────────────────── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#EAE6DC] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center" aria-label="JSPCS Atelier Home">
                <Logo size="sm" showText={true} />
              </Link>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-burnt-500 hover:bg-burnt-600 text-white rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  aria-label={`Call JSPCS Online: ${PHONE}`}
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">Call {PHONE}</span>
                  <span className="sm:hidden">{PHONE}</span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  aria-label="WhatsApp JSPCS Online"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ── Breadcrumb ───────────────────────────────────────── */}
        <nav
          className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono text-warmgrey-400 py-4">
            <li>
              <Link href="/" className="hover:text-burnt-500 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3 text-[#D8D2C2]" />
            <li>
              <Link href="/chip-level-service-in-madurai" className="hover:text-burnt-500 transition-colors">
                Services
              </Link>
            </li>
            <ChevronRight className="w-3 h-3 text-[#D8D2C2]" />
            <li className="text-graphite-900 font-bold truncate max-w-[200px] sm:max-w-none">{breadcrumbLabel}</li>
          </ol>
        </nav>

        {/* ── Hero Section ─────────────────────────────────────── */}
        <section
          className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 pt-4"
          aria-labelledby="page-hero-heading"
        >
          <div className="relative max-w-4xl space-y-4">
            {/* City Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-burnt-500 font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>{city}, {state} Laboratory Benchmark</span>
            </div>

            <h1
              id="page-hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight leading-tight"
            >
              {heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-burnt-500 font-semibold font-mono">
              {heroSubtitle}
            </p>
            <p className="text-sm sm:text-base text-graphite-800 leading-relaxed max-w-3xl font-sans">
              {heroDescription}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: <Star className="w-3.5 h-3.5 fill-burnt-500 text-burnt-500" />, label: '4.9★ Rated Lab' },
                { icon: <Clock className="w-3.5 h-3.5 text-sage-500" />, label: 'Same-Day Diagnostics' },
                { icon: <ShieldCheck className="w-3.5 h-3.5 text-burnt-500" />, label: '90-Day Written Warranty' },
                { icon: <MapPin className="w-3.5 h-3.5 text-sage-500" />, label: 'Safe Doorstep Pickup' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#EAE6DC] rounded-xl text-xs font-mono font-medium text-graphite-800 shadow-sm"
                >
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-burnt-500 hover:bg-burnt-600 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-burnt-500/25"
                aria-label={`Call JSPCS Online at ${PHONE}`}
              >
                <Phone className="w-4 h-4" />
                <span>Call Technician: {PHONE}</span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-[#25D366]/25"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Service Highlights Grid ──────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-[#EAE6DC]"
          aria-label="Service Highlights"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {serviceHighlights.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-[#EAE6DC] rounded-2xl p-4 sm:p-5 hover:border-burnt-500/50 hover:shadow-md transition-all group"
              >
                <span className="text-2xl mb-2 block" role="img" aria-hidden="true">{s.icon}</span>
                <h3 className="text-sm font-bold text-graphite-900 mb-1 group-hover:text-burnt-500 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-warmgrey-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Content Sections ─────────────────────────────── */}
        <main
          id="main-content"
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10"
        >
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`section-${section.id}`} className="space-y-4">
                <div className="border-b border-[#EAE6DC] pb-3">
                  <h2
                    id={`section-${section.id}`}
                    className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight"
                  >
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="text-xs font-mono font-bold text-burnt-500 uppercase tracking-wider mt-1">{section.subheading}</p>
                  )}
                </div>
                <div
                  className="prose max-w-none text-sm sm:text-base leading-relaxed text-graphite-800 prose-headings:text-graphite-900 prose-headings:font-bold prose-strong:text-graphite-900 prose-strong:font-bold prose-p:leading-relaxed prose-li:text-graphite-800"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>
        </main>

        {/* ── FAQ Section ──────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-14 border-t border-[#EAE6DC]"
          aria-labelledby="faq-heading"
        >
          <div className="mb-8 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
              Clear Answers
            </span>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-black text-graphite-900 tracking-tight"
            >
              Frequently Asked Questions in {city}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white border border-[#EAE6DC] rounded-2xl overflow-hidden group shadow-sm"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-graphite-900 font-bold text-sm sm:text-base hover:text-burnt-500 transition-colors">
                  <span>{faq.question}</span>
                  <span className="ml-4 text-burnt-500 text-lg font-mono font-bold flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-warmgrey-400 leading-relaxed text-xs sm:text-sm border-t border-[#EAE6DC]/60 font-sans">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10"
          aria-label="Call to Action"
        >
          <div className="relative rounded-3xl overflow-hidden bg-graphite-900 border border-white/10 p-8 sm:p-12 text-center text-ivory-100 shadow-2xl space-y-5">
            <div className="absolute top-0 right-0 w-72 h-72 bg-burnt-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-black text-white relative">
              {ctaHeading || `Book Diagnostic Bench Inspection in ${city}`}
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300/80 max-w-2xl mx-auto relative font-sans leading-relaxed">
              {ctaDescription || `Get transparent component diagnosis and genuine OEM replacement parts across all areas of ${city}, ${state}.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center relative pt-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-burnt-500 hover:bg-burnt-600 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md shadow-burnt-500/25"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PHONE}</span>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Related Pages / Internal Links ───────────────────── */}
        <section
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-[#EAE6DC]"
          aria-label="Related Services"
        >
          {relatedPages.length > 0 && (
            <RelatedServiceCards 
              slugs={relatedPages.map(p => p.href)} 
              title={`Related ${city} Engineering Services`} 
            />
          )}

          <div className="mt-8 pt-8 border-t border-[#EAE6DC]">
            <RelatedArticles limit={3} />
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#D8D2C2] text-xs font-mono font-bold text-graphite-900 hover:bg-ivory-100 hover:text-burnt-500 transition-colors shadow-sm"
            >
              <ChevronRight className="w-3.5 h-3.5 rotate-180" />
              <span>Back to Atelier Homepage</span>
            </Link>
          </div>
        </section>

        {/* ── Subpage Footer ───────────────────────────────────── */}
        <footer className="border-t border-white/10 bg-graphite-950 text-ivory-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div>
                <Logo size="sm" showText={true} inverted={true} />
                <p className="text-ivory-300/60 text-xs leading-relaxed mt-3">
                  Expert PC &amp; Laptop Repair | Chip-Level | Custom Builds across {state}.
                </p>
              </div>
              <div>
                <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3">
                  Services in {city}
                </h4>
                <ul className="space-y-1 text-xs text-ivory-300/70">
                  <li><Link href="/laptop-service-center-in-madurai" className="hover:text-white transition-colors">Laptop Repair in Madurai</Link></li>
                  <li><Link href="/computer-service-center-in-madurai" className="hover:text-white transition-colors">Computer Repair in Madurai</Link></li>
                  <li><Link href="/chip-level-service-in-madurai" className="hover:text-white transition-colors">Chip-Level Service in Madurai</Link></li>
                  <li><Link href="/custom-gaming-pc-build-in-madurai" className="hover:text-white transition-colors">Gaming PC Build in Madurai</Link></li>
                  <li><Link href="/desktop-repair-service-in-madurai" className="hover:text-white transition-colors">Desktop Repair in Madurai</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3">
                  Contact
                </h4>
                <ul className="space-y-2 text-xs font-mono text-ivory-300/70">
                  <li>
                    <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-burnt-500" /> {PHONE}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:jaishankarpcservices2021@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                      <span className="text-sage-400">✉</span> jaishankarpcservices2021@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Active 24/7
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 text-center text-ivory-300/40 text-xs font-mono">
              © {new Date().getFullYear()} Jai Shankar PC Services. All Rights Reserved. | {city}, {state}
            </div>
          </div>
        </footer>

        {/* ── WhatsApp Float Button ─────────────────────────────── */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 text-white transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </a>
      </div>
    </>
  )
}
