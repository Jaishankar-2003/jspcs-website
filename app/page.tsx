'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HardwareArchitectureShowcase from '@/components/HardwareArchitectureShowcase'
import InteractiveDiagnosticBench from '@/components/InteractiveDiagnosticBench'
import About from '@/components/About'
import Services from '@/components/Services'
import ServiceCategories from '@/components/ServiceCategories'
import WhyChooseUs from '@/components/WhyChooseUs'
import TrustedPartners from '@/components/TrustedPartners'
import LicensesCertifications from '@/components/LicensesCertifications'
import PCBuildsShowcase from '@/components/PCBuildsShowcase'
import LatestPCUpdates from '@/components/LatestPCUpdates'
import RelatedArticles from '@/components/RelatedArticles'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'

// Dynamic import — prevents SSR/WebGL issues
const JSPCSIntro = dynamic(
  () => import('@/components/intro/JSPCSIntro'),
  { ssr: false, loading: () => null }
)

const INTRO_KEY = 'jspcs_intro_seen'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check reduced-motion preference and session flag
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const alreadySeen    = sessionStorage.getItem(INTRO_KEY) === 'true'

    if (!prefersReduced && !alreadySeen) {
      setShowIntro(true)
    }
  }, [])

  const handleIntroDone = () => {
    sessionStorage.setItem(INTRO_KEY, 'true')
    document.body.style.overflow = ''
    document.body.style.height   = ''
    window.scrollTo({ top: 0, behavior: 'instant' })
    setShowIntro(false)
  }

  if (!mounted) return null

  return (
    <>
      {/* ── Cinematic intro overlay (session-gated) ── */}
      {showIntro && <JSPCSIntro onDone={handleIntroDone} />}

      {/* ── Main homepage (always in DOM so bridge gradient hits it) ── */}
      <motion.main
        initial={{ opacity: showIntro ? 0 : 1 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#F5F3EE] text-graphite-900 selection:bg-burnt-500 selection:text-white"
      >
        <Navbar />
        <Hero />
        <HardwareArchitectureShowcase />
        <InteractiveDiagnosticBench />
        <About />
        <Services />
        <ServiceCategories />
        <WhyChooseUs />
        <TrustedPartners />
        <LicensesCertifications />
        <PCBuildsShowcase />
        <LatestPCUpdates />
        <RelatedArticles />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </motion.main>
    </>
  )
}

