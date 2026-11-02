import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Lenovo Laptop Repair in Madurai | ThinkPad, IdeaPad, Legion – JSPCS Online',
  description: 'Expert Lenovo laptop repair in Madurai. ThinkPad, IdeaPad, Yoga, Legion gaming. Motherboard, screen, keyboard, battery, hinge, overheating. Call 9842139997.',
  keywords: ['lenovo laptop repair madurai','lenovo thinkpad repair madurai','lenovo ideapad repair madurai','lenovo legion repair madurai','lenovo yoga repair madurai','lenovo laptop screen replacement madurai','lenovo laptop motherboard repair madurai','lenovo laptop keyboard repair madurai'],
  slug: 'lenovo-laptop-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'lenovo-laptop-repair-madurai', name:'JSPCS Online – Lenovo Laptop Repair in Madurai', description:'Lenovo laptop repair center in Madurai. ThinkPad, IdeaPad, Yoga, Legion Gaming all serviced.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Lenovo ThinkPad Repair'},{name:'Lenovo Legion Gaming Laptop Repair'},{name:'Lenovo IdeaPad Repair'},{name:'Lenovo Screen Replacement'},{name:'Lenovo Motherboard Repair'},{name:'Lenovo Battery Replacement'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Lenovo Laptop Repair Madurai',url:'https://jspcs.online/lenovo-laptop-repair-madurai'}]),
  faqSchema([
    {question:'How much does Lenovo laptop repair cost in Madurai?',answer:'Lenovo repair costs: ₹299 for software, ₹800–₹2,500 for hardware, ₹2,000–₹8,000 for motherboard chip-level. Screens ₹2,000–₹7,000. Free diagnosis always.'},
    {question:'Do you repair Lenovo Legion gaming laptops in Madurai?',answer:'Yes — Legion 5, Legion 5 Pro, Legion 7. Thermal repasting, GPU thermal pads, fan replacement, TDP profile optimization for Madurai\'s climate.'},
    {question:'Can you repair a Lenovo ThinkPad in Madurai?',answer:'Yes. ThinkPad T-series, X-series, E-series all serviced. Business data handled carefully with BIOS/security chip awareness.'},
    {question:'Do you fix Lenovo IdeaPad screen in Madurai?',answer:'Yes. All IdeaPad screen sizes — 14, 15, 16 inch. FHD, QHD panels. Touch screens repaired with digitizer replacement.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Lenovo Laptop Repair Service in Madurai', content:`<p>JSPCS Online is Madurai's trusted Lenovo laptop repair center. We cover the complete Lenovo range — IdeaPad for students and home users, ThinkPad for enterprise professionals, Yoga convertibles, and the Legion gaming laptop line — all serviced with certified expertise and 90-day warranty.</p><p>Lenovo laptops are popular across Madurai colleges, IT companies, and government offices. Our technicians are experienced with Lenovo's distinctive keyboard designs, unique ThinkPad security features, and Legion's dual-fan thermal systems.</p>` },
  { id:'models', heading:'Lenovo Laptop Models Serviced in Madurai', content:`<ul><li><strong>Lenovo IdeaPad 3, 5, Slim 5</strong> — Most common Lenovo in Madurai student community. Screen, keyboard, battery, fan repairs.</li><li><strong>Lenovo ThinkPad E, T, X, L series</strong> — Business-grade with TrackPoint and security chips. Full service with enterprise data safety.</li><li><strong>Lenovo Yoga / IdeaPad Flex</strong> — 2-in-1 convertibles. Hinge repair, touch screen, pen digitizer replacement.</li><li><strong>Lenovo Legion 5, 5 Pro, 7</strong> — Gaming laptops: thermal repasting, GPU pads, fan replacement, performance tuning.</li><li><strong>Lenovo ThinkBook</strong> — Business-consumer hybrid. Screen, keyboard, RAM/SSD upgrade, fingerprint sensor repair.</li><li><strong>Lenovo V-series</strong> — Budget business laptops. Battery, keyboard, display, hinges serviced.</li></ul>` },
  { id:'common-repairs', heading:'Common Lenovo Laptop Repairs in Madurai', content:`<ul><li><strong>Lenovo laptop not turning on</strong> — Power IC, battery, BIOS, or DC jack fault</li><li><strong>Lenovo laptop overheating</strong> — Fan clog, thermal paste degradation, fan failure</li><li><strong>Lenovo laptop screen broken</strong> — LCD, IPS, FHD, touch panel replacement</li><li><strong>Lenovo ThinkPad keyboard</strong> — Famous ThinkPad keyboard replacement, TrackPoint repair</li><li><strong>Lenovo laptop hinge stiff / broken</strong> — IdeaPad and Yoga hinge replacement</li><li><strong>Lenovo battery swollen / not charging</strong> — Battery replacement, charging circuit repair</li><li><strong>Lenovo laptop BIOS password</strong> — ThinkPad-specific supervisor password procedures</li><li><strong>Lenovo Legion FPS drops</strong> — Thermal throttling fix via repaste and undervolting</li></ul>` },
  { id:'legion', heading:'Lenovo Legion Gaming Laptop Repair Madurai', content:`<p>Lenovo Legion gaming laptops push hardware to the limit — and in Madurai's climate, regular thermal maintenance is critical. Our Legion-specific services:</p><ul><li><strong>CPU &amp; GPU thermal paste replacement</strong> — Premium compound restores full thermal performance</li><li><strong>GPU thermal pad replacement</strong> — Corrects GPU throttling from dried pads</li><li><strong>Fan replacement</strong> — Legion dual-fan system service</li><li><strong>Lenovo Vantage thermal mode setup</strong> — Performance and custom mode configuration</li><li><strong>RAM upgrade</strong> — Up to 64GB DDR5 for Legion 5i Pro</li><li><strong>SSD upgrade</strong> — PCIe Gen 4 NVMe second slot installation</li></ul><p>After Legion thermal service in Madurai: customers typically see 20–30°C CPU temp reduction and sustained higher framerates in demanding games.</p>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Lenovo Repair in Madurai', content:`<ul><li>✅ <strong>Full Lenovo Range</strong> — IdeaPad, ThinkPad, Yoga, Legion all serviced</li><li>✅ <strong>Chip-Level Motherboard Repair</strong> — Save thousands over OEM board replacement</li><li>✅ <strong>Free Diagnosis</strong> — Transparent written quote</li><li>✅ <strong>90-Day Warranty</strong> — All hardware repairs</li><li>✅ <strong>ThinkPad Expertise</strong> — Security chip, TrackPoint, enterprise features</li><li>✅ <strong>Data Safety</strong> — Never format without permission</li><li>✅ <strong>WhatsApp Updates</strong> — Real-time status</li></ul>` },
]

const serviceHighlights = [
  { title:'IdeaPad Repair', description:'Most popular Lenovo series', icon:'💻' },
  { title:'ThinkPad Service', description:'Enterprise laptop specialists', icon:'🏢' },
  { title:'Legion Gaming Repair', description:'Thermal + GPU + FPS fix', icon:'🎮' },
  { title:'Yoga / Flex Hinge', description:'Convertible hinge repair', icon:'🔄' },
  { title:'Screen Replacement', description:'FHD, QHD, touch panels', icon:'🖥️' },
  { title:'Motherboard Repair', description:'Chip-level board service', icon:'🔧' },
  { title:'Battery Replacement', description:'Swollen battery fix', icon:'🔋' },
  { title:'Keyboard Repair', description:'ThinkPad & IdeaPad keyboards', icon:'⌨️' },
]

const faqs = [
  { question:'How much does Lenovo laptop repair cost in Madurai?', answer:'₹299 for software, ₹800–₹2,500 hardware, ₹2,000–₹8,000 chip-level. Screens ₹2,000–₹7,000. Free diagnosis.' },
  { question:'Do you repair Lenovo Legion gaming laptops?', answer:'Yes — Legion 5, 5 Pro, 7. Thermal repasting, GPU pads, fans, TDP profile optimization.' },
  { question:'Can you repair a Lenovo ThinkPad in Madurai?', answer:'Yes — T, X, E, L series. Business data handled with BIOS/security chip awareness.' },
  { question:'Do you fix Lenovo IdeaPad screen in Madurai?', answer:'Yes — 14, 15, 16 inch. FHD, QHD. Touch screens with digitizer replacement.' },
  { question:'How long does Lenovo repair take in Madurai?', answer:'Software: same-day. Screen/keyboard: 4–24 hrs. Chip-level motherboard: 2–4 days.' },
]

export default function LenovoLaptopRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="lenovo-laptop-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Lenovo Laptop Repair in Madurai"
      heroSubtitle="Expert Service for IdeaPad, ThinkPad, Yoga & Legion Gaming"
      heroDescription="JSPCS Online is Madurai's trusted Lenovo laptop repair center. IdeaPad, ThinkPad, Yoga, Legion gaming — all serviced with chip-level expertise. Screen replacement, keyboard, battery, hinge, overheating fix. Free diagnosis, 90-day warranty."
      breadcrumbLabel="Lenovo Laptop Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Lenovo Laptop Issue? Call JSPCS Online Madurai"
      ctaDescription="All Lenovo models serviced. Free diagnosis. Genuine parts. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/dell-laptop-repair-madurai', label:'Dell Laptop Repair'},
        {href:'/hp-laptop-repair-madurai', label:'HP Laptop Repair'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/laptop-screen-replacement-madurai', label:'Screen Replacement'},
        {href:'/motherboard-repair-madurai', label:'Motherboard Repair'},
      ]}
    />
  )
}
