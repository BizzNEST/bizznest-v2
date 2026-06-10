import { Link } from 'react-router-dom'
import GridBackground from './GridBackground'
import './SelectedWork.css'

const projects = [
  {
    title: 'OCCORD',
    category: 'Software Development',
    image: '/occord-desktop.png',
    slug: 'occord',
  },
  {
    title: 'Trauma Response Brochure',
    category: 'Graphic Design',
    image: '/brochure.png',
  },
  {
    title: 'Seledon Literacy Fund',
    category: 'Software Development',
    image: '/images/seledon-hero.png',
    slug: 'susie-seledon-literacy-fund',
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
    image: '/images/svaec-hero.webp',
    slug: 'svaec',
  },
]

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <GridBackground animated direction="down-right" speed={3} />
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <div className="work-grid">
          {projects.map((project) => {
            const inner = (
              <>
                <img src={project.image} alt={project.title} className="work-card-image" loading="lazy" />
                <div className="work-card-blur" />
                <div className="work-card-overlay">
                  <span className="work-card-tag">{project.category}</span>
                  <h3 className="work-card-title">{project.title}</h3>
                </div>
              </>
            )
            return project.slug ? (
              <Link key={project.title} to={`/work/${project.slug}`} className="work-card">
                {inner}
              </Link>
            ) : (
              <div key={project.title} className="work-card">
                {inner}
              </div>
            )
          })}
        </div>
        <div className="work-cta">
          <a href="#" className="btn btn-outline">See All Work</a>
        </div>
      </div>
    </section>
  )
}
