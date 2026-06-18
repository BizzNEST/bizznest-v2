import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GridBackground from '../components/GridBackground'
import { getService } from '../data/services'
import './ServicePage.css'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) {
    return (
      <>
        <Header />
        <main className="service-page service-notfound">
          <div className="container">
            <h1 className="service-page-title">Coming soon</h1>
            <p className="service-blurb">This service page isn’t ready yet — check back shortly.</p>
            <Link to="/" className="btn btn-primary">Back home</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const { eyebrow, title, blurb, highlight, cta } = service

  return (
    <>
      <Header />
      <main className="service-page">
        <section className="service-hero">
          <GridBackground animated direction="down-right" speed={3} />
          <div className="container service-hero-inner">
            <span className="service-eyebrow">{eyebrow}</span>
            <h1 className="service-page-title">{title}</h1>
            <p className="service-blurb">{blurb}</p>
          </div>
        </section>

        <section className="service-highlight">
          <div className="container">
            <span className="service-section-label">{highlight.label}</span>
            <Link to={`/work/${highlight.slug}`} className="service-highlight-card">
              <div className="service-highlight-media">
                <img src={highlight.image} alt={highlight.title} loading="lazy" />
              </div>
              <div className="service-highlight-text">
                <span className="service-highlight-tag">{highlight.category}</span>
                <h2 className="service-highlight-title">{highlight.title}</h2>
                <p className="service-highlight-summary">{highlight.summary}</p>
                <span className="service-highlight-link">
                  View case study <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <div className="service-cta-card">
              <h2 className="service-cta-heading">{cta.heading}</h2>
              <p className="service-cta-text">{cta.text}</p>
              <Link to="/contact" className="btn btn-primary">{cta.buttonLabel}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
