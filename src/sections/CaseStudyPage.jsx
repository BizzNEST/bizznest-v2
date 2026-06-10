import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getCaseStudy } from '../data/caseStudies'
import './CaseStudyPage.css'

const INQUIRE_URL =
  'https://form.asana.com/?k=eHD0SX73oE0tb1nT6Sej5w&d=19816762819698'

// ---------------------------------------------------------------------------
// Img – renders an image or a gray placeholder when src is absent
// ---------------------------------------------------------------------------
function Img({ image, className = '', onClick }) {
  if (image?.src) {
    return (
      <img
        src={image.src}
        alt={image.alt ?? ''}
        className={`cs-img ${className}`}
        style={image.position ? { objectPosition: image.position } : undefined}
        onClick={onClick}
      />
    )
  }
  return (
    <div className={`cs-img-placeholder ${className}`} onClick={onClick}>
      <span>{image?.alt ?? 'Image'}</span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// SectionRow – two-column layout used throughout the page
// layout: 'default' | '50-50' | '50-50-right-image'
// ---------------------------------------------------------------------------
function SectionRow({
  label,
  subtitle,
  layout = 'default',
  children,
  rightContent,
  bottomContent,
}) {
  const is5050 = layout === '50-50' || layout === '50-50-right-image'

  if (layout === 'stacked') {
    return (
      <div className="cs-row">
        <div className="cs-row-grid cs-row-grid--stacked">
          <h2 className="cs-row-title">{label}</h2>
          <div className="cs-row-body">{children}</div>
        </div>
        {bottomContent && <div className="cs-row-bottom">{bottomContent}</div>}
      </div>
    )
  }

  return (
    <div className="cs-row">
      <div className={`cs-row-grid ${is5050 ? 'cs-row-grid--5050' : 'cs-row-grid--default'}`}>
        <div className="cs-row-head">
          <h2 className={is5050 ? 'cs-row-title' : 'cs-row-label'}>{label}</h2>
          {subtitle && <p className="cs-row-subtitle">{subtitle}</p>}
          {layout === '50-50-right-image' && (
            <div className="cs-row-body">{children}</div>
          )}
        </div>
        {layout === '50-50-right-image' ? (
          <div className="cs-row-right">{rightContent}</div>
        ) : (
          <div className="cs-row-body">{children}</div>
        )}
      </div>
      {bottomContent && <div className="cs-row-bottom">{bottomContent}</div>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ImageGrid – 1-3 images, with an optional 1/3-2/3 two-up layout
// ---------------------------------------------------------------------------
function ImageGrid({ images, layout = 'default', onImageClick }) {
  if (!images || images.length === 0) return null

  if (layout === 'natural') {
    return (
      <div className="cs-imggrid-natural">
        {images.map((img, i) => (
          <Img key={i} image={img} className="cs-img--natural" onClick={() => onImageClick?.(img)} />
        ))}
      </div>
    )
  }

  if (layout === '1/3-2/3' && images.length === 2) {
    return (
      <div className="cs-imggrid-twoup">
        <div className="cs-imggrid-frame">
          <Img image={images[0]} className="cs-img--contain" onClick={() => onImageClick?.(images[0])} />
        </div>
        <div className="cs-imggrid-frame">
          <Img image={images[1]} className="cs-img--contain" onClick={() => onImageClick?.(images[1])} />
        </div>
      </div>
    )
  }

  const colClass =
    images.length === 1
      ? 'cs-imggrid--1'
      : images.length === 2
      ? 'cs-imggrid--2'
      : 'cs-imggrid--3'
  return (
    <div className={`cs-imggrid ${colClass}`}>
      {images.map((img, i) => (
        <div key={i} className="cs-imggrid-cell">
          <Img image={img} onClick={() => onImageClick?.(img)} />
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// renderContentBlock – handles plain paragraphs and "-"/"*" bullet lists
// ---------------------------------------------------------------------------
function renderContentBlock(content) {
  if (!content) return null
  if (typeof content === 'string') {
    return <p className="cs-p">{content}</p>
  }

  const elements = []
  let currentList = []

  const flushList = (key) => {
    if (currentList.length === 0) return
    const items = [...currentList]
    elements.push(
      <ul key={key} className="cs-list">
        {items.map((li, liIdx) => (
          <li key={liIdx} className="cs-list-item">
            <span className="cs-list-dash">–</span>
            <span>{li}</span>
          </li>
        ))}
      </ul>
    )
    currentList = []
  }

  content.forEach((item, index) => {
    const trimmed = item.trim()
    if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
      currentList.push(trimmed.substring(1).trim())
    } else {
      flushList(`list-${index}`)
      elements.push(
        <p key={index} className="cs-p">
          {item}
        </p>
      )
    }
  })
  flushList('list-final')

  return <div className="cs-content">{elements}</div>
}

// ---------------------------------------------------------------------------
// CaseStudyPage
// ---------------------------------------------------------------------------
export default function CaseStudyPage() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const data = getCaseStudy(slug)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    document.body.style.overflow = activeImage ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeImage])

  if (!data) {
    return (
      <div className="cs-page">
        <Header />
        <main className="cs-notfound">
          <h1>Case study not found</h1>
          <p>We couldn’t find a case study at this address.</p>
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="cs-page">
      <Header />

      <main className="cs-main">
        <div className="cs-container">
          {/* Back button */}
          <div className="cs-back">
            <button onClick={() => navigate(-1)} className="cs-back-btn">
              ← Back
            </button>
          </div>

          {/* Title */}
          <h1 className="cs-title">{data.client}</h1>

          {/* Hero */}
          {data.heroImage?.src && (
            <div className="cs-hero">
              <img
                src={data.heroImage.src}
                alt={data.heroImage.alt ?? ''}
                className="cs-hero-img"
                style={data.heroImage.position ? { objectPosition: data.heroImage.position } : undefined}
              />
            </div>
          )}

          {/* Meta bar */}
          <div className="cs-meta">
            <div className="cs-meta-cell">
              <h3 className="cs-meta-label">Date</h3>
              <p className="cs-meta-value">{data.date}</p>
            </div>

            <div className="cs-meta-cell">
              <h3 className="cs-meta-label">Tools</h3>
              <div className="cs-tools">
                {data.tools.map((tool) => (
                  <span key={tool} className="cs-tool-chip">{tool}</span>
                ))}
              </div>
            </div>

            {data.siteUrl ? (
              <div className="cs-meta-cell">
                <h3 className="cs-meta-label">Site</h3>
                <a
                  href={data.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-meta-link"
                >
                  {data.siteName ?? data.siteUrl}
                </a>
              </div>
            ) : (
              <div className="cs-meta-cell" />
            )}
          </div>

          {/* Content sections */}
          <div className="cs-sections">
            {/* Problem */}
            <SectionRow
              label={data.problem.title ?? 'Problem'}
              subtitle={data.problem.subtitle}
              layout="50-50"
            >
              {renderContentBlock(data.problem.description)}
            </SectionRow>

            {/* Goals & Objectives */}
            <SectionRow label={data.goalsAndObjectives.title ?? 'Goals & Objectives'} layout="50-50">
              {data.goalsAndObjectives.content ? (
                renderContentBlock(data.goalsAndObjectives.content)
              ) : (
                <>
                  {data.goalsAndObjectives.intro && <p className="cs-p">{data.goalsAndObjectives.intro}</p>}
                  {data.goalsAndObjectives.items && (
                    <ul className="cs-list">
                      {data.goalsAndObjectives.items.map((item, i) => (
                        <li key={i} className="cs-list-item">
                          <span className="cs-list-dash">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </SectionRow>

            {/* Research */}
            <SectionRow label={data.research.title ?? 'Research'} layout="50-50">
              {data.research.content ? (
                renderContentBlock(data.research.content)
              ) : (
                <>
                  <p className="cs-p">{data.research.intro}</p>
                  {data.research.questions && data.research.questions.length > 0 && (
                    <ul className="cs-list">
                      {data.research.questions.map((q, i) => (
                        <li key={i} className="cs-list-item">
                          <span className="cs-list-dash">–</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </SectionRow>

            {/* Research Methods */}
            <SectionRow
              label={data.researchMethods.title ?? 'Research Methods'}
              layout="50-50"
              bottomContent={
                <ImageGrid
                  images={data.researchMethods.images}
                  layout="1/3-2/3"
                  onImageClick={setActiveImage}
                />
              }
            >
              {renderContentBlock(data.researchMethods.description)}
            </SectionRow>

            {/* Key Findings */}
            <SectionRow
              label={data.keyFindings.title ?? 'Key Findings'}
              layout={data.keyFindings.image ? '50-50-right-image' : '50-50'}
              rightContent={
                data.keyFindings.image && (
                  <div className="cs-square">
                    <Img image={data.keyFindings.image} onClick={() => setActiveImage(data.keyFindings.image)} />
                  </div>
                )
              }
            >
              {typeof data.keyFindings.content === 'string' ? (
                <p className="cs-p">{data.keyFindings.content}</p>
              ) : (
                renderContentBlock(data.keyFindings.content)
              )}
            </SectionRow>

            {/* Our Solution */}
            <SectionRow
              label={data.ourSolution.title ?? 'Our Solution'}
              layout="50-50-right-image"
              rightContent={
                data.ourSolution.image && (
                  <div className="cs-square">
                    <Img image={data.ourSolution.image} onClick={() => setActiveImage(data.ourSolution.image)} />
                  </div>
                )
              }
            >
              {data.ourSolution.paragraphs.map((p, i) => (
                <p key={i} className="cs-p">{p}</p>
              ))}
            </SectionRow>

            {/* Visual Direction (optional) */}
            {data.visualDirection && (
              <SectionRow
                label={data.visualDirection.title ?? 'Visual Direction'}
                layout={data.visualDirection.layout ?? '50-50-right-image'}
                rightContent={
                  data.visualDirection.layout !== 'stacked' &&
                  data.visualDirection.images?.length > 0 && (
                    <div className="cs-visual-direction-stack">
                      {data.visualDirection.images.map((img, i) => (
                        <div key={i} className="cs-img-frame">
                          <Img
                            image={img}
                            className="cs-img--contain"
                            onClick={() => setActiveImage(img)}
                          />
                        </div>
                      ))}
                    </div>
                  )
                }
                bottomContent={
                  data.visualDirection.layout === 'stacked' &&
                  data.visualDirection.images?.length > 0 && (
                    <ImageGrid
                      images={data.visualDirection.images}
                      onImageClick={setActiveImage}
                    />
                  )
                }
              >
                {renderContentBlock(data.visualDirection.description)}
              </SectionRow>
            )}

            {/* Wireframes / Lo-Fi Designs (optional) */}
            {data.wireframes && (
              <SectionRow
                label={data.wireframes.title ?? 'Wireframes / Lo-Fi Designs'}
                layout={data.wireframes.layout ?? '50-50'}
                bottomContent={
                  data.wireframes.images?.length > 0 && (
                    <ImageGrid
                      images={data.wireframes.images}
                      layout={data.wireframes.layout === 'stacked' ? 'natural' : 'default'}
                      onImageClick={setActiveImage}
                    />
                  )
                }
              >
                {renderContentBlock(data.wireframes.description)}
              </SectionRow>
            )}

            {/* High-Fidelity Designs (optional) */}
            {data.highFidelityDesigns && (
              <SectionRow
                label={data.highFidelityDesigns.title ?? 'High-Fidelity Designs'}
                layout="50-50-right-image"
                rightContent={
                  data.highFidelityDesigns.images?.length > 0 && (
                    <div className="cs-img-frame">
                      <Img
                        image={data.highFidelityDesigns.images[0]}
                        className="cs-img--contain"
                        onClick={() => setActiveImage(data.highFidelityDesigns.images[0])}
                      />
                    </div>
                  )
                }
              >
                {renderContentBlock(data.highFidelityDesigns.description)}
              </SectionRow>
            )}

            {/* CTA */}
            <div className="cs-cta">
              {data.siteUrl && (
                <a href={data.siteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  Visit Project
                  <ExternalLink size={16} />
                </a>
              )}
              <a href={INQUIRE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Inquire About Similar Projects
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Image lightbox modal */}
      {activeImage && (
        <div className="cs-lightbox" onClick={() => setActiveImage(null)}>
          <div className="cs-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt ?? ''} className="cs-lightbox-img" />
            {activeImage.alt && <p className="cs-lightbox-caption">{activeImage.alt}</p>}
            <button className="cs-lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close">
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
