import { useEffect, useRef } from 'react'

export default function GlowEffect() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const sections = document.querySelectorAll('.glow-section')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom

        const glow = section.querySelector('.glow-overlay')
        if (glow) {
          glow.style.setProperty('--glow-x', `${x}px`)
          glow.style.setProperty('--glow-y', `${y}px`)
          glow.style.opacity = isInside ? '1' : '0'
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return null
}

export function GlowOverlay() {
  return <div className="glow-overlay" />
}
