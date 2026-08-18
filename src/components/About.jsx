import { useState } from 'react'
import { Rocket, Users, TrendingUp } from 'lucide-react'
import AnimatedDotsBackground from './AnimatedDotsBackground'
import './About.css'

// TODO: replace with the live interest-list form URL.
const INTEREST_FORM_URL = '#'

const features = [
  {
    title: 'Innovation Consultancy',
    description: 'Gain in-demand skills and real-world experience alongside industry professionals as the next generation of creative and technology talent.',
    icon: Rocket,
  },
  {
    title: 'Build Your Network',
    description: 'Connect with industry professionals, expand your network, and build meaningful relationships that support your career growth.',
    icon: Users,
  },
  {
    title: 'Growth Opportunities',
    description: 'Develop in-demand skills through continuous learning, hands-on experience, mentorship, and professional development opportunities.',
    icon: TrendingUp,
  },
]

export default function About() {
  const [flippedIndex, setFlippedIndex] = useState(null)

  return (
    <section className="about-wrapper" id="about">
      <div className="about">
        <AnimatedDotsBackground dotColor="255, 255, 255" fadeColor="var(--color-primary)" />
        <div className="container">
          <h2 className="about-label">Interested in Joining BizzNEST?</h2>
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
              <p className="about-apply-title">One Year of Paid Professional Experience</p>
              <p className="about-cohort">Join our annual paid immersive program to gain hands-on experience, work on real client projects, and accelerate your professional growth. Annual cohort applications open in May. Join our interest list to get
                notified when applications open or when a spot becomes available.</p>
            </div>
            <div className="about-cta">
              <a
                className="about-interest-btn"
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Be the First to Know
              </a>
            </div>
          </div>
          <hr className="about-divider" />
          <div className="about-coordinator-inner">
            <div className="about-coordinator-main">
              <div className="about-coordinator-info">
                <h3 className="about-coordinator-title">Have Questions About the Application Process?</h3>
                <p className="about-coordinator-desc">
                  Our team is here to support you and provide the information you need to take the next step in your career journey.
                </p>
              </div>
            </div>
            <a href="/contact" className="about-coordinator-link">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
