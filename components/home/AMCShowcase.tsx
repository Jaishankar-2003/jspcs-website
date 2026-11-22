'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Wallet,
  HardDrive,
  Users,
  Building2,
  Clock,
  Zap,
  AlertTriangle,
  Sparkles,
  PhoneCall,
  Laptop
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { AMC_PLANS } from '@/lib/amc-data'
import { waLink } from '@/lib/site-config'

const FLEET_SIZES = [
  { id: '1-pc', label: '1 PC / Laptop', recommended: 'home', tag: 'Personal & Student' },
  { id: '2-5-pc', label: '2 – 5 Systems', recommended: 'professional', tag: 'Freelancers & Studios' },
  { id: '6-15-pc', label: '6 – 15 Systems', recommended: 'small-business', tag: 'Offices & Clinics' },
  { id: '16-30-pc', label: '16 – 30 Systems', recommended: 'small-business', tag: 'Commercial Teams' },
  { id: '30-plus', label: '30+ Systems', recommended: 'custom', tag: 'Institutions & Multi-Branch' },
]

const AMC_PILLARS = [
  {
    icon: Wrench,
    title: 'Thermal & Physical Deep Clean',
    desc: 'Anti-static blower dust extraction and high-conductivity thermal paste replacement to eliminate thermal throttling.',
  },
  {
    icon: Zap,
    title: 'OS & Performance Tuning',
    desc: 'Purging background bloatware, cleaning startup queues, and fine-tuning storage trims for snappy day-to-day operation.',
  },
  {
    icon: ShieldCheck,
    title: 'Malware & Security Hardening',
    desc: 'Real-time antivirus updates, critical OS patches, and firewall audits to guard against ransomware threats.',
  },
  {
    icon: HardDrive,
    title: 'Storage Health & Backup Audit',
    desc: 'SMART telemetry checks on NVMe/SSD wear levels and automated backup integrity verification to prevent catastrophic data loss.',
  },
  {
    icon: Building2,
    title: 'LAN, Wi-Fi & Network Printers',
    desc: 'Seamless file sharing, router channel optimization, and zero-headache office network printer setup.',
  },
  {
    icon: Clock,
    title: 'Rapid SLA & Remote Helpdesk',
    desc: 'Direct WhatsApp engineer line and instant remote desktop support for quick software glitches without waiting.',
  },
]

export default function AMCShowcase() {
  const [activeAudience, setActiveAudience] = useState<'business' | 'home'>('business')
  const [selectedFleet, setSelectedFleet] = useState('6-15-pc')

  const currentFleetObj = FLEET_SIZES.find(f => f.id === selectedFleet) || FLEET_SIZES[2]
  const highlightedPlanId = currentFleetObj.recommended

  const filteredPlans = activeAudience === 'business'
    ? AMC_PLANS.filter(p => p.id === 'small-business' || p.id === 'custom' || p.id === 'professional')
    : AMC_PLANS.filter(p => p.id === 'home' || p.id === 'professional')

  return (
    <section id="amc" aria-labelledby="amc-heading" className="py-16 sm:py-28 bg-[#FAF9F6] border-t border-[#EAE6DC] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ── Section Header with Value Proposition ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-ivory-200 pb-8">
          <div className="max-w-2xl">
            <SectionHeader
              id="amc-heading"
              eyebrow="Annual Maintenance Contracts (AMC)"
              title={
                <>
                  Keep Your Systems Running.{' '}
                  <span className="text-burnt-500">Don&apos;t Wait For Them To Fail.</span>
                </>
              }
              description="Proactive IT maintenance, rapid on-site technician response, and zero unexpected downtime. Designed for offices, studios, clinics, and mission-critical professionals in Madurai."
            />
          </div>

          {/* Quick Audience Toggle */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-ivory-200/70 border border-ivory-300 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setActiveAudience('business')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeAudience === 'business'
                  ? 'bg-graphite-900 text-white shadow-md'
                  : 'text-graphite-700 hover:text-graphite-900'
              }`}
            >
              <Building2 className="w-4 h-4 text-burnt-400" />
              Offices &amp; Businesses
            </button>
            <button
              type="button"
              onClick={() => setActiveAudience('home')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeAudience === 'home'
                  ? 'bg-graphite-900 text-white shadow-md'
                  : 'text-graphite-700 hover:text-graphite-900'
              }`}
            >
              <Users className="w-4 h-4 text-burnt-400" />
              Freelancers &amp; Homes
            </button>
          </div>
        </div>

        {/* ── Interactive Fleet Selector Card ── */}
        <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-ivory-200 pb-5">
            <div>
              <span className="font-mono text-xs font-bold text-burnt-600 uppercase tracking-wider">
                Fleet Estimator &amp; Recommendation
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-graphite-900 mt-1">
                How many computers do you need supported?
              </h3>
            </div>
            <span className="text-xs font-mono text-warmgrey-500">
              Click to preview optimal coverage
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mt-5">
            {FLEET_SIZES.map(f => {
              const active = selectedFleet === f.id
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFleet(f.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all ${
                    active
                      ? 'border-burnt-500 bg-burnt-50/50 shadow-md ring-2 ring-burnt-500/20'
                      : 'border-ivory-200 bg-ivory-50/50 hover:border-burnt-400/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm sm:text-base font-bold text-graphite-900">
                      {f.label}
                    </span>
                    {active && <Check className="w-4 h-4 text-burnt-600" />}
                  </div>
                  <span className="block text-[11px] text-warmgrey-500 mt-1 font-semibold">
                    {f.tag}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Dynamic Recommendation Banner */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-graphite-950 to-graphite-900 text-ivory-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-burnt-500 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-burnt-400 font-bold uppercase tracking-wider">
                  Recommended For {currentFleetObj.label}:
                </p>
                <p className="text-base font-bold text-white">
                  {AMC_PLANS.find(p => p.id === highlightedPlanId)?.name} (Plan {AMC_PLANS.find(p => p.id === highlightedPlanId)?.letter})
                </p>
              </div>
            </div>

            <a
              href={waLink(`Hi JSPCS, I would like to get an AMC quote for my ${currentFleetObj.label} (${currentFleetObj.tag}) in Madurai. Please share the details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-bold text-sm shadow-md transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" /> Get Quote for {currentFleetObj.label}
            </a>
          </div>
        </div>

        {/* ── High-Contrast Visual Comparison: Breakdown Mode vs JSPCS AMC ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Breakdown Mode */}
          <div className="rounded-3xl bg-white border border-red-200/80 p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 text-red-600 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Without AMC: Breakdown Mode
              </span>
            </div>
            <h4 className="text-lg font-bold text-graphite-900 mb-2">
              Costly Surprises &amp; Work Paralysis
            </h4>
            <p className="text-xs text-warmgrey-500 leading-relaxed mb-4">
              Waiting until a computer shuts down completely costs 3x more in lost billable hours and emergency repairs.
            </p>
            <ul className="space-y-2.5 text-xs text-graphite-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Unplanned downtime during critical deadlines or client office hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Motherboard failure caused by months of choked fans and dried thermal paste.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Silent SSD degradation that goes unnoticed until photos or business data vanish.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Random technicians with inconsistent skills and unpredictable diagnostic bills.</span>
              </li>
            </ul>
          </div>

          {/* Proactive JSPCS AMC */}
          <div className="rounded-3xl bg-graphite-950 text-white border border-graphite-800 p-6 sm:p-7 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-burnt-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2.5 text-burnt-400 mb-3">
              <div className="w-8 h-8 rounded-lg bg-burnt-500/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-burnt-400" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                With JSPCS: Proactive IT Care
              </span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              Zero Headache &amp; Predictable Uptime
            </h4>
            <p className="text-xs text-ivory-300/70 leading-relaxed mb-4">
              We monitor, deep clean, and protect your systems so you never lose a working day to hardware issues.
            </p>
            <ul className="space-y-2.5 text-xs text-ivory-200">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span>Priority response time from a dedicated senior hardware engineer who knows your setup.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span>Quarterly scheduled preventive servicing with industrial dust blowout and thermal repasting.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span>Storage health audits and automated backup verification to ensure total data safety.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-sage-400 shrink-0 mt-0.5" />
                <span>Predictable, fixed annual budget with discounted parts and zero surprise labor bills.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── AMC Plans Grid ── */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs font-bold text-burnt-600 uppercase tracking-wider">
                Available Tiers
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-graphite-900 mt-1">
                Choose the AMC Plan for Your Workflow
              </h3>
            </div>
            <Link
              href="/computer-amc-service-madurai#amc-plans"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-burnt-600 hover:text-burnt-700 font-mono"
            >
              Full SLA Comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map(plan => {
              const isSelectedByFleet = plan.id === highlightedPlanId
              const isSmallBusiness = plan.id === 'small-business'

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 ${
                    isSelectedByFleet || isSmallBusiness
                      ? 'bg-white border-burnt-500 shadow-xl ring-2 ring-burnt-500/20'
                      : 'bg-white border-ivory-200 hover:border-ivory-300 shadow-sm'
                  }`}
                >
                  {/* Badge */}
                  {(isSelectedByFleet || isSmallBusiness) && (
                    <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-burnt-500 text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                      {isSelectedByFleet ? '★ Recommended For Your Fleet' : '★ Most Popular For Teams'}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-burnt-600 tracking-wider">
                      PLAN {plan.letter}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-warmgrey-400 bg-ivory-100 px-2 py-0.5 rounded-md">
                      {plan.forWho[0]}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-graphite-900 mt-2">
                    {plan.name}
                  </h4>
                  <p className="text-xs text-warmgrey-500 leading-relaxed mt-1">
                    {plan.tagline}
                  </p>

                  {/* Coverage bullets */}
                  <div className="mt-5 pt-5 border-t border-ivory-200/80 space-y-2.5 flex-1">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-graphite-700">
                      Included in Plan:
                    </p>
                    {plan.coverage.slice(0, 6).map(item => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-graphite-800">
                        <Check className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-5 border-t border-ivory-200/80 space-y-2">
                    <a
                      href={waLink(`Hi JSPCS, I want to inquire about the "${plan.name}" (Plan ${plan.letter}) for my setup in Madurai. Please share terms and quote.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl text-sm font-bold transition-all ${
                        isSelectedByFleet || isSmallBusiness
                          ? 'bg-burnt-500 hover:bg-burnt-600 text-white shadow-md shadow-burnt-500/20'
                          : 'bg-graphite-900 hover:bg-graphite-800 text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" /> Request Plan {plan.letter} Quote
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── The 6 Pillars of AMC Maintenance ── */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold text-burnt-600 uppercase tracking-wider">
              Engineering Protocol
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-graphite-900">
              What We Actually Do During an AMC Visit
            </h3>
            <p className="text-xs sm:text-sm text-warmgrey-500">
              We do not just wipe down monitors. Every visit follows a rigorous 6-point hardware and software hygiene standard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AMC_PILLARS.map((p, idx) => {
              const Icon = p.icon
              return (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-ivory-200 space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-burnt-50 text-burnt-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-graphite-900">{p.title}</h4>
                  <p className="text-xs text-warmgrey-500 leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom Direct Contact Strip ── */}
        <div className="rounded-3xl bg-white border border-ivory-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-graphite-900">
              Have unique requirements or multi-branch offices?
            </h4>
            <p className="text-xs sm:text-sm text-warmgrey-500">
              Speak directly with our technical director at <strong>9842139997</strong> for custom SLA terms and on-site audit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:9842139997"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl border border-ivory-300 bg-ivory-50 text-graphite-900 font-bold text-sm hover:bg-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-burnt-500" /> Call 9842139997
            </a>
            <Link
              href="/computer-amc-service-madurai"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-white font-bold text-sm transition-colors"
            >
              Full AMC Agreement Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
