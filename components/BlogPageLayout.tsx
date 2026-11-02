import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, ChevronRight, BookOpen, Calendar, Tag, Laptop, ArrowRight } from 'lucide-react'
import RelatedServiceCards from './RelatedServiceCards'
import Logo from './Logo'

export interface BlogFAQItem {
  question: string
  answer: string
}

export interface BlogPageProps {
  title: string
  subtitle: string
  intro?: string
  publishDate: string
  readTime?: string
  author?: string
  category: string
  content: string // rich HTML
  faqs: BlogFAQItem[]
  relatedServices?: { href: string; label: string }[]
  relatedBlogs?: { href: string; label: string; description: string }[]
  schemaData?: object[]
  slug: string
}

const PHONE = '9842139997'
const WHATSAPP = 'https://wa.me/919842139997'

export default function BlogPageLayout({
  title,
  subtitle,
  intro = '',
  publishDate,
  readTime = '5 min read',
  author = 'Jai Shankar',
  category,
  content,
  faqs,
  relatedServices = [],
  relatedBlogs = [],
  schemaData = [],
  slug,
}: BlogPageProps) {
  return (
    <>
      {schemaData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white">
        {/* ── Top Nav ─── */}
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
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ── Breadcrumb ─── */}
        <nav className="pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-warmgrey-400 py-4">
            <li><Link href="/" className="hover:text-burnt-500 transition-colors">Home</Link></li>
            <ChevronRight className="w-3 h-3 text-[#D8D2C2]" />
            <li><span className="text-warmgrey-400">Knowledge Hub</span></li>
            <ChevronRight className="w-3 h-3 text-[#D8D2C2]" />
            <li className="text-graphite-900 font-bold truncate max-w-[240px] sm:max-w-none">{title}</li>
          </ol>
        </nav>

        {/* ── Article Header ─── */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-10 pt-4">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-burnt-500 font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                <Tag className="w-3 h-3" />
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-graphite-800 font-mono text-xs shadow-sm">
                <Calendar className="w-3 h-3 text-warmgrey-400" />
                {publishDate}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-graphite-800 font-mono text-xs shadow-sm">
                <Clock className="w-3 h-3 text-sage-500" />
                {readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8D2C2] text-graphite-800 font-mono text-xs shadow-sm">
                <MapPin className="w-3 h-3 text-burnt-500" />
                Madurai Bench
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-burnt-500 font-mono font-semibold">{subtitle}</p>
            {intro && <p className="text-sm sm:text-base text-graphite-800 leading-relaxed font-sans max-w-3xl">{intro}</p>}

            {/* Author chip */}
            <div className="flex items-center gap-3 bg-white border border-[#EAE6DC] rounded-2xl px-4 py-3 w-fit shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-burnt-500/10 text-burnt-500 flex items-center justify-center font-bold font-mono">
                JS
              </div>
              <div>
                <p className="text-graphite-900 text-xs font-bold font-mono">{author}</p>
                <p className="text-warmgrey-400 text-[11px]">Chief Hardware Architect, JSPCS Online</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body Content ─── */}
        <main className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2 space-y-8">
              <div
                className="prose max-w-none text-sm sm:text-base leading-relaxed text-graphite-800 prose-headings:text-graphite-900 prose-headings:font-bold prose-strong:text-graphite-900 prose-strong:font-bold prose-p:leading-relaxed prose-li:text-graphite-800 prose-a:text-burnt-500 prose-a:font-semibold"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {relatedServices.length > 0 && (
                <RelatedServiceCards 
                  slugs={relatedServices.map(s => s.href)} 
                  title="Related Engineering Solutions" 
                />
              )}

              {/* Inline Callout */}
              <div className="rounded-3xl bg-graphite-900 text-ivory-100 border border-white/10 p-6 sm:p-8 text-center space-y-4 shadow-xl">
                <h3 className="text-xl font-bold text-white">Require Direct Diagnostic Assistance?</h3>
                <p className="text-xs text-ivory-300/70 max-w-md mx-auto">
                  Free component-level diagnosis · Honest bench pricing · 90-day written warranty across Tamil Nadu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a
                    href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-burnt-500 hover:bg-burnt-600 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Technician: {PHONE}</span>
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Diagnostics</span>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              {faqs.length > 0 && (
                <section aria-labelledby="blog-faq-heading" className="pt-6 border-t border-[#EAE6DC] space-y-4">
                  <h2 id="blog-faq-heading" className="text-xl font-bold text-graphite-900">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                      <details key={idx} className="bg-white border border-[#EAE6DC] rounded-2xl overflow-hidden group shadow-sm">
                        <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer list-none text-graphite-900 font-bold text-sm hover:text-burnt-500 transition-colors">
                          <span>{faq.question}</span>
                          <span className="ml-4 text-burnt-500 text-lg font-mono font-bold flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="px-5 pb-4 pt-1 text-warmgrey-400 leading-relaxed text-xs border-t border-[#EAE6DC]/60 font-sans">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Related blogs */}
              {relatedBlogs.length > 0 && (
                <section className="pt-6 border-t border-[#EAE6DC] space-y-4">
                  <h2 className="text-xl font-bold text-graphite-900">Related Articles</h2>
                  <div className="space-y-3">
                    {relatedBlogs.map(b => (
                      <Link
                        key={b.href}
                        href={b.href}
                        className="flex items-start gap-3 bg-white border border-[#EAE6DC] rounded-2xl p-4 hover:border-burnt-500/50 hover:shadow-md transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-ivory-100 text-burnt-500 flex items-center justify-center shrink-0 group-hover:bg-burnt-500 group-hover:text-white transition-colors">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-graphite-900 text-xs font-bold group-hover:text-burnt-500 transition-colors">{b.label}</p>
                          <p className="text-warmgrey-400 text-[11px] mt-0.5 leading-relaxed">{b.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white border border-[#EAE6DC] rounded-3xl p-6 shadow-sm sticky top-24 space-y-6">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-burnt-500 border-b border-[#EAE6DC] pb-3 mb-4 flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Popular Protocols</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs">
                    {[
                      { href: '/motherboard-repair-madurai', label: 'Chip-Level Board Repair' },
                      { href: '/laptop-heating-issue-repair-madurai', label: 'Overheating & Thermal Fix' },
                      { href: '/ssd-upgrade-service-madurai', label: 'Gen4 NVMe SSD Upgrade' },
                      { href: '/data-recovery-service-madurai', label: 'Forensic Data Recovery' },
                    ].map(s => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="text-graphite-800 hover:text-burnt-500 font-medium transition-colors flex items-center justify-between group"
                        >
                          <span>{s.label}</span>
                          <ArrowRight className="w-3 h-3 text-warmgrey-400 group-hover:text-burnt-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-burnt-500 border-b border-[#EAE6DC] pb-3 mb-4 flex items-center gap-2">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Laptop OEM Benches</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs">
                    {[
                      { href: '/dell-laptop-repair-madurai', label: 'Dell & Alienware Bench' },
                      { href: '/hp-laptop-repair-madurai', label: 'HP & OMEN Bench' },
                      { href: '/msi-gaming-laptop-repair-madurai', label: 'MSI Gaming Series' },
                    ].map(s => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="text-graphite-800 hover:text-burnt-500 font-medium transition-colors flex items-center justify-between group"
                        >
                          <span>{s.label}</span>
                          <ArrowRight className="w-3 h-3 text-warmgrey-400 group-hover:text-burnt-500 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EAE6DC] space-y-2">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-burnt-500 hover:bg-burnt-600 text-white rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Speak with Technician</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* ── Subpage Footer ─── */}
        <footer className="border-t border-white/10 bg-graphite-950 text-ivory-100 mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div>
                <Logo size="sm" showText={true} inverted={true} />
                <p className="text-ivory-300/60 text-xs leading-relaxed mt-3">
                  Expert PC &amp; Laptop Repair | Chip-Level | Custom Builds across Tamil Nadu.
                </p>
              </div>
              <div>
                <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3">
                  Laboratory Services
                </h4>
                <ul className="space-y-1 text-xs text-ivory-300/70">
                  <li><Link href="/laptop-service-center-in-madurai" className="hover:text-white transition-colors">Laptop Repair</Link></li>
                  <li><Link href="/motherboard-repair-madurai" className="hover:text-white transition-colors">Motherboard Repair</Link></li>
                  <li><Link href="/gaming-laptop-repair-madurai" className="hover:text-white transition-colors">Gaming Laptop Repair</Link></li>
                  <li><Link href="/ssd-upgrade-service-madurai" className="hover:text-white transition-colors">SSD Upgrade</Link></li>
                  <li><Link href="/custom-gaming-pc-build-in-madurai" className="hover:text-white transition-colors">Gaming PC Build</Link></li>
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
              © {new Date().getFullYear()} Jai Shankar PC Services. All Rights Reserved. | Madurai, Tamil Nadu
            </div>
          </div>
        </footer>

        {/* ── WhatsApp Float ─── */}
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
