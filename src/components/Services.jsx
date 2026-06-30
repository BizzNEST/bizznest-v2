import { Code, Palette, TrendingUp } from 'lucide-react'
import GridBackground from './GridBackground'
import './Services.css'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'We build digital solutions that help organizations innovate, explore AI-powered solutions, solve business problems, and move ideas forward.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Using thoughtful design, we craft user-centered experiences, visual identities, and digital interfaces that create lasting impact.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'We help mission-driven organizations and businesses increase their visibility and spark engagement with data-informed marketing campaigns and strategies.',
  },
]

export default function Services() {
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
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">
                <service.icon size={26} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
