import { useEffect, useState } from 'react'
import AnimatedDotsBackground from './AnimatedDotsBackground'
import Magnetic from './Magnetic'
import { hasIntroPlayed } from '../lib/introGate'
import './Hero.css'

export default function Hero() {
  // Hold the magnet inert until the load intro finishes, so it can't nudge
  // the hero word while the intro overlay is still measuring/handing off to it.
  // If the intro already played this session, the magnet is live immediately.
  const [introDone, setIntroDone] = useState(hasIntroPlayed)

  useEffect(() => {
    if (introDone) return
    const onDone = () => setIntroDone(true)
    window.addEventListener('intro:done', onDone)
    return () => window.removeEventListener('intro:done', onDone)
  }, [introDone])

  return (
    <section className="hero">
      <AnimatedDotsBackground dotColor="255, 255, 255" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Bringing<br />
            <Magnetic className="hero-accent" strength={0.08} disabled={!introDone}>Creativity</Magnetic><br />
            to life
          </h1>
          <p className="hero-description">
            Innovative digital solutions for brands that stand out. We blend creativity with strategy to craft unforgettable experiences.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">About Our Services</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/hero-team.webp"
            alt="BizzNEST Associates with cameras, tablets, and laptops"
            loading="eager"
          />
        </div>
      </div>
      <a href="#featured" className="hero-scroll-btn" aria-label="See more">
        <span className="hero-scroll-label">See More</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  )
}
