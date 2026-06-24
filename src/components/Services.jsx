import { Code, Palette, TrendingUp } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'We build fast, responsive, and user-friendly websites and web applications tailored to your business needs',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our design team creates visually stunning and user-focused experiences that elevate your brand identity',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'We help your business grow with strategic marketing solutions that drive awareness, engagement, and conversions',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
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
