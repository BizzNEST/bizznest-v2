import GridBackground from './GridBackground'
import './FeaturedProject.css'

const ARTICLE_URL =
  'https://digitalnest.org/bizznest-brings-childrens-drawings-to-life-with-ai-machine-learning/'

export default function FeaturedProject() {
  return (
    <section className="featured" id="featured">
      <GridBackground animated direction="down-right" speed={3} />
      <div className="container">
        <div className="featured-header">
          <h2 className="featured-title">AI Children's Museum Exhibit</h2>
          <a
            href={ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Learn More
          </a>
        </div>
        <div className="featured-media">
          <video
            className="featured-video"
            controls
            preload="metadata"
            poster="/videos/sccmod-poster.jpg"
          >
            <source src="/videos/sccmod.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
