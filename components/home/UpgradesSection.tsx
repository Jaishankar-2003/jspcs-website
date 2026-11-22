import Link from 'next/link'
import { HardDrive, MemoryStick, MonitorPlay, Fan, PlugZap, Cpu, ArrowRightLeft, ArrowRight, MessageCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { waTopic } from '@/lib/site-config'

const UPGRADES = [
  { icon: HardDrive, title: 'SSD upgrade', sign: 'Takes minutes to boot or open apps?', gain: 'Much faster start-up and loading.', href: '/ssd-upgrade-service-madurai' },
  { icon: MemoryStick, title: 'RAM upgrade', sign: 'Slows down with many tabs or apps?', gain: 'Smoother multitasking.', href: '/ram-upgrade-service-madurai' },
  { icon: MonitorPlay, title: 'Graphics card upgrade', sign: 'Games or renders feel slow?', gain: 'Higher FPS and faster GPU work.', href: '/gpu-repair-service-madurai' },
  { icon: Fan, title: 'Cooling upgrade', sign: 'Loud fans or getting very hot?', gain: 'Cooler, quieter, more stable.', href: '/thermal-paste-service-madurai' },
  { icon: PlugZap, title: 'Power supply upgrade', sign: 'Random shutdowns or planning a new GPU?', gain: 'Stable, safe power.', href: '#contact' },
  { icon: Cpu, title: 'CPU compatibility check', sign: 'Wondering if a new processor will fit?', gain: 'Know before you buy.', href: '#contact' },
  { icon: ArrowRightLeft, title: 'Data migration', sign: 'Moving to a new drive or PC?', gain: 'Your files and setup carried over.', href: '/data-recovery-service-madurai' },
]

export default function UpgradesSection() {
  return (
    <section id="upgrades" aria-labelledby="upgrades-heading" className="py-14 sm:py-24 bg-ivory-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <SectionHeader
            id="upgrades-heading"
            eyebrow="Hardware upgrades"
            title="Make your current PC faster – without buying a new one."
            description="The right upgrade can make an old laptop or desktop feel new. We check what is actually slowing you down and only suggest upgrades that make a difference."
          />
          <a href={waTopic('upgrade')} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white text-sm font-bold">
            <MessageCircle className="w-4 h-4" /> Get Upgrade Advice
          </a>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {UPGRADES.map(({ icon: Icon, title, sign, gain, href }) => (
            <li key={title}>
              <Link href={href} className="group h-full flex gap-3.5 rounded-2xl bg-white border border-ivory-200 p-4 hover:border-burnt-500/50 transition-colors">
                <span className="w-11 h-11 rounded-xl bg-graphite-900 text-burnt-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-graphite-900 text-[15px]">{title}</span>
                  <span className="block text-[13px] text-warmgrey-500 mt-0.5">{sign}</span>
                  <span className="block text-[13px] text-graphite-800 font-semibold mt-1">→ {gain}</span>
                </span>
              </Link>
            </li>
          ))}
          <li className="rounded-2xl bg-graphite-900 text-ivory-100 p-4 flex flex-col justify-between gap-3">
            <p className="text-sm leading-relaxed">
              <strong className="text-white">Not sure what to upgrade?</strong> Share your model or specs – we will tell you what helps most for your budget.
            </p>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-burnt-400 min-h-[40px]">
              Book an upgrade check <ArrowRight className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
