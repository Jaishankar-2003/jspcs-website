import { Phone, MessageCircle, Wrench } from 'lucide-react'
import { CONTACT, waLink, WA_MESSAGES } from '@/lib/site-config'

interface MobileActionBarProps {
  bookHref?: string
  bookLabel?: string
  waMessage?: string
}

/**
 * Thumb-reach action bar for phones. Replaces the floating WhatsApp bubble on
 * small screens so nothing covers page content. Hidden from md and up.
 */
export default function MobileActionBar({
  bookHref = '/#contact',
  bookLabel = 'Book Service',
  waMessage = WA_MESSAGES.service,
}: MobileActionBarProps) {
  return (
    <>
      {/* Spacer so the fixed bar never hides the end of the page */}
      <div className="h-[68px] md:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick contact"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-graphite-900/95 backdrop-blur-md border-t border-white/10 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href={CONTACT.tel}
            className="flex flex-col items-center justify-center gap-0.5 min-h-[48px] rounded-xl bg-white/5 text-ivory-100 active:bg-white/10"
          >
            <Phone className="w-[18px] h-[18px] text-burnt-400" aria-hidden="true" />
            <span className="text-[11px] font-semibold">Call</span>
          </a>
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 min-h-[48px] rounded-xl bg-[#25D366] text-white active:brightness-95"
          >
            <MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" />
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>
          <a
            href={bookHref}
            className="flex flex-col items-center justify-center gap-0.5 min-h-[48px] rounded-xl bg-burnt-500 text-white active:bg-burnt-600"
          >
            <Wrench className="w-[18px] h-[18px]" aria-hidden="true" />
            <span className="text-[11px] font-semibold">{bookLabel}</span>
          </a>
        </div>
      </nav>
    </>
  )
}
