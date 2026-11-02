import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Computer Service Center in Madurai | PC Repair – JSPCS Online',
  description:
    'Top computer service center in Madurai. Desktop PC repair, motherboard replacement, virus removal, data recovery, networking, AMC services. Call 9842139997.',
  keywords: [
    'computer service center madurai',
    'computer repair madurai',
    'pc repair madurai',
    'desktop repair madurai',
    'computer service madurai',
    'virus removal madurai',
    'data recovery madurai',
    'computer amc madurai',
    'office computer service madurai',
    'networking service madurai',
    'desktop motherboard repair madurai',
    'cpu repair madurai',
    'windows installation madurai',
  ],
  alternates: {
    canonical: 'https://jspcs.online/computer-service-center-in-madurai',
  },
  openGraph: {
    title: 'Computer Service Center in Madurai | JSPCS Online',
    description:
      'Expert computer and desktop PC repair in Madurai – motherboard, RAM, SSD, virus removal, networking, AMC. Transparent pricing, 90-day warranty.',
    url: 'https://jspcs.online/computer-service-center-in-madurai',
    siteName: 'JSPCS Online',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://jspcs.online/logo.png', width: 512, height: 512, alt: 'JSPCS Online – Computer Service Center in Madurai' }],
  },
  twitter: {
    card: 'summary',
    title: 'Computer Service Center in Madurai | JSPCS Online',
    description: 'Expert PC and desktop repair in Madurai. Motherboard, SSD, virus removal, AMC.',
  },
}

const schemaData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jspcs.online/computer-service-center-in-madurai#localbusiness',
    name: 'JSPCS Online – Computer Service Center in Madurai',
    url: 'https://jspcs.online/computer-service-center-in-madurai',
    logo: 'https://jspcs.online/logo.png',
    image: 'https://jspcs.online/logo.png',
    description:
      'JSPCS Online provides expert computer and desktop PC repair services in Madurai, Tamil Nadu. Services include motherboard repair, virus removal, data recovery, networking, and Annual Maintenance Contracts.',
    telephone: '+919842139997',
    email: 'jaishankarpcservices2021@gmail.com',
    priceRange: '₹₹',
    areaServed: { '@type': 'City', name: 'Madurai', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
    address: { '@type': 'PostalAddress', addressLocality: 'Madurai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop PC Repair', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motherboard Repair', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virus Removal', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Recovery', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer AMC Service', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Networking & Wi-Fi Setup', areaServed: 'Madurai' } },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jspcs.online' },
      { '@type': 'ListItem', position: 2, name: 'Computer Service Center in Madurai', item: 'https://jspcs.online/computer-service-center-in-madurai' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does computer repair cost in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Computer repair costs in Madurai depend on the issue. Software troubleshooting starts from ₹399, RAM and SSD upgrades from ₹999, and full motherboard chip-level repairs from ₹1,800. We provide a free diagnosis and quote before starting any work.' } },
      { '@type': 'Question', name: 'Do you provide onsite computer service in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, JSPCS Online offers onsite and doorstep computer repair services across Madurai. A technician can visit your home or office to diagnose and fix the issue without you needing to transport your PC.' } },
      { '@type': 'Question', name: 'Can you remove viruses from my computer in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer professional virus, malware, spyware, and ransomware removal in Madurai. Our deep-scan process eliminates all threats while preserving your data, followed by system hardening to prevent re-infection.' } },
      { '@type': 'Question', name: 'Do you offer computer AMC services for offices in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, JSPCS Online provides Annual Maintenance Contract (AMC) services for businesses in Madurai. AMC covers 4 scheduled services, priority support, discounted repairs, and remote troubleshooting for your entire office fleet.' } },
      { '@type': 'Question', name: 'How long does desktop motherboard repair take?', acceptedAnswer: { '@type': 'Answer', text: 'Desktop motherboard chip-level repairs typically take 2–4 business days depending on the specific fault. Complex BGA re-soldering may take up to 5 days. We keep you updated via WhatsApp throughout.' } },
      { '@type': 'Question', name: 'Can you recover data from a crashed hard drive in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we perform professional data recovery from crashed HDDs, damaged SSDs, and corrupted storage. Our recovery lab in Madurai uses specialized tools for logical and physical recovery cases.' } },
      { '@type': 'Question', name: 'Do you set up home and office networks in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, JSPCS Online provides complete home and office networking services in Madurai — Wi-Fi router configuration, LAN cabling, network security setup, and VPN configuration for remote offices.' } },
      { '@type': 'Question', name: 'Which operating systems do you support?', acceptedAnswer: { '@type': 'Answer', text: 'We support Windows 10, Windows 11, Ubuntu, and other Linux distributions. We also assist with macOS on Apple computers. Services include fresh installation, driver setup, and software configuration.' } },
      { '@type': 'Question', name: 'Is there a warranty on computer repairs in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'All hardware repairs and part replacements at JSPCS Online come with a 90-day warranty. Software services include 30-day support. AMC clients enjoy extended coverage throughout their contract period.' } },
    ],
  },
]

const sections = [
  {
    id: 'overview',
    heading: 'Madurai\'s Complete Computer Service & Repair Center',
    content: `<p>JSPCS Online is Madurai's comprehensive computer service center, trusted by hundreds of home users, students, and businesses across Tamil Nadu. We handle everything from simple virus removal to complex chip-level motherboard repairs, providing honest, expert, and affordable computer services in Madurai.</p>
    <p>Whether you have a desktop that won't power on, a laptop suffering random shutdowns, or an entire office network that needs maintenance, our certified technicians are equipped to diagnose and resolve any computer issue quickly and reliably.</p>
    <p>We operate with <strong>zero hidden charges</strong> — every job begins with a free diagnosis, followed by a transparent itemized quote. You decide whether to proceed before we touch a single component.</p>`,
  },
  {
    id: 'desktop-repair',
    heading: 'Desktop PC Repair in Madurai',
    subheading: 'All Brands – Assembled & Branded Desktops',
    content: `<p>From aging office PCs to high-end workstations, JSPCS Online repairs all types of desktop computers in Madurai. Our technicians handle branded systems like Dell OptiPlex, HP Compaq, Lenovo ThinkCentre, as well as custom assembled desktops built locally in Madurai.</p>
    <ul>
      <li><strong>No power / dead desktop</strong> – SMPS testing, power rail diagnosis, motherboard repair</li>
      <li><strong>Random restarts and BSODs</strong> – RAM testing, thermal checks, driver conflict resolution</li>
      <li><strong>Slow performance</strong> – SSD upgrade, RAM expansion, background process cleanup</li>
      <li><strong>No display / GPU issues</strong> – Graphics card repair, display port fix, BIOS reset</li>
      <li><strong>Storage failures</strong> – HDD/SSD replacement with data migration</li>
      <li><strong>Overheating</strong> – CPU cooler replacement, case fan upgrade, thermal paste service</li>
    </ul>`,
  },
  {
    id: 'virus-removal',
    heading: 'Virus & Malware Removal Service in Madurai',
    subheading: 'Ransomware, Spyware & Adware Removal',
    content: `<p>Malware infections are rampant in Madurai and across Tamil Nadu due to widespread pirated software use and phishing attacks. JSPCS Online offers professional virus removal and system security hardening to protect your computer and your data.</p>
    <ul>
      <li><strong>Complete virus scan</strong> – Multi-layer scanning using professional AV tools</li>
      <li><strong>Ransomware recovery</strong> – Encrypted file recovery attempts, system restore</li>
      <li><strong>Browser hijacker removal</strong> – Cleanup of malicious extensions, redirects</li>
      <li><strong>Keylogger and spyware removal</strong> – Protect sensitive banking and personal data</li>
      <li><strong>System hardening</strong> – Windows Firewall, UAC, and security policy configuration</li>
      <li><strong>Genuine antivirus setup</strong> – Kaspersky, Bitdefender, ESET installation</li>
    </ul>`,
  },
  {
    id: 'motherboard-chip-repair',
    heading: 'Desktop Motherboard Chip-Level Repair in Madurai',
    subheading: 'Component-Level Diagnosis & Repair',
    content: `<p>A failed desktop motherboard doesn't always mean a complete replacement. JSPCS Online's chip-level technicians in Madurai can repair faulty components on desktop motherboards, saving you the full cost of a new board.</p>
    <ul>
      <li><strong>Capacitor replacement</strong> – Bulging or leaking electrolytic capacitors on motherboards</li>
      <li><strong>VRM and power circuit repair</strong> – CPU voltage regulator module repairs</li>
      <li><strong>BIOS chip replacement</strong> – Dead BIOS, POST failure, no display on boot</li>
      <li><strong>USB and audio port repair</strong> – SMD connector soldering for broken ports</li>
      <li><strong>PCIe slot repair</strong> – Physical damage to PCIe x16 and x1 slots</li>
      <li><strong>Short-circuit diagnosis</strong> – Systematic fault tracing using multimeters and thermal cameras</li>
    </ul>`,
  },
  {
    id: 'data-recovery',
    heading: 'Data Recovery Services in Madurai',
    subheading: 'HDD, SSD, USB & RAID Recovery',
    content: `<p>Lost important files or photos? JSPCS Online provides professional data recovery services in Madurai for all types of storage — spinning hard drives, solid-state drives, USB flash drives, and RAID arrays.</p>
    <ul>
      <li><strong>Logical recovery</strong> – Accidentally deleted files, formatted drives, partition errors</li>
      <li><strong>Physical recovery</strong> – Failed read heads, seized spindle motors, damaged PCBs</li>
      <li><strong>SSD data recovery</strong> – NAND chip-level recovery for failed SSDs</li>
      <li><strong>RAID recovery</strong> – RAID 0/1/5/10 array reconstruction after server failure</li>
      <li><strong>USB/memory card recovery</strong> – Photos and documents from damaged flash storage</li>
    </ul>
    <p>We operate on a <strong>no data, no fee</strong> policy for most recovery cases. Your data is handled with strict confidentiality.</p>`,
  },
  {
    id: 'networking',
    heading: 'Networking & IT Support in Madurai',
    subheading: 'Home & Office Network Setup',
    content: `<p>A reliable network is the backbone of any modern home or business. JSPCS Online provides end-to-end networking solutions in Madurai — from simple Wi-Fi router setup to complete structured cabling for offices.</p>
    <ul>
      <li><strong>Wi-Fi router setup and optimization</strong> – Mesh Wi-Fi, channel optimization, QoS configuration</li>
      <li><strong>LAN cabling</strong> – Cat6 structured cabling for offices in Madurai</li>
      <li><strong>Network security</strong> – Firewall setup, guest network isolation, MAC filtering</li>
      <li><strong>VPN setup</strong> – Remote work VPN configuration for distributed teams</li>
      <li><strong>NAS and file server setup</strong> – Shared storage for small offices</li>
      <li><strong>CCTV integration</strong> – NVR networking and remote viewing setup</li>
    </ul>`,
  },
  {
    id: 'software-os',
    heading: 'OS Installation & Software Services in Madurai',
    subheading: 'Windows, Linux & Office Setup',
    content: `<p>JSPCS Online handles all software-related computer services in Madurai including OS installation, driver setup, and productivity software configuration.</p>
    <ul>
      <li><strong>Windows 10/11 clean installation</strong> – With all drivers and Windows updates</li>
      <li><strong>Ubuntu/Linux installation</strong> – Dual-boot setup and configuration</li>
      <li><strong>Microsoft Office setup</strong> – Genuine volume license and retail activation</li>
      <li><strong>Tally ERP and business software</strong> – Installation and database migration</li>
      <li><strong>Driver installation</strong> – All peripherals, printers, scanners, cameras</li>
      <li><strong>System performance tuning</strong> – Startup optimization, SSD TRIM, page file config</li>
    </ul>`,
  },
  {
    id: 'amc-business',
    heading: 'Computer AMC Services for Businesses in Madurai',
    subheading: 'Annual Maintenance Contract – Offices, Schools & Clinics',
    content: `<p>JSPCS Online is Madurai's leading provider of Annual Maintenance Contracts for computers in offices, schools, hospitals, and retail businesses. Our AMC plans provide predictable IT costs and maximum uptime for your business operations.</p>
    <ul>
      <li><strong>Comprehensive AMC</strong> – Parts and labour included for all breakdowns</li>
      <li><strong>Non-comprehensive AMC</strong> – Labour only, parts at discounted rates</li>
      <li><strong>4 preventive maintenance visits</strong> per year per machine</li>
      <li><strong>Priority response</strong> – 4-hour response SLA for AMC clients in Madurai</li>
      <li><strong>Remote support</strong> – Software fixes via TeamViewer/AnyDesk</li>
      <li><strong>Asset management</strong> – Inventory reports for your IT hardware</li>
    </ul>
    <p>Current AMC clients include schools, accounting firms, medical clinics, retail chains, and manufacturing companies in Madurai, Tamil Nadu.</p>`,
  },
  {
    id: 'why-choose',
    heading: 'Why Choose JSPCS Online for Computer Repair in Madurai',
    content: `<ul>
      <li>✅ <strong>Certified Engineers</strong> – Trained in chip-level and system-level diagnostics</li>
      <li>✅ <strong>Free Diagnosis</strong> – No cost to assess the problem</li>
      <li>✅ <strong>Transparent Pricing</strong> – Itemized quotes, no hidden charges</li>
      <li>✅ <strong>90-Day Warranty</strong> – On all hardware repairs and replacements</li>
      <li>✅ <strong>Onsite Service</strong> – Home and office visits across Madurai</li>
      <li>✅ <strong>Genuine Parts</strong> – OEM-quality components exclusively</li>
      <li>✅ <strong>Data Privacy</strong> – Strict data confidentiality, no unauthorized access</li>
      <li>✅ <strong>Serving 1,000+ Madurai Clients</strong> – Individuals, offices, schools, hospitals</li>
    </ul>`,
  },
]

const serviceHighlights = [
  { title: 'Desktop PC Repair', description: 'All brands, assembled & branded', icon: '🖥️' },
  { title: 'Virus Removal', description: 'Ransomware, spyware, adware', icon: '🛡️' },
  { title: 'Data Recovery', description: 'HDD, SSD, USB, RAID', icon: '💾' },
  { title: 'Motherboard Repair', description: 'Chip-level component service', icon: '🔬' },
  { title: 'Network Setup', description: 'Home & office networking', icon: '🌐' },
  { title: 'Windows Install', description: 'Win 10/11, drivers, updates', icon: '🪟' },
  { title: 'AMC Service', description: 'Office IT maintenance plans', icon: '📋' },
  { title: 'Onsite Service', description: 'Technician to your door', icon: '🚗' },
]

const faqs = [
  { question: 'How much does computer repair cost in Madurai?', answer: 'Computer repair costs in Madurai depend on the issue. Software troubleshooting starts from ₹399, RAM and SSD upgrades from ₹999, and full motherboard chip-level repairs from ₹1,800. We provide a free diagnosis and quote before starting any work.' },
  { question: 'Do you provide onsite computer service in Madurai?', answer: 'Yes, JSPCS Online offers onsite and doorstep computer repair services across Madurai. A technician can visit your home or office to diagnose and fix the issue without you needing to transport your PC.' },
  { question: 'Can you remove viruses from my computer in Madurai?', answer: 'Yes, we offer professional virus, malware, spyware, and ransomware removal in Madurai. Our deep-scan process eliminates all threats while preserving your data, followed by system hardening to prevent re-infection.' },
  { question: 'Do you offer computer AMC services for offices in Madurai?', answer: 'Yes, JSPCS Online provides Annual Maintenance Contract (AMC) services for businesses in Madurai. AMC covers 4 scheduled services, priority support, discounted repairs, and remote troubleshooting for your entire office fleet.' },
  { question: 'How long does desktop motherboard repair take?', answer: 'Desktop motherboard chip-level repairs typically take 2–4 business days depending on the specific fault. Complex BGA re-soldering may take up to 5 days. We keep you updated via WhatsApp throughout.' },
  { question: 'Can you recover data from a crashed hard drive in Madurai?', answer: 'Yes, we perform professional data recovery from crashed HDDs, damaged SSDs, and corrupted storage. Our recovery lab in Madurai uses specialized tools for logical and physical recovery cases.' },
  { question: 'Do you set up home and office networks in Madurai?', answer: 'Yes, JSPCS Online provides complete home and office networking services in Madurai — Wi-Fi router configuration, LAN cabling, network security setup, and VPN configuration for remote offices.' },
  { question: 'Which operating systems do you support?', answer: 'We support Windows 10, Windows 11, Ubuntu, and other Linux distributions. We also assist with macOS on Apple computers. Services include fresh installation, driver setup, and software configuration.' },
  { question: 'Is there a warranty on computer repairs in Madurai?', answer: 'All hardware repairs and part replacements at JSPCS Online come with a 90-day warranty. Software services include 30-day support. AMC clients enjoy extended coverage throughout their contract period.' },
]

export default function ComputerServiceCenterMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="computer-service-center-in-madurai"
      city="Madurai"
      state="Tamil Nadu"
      heroTitle="Computer Service Center in Madurai"
      heroSubtitle="Expert PC Repair, Virus Removal, Data Recovery & AMC"
      heroDescription="JSPCS Online is Madurai's trusted computer service center. We handle desktop repair, motherboard chip-level repair, virus removal, data recovery, networking, and Annual Maintenance Contracts for homes and businesses across Madurai, Tamil Nadu."
      breadcrumbLabel="Computer Service Center in Madurai"
      sections={sections}
      serviceHighlights={serviceHighlights}
      faqs={faqs}
      schemaData={schemaData}
      ctaHeading="Professional Computer Repair in Madurai – Book Now"
      ctaDescription="Free diagnosis. Transparent pricing. 90-day warranty. Onsite service available across Madurai and Tamil Nadu."
      relatedPages={[
        { href: '/laptop-service-center-in-madurai', label: 'Laptop Repair Madurai' },
        { href: '/chip-level-service-in-madurai', label: 'Chip-Level Service Madurai' },
        { href: '/custom-gaming-pc-build-in-madurai', label: 'Gaming PC Build Madurai' },
        { href: '/desktop-repair-service-in-madurai', label: 'Desktop Repair Madurai' },
      ]}
    />
  )
}
