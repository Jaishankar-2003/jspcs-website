'use client'

import { useEffect, useState, useCallback } from 'react'

const INTRO_KEY = 'jspcs_intro_seen'

export interface IntroControlReturn {
  shouldShowIntro: boolean
  isReducedMotion: boolean
  markIntroComplete: () => void
  skipIntro: () => void
}

export function useIntroControl(): IntroControlReturn {
  const [shouldShowIntro, setShouldShowIntro] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersReduced = motionQuery.matches
    setIsReducedMotion(prefersReduced)

    // Check session
    const alreadySeen = sessionStorage.getItem(INTRO_KEY) === 'true'

    if (!prefersReduced && !alreadySeen) {
      setShouldShowIntro(true)
      // Lock body scroll while intro is active
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    }

    // Listen for motion preference changes
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsReducedMotion(true)
        setShouldShowIntro(false)
        unlockScroll()
      }
    }

    motionQuery.addEventListener('change', handleMotionChange)
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ''
    document.body.style.height = ''
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const markIntroComplete = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, 'true')
    setShouldShowIntro(false)
    unlockScroll()
  }, [unlockScroll])

  const skipIntro = useCallback(() => {
    markIntroComplete()
  }, [markIntroComplete])

  return {
    shouldShowIntro,
    isReducedMotion,
    markIntroComplete,
    skipIntro,
  }
}
