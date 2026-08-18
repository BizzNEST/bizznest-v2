import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, Lightbulb, TrendingUp, Layers, Cpu, Puzzle } from 'lucide-react'
import AnimatedDotsBackground from './AnimatedDotsBackground'
import './Partners.css'

const fits = [
  { title: 'Launch new initiatives', description: 'Campaigns, platforms, and workshops.', icon: Rocket },
  { title: 'Test new ideas', description: 'Concepts brought to life, fast.', icon: Lightbulb },
  { title: 'Scale their brand', description: 'Stronger positioning, wider reach.', icon: TrendingUp },
  { title: 'Build digital products', description: 'Products and experiences, end to end.', icon: Layers },
  { title: 'Explore AI', description: 'AI and emerging technologies.', icon: Cpu },
  { title: 'Solve complex challenges', description: 'A collaborative, fresh perspective.', icon: Puzzle },
]

export default function Partners() {
  const [flippedIndex, setFlippedIndex] = useState(null)

  return (
    <section className="partners" id="partners">
      <AnimatedDotsBackground
        dotColor="26, 53, 53"
        dotSize={1.75}
        dotSpacing={20}
        fadeColor="var(--color-off-white)"
      />
      <div className="container">
        <div className="partners-split">
          <div className="partners-head">
            <p className="partners-eyebrow">A Strategic Partner for Innovation</p>
            <h2 className="partners-title">Built for <span>What&rsquo;s Next</span></h2>
            <p className="partners-lead">
              BizzNEST is an innovation consultancy delivering strategic marketing, software
              development, AI, and digital solutions led by emerging talent. We partner with
              established, values-aligned organizations and growth-stage companies that are ready to
              innovate, solve complex challenges, and turn ideas into action.
            </p>
          </div>

          <div className="partners-media">
            <img
              src="/partners-collaboration.webp"
              alt="Two BizzNEST interns working together at a laptop"
              loading="lazy"
            />
          </div>

          <h3 className="partners-subhead">A great fit if you&rsquo;re looking to:</h3>

          <ul className="partners-list">
            {fits.map((fit, i) => (
              <li
                key={fit.title}
                className="partners-item"
                onMouseEnter={() => setFlippedIndex(i)}
                onMouseLeave={() => setFlippedIndex(null)}
              >
                <div className={`partners-item-inner${flippedIndex === i ? ' is-flipped' : ''}`}>
                  <div className="partners-item-front">
                    <fit.icon className="partners-item-icon" size={18} />
                    <h4 className="partners-item-title">{fit.title}</h4>
                  </div>
                  <div className="partners-item-back">
                    <p className="partners-item-desc">{fit.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="partners-invite">
            <h3 className="partners-invite-title">More Than a Project. A Partnership.</h3>
            <p className="partners-invite-desc">
              BizzNEST works alongside your team to build, test, and scale what&rsquo;s next,
              bringing together emerging talent and industry expertise to move ideas from concept
              to execution. Tell us what you&rsquo;re working on and our team will be in touch.
            </p>
            <Link to="/contact" className="partners-btn">Partner With BizzNEST</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
