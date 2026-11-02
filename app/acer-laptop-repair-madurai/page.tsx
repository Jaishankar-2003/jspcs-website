import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Acer Laptop Repair in Madurai | Aspire, Nitro, Predator – JSPCS Online',
  description: 'Expert Acer laptop repair in Madurai. Aspire, Swift, Nitro 5/7, Predator gaming. Motherboard, screen, keyboard, battery, overheating fix. Call 9842139997.',
  keywords: ['acer laptop repair madurai','acer aspire repair madurai','acer nitro repair madurai','acer predator repair madurai','acer swift repair madurai','acer laptop screen replacement madurai','acer laptop motherboard repair madurai','acer nitro overheating madurai'],
  slug: 'acer-laptop-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'acer-laptop-repair-madurai', name:'JSPCS Online – Acer Laptop Repair in Madurai', description:'Acer laptop repair center in Madurai. Aspire, Swift, Nitro 5/7, Predator Helios all serviced.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Acer Nitro Gaming Laptop Repair'},{name:'Acer Predator Repair'},{name:'Acer Aspire Repair'},{name:'Acer Swift Repair'},{name:'Acer Laptop Screen Replacement'},{name:'Acer Motherboard Chip-Level Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Acer Laptop Repair Madurai',url:'https://jspcs.online/acer-laptop-repair-madurai'}]),
  faqSchema([
    {question:'How much does Acer laptop repair cost in Madurai?',answer:'Acer repair: ₹299 software, ₹800–₹2,500 hardware, ₹2,000–₹7,500 chip-level. Screens ₹2,000–₹6,000. Free diagnosis.'},
    {question:'Do you repair Acer Nitro 5 laptops in Madurai?',answer:'Yes — Acer Nitro 5 and Nitro 7. Thermal repasting, GPU thermal pads, fan replacement, Acer PredatorSense performance mode configuration.'},
    {question:'Can you fix Acer Predator Helios overheating?',answer:'Yes. Predator Helios models run extremely hot. We replace thermal paste and GPU pads, clean the 4-fan cooling system, and optimize PredatorSense power profiles.'},
    {question:'Do you repair Acer Aspire screen in Madurai?',answer:'Yes — Aspire 3, 5, 7 — all screen sizes. FHD panels available. Touch models repaired with digitizer replacement.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Acer Laptop Repair Service in Madurai', content:`<p>JSPCS Online provides expert Acer laptop repair in Madurai for the complete Acer lineup — Aspire for everyday computing, Swift for ultrabook portability, Nitro for entry-to-mid gaming, and Predator Helios for flagship gaming performance.</p><p>Acer laptops — particularly the Nitro 5 — are the most popular gaming laptops among Madurai students due to their budget-friendly price point. Nitro and Predator models benefit significantly from regular thermal maintenance given their demanding hardware configurations. Our technicians are experienced with Acer's specific board designs and PredatorSense/NitroSense cooling configurations.</p>` },
  { id:'models', heading:'Acer Laptop Models Serviced in Madurai', content:`<ul><li><strong>Acer Aspire 3, 5, 7</strong> — Budget laptops widely used in Madurai colleges. Screen, keyboard, battery, fan, hinge repairs.</li><li><strong>Acer Swift 3, 5, Edge</strong> — Thin ultrabooks. Screen replacement, battery, keyboard, motherboard repair.</li><li><strong>Acer Nitro 5 &amp; Nitro 7</strong> — Most popular budget gaming laptops in Madurai: thermal repasting, fan replacement, GPU pad.</li><li><strong>Acer Predator Helios 300/500/700</strong> — High-performance gaming: full thermal service, 4-fan cleaning, GPU BGA repair.</li><li><strong>Acer ConceptD</strong> — Creator laptops: OLED screen, color calibration, high-VRAM GPU service.</li></ul>` },
  { id:'repairs', heading:'Common Acer Laptop Repairs in Madurai', content:`<ul><li><strong>Acer laptop not turning on</strong> — Power IC, battery fault, BIOS issue</li><li><strong>Acer Nitro / Predator overheating</strong> — Thermal paste, GPU pads, fan replacement</li><li><strong>Acer screen cracked / black screen</strong> — FHD 144Hz, 165Hz panel replacement</li><li><strong>Acer keyboard not working</strong> — Membrane failure, spill damage, connector</li><li><strong>Acer laptop hinge</strong> — Aspire and Nitro hinge replacement</li><li><strong>Acer battery not charging</strong> — Battery replacement, DC jack repair</li><li><strong>Acer Nitro FPS drops</strong> — Thermal throttling fix, NitroSense optimization</li></ul>` },
  { id:'nitro-predator', heading:'Acer Nitro &amp; Predator Gaming Laptop Repair Madurai', content:`<p>Acer Nitro 5 is the top-selling gaming laptop in Madurai's budget segment. After 1–2 years, thermal paste degrades significantly — causing FPS drops, thermal throttling, and unexpected shutdowns. Our Nitro-specific services:</p><ul><li><strong>CPU &amp; GPU thermal paste replacement</strong> — Restores full thermal headroom</li><li><strong>GPU thermal pad replacement</strong> — Nitro 5 GPU memory pads dry out quickly</li><li><strong>Dual-fan replacement</strong> — Nitro fan bearing failure is common after 2 years</li><li><strong>NitroSense &amp; PredatorSense configuration</strong> — Fan curves, power limits for maximum performance</li><li><strong>RAM upgrade</strong> — Up to 32GB DDR4/DDR5 for smoother gameplay</li><li><strong>NVMe SSD upgrade</strong> — Second M.2 slot installation for game storage</li></ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Acer Repair in Madurai', content:`<ul><li>✅ <strong>Acer Nitro Specialists</strong> — Most popular budget gaming laptop serviced daily</li><li>✅ <strong>Free Diagnosis</strong> — Know the fault before paying anything</li><li>✅ <strong>90-Day Warranty</strong> — All hardware repairs warranted</li><li>✅ <strong>Chip-Level Motherboard Repair</strong> — Save ₹15,000+ over board replacement</li><li>✅ <strong>Genuine Parts</strong> — Quality screens, fans, batteries</li><li>✅ <strong>Same-Day Thermal Service</strong> — Nitro repaste done same day</li></ul>` },
]

const serviceHighlights = [
  { title:'Acer Aspire Repair', description:'Budget laptop service', icon:'💻' },
  { title:'Acer Nitro Gaming', description:'Thermal + FPS fix', icon:'🎮' },
  { title:'Acer Predator', description:'Full gaming service', icon:'🔥' },
  { title:'Acer Swift', description:'Ultrabook repair', icon:'⚡' },
  { title:'Screen Replacement', description:'FHD 144Hz, 165Hz panels', icon:'🖥️' },
  { title:'Motherboard Repair', description:'Chip-level service', icon:'🔧' },
  { title:'Battery Replacement', description:'Genuine Acer cells', icon:'🔋' },
  { title:'Fan Replacement', description:'Dual-fan system service', icon:'🌀' },
]

const faqs = [
  { question:'How much does Acer laptop repair cost in Madurai?', answer:'₹299 software, ₹800–₹2,500 hardware, ₹2,000–₹7,500 chip-level. Screens ₹2,000–₹6,000. Free diagnosis.' },
  { question:'Do you repair Acer Nitro 5 laptops in Madurai?', answer:'Yes — Nitro 5 and Nitro 7. Thermal repasting, GPU thermal pads, fan replacement, NitroSense configuration.' },
  { question:'Can you fix Acer Predator Helios overheating?', answer:'Yes. We replace thermal paste and GPU pads, clean the 4-fan system, optimize PredatorSense power profiles.' },
  { question:'Do you repair Acer Aspire screen in Madurai?', answer:'Yes — Aspire 3/5/7. FHD panels. Touch models with digitizer replacement.' },
  { question:'How long does Acer repair take in Madurai?', answer:'Software: same-day. Thermal service: 2–4 hours. Screen/keyboard: 4–24 hrs. Motherboard: 2–4 days.' },
]

export default function AcerLaptopRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="acer-laptop-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Acer Laptop Repair in Madurai"
      heroSubtitle="Expert Service for Aspire, Swift, Nitro & Predator Gaming"
      heroDescription="JSPCS Online is Madurai's trusted Acer laptop repair center. Aspire, Swift, Nitro 5, Nitro 7, Predator Helios — all serviced. Chip-level motherboard repair, screen replacement, keyboard, battery, thermal service. Free diagnosis, 90-day warranty."
      breadcrumbLabel="Acer Laptop Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Acer Laptop Issue? Call JSPCS Online Madurai"
      ctaDescription="All Acer models including Nitro and Predator serviced. Free diagnosis. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/laptop-heating-issue-repair-madurai', label:'Laptop Overheating Fix'},
        {href:'/thermal-paste-service-madurai', label:'Thermal Paste Service'},
        {href:'/asus-laptop-repair-madurai', label:'Asus Laptop Repair'},
        {href:'/msi-gaming-laptop-repair-madurai', label:'MSI Gaming Laptop Repair'},
      ]}
    />
  )
}
