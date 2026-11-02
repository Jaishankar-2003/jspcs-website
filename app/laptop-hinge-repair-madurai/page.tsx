import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Laptop Hinge Repair in Madurai | Broken Hinge Fix – JSPCS Online',
  description: 'Expert laptop hinge repair in Madurai. Broken, loose, stiff hinges fixed. Lid, chassis, back cover repair for all brands. Call 9842139997.',
  keywords: ['laptop hinge repair madurai','broken laptop hinge madurai','laptop hinge replacement madurai','loose laptop hinge madurai','laptop lid repair madurai','laptop back cover repair madurai','laptop screen hinge madurai','dell hinge repair madurai','hp hinge repair madurai'],
  slug: 'laptop-hinge-repair-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'laptop-hinge-repair-madurai', name:'JSPCS Online – Laptop Hinge Repair in Madurai', description:'Expert laptop hinge repair in Madurai. Broken, cracked, and loose hinges fixed for all brands. Lid back cover replacement and chassis repair.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Laptop Hinge Replacement'},{name:'Laptop Lid Back Cover Repair'},{name:'Broken Hinge Chassis Repair'},{name:'Loose Hinge Tightening'},{name:'2-in-1 Convertible Hinge Repair'},{name:'Gaming Laptop Hinge Repair'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Laptop Repair',url:'https://jspcs.online/laptop-service-center-in-madurai'},{name:'Laptop Hinge Repair Madurai',url:'https://jspcs.online/laptop-hinge-repair-madurai'}]),
  faqSchema([
    {question:'How much does laptop hinge repair cost in Madurai?',answer:'Laptop hinge repair in Madurai: hinge tightening/adjustment ₹500–₹1,000, hinge replacement (both sides) ₹1,200–₹3,500, back cover replacement ₹1,500–₹4,000, chassis repair for cracked base ₹1,500–₹3,500. Gaming laptops with more complex hinge systems can be ₹2,000–₹5,000. Free assessment.'},
    {question:'What causes laptop hinges to break in Madurai?',answer:'The most common causes are: (1) Opening the lid with one hand instead of two — puts asymmetric stress on hinges, (2) Impact — dropping the laptop while open, (3) Manufacturing design flaws — some Dell Inspiron and HP Pavilion models have notoriously weak plastic hinge mounts that crack after 2–3 years, (4) Overuse — laptops opened and closed hundreds of times daily.'},
    {question:'Is it worth repairing a broken laptop hinge?',answer:'Almost always yes — if the rest of the laptop is functional. A hinge repair costs ₹1,500–₹4,000 versus buying a new laptop for ₹35,000+. A broken hinge left unrepaired gets progressively worse, eventually damaging the display cable and screen.'},
    {question:'My laptop lid cracked around the hinge — can you repair the plastic?',answer:'Yes. Plastic lid cracks around the hinge mount are common (especially Dell Inspiron, HP 15). We repair the plastic mounting point with reinforcement and epoxy, or replace the back lid cover entirely if cracking is extensive.'},
    {question:'Do you repair hinges on Lenovo Yoga convertible laptops in Madurai?',answer:'Yes. 2-in-1 convertible laptop hinges are more complex (360-degree rotation) and more expensive to source, but JSPCS Online handles Yoga, IdeaPad Flex, HP Envy x360, and Asus VivoBook Flip hinge repairs in Madurai.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Laptop Hinge Repair Service in Madurai', content:`<p>A broken or loose laptop hinge is one of the most common — and most urgent — physical repair jobs in Madurai. What starts as a stiff or slightly wobbly screen often progresses to cracked lid plastic, exposed display cables, and eventual screen failure if left untreated.</p>
<p>JSPCS Online provides comprehensive laptop hinge repair in Madurai — from simple hinge tightening and adjustment to full hinge bracket replacement, back cover repair, and chassis reinforcement. We source OEM-quality hinge components for all major laptop brands.</p>` },
  { id:'problems', heading:'Laptop Hinge Problems We Fix in Madurai', content:`<ul>
<li><strong>Broken hinge</strong> — Internal hinge mechanism snapped, often from dropping or forcing the lid</li>
<li><strong>Cracked lid plastic</strong> — Plastic mounting points around the hinge crack (very common on Dell Inspiron, HP 15)</li>
<li><strong>Loose / wobbly screen</strong> — Hinge torque washers worn out; screen doesn't hold position</li>
<li><strong>Stiff hinge</strong> — Hinge corrosion or debris causing difficulty opening/closing</li>
<li><strong>Hinge pulling away from base</strong> — Chassis floor cracking around hinge mount screws</li>
<li><strong>Screen tilting to one side</strong> — One hinge broken while the other remains intact</li>
<li><strong>Display cable exposed / pinched</strong> — Hinge failure causing cable exposure; urgent before screen failure</li>
</ul>` },
  { id:'process', heading:'Our Hinge Repair Process in Madurai', content:`<ol style="list-style:decimal;padding-left:1.5rem">
<li><strong>Assessment</strong> — Identify hinge type, damage extent, and whether back cover replacement is needed</li>
<li><strong>Sourcing</strong> — OEM-compatible hinge bracket ordered if not in stock (24–48 hrs)</li>
<li><strong>Disassembly</strong> — Screen assembly separated from base; display cable carefully handled</li>
<li><strong>Hinge removal</strong> — Broken hinge bracket removed; mounting area cleaned</li>
<li><strong>Plastic repair</strong> — Cracked mounting points reinforced with epoxy and metal inserts</li>
<li><strong>New hinge installation</strong> — Correct torque applied for smooth operation</li>
<li><strong>Back cover</strong> — Replacement if cracking is extensive</li>
<li><strong>Cable inspection</strong> — Display cable checked for damage from hinge failure</li>
<li><strong>Function test</strong> — Screen opens and closes smoothly with correct resistance</li>
</ol>` },
  { id:'brands', heading:'Laptop Hinge Repairs by Brand in Madurai', content:`<ul>
<li><strong>Dell Inspiron</strong> — Classic hinge plastic cracking around mount; very common repair in Madurai</li>
<li><strong>HP Pavilion 15</strong> — Hinge mount pulling from the base chassis; reinforcement + hinge replacement</li>
<li><strong>Lenovo IdeaPad</strong> — Standard hinges; Yoga 360-degree hinge service</li>
<li><strong>Asus VivoBook</strong> — Hinge wear, lid back cover replacement</li>
<li><strong>Acer Aspire</strong> — Hinge barrel failure, plastic lid repair</li>
<li><strong>MSI Gaming</strong> — Gaming laptops with dual hinge systems; both hinges usually replaced together</li>
<li><strong>HP Spectre / Envy x360</strong> — Premium 360-degree hinge replacement</li>
</ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Hinge Repair in Madurai', content:`<ul>
<li>✅ <strong>OEM-Quality Hinges</strong> — Proper torque-rated hinges, not generic substitutes</li>
<li>✅ <strong>Plastic Repair</strong> — Structural reinforcement for cracked mounts</li>
<li>✅ <strong>Cable Safety</strong> — Display cable always inspected and protected during hinge work</li>
<li>✅ <strong>All Brands</strong> — Dell, HP, Lenovo, Asus, Acer, MSI all serviced in Madurai</li>
<li>✅ <strong>Free Assessment</strong> — We assess hinge damage and quote before any work</li>
<li>✅ <strong>90-Day Warranty</strong> — On all hinge repair work</li>
</ul>` },
]

const serviceHighlights = [
  { title:'Broken Hinge Fix', description:'Hinge bracket replacement', icon:'🔩' },
  { title:'Lid Plastic Repair', description:'Cracked mount reinforcement', icon:'🔧' },
  { title:'Loose Screen Fix', description:'Torque washer restoration', icon:'⚙️' },
  { title:'2-in-1 Hinges', description:'360° convertible hinge', icon:'🔄' },
  { title:'Back Cover Repair', description:'Lid cover replacement', icon:'💻' },
  { title:'Cable Protection', description:'Display cable check', icon:'🔌' },
  { title:'All Brands', description:'Dell, HP, Lenovo, Asus+', icon:'✅' },
  { title:'OEM Quality Parts', description:'Correct torque hinges', icon:'🏆' },
]

const faqs = [
  { question:'How much does laptop hinge repair cost in Madurai?', answer:'Tightening ₹500–₹1,000. Hinge replacement ₹1,200–₹3,500. Back cover ₹1,500–₹4,000. Gaming laptops ₹2,000–₹5,000. Free assessment.' },
  { question:'What causes laptop hinges to break?', answer:'Single-hand lid opening, dropping while open, weak plastic mounts (common on Dell/HP budget models), and overuse after 2–3 years.' },
  { question:'Is it worth repairing a broken hinge?', answer:'Almost always yes. Hinge repair ₹1,500–₹4,000 vs new laptop ₹35,000+. Unrepaired hinges damage display cables and screens.' },
  { question:'My lid cracked around the hinge — can you repair the plastic?', answer:'Yes. Plastic crack reinforcement with epoxy and metal inserts, or full back lid cover replacement if extensive.' },
  { question:'Do you repair Lenovo Yoga convertible hinges?', answer:'Yes — Yoga, IdeaPad Flex, HP Envy x360, Asus VivoBook Flip 360° hinge repair in Madurai.' },
]

export default function LaptopHingeRepairMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="laptop-hinge-repair-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Laptop Hinge Repair in Madurai"
      heroSubtitle="Broken, Loose & Cracked Laptop Hinges Fixed – All Brands"
      heroDescription="JSPCS Online provides expert laptop hinge repair in Madurai. Broken hinge brackets, cracked lid plastic, loose screens, and 2-in-1 convertible hinge replacement. OEM-quality parts. Free assessment, 90-day warranty."
      breadcrumbLabel="Laptop Hinge Repair Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Laptop Hinge Broken in Madurai? Get It Fixed Today"
      ctaDescription="OEM hinges. Plastic reinforcement. Free assessment. 90-day warranty."
      relatedPages={[
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/laptop-screen-replacement-madurai', label:'Screen Replacement'},
        {href:'/laptop-keyboard-repair-madurai', label:'Keyboard Repair'},
        {href:'/dell-laptop-repair-madurai', label:'Dell Laptop Repair'},
        {href:'/hp-laptop-repair-madurai', label:'HP Laptop Repair'},
        {href:'/lenovo-laptop-repair-madurai', label:'Lenovo Laptop Repair'},
      ]}
    />
  )
}
