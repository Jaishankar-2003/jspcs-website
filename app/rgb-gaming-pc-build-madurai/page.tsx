import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'RGB Gaming PC Build in Madurai | Custom RGB Builds – JSPCS Online',
  description: 'Custom RGB gaming PC builds in Madurai. Full ARGB ecosystem — fans, RAM, GPU, case. Stunning aesthetics with top gaming performance. Call 9842139997.',
  keywords: ['rgb gaming pc build madurai','rgb pc build madurai','custom rgb pc madurai','argb pc madurai','rgb gaming setup madurai','gaming pc rgb madurai','led pc build madurai','rgb gaming rig madurai'],
  slug: 'rgb-gaming-pc-build-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'rgb-gaming-pc-build-madurai', name:'JSPCS Online – RGB Gaming PC Build in Madurai', description:'Custom RGB and ARGB gaming PC builds in Madurai with unified lighting ecosystem, tempered glass cases, and high-performance gaming hardware.', city:'Madurai', state:'Tamil Nadu', priceRange:'₹₹₹', offers:[{name:'Full RGB Gaming PC Build'},{name:'ARGB Fan Setup'},{name:'RGB RAM Installation'},{name:'Tempered Glass Case Build'},{name:'LED Strip & Controller Setup'},{name:'iCUE / iRGB Unity Setup'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'PC Builds',url:'https://jspcs.online/custom-gaming-pc-build-in-madurai'},{name:'RGB Gaming PC Build Madurai',url:'https://jspcs.online/rgb-gaming-pc-build-madurai'}]),
  faqSchema([
    {question:'How much does an RGB gaming PC cost in Madurai?',answer:'RGB gaming PC builds in Madurai: budget RGB build ₹40,000–₹60,000, mid-range RGB ₹70,000–₹1,20,000, premium RGB ₹1,20,000–₹2,00,000+. RGB components (ARGB fans, RGB RAM, AIO with LCD) add ₹5,000–₹20,000 over non-RGB equivalents.'},
    {question:'What RGB ecosystem do you use for PC builds in Madurai?',answer:'We build around major RGB ecosystems: Corsair iCUE (compatible RAM, fans, AIO, keyboard, mouse), ASUS AURA SYNC (for ASUS motherboard + peripherals), MSI Mystic Light, and ARGB controller setups for mixed components. We configure all lighting in software for a unified, synchronized look.'},
    {question:'Do you do RGB cable management for gaming PCs in Madurai?',answer:'Yes. Proper cable management is essential for the clean RGB aesthetic. We use custom sleeved cables, cable combs, and tie-down points to route all cables behind the motherboard tray, ensuring an unobstructed view of the RGB components through the tempered glass side panel.'},
    {question:'Can you add RGB to an existing PC in Madurai?',answer:'Yes. We add ARGB case fans, RGB RAM, AIO with RGB block/display, LED strips, and RGB GPU shrouds to existing systems. We reconfigure cable management for the updated aesthetic.'},
  ]),
]

const sections = [
  { id:'overview', heading:'RGB Gaming PC Build in Madurai', content:`<p>JSPCS Online builds stunning custom RGB gaming PCs in Madurai — machines that perform at the highest level AND look incredible. An RGB gaming PC is a showcase piece: tempered glass panels displaying synchronized ARGB fans, illuminated RAM, GPU RGB, AIO cooler display, and case lighting all coordinated in a unified lighting ecosystem.</p>
<p>We don't just slap RGB components together — we design around specific case airflow, RGB compatibility, and cable management to create a build that looks as impressive as it performs. Every RGB build is photographed and shared with the customer via WhatsApp after completion.</p>` },
  { id:'components', heading:'RGB Components We Use for Madurai Builds', content:`<ul>
<li><strong>ARGB Case Fans</strong> — Lian Li Uni Fan SL / AL, Corsair LL120/LL140, Phanteks Halos: synchronized lighting with maximum airflow</li>
<li><strong>RGB RAM</strong> — Corsair Vengeance RGB, G.Skill Trident Z5 RGB, Kingston Fury Beast RGB in DDR4/DDR5</li>
<li><strong>AIO Cooler with RGB</strong> — NZXT Kraken Z73, Corsair iCUE H150i, Deepcool LT720: LCD/ARGB pump heads</li>
<li><strong>Tempered Glass Cases</strong> — Lian Li O11 Dynamic Evo, Phanteks Eclipse P500A, NZXT H7 Flow: full display builds</li>
<li><strong>RGB GPU</strong> — ASUS TUF/ROG STRIX RTX 4070/4080 with Aura Sync RGB shroud</li>
<li><strong>ARGB Controller</strong> — 5V ARGB hub for mixing components from different brands</li>
<li><strong>LED Strips</strong> — Addressable LED strips for case interior, desk, and monitor back lighting</li>
<li><strong>Custom Cables</strong> — Sleeved PSU cables in matching color scheme</li>
</ul>` },
  { id:'ecosystems', heading:'RGB Ecosystem Configuration in Madurai', content:`<p>The most important aspect of an RGB build is choosing a compatible ecosystem so all components light up together in sync:</p>
<ul>
<li><strong>Corsair iCUE ecosystem</strong> — All Corsair fans, RAM, AIO, keyboard, mouse controlled from one app. Recommended for the most seamless experience.</li>
<li><strong>ASUS AURA SYNC</strong> — ASUS ROG/TUF motherboard + ASUS GPU + compatible RAM and fans. Tight integration in Aura Sync app.</li>
<li><strong>5V ARGB Standard</strong> — Open standard that allows mixing brands via ARGB headers on motherboard. Most flexible.</li>
<li><strong>Custom controller builds</strong> — We design custom ARGB controller setups for maximum component flexibility with centralized control.</li>
</ul>` },
  { id:'sample', heading:'Sample RGB Build Configurations in Madurai', content:`<p><strong>Mid-Range RGB Build (₹85,000 approx):</strong></p>
<ul>
<li>Case: Phanteks Eclipse P500A DRGB with 3x 140mm ARGB fans</li>
<li>CPU: AMD Ryzen 7 7700X</li>
<li>Cooler: NZXT Kraken 240 (LCD pump head)</li>
<li>GPU: ASUS TUF RTX 4070 OC</li>
<li>RAM: 32GB Corsair Vengeance RGB DDR5</li>
<li>3x additional Corsair LL120 ARGB fans</li>
<li>Custom sleeved cable kit</li>
</ul>
<p><strong>Premium RGB Build (₹1,50,000 approx):</strong></p>
<ul>
<li>Case: Lian Li O11 Dynamic EVO XL</li>
<li>CPU: Intel Core i9-14900KF</li>
<li>Cooler: Corsair iCUE H150i Elite Capellix XT 360mm</li>
<li>GPU: ASUS ROG STRIX RTX 4080 Super OC</li>
<li>RAM: 64GB G.Skill Trident Z5 RGB DDR5</li>
<li>9x Lian Li Uni Fan AL120 ARGB (unified fan controller)</li>
</ul>` },
  { id:'why-jspcs', heading:'Why Build Your RGB PC with JSPCS Online in Madurai', content:`<ul>
<li>✅ <strong>Aesthetic Expertise</strong> — We design for visual impact, not just specs</li>
<li>✅ <strong>RGB Sync Setup</strong> — All components synchronized in software before handover</li>
<li>✅ <strong>Professional Cable Management</strong> — Clean build with unobstructed RGB view</li>
<li>✅ <strong>Photography</strong> — Build photographed and shared with you on completion</li>
<li>✅ <strong>Performance First</strong> — RGB never compromises airflow or performance</li>
<li>✅ <strong>1-Year Warranty</strong> — Full build warranty</li>
</ul>` },
]

const serviceHighlights = [
  { title:'ARGB Fan Setup', description:'Lian Li, Corsair, Phanteks', icon:'🌈' },
  { title:'RGB RAM', description:'Corsair, G.Skill RGB', icon:'💾' },
  { title:'LCD AIO Cooler', description:'NZXT Kraken, iCUE H150i', icon:'❄️' },
  { title:'TG Case Build', description:'O11, P500A, H7 cases', icon:'🪟' },
  { title:'RGB GPU', description:'ASUS ROG, TUF STRIX', icon:'🎮' },
  { title:'Custom Cables', description:'Sleeved matching cables', icon:'⚡' },
  { title:'RGB Sync Setup', description:'Unified lighting software', icon:'💡' },
  { title:'Build Photography', description:'Photos on completion', icon:'📸' },
]

const faqs = [
  { question:'How much does an RGB gaming PC cost in Madurai?', answer:'Budget RGB ₹40,000–₹60,000. Mid-range ₹70,000–₹1,20,000. Premium ₹1,20,000–₹2,00,000+. RGB components add ₹5,000–₹20,000 over non-RGB.' },
  { question:'What RGB ecosystem do you use in Madurai?', answer:'Corsair iCUE, ASUS AURA Sync, 5V ARGB standard, or custom controller setups — all synchronized in software.' },
  { question:'Do you do RGB cable management?', answer:'Yes — sleeved cables, cable combs, behind-motherboard routing for unobstructed TG panel view.' },
  { question:'Can you add RGB to an existing PC in Madurai?', answer:'Yes — ARGB fans, RGB RAM, AIO, LED strips, GPU shrouds added with cable management refresh.' },
]

export default function RGBGamingPCBuildMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="rgb-gaming-pc-build-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="RGB Gaming PC Build in Madurai"
      heroSubtitle="Custom ARGB Builds with Tempered Glass Cases & Unified Lighting"
      heroDescription="JSPCS Online builds stunning custom RGB gaming PCs in Madurai. Full ARGB ecosystem — synchronized fans, RGB RAM, LCD AIO coolers, and tempered glass cases. Corsair iCUE, ASUS AURA, Lian Li Uni Fan. Performance meets aesthetics."
      breadcrumbLabel="RGB Gaming PC Build Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Build Your Dream RGB Gaming PC in Madurai"
      ctaDescription="Synchronized lighting. Professional cable management. Build photographed on completion."
      relatedPages={[
        {href:'/custom-gaming-pc-build-in-madurai', label:'Custom Gaming PC Build'},
        {href:'/budget-gaming-pc-build-madurai', label:'Budget Gaming PC Build'},
        {href:'/workstation-pc-build-madurai', label:'Workstation PC Build'},
        {href:'/gpu-repair-service-madurai', label:'GPU Repair Service'},
        {href:'/thermal-paste-service-madurai', label:'Thermal Paste Service'},
        {href:'/ram-upgrade-service-madurai', label:'RAM Upgrade Service'},
      ]}
    />
  )
}
