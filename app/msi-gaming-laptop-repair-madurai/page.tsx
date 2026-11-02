import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'MSI Gaming Laptop Repair in Madurai | GF, GP, GT, Raider – JSPCS Online',
  description: 'Expert MSI gaming laptop repair in Madurai. Katana, Thin, Raider, Crosshair, Creator series. Thermal, GPU, screen, keyboard, motherboard. Call 9842139997.',
  keywords: ['msi gaming laptop repair madurai','msi laptop repair madurai','msi katana repair madurai','msi raider repair madurai','msi gaming laptop overheating madurai','msi laptop screen replacement madurai','msi laptop motherboard repair madurai'],
  slug: 'msi-gaming-laptop-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'msi-gaming-laptop-repair-madurai', name:'JSPCS Online – MSI Gaming Laptop Repair in Madurai', description:'MSI gaming laptop repair specialist in Madurai. All MSI series: Katana, Thin, Raider, Crosshair, Creator, Titan serviced.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'MSI Gaming Laptop Thermal Service'},{name:'MSI Katana Repair'},{name:'MSI Raider Repair'},{name:'MSI Laptop Screen Replacement'},{name:'MSI GPU Thermal Pad Replacement'},{name:'MSI Motherboard Chip-Level Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Gaming Laptop Repair',url:'https://jspcs.online/gaming-laptop-repair-madurai'},{name:'MSI Gaming Laptop Repair Madurai',url:'https://jspcs.online/msi-gaming-laptop-repair-madurai'}]),
  faqSchema([
    {question:'How much does MSI gaming laptop repair cost in Madurai?',answer:'MSI repair: ₹299 software, ₹800–₹2,500 hardware, ₹2,000–₹9,000 chip-level. MSI 144Hz/240Hz screens ₹4,000–₹9,000. Thermal service ₹1,500–₹3,000. Free diagnosis.'},
    {question:'Why does my MSI gaming laptop overheat in Madurai?',answer:'MSI laptops use aggressive thermal designs that rely on fresh thermal paste and clean fans. After 1–2 years, paste dries and dust accumulates. In Madurai\'s heat, this worsens significantly. We fix it with repasting + cleaning + fan replacement if needed.'},
    {question:'Can you repair MSI laptop motherboard in Madurai?',answer:'Yes. MSI gaming motherboards are repaired at the chip level in Madurai — GPU BGA reflow, power section repair, BIOS chip replacement, EC repair.'},
    {question:'Do you replace MSI gaming laptop screen in Madurai?',answer:'Yes. MSI 144Hz, 240Hz, 1440p QHD, and OLED panels replaced. We source IPS and OLED panels for MSI models and complete with full calibration.'},
  ]),
]

const sections = [
  { id:'overview', heading:'MSI Gaming Laptop Repair in Madurai', content:`<p>JSPCS Online is Madurai's specialist MSI gaming laptop repair center. MSI builds some of the most powerful gaming laptops available — Katana, Thin GF63, Raider GE76, Crosshair, Creator, and flagship Titan GT — and each requires expert maintenance to perform at its full potential.</p><p>MSI gaming laptops are particularly prone to thermal issues as their compact chassis push extreme hardware. Regular thermal maintenance in Madurai's climate is not optional — it's essential for longevity and performance. Our technicians are experienced with MSI's specific board architectures, Dragon Center/MSI Center configurations, and high-refresh display systems.</p>` },
  { id:'models', heading:'MSI Laptop Models Serviced in Madurai', content:`<ul><li><strong>MSI Katana GF66/GF76</strong> — Entry gaming: thermal service, fan, screen, battery repairs.</li><li><strong>MSI Thin GF63</strong> — Slim gaming laptop: thermal repasting, display replacement, keyboard repair.</li><li><strong>MSI Raider GE66/GE76/GE78</strong> — High-end gaming: full thermal service, GPU BGA service, display repair.</li><li><strong>MSI Crosshair</strong> — Premium gaming: thermal, per-key RGB keyboard, screen replacement.</li><li><strong>MSI Creator Z16/M16</strong> — Creative workstation: OLED/Mini LED display, GPU, RAM/SSD upgrade.</li><li><strong>MSI Titan GT77</strong> — Flagship: full thermal service, LiquidMetal re-application, GPU service.</li></ul>` },
  { id:'thermal', heading:'MSI Gaming Laptop Thermal Service in Madurai', content:`<p>MSI gaming laptop thermal maintenance is our most requested service in Madurai. After 12–18 months, thermal paste and pads degrade significantly. The result: constant throttling, FPS drops, and random shutdowns in Madurai's hot weather.</p><ul><li><strong>CPU thermal paste replacement</strong> — LiquidMetal (Titan) or high-performance compound (Katana, Raider)</li><li><strong>GPU thermal paste replacement</strong> — GPU die repasted for full thermal recovery</li><li><strong>GPU memory thermal pads</strong> — VRAM pad replacement corrects VRAM-induced throttling</li><li><strong>VRM thermal pads</strong> — Critical for sustained power delivery under load</li><li><strong>Fan replacement</strong> — MSI dual-fan bearing failure service</li><li><strong>Full chassis cleaning</strong> — Vent, heatsink, and heatpipe deep clean</li><li><strong>MSI Center thermal profile</strong> — Extreme Performance and custom fan curve setup</li></ul><p>After a full MSI thermal service in Madurai, customers typically see CPU temps drop 25–40°C and 20–30% improvement in sustained FPS.</p>` },
  { id:'repairs', heading:'Common MSI Gaming Laptop Repairs in Madurai', content:`<ul><li><strong>MSI laptop not turning on</strong> — Power delivery IC, battery, BIOS, DC jack</li><li><strong>MSI laptop overheating / throttling</strong> — Thermal service (our #1 MSI job in Madurai)</li><li><strong>MSI screen replacement</strong> — 144Hz, 240Hz, 1440p QHD, OLED panels</li><li><strong>MSI keyboard</strong> — Per-key RGB mechanical keyboard replacement</li><li><strong>MSI battery not holding charge</strong> — MSI battery replacement, charging circuit</li><li><strong>MSI motherboard dead</strong> — Chip-level: GPU BGA reflow, power section, EC</li><li><strong>MSI USB-C / Thunderbolt</strong> — Controller chip and port repair</li></ul>` },
  { id:'why-jspcs', heading:'Why Trust JSPCS Online for MSI Repair in Madurai', content:`<ul><li>✅ <strong>MSI Gaming Specialists</strong> — All MSI series serviced in Madurai</li><li>✅ <strong>LiquidMetal Certified</strong> — Proper LiquidMetal handling for Titan models</li><li>✅ <strong>Free Diagnosis</strong> — Know the fault before paying</li><li>✅ <strong>90-Day Warranty</strong> — All hardware repairs warranted</li><li>✅ <strong>Chip-Level Motherboard</strong> — Save ₹20,000+ over replacement</li><li>✅ <strong>Same-Day Thermal Service</strong> — Most thermal jobs done same day</li></ul>` },
]

const serviceHighlights = [
  { title:'MSI Katana Repair', description:'Entry gaming service', icon:'⚔️' },
  { title:'MSI Raider Repair', description:'High-end gaming service', icon:'🎮' },
  { title:'GPU Thermal Pads', description:'VRAM throttling fix', icon:'🌡️' },
  { title:'MSI Screen Replacement', description:'144Hz, 240Hz, QHD', icon:'🖥️' },
  { title:'Motherboard Chip-Level', description:'GPU BGA reflow', icon:'🔧' },
  { title:'Fan Replacement', description:'MSI dual-fan service', icon:'🌀' },
  { title:'MSI Center Config', description:'Performance profile setup', icon:'⚙️' },
  { title:'Battery Replacement', description:'MSI genuine battery', icon:'🔋' },
]

const faqs = [
  { question:'How much does MSI gaming laptop repair cost in Madurai?', answer:'₹299 software, ₹800–₹2,500 hardware, ₹2,000–₹9,000 chip-level. Screens ₹4,000–₹9,000. Thermal service ₹1,500–₹3,000. Free diagnosis.' },
  { question:'Why does my MSI gaming laptop overheat in Madurai?', answer:'Thermal paste dries after 1–2 years and dust accumulates. In Madurai\'s heat this worsens significantly. Repasting + cleaning + fan replacement resolves this.' },
  { question:'Can you repair MSI laptop motherboard in Madurai?', answer:'Yes. Chip-level: GPU BGA reflow, power section, BIOS chip replacement, EC repair.' },
  { question:'Do you replace MSI gaming laptop screen in Madurai?', answer:'Yes. 144Hz, 240Hz, 1440p QHD, OLED panels. Full calibration after replacement.' },
  { question:'How long does MSI repair take in Madurai?', answer:'Thermal service: same-day. Screen: 4–24 hrs. Motherboard chip-level: 2–4 days.' },
]

export default function MSIGamingLaptopRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="msi-gaming-laptop-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="MSI Gaming Laptop Repair in Madurai"
      heroSubtitle="Specialist Thermal, GPU, Screen & Motherboard Service for All MSI Models"
      heroDescription="JSPCS Online is Madurai's expert MSI gaming laptop repair center. Katana, Thin, Raider, Crosshair, Creator, Titan — all serviced. Thermal repasting, GPU BGA repair, screen replacement, chip-level motherboard service. Free diagnosis, 90-day warranty."
      breadcrumbLabel="MSI Gaming Laptop Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="MSI Gaming Laptop Throttling? Call JSPCS Online Madurai"
      ctaDescription="All MSI models serviced. Same-day thermal service. Free diagnosis. 90-day warranty."
      relatedPages={[
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair Madurai'},
        {href:'/laptop-heating-issue-repair-madurai', label:'Laptop Overheating Fix'},
        {href:'/thermal-paste-service-madurai', label:'Thermal Paste Service'},
        {href:'/gpu-repair-service-madurai', label:'GPU Repair Service'},
        {href:'/asus-laptop-repair-madurai', label:'Asus ROG Repair'},
        {href:'/motherboard-repair-madurai', label:'Motherboard Repair'},
      ]}
    />
  )
}
