import { Link } from 'react-router-dom'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <video
            className="cta-video"
            src="/videos/sccmod.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="cta-content">
            <div className="cta-glass">
              <h2 className="cta-heading">
                Have a <span>Project</span> in Mind?
              </h2>
              <p className="cta-desc">
                Ready to build something impactful? Partner with BizzNEST on your next project or hire skilled professionals in marketing, design, software development, and technology.
              </p>
              <Link to="/contact" className="cta-btn">Start a Project</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
