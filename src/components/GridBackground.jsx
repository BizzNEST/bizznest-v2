import { memo } from 'react'
import './GridBackground.css'

const directionClass = {
  'down-right': 'grid-bg-animated--dr',
  'up-left': 'grid-bg-animated--ul',
  'down-left': 'grid-bg-animated--dl',
  'up-right': 'grid-bg-animated--ur',
}

const GridBackground = memo(function GridBackground({
  strokeColor = 'rgba(255, 255, 255, 0.1)',
  fadeColor = '#1A3535',
  animated = false,
  speed = 20,
  direction = 'down-right',
}) {
  const fades = (
    <>
      <div style={{ position: 'absolute', inset: '0', left: 0, width: '8rem', background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
      <div style={{ position: 'absolute', inset: '0', right: 0, left: 'auto', width: '8rem', background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />
      <div style={{ position: 'absolute', inset: '0', bottom: 'auto', height: '8rem', background: `linear-gradient(to bottom, ${fadeColor}, transparent)` }} />
      <div style={{ position: 'absolute', inset: '0', top: 'auto', height: '8rem', background: `linear-gradient(to top, ${fadeColor}, transparent)` }} />
    </>
  )

  if (animated) {
    return (
      <div className="grid-bg-animated" style={{ pointerEvents: 'none' }}>
        <div
          className={`grid-bg-animated__grid ${directionClass[direction] || directionClass['down-right']}`}
          style={{ '--grid-stroke': strokeColor, '--grid-speed': `${speed}s` }}
        />
        {fades}
      </div>
    )
  }

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
      {fades}
    </div>
  )
})

export default GridBackground
