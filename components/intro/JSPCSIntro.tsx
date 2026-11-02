'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { setScrollProgress } from './scrollStore'

function InstantParticleBackground() {
  const particles = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    top: `${(i * 61) % 100}%`,
    size: 2 + (i % 3),
    delay: `${-(i % 8)}s`,
    duration: `${3 + (i % 4)}s`,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#141615]">
      {particles.map((particle) => (
        <span
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: '#FF8C42',
            boxShadow: '0 0 10px #FF6B26',
            opacity: 0.75,
            animation: `jspcsFloat ${particle.duration} ease-in-out ${particle.delay} infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes jspcsFloat {
          from {
            transform: translate3d(0, 0, 0);
            opacity: 0.25;
          }
          to {
            transform: translate3d(8px, -14px, 0);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  )
}

// Dynamic import with ssr: false
// const JSPCSIntroCanvas = dynamic(
//   () => import('./JSPCSIntroCanvas').then(m => m.JSPCSIntroCanvas),
//   { ssr: false, loading: () => null }
// )

const JSPCSIntroCanvas = dynamic(
  () => import('./JSPCSIntroCanvas').then(m => m.JSPCSIntroCanvas),
  {
    ssr: false,
    loading: () => <InstantParticleBackground />,
  }
)

// ─────────────────────────────────────────────
//  BRAND TEXT REVEAL  (letter-by-letter)
// ─────────────────────────────────────────────
const BRAND_LETTERS = ['J', 'S', 'P', 'C', 'S']

function BrandReveal({ visible }: { visible: boolean }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Letters */}
      <div className="flex items-end gap-2 sm:gap-6 mb-4">
        {BRAND_LETTERS.map((letter, i) => (
          <span
            key={i}
            className="font-black text-[#F5F3EE] select-none"
            style={{
              fontSize: 'clamp(2.5rem, 11vw, 8.5rem)',
              lineHeight: 1,
              fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif',
              letterSpacing: '0.08em',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(24px)',
              transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.07}s`,
              textShadow: `0 0 60px rgba(255,107,38,0.35), 0 2px 4px rgba(0,0,0,0.9)`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <div
        className="px-4 max-w-full"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(12px)',
          transition: 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s',
        }}
      >
        <span
          className="font-mono text-[#FF9D5C] tracking-[0.2em] sm:tracking-[0.3em] uppercase block text-center font-bold break-words"
          style={{ fontSize: 'clamp(0.55rem, 1.8vw, 0.85rem)' }}
        >
          PC HARDWARE · REPAIR · ADVANCED WORKSTATION ENGINEERING
        </span>

        {/* Accent line */}
        <div
          className="mx-auto mt-3 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B26] to-transparent"
          style={{
            width: visible ? '100%' : '0%',
            transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s',
          }}
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  SKIP BUTTON
// ─────────────────────────────────────────────
function SkipButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Skip intro to homepage"
      className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[9999] flex items-center gap-2 pointer-events-auto shadow-2xl"
      style={{
        background: hovered ? '#FF6B26' : 'rgba(23,25,24,0.75)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${hovered ? '#FF6B26' : 'rgba(255,107,38,0.35)'}`,
        borderRadius: '999px',
        padding: '8px 18px',
        color: hovered ? '#FFFFFF' : '#FF9D5C',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      SKIP INTRO
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 1l8 4-8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

// ─────────────────────────────────────────────
//  MASTER INTRO OVERLAY
// ─────────────────────────────────────────────
interface JSPCSIntroProps {
  onDone: () => void
}

export default function JSPCSIntro({ onDone }: JSPCSIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetProgress = useRef(0)
  const currentProgress = useRef(0)
  const animFrameId = useRef<number | null>(null)
  const completedRef = useRef(false)

  const [scrollProgress, setScrollProgressState] = useState(0)
  const [canvasOpacity, setCanvasOpacity] = useState(1)
  const [brandVisible, setBrandVisible] = useState(false)
  const [introStartedAt] = useState(() => Date.now())

  // const handleFinish = useCallback(() => {
  //   if (completedRef.current) return
  //   completedRef.current = true

  //   // Fast, smooth fade into homepage
  //   setCanvasOpacity(0)
  //   setTimeout(() => {
  //     document.body.style.overflow = ''
  //     document.body.style.height = ''
  //     window.scrollTo({ top: 0, behavior: 'instant' })
  //     onDone()
  //   }, 280)
  // }, [onDone])
  const handleFinish = useCallback(() => {
    if (completedRef.current) return

    const elapsed = Date.now() - introStartedAt
    const minimumDuration = 5000

    if (elapsed < minimumDuration) {
      return
    }

    completedRef.current = true

    setCanvasOpacity(0)

    setTimeout(() => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      window.scrollTo({ top: 0, behavior: 'instant' })
      onDone()
    }, 280)
  }, [onDone, introStartedAt])

  // ── Smooth Virtual Input Controller ──────────────
  useEffect(() => {
    // Lock body during intro
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'

    const container = containerRef.current
    if (!container) return

    // 1. Mouse & Trackpad Wheel Input
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()

      // Responsive sensitivity: 3-4 gentle scrolls take the user through the whole intro
      const rawDelta = e.deltaY
      const clampedDelta = Math.sign(rawDelta) * Math.min(Math.abs(rawDelta), 100)
      const increment = clampedDelta * 0.0024

      targetProgress.current = Math.min(Math.max(targetProgress.current + increment, 0), 1)

      // If user continues scrolling downward near the end, immediately transition to homepage
      if (targetProgress.current >= 0.90 && rawDelta > 0) {
        handleFinish()
      }
    }

    // 2. Touch Swipes
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const currentY = e.touches[0].clientY
        const deltaY = touchStartY - currentY
        touchStartY = currentY
        targetProgress.current = Math.min(Math.max(targetProgress.current + deltaY * 0.0035, 0), 1)

        if (targetProgress.current >= 0.90 && deltaY > 0) {
          handleFinish()
        }
      }
    }

    // 3. Keyboard Input
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleFinish()
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        targetProgress.current = Math.min(targetProgress.current + 0.25, 1)
        if (targetProgress.current >= 0.90) {
          handleFinish()
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        targetProgress.current = Math.max(targetProgress.current - 0.25, 0)
      }
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    // 4. Smooth Damped Animation Loop
    const loop = () => {
      const prev = currentProgress.current
      const target = targetProgress.current
      // Exponential lerp toward target
      const next = prev + (target - prev) * 0.12
      currentProgress.current = next

      setScrollProgress(next)

      if (Math.abs(next - prev) > 0.0005 || next > 0.85) {
        setScrollProgressState(next)
        // setBrandVisible(next >= 0.65 && next <= 0.92)
        const elapsed = Date.now() - introStartedAt

        // Keep JSPCS visible for at least 5 seconds
        setBrandVisible(elapsed >= 100)

        // Fade out overlay as progress approaches landing
        if (next >= 0.86) {
          const fadeOut = Math.min((next - 0.86) / 0.10, 1)
          setCanvasOpacity(1 - fadeOut)
        } else {
          setCanvasOpacity(1)
        }

        // Auto-complete and hand over to landing page
        if (next >= 0.92 && !completedRef.current) {
          handleFinish()
          return
        }
      }

      animFrameId.current = requestAnimationFrame(loop)
    }

    animFrameId.current = requestAnimationFrame(loop)

    return () => {
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('keydown', onKeyDown)
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current)
      }
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [handleFinish])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        opacity: canvasOpacity,
        transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: canvasOpacity < 0.05 ? 'none' : 'auto',
        willChange: 'opacity',
        touchAction: 'none',
        overflow: 'hidden',
      }}
    >
      {/* #Three.js WebGL Canvas */}
      <div className="absolute inset-0">
        <JSPCSIntroCanvas
          onComplete={handleFinish}
          onSkip={handleFinish}
          progress={scrollProgress}
        />
      </div>

      {/* Brand Typography Reveal */}
      <BrandReveal visible={brandVisible} />

      {/* Skip button (top right) */}
      <SkipButton onClick={handleFinish} />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15,17,16,0.65) 100%)',
        }}
      />

      {/* Bottom gradient bridge to homepage */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #F5F3EE)',
          opacity: scrollProgress >= 0.80 ? Math.min((scrollProgress - 0.80) / 0.15, 1) : 0,
        }}
      />
    </div>
  )
}
