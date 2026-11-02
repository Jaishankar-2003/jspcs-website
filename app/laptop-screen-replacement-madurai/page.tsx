import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Laptop Screen Replacement in Madurai | LCD, IPS, OLED Display – JSPCS Online',
  description: 'Professional laptop screen replacement in Madurai. Cracked, dead, flickering screens fixed. FHD, IPS, OLED, touch screens for all brands. Call 9842139997.',
  keywords: ['laptop screen replacement madurai','laptop display replacement madurai','laptop screen repair madurai','cracked laptop screen madurai','broken laptop screen madurai','laptop lcd replacement madurai','laptop screen price madurai','touch screen replacement madurai','oled screen replacement madurai'],
  slug: 'laptop-screen-replacement-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'laptop-screen-replacement-madurai', name:'JSPCS Online – Laptop Screen Replacement in Madurai', description:'Professional laptop screen replacement in Madurai. Cracked, dead, flickering displays fixed for all brands. FHD, IPS, OLED, touch panels.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Laptop LCD Screen Replacement'},{name:'Laptop IPS Screen Replacement'},{name:'OLED Screen Replacement'},{name:'Touch Screen Replacement'},{name:'Gaming Laptop High-Refresh Screen Replacement'},{name:'Laptop Display Cable Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Laptop Screen Replacement Madurai',url:'https://jspcs.online/laptop-screen-replacement-madurai'}]),
  faqSchema([
    {question:'How much does laptop screen replacement cost in Madurai?',answer:'Laptop screen replacement in Madurai: standard HD/FHD TN panel ₹2,000–₹3,500, FHD IPS panel ₹2,500–₹4,500, gaming 144Hz/165Hz panel ₹4,000–₹7,000, QHD panel ₹5,000–₹9,000, OLED panel ₹7,000–₹15,000, touch screen ₹4,000–₹8,000. Price depends on brand, model, and resolution. We provide exact quotes after identifying your specific panel.'},
    {question:'How long does laptop screen replacement take in Madurai?',answer:'If we have your panel in stock: 30 minutes to 2 hours. If we need to source it: typically 24–48 hours. Gaming panels (144Hz+, QHD, OLED) may take 2–4 days if not in stock. We confirm timeline before collecting your laptop.'},
    {question:'Can you replace just the screen or do you need the whole lid assembly?',answer:'For most laptops we replace just the LCD/panel itself — much cheaper than the full lid assembly. However, some ultra-thin models (XPS 13, MacBook Pro, Surface) require full assembly replacement due to integrated design. We assess and advise for free.'},
    {question:'How do I know if my laptop screen is damaged vs the display cable?',answer:'A damaged display cable often shows vertical lines, flickering at certain angles, or intermittent display loss (especially when the lid is moved). A damaged panel shows cracks, black spots, or permanently dead areas. We test with an external monitor and check the cable connection before confirming diagnosis.'},
    {question:'Do you replace touch screens for Dell, HP, and Lenovo in Madurai?',answer:'Yes. Touch screen replacement requires replacing the full panel+digitizer assembly. We stock touch screen assemblies for popular Dell Inspiron, HP Pavilion, and Lenovo IdeaPad touch models.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Laptop Screen Replacement in Madurai', content:`<p>A damaged, cracked, or malfunctioning laptop screen can make your computer unusable — and replacement screens can be expensive if you don't know where to look. JSPCS Online provides professional laptop screen replacement services in Madurai at transparent, competitive prices for all brands and display types.</p>
<p>We stock a wide range of laptop panels in Madurai — from standard HD and FHD TN panels for budget laptops to high-refresh IPS gaming panels and OLED displays for premium models. For rarer panels, we source from trusted suppliers with a 24–48 hour lead time.</p>` },
  { id:'types', heading:'Screen Types We Replace in Madurai', content:`<ul>
<li><strong>Standard TN Panel</strong> — Budget laptops, lower color accuracy. HD (1366×768) and FHD (1920×1080). ₹1,800–₹3,000.</li>
<li><strong>IPS Panel</strong> — Wide color gamut, better viewing angles. The most common upgrade and replacement. FHD IPS ₹2,500–₹4,500.</li>
<li><strong>High-Refresh IPS (144Hz, 165Hz, 240Hz)</strong> — Gaming laptops. Precise matching to original panel specs required. ₹4,000–₹7,500.</li>
<li><strong>QHD (2560×1440) Panel</strong> — Premium gaming and creator laptops. Legion 5 Pro, ROG Strix 2023. ₹5,000–₹9,000.</li>
<li><strong>OLED Panel</strong> — Premium thin laptops. Asus Zenbook OLED, Lenovo Slim 5 OLED, Dell XPS 15 OLED. ₹8,000–₹16,000.</li>
<li><strong>Touch Screen</strong> — Integrated digitizer panels. Dell Inspiron 2-in-1, HP Envy x360, Lenovo Flex. ₹4,000–₹9,000.</li>
<li><strong>Display Cable</strong> — eDP cable replacement if screen failure is cable-related. ₹600–₹1,500.</li>
</ul>` },
  { id:'brands', heading:'Laptop Screen Replacements by Brand in Madurai', content:`<ul>
<li><strong>Dell</strong> — Inspiron 14/15, XPS 15 OLED, Vostro, Latitude, G15/G16 gaming panels</li>
<li><strong>HP</strong> — Pavilion 14/15, Envy, Omen 15/16 144Hz/165Hz, EliteBook</li>
<li><strong>Lenovo</strong> — IdeaPad, ThinkPad T/X series, Legion 5 Pro QHD, Yoga OLED</li>
<li><strong>Asus</strong> — VivoBook, ZenBook OLED, ROG Strix 144/240Hz, TUF Gaming</li>
<li><strong>Acer</strong> — Aspire 3/5, Nitro 5 144Hz, Predator Helios 165Hz/240Hz</li>
<li><strong>MSI</strong> — Thin GF63, Raider GE76 240Hz, Creator Z16 QHD</li>
</ul>` },
  { id:'process', heading:'Screen Replacement Process at JSPCS Online Madurai', content:`<ol style="list-style:decimal;padding-left:1.5rem">
<li><strong>Diagnosis</strong> — External monitor test, cable check, panel visual inspection</li>
<li><strong>Panel identification</strong> — Exact panel part number from model number / existing label</li>
<li><strong>Quote</strong> — Transparent price for panel + labor before any work</li>
<li><strong>Sourcing</strong> — Panel sourced from stock or ordered (24–48 hrs for most)</li>
<li><strong>Replacement</strong> — Old panel carefully removed, new panel installed and tested</li>
<li><strong>Color calibration</strong> — For IPS and OLED panels, color profile verified</li>
<li><strong>Handover</strong> — Full power-on test, dead pixel check, brightness uniformity check</li>
</ol>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Screen Replacement in Madurai', content:`<ul>
<li>✅ <strong>All Panel Types</strong> — TN, IPS, 144Hz, 240Hz, QHD, OLED, touch screens</li>
<li>✅ <strong>Exact Spec Matching</strong> — We match refresh rate, resolution, and connector type precisely</li>
<li>✅ <strong>Free Diagnosis</strong> — External monitor test before confirming screen fault</li>
<li>✅ <strong>Transparent Pricing</strong> — Exact quote before work begins; no surprises</li>
<li>✅ <strong>Dead Pixel Warranty</strong> — 90-day warranty on all replacement panels</li>
<li>✅ <strong>Data Safe</strong> — Screen replacement doesn't touch your storage or data</li>
</ul>` },
]

const serviceHighlights = [
  { title:'IPS Screen', description:'Wide-angle, vivid colors', icon:'🖥️' },
  { title:'Gaming 144Hz+', description:'High-refresh replacement', icon:'🎮' },
  { title:'OLED Screen', description:'Premium display replacement', icon:'✨' },
  { title:'Touch Screen', description:'Digitizer assembly', icon:'👆' },
  { title:'QHD 1440p', description:'High-res panel service', icon:'🔍' },
  { title:'Display Cable', description:'eDP cable repair', icon:'🔌' },
  { title:'Same-Day Repair', description:'If panel in stock', icon:'⏱️' },
  { title:'All Brands', description:'Dell, HP, Lenovo, Asus+', icon:'💻' },
]

const faqs = [
  { question:'How much does laptop screen replacement cost in Madurai?', answer:'FHD IPS ₹2,500–₹4,500. 144Hz gaming panel ₹4,000–₹7,000. QHD ₹5,000–₹9,000. OLED ₹8,000–₹16,000. Touch ₹4,000–₹9,000. Exact quote after model identification.' },
  { question:'How long does screen replacement take in Madurai?', answer:'If in stock: 30 min to 2 hours. Sourced panels: 24–48 hours. Gaming/OLED panels: 2–4 days if not stocked.' },
  { question:'Can you replace just the screen or the whole lid assembly?', answer:'Usually just the panel — much cheaper. Some ultra-thins (XPS 13, MacBook) need full assembly. We assess for free.' },
  { question:'How do I know if it\'s the screen or the display cable?', answer:'Vertical lines and flickering at certain angles suggest cable. Cracks and black spots are panel damage. We test with external monitor first.' },
  { question:'Do you replace touch screens in Madurai?', answer:'Yes — full panel+digitizer assembly. Dell, HP, Lenovo touch laptops stocked.' },
]

export default function LaptopScreenReplacementMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="laptop-screen-replacement-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Laptop Screen Replacement in Madurai"
      heroSubtitle="Cracked, Dead & Flickering Displays Replaced – All Brands & Panel Types"
      heroDescription="JSPCS Online provides professional laptop screen replacement in Madurai for all brands. FHD IPS, 144Hz/240Hz gaming panels, QHD, OLED, and touch screens — all replaced with exact-spec panels. Free diagnosis. 90-day warranty."
      breadcrumbLabel="Laptop Screen Replacement Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Cracked Laptop Screen? Get It Fixed in Madurai"
      ctaDescription="All panel types. Exact spec matching. Free diagnosis. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/dell-laptop-repair-madurai', label:'Dell Laptop Repair'},
        {href:'/hp-laptop-repair-madurai', label:'HP Laptop Repair'},
        {href:'/lenovo-laptop-repair-madurai', label:'Lenovo Laptop Repair'},
        {href:'/laptop-keyboard-repair-madurai', label:'Keyboard Repair'},
        {href:'/laptop-hinge-repair-madurai', label:'Laptop Hinge Repair'},
      ]}
    />
  )
}
