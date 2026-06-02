import { MapPin, Phone, Mail } from 'lucide-react'
import { GlowOverlay } from './GlowEffect'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact glow-section" id="contact">
      <GlowOverlay />
      <div className="container">
        <h2 className="contact-heading">We'd love to hear from you</h2>
        <p className="contact-subheading">Reach out with any questions about our services and projects</p>
        <div className="contact-inner">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Innovation Street<br />San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>(831) 555-0100</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>hello@bizznest.org</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="contact-form-title">Send us a message</h3>
            <div className="contact-form-row">
              <input type="text" placeholder="First Name" aria-label="First Name" />
              <input type="text" placeholder="Last Name" aria-label="Last Name" />
            </div>
            <input type="email" placeholder="you@example.com" aria-label="Email" />
            <input type="tel" placeholder="(831) 555-0100" aria-label="Phone Number" />
            <textarea rows={4} placeholder="Tell us about your project..." aria-label="Message" />
            <button type="submit" className="btn btn-primary contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
