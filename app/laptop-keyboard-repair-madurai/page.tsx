import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Laptop Keyboard Repair in Madurai | Keyboard Replacement – JSPCS Online',
  description: 'Expert laptop keyboard repair and replacement in Madurai. Backlit, RGB, membrane keyboards. All brands. Water damage fix. Call 9842139997.',
  keywords: ['laptop keyboard repair madurai','laptop keyboard replacement madurai','laptop keyboard not working madurai','backlit keyboard replacement madurai','laptop keyboard water damage madurai','dell keyboard repair madurai','hp keyboard replacement madurai','lenovo keyboard madurai'],
  slug: 'laptop-keyboard-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'laptop-keyboard-repair-madurai', name:'JSPCS Online – Laptop Keyboard Repair in Madurai', description:'Laptop keyboard repair and replacement in Madurai. All brands, backlit keyboards, membrane keyboards, water damage, and RGB keyboards serviced.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Laptop Keyboard Replacement'},{name:'Backlit Keyboard Replacement'},{name:'RGB Keyboard Replacement'},{name:'Water Damaged Keyboard Repair'},{name:'Single Key Replacement'},{name:'Keyboard Controller Chip Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Laptop Keyboard Repair Madurai',url:'https://jspcs.online/laptop-keyboard-repair-madurai'}]),
  faqSchema([
    {question:'How much does laptop keyboard repair cost in Madurai?',answer:'Laptop keyboard replacement in Madurai: standard membrane keyboard ₹800–₹2,500 (panel + labor), backlit keyboard ₹1,200–₹3,500, per-key RGB keyboard ₹3,000–₹6,000 (gaming laptops), ThinkPad keyboard ₹1,500–₹2,800. Single key cap replacement ₹200–₹500. Free diagnosis.'},
    {question:'Can you repair water-damaged laptop keyboard in Madurai?',answer:'Yes — if caught early. Water damage requires immediate shutdown (disconnect power), then thorough cleaning with isopropyl alcohol and controlled drying. If individual key circuits are corroded, keyboard replacement is recommended. The good news: water damage to keyboard is usually isolated and doesn\'t spread to motherboard if dealt with quickly.'},
    {question:'Can individual laptop keys be replaced in Madurai?',answer:'Yes. Individual key caps and scissor-switch mechanisms can often be replaced without full keyboard replacement — particularly for standard keys. However, if the membrane or backlight is damaged, full keyboard replacement is required.'},
    {question:'My laptop keyboard types wrong characters — is it a hardware fault?',answer:'Not always. Wrong characters can result from an accidentally enabled NumLock, changed keyboard layout in Windows, or a driver issue — before assuming hardware failure. We diagnose software causes first. If hardware, it\'s typically membrane degradation or a stuck key.'},
    {question:'How long does laptop keyboard replacement take in Madurai?',answer:'Most keyboard replacements are completed in 1–2 hours in Madurai, often same-day. ThinkPad and other business laptops with more complex keyboard mounts may take slightly longer.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Laptop Keyboard Repair in Madurai', content:`<p>A malfunctioning laptop keyboard — whether due to water damage, worn membrane, broken key caps, or a hardware fault — can bring your work to a standstill. JSPCS Online provides expert laptop keyboard repair and replacement in Madurai for all brands and keyboard types, typically completing the service the same day.</p>
<p>We carry a stock of laptop keyboard panels for the most popular models in Madurai — Dell Inspiron, HP Pavilion, Lenovo IdeaPad, Asus VivoBook — and source specific models with a short lead time for less common units.</p>` },
  { id:'problems', heading:'Laptop Keyboard Problems We Fix in Madurai', content:`<ul>
<li><strong>Keys not responding</strong> — Membrane wear, debris under keys, connector fault</li>
<li><strong>Keys typing wrong characters</strong> — Membrane cross-contact, keyboard layout setting</li>
<li><strong>Water / liquid damage</strong> — Cleaning, corrosion repair, replacement</li>
<li><strong>Backlight not working</strong> — Backlight IC, connector, or full keyboard replacement</li>
<li><strong>Stuck keys</strong> — Foreign objects, worn scissor mechanism</li>
<li><strong>Missing / broken key cap</strong> — Individual key cap replacement</li>
<li><strong>Keyboard not detected</strong> — EC chip issue or ribbon cable fault</li>
<li><strong>Some keys stopped working</strong> — Partial membrane failure, spill damage</li>
</ul>` },
  { id:'brands', heading:'Laptop Keyboard Repairs by Brand in Madurai', content:`<ul>
<li><strong>Dell Inspiron / Vostro</strong> — Standard and backlit keyboard replacement, water damage cleaning</li>
<li><strong>HP Pavilion / Omen</strong> — Standard, backlit, Omen per-key RGB keyboard replacement</li>
<li><strong>Lenovo IdeaPad / ThinkPad</strong> — ThinkPad keyboards are removable from top; famous TrackPoint keyboards replaced</li>
<li><strong>Asus VivoBook / ROG</strong> — ROG per-key RGB Aura Sync keyboards, VivoBook backlit keyboards</li>
<li><strong>Acer Aspire / Nitro</strong> — Standard Aspire keyboards, Nitro backlit keyboard with NitroSense zone replacement</li>
<li><strong>MSI Gaming</strong> — Per-key RGB SteelSeries keyboard panels for Raider, Crosshair</li>
</ul>` },
  { id:'water-damage', heading:'Water-Damaged Keyboard Repair in Madurai', content:`<p>Liquid spills are the most common cause of keyboard failures in Madurai. Here's the right response and what we do:</p>
<p><strong>If you spill liquid on your laptop — act immediately:</strong></p>
<ul>
<li>Power off immediately (hold power button)</li>
<li>Remove AC adapter and battery if accessible</li>
<li>Flip upside down to drain</li>
<li>Do NOT use a hair dryer (static risk)</li>
<li>Bring to JSPCS Online Madurai as soon as possible</li>
</ul>
<p><strong>Our water damage keyboard service:</strong></p>
<ul>
<li>Keyboard removal and full inspection</li>
<li>Isopropyl alcohol cleaning of contacts and membrane</li>
<li>Corrosion removal from affected metal traces</li>
<li>Keyboard replacement if membrane is damaged beyond repair</li>
<li>Motherboard inspection to ensure spill didn't spread</li>
</ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Keyboard Repair in Madurai', content:`<ul>
<li>✅ <strong>Same-Day Service</strong> — Most keyboard replacements in 1–2 hours</li>
<li>✅ <strong>All Keyboard Types</strong> — Standard, backlit, RGB, per-key RGB</li>
<li>✅ <strong>Brand Stock</strong> — Popular models in stock in Madurai</li>
<li>✅ <strong>Water Damage Experts</strong> — Thorough cleaning and drying process</li>
<li>✅ <strong>Free Diagnosis</strong> — Software causes ruled out before hardware replacement</li>
<li>✅ <strong>90-Day Warranty</strong> — On all keyboard replacements</li>
</ul>` },
]

const serviceHighlights = [
  { title:'Keyboard Replacement', description:'All brands, same-day', icon:'⌨️' },
  { title:'Backlit Keyboard', description:'Backlight repair & replace', icon:'💡' },
  { title:'RGB Keyboard', description:'Per-key RGB gaming keyboards', icon:'🌈' },
  { title:'Water Damage', description:'Spill cleaning & repair', icon:'💧' },
  { title:'Single Key Fix', description:'Key cap replacement', icon:'🔑' },
  { title:'ThinkPad Keyboard', description:'TrackPoint keyboard service', icon:'🏢' },
  { title:'Same-Day Service', description:'1–2 hours in Madurai', icon:'⏱️' },
  { title:'All Brands', description:'Dell, HP, Lenovo, Asus+', icon:'✅' },
]

const faqs = [
  { question:'How much does laptop keyboard replacement cost in Madurai?', answer:'Standard keyboard ₹800–₹2,500. Backlit ₹1,200–₹3,500. Per-key RGB gaming ₹3,000–₹6,000. ThinkPad ₹1,500–₹2,800. Single key cap ₹200–₹500.' },
  { question:'Can you repair water-damaged keyboard in Madurai?', answer:'Yes — if caught early. Thorough IPA cleaning and drying. Replacement if membrane corroded.' },
  { question:'Can individual laptop keys be replaced?', answer:'Yes — key caps and scissor mechanisms. Full replacement if membrane or backlight damaged.' },
  { question:'My keyboard types wrong characters — hardware or software?', answer:'Often software — NumLock, Windows keyboard layout. We check software first before hardware diagnosis.' },
  { question:'How long does keyboard replacement take in Madurai?', answer:'1–2 hours. Same-day service for most models.' },
]

export default function LaptopKeyboardRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="laptop-keyboard-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Laptop Keyboard Repair in Madurai"
      heroSubtitle="Standard, Backlit & RGB Keyboard Replacement – Same Day"
      heroDescription="JSPCS Online provides expert laptop keyboard repair in Madurai. Water damage, worn membrane, broken keys, backlit and RGB keyboard replacement for Dell, HP, Lenovo, Asus, Acer, MSI. Same-day service. Free diagnosis, 90-day warranty."
      breadcrumbLabel="Laptop Keyboard Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Laptop Keyboard Not Working? Same-Day Fix in Madurai"
      ctaDescription="All keyboard types. Water damage specialists. Free diagnosis. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/laptop-screen-replacement-madurai', label:'Screen Replacement'},
        {href:'/laptop-hinge-repair-madurai', label:'Laptop Hinge Repair'},
        {href:'/dell-laptop-repair-madurai', label:'Dell Laptop Repair'},
        {href:'/hp-laptop-repair-madurai', label:'HP Laptop Repair'},
        {href:'/lenovo-laptop-repair-madurai', label:'Lenovo Laptop Repair'},
      ]}
    />
  )
}
