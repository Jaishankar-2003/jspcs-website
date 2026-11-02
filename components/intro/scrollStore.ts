// Shared module-level scroll progress store
// This single value is read every frame by Three.js useFrame()
// and written by the scroll listener in JSPCSIntro.

let _progress = 0

export function setScrollProgress(v: number) {
  _progress = Math.min(Math.max(v, 0), 1)
}

export function getScrollProgress(): number {
  return _progress
}
