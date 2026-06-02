import { ArrowRight } from 'lucide-react'
import { GlowOverlay } from './GlowEffect'
import './SelectedWork.css'

const projects = [
  {
    title: 'CityLab Platform',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    title: 'Watsonville Police Department',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop',
  },
  {
    title: 'Pajaro Monterey County',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=300&fit=crop',
  },
  {
    title: 'Aptos Branch Opening Video',
    category: 'Videography',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&h=300&fit=crop',
  },
  {
    title: 'SketchLogic',
    category: 'Brand Design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
  },
  {
    title: 'Bree Dance Project',
    category: 'Videography',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86c3f5f5?w=400&h=300&fit=crop',
  },
]

export default function SelectedWork() {
  return (
    <section className="work glow-section" id="work">
      <GlowOverlay />
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
