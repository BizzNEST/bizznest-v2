import { memo } from 'react'

const GridBackground = memo(function GridBackground({ strokeColor = 'rgba(255, 255, 255, 0.1)', fadeColor = '#1A3535' }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke={strokeColor} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div style={{ position: 'absolute', inset: '0', left: 0, width: '8rem', background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
      <div style={{ position: 'absolute', inset: '0', right: 0, left: 'auto', width: '8rem', background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />
      <div style={{ position: 'absolute', inset: '0', bottom: 'auto', height: '8rem', background: `linear-gradient(to bottom, ${fadeColor}, transparent)` }} />
      <div style={{ position: 'absolute', inset: '0', top: 'auto', height: '8rem', background: `linear-gradient(to top, ${fadeColor}, transparent)` }} />
    </div>
  )
})

export default GridBackground
