import GridBackground from './GridBackground'
import './Testimonials.css'

const testimonials = [
  {
    tag: 'United Way',
    quote: 'Creativity, professionalism, and energy.',
    text: 'We are grateful for everything the BizzNEST team brought to our work, and we truly valued the opportunity to collaborate with them. They brought fresh ideas and perspectives that helped us think more strategically about our social media presence.',
    author: 'Pamela Velazquez Janusz',
    role: 'VP of Community Impact, United Way of Santa Cruz County',
    color: 'teal',
  },
  {
    tag: 'GreenLeaf Co.',
    quote: 'Captured our brand perfectly.',
    text: 'Working with BizzNEST was an incredible experience. They delivered a stunning website that perfectly captured our brand identity.',
    author: 'Sarah Chen',
    role: 'Founder, GreenLeaf Co.',
    color: 'green',
  },
  {
    tag: 'Nexus Labs',
    quote: 'Drove real engagement.',
    text: 'The video content BizzNEST produced for our campaign drove tremendous engagement. Highly recommend their creative services.',
    author: 'David Park',
    role: 'Marketing Director, Nexus Labs',
    color: 'dark',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <GridBackground animated direction="down-right" speed={3} />
      <div className="container">
        <h2 className="section-title testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-tray">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card t-card--${t.color}`}>
              <div className="t-card-top">
                <span className="t-card-pill">{t.tag}</span>
              </div>
              <p className="t-card-quote">{t.quote}</p>
              <p className="t-card-text">{t.text}</p>
              <div className="t-card-footer">
                <div className="t-card-divider" />
                <div className="t-card-author">
                  <span className="t-card-name">{t.author}</span>
                  <span className="t-card-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
