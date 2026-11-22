'use client'

import React, { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  MessageCircle,
  RotateCcw,
  Phone,
  Gamepad2,
  Film,
  Code2,
  Building2,
  Sparkles,
  TrendingUp,
  MapPin,
  Server,
  Monitor,
  Layers,
  Cpu,
  Tv,
  Palette,
  Maximize2,
  CheckCircle2
} from 'lucide-react'
import { waLink } from '@/lib/site-config'

interface PurposeMeta {
  title: string
  subtitle: string
  badge: string
  icon: React.ComponentType<{ className?: string }>
}

const PURPOSE_DETAILS: Record<string, PurposeMeta> = {
  Gaming: {
    title: 'Gaming & Esports',
    subtitle: 'High FPS 1080p, 1440p or 4K. Zero thermal throttling.',
    badge: 'High GPU',
    icon: Gamepad2,
  },
  'Video Editing': {
    title: 'Video Editing & 3D',
    subtitle: 'Premiere, DaVinci, After Effects, 4K scrubbing & quick exports.',
    badge: 'RAM + VRAM',
    icon: Film,
  },
  'Software Development': {
    title: 'Software & DevOps',
    subtitle: 'Fast builds, multi-container Docker, IDEs & local VMs.',
    badge: 'CPU + RAM',
    icon: Code2,
  },
  'Architecture / CAD': {
    title: 'Architecture & CAD',
    subtitle: 'AutoCAD, Revit, SketchUp, Lumion & certified viewport stability.',
    badge: 'Single-Core + GPU',
    icon: Building2,
  },
  'AI / Machine Learning': {
    title: 'AI & Data Science',
    subtitle: 'PyTorch, CUDA, local LLMs, Stable Diffusion & high VRAM.',
    badge: 'CUDA Heavy',
    icon: Sparkles,
  },
  Trading: {
    title: 'Stock & F&O Trading',
    subtitle: 'Multi-monitor setup, zero lag, high uptime & silent operation.',
    badge: 'Multi-Display',
    icon: TrendingUp,
  },
  GIS: {
    title: 'GIS & Spatial Mapping',
    subtitle: 'ArcGIS Pro, QGIS, big raster processing & high RAM capacity.',
    badge: 'High Memory',
    icon: MapPin,
  },
  'Server / Virtualization': {
    title: 'Home Server & NAS',
    subtitle: 'TrueNAS, Proxmox, 24/7 reliability, ECC & redundant storage.',
    badge: 'Always-On',
    icon: Server,
  },
  'General Use': {
    title: 'Everyday Work & Study',
    subtitle: 'Smooth browsing, Office apps, Zoom calls & future-proof speed.',
    badge: 'Balanced',
    icon: Monitor,
  },
  'Multiple Workloads': {
    title: 'Custom Multi-Tasking',
    subtitle: 'Balanced hybrid setup tuned for work by day, gaming by night.',
    badge: 'Versatile',
    icon: Layers,
  },
}

const BUDGET_TIERS = [
  {
    range: 'Under ₹50,000',
    title: 'Entry 1080p / Office Workhorse',
    desc: 'Solid eSports (CS2, Valorant 100+ FPS) or fast office & study PC.',
  },
  {
    range: '₹50,000 – ₹80,000',
    title: 'Sweet Spot 1080p Ultra / 2K Starter',
    desc: 'AAA gaming at 60–100 FPS, smooth 1080p video editing, fast coding.',
  },
  {
    range: '₹80,000 – ₹1.2 lakh',
    title: 'Competitive 1440p / 4K Creator',
    desc: '1440p high refresh rate, DaVinci/Premiere timeline playback, Docker labs.',
  },
  {
    range: '₹1.2 – ₹2 lakh',
    title: 'Heavy 3D Render / High VRAM Workstation',
    desc: 'RTX 4070 Ti / 4080 tier, 3D modeling, Blender cycles & AI inference.',
  },
  {
    range: 'Above ₹2 lakh',
    title: 'Flagship Apex / Local AI & 4K Max',
    desc: 'RTX 4090 / dual GPU class, local LLM fine-tuning, liquid custom loops.',
  },
  {
    range: 'Not sure – advise me',
    title: 'Expert Recommendation',
    desc: 'We will recommend the best value hardware for your specific software.',
  },
]

const CPU_OPTIONS = [
  { id: 'intel', name: 'Intel Core', desc: 'Strong single-core IPC & QuickSync video encode' },
  { id: 'amd', name: 'AMD Ryzen', desc: 'High efficiency, big L3 cache (X3D) & AM5 upgrade path' },
  { id: 'nopref', name: 'Best Value', desc: 'JSPCS engineers pick the highest value CPU for the budget' },
]

const GPU_OPTIONS = [
  { id: 'nvidia', name: 'NVIDIA GeForce RTX', desc: 'DLSS 3.7, Ray Tracing, CUDA acceleration & NVENC' },
  { id: 'amd_gpu', name: 'AMD Radeon RX', desc: 'Raw raster performance & generous VRAM per rupee' },
  { id: 'integrated', name: 'Integrated Graphics', desc: 'Display output without dedicated GPU – saves budget' },
  { id: 'nopref_gpu', name: 'Advise Me', desc: 'Pick the optimal GPU matching my monitor resolution' },
]

const AESTHETIC_OPTIONS = [
  { id: 'stealth', name: 'Stealth Black', desc: 'Clean, matte black, minimal or zero RGB glow' },
  { id: 'argb', name: 'Vibrant ARGB', desc: 'Synchronized RGB fans & addressable interior illumination' },
  { id: 'white', name: 'Snow White Edition', desc: 'All-white chassis, motherboard accents & white cooling' },
]

const FORM_FACTOR_OPTIONS = [
  { id: 'standard', name: 'Mid / Full Tower', desc: 'Maximum airflow, easiest upgradability & room for 3-fan GPUs' },
  { id: 'compact', name: 'Compact ITX / SFF', desc: 'Space-saving small footprint for clean minimalist desks' },
  { id: 'silent', name: 'Silent / Acoustic Tuned', desc: 'Sound-damped panels & whisper-quiet fan curves (<25dB)' },
]

const STEPS = [
  { label: 'Purpose', desc: 'What will you do?' },
  { label: 'Budget', desc: 'Target budget' },
  { label: 'Preferences', desc: 'Hardware & styling' },
  { label: 'Summary', desc: 'Your build ticket' },
]

interface BuildInquiryProps {
  initialPurpose?: string
  compact?: boolean
}

export default function BuildInquiry({ initialPurpose, compact = false }: BuildInquiryProps) {
  const [step, setStep] = useState(0)
  const [purposes, setPurposes] = useState<string[]>(initialPurpose ? [initialPurpose] : ['Gaming'])
  const [budget, setBudget] = useState('₹80,000 – ₹1.2 lakh')
  const [customBudget, setCustomBudget] = useState('')
  const [cpuPref, setCpuPref] = useState('nopref')
  const [gpuPref, setGpuPref] = useState('nvidia')
  const [aesthetic, setAesthetic] = useState('stealth')
  const [formFactor, setFormFactor] = useState('standard')
  const [needMonitor, setNeedMonitor] = useState(false)
  const [existing, setExisting] = useState('')
  const [notes, setNotes] = useState('')
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)

  const togglePurpose = (p: string) => {
    setPurposes(prev => {
      if (prev.includes(p)) {
        if (prev.length === 1) return prev // keep at least one
        return prev.filter(x => x !== p)
      }
      return [...prev, p]
    })
  }

  const activeBudget = customBudget.trim() ? `₹${customBudget.trim().replace(/^₹/, '')}` : budget

  const cpuName = CPU_OPTIONS.find(o => o.id === cpuPref)?.name || 'Best Value'
  const gpuName = GPU_OPTIONS.find(o => o.id === gpuPref)?.name || 'Advise Me'
  const aestheticName = AESTHETIC_OPTIONS.find(o => o.id === aesthetic)?.name || 'Stealth Black'
  const formFactorName = FORM_FACTOR_OPTIONS.find(o => o.id === formFactor)?.name || 'Standard Tower'

  const summary = useMemo(() => {
    const lines = [
      '⚡ *JSPCS CUSTOM PC BUILD INQUIRY*',
      '----------------------------------------',
    ]
    if (name.trim()) lines.push(`👤 Client: ${name.trim()}`)
    lines.push(`🎯 Purpose: ${purposes.join(', ')}`)
    lines.push(`💰 Budget: ${activeBudget}`)
    lines.push(`⚙️ CPU Preference: ${cpuName}`)
    lines.push(`🎮 GPU Preference: ${gpuName}`)
    lines.push(`✨ Aesthetic: ${aestheticName}`)
    lines.push(`📦 Form Factor: ${formFactorName}`)
    lines.push(`🖥️ Monitor Needed: ${needMonitor ? 'Yes, please quote monitor' : 'Already have monitor'}`)
    if (existing.trim()) lines.push(`♻️ Parts to Reuse: ${existing.trim()}`)
    if (notes.trim()) lines.push(`📝 Software / Games / Notes: ${notes.trim()}`)
    lines.push('----------------------------------------')
    lines.push('Please suggest a recommended parts list & quote. Thank you!')
    return lines.join('\n')
  }, [name, purposes, activeBudget, cpuName, gpuName, aestheticName, formFactorName, needMonitor, existing, notes])

  const canNext = purposes.length > 0

  const reset = () => {
    setStep(0)
    setPurposes(initialPurpose ? [initialPurpose] : ['Gaming'])
    setBudget('₹80,000 – ₹1.2 lakh')
    setCustomBudget('')
    setCpuPref('nopref')
    setGpuPref('nvidia')
    setAesthetic('stealth')
    setFormFactor('standard')
    setNeedMonitor(false)
    setExisting('')
    setNotes('')
    setName('')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className={`rounded-3xl bg-white border border-[#EAE6DC] shadow-xl overflow-hidden ${compact ? 'p-4 sm:p-6' : 'p-4 sm:p-8 md:p-10'}`}>
      
      {/* ── Responsive Stepper Navigation ── */}
      {/* Mobile Stepper (< sm screens): Clean indicator badge with no truncated text */}
      <div className="block sm:hidden mb-6">
        <div className="flex items-center justify-between gap-3 bg-ivory-100 p-3 rounded-2xl border border-ivory-200">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-burnt-500 text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm shadow-burnt-500/30">
              {step + 1}
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-burnt-600 block">
                Step {step + 1} of 4
              </span>
              <span className="text-xs font-bold text-graphite-900 block leading-tight">
                {STEPS[step].label}: {STEPS[step].desc}
              </span>
            </div>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === step
                    ? 'bg-burnt-500 ring-2 ring-burnt-500/30'
                    : i < step
                    ? 'bg-sage-600'
                    : 'bg-ivory-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Stepper (sm+ screens): Full 4-column timeline */}
      <div className="hidden sm:block mb-8">
        <ol className="grid grid-cols-4 gap-4" aria-label="Build inquiry progress">
          {STEPS.map((s, i) => {
            const isCompleted = i < step
            const isCurrent = i === step
            return (
              <li
                key={s.label}
                onClick={() => i < step && setStep(i)}
                className={`flex flex-col gap-1.5 transition-all ${i < step ? 'cursor-pointer hover:opacity-80' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      isCurrent
                        ? 'bg-burnt-500 text-white shadow-md shadow-burnt-500/30'
                        : isCompleted
                        ? 'bg-sage-600 text-white'
                        : 'bg-ivory-200 text-warmgrey-500'
                    }`}
                  >
                    {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs md:text-sm font-bold whitespace-nowrap ${
                      isCurrent ? 'text-graphite-900' : isCompleted ? 'text-graphite-700' : 'text-warmgrey-400'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isCurrent ? 'bg-burnt-500' : isCompleted ? 'bg-sage-500' : 'bg-ivory-200'
                  }`}
                />
              </li>
            )
          })}
        </ol>
      </div>

      {/* ── Step 1: Workload Purpose Cards ── */}
      {step === 0 && (
        <fieldset className="space-y-5 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-ivory-200 pb-4">
            <div>
              <legend className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight">
                What will you use the PC for?
              </legend>
              <p className="text-xs sm:text-sm text-graphite-600 mt-1">
                Select one or more workloads. We balance GPU, CPU and memory accordingly.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-burnt-600 bg-burnt-50 px-2.5 py-1 rounded-full border border-burnt-200 self-start sm:self-auto">
              {purposes.length} selected
            </span>
          </div>

          {/* Responsive Purpose Cards Grid: 1 col on mobile, 2 on tablet, 3 on laptop, 5 on monitor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-3.5">
            {Object.entries(PURPOSE_DETAILS).map(([key, meta]) => {
              const active = purposes.includes(key)
              const Icon = meta.icon
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => togglePurpose(key)}
                  className={`group relative text-left p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between h-full min-h-[140px] sm:min-h-[165px] ${
                    active
                      ? 'border-burnt-500 bg-gradient-to-b from-burnt-50/50 to-white shadow-md ring-2 ring-burnt-500/20'
                      : 'border-ivory-200 bg-white hover:border-burnt-400/50 hover:bg-ivory-50/50 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        active
                          ? 'bg-burnt-500 text-white shadow-sm shadow-burnt-500/30'
                          : 'bg-ivory-100 text-graphite-700 group-hover:bg-burnt-50 group-hover:text-burnt-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-burnt-700 bg-burnt-100/80 px-2 py-0.5 rounded uppercase">
                        {meta.badge}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                          active
                            ? 'border-burnt-500 bg-burnt-500 text-white'
                            : 'border-ivory-300 bg-white group-hover:border-warmgrey-400'
                        }`}
                      >
                        {active && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </div>

                  <div className="my-2.5 flex-1 flex flex-col justify-center">
                    <span className="font-bold text-sm sm:text-base text-graphite-900 group-hover:text-burnt-600 leading-snug block">
                      {meta.title}
                    </span>
                    <p className="text-xs text-graphite-600 mt-1 leading-relaxed">
                      {meta.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-ivory-200/70 flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-semibold text-warmgrey-400">
                      {meta.badge}
                    </span>
                    {active ? (
                      <span className="text-[10px] font-bold text-burnt-600 font-mono tracking-wider">
                        ✓ SELECTED
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-warmgrey-400 group-hover:text-graphite-600">
                        Select
                      </span>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </fieldset>
      )}

      {/* ── Step 2: Budget Range Cards ── */}
      {step === 1 && (
        <fieldset className="space-y-6 animate-fadeIn">
          <div className="border-b border-ivory-200 pb-4">
            <legend className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight">
              What is your approximate budget?
            </legend>
            <p className="text-xs sm:text-sm text-graphite-600 mt-1">
              Every build at JSPCS is planned to extract maximum FPS and render speed from your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BUDGET_TIERS.map(b => {
              const active = budget === b.range && !customBudget
              return (
                <button
                  key={b.range}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setBudget(b.range)
                    setCustomBudget('')
                  }}
                  className={`group relative text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between ${
                    active
                      ? 'border-burnt-500 bg-gradient-to-b from-burnt-50/50 to-white shadow-md ring-2 ring-burnt-500/20'
                      : 'border-ivory-200 bg-white hover:border-burnt-400/50 hover:bg-ivory-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-base sm:text-lg font-black text-graphite-900 group-hover:text-burnt-600 block">
                        {b.range}
                      </span>
                      <p className="text-xs font-bold text-burnt-600 mt-0.5">
                        {b.title}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        active
                          ? 'bg-burnt-500 border-burnt-500 text-white'
                          : 'border-ivory-300 bg-white'
                      }`}
                    >
                      {active && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                  <p className="text-xs text-graphite-600 leading-relaxed mt-2">
                    {b.desc}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Custom Budget Input */}
          <div className="p-4 sm:p-5 rounded-2xl bg-ivory-100 border border-ivory-200">
            <label className="block">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 mb-2">
                Or enter your exact custom budget
              </span>
              <div className="relative max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-graphite-600 text-base">
                  ₹
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={customBudget}
                  onChange={e => setCustomBudget(e.target.value)}
                  placeholder="e.g. 75,000 or 1,35,000"
                  className="w-full min-h-[50px] pl-8 pr-4 rounded-xl border border-ivory-300 bg-white text-base font-semibold text-graphite-900 focus:outline-none focus:border-burnt-500 focus:ring-2 focus:ring-burnt-500/20"
                />
              </div>
              {customBudget && (
                <p className="text-xs font-bold text-burnt-600 mt-2">
                  Active custom budget: ₹{customBudget.replace(/^₹/, '')}
                </p>
              )}
            </label>
          </div>
        </fieldset>
      )}

      {/* ── Step 3: Hardware & Aesthetic Preferences ── */}
      {step === 2 && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-ivory-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight">
              Hardware Preferences & Aesthetics
            </h3>
            <p className="text-xs sm:text-sm text-graphite-600 mt-1">
              Have specific brand preferences or styling in mind? Pick below or leave on &quot;Best Value&quot;.
            </p>
          </div>

          {/* Processor Choice */}
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-graphite-800">
              <Cpu className="w-4 h-4 text-burnt-500" /> Processor Platform
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {CPU_OPTIONS.map(opt => {
                const active = cpuPref === opt.id
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCpuPref(opt.id)}
                    className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                      active
                        ? 'border-burnt-500 bg-burnt-50/40 ring-1 ring-burnt-500/20'
                        : 'border-ivory-200 bg-white hover:border-ivory-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-graphite-900">{opt.name}</span>
                      {active && <CheckCircle2 className="w-4 h-4 text-burnt-500" />}
                    </div>
                    <p className="text-xs text-graphite-600 mt-1 leading-snug">{opt.desc}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Graphics Card Choice */}
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-graphite-800">
              <Tv className="w-4 h-4 text-burnt-500" /> Graphics Card (GPU)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {GPU_OPTIONS.map(opt => {
                const active = gpuPref === opt.id
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setGpuPref(opt.id)}
                    className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                      active
                        ? 'border-burnt-500 bg-burnt-50/40 ring-1 ring-burnt-500/20'
                        : 'border-ivory-200 bg-white hover:border-ivory-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-graphite-900">{opt.name}</span>
                      {active && <CheckCircle2 className="w-4 h-4 text-burnt-500" />}
                    </div>
                    <p className="text-xs text-graphite-600 mt-1 leading-snug">{opt.desc}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Aesthetic & Theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-graphite-800">
                <Palette className="w-4 h-4 text-burnt-500" /> Build Aesthetic
              </label>
              <div className="space-y-2">
                {AESTHETIC_OPTIONS.map(opt => {
                  const active = aesthetic === opt.id
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAesthetic(opt.id)}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                        active
                          ? 'border-burnt-500 bg-burnt-50/40'
                          : 'border-ivory-200 bg-white hover:border-ivory-300'
                      }`}
                    >
                      <div>
                        <span className="font-bold text-sm text-graphite-900">{opt.name}</span>
                        <p className="text-xs text-graphite-600 mt-0.5">{opt.desc}</p>
                      </div>
                      {active && <CheckCircle2 className="w-4 h-4 text-burnt-500 shrink-0" />}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-graphite-800">
                <Maximize2 className="w-4 h-4 text-burnt-500" /> Form Factor & Acoustics
              </label>
              <div className="space-y-2">
                {FORM_FACTOR_OPTIONS.map(opt => {
                  const active = formFactor === opt.id
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormFactor(opt.id)}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                        active
                          ? 'border-burnt-500 bg-burnt-50/40'
                          : 'border-ivory-200 bg-white hover:border-ivory-300'
                      }`}
                    >
                      <div>
                        <span className="font-bold text-sm text-graphite-900">{opt.name}</span>
                        <p className="text-xs text-graphite-600 mt-0.5">{opt.desc}</p>
                      </div>
                      {active && <CheckCircle2 className="w-4 h-4 text-burnt-500 shrink-0" />}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Monitor Checkbox */}
          <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-sm text-graphite-900">Include a Monitor in the Quote?</span>
              <p className="text-xs text-graphite-600 mt-0.5">We match high-refresh 144Hz/180Hz gaming monitors or color-accurate IPS panels.</p>
            </div>
            <button
              type="button"
              onClick={() => setNeedMonitor(!needMonitor)}
              className={`min-h-[42px] px-4 rounded-xl text-xs font-bold font-mono transition-colors border ${
                needMonitor
                  ? 'bg-burnt-500 text-white border-burnt-500 shadow-sm'
                  : 'bg-white text-graphite-800 border-ivory-300 hover:border-burnt-400'
              }`}
            >
              {needMonitor ? '✓ YES, INCLUDE MONITOR' : '+ ADD MONITOR'}
            </button>
          </div>

          {/* Additional details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <label className="block">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5">
                Existing parts to reuse (optional)
              </span>
              <input
                value={existing}
                onChange={e => setExisting(e.target.value)}
                placeholder="e.g. 1TB SSD, 650W PSU, 27-inch monitor"
                className="w-full min-h-[48px] px-4 rounded-xl border border-ivory-300 bg-white text-sm focus:outline-none focus:border-burnt-500 focus:ring-2 focus:ring-burnt-500/20"
              />
            </label>
            <label className="block">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5">
                Specific software or games (optional)
              </span>
              <input
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="e.g. Valorant, DaVinci Resolve Studio, Revit, PyTorch"
                className="w-full min-h-[48px] px-4 rounded-xl border border-ivory-300 bg-white text-sm focus:outline-none focus:border-burnt-500 focus:ring-2 focus:ring-burnt-500/20"
              />
            </label>
          </div>
        </div>
      )}

      {/* ── Step 4: Summary & Atelier Ticket (Polished, Clean & De-congested) ── */}
      {step === 3 && (
        <div className="space-y-6 animate-fadeIn pb-4">
          <div className="border-b border-ivory-200 pb-4">
            <span className="px-2.5 py-1 rounded-full bg-burnt-100 text-burnt-700 font-mono text-[11px] font-bold uppercase tracking-wider">
              Step 4 of 4
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-graphite-900 tracking-tight mt-2">
              Your Custom PC Build Ticket
            </h3>
            <p className="text-xs sm:text-sm text-graphite-600 mt-1">
              Review your configuration. Click below to send directly to our senior hardware technician on WhatsApp for an itemized quote.
            </p>
          </div>

          <label className="block max-w-sm">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-graphite-800 mb-1.5">
              Your Name (Optional)
            </span>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Karthikeyan"
              className="w-full min-h-[46px] px-4 rounded-xl border border-ivory-300 bg-white text-sm font-semibold focus:outline-none focus:border-burnt-500 focus:ring-2 focus:ring-burnt-500/20"
            />
          </label>

          {/* Luxury Atelier Ticket Card - Perfectly aligned, no squished text, no scrollbars */}
          <div className="rounded-3xl bg-graphite-950 text-ivory-100 border border-graphite-800 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-burnt-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-burnt-500 animate-pulse" />
                  <p className="font-mono text-[11px] font-bold text-burnt-400 uppercase tracking-wider">
                    JSPCS ATELIER // SPECIFICATION TICKET
                  </p>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                  Tailored System Blueprint
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[11px] font-mono text-ivory-200 self-start sm:self-auto">
                ● Direct Bench Review
              </span>
            </div>

            {/* Clean Itemized Spec Sheet */}
            <div className="py-4 space-y-3 text-xs sm:text-sm">
              {name.trim() && (
                <div className="flex items-center justify-between gap-2 py-1.5 border-b border-white/5">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase">Client</span>
                  <span className="font-bold text-white text-sm">{name.trim()}</span>
                </div>
              )}

              {/* Primary Workload - Full badges, no awkward truncation */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 py-2 border-b border-white/5">
                <span className="text-ivory-400/70 font-mono text-xs uppercase shrink-0 pt-1">
                  Primary Workload
                </span>
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {purposes.map(p => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-lg bg-burnt-500/20 border border-burnt-500/40 text-burnt-300 font-bold text-xs"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Budget */}
              <div className="flex items-center justify-between gap-2 py-2 border-b border-white/5">
                <span className="text-ivory-400/70 font-mono text-xs uppercase">Target Budget</span>
                <span className="font-mono font-black text-base sm:text-lg text-burnt-400">
                  {activeBudget}
                </span>
              </div>

              {/* Hardware Platform */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2 border-b border-white/5">
                <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase">Processor:</span>
                  <span className="font-bold text-white">{cpuName}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase">Graphics GPU:</span>
                  <span className="font-bold text-white">{gpuName}</span>
                </div>
              </div>

              {/* Styling & Chassis */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-2 border-b border-white/5">
                <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase">Aesthetic:</span>
                  <span className="font-semibold text-white">{aestheticName}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase">Form Factor:</span>
                  <span className="font-semibold text-white">{formFactorName}</span>
                </div>
              </div>

              {/* Monitor */}
              <div className="flex items-center justify-between gap-2 py-2 border-b border-white/5">
                <span className="text-ivory-400/70 font-mono text-xs uppercase">Monitor</span>
                <span className="font-semibold text-white">
                  {needMonitor ? '✓ Please include monitor in quote' : 'Existing monitor'}
                </span>
              </div>

              {/* Reused Parts */}
              {existing.trim() && (
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-1.5 border-b border-white/5">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase shrink-0">Parts to Reuse</span>
                  <span className="text-ivory-200 sm:text-right font-medium">{existing.trim()}</span>
                </div>
              )}

              {/* Software / Notes */}
              {notes.trim() && (
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-1.5 border-b border-white/5">
                  <span className="text-ivory-400/70 font-mono text-xs uppercase shrink-0">Software / Games</span>
                  <span className="text-ivory-200 sm:text-right font-medium">{notes.trim()}</span>
                </div>
              )}
            </div>

            {/* Sub-footer */}
            <div className="pt-2 text-[10px] font-mono text-ivory-400/60 flex items-center justify-between">
              <span>● READY FOR TECHNICIAN DISPATCH</span>
              <span>FREE ADVISORY • NO OBLIGATION</span>
            </div>
          </div>

          {/* Action CTAs - Spacious & touch-friendly */}
          <div className="space-y-3 pt-2">
            <a
              href={waLink(summary)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 min-h-[54px] px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-bold text-base shadow-lg shadow-[#25D366]/25 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              Send Build Ticket on WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 rounded-xl border border-ivory-300 bg-white text-graphite-900 font-bold text-xs sm:text-sm hover:border-burnt-500 hover:text-burnt-600 transition-colors shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-sage-600 stroke-[3]" /> : <Copy className="w-4 h-4 text-graphite-600" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Ticket'}</span>
              </button>

              <a
                href="tel:9842139997"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 rounded-xl border border-ivory-300 bg-ivory-50 text-graphite-900 font-bold text-xs sm:text-sm hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 text-burnt-500" />
                <span>Call 9842139997</span>
              </a>
            </div>

            <div className="text-center pt-1">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-warmgrey-500 hover:text-graphite-900 transition-colors py-2"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Start Over / Edit Blueprint
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Navigation Footer ── */}
      {step < 3 && (
        <div className="flex items-center justify-between gap-3 mt-8 pt-5 border-t border-ivory-200">
          <button
            type="button"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 min-h-[46px] px-4 rounded-xl text-sm font-semibold text-graphite-700 hover:text-graphite-900 disabled:opacity-0 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2.5">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(3)}
                className="hidden sm:inline-flex min-h-[46px] items-center px-4 text-xs font-mono font-bold uppercase tracking-wider text-warmgrey-500 hover:text-graphite-900 transition-colors"
              >
                Skip to Summary →
              </button>
            )}
            <button
              type="button"
              onClick={() => canNext && setStep(s => s + 1)}
              disabled={!canNext}
              className="inline-flex items-center gap-2 min-h-[48px] px-6 sm:px-8 rounded-xl bg-burnt-500 hover:bg-burnt-600 disabled:bg-ivory-300 disabled:text-warmgrey-400 text-white text-sm font-bold shadow-md shadow-burnt-500/20 transition-all"
            >
              {step === 2 ? 'Generate Build Ticket' : 'Next Step'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
