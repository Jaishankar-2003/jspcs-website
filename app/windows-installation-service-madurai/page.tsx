import type { Metadata } from 'next'
import LocalSEOPageLayout from '@/components/LocalSEOPageLayout'
import { generateMetadata, localBusinessSchema, breadcrumbSchema, faqSchema } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export const metadata: Metadata = generateMetadata({
  title: 'Windows Installation Service in Madurai | OS Install & Reinstall – JSPCS Online',
  description: 'Professional Windows installation service in Madurai. Windows 11, 10 clean install, reinstall, activation. Driver setup, software config. Call 9842139997.',
  keywords: ['windows installation madurai','windows reinstall madurai','windows 11 installation madurai','windows 10 installation madurai','os installation madurai','fresh windows install madurai','windows activation madurai','windows not booting madurai','format and reinstall madurai'],
  slug: 'windows-installation-service-madurai',
})

const schemaData = [
  localBusinessSchema({ slug:'windows-installation-service-madurai', name:'JSPCS Online – Windows Installation Service in Madurai', description:'Professional Windows 11 and Windows 10 installation and reinstallation service in Madurai. Clean install, driver setup, software configuration.', city:'Madurai', state:'Tamil Nadu', offers:[{name:'Windows 11 Installation'},{name:'Windows 10 Installation'},{name:'Windows Reinstallation'},{name:'Windows Activation'},{name:'Driver Installation & Setup'},{name:'Data Backup Before Reinstall'}] }),
  breadcrumbSchema([{name:'Home',url:'https://jspcs.online'},{name:'Services',url:'https://jspcs.online'},{name:'Windows Installation Madurai',url:'https://jspcs.online/windows-installation-service-madurai'}]),
  faqSchema([
    {question:'How much does Windows installation cost in Madurai?',answer:'Windows installation service at JSPCS Online Madurai: ₹500–₹1,200 (labor for clean install + driver setup). Windows license: genuine Windows 11 Home OEM ₹4,000–₹6,000, Windows 10 Home OEM ₹3,500–₹5,000. We also install on existing licensed systems at the labor rate only.'},
    {question:'Do you back up data before Windows reinstall in Madurai?',answer:'Yes. Before any Windows reinstall, we back up your important files (Documents, Downloads, Desktop, Pictures, Music) to an external drive or a separate partition. We will not format your drive without backing up your data first and getting your confirmation.'},
    {question:'What is the difference between Windows 11 and Windows 10 in Madurai?',answer:'Windows 11 requires a TPM 2.0 chip and 8th Gen+ Intel or Ryzen 2000+ processor. It offers a redesigned interface, better gaming features (DirectStorage, Auto HDR), and improved security. Windows 10 works on older hardware. We advise which version is right for your laptop.'},
    {question:'Can you install Windows on a new SSD in Madurai?',answer:'Yes. New SSD installation plus clean Windows install is a common combo at JSPCS Online Madurai. We install the SSD, create a fresh Windows installation, install all drivers, and set up your laptop exactly as you want it.'},
    {question:'Do you install all drivers after Windows installation in Madurai?',answer:'Yes. Full driver setup is included: chipset, display, audio, network (Wi-Fi + LAN), Bluetooth, touchpad, keyboard backlight, and any manufacturer utilities (Dell SupportAssist, HP Support, Lenovo Vantage, Asus Armoury Crate).'},
  ]),
]

const sections = [
  { id:'overview', heading:'Windows Installation Service in Madurai', content:`<p>JSPCS Online provides professional Windows installation and reinstallation services across Madurai. Whether you need a fresh Windows 11 install on a new SSD, a clean reinstall to fix a corrupted OS, or a Windows upgrade, our technicians handle the complete process — from data backup to driver installation.</p>
<p>A clean Windows installation resolves slow performance caused by years of accumulated software, malware, registry corruption, and system file errors that cannot be fixed by repair tools. Most Madurai customers who complain of "slow laptop" find a fresh Windows install plus SSD upgrade transforms their experience completely.</p>` },
  { id:'when-needed', heading:'When Do You Need Windows Reinstallation in Madurai?', content:`<ul>
<li><strong>Windows not booting</strong> — Boot loop, BSOD, "Repairing Windows" loop</li>
<li><strong>Extremely slow laptop</strong> — Years of software bloat, malware, or OS corruption</li>
<li><strong>Virus/malware infection</strong> — Persistent malware that survives antivirus removal</li>
<li><strong>Windows update failure</strong> — Corrupted update that breaks the OS</li>
<li><strong>New SSD installed</strong> — Fresh OS on a new drive</li>
<li><strong>Selling / transferring laptop</strong> — Complete data wipe and fresh install for new owner</li>
<li><strong>Windows activation issue</strong> — OEM key problems on refurbished machines</li>
<li><strong>Blue Screen of Death (BSOD)</strong> — Persistent BSODs unresolved by repair tools</li>
</ul>` },
  { id:'process', heading:'Our Windows Installation Process in Madurai', content:`<ol style="list-style:decimal;padding-left:1.5rem">
<li><strong>Data backup</strong> — Documents, Downloads, Desktop, Pictures backed up to external drive</li>
<li><strong>Windows version selection</strong> — We advise Windows 11 or 10 based on your hardware</li>
<li><strong>Bootable USB creation</strong> — Microsoft-signed Windows ISO written to USB</li>
<li><strong>Clean installation</strong> — Partition formatted, fresh Windows installed</li>
<li><strong>Windows activation</strong> — Genuine license activated (OEM or retail key)</li>
<li><strong>Driver installation</strong> — All drivers: display, audio, Wi-Fi, Bluetooth, chipset, touchpad</li>
<li><strong>Windows Update</strong> — All security updates installed</li>
<li><strong>Manufacturer utilities</strong> — Dell SupportAssist, Lenovo Vantage, HP Support, Asus Armoury etc.</li>
<li><strong>Data restoration</strong> — Your backed-up files moved back</li>
<li><strong>Verification</strong> — Confirm all hardware working: Wi-Fi, sound, webcam, keyboard</li>
</ol>` },
  { id:'win11', heading:'Windows 11 Installation in Madurai', content:`<p>Windows 11 is the current Microsoft OS — required for the latest security features and optimized for modern hardware. Installation requirements:</p>
<ul>
<li><strong>Processor</strong> — Intel 8th Gen+ or AMD Ryzen 2000+ (we check compatibility)</li>
<li><strong>TPM 2.0</strong> — Most modern laptops have this; we verify before installation</li>
<li><strong>RAM</strong> — 4GB minimum (8GB+ recommended)</li>
<li><strong>Storage</strong> — 64GB minimum (128GB+ recommended)</li>
</ul>
<p>If your laptop doesn't meet Windows 11 requirements, we install Windows 10 (supported until October 2025) and advise on upgrade paths. We can also install Windows 11 on compatible older hardware using registry bypass methods — with appropriate disclosure to the customer.</p>` },
  { id:'why-jspcs', heading:'Why Choose JSPCS Online for Windows Installation in Madurai', content:`<ul>
<li>✅ <strong>Genuine Windows</strong> — Microsoft-signed ISO, never cracked/pirated software</li>
<li>✅ <strong>Data Backup First</strong> — Never format without securing your files</li>
<li>✅ <strong>Complete Driver Setup</strong> — All hardware working after install</li>
<li>✅ <strong>Manufacturer Utilities</strong> — Dell, HP, Lenovo, Asus apps configured</li>
<li>✅ <strong>Same-Day Service</strong> — Most installations completed in 2–4 hours</li>
<li>✅ <strong>90-Day Support</strong> — We help if any Windows issue arises after install</li>
</ul>` },
]

const serviceHighlights = [
  { title:'Windows 11 Install', description:'Latest OS, full setup', icon:'🪟' },
  { title:'Windows 10 Install', description:'For older hardware', icon:'💻' },
  { title:'Data Backup', description:'Safe before format', icon:'💾' },
  { title:'Driver Setup', description:'All hardware configured', icon:'⚙️' },
  { title:'Windows Activation', description:'Genuine license', icon:'✅' },
  { title:'Malware Removal', description:'Clean OS after virus', icon:'🛡️' },
  { title:'Same-Day Service', description:'2–4 hours in Madurai', icon:'⏱️' },
  { title:'SSD + OS Combo', description:'New drive + fresh install', icon:'🚀' },
]

const faqs = [
  { question:'How much does Windows installation cost in Madurai?', answer:'Service fee ₹500–₹1,200. Windows 11 Home OEM license ₹4,000–₹6,000. Existing licensed systems pay labor only.' },
  { question:'Do you back up data before reinstall?', answer:'Yes — always. Documents, Downloads, Desktop, Pictures backed up before any format. No exceptions.' },
  { question:'What is the difference between Windows 11 and 10?', answer:'Win 11 requires TPM 2.0 + 8th Gen+ Intel / Ryzen 2000+. Better for gaming (DirectStorage). Win 10 for older hardware.' },
  { question:'Can you install Windows on a new SSD?', answer:'Yes — SSD install + clean Windows is a popular combo. Full driver setup included.' },
  { question:'Do you install all drivers after Windows installation?', answer:'Yes — display, audio, Wi-Fi, Bluetooth, chipset, touchpad, backlight, manufacturer utilities.' },
]

export default function WindowsInstallationServiceMadurai() {
  return (
    <LocalSEOPageLayout
      pageSlug="windows-installation-service-madurai" city="Madurai" state="Tamil Nadu"
      heroTitle="Windows Installation Service in Madurai"
      heroSubtitle="Windows 11 & 10 Clean Install with Full Driver Setup"
      heroDescription="JSPCS Online provides professional Windows installation service in Madurai. Clean install of Windows 11 or 10, data backup, genuine activation, all drivers installed, manufacturer utilities configured. Same-day service. Free assessment."
      breadcrumbLabel="Windows Installation Madurai"
      sections={sections} serviceHighlights={serviceHighlights} faqs={faqs} schemaData={schemaData}
      ctaHeading="Need Windows Installed in Madurai? Same-Day Service"
      ctaDescription="Data backed up first. Genuine Windows. All drivers installed. 2–4 hours."
      relatedPages={[
        {href:'/ssd-upgrade-service-madurai', label:'SSD Upgrade Service'},
        {href:'/data-recovery-service-madurai', label:'Data Recovery Service'},
        {href:'/laptop-service-center-in-madurai', label:'Laptop Repair Madurai'},
        {href:'/computer-service-center-in-madurai', label:'Computer Service Madurai'},
        {href:'/computer-amc-service-madurai', label:'Computer AMC Service'},
        {href:'/business-it-support-madurai', label:'Business IT Support'},
      ]}
    />
  )
}
