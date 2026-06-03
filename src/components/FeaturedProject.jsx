import { Play } from 'lucide-react'
import GridBackground from './GridBackground'
import './FeaturedProject.css'

export default function FeaturedProject() {
  return (
    <section className="featured" id="featured">
      <GridBackground />
      <div className="container">
        <div className="featured-header">
          <h2 className="featured-title">AI Children's Museum Exhibit</h2>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
        <div className="featured-media">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=500&fit=crop"
            alt="AI Children's Museum Exhibit"
            loading="lazy"
          />
          <div className="featured-play">
            <Play size={32} fill="white" />
          </div>
        </div>
      </div>
    </section>
  )
}
