import { Rocket, Users, TrendingUp } from 'lucide-react'
import { GlowOverlay } from './GlowEffect'
import './About.css'

const features = [
  {
    title: 'Career Accelerator Program',
    description: 'Launch your career with our comprehensive training and mentorship program designed for emerging talent',
    icon: Rocket,
  },
  {
    title: 'Build Your Network',
    description: 'Create a network of supportive professionals and meet industry leading individuals.',
    icon: Users,
  },
  {
    title: 'Growth Opportunities',
    description: 'Continuous learning and development with access to courses, conferences, and skill-building programs',
    icon: TrendingUp,
  },
]

export default function About() {
  return (
    <section className="about-wrapper" id="about">
      <div className="about-wave-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="var(--color-light-bg)" />
          <path d="M0,55 C360,80 720,20 1080,55 C1260,68 1380,60 1440,55 L1440,80 L0,80 Z" fill="var(--color-primary-light)" />
        </svg>
      </div>
      <div className="about glow-section">
        <GlowOverlay />
        <div className="container about-inner">
          <div className="about-content">
            <h2 className="about-label">Who's BizzNEST</h2>
            <div className="about-cards">
              {features.map((feature) => (
                <div key={feature.title} className="about-card">
                  <div className="about-card-body">
                    <div className="about-card-icon">
                      <feature.icon size={22} />
                    </div>
                    <h3 className="about-card-title">{feature.title}</h3>
                    <p className="about-card-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img
              src="/intern.jpg"
              alt="BizzNEST team"
              loading="lazy"
            />
            <p className="about-cohort">
              We run one cohort per year — a full twelve months of hands-on training. Applications open in spring and close in summer.
            </p>
            <div className="about-cta">
              <a href="#contact">Apply Now</a>
            </div>
          </div>
        </div>
        <div className="container about-coordinator-inner">
          <div className="about-coordinator-avatar">
            <span>EB</span>
          </div>
          <div className="about-coordinator-info">
            <h3 className="about-coordinator-title">Have questions about applying?</h3>
            <p className="about-coordinator-desc">
              Talk to our Program Coordinator, <strong>Ethan Beauduette</strong>. He can walk you through the application process, answer questions about the cohort, and help you figure out if BizzNEST is the right fit.
            </p>
            <a href="#contact" className="about-coordinator-link">Get in Touch</a>
          </div>
        </div>
      </div>
      <div className="about-wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,80 L0,80 Z" fill="var(--color-light-bg)" />
        </svg>
      </div>
    </section>
  )
}
