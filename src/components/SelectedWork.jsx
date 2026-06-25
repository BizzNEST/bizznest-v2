import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import GridBackground from './GridBackground'
import './SelectedWork.css'

const projects = [
  {
    title: 'Adobe for Nonprofits',
    category: 'Training & Facilitation',
    image: '/images/adobe-nonprofits-cover.png',
    slug: 'adobe-nonprofits',
  },
  {
    title: 'Brown Issues',
    category: 'UX/UI Design',
    image: '/images/brownissues-cover.png',
    slug: 'brown-issues',
  },
  {
    title: "I'd Bite That",
    category: 'Marketing',
    image: '/images/id-bite-that-cover.png',
    slug: 'id-bite-that',
  },
  {
    title: 'Pennsylvania United',
    category: 'UX/UI Design',
    image: '/images/penn-united-cover.png',
    slug: 'penn-united',
  },
  {
    title: 'Special Parents Information Network (SPINSC)',
    category: 'UX/UI Design',
    image: '/images/spin-cover.png',
    slug: 'spin',
  },
  {
    title: 'Seledon Literacy Fund',
    category: 'Software Development',
    image: '/images/seledon-cover.png',
    slug: 'susie-seledon-literacy-fund',
  },
  {
    title: 'Rotorhead',
    category: 'UX/UI Design',
    image: '/images/rotorhead-cover.png',
    slug: 'rotorhead',
  },
  {
    title: 'Salinas Valley Adult Education Consortium',
    category: 'UX/UI Design',
    image: '/images/svaec-cover.png',
    slug: 'svaec',
  },
]

function renderCard(project) {
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
}

export default function SelectedWork() {
  const [expanded, setExpanded] = useState(false)
  const firstThree = projects.slice(0, 3)
  const rest = projects.slice(3)

  return (
    <section className="work" id="work">
      <GridBackground animated direction="down-right" speed={3} />
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <div className="work-grid">
          {firstThree.map(renderCard)}
        </div>

        {rest.length > 0 && (
          <div className={`work-extra ${expanded ? 'is-open' : ''}`}>
            <div className="work-extra-inner">
              <div className="work-grid work-grid--extra">
                {rest.map(renderCard)}
              </div>
            </div>
          </div>
        )}

        {rest.length > 0 && (
          <div className="work-cta">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show Less' : 'See All Work'}
              <ChevronDown size={16} className={`work-cta-chevron ${expanded ? 'is-open' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
