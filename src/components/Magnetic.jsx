import { useEffect, useRef } from 'react'

export default function Magnetic({ children, strength = 0.5, radius = 700, className, disabled = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Stay put while disabled (e.g. during the load intro) so nothing else
    // measuring this element sees it shifted.
    if (disabled) {
      node.style.transform = 'translate(0, 0)'
      return
    }

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    let frame = null
    const handleMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = null
        const rect = node.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy)

        // Smooth falloff: 0 at/beyond the radius, 1 right at the cursor.
        // Squared so the pull creeps in from far and ramps up as you near it.
        const proximity = Math.max(0, 1 - dist / radius)
        const pull = strength * proximity * proximity
        node.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [strength, radius, disabled])

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        transition: 'transform 0.2s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </span>
  )
}
