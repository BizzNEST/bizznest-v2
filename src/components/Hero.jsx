import AnimatedDotsBackground from './AnimatedDotsBackground'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <AnimatedDotsBackground dotColor="255, 255, 255" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Bringing<br />
            <span className="hero-accent">Creativity</span><br />
            to life
          </h1>
          <p className="hero-description">
            We're a creative agency specializing in software development, design, marketing, and videography.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">About Our Services</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            alt="BizzNEST team collaborating"
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
