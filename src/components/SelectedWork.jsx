import { ArrowRight } from 'lucide-react'
import './SelectedWork.css'

const projects = [
  {
    title: 'OCCORD',
    category: 'Software Development',
    image: '/occord-desktop.png',
  },
  {
    title: 'Trauma Response Brochure',
    category: 'Graphic Design',
    image: '/brochure.png',
  },
  {
    title: 'Seledon Literacy Fund',
    category: 'Software Development',
    image: '/case-studies/seledon-literacy.jpg',
  },
  {
    title: 'ParkRx',
    category: 'Software Development',
    image: '/parkrx-desktop.png',
  },
  {
    title: 'Brown Issues',
    category: 'Software Development',
    image: '/case-studies/brown-issues.png',
  },
  {
    title: 'Salinas Valley Adult Education',
    category: 'Software Development',
    image: '/case-studies/svaec.jpg',
  },
]

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <div key={project.title} className="work-card">
              <div className="work-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="work-card-info">
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-category">{project.category}</p>
                <a href="#" className="work-card-link">
                  View Project <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="work-cta">
          <a href="#" className="btn btn-outline">See All Work</a>
        </div>
      </div>
    </section>
  )
}
