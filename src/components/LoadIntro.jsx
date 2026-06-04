import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './LoadIntro.css'

// Words that cycle before settling on FINAL. Edit this list freely —
// order is top-to-bottom in the scroll, FINAL is always last.
const SYNONYMS = ['Innovation', 'Imagination', 'Ingenuity', 'Vision']
const FINAL = 'Creativity'

const WORDS = [...SYNONYMS, FINAL]

// Slot-scroll step delays (ms), one per advance. Decelerates toward the end
// so the stack slows and lands on FINAL. Add/remove values to retune pace.
const STEP_DELAYS = [320, 380, 470, 600]
const SETTLE_HOLD = 500   // pause on FINAL before the curtain opens
const CURTAIN_MS = 750    // must match the panel transition in LoadIntro.css
const HANDOFF_MS = 220    // fade of the overlay word once panels are open

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

// Read the real hero word's box + type so the overlay word can sit exactly
// on top of it (tracks through every breakpoint / once fonts + image settle).
function measureHeroWord() {
  const el = document.querySelector('.hero-accent')
  if (!el) return null
  const r = el.getBoundingClientRect()
  const cs = window.getComputedStyle(el)
  const lineHeight =
    cs.lineHeight === 'normal'
      ? parseFloat(cs.fontSize) * 1.2
      : parseFloat(cs.lineHeight)
  return {
    left: r.left,
    top: r.top,
    lineHeight,
    fontSize: cs.fontSize,
    fontWeight: cs.fontWeight,
    fontFamily: cs.fontFamily,
    fontStyle: cs.fontStyle,
    letterSpacing: cs.letterSpacing,
  }
}

export default function LoadIntro() {
  const [index, setIndex] = useState(0)
  const [revealing, setRevealing] = useState(false)
  const [done, setDone] = useState(false)
  const [metrics, setMetrics] = useState(null)
  const timers = useRef([])

  // Measure synchronously before paint, then again once fonts/image settle so
  // the overlay word stays locked to the real hero word.
  useLayoutEffect(() => {
    const remeasure = () => setMetrics(measureHeroWord())
    remeasure()
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(remeasure)
    }
    window.addEventListener('load', remeasure)
    window.addEventListener('resize', remeasure)
    return () => {
      window.removeEventListener('load', remeasure)
      window.removeEventListener('resize', remeasure)
    }
  }, [])

  useEffect(() => {
    const after = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timers.current.push(id)
      return id
    }

    // Lock scroll and start at the top while the intro plays.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    // Unlock scroll once the curtain starts opening — the site is revealed
    // from here on. (Cleanup below is a safety net for early unmounts.)
    const reveal = () => {
      setRevealing(true)
      document.body.style.overflow = prevOverflow
    }

    if (prefersReducedMotion()) {
      // Land on the final word immediately, brief reveal, then unmount.
      setIndex(WORDS.length - 1)
      after(reveal, 200)
      after(() => setDone(true), 200 + 400)
    } else {
      // Cycle through the words, then settle, reveal, and hand off.
      let elapsed = 0
      for (let step = 1; step < WORDS.length; step++) {
        elapsed += STEP_DELAYS[Math.min(step - 1, STEP_DELAYS.length - 1)]
        after(() => setIndex(step), elapsed)
      }
      const revealAt = elapsed + SETTLE_HOLD
      after(reveal, revealAt)
      after(() => setDone(true), revealAt + CURTAIN_MS + HANDOFF_MS)
    }

    return () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
      document.body.style.overflow = prevOverflow
    }
  }, [])

  if (done) return null

  const lh = metrics ? metrics.lineHeight : 0
  const slotStyle = metrics
    ? {
        left: `${metrics.left}px`,
        top: `${metrics.top}px`,
        height: `${lh}px`,
        fontSize: metrics.fontSize,
        fontWeight: metrics.fontWeight,
        fontFamily: metrics.fontFamily,
        fontStyle: metrics.fontStyle,
        letterSpacing: metrics.letterSpacing,
        lineHeight: `${lh}px`,
      }
    : { opacity: 0 }

  return (
    <div
      className={`intro${revealing ? ' is-revealing' : ''}`}
      aria-hidden="true"
    >
      <div className="intro-panel intro-panel--top" />
      <div className="intro-panel intro-panel--bottom" />

      <div className="intro-slot" style={slotStyle}>
        <span
          className="intro-word-track"
          style={{ transform: `translateY(-${index * lh}px)` }}
        >
          {WORDS.map((word, i) => (
            <span
              key={word}
              className={`intro-word${i === index ? ' is-active' : ''}`}
              style={{ height: `${lh}px`, lineHeight: `${lh}px` }}
            >
              {word}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
