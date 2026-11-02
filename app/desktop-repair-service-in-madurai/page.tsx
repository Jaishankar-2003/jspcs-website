import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Desktop Repair Service in Madurai | PC Repair – JSPCS Online',
  description:
    'Expert desktop repair service in Madurai. Dell, HP, Lenovo desktop repair, SMPS replacement, motherboard repair, overheating fix, RAM & SSD upgrade, onsite service. Call 9842139997.',
  keywords: [
    'desktop repair service madurai',
    'desktop repair madurai',
    'desktop pc repair madurai',
    'computer desktop repair madurai',
    'dell desktop repair madurai',
    'hp desktop repair madurai',
    'lenovo desktop repair madurai',
    'desktop motherboard repair madurai',
    'smps repair madurai',
    'desktop not starting madurai',
    'desktop overheating repair madurai',
    'desktop upgrade madurai',
    'desktop amc madurai',
    'desktop onsite repair madurai',
  ],
  alternates: {
    canonical: 'https://jspcs.online/desktop-repair-service-in-madurai',
  },
  openGraph: {
    title: 'Desktop Repair Service in Madurai | JSPCS Online',
    description:
      'Professional desktop PC repair in Madurai. Motherboard, SMPS, RAM, SSD, overheating, virus removal. Dell, HP, Lenovo and assembled desktops. Onsite service.',
    url: 'https://jspcs.online/desktop-repair-service-in-madurai',
    siteName: 'JSPCS Online',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://jspcs.online/logo.png', width: 512, height: 512, alt: 'JSPCS Online – Desktop Repair Service in Madurai' }],
  },
  twitter: {
    card: 'summary',
    title: 'Desktop Repair Service in Madurai | JSPCS Online',
    description: 'Expert desktop PC repair in Madurai. Motherboard, SMPS, SSD upgrade, onsite service.',
  },
}

const schemaData = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jspcs.online/desktop-repair-service-in-madurai#localbusiness',
    name: 'JSPCS Online – Desktop Repair Service in Madurai',
    url: 'https://jspcs.online/desktop-repair-service-in-madurai',
    logo: 'https://jspcs.online/logo.png',
    image: 'https://jspcs.online/logo.png',
    description:
      'JSPCS Online provides professional desktop PC repair and maintenance services in Madurai, Tamil Nadu. All-in-one, tower, and workstation desktops from Dell, HP, Lenovo and assembled brands serviced with chip-level expertise.',
    telephone: '+919842139997',
    email: 'jaishankarpcservices2021@gmail.com',
    priceRange: '₹₹',
    areaServed: { '@type': 'City', name: 'Madurai', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
    address: { '@type': 'PostalAddress', addressLocality: 'Madurai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop Motherboard Repair', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SMPS Repair & Replacement', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop RAM Upgrade', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop SSD Upgrade', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Overheating Fix', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desktop AMC Service', areaServed: 'Madurai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Onsite Desktop Repair', areaServed: 'Madurai' } },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jspcs.online' },
      { '@type': 'ListItem', position: 2, name: 'Desktop Repair Service in Madurai', item: 'https://jspcs.online/desktop-repair-service-in-madurai' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does desktop PC repair cost in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Desktop repair costs in Madurai start from ₹299 for software issues, ₹799–₹2,500 for component replacements (RAM, HDD, fans), and ₹2,000–₹6,000 for motherboard chip-level repairs. SMPS replacement starts from ₹1,200. We always provide a free diagnosis and transparent quote.' } },
      { '@type': 'Question', name: 'Do you provide onsite desktop repair service in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, JSPCS Online offers onsite desktop PC repair across Madurai. Our technicians can come to your home or office, diagnose the issue on-location, and perform most repairs without needing to take the machine away.' } },
      { '@type': 'Question', name: 'My desktop won\'t turn on — what could be the issue?', acceptedAnswer: { '@type': 'Answer', text: 'Common causes of a desktop not powering on include a failed SMPS (power supply), a faulty power button or cable, dead motherboard, or tripped power surge protector. JSPCS Online\'s technicians systematically diagnose each component to pinpoint the fault quickly.' } },
      { '@type': 'Question', name: 'Can you repair a Dell desktop motherboard in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. JSPCS Online has experience repairing Dell OptiPlex, Vostro, XPS, and Inspiron desktop motherboards in Madurai at the chip level. We handle capacitor replacement, BIOS chip repair, power circuit faults, and PCIe slot issues.' } },
      { '@type': 'Question', name: 'How long does desktop repair take in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Software issues and simple component swaps (RAM, HDD, fan) are typically resolved same day. Motherboard chip-level repairs take 2–4 days. SMPS replacements are usually completed within 1 day subject to parts availability.' } },
      { '@type': 'Question', name: 'Can you upgrade my old desktop with an SSD in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer SSD upgrades for desktop PCs in Madurai — both SATA and NVMe options. We clone your existing Windows installation to the new SSD so you don\'t lose any data or settings. An SSD upgrade is one of the most impactful upgrades for an aging desktop.' } },
      { '@type': 'Question', name: 'Do you provide AMC for desktop computers in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Annual Maintenance Contract (AMC) for desktop PCs covers regular cleaning, thermal service, software updates, and priority repair response. AMC plans are available for individual PCs and office fleets of any size in Madurai.' } },
      { '@type': 'Question', name: 'Do you repair gaming desktops in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. JSPCS Online services custom gaming desktops — cleaning, thermal repasting, GPU upgrades, PSU replacements, and RGB/fan controller fixes. We also build gaming desktops from scratch in Madurai for all budget levels.' } },
      { '@type': 'Question', name: 'What desktop brands do you service in Madurai?', acceptedAnswer: { '@type': 'Answer', text: 'We service all desktop brands including Dell, HP, Lenovo, Acer, Asus, Wipro, HCL, and custom assembled desktops from local Madurai computer shops. All-in-One desktops from Apple, Dell, and HP are also serviced.' } },
    ],
  },
]

const sections = [
  {
    id: 'overview',
    heading: 'Professional Desktop PC Repair Service in Madurai',
    content: `<p>JSPCS Online provides comprehensive desktop computer repair services across Madurai, Tamil Nadu. From simple virus removal to complex motherboard chip-level repairs, our certified technicians handle every desktop issue with precision and transparency.</p>
    <p>We service all types of desktop computers in Madurai — branded desktops (Dell, HP, Lenovo, Acer), locally assembled systems, All-in-One computers, gaming towers, and professional workstations. Every repair begins with a <strong>free diagnosis</strong> and a detailed, itemized quote.</p>
    <p>Our Madurai service center offers both <strong>carry-in service</strong> (bring your tower/system unit to us) and <strong>onsite service</strong> (our technician visits your home or office). For heavy or office setups, onsite service is often the most convenient option.</p>`,
  },
  {
    id: 'common-problems',
    heading: 'Common Desktop Problems We Fix in Madurai',
    subheading: 'Fast Diagnosis, Expert Repair',
    content: `<p>Desktop PCs develop issues over time — dust accumulation, failing components, and software corruption are all common in Madurai's climate. Here are the most frequent desktop repair jobs our Madurai technicians handle:</p>
    <ul>
      <li><strong>Desktop not turning on</strong> – SMPS failure, motherboard issue, power button fault</li>
      <li><strong>Desktop turning off randomly</strong> – Overheating, failing PSU, RAM errors</li>
      <li><strong>Blue Screen of Death (BSOD)</strong> – RAM, HDD, driver, or OS corruption</li>
      <li><strong>No display on monitor</strong> – GPU failure, HDMI cable, monitor input, BIOS issue</li>
      <li><strong>Slow desktop performance</strong> – HDD wear, full storage, malware, fragmented OS</li>
      <li><strong>Desktop making beep sounds</strong> – RAM seating issue, POST error codes</li>
      <li><strong>USB ports not working</strong> – USB controller chip failure, driver issue</li>
      <li><strong>No internet / network</strong> – NIC failure, driver issue, router configuration</li>
    </ul>`,
  },
  {
    id: 'dell-desktop-repair',
    heading: 'Dell Desktop Repair in Madurai',
    subheading: 'OptiPlex, Vostro, XPS & Inspiron Desktop',
    content: `<p>Dell desktops are the most commonly found brand in offices and schools across Madurai. JSPCS Online is highly experienced in repairing the entire Dell desktop range with minimal downtime.</p>
    <ul>
      <li><strong>Dell OptiPlex</strong> – Capacitor replacement, SMPS repair, RAM/SSD upgrades</li>
      <li><strong>Dell Vostro</strong> – Motherboard repair, OS issues, display port repair</li>
      <li><strong>Dell XPS Desktop</strong> – GPU upgrade, cooling improvement, SSD upgrade</li>
      <li><strong>Dell PowerEdge (small office)</strong> – NIC repair, RAID configuration, OS reinstall</li>
      <li><strong>Dell All-in-One</strong> – Screen panel replacement, board repair, fan replacement</li>
    </ul>`,
  },
  {
    id: 'hp-lenovo-desktop',
    heading: 'HP & Lenovo Desktop Repair in Madurai',
    subheading: 'HP ProDesk, Compaq, ThinkCentre & IdeaCentre',
    content: `<p>HP and Lenovo are other popular desktop brands widely used in offices and homes in Madurai. JSPCS Online services the full range of HP and Lenovo desktop products.</p>
    <ul>
      <li><strong>HP ProDesk & EliteDesk</strong> – Motherboard diagnostics, RAM upgrade, SSD migration</li>
      <li><strong>HP Compaq</strong> – PSU replacement, BIOS repair, performance optimization</li>
      <li><strong>HP All-in-One</strong> – Touchscreen repair, motherboard service, storage upgrade</li>
      <li><strong>Lenovo ThinkCentre</strong> – Memory upgrade, NIC repair, BIOS update, OS service</li>
      <li><strong>Lenovo IdeaCentre</strong> – Fan replacement, graphics upgrade, storage expansion</li>
    </ul>`,
  },
  {
    id: 'smps-repair',
    heading: 'SMPS Repair & Replacement in Madurai',
    subheading: 'Power Supply Unit Service',
    content: `<p>The SMPS (Switched Mode Power Supply) is a critical component of every desktop PC. A failing SMPS can cause your desktop to not turn on, shut down randomly, or produce voltage irregularities that damage other components. JSPCS Online provides expert SMPS testing and replacement in Madurai.</p>
    <ul>
      <li><strong>SMPS testing</strong> – Voltage rail testing under load to diagnose PSU health</li>
      <li><strong>SMPS replacement</strong> – 450W to 1000W replacements from trusted brands</li>
      <li><strong>Capacitor replacement</strong> – For bulging caps inside faulty SMPS units</li>
      <li><strong>Surge protector advice</strong> – UPS and stabilizer recommendations for Madurai's power conditions</li>
    </ul>
    <p>Madurai experiences power fluctuations and surges, making a quality UPS or voltage stabilizer essential for protecting your desktop investment. We advise on appropriate UPS systems for your setup.</p>`,
  },
  {
    id: 'desktop-upgrade',
    heading: 'Desktop Upgrade Services in Madurai',
    subheading: 'RAM, SSD, GPU & CPU Upgrades',
    content: `<p>Upgrading your existing desktop is often far more cost-effective than buying a new computer. JSPCS Online helps Madurai customers identify the most impactful upgrade for their budget.</p>
    <ul>
      <li><strong>SSD upgrade</strong> – Replace slow HDD with NVMe SSD; Windows boots in 10 seconds</li>
      <li><strong>RAM upgrade</strong> – From 4GB to 8GB, 16GB, or 32GB for better multitasking</li>
      <li><strong>GPU upgrade</strong> – Add or upgrade graphics card for gaming or design work</li>
      <li><strong>CPU upgrade</strong> – Socket-compatible processor upgrade for more cores</li>
      <li><strong>Storage expansion</strong> – Add secondary HDDs or SSDs for more space</li>
      <li><strong>Wi-Fi card upgrade</strong> – Add Wi-Fi 6 to an existing wired desktop</li>
    </ul>`,
  },
  {
    id: 'overheating',
    heading: 'Desktop Overheating Repair in Madurai',
    subheading: 'Thermal Service, Fan Replacement & Airflow Optimization',
    content: `<p>Madurai's hot and humid climate accelerates dust accumulation inside desktop PCs, leading to overheating, thermal throttling, and random shutdowns. JSPCS Online offers thorough thermal servicing for all desktop computers in Madurai.</p>
    <ul>
      <li><strong>Full dust cleaning</strong> – Compressed air and brush cleaning of heatsinks, fans, and filters</li>
      <li><strong>Thermal paste replacement</strong> – CPU and GPU paste replaced with premium compound</li>
      <li><strong>CPU cooler upgrade</strong> – From stock to tower cooler for better temperature management</li>
      <li><strong>Case fan addition</strong> – Extra intake/exhaust fans for improved airflow</li>
      <li><strong>Temperature monitoring setup</strong> – HWMonitor or MSI Afterburner configured for alerts</li>
    </ul>
    <p>A proper thermal service can reduce CPU temperatures by 15–30°C and significantly improve stability and component longevity.</p>`,
  },
  {
    id: 'amc-desktop',
    heading: 'Desktop PC AMC Service in Madurai',
    subheading: 'Annual Maintenance for Homes & Businesses',
    content: `<p>For businesses, schools, and hospitals in Madurai that operate multiple desktops, an Annual Maintenance Contract (AMC) from JSPCS Online ensures reliable operation with predictable IT costs.</p>
    <ul>
      <li><strong>4 scheduled preventive maintenance visits</strong> per year</li>
      <li><strong>Priority breakdown response</strong> – 4-hour SLA for AMC clients in Madurai</li>
      <li><strong>Discounted parts</strong> – 20–30% off all replacement components</li>
      <li><strong>Remote support</strong> – Software issues resolved remotely via TeamViewer</li>
      <li><strong>Asset inventory reports</strong> – Full hardware inventory for IT managers</li>
    </ul>
    <p>We currently manage AMC contracts for schools, clinics, CA offices, retail stores, and manufacturing units in Madurai, Tamil Nadu.</p>`,
  },
  {
    id: 'why-choose',
    heading: 'Why Choose JSPCS Online for Desktop Repair in Madurai',
    content: `<ul>
      <li>✅ <strong>Free Diagnosis</strong> – No charge to identify the fault; transparent quotes</li>
      <li>✅ <strong>Certified Technicians</strong> – Trained in chip-level and system-level repair</li>
      <li>✅ <strong>90-Day Warranty</strong> – On all hardware repairs and replacements</li>
      <li>✅ <strong>Onsite Service Available</strong> – Technician to your home or office in Madurai</li>
      <li>✅ <strong>Genuine Parts</strong> – No counterfeit or sub-standard components</li>
      <li>✅ <strong>Same-Day Service</strong> – Many repairs completed the same day</li>
      <li>✅ <strong>AMC Plans</strong> – Flexible annual contracts for businesses</li>
      <li>✅ <strong>WhatsApp Updates</strong> – Real-time repair status notifications</li>
      <li>✅ <strong>Trusted by Madurai Businesses</strong> – Schools, offices, clinics, and shops</li>
    </ul>`,
  },
]

const serviceHighlights = [
  { title: 'Desktop Not Starting', description: 'SMPS, motherboard, power diagnosis', icon: '🔌' },
  { title: 'Dell Desktop Repair', description: 'OptiPlex, Vostro, XPS', icon: '🖥️' },
  { title: 'HP Desktop Repair', description: 'ProDesk, Compaq, All-in-One', icon: '💻' },
  { title: 'SMPS Replacement', description: '450W–1000W, quality brands', icon: '⚡' },
  { title: 'SSD & RAM Upgrade', description: 'Make your old PC fast again', icon: '🚀' },
  { title: 'Overheating Fix', description: 'Thermal paste, fan, airflow', icon: '🌡️' },
  { title: 'Desktop AMC', description: 'Office IT maintenance plans', icon: '📋' },
  { title: 'Onsite Service', description: 'Home & office visits Madurai', icon: '🏠' },
]

const faqs = [
  { question: 'How much does desktop PC repair cost in Madurai?', answer: 'Desktop repair costs start from ₹299 for software issues, ₹799–₹2,500 for component replacements (RAM, HDD, fans), and ₹2,000–₹6,000 for motherboard chip-level repairs. SMPS replacement starts from ₹1,200. We always provide a free diagnosis and transparent quote.' },
  { question: 'Do you provide onsite desktop repair service in Madurai?', answer: 'Yes, JSPCS Online offers onsite desktop PC repair across Madurai. Our technicians can come to your home or office, diagnose the issue on-location, and perform most repairs without needing to take the machine away.' },
  { question: 'My desktop won\'t turn on — what could be the issue?', answer: 'Common causes include a failed SMPS, a faulty power button or cable, dead motherboard, or tripped power surge protector. Our technicians systematically diagnose each component to pinpoint the fault quickly.' },
  { question: 'Can you repair a Dell desktop motherboard in Madurai?', answer: 'Yes. JSPCS Online repairs Dell OptiPlex, Vostro, XPS, and Inspiron desktop motherboards at the chip level — capacitor replacement, BIOS chip repair, power circuit faults, and PCIe slot issues.' },
  { question: 'How long does desktop repair take in Madurai?', answer: 'Software issues and simple component swaps are typically resolved same day. Motherboard chip-level repairs take 2–4 days. SMPS replacements are usually completed within 1 day subject to parts availability.' },
  { question: 'Can you upgrade my old desktop with an SSD in Madurai?', answer: 'Yes. We offer SATA and NVMe SSD upgrades for desktop PCs in Madurai. We clone your existing Windows installation to the new SSD so you don\'t lose any data or settings.' },
  { question: 'Do you provide AMC for desktop computers in Madurai?', answer: 'Yes. Our Annual Maintenance Contract covers regular cleaning, thermal service, software updates, and priority repair response. AMC plans available for individual PCs and office fleets of any size.' },
  { question: 'Do you repair gaming desktops in Madurai?', answer: 'Yes. We service custom gaming desktops — cleaning, thermal repasting, GPU upgrades, PSU replacements, and RGB/fan controller fixes. We also build gaming desktops from scratch in Madurai.' },
  { question: 'What desktop brands do you service in Madurai?', answer: 'We service all desktop brands including Dell, HP, Lenovo, Acer, Asus, Wipro, HCL, and custom assembled desktops. All-in-One desktops from Apple, Dell, and HP are also serviced.' },
]

export default function DesktopRepairServiceMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="desktop-repair-service-in-madurai"
      city="Madurai"
      state="Tamil Nadu"
      heroTitle="Desktop Repair Service in Madurai"
      heroSubtitle="Expert Desktop PC Repair – Dell, HP, Lenovo & Assembled"
      heroDescription="JSPCS Online is Madurai's trusted desktop PC repair center. We fix Dell, HP, Lenovo, and assembled desktops — motherboard chip-level repair, SMPS replacement, overheating fix, SSD upgrade, virus removal, and onsite service. Free diagnosis, transparent pricing, 90-day warranty."
      breadcrumbLabel="Desktop Repair Service in Madurai"
      sections={sections}
      serviceHighlights={serviceHighlights}
      faqs={faqs}
      schemaData={schemaData}
      ctaHeading="Desktop Not Working? Call Madurai's Experts Now"
      ctaDescription="Free diagnosis. Onsite service available. Transparent pricing. 90-day warranty on all repairs."
      relatedPages={[
        { href: '/laptop-service-center-in-madurai', label: 'Laptop Repair Madurai' },
        { href: '/computer-service-center-in-madurai', label: 'Computer Service Madurai' },
        { href: '/chip-level-service-in-madurai', label: 'Chip-Level Service Madurai' },
        { href: '/custom-gaming-pc-build-in-madurai', label: 'Gaming PC Build Madurai' },
      ]}
    />
  )
}
