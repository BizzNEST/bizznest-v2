import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, suffix = '', duration = 1500 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true
            observer.disconnect()

            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              // ease-out for a natural deceleration
              const eased = 1 - Math.pow(1 - progress, 3)
              setValue(Math.round(eased * end))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
