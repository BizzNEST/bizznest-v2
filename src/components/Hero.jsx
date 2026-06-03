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
    </section>
  )
}
