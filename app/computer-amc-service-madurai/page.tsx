import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Computer AMC Service in Madurai | Annual Maintenance Contract – JSPCS Online',
  description: 'Reliable Computer AMC service in Madurai. Annual maintenance contracts for homes, offices, schools, clinics. Preventive maintenance, priority support. Call 9842139997.',
  keywords: ['computer amc service madurai','annual maintenance contract madurai','computer maintenance madurai','it amc madurai','office computer amc madurai','laptop amc madurai','desktop amc madurai','computer service contract madurai','it support amc madurai'],
  slug: 'computer-amc-service-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'computer-amc-service-madurai', name:'JSPCS Online – Computer AMC Service in Madurai', description:'Comprehensive computer Annual Maintenance Contract (AMC) service in Madurai for homes, offices, schools, and clinics. Preventive maintenance, priority repairs, remote support.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Office Computer AMC'},{name:'Laptop AMC Service'},{name:'Desktop AMC Service'},{name:'School Computer Lab AMC'},{name:'Clinic/Hospital IT AMC'},{name:'Remote IT Support'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Services',url:'https://jspcs.online'},{name:'Computer AMC Service Madurai',url:'https://jspcs.online/computer-amc-service-madurai'}]),
  faqSchema([
    {question:'How much does computer AMC service cost in Madurai?',answer:'Computer AMC pricing in Madurai depends on number of computers and coverage type: Single desktop/laptop AMC from ₹2,000/year. Small office (5–10 computers) AMC from ₹8,000–₹15,000/year. Larger setups quoted on-site after assessment. Inclusive of 4 preventive maintenance visits and priority repair response.'},
    {question:'What is included in your computer AMC in Madurai?',answer:'Our AMC includes: 4 scheduled preventive maintenance visits per year, priority repair response (4-hour SLA in Madurai), remote support via TeamViewer/AnyDesk for software issues, 20–30% discount on all spare parts, annual antivirus update, and hardware inventory reports. Labor for covered repairs included.'},
    {question:'Do you provide AMC for laptop computers in Madurai?',answer:'Yes. Individual laptop AMC and business laptop fleet AMC plans available in Madurai. Covers cleaning, thermal service, battery assessment, software maintenance, and priority repair.'},
    {question:'Which businesses in Madurai benefit most from computer AMC?',answer:'Schools (computer labs), clinics and hospitals (billing/patient systems), CA and accounting offices, retail stores (billing computers), manufacturing plants (ERP workstations), restaurants (POS systems), and government offices. Any business in Madurai that relies on computers for daily operations benefits from AMC.'},
    {question:'Do you provide remote support as part of AMC in Madurai?',answer:'Yes. Software issues, virus removal, network problems, and user support are handled remotely via TeamViewer or AnyDesk. Remote support resolves the majority of issues without needing a technician visit, reducing downtime for your Madurai business.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Computer AMC Service in Madurai', content:`<p>For businesses, schools, clinics, and government offices in Madurai that rely on computers for daily operations, an Annual Maintenance Contract (AMC) from JSPCS Online provides the reliability of a full-time IT team at a fraction of the cost.</p>
<p>Unplanned computer breakdowns are the most expensive type of IT failure — lost productivity, emergency repair charges, and potential data loss. Our AMC converts unpredictable IT costs into a fixed, predictable annual fee with guaranteed response times in Madurai.</p>` },
  { id:'whats-included', heading:'What\'s Included in Our Computer AMC in Madurai', subheading:'Comprehensive Coverage for Your IT Infrastructure', content:`<ul>
<li><strong>4 Preventive Maintenance Visits Per Year</strong> — Physical cleaning, thermal service, hardware check, software update at each visit</li>
<li><strong>Priority Breakdown Response</strong> — 4-hour SLA for AMC clients in Madurai; standard customers may wait 24–48 hours</li>
<li><strong>Remote Support</strong> — Software issues, virus removal, user problems resolved remotely via TeamViewer</li>
<li><strong>20–30% Parts Discount</strong> — All replacement components at reduced cost</li>
<li><strong>Annual Antivirus Update</strong> — Antivirus renewed and updated across all covered machines</li>
<li><strong>Hardware Inventory Report</strong> — Full hardware spec and condition report after each maintenance visit</li>
<li><strong>Software Management</strong> — Windows updates, driver updates, software license management</li>
<li><strong>Phone/WhatsApp Support</strong> — Unlimited tech support calls and WhatsApp guidance</li>
</ul>` },
  { id:'plans', heading:'AMC Plans for Madurai Businesses', content:`<ul>
<li><strong>Individual AMC (1–2 computers)</strong> — Ideal for freelancers, home offices, small clinics. From ₹2,000/year per device.</li>
<li><strong>Small Office AMC (5–15 computers)</strong> — CA offices, retail stores, small businesses. Includes remote support + 4 visits. From ₹8,000/year.</li>
<li><strong>School Computer Lab AMC</strong> — School labs of 20–60 computers. Scheduled holiday maintenance. Competitive per-unit pricing.</li>
<li><strong>Clinic / Hospital AMC</strong> — Healthcare IT with priority response. Billing systems, patient records PCs, lab computers.</li>
<li><strong>Enterprise AMC (50+ computers)</strong> — Manufacturing, BPO, government. Dedicated technician model available.</li>
</ul>` },
  { id:'sectors', heading:'Sectors We Serve with AMC in Madurai', content:`<ul>
<li><strong>Schools &amp; Colleges</strong> — Computer labs, administrative PCs, server room maintenance</li>
<li><strong>Clinics &amp; Hospitals</strong> — Billing computers, diagnostic workstations, reception systems</li>
<li><strong>CA &amp; Accounting Offices</strong> — Tally, GST filing, Office365 environments</li>
<li><strong>Retail &amp; Showrooms</strong> — POS billing, inventory management PCs, receipt printers</li>
<li><strong>Manufacturing Plants</strong> — ERP workstations, production floor terminals</li>
<li><strong>Government Offices</strong> — TNEB, municipal offices, district court, collector offices in Madurai</li>
<li><strong>Restaurants &amp; Hotels</strong> — POS systems, kitchen display, booking computers</li>
</ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Computer AMC in Madurai', content:`<ul>
<li>✅ <strong>Madurai-Based Team</strong> — On-ground technicians across Madurai for fast response</li>
<li>✅ <strong>4-Hour SLA</strong> — Guaranteed response time for breakdowns during business hours</li>
<li>✅ <strong>Remote Support Included</strong> — Majority of software issues resolved without a visit</li>
<li>✅ <strong>Chip-Level Expertise</strong> — We can repair boards, not just replace them</li>
<li>✅ <strong>Trusted by Madurai Businesses</strong> — Schools, clinics, CA firms, retailers</li>
<li>✅ <strong>Transparent Contract</strong> — Clear terms, no hidden charges, annual renewal</li>
</ul>` },
]

const serviceHighlights = [
  { title:'4 Annual Visits', description:'Scheduled preventive service', icon:'📅' },
  { title:'4-Hour Response', description:'Priority breakdown SLA', icon:'⚡' },
  { title:'Remote Support', description:'TeamViewer/AnyDesk help', icon:'🖥️' },
  { title:'Parts Discount', description:'20–30% off spares', icon:'💰' },
  { title:'School Labs', description:'Computer lab AMC', icon:'🏫' },
  { title:'Clinic AMC', description:'Healthcare IT support', icon:'🏥' },
  { title:'Office AMC', description:'CA, retail, corporate', icon:'🏢' },
  { title:'Hardware Reports', description:'Asset inventory tracking', icon:'📋' },
]

const faqs = [
  { question:'How much does computer AMC cost in Madurai?', answer:'Single device from ₹2,000/year. Small office (5–10 PCs) from ₹8,000–₹15,000/year. On-site assessment for larger setups.' },
  { question:'What is included in your AMC?', answer:'4 preventive visits, 4-hour priority response, remote support, 20–30% parts discount, antivirus update, hardware inventory reports, unlimited phone/WhatsApp support.' },
  { question:'Do you provide laptop AMC in Madurai?', answer:'Yes — individual and fleet laptop AMC. Covers cleaning, thermal service, battery assessment, software maintenance, priority repair.' },
  { question:'Which businesses benefit most from AMC?', answer:'Schools, clinics, CA offices, retail stores, restaurants, manufacturing plants, government offices — any Madurai business that relies on computers daily.' },
  { question:'Do you provide remote support as part of AMC?', answer:'Yes — software issues, virus removal, network problems resolved remotely via TeamViewer. Resolves majority of issues without a visit.' },
]

export default function ComputerAMCServiceMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="computer-amc-service-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Computer AMC Service in Madurai"
      heroSubtitle="Annual Maintenance Contract for Homes, Offices, Schools & Clinics"
      heroDescription="JSPCS Online offers comprehensive Computer AMC services in Madurai. Preventive maintenance visits, 4-hour priority breakdown response, remote support, parts discount, and hardware inventory reports. Fixed annual cost for reliable IT operations."
      breadcrumbLabel="Computer AMC Service Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Get a Computer AMC Quote for Your Madurai Business"
      ctaDescription="4-hour SLA. Remote support. Parts discount. Transparent annual contract."
      relatedPages={[
        {href:'/business-it-support-madurai', label:'Business IT Support'},
        {href:'/desktop-repair-service-in-madurai', label:'Desktop Repair Madurai'},
        {href:'/computer-service-center-in-madurai', label:'Computer Service Madurai'},
        {href:'/windows-installation-service-madurai', label:'Windows Installation'},
        {href:'/data-recovery-service-madurai', label:'Data Recovery Service'},
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
      ]}
    />
  )
}
