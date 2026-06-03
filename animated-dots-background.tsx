"use client"


import type React from "react"
import { useRef, useEffect, useState } from "react"


interface Dot {
 x: number
 y: number
 baseX: number
 baseY: number
 opacity: number
 phase: number // For animation timing
 offsetX: number
 offsetY: number
}


function generateDots(width: number, height: number, spacing: number): Dot[] {
 const dots: Dot[] = []
 const cols = Math.ceil(width / spacing)
 const rows = Math.ceil(height / spacing)
 const centerX = width / 2
 const centerY = height / 2
 const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)


 for (let row = 0; row <= rows; row++) {
   for (let col = 0; col <= cols; col++) {
     const x = col * spacing
     const y = row * spacing


     const dx = x - centerX
     const dy = y - centerY
     const distanceFromCenter = Math.sqrt(dx * dx + dy * dy)


     const edgeFactor = Math.min(distanceFromCenter / (maxDistance * 0.7), 1)


     if (Math.random() > edgeFactor) {
       continue
     }


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


export function AnimatedDotsBackground({
 dotSize = 2,
 dotSpacing = 16,
 repulsionRadius = 80,
 repulsionStrength = 20,
 isDark = true,
 enableAnimation = true,
}: {
 dotSize?: number
 dotSpacing?: number
 repulsionRadius?: number
 repulsionStrength?: number
 isDark?: boolean
 enableAnimation?: boolean
}) {
 const canvasRef = useRef<HTMLCanvasElement>(null)
 const dotsRef = useRef<Dot[]>([])
 const mouseRef = useRef({ x: -9999, y: -9999 })
 const animationFrameRef = useRef<number>()
 const [dimensions, setDimensions] = useState({ width: 0, height: 0 })


 // Initialize dots
 useEffect(() => {
   if (dimensions.width === 0 || dimensions.height === 0) return
   dotsRef.current = generateDots(dimensions.width, dimensions.height, dotSpacing)
 }, [dimensions, dotSpacing])


 // Handle resize
 useEffect(() => {
   const updateSize = () => {
     if (!canvasRef.current) return
     const rect = canvasRef.current.getBoundingClientRect()
     setDimensions({ width: rect.width, height: rect.height })
    
     // Set canvas resolution for sharp rendering
     const dpr = window.devicePixelRatio || 1
     canvasRef.current.width = rect.width * dpr
     canvasRef.current.height = rect.height * dpr
     const ctx = canvasRef.current.getContext("2d")
     if (ctx) {
       ctx.scale(dpr, dpr)
     }
   }


   updateSize()
   window.addEventListener("resize", updateSize)
   return () => window.removeEventListener("resize", updateSize)
 }, [])


 // Animation loop
 useEffect(() => {
   if (!canvasRef.current || !enableAnimation) return


   const canvas = canvasRef.current
   const ctx = canvas.getContext("2d")
   if (!ctx) return


   let lastTime = performance.now()


   const animate = (currentTime: number) => {
     const deltaTime = (currentTime - lastTime) / 1000
     lastTime = currentTime


     // Clear canvas
     ctx.clearRect(0, 0, dimensions.width, dimensions.height)


     const dots = dotsRef.current
     const mouseX = mouseRef.current.x
     const mouseY = mouseRef.current.y
     const color = isDark ? "255, 255, 255" : "0, 0, 0"


     // Update and draw dots
     for (let i = 0; i < dots.length; i++) {
       const dot = dots[i]


       // Calculate mouse repulsion
       const dx = dot.baseX - mouseX
       const dy = dot.baseY - mouseY
       const distance = Math.sqrt(dx * dx + dy * dy)


       if (distance < repulsionRadius && distance > 0) {
         const force = (1 - distance / repulsionRadius) * repulsionStrength
         const angle = Math.atan2(dy, dx)
        
         // Smooth interpolation for position
         const targetOffsetX = Math.cos(angle) * force
         const targetOffsetY = Math.sin(angle) * force
        
         dot.offsetX += (targetOffsetX - dot.offsetX) * 0.1
         dot.offsetY += (targetOffsetY - dot.offsetY) * 0.1
       } else {
         // Return to base position
         dot.offsetX *= 0.9
         dot.offsetY *= 0.9
       }


       // Update position
       dot.x = dot.baseX + dot.offsetX
       dot.y = dot.baseY + dot.offsetY


       // Animate opacity
       dot.phase += deltaTime * 2
       const baseOpacity = dot.opacity * 0.5
       const opacityVariation = dot.opacity * 0.5
       const animatedOpacity = baseOpacity + Math.sin(dot.phase) * opacityVariation


       // Add proximity boost
       let finalOpacity = animatedOpacity
       if (distance < repulsionRadius * 1.2) {
         const proximityFactor = 1 - distance / (repulsionRadius * 1.2)
         finalOpacity = Math.min(animatedOpacity + proximityFactor * 0.8, 1)
       }


       // Draw dot
       ctx.fillStyle = `rgba(${color}, ${finalOpacity})`
       ctx.beginPath()
       ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2)
       ctx.fill()
     }


     animationFrameRef.current = requestAnimationFrame(animate)
   }


   animationFrameRef.current = requestAnimationFrame(animate)


   return () => {
     if (animationFrameRef.current) {
       cancelAnimationFrame(animationFrameRef.current)
     }
   }
 }, [dimensions, dotSize, repulsionRadius, repulsionStrength, isDark, enableAnimation])


 // Static render when animation is disabled
 useEffect(() => {
   if (!canvasRef.current || enableAnimation) return


   const canvas = canvasRef.current
   const ctx = canvas.getContext("2d")
   if (!ctx) return


   ctx.clearRect(0, 0, dimensions.width, dimensions.height)


   const dots = dotsRef.current
   const color = isDark ? "255, 255, 255" : "0, 0, 0"


   dots.forEach((dot) => {
     ctx.fillStyle = `rgba(${color}, ${dot.opacity})`
     ctx.beginPath()
     ctx.arc(dot.baseX, dot.baseY, dotSize / 2, 0, Math.PI * 2)
     ctx.fill()
   })
 }, [dimensions, dotSize, isDark, enableAnimation])


 const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
   if (!canvasRef.current || !enableAnimation) return
   const rect = canvasRef.current.getBoundingClientRect()
   mouseRef.current = {
     x: e.clientX - rect.left,
     y: e.clientY - rect.top,
   }
 }


 const handleMouseLeave = () => {
   mouseRef.current = { x: -9999, y: -9999 }
 }


 return (
   <canvas
     ref={canvasRef}
     className="absolute inset-0 pointer-events-auto"
     style={{
       width: "100%",
       height: "100%",
     }}
     onMouseMove={handleMouseMove}
     onMouseLeave={handleMouseLeave}
   />
 )
}

