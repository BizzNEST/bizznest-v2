import { Award, Users, CircleCheckBig } from 'lucide-react'
import './Milestones.css'

const stats = [
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: Users, value: '150+', label: 'Satisfied Customers' },
  { icon: CircleCheckBig, value: '300+', label: 'Projects Completed' },
]

export default function Milestones() {
  return (
    <section className="milestones">
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
                  <span className="milestone-value">{stat.value}</span>
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
