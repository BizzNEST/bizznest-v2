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
      'End-to-end product development',
      'Custom product development',
      'AI-driven solutions',
      'Custom Websites',
      'CMS Integration',
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
      'SEO Optimization',
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
              <button
                key={service.title}
                type="button"
                className="service-card"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleCard(i)}
              >
                <div className="service-card-header">
                  <div className="service-icon">
                    <service.icon size={26} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-desc">{service.description}</p>
                <span className="service-toggle">
                  <span>{isOpen ? 'Hide offerings' : 'See offerings'}</span>
                  <ChevronDown
                    size={18}
                    className={`service-toggle-icon${isOpen ? ' is-open' : ''}`}
                  />
                </span>
                <div
                  id={panelId}
                  className={`service-offerings${isOpen ? ' is-open' : ''}`}
                >
                  <ul className="service-offerings-list">
                    {service.offerings.map((offering) => (
                      <li key={offering}>{offering}</li>
                    ))}
                  </ul>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
