import { Award, Users, Rocket } from 'lucide-react'
import CountUp from './CountUp'
import GridBackground from './GridBackground'
import './Milestones.css'

const stats = [
  { icon: Award, value: 25, suffix: '+', label: 'Awards Won' },
  { icon: Users, value: 150, suffix: '+', label: 'Satisfied Customers' },
  { icon: Rocket, value: 300, suffix: '+', label: 'Projects Completed' },
]

export default function Milestones() {
  return (
    <section className="milestones">
      <GridBackground
        animated
        direction="down-right"
        speed={3}
        strokeColor="rgba(26, 53, 53, 0.08)"
        fadeColor="var(--color-white)"
      />
      <div className="container">
        <div className="milestones-card">
          <span className="milestones-eyebrow">Our Milestones</span>
          <h2 className="milestones-heading">10 Years of Experience</h2>
          <div className="milestones-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="milestone-stat">
                <div className="milestone-head">
                  <stat.icon size={28} className="milestone-icon" strokeWidth={2.25} />
                  <span className="milestone-text">{stat.label}</span>
                </div>
                <span className="milestone-value">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
