import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cpu, Sparkles } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import BuildIcon from '@/components/ui/BuildIcon'
import ToolBadge from '@/components/ui/ToolBadge'
import { BUILD_CATEGORIES, BUILD_GALLERY } from '@/lib/pc-builds-data'

export default function BuildsShowcase() {
  return (
    <section id="pc-builds" aria-labelledby="builds-heading" className="py-14 sm:py-24 bg-graphite-950 text-ivory-100 relative overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-burnt-500/10 blur-[120px]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <SectionHeader
            id="builds-heading"
            dark
            eyebrow="Custom PC Builds"
            title={<>A PC built around <span className="text-burnt-gradient">your work</span> – not a template.</>}
            description="Gamers, editors, developers, architects, traders, AI and GIS users all need different hardware. Pick your workload to see what matters, which tools we plan for, and the build tiers we offer."
          />
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <a href="#build-my-pc" className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white text-sm font-bold">
              <Cpu className="w-4 h-4" /> Build My PC
            </a>
            <Link href="/custom-pc-builds" className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl border border-white/15 hover:border-burnt-500 text-white text-sm font-semibold">
              All build categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category cards – swipe on phones, grid on desktop */}
        <ul className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-2 sm:pb-0">
          {BUILD_CATEGORIES.map(cat => (
            <li key={cat.slug} className="snap-start shrink-0 w-[82%] xs:w-[70%] sm:w-auto">
              <Link
                href={`/custom-pc-builds/${cat.slug}`}
                className="group h-full flex flex-col rounded-2xl overflow-hidden bg-graphite-900 border border-white/10 hover:border-burnt-500/60 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-graphite-800">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} by JSPCS`}
                    fill
                    loading="lazy"
                    sizes="(max-width:640px) 80vw, (max-width:1024px) 45vw, 30vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/20 to-transparent" aria-hidden="true" />
                  <span className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-burnt-500 text-white flex items-center justify-center shadow-burnt-glow">
                    <BuildIcon icon={cat.icon} />
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-1">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg leading-snug group-hover:text-burnt-400 transition-colors">
                      {cat.shortTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory-300/75 leading-relaxed mt-1">{cat.tagline}</p>
                  </div>

                  {/* Tool Icons with official logos */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-warmgrey-400 block mb-1.5 font-bold">
                      Planned Tools &amp; Engines:
                    </span>
                    <div className="flex flex-wrap gap-1.5" aria-label={`Tools planned for ${cat.shortTitle}`}>
                      {cat.tools.slice(0, 3).map(tool => (
                        <ToolBadge key={tool} name={tool} size="sm" showLabel={true} theme="dark" />
                      ))}
                      {cat.tools.length > 3 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono text-ivory-300/60 bg-white/[0.04] border border-white/5">
                          +{cat.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-bold text-burnt-400 group-hover:gap-2.5 transition-all">
                    Explore specifications &amp; tiers <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Real builds lookbook gallery */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-burnt-400 uppercase tracking-wider">
                Lookbook Gallery
              </span>
              <h3 className="font-bold text-white text-lg sm:text-xl mt-0.5">
                From Our Assembly Bench
              </h3>
            </div>
            <span className="text-xs text-ivory-300/60 font-mono">
              Scroll →
            </span>
          </div>
          <ul className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-4 overflow-x-auto snap-x no-scrollbar pb-2">
            {BUILD_GALLERY.map((item, i) => (
              <li
                key={item.title}
                className="snap-start shrink-0 w-[78%] sm:w-[45%] lg:w-[28%] rounded-2xl overflow-hidden border border-white/10 bg-graphite-800/80 group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                  <Image
                    src={item.src}
                    alt={`${item.title} custom PC assembled at JSPCS`}
                    fill
                    loading="lazy"
                    sizes="(max-width:640px) 78vw, (max-width:1024px) 45vw, 28vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono text-[10px] font-bold text-burnt-400">
                    RIG #{i + 1}
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <h4 className="font-bold text-sm text-white truncate">{item.title}</h4>
                  <p className="font-mono text-[11px] text-ivory-300/60 truncate">{item.tag}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
