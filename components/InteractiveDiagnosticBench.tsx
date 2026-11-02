'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Thermometer,
  Activity,
  Microscope,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
} from 'lucide-react'

const BENCH_STEPS = [
  {
    id: 'thermal-ir',
    stepNumber: '01',
    name: 'Thermal IR Isolation',
    tool: 'Infrared Thermal Camera (FLIR)',
    symptom: 'Dead Laptop / No Power / 19V Rail Short',
    metric: 'Hotspot: 84.6°C on Rail C802',
    actionTaken: 'Non-destructive current injection isolates a defective 0402 ceramic capacitor in 4 minutes, avoiding whole board replacement.',
    badge: 'Component Level',
    visualType: 'thermal',
  },
  {
    id: 'oscilloscope',
    stepNumber: '02',
    name: 'Oscilloscope Waveform Tracing',
    tool: '100MHz 4-Channel DSO',
    symptom: 'Random Crash / Memory Blue Screen / GPU Freeze',
    metric: 'VCore Ripple: 180mV Peak-to-Peak (Out of Spec)',
    actionTaken: 'Gate driver PWM pulses inspected under load. Failing high-side MOSFET identified and replaced with genuine OEM silicon.',
    badge: 'Signal Validation',
    visualType: 'scope',
  },
  {
    id: 'bga-rework',
    stepNumber: '03',
    name: 'BGA Reballing & Micro-Soldering',
    tool: 'Infrared BGA Rework Station & Stereo Microscope',
    symptom: 'Graphics Artifacts / Display Blackout / BGA Fracture',
    metric: 'SMD Precision: 0.01mm Optical Alignment',
    actionTaken: 'Defective lead-free solder balls desoldered. GPU die reballed with leaded alloy spheres under calibrated thermal curve.',
    badge: 'Micro-Soldering',
    visualType: 'microscope',
  },
  {
    id: 'stress-validation',
    stepNumber: '04',
    name: '24hr Automated Stress Burn-In',
    tool: 'Prime95, FurMark, MemTest86 Telemetry Suite',
    symptom: 'Final Quality Certification Prior to Dispatch',
    metric: 'Stability: 24h Sustained 100% Load // Zero Errors',
    actionTaken: 'System undergoes thermal cycle tests, memory write validation, and receives an official 90-day written warranty.',
    badge: 'Quality Passed',
    visualType: 'burnin',
  },
]

export default function InteractiveDiagnosticBench() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const currentStep = BENCH_STEPS[activeStepIndex]

  return (
    <section id="diagnostic-bench" className="relative py-16 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-t border-[#EAE6DC] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C2] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-burnt-500">
              <Microscope className="w-4 h-4" />
              <span>Laboratory Bench Protocol</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-graphite-900 tracking-tight">
              Interactive Component Diagnostic Walkthrough
            </h2>
          </div>
          <p className="text-sm font-mono text-warmgrey-400 max-w-md">
            Follow the 4-stage scientific workflow our engineers use to resolve complex motherboard and GPU failures.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BENCH_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-graphite-900 text-white border-graphite-900 shadow-xl'
                    : 'bg-white text-graphite-800 border-[#EAE6DC] hover:border-burnt-500/50'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-burnt-500" />
                )}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-burnt-400' : 'text-warmgrey-400'}`}>
                    PHASE {step.stepNumber}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/10 text-sage-300' : 'bg-ivory-100 text-graphite-800'
                  }`}>
                    {step.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold leading-tight">
                  {step.name}
                </h4>
              </button>
            )
          })}
        </div>

        {/* Interactive Inspection Console */}
        <div className="rounded-2xl sm:rounded-3xl bg-graphite-900 text-ivory-100 border border-white/10 shadow-2xl p-4 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Simulation Display (Col 1-7) */}
            <div className="lg:col-span-7 rounded-xl sm:rounded-2xl bg-black/60 border border-white/10 p-4 sm:p-6 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
              
              {/* Telemetry Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-xs font-mono text-ivory-300/70 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-burnt-500 animate-pulse shrink-0" />
                  <span className="truncate">INSTRUMENT: {currentStep.tool}</span>
                </div>
                <span className="text-sage-400 font-bold shrink-0">LIVE TELEMETRY</span>
              </div>

              {/* Dynamic Interactive Visual Content based on VisualType */}
              <div className="my-6 relative flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  {currentStep.visualType === 'thermal' && (
                    <motion.div
                      key="thermal"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-4"
                    >
                      <div className="h-44 rounded-xl bg-gradient-to-r from-blue-900 via-purple-800 via-pink-700 via-red-600 to-amber-400 p-4 relative flex items-center justify-center border border-white/15 overflow-hidden">
                        {/* Thermal Crosshair */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-12 border border-white/60 rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full" />
                          </div>
                        </div>
                        {/* Hotspot Target */}
                        <div className="p-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-center font-mono z-10">
                          <span className="text-burnt-400 text-xs font-bold block">HOTSPOT DETECTED</span>
                          <span className="text-white text-lg font-black">84.6°C</span>
                          <span className="text-[10px] text-ivory-300/70 block">Capacitor C802 // 19V Rail</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-ivory-300/60">
                        <span>Low: 24.2°C Ambient</span>
                        <span className="text-burnt-400 font-bold">Delta: +60.4°C High Resistance Short</span>
                        <span>Max: 84.6°C</span>
                      </div>
                    </motion.div>
                  )}

                  {currentStep.visualType === 'scope' && (
                    <motion.div
                      key="scope"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-4"
                    >
                      <div className="h-44 rounded-xl bg-graphite-950 p-4 border border-white/10 relative overflow-hidden flex flex-col justify-between">
                        {/* Oscilloscope Grid Background */}
                        <div className="absolute inset-0 atelier-grid-dark opacity-30 pointer-events-none" />
                        {/* Waveform SVG */}
                        <svg className="w-full h-24 overflow-visible" viewBox="0 0 400 100">
                          <path
                            d="M 0 50 Q 25 10, 50 50 T 100 50 T 150 20 T 200 80 T 250 50 T 300 50 T 350 15 T 400 50"
                            fill="none"
                            stroke="#A7B5A0"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M 120 20 L 160 20 L 160 80 L 200 80"
                            fill="none"
                            stroke="#E66A35"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                        </svg>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[10px] sm:text-[11px] font-mono z-10">
                          <span className="text-sage-400 font-bold">CH1: 1.05V VCore Rail</span>
                          <span className="text-burnt-400 font-bold">PWM Jitter: 180mV</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep.visualType === 'microscope' && (
                    <motion.div
                      key="microscope"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-4"
                    >
                      <div className="h-44 rounded-xl bg-graphite-950 p-4 border border-white/10 relative overflow-hidden flex items-center justify-center">
                        <div className="w-36 h-36 rounded-full border-2 border-sage-400/40 relative flex items-center justify-center p-2">
                          <div className="w-full h-full rounded-full border border-burnt-500/40 flex items-center justify-center text-center p-2">
                            <div className="space-y-0.5 font-mono">
                              <span className="text-burnt-400 text-xs font-bold block">40x STEREO</span>
                              <span className="text-white text-[11px] font-bold">0.01mm SOLDER BALLS</span>
                              <span className="text-sage-400 text-[10px]">63/37 Eutectic Alloy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep.visualType === 'burnin' && (
                    <motion.div
                      key="burnin"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-full space-y-4"
                    >
                      <div className="h-44 rounded-xl bg-graphite-950 p-4 border border-white/10 relative overflow-hidden flex flex-col justify-between">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-xs font-mono text-sage-400">
                          <span>Prime95 + FurMark Suite</span>
                          <span className="px-2 py-0.5 rounded bg-sage-400/20 text-sage-300 font-bold self-start sm:self-auto">
                            PASS (0 ERRORS)
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center font-mono">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[10px] text-ivory-300/60 block">CPU Core</span>
                            <span className="text-white font-bold text-sm">62°C</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[10px] text-ivory-300/60 block">GPU Hotspot</span>
                            <span className="text-white font-bold text-sm">68°C</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[10px] text-ivory-300/60 block">MemTest86</span>
                            <span className="text-sage-400 font-bold text-sm">Passed</span>
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-ivory-300/60 text-center">
                          Official 90-Day Written Warranty Certificate Generated
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Target Symptom */}
              <div className="text-[11px] sm:text-xs font-mono text-ivory-300/70 border-t border-white/10 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <span>Target Issue: {currentStep.symptom}</span>
                <span className="text-burnt-400 font-bold">{currentStep.metric}</span>
              </div>
            </div>

            {/* Explanatory Narrative (Col 8-12) */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-burnt-400">
                  Bench Analysis // Step {currentStep.stepNumber} of 04
                </span>
                <h3 className="text-2xl font-black text-white">
                  {currentStep.name}
                </h3>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-sage-400 font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Laboratory Action Taken</span>
                </div>
                <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed font-sans">
                  {currentStep.actionTaken}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href="https://wa.me/919842139997?text=Hi%20Jai%20Shankar,%20I%20have%20a%20laptop/PC%20motherboard%20issue%20that%20needs%20bench%20testing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-burnt-500 hover:bg-burnt-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md w-full sm:w-auto"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Request Bench Diagnostic</span>
                </a>
                <a
                  href="tel:9842139997"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold transition-colors border border-white/15 w-full sm:w-auto"
                >
                  <Phone className="w-3.5 h-3.5 text-sage-400" />
                  <span>Call Technician</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
