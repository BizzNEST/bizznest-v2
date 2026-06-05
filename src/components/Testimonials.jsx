import './Testimonials.css'

const testimonials = [
  {
    tag: 'TechStart Inc.',
    quote: 'Exceeded every expectation.',
    text: 'BizzNEST transformed our digital presence with their innovative approach. Their blend of creativity and technical expertise set them apart.',
    author: 'Mike Williamson',
    role: 'CEO, TechStart Inc.',
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
