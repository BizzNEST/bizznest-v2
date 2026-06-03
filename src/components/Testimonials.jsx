import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    text: 'BizzNEST transformed our digital presence with their innovative approach. Their team of creativity and technical expertise exceeded our expectations.',
    author: 'Mike Williamson',
    role: 'CEO, TechStart Inc.',
  },
  {
    text: 'Working with BizzNEST was an incredible experience. They delivered a stunning website that perfectly captured our brand identity.',
    author: 'Sarah Chen',
    role: 'Founder, GreenLeaf Co.',
  },
  {
    text: 'The video content BizzNEST produced for our campaign drove tremendous engagement. Highly recommend their creative services.',
    author: 'David Park',
    role: 'Marketing Director, Nexus Labs',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-brand">BizzNEST</div>
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-card">
          <Quote size={32} className="testimonial-quote" />
          <p className="testimonial-text">{testimonials[current].text}</p>
          <div className="testimonial-author">
            <strong>{testimonials[current].author}</strong>
            <span>{testimonials[current].role}</span>
          </div>
        </div>
        <div className="testimonial-nav">
          <button onClick={prev} className="testimonial-btn" aria-label="Previous testimonial">
            <ChevronLeft size={20} />
          </button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="testimonial-btn" aria-label="Next testimonial">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
