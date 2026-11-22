import { Sparkles, Network, Printer, Cloud, Lock, GraduationCap, ChevronDown, MessageCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { waLink, waTopic } from '@/lib/site-config'

const GROUPS = [
  { icon: Sparkles, title: 'Digital Cleanup & Maintenance', line: 'A cleaner, faster system without reinstalling everything.',
    items: ['Junk & temporary file removal', 'Storage optimisation', 'Browser cleanup', 'Startup optimisation', 'Duplicate-file help', 'Cloud sync setup'] },
  { icon: Network, title: 'Network & Internet', line: 'Stable Wi-Fi and wired connections at home or office.',
    items: ['LAN / Wi-Fi troubleshooting', 'Router setup', 'Wi-Fi extenders & signal improvement', 'Network printers', 'Basic firewall configuration', 'VLAN / QoS setup (where applicable)'] },
  { icon: Printer, title: 'Printer & Peripherals', line: 'Get every device connected and working.',
    items: ['Printer installation & troubleshooting', 'Scanner configuration', 'Barcode scanners', 'Webcams', 'Biometric devices', 'POS peripherals'] },
  { icon: Cloud, title: 'Cloud & Data Services', line: 'Email, shared drives and backups set up properly.',
    items: ['Google Workspace setup', 'Microsoft 365 setup', 'Cloud backup', 'Shared drive configuration', 'Data migration', 'Backup automation'] },
  { icon: Lock, title: 'Security Services', line: 'Protect your systems and your data.',
    items: ['Antivirus setup', 'Malware troubleshooting', 'Firewall configuration', 'BitLocker encryption', 'USB access restrictions', 'Password manager & secure backup'] },
  { icon: GraduationCap, title: 'Workshops & IT Awareness', line: 'Learn to look after your own systems.',
    items: ['PC maintenance workshops', 'DIY troubleshooting basics', 'IT awareness sessions', 'PC health guides & tips', 'Workshops / webinars (when scheduled)'] },
]

export default function MoreITServices() {
  return (
    <section id="it-support" aria-labelledby="it-heading" className="py-14 sm:py-24 bg-ivory-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <SectionHeader
            id="it-heading"
            eyebrow="IT support & networking"
            title="Everything else your PCs and office need."
            description="Networks, printers, cloud, security and clean-ups – handled by the same team that looks after your hardware."
          />
          <a href={waTopic('itSupport')} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-white text-sm font-bold">
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Contact Technician
          </a>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GROUPS.map(({ icon: Icon, title, line, items }) => (
            <li key={title} className="rounded-2xl bg-white border border-ivory-200">
              <details className="group">
                <summary className="flex items-start gap-3.5 p-4 cursor-pointer list-none min-h-[72px]">
                  <span className="w-11 h-11 rounded-xl bg-sage-200 text-graphite-900 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-graphite-900 text-[15px]">{title}</span>
                    <span className="block text-[13px] text-warmgrey-500 mt-0.5">{line}</span>
                  </span>
                  <ChevronDown className="w-5 h-5 text-warmgrey-400 shrink-0 mt-2 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-4 pb-4 -mt-1">
                  <ul className="flex flex-wrap gap-1.5">
                    {items.map(i => (
                      <li key={i} className="px-2.5 py-1 rounded-lg bg-ivory-100 text-[12.5px] text-graphite-800">{i}</li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Hi JSPCS, I need help with ${title.toLowerCase()}. Can you assist?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 min-h-[40px] text-sm font-bold text-burnt-600"
                  >
                    <MessageCircle className="w-4 h-4" /> Ask about this
                  </a>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
