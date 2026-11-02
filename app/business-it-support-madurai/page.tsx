import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Business IT Support in Madurai | Office Computer Support – JSPCS Online',
  description: 'Reliable business IT support in Madurai. Office computer setup, network, server, Wi-Fi, cloud setup, remote support for small and medium businesses. Call 9842139997.',
  keywords: ['business it support madurai','office it support madurai','small business it madurai','network setup madurai','office computer support madurai','it consultant madurai','server setup madurai','wifi setup office madurai','it services madurai'],
  slug: 'business-it-support-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'business-it-support-madurai', name:'JSPCS Online – Business IT Support in Madurai', description:'Comprehensive business IT support services in Madurai. Office computer setup, networking, server, cloud, cybersecurity, remote support for SMBs.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Office Computer Setup'},{name:'Business Network Setup'},{name:'Wi-Fi Network Installation'},{name:'Server Setup & Maintenance'},{name:'Cloud Migration Support'},{name:'Cybersecurity Setup'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Services',url:'https://jspcs.online'},{name:'Business IT Support Madurai',url:'https://jspcs.online/business-it-support-madurai'}]),
  faqSchema([
    {question:'What business IT support services does JSPCS Online offer in Madurai?',answer:'We provide: office computer setup and configuration, business Wi-Fi and LAN network setup, NAS/server installation, cloud setup (Microsoft 365, Google Workspace), cybersecurity setup (antivirus, firewall, backup), printer/scanner network setup, POS system support, email configuration, and ongoing remote and on-site IT support.'},
    {question:'Do you support small businesses and startups in Madurai?',answer:'Yes — small businesses and startups are our primary business IT customers in Madurai. We understand that SMBs need reliable IT without the overhead of a full-time IT team. Our flexible support plans scale from a single office computer to multi-branch operations.'},
    {question:'Can you set up office Wi-Fi in Madurai?',answer:'Yes. We design and install business-grade Wi-Fi networks in Madurai using Ubiquiti UniFi, TP-Link Omada, or Cisco Meraki access points depending on your coverage requirements and budget. We handle cable runs, AP placement, VLAN configuration, and guest network setup.'},
    {question:'Do you support Microsoft 365 for Madurai businesses?',answer:'Yes. We handle Microsoft 365 Business setup — email configuration, SharePoint, Teams, OneDrive, and device enrollment in Intune for mobile device management. We also manage license procurement and renewal.'},
    {question:'How quickly can you respond to IT emergencies for businesses in Madurai?',answer:'For businesses without an AMC, emergency response during business hours is typically 2–4 hours in Madurai. AMC clients with our computer maintenance contract receive priority 4-hour guaranteed response with remote support initiated within 30 minutes.'},
  ]),
]

const sections = [
  { id:'overview', heading:'Business IT Support in Madurai', content:`<p>JSPCS Online provides comprehensive business IT support services for small and medium businesses across Madurai. From initial office computer setup to ongoing maintenance, network management, and emergency support — we function as your external IT team at a fraction of the cost of an in-house IT department.</p>
<p>Madurai's growing business ecosystem — retail, manufacturing, healthcare, education, hospitality, and professional services — all depend on reliable IT infrastructure. Our business IT team understands the specific needs and cost constraints of Madurai's SMB community.</p>` },
  { id:'services', heading:'Business IT Services We Provide in Madurai', content:`<ul>
<li><strong>Office Computer Setup</strong> — New desktop/laptop procurement, Windows setup, domain join, Office 365 configuration</li>
<li><strong>Business Network Setup</strong> — Structured cabling, switch installation, VLAN, firewall, router configuration</li>
<li><strong>Wi-Fi Network</strong> — Business-grade WAPs, seamless roaming, guest network isolation, bandwidth management</li>
<li><strong>NAS &amp; Server</strong> — File server, NAS device (Synology, QNAP) setup, RAID configuration, backup scheduling</li>
<li><strong>Cloud Services</strong> — Microsoft 365, Google Workspace setup and migration</li>
<li><strong>Cybersecurity</strong> — Endpoint antivirus (ESET, Bitdefender), firewall (Sophos/pfSense), email filtering</li>
<li><strong>POS Support</strong> — Billing computer, POS printer, barcode scanner setup and maintenance</li>
<li><strong>CCTV Network</strong> — IP camera setup, NVR configuration, remote viewing setup</li>
<li><strong>Remote Support</strong> — Ongoing software troubleshooting via TeamViewer/AnyDesk</li>
<li><strong>Printer &amp; Scanner</strong> — Network printer setup, multifunction scanner configuration</li>
</ul>` },
  { id:'sectors', heading:'Business Sectors We Support in Madurai', content:`<ul>
<li><strong>Retail &amp; Showrooms</strong> — POS systems, inventory management, billing software, barcode printers</li>
<li><strong>Healthcare</strong> — Clinic and hospital billing, patient management software, PACS workstations</li>
<li><strong>CA &amp; Finance</strong> — Tally Prime setup, GST filing systems, secure data backup</li>
<li><strong>Manufacturing</strong> — ERP workstations, production floor terminals, factory Wi-Fi</li>
<li><strong>Education</strong> — School computer labs, teacher workstations, admin systems, projector setup</li>
<li><strong>Hospitality</strong> — Hotel PMS, restaurant POS, room control systems</li>
<li><strong>Legal &amp; Professional Services</strong> — Document management, secure email, cloud backup</li>
<li><strong>Real Estate</strong> — Office setup, CRM, email, client presentation workstations</li>
</ul>` },
  { id:'remote', heading:'Remote IT Support for Madurai Businesses', content:`<p>Not every IT issue requires an on-site visit. JSPCS Online provides efficient remote IT support for Madurai businesses — resolving most software problems, user issues, and configuration needs without a technician visit:</p>
<ul>
<li><strong>Immediate response</strong> — Remote session initiated within 30 minutes for AMC clients</li>
<li><strong>Software troubleshooting</strong> — Windows errors, Office 365 issues, Tally problems, email configuration</li>
<li><strong>Security response</strong> — Virus removal, malware clean-up remotely</li>
<li><strong>Network monitoring</strong> — Remote monitoring of office network health</li>
<li><strong>User support</strong> — Employee IT issues resolved without disrupting workflow</li>
</ul>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Business IT in Madurai', content:`<ul>
<li>✅ <strong>Madurai-Based Team</strong> — Local technicians, on-ground presence, fast response</li>
<li>✅ <strong>SMB Specialists</strong> — We understand small business IT needs and budgets</li>
<li>✅ <strong>End-to-End</strong> — Hardware, software, network, cloud, security — all in one</li>
<li>✅ <strong>No Long-Term Lock-in</strong> — Flexible support plans without lengthy contracts</li>
<li>✅ <strong>Transparent Pricing</strong> — Fixed quotes, no surprise billing</li>
<li>✅ <strong>Remote + On-Site</strong> — Best of both worlds for maximum efficiency</li>
</ul>` },
]

const serviceHighlights = [
  { title:'Office Computer Setup', description:'New system deployment', icon:'🖥️' },
  { title:'Business Wi-Fi', description:'Ubiquiti/TP-Link Omada', icon:'📶' },
  { title:'Microsoft 365', description:'Email, Teams, SharePoint', icon:'☁️' },
  { title:'Server / NAS', description:'File server & backup', icon:'🗄️' },
  { title:'Cybersecurity', description:'Antivirus, firewall, backup', icon:'🛡️' },
  { title:'Remote Support', description:'30-min response for AMC', icon:'💻' },
  { title:'POS Support', description:'Billing & retail systems', icon:'🏪' },
  { title:'Network Setup', description:'LAN, VLAN, cabling', icon:'🌐' },
]

const faqs = [
  { question:'What business IT services do you offer in Madurai?', answer:'Office setup, network, Wi-Fi, NAS/server, Microsoft 365, cybersecurity, POS, CCTV, printer, remote support.' },
  { question:'Do you support small businesses in Madurai?', answer:'Yes — SMBs are our primary IT clients. Flexible plans from single-computer support to multi-branch operations.' },
  { question:'Can you set up office Wi-Fi in Madurai?', answer:'Yes — Ubiquiti UniFi, TP-Link Omada, Cisco Meraki. Cable runs, AP placement, VLANs, guest network.' },
  { question:'Do you support Microsoft 365 for Madurai businesses?', answer:'Yes — email, SharePoint, Teams, OneDrive, Intune MDM setup and ongoing management.' },
  { question:'How quickly can you respond to IT emergencies in Madurai?', answer:'Business hours: 2–4 hours standard. AMC clients: 4-hour guaranteed, remote within 30 minutes.' },
]

export default function BusinessITSupportMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="business-it-support-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Business IT Support in Madurai"
      heroSubtitle="Office Computer Setup, Network, Cloud & Ongoing IT Support"
      heroDescription="JSPCS Online is your trusted business IT support partner in Madurai. Office computer setup, business Wi-Fi, Microsoft 365, server/NAS, cybersecurity, POS support, and remote IT help for small and medium businesses across Madurai, Tamil Nadu."
      breadcrumbLabel="Business IT Support Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Reliable IT Support for Your Madurai Business"
      ctaDescription="Office setup, network, cloud, security — complete IT in Madurai. Get a quote today."
      relatedPages={[
        {href:'/computer-amc-service-madurai', label:'Computer AMC Service'},
        {href:'/desktop-repair-service-in-madurai', label:'Desktop Repair Madurai'},
        {href:'/computer-service-center-in-madurai', label:'Computer Service Madurai'},
        {href:'/data-recovery-service-madurai', label:'Data Recovery Service'},
        {href:'/windows-installation-service-madurai', label:'Windows Installation'},
        {href:'/workstation-pc-build-madurai', label:'Workstation PC Build'},
      ]}
    />
  )
}
