import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Motherboard Repair in Madurai | Chip-Level Laptop & PC Board Repair – JSPCS Online',
  description: 'Expert chip-level motherboard repair in Madurai for laptops, desktops, and gaming systems. Power section, GPU BGA, BIOS, capacitor, USB-C repair. Save thousands. Call 9842139997.',
  keywords: ['motherboard repair madurai','chip level motherboard repair madurai','laptop motherboard repair madurai','desktop motherboard repair madurai','bga reball madurai','gpu bga repair madurai','bios chip repair madurai','motherboard not turning on madurai','power section repair madurai','dead motherboard repair madurai'],
  slug: 'motherboard-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'motherboard-repair-madurai', name:'JSPCS Online – Motherboard Repair in Madurai', description:'Expert chip-level motherboard repair center in Madurai for all laptop and desktop brands. Power section, GPU BGA reflow, BIOS chip, capacitor, USB-C/Thunderbolt repair.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Laptop Motherboard Chip-Level Repair'},{name:'Desktop Motherboard Repair'},{name:'GPU BGA Reball & Reflow'},{name:'BIOS Chip Replacement'},{name:'Power Section Repair'},{name:'USB-C / Thunderbolt Controller Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Chip-Level Service',url:'https://jspcs.online/chip-level-service-in-madurai'},{name:'Motherboard Repair Madurai',url:'https://jspcs.online/motherboard-repair-madurai'}]),
  faqSchema([
    {question:'How much does motherboard chip-level repair cost in Madurai?',answer:'Chip-level motherboard repair in Madurai costs ₹2,000–₹8,000 for most laptop boards (power section, BIOS, EC). GPU BGA reflow/reball: ₹3,000–₹8,000. Complex repairs up to ₹12,000. This is significantly cheaper than OEM board replacement (₹15,000–₹40,000). Free diagnosis.'},
    {question:'What is chip-level motherboard repair?',answer:'Chip-level repair means repairing individual components on the circuit board — capacitors, MOSFETs, ICs, BIOS chips — rather than replacing the entire board. It requires specialized equipment like hot air rework stations, BGA reballing tools, and oscilloscopes. JSPCS Online performs this in Madurai.'},
    {question:'Can you repair a laptop motherboard that won\'t turn on in Madurai?',answer:'Yes. A laptop that won\'t power on due to a motherboard fault is one of our most common repairs in Madurai. We diagnose the power delivery section, check for failed MOSFETs, capacitors, PWM controllers, and EC chips — and replace the specific faulty component.'},
    {question:'Can you repair a dead GPU on a laptop motherboard?',answer:'Yes. GPU failures from thermal stress (solder joint cracks) are repaired via BGA reflow (re-melting solder joints) or BGA reball (complete solder ball replacement). Reball is more permanent and recommended for gaming laptops that will continue to run hot.'},
    {question:'How long does motherboard repair take in Madurai?',answer:'Simple power section repairs: 1–2 days. GPU BGA reflow: 1–2 days. GPU BGA reball: 2–3 days. Complex multi-fault repairs: 3–5 days. We update you at every stage via WhatsApp.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Chip-Level Motherboard Repair Service in Madurai', content:`<p>JSPCS Online operates Madurai's most advanced chip-level motherboard repair laboratory. When a laptop or desktop motherboard fails, the traditional recommendation is a costly board replacement — often ₹15,000–₹40,000 for an OEM board. Our chip-level approach repairs the specific faulty component, saving you thousands.</p>
<p>Our Madurai repair lab is equipped with professional-grade tools: hot air rework stations (JBC, Hakko), BGA reballing jigs, digital oscilloscopes, power supply analyzers, and X-ray reference capability. This equipment — combined with 10+ years of board-level experience — allows our technicians to accurately diagnose and repair faults that most service centers cannot.</p>
<p>We repair motherboards for all laptop brands (Dell, HP, Lenovo, Asus, Acer, MSI, Apple) and desktop boards (Intel Z/B/H series, AMD X/B series).</p>` },
  { id:'what-we-repair', heading:'What We Repair on Motherboards in Madurai', subheading:'Component-Level Fault Isolation & Repair', content:`<ul>
<li><strong>Power delivery section</strong> — MOSFET, PWM controller, inductors, capacitors for no-power faults</li>
<li><strong>GPU (BGA) reflow</strong> — Re-melting GPU solder joints cracked from thermal cycling</li>
<li><strong>GPU (BGA) reball</strong> — Complete solder ball replacement for permanent GPU repair</li>
<li><strong>BIOS chip replacement</strong> — Read, reprogram, or replace corrupted BIOS/UEFI flash chips</li>
<li><strong>EC (Embedded Controller)</strong> — Keyboard, fan, charging, power button IC repair</li>
<li><strong>USB-C / Thunderbolt controller</strong> — Alps/Redriver chip and port repair on modern laptops</li>
<li><strong>RAM slot repair</strong> — Cold solder joints and broken slot contacts</li>
<li><strong>Charging circuit</strong> — DC jack circuit, charging IC, battery management</li>
<li><strong>CMOS battery circuit</strong> — BIOS settings loss, date reset issues</li>
<li><strong>Network / Wi-Fi chip</strong> — Intel NIC and wireless card IC replacement</li>
<li><strong>Audio codec chip</strong> — No-sound issues at chip level</li>
<li><strong>Capacitor replacement</strong> — Bulging / failed capacitors on board or SMPS</li>
</ul>` },
  { id:'symptoms', heading:'Signs Your Motherboard Needs Repair in Madurai', content:`<p>These symptoms often indicate a repairable motherboard fault rather than a dead board requiring replacement:</p>
<ul>
<li><strong>Laptop/PC won't turn on</strong> — Often power section MOSFET or PWM controller failure</li>
<li><strong>No display / blank screen</strong> — GPU solder joint failure or display circuit issue</li>
<li><strong>Random shutdowns / restarts</strong> — Power delivery instability or thermal sensor IC</li>
<li><strong>Keyboard/touchpad not working</strong> — EC chip or scan controller failure</li>
<li><strong>USB ports not working</strong> — USB controller chip failure (common on newer laptops)</li>
<li><strong>Not charging</strong> — Charging IC, BQ chip, or DC jack circuit</li>
<li><strong>BIOS loop / stuck on logo</strong> — Corrupted BIOS flash chip</li>
<li><strong>GPU/display artifacts</strong> — GPU solder joint failure, early sign before complete failure</li>
<li><strong>RAM not detected</strong> — RAM slot solder joints or memory controller</li>
<li><strong>No audio output</strong> — Realtek/Cirrus codec chip failure</li>
</ul>` },
  { id:'gpu-bga', heading:'GPU BGA Reflow & Reball in Madurai', subheading:'Specialist BGA Service for Laptop & Desktop GPUs', content:`<p>GPU BGA (Ball Grid Array) repair is one of our highest-demand services in Madurai. Laptop GPUs connect to the motherboard via hundreds of tiny solder balls underneath the chip. After years of thermal cycling — especially in gaming laptops — these solder joints crack, causing GPU failure.</p>
<p><strong>BGA Reflow</strong> involves applying controlled heat to re-melt and re-fuse the existing solder joints. It costs ₹3,000–₹5,000 and is appropriate for moderate thermal stress cases.</p>
<p><strong>BGA Reball</strong> involves completely removing the GPU, stripping all old solder balls, applying a fresh ball grid, and rebonding the chip. It costs ₹5,000–₹8,000 and provides a more durable, permanent repair — highly recommended for gaming laptops that will continue to run hot.</p>` },
  { id:'desktop-motherboard', heading:'Desktop Motherboard Repair in Madurai', content:`<p>Desktop motherboard repairs include capacitor replacement (bulging caps), BIOS chip failure, USB controller issues, RAM slot repair, SMPS circuit faults, and more. Common desktop brands serviced:</p>
<ul>
<li><strong>ASUS desktop boards</strong> — ROG Strix, TUF, Prime series</li>
<li><strong>MSI desktop boards</strong> — MAG, MPG, MEG series</li>
<li><strong>Gigabyte desktop boards</strong> — AORUS, Gaming X, UD series</li>
<li><strong>Dell OptiPlex boards</strong> — Business desktop motherboard repair</li>
<li><strong>HP ProDesk boards</strong> — SMPS circuit, capacitor, BIOS repair</li>
</ul>` },
  { id:'why-chip-level', heading:'Why Choose Chip-Level Repair Over Board Replacement?', content:`<ul>
<li>✅ <strong>Cost savings of ₹10,000–₹35,000</strong> — Chip-level costs ₹2,000–₹8,000 vs ₹15,000–₹40,000 for OEM board</li>
<li>✅ <strong>Data preserved</strong> — Your SSD/HDD data is safe; no need to reinstall OS</li>
<li>✅ <strong>Eco-friendly</strong> — Repair over replacement reduces e-waste</li>
<li>✅ <strong>OEM boards often unavailable</strong> — Especially for older models; chip-level repair is the only option</li>
<li>✅ <strong>90-day warranty</strong> — All chip-level repairs covered with warranty</li>
<li>✅ <strong>Expert diagnosis</strong> — We identify the exact fault, not just replace the board blindly</li>
</ul>` },
]

const serviceHighlights = [
  { title:'Power Section Repair', description:'MOSFET, PWM, capacitor', icon:'⚡' },
  { title:'GPU BGA Reflow', description:'Crack solder joint repair', icon:'🎮' },
  { title:'GPU BGA Reball', description:'Permanent GPU rebonding', icon:'🔬' },
  { title:'BIOS Chip Repair', description:'Flash, reprogram, replace', icon:'💾' },
  { title:'USB-C / TB Repair', description:'Controller chip repair', icon:'🔌' },
  { title:'EC Chip Repair', description:'Keyboard, fan, charging IC', icon:'⌨️' },
  { title:'RAM Slot Repair', description:'Cold joint & contact fix', icon:'🔧' },
  { title:'Desktop Boards', description:'All brands serviced', icon:'🖥️' },
]

const faqs = [
  { question:'How much does chip-level motherboard repair cost in Madurai?', answer:'Power section repair: ₹2,000–₹5,000. GPU BGA reflow: ₹3,000–₹5,000. GPU reball: ₹5,000–₹8,000. BIOS chip: ₹1,500–₹3,000. Free diagnosis.' },
  { question:'What is chip-level repair?', answer:'Repairing individual components (capacitors, MOSFETs, ICs, BIOS chips) instead of replacing the entire board. Saves ₹10,000–₹35,000.' },
  { question:'Can you repair a laptop motherboard that won\'t turn on?', answer:'Yes — power section MOSFET, PWM controller, capacitor, EC chip diagnosis and repair in Madurai.' },
  { question:'Can you repair a dead GPU on a laptop?', answer:'Yes — BGA reflow (₹3,000–₹5,000) or BGA reball (₹5,000–₹8,000) for permanent fix.' },
  { question:'How long does motherboard repair take in Madurai?', answer:'Simple repairs: 1–2 days. GPU reflow: 1–2 days. GPU reball: 2–3 days. Complex: 3–5 days.' },
]

export default function MotherboardRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="motherboard-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Motherboard Repair in Madurai"
      heroSubtitle="Chip-Level Laptop & Desktop Board Repair – Save Thousands"
      heroDescription="JSPCS Online provides expert chip-level motherboard repair in Madurai for all laptop and desktop brands. Power section, GPU BGA reflow/reball, BIOS chip, EC, USB-C, capacitor repair. Save ₹10,000–₹35,000 over OEM board replacement. Free diagnosis, 90-day warranty."
      breadcrumbLabel="Motherboard Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Motherboard Dead? Don't Replace — Repair It in Madurai"
      ctaDescription="Chip-level repair saves ₹10,000–₹35,000. Free diagnosis. 90-day warranty."
      relatedPages={[
        {href:'/chip-level-service-in-madurai', label:'Chip-Level Service Madurai'},
        {href:'/gpu-repair-service-madurai', label:'GPU Repair Service'},
        {href:'/data-recovery-service-madurai', label:'Data Recovery Service'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/desktop-repair-service-in-madurai', label:'Desktop Repair Madurai'},
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
      ]}
    />
  )
}
