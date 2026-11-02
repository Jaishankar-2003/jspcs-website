import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Thermal Paste Service in Madurai | CPU & GPU Repasting – JSPCS Online',
  description: 'Professional thermal paste replacement service in Madurai for laptops and gaming PCs. Premium Arctic, Thermal Grizzly compounds. Reduce temps 20–40°C. Call 9842139997.',
  keywords: ['thermal paste service madurai','thermal paste replacement madurai','cpu thermal paste madurai','gpu thermal paste madurai','thermal repasting madurai','laptop thermal paste replacement madurai','gaming laptop repaste madurai','thermal paste near me madurai'],
  slug: 'thermal-paste-service-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'thermal-paste-service-madurai', name:'JSPCS Online – Thermal Paste Service in Madurai', description:'Professional thermal paste replacement service in Madurai for laptops, gaming laptops, and desktop PCs. Premium Arctic and Thermal Grizzly compounds.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Laptop CPU Thermal Paste Replacement'},{name:'Laptop GPU Thermal Paste Replacement'},{name:'Gaming Laptop Thermal Repasting'},{name:'Desktop CPU Thermal Paste Service'},{name:'GPU Thermal Pad Replacement'},{name:'LiquidMetal Thermal Compound Service'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Services',url:'https://jspcs.online'},{name:'Thermal Paste Service Madurai',url:'https://jspcs.online/thermal-paste-service-madurai'}]),
  faqSchema([
    {question:'How much does thermal paste replacement cost in Madurai?',answer:'Standard laptop thermal paste replacement (CPU only): ₹800–₹1,500. Gaming laptop full service (CPU + GPU paste + GPU thermal pads): ₹1,500–₹3,500. Desktop CPU repasting: ₹500–₹1,000. Free diagnosis and temperature assessment.'},
    {question:'Which thermal paste does JSPCS Online use in Madurai?',answer:'We use premium thermal compounds: Arctic MX-6 (non-conductive, long-lasting), Thermal Grizzly Kryonaut (best for high-performance laptops), and Thermal Grizzly Conductonaut LiquidMetal (for compatible laptops like MSI Titan GT, Alienware). We never use cheap generic compounds that dry out quickly.'},
    {question:'How often does thermal paste need replacement in Madurai?',answer:'In Madurai\'s climate, thermal paste degrades faster than in cooler regions due to more frequent heat cycling. Recommendation: standard laptops every 18–24 months, gaming laptops every 12–18 months, desktops every 2–3 years.'},
    {question:'What temperature improvement can I expect after repasting?',answer:'Results are model-dependent. Typical improvements: standard laptop — 15–25°C peak CPU temp reduction. Gaming laptop — 20–40°C CPU reduction, 15–30°C GPU reduction. Desktop — 5–15°C depending on cooler quality and original paste condition.'},
    {question:'Is LiquidMetal thermal paste safe for all laptops?',answer:'No. LiquidMetal (gallium-based) is electrically conductive and corrodes aluminium. It should only be used on copper heatsinks and requires a containment process. JSPCS Online applies LiquidMetal only on compatible, factory-LiquidMetal-designed laptops like MSI GT-series and specific Alienware models.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Thermal Paste Replacement Service in Madurai', content:`<p>Thermal paste is the critical interface between a laptop or PC's processor and its heatsink. Over time — typically 2–3 years for standard paste — it dries out, loses conductivity, and thermal resistance increases dramatically. In Madurai's heat, this degradation happens faster than in cooler climates.</p>
<p>JSPCS Online provides professional thermal paste replacement in Madurai using premium, long-lasting thermal compounds. Our service is thorough: old paste completely removed with isopropyl alcohol, surfaces cleaned to bare metal, new paste applied with the correct technique for each processor type.</p>` },
  { id:'compounds', heading:'Thermal Compounds We Use in Madurai', content:`<ul>
<li><strong>Arctic MX-6</strong> — Our go-to compound for most laptops. Non-conductive (safe around electronics), long-lasting (8+ year stability), excellent performance. 46 W/m·K conductivity.</li>
<li><strong>Thermal Grizzly Kryonaut</strong> — Premium compound for high-performance gaming laptops. 12.5 W/m·K. Best for overclocked systems with high heat output.</li>
<li><strong>Thermal Grizzly Conductonaut (LiquidMetal)</strong> — Gallium-based liquid metal compound with extreme conductivity (73 W/m·K). Applied only on compatible copper heatsink laptops (MSI Titan GT, Alienware). Up to 15–20°C better than conventional paste.</li>
<li><strong>Thermal Grizzly Carbonaut</strong> — Graphene thermal pad for tight-tolerance interfaces. Used as GPU thermal pad replacement.</li>
</ul>` },
  { id:'process', heading:'Our Thermal Paste Service Process in Madurai', content:`<ol style="list-style:decimal;padding-left:1.5rem">
<li><strong>Laptop disassembly</strong> — Access to CPU and GPU heatsink</li>
<li><strong>Old paste removal</strong> — Complete cleaning with 99% isopropyl alcohol; surfaces polished</li>
<li><strong>CPU paste application</strong> — Correct amount, correct pattern for processor die size</li>
<li><strong>GPU paste application</strong> — On gaming laptops, GPU die also repasted</li>
<li><strong>Thermal pad replacement</strong> — VRAM and VRM pads replaced on gaming laptops</li>
<li><strong>Reassembly</strong> — Heatsink screws torqued in correct star pattern</li>
<li><strong>Temperature verification</strong> — Stress test with HWMonitor; before/after temps compared</li>
<li><strong>Report</strong> — Temperature results shared with customer via WhatsApp</li>
</ol>` },
  { id:'gaming', heading:'Gaming Laptop Thermal Repasting in Madurai', content:`<p>Gaming laptops require the most comprehensive thermal service. A gaming laptop's thermal system includes:</p>
<ul>
<li><strong>CPU die</strong> — Primary thermal paste application</li>
<li><strong>GPU die</strong> — Separate GPU paste (often overlooked by other services)</li>
<li><strong>GPU VRAM chips</strong> — Thin thermal pads (0.5–1.5mm) that dry and crack</li>
<li><strong>VRM components</strong> — Voltage regulators generate significant heat; pads need replacement</li>
<li><strong>SSD thermal pad</strong> — Some gaming laptops have SSD thermal pads for throttle prevention</li>
</ul>
<p>Our gaming laptop thermal service in Madurai addresses all of these — not just the CPU paste that many other services limit themselves to.</p>` },
  { id:'why-jspcs', heading:'Why Professional Thermal Paste Service Matters in Madurai', content:`<ul>
<li>✅ <strong>Correct application technique</strong> — Too much or too little paste both cause poor thermal transfer; we apply the right amount correctly</li>
<li>✅ <strong>Premium compounds</strong> — Generic paste dries quickly; we use proven long-lasting compounds</li>
<li>✅ <strong>Complete service</strong> — Not just CPU — GPU die, VRAM pads, VRM pads on gaming laptops</li>
<li>✅ <strong>Temperature verified</strong> — Results confirmed before handover</li>
<li>✅ <strong>Same-day service</strong> — Most repastes done in 2–4 hours in Madurai</li>
<li>✅ <strong>90-Day warranty</strong> — On all thermal service work</li>
</ul>` },
]

const serviceHighlights = [
  { title:'Arctic MX-6', description:'Standard laptop compound', icon:'❄️' },
  { title:'Thermal Grizzly', description:'Gaming laptop premium paste', icon:'🔥' },
  { title:'LiquidMetal Service', description:'MSI Titan, Alienware', icon:'⚗️' },
  { title:'GPU Thermal Pads', description:'VRAM & VRM pad replacement', icon:'🎮' },
  { title:'Gaming Laptops', description:'Full thermal system service', icon:'💻' },
  { title:'Temp Verified', description:'Stress test confirmation', icon:'✅' },
  { title:'Same-Day', description:'2–4 hours in Madurai', icon:'⏱️' },
  { title:'All Brands', description:'Dell, HP, Asus, MSI, Acer+', icon:'🏆' },
]

const faqs = [
  { question:'How much does thermal paste replacement cost in Madurai?', answer:'Standard laptop (CPU only): ₹800–₹1,500. Gaming laptop full service: ₹1,500–₹3,500. Desktop CPU: ₹500–₹1,000. Free assessment.' },
  { question:'Which thermal paste does JSPCS Online use?', answer:'Arctic MX-6, Thermal Grizzly Kryonaut, and LiquidMetal Conductonaut for compatible laptops. Premium, long-lasting compounds — never cheap generic paste.' },
  { question:'How often does thermal paste need replacement in Madurai?', answer:'Standard laptops: every 18–24 months. Gaming laptops: every 12–18 months. Madurai\'s heat accelerates degradation.' },
  { question:'What temperature improvement can I expect?', answer:'Standard laptop: 15–25°C reduction. Gaming laptop: 20–40°C CPU, 15–30°C GPU reduction. Desktop: 5–15°C.' },
  { question:'How long does thermal paste service take in Madurai?', answer:'2–4 hours for most laptops. Same-day service.' },
]

export default function ThermalPasteServiceMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="thermal-paste-service-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Thermal Paste Service in Madurai"
      heroSubtitle="Premium CPU & GPU Repasting – Arctic MX-6, Thermal Grizzly, LiquidMetal"
      heroDescription="JSPCS Online provides professional thermal paste replacement in Madurai for all laptops and gaming PCs. Premium Arctic MX-6, Thermal Grizzly Kryonaut, and LiquidMetal compounds. GPU thermal pad replacement included. Reduces temps 20–40°C. Same-day service."
      breadcrumbLabel="Thermal Paste Service Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Laptop Overheating? Premium Repaste in Madurai – Same Day"
      ctaDescription="Premium compounds. GPU pads included. Temperature verified. 90-day warranty."
      relatedPages={[
        {href:'/laptop-heating-issue-repair-madurai', label:'Laptop Overheating Fix'},
        {href:'/gaming-laptop-repair-madurai', label:'Gaming Laptop Repair'},
        {href:'/gpu-repair-service-madurai', label:'GPU Repair Service'},
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/msi-gaming-laptop-repair-madurai', label:'MSI Laptop Repair'},
        {href:'/asus-laptop-repair-madurai', label:'Asus ROG Repair'},
      ]}
    />
  )
}
