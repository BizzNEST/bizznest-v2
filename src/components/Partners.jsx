import { Rocket, Globe, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedDotsBackground from './AnimatedDotsBackground'
import './Partners.css'

const capabilities = [
  {
    title: 'Strategy & Research',
    description: 'Discover market gaps, profile competitors, and validate core technological concepts before you invest in building.',
    icon: Rocket,
  },
  {
    title: 'Design & Prototype',
    description: 'Shape intuitive user journeys, interactive UI prototypes, and test usability with real-world users fast.',
    icon: Globe,
  },
  {
    title: 'Build & Scale',
    description: 'Engineer robust digital platforms, custom software tools, and clean AI systems built to scale with your ambition.',
    icon: Lightbulb,
  },
]

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <AnimatedDotsBackground
        dotColor="255, 255, 255"
        dotSize={1.75}
        dotSpacing={20}
        fadeColor="var(--color-dark-section)"
      />
      <div className="container">
        <div className="partners-header">
          <h2 className="partners-title">Built for <span>What&rsquo;s Next</span></h2>
          <p className="partners-lead">
            We partner with organizations that share our vision for innovation. Together, we
            bridge the gap between ambition and execution, helping you solve complex challenges
            and build for the future.
          </p>
        </div>

        <div className="partners-split">
          <ul className="partners-list">
            {capabilities.map((capability) => (
              <li key={capability.title} className="partners-item">
                <div className="partners-item-icon">
                  <capability.icon size={28} />
                </div>
                <div className="partners-item-body">
                  <h4 className="partners-item-title">{capability.title}</h4>
                  <p className="partners-item-desc">{capability.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="partners-invite">
            <h3 className="partners-invite-title">More Than a Project. A Partnership.</h3>
            <p className="partners-invite-desc">
              Whether you&rsquo;re exploring an idea, launching an initiative, or looking to grow,
              we connect emerging talent with industry expertise to turn ideas into action. Tell us
              what you&rsquo;re working on, what you&rsquo;re trying to solve, or where you see an
              opportunity. Complete our partnership intake form, and our team will be in touch.
            </p>
            <Link to="/contact" className="partners-btn">Partner With BizzNEST</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
