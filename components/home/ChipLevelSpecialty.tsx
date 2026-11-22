import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MessageCircle, Power, Droplets, MonitorX, RefreshCcw, Plus } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { waTopic } from '@/lib/site-config'

const SIGNS = [
  { icon: Power, text: 'Laptop or PC will not turn on' },
  { icon: Droplets, text: 'Liquid spilled on the laptop' },
  { icon: MonitorX, text: 'No display, or keeps restarting' },
  { icon: RefreshCcw, text: 'Told to "replace the motherboard"' },
]

/** Technical deep-dive – condensed from the existing chip-level content. */
const DEEP_DIVE = [
  {
    q: 'Power rail & short-circuit diagnosis',
    a: 'A board that will not power on usually has a fault on one of its power rails (for example the main 19V input or the 5V / 3.3V lines). We trace each rail to find the shorted or failed part instead of guessing.',
  },
  {
    q: 'MOSFETs, ICs, charging circuits & BIOS',
    a: 'Common failures include MOSFETs, charging ICs, power controller ICs, fuses and capacitors. A corrupted BIOS chip can also stop a board from starting – it can often be re-programmed or replaced.',
  },
  {
    q: 'BGA work & micro-soldering',
    a: 'Some chips (such as GPUs) are soldered with tiny balls underneath (BGA). Cracked joints cause artefacts or no display. Reballing / rework restores the connection where the chip itself is healthy.',
  },
  {
    q: 'Liquid damage',
    a: 'Liquid causes corrosion that keeps spreading. The board is cleaned, dried and checked component by component. Do not switch on a wet laptop – bring it in as early as possible.',
  },
  {
    q: 'Repair or replace – how we decide',
    a: 'If the fault is in a replaceable component and the board is otherwise healthy, component-level repair is usually far cheaper than a new board. If repair is not practical or reliable, we tell you honestly and suggest the best alternative.',
  },
]

export default function ChipLevelSpecialty() {
  return (
    <section id="chip-level" aria-labelledby="chip-heading" className="py-14 sm:py-24 bg-[#FAF9F6] border-y border-ivory-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Customer-facing */}
        <div className="lg:col-span-6 space-y-6">
          <SectionHeader
            id="chip-heading"
            eyebrow="Our speciality"
            title="Chip-Level Motherboard Repair"
            description="Motherboard problems don't always mean the entire board needs replacement. We diagnose the fault and check whether component-level repair is possible."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SIGNS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 rounded-xl bg-white border border-ivory-200 p-3 text-sm font-semibold text-graphite-800">
                <Icon className="w-5 h-5 text-burnt-500 shrink-0" aria-hidden="true" /> {text}
              </li>
            ))}
          </ul>
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-ivory-200 bg-graphite-900 shadow-md">
            <Image
              src="/img/lookbook/motherboard-bench-169.webp"
              alt="Close-up of motherboard micro-components, power rails, and SMD rework bench at JSPCS"
              fill
              loading="lazy"
              sizes="(max-width:1024px) 92vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link href="/chip-level-service-in-madurai" className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-white text-sm font-bold">
              Explore Chip-Level Repair <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={waTopic('chip')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl border border-ivory-300 text-graphite-900 text-sm font-semibold hover:border-[#25D366]">
              <MessageCircle className="w-4 h-4 text-[#1fae55]" /> Ask about diagnosis
            </a>
          </div>
        </div>

        {/* Technical deep-dive */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-graphite-900 text-ivory-100 p-5 sm:p-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-burnt-400">Technical deep-dive</p>
            <h3 className="text-xl font-bold text-white mt-1">For those who want the details</h3>
            <div className="mt-4 divide-y divide-white/10">
              {DEEP_DIVE.map(item => (
                <details key={item.q} className="group py-1">
                  <summary className="flex items-center justify-between gap-3 min-h-[52px] cursor-pointer list-none font-semibold text-[15px] text-white">
                    {item.q}
                    <Plus className="w-5 h-5 text-burnt-400 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="pb-4 text-sm text-ivory-300/80 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
            <Link href="/motherboard-repair-madurai" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-burnt-400 min-h-[44px]">
              Motherboard repair in detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
