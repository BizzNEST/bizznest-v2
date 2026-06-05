import { Award, Users, Target } from 'lucide-react'
import CountUp from './CountUp'
import GridBackground from './GridBackground'
import './Milestones.css'

const stats = [
  { icon: Award, value: 25, suffix: '+', label: 'Awards Won' },
  { icon: Users, value: 150, suffix: '+', label: 'Satisfied Customers' },
  { icon: Target, value: 300, suffix: '+', label: 'Projects Completed' },
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
        <h2 className="section-title">Our Milestones</h2>
        <div className="milestones-hero">
          <span className="milestones-number">10</span>
          <div className="milestones-right">
            <span className="milestones-label">YEARS OF</span>
            <div className="milestones-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="milestone-stat">
                  <stat.icon size={26} className="milestone-icon" />
                  <span className="milestone-value">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="milestone-text">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
