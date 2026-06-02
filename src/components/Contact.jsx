import { GlowOverlay } from './GlowEffect'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact glow-section" id="contact">
      <GlowOverlay />
      <div className="container">
        <div className="contact-brand">BizzNEST</div>
        <h2 className="contact-heading">We'd love to hear from you</h2>
        <p className="contact-subheading">Reach out with any questions about our services and projects</p>
      </div>
    </section>
  )
}
