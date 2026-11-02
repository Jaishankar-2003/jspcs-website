import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'HP Laptop Repair in Madurai | Pavilion, Envy, Omen, ProBook – JSPCS Online',
  description: 'Expert HP laptop repair in Madurai. Pavilion, Envy, Spectre, Omen gaming, ProBook, EliteBook. Motherboard, screen, keyboard, battery, hinge, overheating fix. Call 9842139997.',
  keywords: ['hp laptop repair madurai','hp pavilion repair madurai','hp envy repair madurai','hp omen repair madurai','hp probook repair madurai','hp elitebook repair madurai','hp laptop screen replacement madurai','hp laptop motherboard repair madurai','hp laptop not charging madurai'],
  slug: 'hp-laptop-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'hp-laptop-repair-madurai', name:'JSPCS Online – HP Laptop Repair in Madurai', description:'HP laptop repair specialist in Madurai. Pavilion, Envy, Spectre, Omen, ProBook, EliteBook serviced with chip-level expertise.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'HP Laptop Motherboard Repair'},{name:'HP Laptop Screen Replacement'},{name:'HP Omen Gaming Laptop Repair'},{name:'HP ProBook Business Laptop Service'},{name:'HP Laptop Battery Replacement'},{name:'HP Laptop Keyboard Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'HP Laptop Repair Madurai',url:'https://jspcs.online/hp-laptop-repair-madurai'}]),
  faqSchema([
    {question:'How much does HP laptop repair cost in Madurai?',answer:'HP laptop repair costs range from ₹299 for software fixes to ₹2,000–₹8,000 for motherboard chip-level. Screens cost ₹2,000–₹6,500. Keyboard replacements ₹800–₹1,800. Free diagnosis always provided.'},
    {question:'Do you repair HP Omen gaming laptops in Madurai?',answer:'Yes. HP Omen 15, 16, and 17 laptops are serviced at JSPCS Online Madurai. Services include thermal repasting, GPU thermal pad replacement, fan replacements, and performance optimization.'},
    {question:'Can you fix HP laptop overheating in Madurai?',answer:'Yes. HP laptops are particularly prone to overheating due to compact thermal designs. We clean all dust, replace CPU/GPU thermal paste, replace thermal pads, and replace failed fans.'},
    {question:'Do you repair HP ProBook and EliteBook in Madurai?',answer:'Yes. HP ProBook 400/600 series and EliteBook 800 series are commonly serviced. We handle business laptop repairs with data safety protocols — BIOS passwords, BitLocker, TPM awareness.'},
  ]),
]

const sections = [
  { id:'overview', heading:'HP Laptop Repair Service in Madurai', content:`<p>JSPCS Online provides expert HP laptop repair services across Madurai, Tamil Nadu. We service the complete HP laptop range — from affordable Pavilion and HP 15 models to premium Envy and Spectre ultrabooks, Omen gaming laptops, and ProBook/EliteBook business machines.</p><p>HP laptops are widely used across Madurai — in homes, colleges, offices, and government institutions. Our technicians are trained on HP's specific board layouts, thermal designs, and proprietary connectors, ensuring accurate diagnosis and efficient repair.</p><p>Every HP laptop repair begins with a <strong>free diagnosis</strong>. We identify the exact fault, provide a transparent quote, and only proceed after your approval.</p>` },
  { id:'models', heading:'HP Laptop Models We Repair in Madurai', content:`<ul><li><strong>HP Pavilion &amp; HP 15/14</strong> — Most common HP models in Madurai homes and colleges. Keyboard, screen, battery, hinge, fan, and motherboard repairs.</li><li><strong>HP Envy</strong> — Premium HP laptops with thin chassis. Screen replacement, motherboard repair, charging issues handled with precision tools.</li><li><strong>HP Spectre x360</strong> — Convertible ultrabooks. Hinge repair, touch screen replacement, OLED display service.</li><li><strong>HP Omen 15, 16, 17</strong> — Gaming laptops: thermal service, GPU thermal pad, fan replacement, performance optimization.</li><li><strong>HP ProBook 400/600 series</strong> — Business grade. Battery, keyboard, RAM/SSD upgrade, display replacement.</li><li><strong>HP EliteBook 800 series</strong> — Enterprise laptops with security features. Handled with BIOS/TPM awareness.</li><li><strong>HP Victus</strong> — Mid-range gaming: thermal paste, fan, RAM/SSD upgrade for better gaming performance.</li></ul>` },
  { id:'common-repairs', heading:'Common HP Laptop Problems Fixed in Madurai', content:`<ul><li><strong>HP laptop not turning on</strong> — Power IC, battery, DC jack, or motherboard fault</li><li><strong>HP laptop overheating / shutting down</strong> — Dust-clogged vents, degraded thermal paste, fan failure</li><li><strong>HP laptop screen crack / black screen</strong> — LCD replacement, backlight, display cable</li><li><strong>HP laptop keyboard not working</strong> — Liquid damage, worn membrane, connector failure</li><li><strong>HP laptop hinge broken</strong> — Hinge bracket replacement, chassis repair, lid cover</li><li><strong>HP laptop not charging</strong> — Battery replacement, DC jack, charging IC on motherboard</li><li><strong>HP laptop fan noise</strong> — Fan bearing failure, dust on fan blades, fan replacement</li><li><strong>HP laptop running slow</strong> — SSD upgrade from HDD, RAM upgrade, Windows reinstall</li><li><strong>HP laptop BIOS password</strong> — HP-specific BIOS reset procedures</li></ul>` },
  { id:'omen-gaming', heading:'HP Omen &amp; Victus Gaming Laptop Repair Madurai', content:`<p>HP Omen gaming laptops are powerful machines that need regular thermal maintenance — especially in Madurai's heat. Our gaming laptop services for HP Omen and Victus in Madurai:</p><ul><li><strong>CPU &amp; GPU thermal paste replacement</strong> — Premium Thermal Grizzly or Arctic MX compound</li><li><strong>GPU thermal pad replacement</strong> — Corrects throttling caused by dried-out pads</li><li><strong>Fan replacement</strong> — Omen 15/16/17 dual fan replacement</li><li><strong>Omen Command Center optimization</strong> — Thermal profile configuration</li><li><strong>RAM upgrade</strong> — Up to 32GB DDR5 for smoother gaming</li><li><strong>SSD upgrade</strong> — Second NVMe slot installation</li><li><strong>Chassis cleaning</strong> — Full disassembly, vent and heatsink deep clean</li></ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for HP Laptop Repair in Madurai', content:`<ul><li>✅ <strong>HP Specialist Experience</strong> — Full HP range serviced in Madurai</li><li>✅ <strong>Chip-Level Board Repair</strong> — Save ₹15,000+ vs OEM board replacement</li><li>✅ <strong>Free Diagnosis</strong> — No charge to find the fault</li><li>✅ <strong>90-Day Warranty</strong> — All hardware repairs warranted</li><li>✅ <strong>Genuine Parts</strong> — OEM-quality screens, keyboards, batteries</li><li>✅ <strong>Same-Day Options</strong> — Many repairs done the same day</li><li>✅ <strong>Data Safety</strong> — Your files safe throughout the repair</li><li>✅ <strong>WhatsApp Updates</strong> — Real-time repair status</li></ul>` },
]

const serviceHighlights = [
  { title:'HP Pavilion Repair', description:'Most popular HP series', icon:'💻' },
  { title:'HP Omen Gaming', description:'Thermal + GPU + performance', icon:'🎮' },
  { title:'HP Envy / Spectre', description:'Premium ultrabook service', icon:'✨' },
  { title:'Motherboard Repair', description:'Chip-level board service', icon:'🔧' },
  { title:'Screen Replacement', description:'FHD, OLED, touch panels', icon:'🖥️' },
  { title:'Keyboard Repair', description:'Backlit keyboard service', icon:'⌨️' },
  { title:'Battery Replacement', description:'Genuine HP battery cells', icon:'🔋' },
  { title:'Hinge Repair', description:'Lid hinge & chassis repair', icon:'🔩' },
]

const faqs = [
  { question:'How much does HP laptop repair cost in Madurai?', answer:'₹299 for software, ₹800–₹2,500 for hardware, ₹2,000–₹8,000 for motherboard. Screens ₹2,000–₹6,500. Free diagnosis.' },
  { question:'Do you repair HP Omen gaming laptops in Madurai?', answer:'Yes — Omen 15, 16, 17. Thermal repasting, GPU pads, fan replacement, performance optimization.' },
  { question:'Can you fix HP laptop overheating in Madurai?', answer:'Yes. We clean dust, replace thermal paste and pads, replace failed fans — typically reduces temps by 15–30°C.' },
  { question:'Do you repair HP ProBook and EliteBook?', answer:'Yes. Business laptops serviced with data safety protocols — BIOS passwords, BitLocker, TPM awareness.' },
  { question:'How long does HP laptop repair take in Madurai?', answer:'Software: same-day. Screen/keyboard: 4–24 hours. Motherboard chip-level: 2–4 days.' },
]

export default function HPLaptopRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="hp-laptop-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="HP Laptop Repair in Madurai"
      heroSubtitle="Expert Service for Pavilion, Envy, Spectre, Omen & ProBook"
      heroDescription="JSPCS Online is Madurai's trusted HP laptop repair center. We service all HP models — Pavilion, HP 15, Envy, Spectre, Omen gaming, Victus, ProBook, and EliteBook. Chip-level motherboard repair, screen replacement, keyboard, battery, overheating fix. Free diagnosis, 90-day warranty."
      breadcrumbLabel="HP Laptop Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="HP Laptop Not Working? Call JSPCS Online Madurai"
      ctaDescription="All HP models serviced. Free diagnosis. Genuine parts. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/dell-laptop-repair-madurai', label:'Dell Laptop Repair'},
        {href:'/lenovo-laptop-repair-madurai', label:'Lenovo Laptop Repair'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/laptop-screen-replacement-madurai', label:'Screen Replacement'},
        {href:'/motherboard-repair-madurai', label:'Motherboard Repair'},
      ]}
    />
  )
}
