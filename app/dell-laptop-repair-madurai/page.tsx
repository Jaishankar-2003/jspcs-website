import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Dell Laptop Repair in Madurai | Inspiron, XPS, G-Series – JSPCS Online',
  description: 'Expert Dell laptop repair in Madurai. Inspiron, Vostro, XPS, G-Series gaming. Motherboard, screen, keyboard, hinge, battery, overheating fix. Call 9842139997.',
  keywords: ['dell laptop repair madurai','dell inspiron repair madurai','dell xps repair madurai','dell g15 repair madurai','dell gaming laptop repair madurai','dell laptop screen replacement madurai','dell motherboard repair madurai','dell laptop battery replacement madurai'],
  slug: 'dell-laptop-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'dell-laptop-repair-madurai', name:'JSPCS Online – Dell Laptop Repair in Madurai', description:'Specialist Dell laptop repair center in Madurai covering Inspiron, Vostro, XPS, G-Series and Alienware.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Dell Laptop Motherboard Repair'},{name:'Dell Screen Replacement'},{name:'Dell Keyboard Repair'},{name:'Dell Battery Replacement'},{name:'Dell Hinge Repair'},{name:'Dell G-Series Thermal Service'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Dell Laptop Repair Madurai',url:'https://jspcs.online/dell-laptop-repair-madurai'}]),
  faqSchema([
    {question:'How much does Dell laptop repair cost in Madurai?',answer:'Costs start from ₹299 for software fixes, ₹799–₹2,500 for hardware (keyboard/battery), and ₹2,000–₹8,000 for motherboard chip-level. Screen replacements: ₹2,500–₹7,000. Free diagnosis always.'},
    {question:'Do you repair Dell G-Series gaming laptops in Madurai?',answer:'Yes — Dell G15, G16. Services: thermal repasting, GPU thermal pad, fan replacement, MUX switch issues, overheating fix.'},
    {question:'Can you repair a Dell XPS motherboard in Madurai?',answer:'Yes. Chip-level: power delivery circuits, GPU failures, BIOS issues on XPS 13 and XPS 15.'},
    {question:'How long does Dell laptop repair take in Madurai?',answer:'Software: same-day. Keyboard/battery: 1–2 hours. Screen: 4–24 hours. Motherboard chip-level: 2–4 days.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Dell Laptop Repair Service in Madurai', content:`<p>JSPCS Online is Madurai's trusted Dell laptop repair specialist. We service the full Dell range — Inspiron, Vostro, XPS, Latitude, G-Series gaming, and Alienware — with chip-level expertise and 90-day warranty.</p><p>Every repair starts with a <strong>free diagnostic assessment</strong>. We identify the root cause, provide a written quote, and proceed only with your approval. No hidden charges.</p><p>Dell laptops — especially the compact XPS and heat-intensive G-Series — require specialist knowledge of Dell's proprietary layouts and thermal designs. Our Madurai technicians are extensively experienced with the full Dell ecosystem.</p>` },
  { id:'models', heading:'Dell Laptop Models We Repair in Madurai', subheading:'Full Dell Range Coverage', content:`<ul><li><strong>Dell Inspiron 14, 15, 16, 17</strong> — Most popular in Madurai homes and colleges. All common issues: hinge breaks, keyboard failures, screen damage, battery drain.</li><li><strong>Dell Vostro 3000/5000/7000</strong> — Business laptops. SSD/RAM upgrades, screen replacements handled without data loss.</li><li><strong>Dell XPS 13 &amp; XPS 15</strong> — Premium ultrabooks. InfinityEdge OLED/LCD screen replacement, chip-level motherboard repair, charging port.</li><li><strong>Dell Latitude</strong> — Enterprise laptops with TPM security. Serviced with BIOS/BitLocker awareness.</li><li><strong>Dell G15 &amp; G16</strong> — Gaming laptops: thermal repasting, GPU pad replacement, fan replacement, throttling fix.</li><li><strong>Alienware m-series</strong> — High-end gaming: thermal service, GPU BGA repair, RGB keyboard controller.</li></ul>` },
  { id:'common-repairs', heading:'Common Dell Laptop Repairs in Madurai', content:`<ul><li><strong>Not turning on</strong> — Power IC, battery fault, BIOS corruption, or damaged DC jack</li><li><strong>Overheating / shutting down</strong> — Dust-clogged fans, degraded thermal paste, fan failure</li><li><strong>Screen cracked or blank</strong> — LCD panel, backlight, or eDP cable replacement</li><li><strong>Keyboard not working</strong> — Spill damage, membrane failure, or connector issues</li><li><strong>Hinge broken</strong> — Hinge replacement, chassis lid repair, back cover</li><li><strong>Battery not charging</strong> — Cell replacement, charging circuit, or DC jack repair</li><li><strong>Motherboard dead</strong> — Chip-level: MOSFET, power section, GPU reflow, capacitor</li><li><strong>Running slow</strong> — SSD upgrade from HDD, RAM upgrade, Windows reinstall</li></ul>` },
  { id:'chip-level', heading:'Dell Motherboard Chip-Level Repair in Madurai', subheading:'Save ₹20,000+ Over Board Replacement', content:`<p>JSPCS Online repairs Dell motherboards at the component level in Madurai — saving you ₹15,000–₹30,000 compared to OEM board replacement:</p><ul><li><strong>Power delivery section</strong> — MOSFET, PWM controller, capacitor replacement</li><li><strong>GPU repair</strong> — BGA reball and reflow for G-Series GPU solder failures</li><li><strong>BIOS chip replacement</strong> — Reflash or replace corrupted BIOS on all Dell models</li><li><strong>EC (Embedded Controller) repair</strong> — Keyboard, fan, power management IC</li><li><strong>USB-C/Thunderbolt</strong> — Controller chip and port replacement on XPS</li><li><strong>RAM slot repair</strong> — Cold solder joints on memory slots</li></ul><p>Chip-level repairs cost ₹2,000–₹6,000 vs ₹15,000–₹30,000 for board replacement.</p>` },
  { id:'gaming', heading:'Dell G-Series Gaming Laptop Repair Madurai', content:`<p>Dell G-Series laptops generate significant heat — especially in Madurai's climate. Our specialized gaming laptop thermal services in Madurai:</p><ul><li><strong>Full thermal system service</strong> — CPU &amp; GPU thermal paste, GPU thermal pad replacement</li><li><strong>Fan replacement</strong> — CPU fan and GPU fan for G15, G16, Alienware</li><li><strong>Thermal throttling fix</strong> — Repasting + undervolting for sustained gaming performance</li><li><strong>Performance mode</strong> — Dell Command Center optimization</li><li><strong>RAM upgrade</strong> — Up to 64GB DDR5 for better multitasking while gaming</li><li><strong>NVMe SSD upgrade</strong> — Second drive slot for more game storage</li></ul><p>After thermal service, G-Series customers in Madurai typically see 20–35°C CPU temp drop and 15–25% better sustained FPS.</p>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Dell Repair in Madurai', content:`<ul><li>✅ <strong>Dell Specialist Experience</strong> — Hundreds of Dell laptops repaired monthly</li><li>✅ <strong>Chip-Level Expertise</strong> — Repair boards, not replace them</li><li>✅ <strong>Free Diagnosis</strong> — Transparent written quote before work begins</li><li>✅ <strong>90-Day Warranty</strong> — All hardware repairs warranted</li><li>✅ <strong>Genuine Parts</strong> — OEM-quality screens, keyboards, batteries</li><li>✅ <strong>Data Safety</strong> — Never format without permission; recovery if needed</li><li>✅ <strong>WhatsApp Updates</strong> — Real-time status throughout the repair</li></ul>` },
]

const serviceHighlights = [
  { title:'Dell Inspiron Repair', description:'Most popular Dell series', icon:'💻' },
  { title:'Dell XPS Repair', description:'Premium ultrabook chip-level', icon:'✨' },
  { title:'Dell G-Series Gaming', description:'Thermal + GPU + performance', icon:'🎮' },
  { title:'Motherboard Repair', description:'Chip-level, save ₹20,000+', icon:'🔧' },
  { title:'Screen Replacement', description:'HD, FHD, OLED panels', icon:'🖥️' },
  { title:'Keyboard Repair', description:'Backlit & RGB keyboards', icon:'⌨️' },
  { title:'Battery Replacement', description:'Genuine cells, fast drain fix', icon:'🔋' },
  { title:'Hinge Repair', description:'Screen hinge & lid repair', icon:'🔩' },
]

const faqs = [
  { question:'How much does Dell laptop repair cost in Madurai?', answer:'Starts from ₹299 for software, ₹799–₹2,500 for hardware, ₹2,000–₹8,000 for chip-level. Screens ₹2,500–₹7,000. Free diagnosis.' },
  { question:'Do you repair Dell G-Series gaming laptops?', answer:'Yes — G15, G16. Thermal repasting, GPU pads, fan replacement, MUX switch, throttling fix.' },
  { question:'Can you repair a Dell XPS motherboard in Madurai?', answer:'Yes. Chip-level repair: power delivery, GPU, BIOS on XPS 13 and XPS 15.' },
  { question:'Is Dell Inspiron screen replacement available?', answer:'Yes — 14, 15, 16, 17 inch. HD and FHD IPS stocked. Touch models with full assembly.' },
  { question:'How long does Dell laptop repair take?', answer:'Software: same-day. Hardware: 1–2 hrs. Screen: 4–24 hrs. Motherboard: 2–4 days.' },
  { question:'Do you repair Dell Vostro business laptops?', answer:'Yes — Vostro 3000, 5000, 7000. Data safety prioritized before any repair.' },
]

export default function DellLaptopRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="dell-laptop-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Dell Laptop Repair in Madurai"
      heroSubtitle="Specialist Service for Inspiron, Vostro, XPS, Latitude & G-Series Gaming"
      heroDescription="JSPCS Online is Madurai's expert Dell laptop repair center. We fix all Dell models — Inspiron, Vostro, XPS, Latitude, G15, G16, and Alienware. Motherboard chip-level repair, screen replacement, keyboard, hinge, battery, overheating. Free diagnosis, 90-day warranty."
      breadcrumbLabel="Dell Laptop Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Dell Laptop Not Working? Call Madurai's Dell Specialists"
      ctaDescription="Free diagnosis. Genuine parts. 90-day warranty. All Dell models serviced in Madurai."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/motherboard-repair-madurai', label:'Motherboard Repair'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/laptop-screen-replacement-madurai', label:'Screen Replacement'},
        {href:'/hp-laptop-repair-madurai', label:'HP Laptop Repair'},
        {href:'/lenovo-laptop-repair-madurai', label:'Lenovo Laptop Repair'},
      ]}
    />
  )
}
