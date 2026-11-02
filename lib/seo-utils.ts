/**
 * JSPCS Online – Centralised SEO Utilities
 * Reusable metadata generators, schema builders, and city-scaling helpers.
 * Supports future scaling to Chennai, Coimbatore, Salem, Trichy, Tirunelveli, Erode.
 */

import type { Metadata } from 'next'

// ── Business Constants ────────────────────────────────────────────────────────
export const BUSINESS = {
  name: 'JSPCS Online',
  legalName: 'Jai Shankar PC Services',
  phone: '9842139997',
  phoneE164: '+919842139997',
  email: 'jaishankarpcservices2021@gmail.com',
  whatsapp: 'https://wa.me/919842139997',
  baseUrl: 'https://jspcs.online',
  logo: 'https://jspcs.online/logo.png',
  priceRange: '₹₹',
} as const

// ── City Registry ─────────────────────────────────────────────────────────────
export type CitySlug = 'madurai' | 'chennai' | 'coimbatore' | 'salem' | 'trichy' | 'tirunelveli' | 'erode'

export const CITIES: Record<CitySlug, { name: string; state: string; region: string }> = {
  madurai:     { name: 'Madurai',     state: 'Tamil Nadu', region: 'South Tamil Nadu' },
  chennai:     { name: 'Chennai',     state: 'Tamil Nadu', region: 'North Tamil Nadu'  },
  coimbatore:  { name: 'Coimbatore',  state: 'Tamil Nadu', region: 'West Tamil Nadu'  },
  salem:       { name: 'Salem',       state: 'Tamil Nadu', region: 'Central Tamil Nadu'},
  trichy:      { name: 'Trichy',      state: 'Tamil Nadu', region: 'Central Tamil Nadu'},
  tirunelveli: { name: 'Tirunelveli', state: 'Tamil Nadu', region: 'South Tamil Nadu' },
  erode:       { name: 'Erode',       state: 'Tamil Nadu', region: 'West Tamil Nadu'  },
}

// ── Metadata Generator ────────────────────────────────────────────────────────
export interface PageMetadataOptions {
  title: string
  description: string
  keywords: string[]
  slug: string
  ogTitle?: string
  ogDescription?: string
  ogImageAlt?: string
}

export function generateMetadata(opts: PageMetadataOptions): Metadata {
  const canonicalUrl = `${BUSINESS.baseUrl}/${opts.slug}`
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: opts.ogTitle ?? opts.title,
      description: opts.ogDescription ?? opts.description,
      url: canonicalUrl,
      siteName: BUSINESS.name,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: BUSINESS.logo, width: 512, height: 512, alt: opts.ogImageAlt ?? opts.title }],
    },
    twitter: {
      card: 'summary',
      title: opts.ogTitle ?? opts.title,
      description: opts.ogDescription ?? opts.description,
    },
  }
}

// ── Schema Generators ─────────────────────────────────────────────────────────

export interface ServiceOffer { name: string }

export function localBusinessSchema(opts: {
  slug: string
  name: string
  description: string
  city: string
  state: string
  priceRange?: string
  offers: ServiceOffer[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.baseUrl}/${opts.slug}#localbusiness`,
    name: opts.name,
    url: `${BUSINESS.baseUrl}/${opts.slug}`,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    description: opts.description,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: opts.priceRange ?? BUSINESS.priceRange,
    areaServed: {
      '@type': 'City',
      name: opts.city,
      containedInPlace: { '@type': 'State', name: opts.state },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.city,
      addressRegion: opts.state,
      addressCountry: 'IN',
    },
    makesOffer: opts.offers.map(o => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: o.name, areaServed: opts.city },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function articleSchema(opts: {
  slug: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: `${BUSINESS.baseUrl}/${opts.slug}`,
    image: BUSINESS.logo,
    author: { '@type': 'Organization', name: BUSINESS.name },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: { '@type': 'ImageObject', url: BUSINESS.logo },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    keywords: opts.keywords?.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BUSINESS.baseUrl}/${opts.slug}` },
  }
}

// ── Common Related Pages ──────────────────────────────────────────────────────
export const CORE_RELATED_PAGES = [
  { href: '/laptop-service-center-in-madurai',       label: 'Laptop Repair Madurai' },
  { href: '/computer-service-center-in-madurai',     label: 'Computer Service Madurai' },
  { href: '/chip-level-service-in-madurai',          label: 'Chip-Level Service Madurai' },
  { href: '/custom-gaming-pc-build-in-madurai',      label: 'Gaming PC Build Madurai' },
  { href: '/desktop-repair-service-in-madurai',      label: 'Desktop Repair Madurai' },
]

export const BRAND_REPAIR_PAGES = [
  { href: '/dell-laptop-repair-madurai',   label: 'Dell Laptop Repair' },
  { href: '/hp-laptop-repair-madurai',     label: 'HP Laptop Repair' },
  { href: '/lenovo-laptop-repair-madurai', label: 'Lenovo Laptop Repair' },
  { href: '/asus-laptop-repair-madurai',   label: 'Asus Laptop Repair' },
  { href: '/acer-laptop-repair-madurai',   label: 'Acer Laptop Repair' },
  { href: '/msi-gaming-laptop-repair-madurai', label: 'MSI Gaming Laptop Repair' },
]

export const COMPONENT_SERVICE_PAGES = [
  { href: '/motherboard-repair-madurai',            label: 'Motherboard Repair' },
  { href: '/ssd-upgrade-service-madurai',           label: 'SSD Upgrade Service' },
  { href: '/ram-upgrade-service-madurai',           label: 'RAM Upgrade Service' },
  { href: '/gpu-repair-service-madurai',            label: 'GPU Repair Service' },
  { href: '/thermal-paste-service-madurai',         label: 'Thermal Paste Service' },
  { href: '/laptop-heating-issue-repair-madurai',   label: 'Laptop Overheating Fix' },
]

export const SPECIALIST_SERVICE_PAGES = [
  { href: '/gaming-laptop-repair-madurai',          label: 'Gaming Laptop Repair' },
  { href: '/laptop-screen-replacement-madurai',     label: 'Laptop Screen Replacement' },
  { href: '/laptop-keyboard-repair-madurai',        label: 'Laptop Keyboard Repair' },
  { href: '/laptop-hinge-repair-madurai',           label: 'Laptop Hinge Repair' },
  { href: '/windows-installation-service-madurai',  label: 'Windows Installation' },
  { href: '/data-recovery-service-madurai',         label: 'Data Recovery Service' },
]

export const BUSINESS_SERVICE_PAGES = [
  { href: '/computer-amc-service-madurai',  label: 'Computer AMC Service' },
  { href: '/business-it-support-madurai',   label: 'Business IT Support' },
  { href: '/workstation-pc-build-madurai',  label: 'Workstation PC Build' },
  { href: '/rgb-gaming-pc-build-madurai',   label: 'RGB Gaming PC Build' },
  { href: '/budget-gaming-pc-build-madurai', label: 'Budget Gaming PC Build' },
]

export const BLOG_PAGES = [
  { href: '/blog/best-gaming-pc-build-under-50000',     label: 'Best Gaming PC Under ₹50,000' },
  { href: '/blog/how-to-fix-laptop-overheating',        label: 'Fix Laptop Overheating' },
  { href: '/blog/ssd-vs-hdd-for-gaming',                label: 'SSD vs HDD for Gaming' },
  { href: '/blog/common-dell-laptop-problems',          label: 'Common Dell Laptop Problems' },
  { href: '/blog/when-to-upgrade-ram',                  label: 'When to Upgrade RAM' },
  { href: '/blog/signs-of-motherboard-failure',         label: 'Signs of Motherboard Failure' },
  { href: '/blog/how-to-improve-gaming-pc-performance', label: 'Improve Gaming PC Performance' },
  { href: '/blog/laptop-battery-health-guide',          label: 'Laptop Battery Health Guide' },
  { href: '/blog/how-to-clean-laptop-fan',              label: 'How to Clean Laptop Fan' },
  { href: '/blog/gaming-laptop-heating-solutions',      label: 'Gaming Laptop Heating Solutions' },
]
