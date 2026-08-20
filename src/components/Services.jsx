import { useState } from 'react'
import { Code, Palette, TrendingUp, ChevronDown } from 'lucide-react'
import GridBackground from './GridBackground'
import './Services.css'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'We build digital solutions that help organizations innovate, explore AI-powered solutions, solve business problems, and move ideas forward.',
    offerings: [
      'Software applications',
      'Custom product development',
      'AI-driven solutions',
      'Custom Websites',
    ],
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Using thoughtful design, we craft user-centered experiences, visual identities, and digital interfaces that create lasting impact.',
    offerings: [
      'UX/UI Design & Research',
      'Brand-Led Web Design',
      'Responsive & Accessibility Design',
      'Brand Identity',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'We help mission-driven organizations and businesses increase their visibility and spark engagement with data-informed marketing campaigns and strategies.',
    offerings: [
      'Branding & Strategy',
      'Social Media Management',
      'Email Marketing',
      'Corporate & Business Videos',
      'Creative & Storytelling Videos',
      'Digital Marketing',
      'Content Strategy',
    ],
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleCard = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="services" id="services">
      <GridBackground
        animated
        direction="down-right"
        speed={3}
        strokeColor="rgba(26, 53, 53, 0.08)"
        fadeColor="var(--color-white)"
      />
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, i) => {
            const isOpen = openIndex === i
            const panelId = `service-offerings-${i}`
            return (
              <div key={service.title} className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">
                    <service.icon size={26} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-desc">{service.description}</p>
                {/* The toggle is the button, and the panel is its sibling. The
                    card itself can't be the button: a <button> may only contain
                    phrasing content, so the heading, paragraph and list it used
                    to wrap were invalid markup. */}
                <button
                  type="button"
                  className="service-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleCard(i)}
                >
                  <span>{isOpen ? 'Hide offerings' : 'See offerings'}</span>
                  <ChevronDown
                    size={18}
                    className={`service-toggle-icon${isOpen ? ' is-open' : ''}`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-label={`${service.title} offerings`}
                  className={`service-offerings${isOpen ? ' is-open' : ''}`}
                >
                  <ul className="service-offerings-list">
                    {service.offerings.map((offering) => (
                      <li key={offering}>{offering}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
