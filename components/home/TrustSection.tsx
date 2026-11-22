import Image from 'next/image'
import { MessageSquareText, Stethoscope, CheckCircle2, PackageCheck, BadgeCheck, ExternalLink, MapPin, Clock, Scale, Lightbulb, Eye } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { CONTACT, VERIFIED_CLAIMS } from '@/lib/site-config'

const STEPS = [
  { icon: MessageSquareText, title: 'Tell us what you need', body: 'Call, WhatsApp or visit. Share the problem, photos, or what you want built.' },
  { icon: Stethoscope, title: 'Diagnosis & clear estimate', body: 'We check the system and explain the cause and cost in simple words.' },
  { icon: CheckCircle2, title: 'Your approval first', body: 'No major repair or part replacement happens without your OK.' },
  { icon: PackageCheck, title: 'Fix, test & hand over', body: 'We complete the work, test it, and explain what was done.' },
]

const PROMISES = [
  { icon: Eye, text: 'Transparent diagnosis – you know what is wrong and why' },
  { icon: Scale, text: 'Honest repair-versus-replace advice' },
  { icon: Lightbulb, text: 'Upgrades suggested only when they help your use' },
  { icon: CheckCircle2, text: 'Customer approval before major repairs' },
]

export default function TrustSection() {
  return (
    <section id="why-jspcs" aria-labelledby="trust-heading" className="py-14 sm:py-24 bg-graphite-900 text-ivory-100 atelier-grid-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        <SectionHeader
          id="trust-heading"
          dark
          align="center"
          eyebrow="How we work"
          title="Clear steps. No surprises."
          description="Whether it is a repair, an upgrade or a new build, you always know what is happening and what it will cost."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-5">
              <span className="absolute top-4 right-4 font-mono text-3xl font-black text-white/10">0{i + 1}</span>
              <Icon className="w-6 h-6 text-burnt-400" aria-hidden="true" />
              <p className="font-bold text-white mt-3">{title}</p>
              <p className="text-sm text-ivory-300/75 mt-1 leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROMISES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-sm text-ivory-200">
                <Icon className="w-5 h-5 text-sage-400 shrink-0" aria-hidden="true" /> {text}
              </li>
            ))}
          </ul>

          <div className="lg:col-span-5 rounded-2xl bg-ivory-100 text-graphite-900 p-5 flex gap-4">
            {VERIFIED_CLAIMS.msme && (
              <div className="relative w-20 h-28 shrink-0 rounded-lg overflow-hidden border border-ivory-300 bg-white">
                <Image src="/img/cert-chip.webp" alt="JSPCS chip-level certificate" fill loading="lazy" sizes="80px" className="object-contain p-1" />
              </div>
            )}
            <div className="space-y-2 min-w-0">
              <p className="font-bold">Jai Shankar PC Services (JSPCS)</p>
              {VERIFIED_CLAIMS.msme && (
                <a href={CONTACT.msmeVerifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-burnt-600 min-h-[32px]">
                  <BadgeCheck className="w-4 h-4" /> Govt. of India MSME (Udyam) registered <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <p className="flex items-center gap-1.5 text-sm text-warmgrey-500"><MapPin className="w-4 h-4 text-burnt-500 shrink-0" /> Madurai, Tamil Nadu</p>
              <p className="flex items-center gap-1.5 text-sm text-warmgrey-500"><Clock className="w-4 h-4 text-burnt-500 shrink-0" /> {CONTACT.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
