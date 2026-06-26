import { useState } from 'react'
import { Rocket, Users, TrendingUp } from 'lucide-react'
import AnimatedDotsBackground from './AnimatedDotsBackground'
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
  const [flippedIndex, setFlippedIndex] = useState(null)

  return (
    <section className="about-wrapper" id="about">
      <div className="about">
        <AnimatedDotsBackground dotColor="255, 255, 255" />
        <div className="container">
          <h2 className="about-label">Who's BizzNEST</h2>
          <div className="about-inner">
            <div className="about-content">
              <div className="about-cards">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="about-card"
                  onMouseEnter={() => setFlippedIndex(i)}
                  onMouseLeave={() => setFlippedIndex(null)}
                >
                  <div className={`about-card-inner${flippedIndex === i ? ' is-flipped' : ''}`}>
                    <div className="about-card-front">
                      <div className="about-card-icon">
                        <feature.icon size={22} />
                      </div>
                      <h3 className="about-card-title">{feature.title}</h3>
                    </div>
                    <div className="about-card-back">
                      <p className="about-card-desc">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="about-image">
            <img
              src="/intern.webp"
              alt="BizzNEST team"
              loading="lazy"
            />
            </div>
          </div>
          <div className="about-apply">
            <div className="about-apply-text">
              <p className="about-apply-title">We run one cohort per year</p>
              <p className="about-cohort">A full twelve months of hands-on training. Applications open in spring and close in summer.</p>
            </div>
            <div className="about-cta">
              <a href="#contact">Apply Now</a>
            </div>
          </div>
          <hr className="about-divider" />
          <div className="about-coordinator-inner">
            <div className="about-coordinator-main">
              <div className="about-coordinator-avatar">
                <span>EB</span>
              </div>
              <div className="about-coordinator-info">
                <h3 className="about-coordinator-title">Have questions about applying?</h3>
                <p className="about-coordinator-desc">
                  Talk to our Program Coordinator, <strong>Ethan Beauduette</strong>. He can walk you through the application process, answer questions about the cohort, and help you figure out if BizzNEST is the right fit.
                </p>
              </div>
            </div>
            <a href="#contact" className="about-coordinator-link">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
