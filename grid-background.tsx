"use client"

import { memo } from "react"

export const GridBackground = memo(function GridBackground({ isDark = true }: { isDark?: boolean }) {
  const strokeColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
  const gradientColor = isDark ? "black" : "white"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={strokeColor} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div
        className={`absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-${gradientColor} to-transparent`}
        style={{ background: `linear-gradient(to right, ${gradientColor}, transparent)` }}
      />
      <div
        className={`absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-${gradientColor} to-transparent`}
        style={{ background: `linear-gradient(to left, ${gradientColor}, transparent)` }}
      />
    </div>
  )
})
