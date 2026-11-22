'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import HomeHero from '@/components/home/HomeHero'
import ServicesOverview from '@/components/home/ServicesOverview'
import BuildsShowcase from '@/components/home/BuildsShowcase'
import BuildInquiry from '@/components/BuildInquiry'
import AMCShowcase from '@/components/home/AMCShowcase'
import UpgradesSection from '@/components/home/UpgradesSection'
import ChipLevelSpecialty from '@/components/home/ChipLevelSpecialty'
import MoreITServices from '@/components/home/MoreITServices'
import TrustSection from '@/components/home/TrustSection'
import TrustedPartners from '@/components/TrustedPartners'
import LicensesCertifications from '@/components/LicensesCertifications'
import LatestPCUpdates from '@/components/LatestPCUpdates'
import RelatedArticles from '@/components/RelatedArticles'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MobileActionBar from '@/components/MobileActionBar'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white">
      <Navbar />

      {/* Hero Section: Immediate 6-Pillar Value Proposition */}
      <HomeHero />

      {/* Priority 1: Laptop & Desktop Service */}
      <ServicesOverview />

      {/* Priority 2: Custom PC Builds (9 Workload Categories) */}
      <BuildsShowcase />

      {/* Interactive Guided PC-Build Configurator */}
      <section id="build-my-pc" aria-labelledby="inquiry-heading" className="py-14 sm:py-24 bg-ivory-100 scroll-mt-20 border-t border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SectionHeader
            id="inquiry-heading"
            align="center"
            eyebrow="Interactive PC-Build Inquiry"
            title="Tell Us What You Need – We'll Plan Your Build."
            description="No technical jargon required. Choose your primary purpose, set a budget range, and pick any preferences. We will generate a clear summary for WhatsApp."
          />
          <BuildInquiry />
        </div>
      </section>

      {/* Priority 3: PC & IT AMC (Annual Maintenance Contracts) */}
      <AMCShowcase />

      {/* Priority 4: Hardware Upgrades (SSD, RAM, GPU, Cooling) */}
      <UpgradesSection />

      {/* Priority 5: Chip-Level Repair Specialty */}
      <ChipLevelSpecialty />

      {/* Priority 6: IT Support, Networking, Printers, Cloud & Security */}
      <MoreITServices />

      {/* Engineering Integrity & How We Work */}
      <TrustSection />

      {/* Verified Hardware Partners */}
      <TrustedPartners />

      {/* Accreditations & Formal Registration */}
      <LicensesCertifications />

      {/* Verified Customer Reviews */}
      <Testimonials />

      {/* Bench Updates & Real Assembly Telemetry */}
      <LatestPCUpdates />

      {/* Priority 7: Knowledge Hub & Technical Guides */}
      <RelatedArticles />

      {/* Laboratory Consultation & Contact */}
      <Contact />

      {/* Complete Footer Directory */}
      <Footer />

      {/* Desktop / Tablet Floating WhatsApp */}
      <WhatsAppButton />

      {/* Mobile-First Sticky Action Bar */}
      <MobileActionBar bookHref="#contact" bookLabel="Book Service" />
    </main>
  )
}
