import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import GridBackground from './GridBackground'
import './FeaturedProject.css'

const ARTICLE_URL =
  'https://digitalnest.org/bizznest-brings-childrens-drawings-to-life-with-ai-machine-learning/'

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function FeaturedProject() {
  const videoRef = useRef(null)
  // The video autoplays muted + looping. The floating player starts as a
  // glass "Unmute" pill; unmuting collapses it to a circle volume button and
  // expands the playhead (play/scrub/time) out to the right. `muted` drives it.
  const [muted, setMuted] = useState(true)
  const [muteHover, setMuteHover] = useState(false)
  // The playhead flares out left→right the first time it's unmuted; after that
  // it just fades in/out on hover.
  const [revealed, setRevealed] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // On hover, preview the action: show the icon for what a click will do.
  const showMutedIcon = muteHover ? !muted : muted

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted) setRevealed(true)
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play()
    else video.pause()
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <section className="featured" id="featured">
      <GridBackground animated direction="down-right" speed={3} />
      <div className="container featured-grid">
        <div className="featured-media">
          <video
            ref={videoRef}
            className="featured-video"
            poster="/videos/sccmod-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          >
            <source src="/videos/sccmod.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="featured-player">
            {/* Mute button — its own floating glass pill (morphs pill ↔ circle) */}
            <button
              type="button"
              className={`featured-mute ${muted ? '' : 'is-open'}`}
              onClick={toggleMute}
              onMouseEnter={() => setMuteHover(true)}
              onMouseLeave={() => setMuteHover(false)}
              onFocus={() => setMuteHover(true)}
              onBlur={() => setMuteHover(false)}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
            >
              {showMutedIcon ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span className="featured-mute-label">Unmute</span>
            </button>

            {/* Playhead — separate full-width glass pill; flares out on first
                unmute, then fades in/out on hover */}
            <div className={`featured-playhead ${revealed ? 'is-revealed' : ''}`}>
              <button
                type="button"
                className="featured-ctrl-btn"
                onClick={togglePlay}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                {playing ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <input
                type="range"
                className="featured-seek"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                style={{ '--progress': `${progress}%` }}
                aria-label="Seek"
              />

              <span className="featured-time">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        <div className="featured-content">
          <span className="featured-eyebrow">Featured Project</span>
          <h2 className="featured-title">AI Children's Museum Exhibit</h2>
          <p className="featured-description">
            We partnered with the Children's Museum to create an immersive
            interactive AI experience that educates and entertains young minds.
            This project showcases our ability to blend cutting-edge technology
            with creativity.
          </p>
          <a
            href={ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
