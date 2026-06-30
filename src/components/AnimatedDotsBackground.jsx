import { useRef, useEffect, useState } from 'react'

function generateDots(width, height, spacing) {
  const dots = []
  const cols = Math.ceil(width / spacing)
  const rows = Math.ceil(height / spacing)
  const centerX = width / 2
  const centerY = height / 2

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {
      const x = col * spacing
      const y = row * spacing

      const dx = x - centerX
      const dy = y - centerY
      const nx = dx / (centerX || 1)
      const ny = dy / (centerY || 1)
      const edgeFactor = Math.min(Math.sqrt(nx * nx + ny * ny) / 0.9, 1)

      if (Math.random() > edgeFactor) continue

      const pattern = (row + col) % 3
      const baseOpacities = [0.3, 0.5, 0.7]
      const opacity = baseOpacities[pattern] * edgeFactor

      dots.push({
        x,
        y,
        baseX: x,
        baseY: y,
        opacity,
        phase: Math.random() * Math.PI * 2,
        offsetX: 0,
        offsetY: 0,
      })
    }
  }

  return dots
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

const MOBILE_QUERY = '(max-width: 768px)'

export default function AnimatedDotsBackground({
  dotSize = 2,
  dotSpacing = 16,
  repulsionRadius = 80,
  repulsionStrength = 20,
  dotColor = '255, 255, 255',
  enableAnimation = true,
}) {
  const canvasRef = useRef(null)
  const dotsRef = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animationFrameRef = useRef(null)
  const inViewRef = useRef(true)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  // Active only while on screen AND the tab is visible — keeps the canvas loop
  // from burning CPU when scrolled away or backgrounded.
  const [isActive, setIsActive] = useState(true)
  // On phones the per-frame canvas redraw isn't worth the battery/CPU, so we
  // fall back to the static frame. (Touch devices never fire mousemove, so the
  // hover repulsion is doing nothing there anyway.)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(MOBILE_QUERY).matches
      : false
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  // Reduced motion, an explicit opt-out, or mobile renders a single static frame.
  const animationOn = enableAnimation && !prefersReducedMotion() && !isMobile

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return
    dotsRef.current = generateDots(dimensions.width, dimensions.height, dotSpacing)
  }, [dimensions, dotSpacing])

  useEffect(() => {
    const updateSize = () => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      setDimensions({ width: rect.width, height: rect.height })
      const dpr = window.devicePixelRatio || 1
      canvasRef.current.width = rect.width * dpr
      canvasRef.current.height = rect.height * dpr
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e) => {
      // Skip the layout read entirely when the canvas is off screen.
      if (!inViewRef.current || !canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Pause/resume based on viewport intersection and tab visibility.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let inView = true
    let visible = !document.hidden
    const sync = () => {
      inViewRef.current = inView
      setIsActive(inView && visible)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        sync()
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const onVisibility = () => {
      visible = !document.hidden
      sync()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !animationOn || !isActive) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lastTime = performance.now()

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      const dots = dotsRef.current
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]

        const dx = dot.baseX - mouseX
        const dy = dot.baseY - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < repulsionRadius && distance > 0) {
          const force = (1 - distance / repulsionRadius) * repulsionStrength
          const angle = Math.atan2(dy, dx)
          const targetOffsetX = Math.cos(angle) * force
          const targetOffsetY = Math.sin(angle) * force
          dot.offsetX += (targetOffsetX - dot.offsetX) * 0.1
          dot.offsetY += (targetOffsetY - dot.offsetY) * 0.1
        } else {
          dot.offsetX *= 0.9
          dot.offsetY *= 0.9
        }

        dot.x = dot.baseX + dot.offsetX
        dot.y = dot.baseY + dot.offsetY

        dot.phase += deltaTime * 2
        const baseOpacity = dot.opacity * 0.5
        const opacityVariation = dot.opacity * 0.5
        const animatedOpacity = baseOpacity + Math.sin(dot.phase) * opacityVariation

        let finalOpacity = animatedOpacity
        if (distance < repulsionRadius * 1.2) {
          const proximityFactor = 1 - distance / (repulsionRadius * 1.2)
          finalOpacity = Math.min(animatedOpacity + proximityFactor * 0.8, 1)
        }

        ctx.fillStyle = `rgba(${dotColor}, ${finalOpacity})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [dimensions, dotSize, repulsionRadius, repulsionStrength, dotColor, animationOn, isActive])

  useEffect(() => {
    if (!canvasRef.current || animationOn) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)
    dotsRef.current.forEach((dot) => {
      ctx.fillStyle = `rgba(${dotColor}, ${dot.opacity})`
      ctx.beginPath()
      ctx.arc(dot.baseX, dot.baseY, dotSize / 2, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [dimensions, dotSize, dotColor, animationOn])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
