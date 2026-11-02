import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Asus Laptop Repair in Madurai | VivoBook, ZenBook, ROG, TUF – JSPCS Online',
  description: 'Expert Asus laptop repair in Madurai. VivoBook, ZenBook, ROG gaming, TUF Gaming, ProArt. Motherboard, screen, keyboard, battery, overheating fix. Call 9842139997.',
  keywords: ['asus laptop repair madurai','asus vivobook repair madurai','asus zenbook repair madurai','asus rog repair madurai','asus tuf gaming repair madurai','asus laptop screen replacement madurai','asus motherboard repair madurai','asus rog overheating madurai'],
  slug: 'asus-laptop-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'asus-laptop-repair-madurai', name:'JSPCS Online – Asus Laptop Repair in Madurai', description:'Asus laptop repair center in Madurai. VivoBook, ZenBook, ROG, TUF Gaming, ProArt Studiobook all serviced.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Asus ROG Gaming Laptop Repair'},{name:'Asus TUF Gaming Repair'},{name:'Asus VivoBook Repair'},{name:'Asus ZenBook Repair'},{name:'Asus Laptop Screen Replacement'},{name:'Asus Motherboard Chip-Level Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Asus Laptop Repair Madurai',url:'https://jspcs.online/asus-laptop-repair-madurai'}]),
  faqSchema([
    {question:'How much does Asus laptop repair cost in Madurai?',answer:'Asus repair: ₹299 software, ₹800–₹2,500 hardware, ₹2,000–₹8,000 motherboard chip-level. Screens ₹2,500–₹7,500 (ROG panels premium). Free diagnosis.'},
    {question:'Do you repair Asus ROG gaming laptops in Madurai?',answer:'Yes — ROG Strix, ROG Zephyrus, ROG Flow. Thermal repasting, GPU thermal pad, fan replacement, ROG Armoury Crate performance mode setup.'},
    {question:'Can you fix Asus TUF Gaming laptop overheating?',answer:'Yes. TUF Gaming laptops can run hot. We replace thermal paste and pads, clean fans, and configure cooling profiles to reduce temps significantly.'},
    {question:'Do you repair Asus ZenBook in Madurai?',answer:'Yes. ZenBook 13, 14, 15 — screen replacement, hinge repair, keyboard, battery, chip-level motherboard repair.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Asus Laptop Repair Service in Madurai', content:`<p>JSPCS Online provides expert Asus laptop repair in Madurai for the complete Asus range — VivoBook for everyday computing, ZenBook for thin-and-light premium use, ROG (Republic of Gamers) for serious gaming, TUF Gaming for durable gaming, and ProArt Studiobook for creative professionals.</p><p>Asus laptops are increasingly popular in Madurai's student and gaming communities. ROG and TUF Gaming models especially benefit from specialist thermal maintenance given their high-performance hardware. Our team handles Asus's specific layouts, MUX switch configurations, and ROG-specific BIOS features.</p>` },
  { id:'models', heading:'Asus Laptop Models We Repair in Madurai', content:`<ul><li><strong>Asus VivoBook 14, 15, 16</strong> — Popular student laptops. Screen, keyboard, battery, hinge, fan repairs.</li><li><strong>Asus ZenBook 13, 14, 15</strong> — Premium ultrabooks. Screen replacement, hinge repair, chip-level motherboard repair.</li><li><strong>Asus ROG Strix G15/G16/G17</strong> — High-performance gaming: thermal repasting, GPU pads, fan replacement.</li><li><strong>Asus ROG Zephyrus G14/G15/M16</strong> — Thin gaming laptops: thermal service, battery replacement.</li><li><strong>Asus ROG Flow X13/X16</strong> — Convertible gaming: hinge, touch screen, thermal service.</li><li><strong>Asus TUF Gaming A15/A17/F15</strong> — Budget gaming: thermal paste, fan, RAM/SSD upgrade.</li><li><strong>Asus ProArt Studiobook</strong> — Creative workstation: OLED screen repair, RAM/SSD upgrade.</li></ul>` },
  { id:'repairs', heading:'Common Asus Laptop Repairs in Madurai', content:`<ul><li><strong>Asus laptop not turning on</strong> — Power IC, battery, BIOS corruption, DC jack fault</li><li><strong>Asus ROG/TUF overheating</strong> — Thermal paste, GPU thermal pads, fan replacement</li><li><strong>Asus laptop screen crack</strong> — VivoBook LCD, ZenBook OLED, ROG 144Hz/240Hz panels</li><li><strong>Asus keyboard not working</strong> — RGB keyboard membrane, connector, spill damage</li><li><strong>Asus laptop hinge</strong> — VivoBook and ZenBook hinge wear repair</li><li><strong>Asus battery swollen</strong> — Genuine battery replacement with cycle health check</li><li><strong>Asus ROG FPS drop</strong> — Thermal throttling fix via repaste and MUX switch config</li><li><strong>Asus BIOS update issue</strong> — Recovery BIOS flash via EZ Flash</li></ul>` },
  { id:'rog', heading:'Asus ROG &amp; TUF Gaming Laptop Repair Madurai', content:`<p>ROG and TUF Gaming laptops are the most demanding to maintain — they run extremely hot under load. In Madurai's climate, this intensifies. Our Asus gaming laptop services:</p><ul><li><strong>Thermal repasting</strong> — CPU &amp; GPU with premium thermal compound (Thermal Grizzly, Arctic)</li><li><strong>GPU thermal pad replacement</strong> — Corrects throttling from degraded memory/VRM pads</li><li><strong>Fan replacement</strong> — ROG Strix dual-fan system replacement</li><li><strong>Armoury Crate / GPU mode</strong> — MUX switch, iGPU/dGPU configuration</li><li><strong>RAM upgrade</strong> — ROG Strix G15 supports up to 64GB DDR5</li><li><strong>NVMe SSD upgrade</strong> — Gen 4 SSD for faster game load times</li></ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Asus Repair in Madurai', content:`<ul><li>✅ <strong>Full Asus Range</strong> — VivoBook to ROG Zephyrus all serviced</li><li>✅ <strong>ROG Thermal Specialists</strong> — Gaming laptop cooling experts</li><li>✅ <strong>Free Diagnosis</strong> — Transparent quote before work</li><li>✅ <strong>90-Day Warranty</strong> — All hardware repairs</li><li>✅ <strong>Genuine Parts</strong> — Quality screens, keyboards, batteries</li><li>✅ <strong>Same-Day Options</strong> — Many repairs same day</li></ul>` },
]

const serviceHighlights = [
  { title:'Asus VivoBook Repair', description:'Student & home laptops', icon:'💻' },
  { title:'Asus ROG Gaming', description:'Thermal + performance service', icon:'🎮' },
  { title:'Asus TUF Gaming', description:'Cooling & FPS fix', icon:'🔥' },
  { title:'Asus ZenBook', description:'Premium ultrabook service', icon:'✨' },
  { title:'Screen Replacement', description:'FHD, QHD, 144Hz, OLED', icon:'🖥️' },
  { title:'Motherboard Repair', description:'Chip-level service', icon:'🔧' },
  { title:'Battery Replacement', description:'Swollen battery fix', icon:'🔋' },
  { title:'Keyboard Repair', description:'RGB keyboard service', icon:'⌨️' },
]

const faqs = [
  { question:'How much does Asus laptop repair cost in Madurai?', answer:'₹299 software, ₹800–₹2,500 hardware, ₹2,000–₹8,000 chip-level. ROG screens ₹3,500–₹7,500. Free diagnosis.' },
  { question:'Do you repair Asus ROG gaming laptops in Madurai?', answer:'Yes — ROG Strix, Zephyrus, Flow. Thermal repasting, GPU thermal pads, fan replacement, MUX configuration.' },
  { question:'Can you fix Asus TUF Gaming overheating?', answer:'Yes. Thermal paste, GPU pads, fan cleaning, cooling profile configuration typically drops temps 20–30°C.' },
  { question:'Do you repair Asus ZenBook in Madurai?', answer:'Yes — ZenBook 13/14/15. Screen, hinge, keyboard, battery, chip-level motherboard.' },
  { question:'How long does Asus repair take in Madurai?', answer:'Software: same-day. Screen/keyboard: 4–24 hrs. Thermal service: 2–4 hours. Motherboard: 2–4 days.' },
]

export default function AsusLaptopRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="asus-laptop-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Asus Laptop Repair in Madurai"
      heroSubtitle="Expert Service for VivoBook, ZenBook, ROG & TUF Gaming"
      heroDescription="JSPCS Online is Madurai's trusted Asus laptop repair center. VivoBook, ZenBook, ROG Strix, ROG Zephyrus, TUF Gaming, ProArt — all serviced. Chip-level motherboard repair, screen, keyboard, battery, overheating fix. Free diagnosis, 90-day warranty."
      breadcrumbLabel="Asus Laptop Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Asus Laptop Problem? Call JSPCS Online Madurai"
      ctaDescription="All Asus models serviced. ROG &amp; TUF Gaming specialists. Free diagnosis. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/msi-gaming-laptop-repair-madurai', label:'MSI Gaming Laptop Repair'},
        {href:'/laptop-heating-issue-repair-madurai', label:'Laptop Overheating Fix'},
        {href:'/thermal-paste-service-madurai', label:'Thermal Paste Service'},
        {href:'/motherboard-repair-madurai', label:'Motherboard Repair'},
      ]}
    />
  )
}
