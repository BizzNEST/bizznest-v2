import { Lightbulb, Settings, Target } from 'lucide-react'
import GridBackground from './GridBackground'
import ContactCTA from './ContactCTA'
import './Contact.css'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Share Your Vision',
    body: 'Provide as much detail as you can about your project so we understand exactly what you need.',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Review & Reach Out',
    body: "Once you've completed the form, we'll schedule a discovery call to better understand your needs and goals.",
  },
  {
    number: '03',
    icon: Target,
    title: 'Proposal & Next Steps',
    body: "Once we have all the details, we'll create a customized proposal for you to review.",
  },
]

const services = [
  'Design',
  'Digital Marketing',
  'Software & Web Development',
  'Video Production',
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <GridBackground animated direction="down-right" speed={3} />
      <div className="container contact-container">
        <div className="contact-inner">

          <div className="contact-left">
            <span className="contact-eyebrow">Contact Us</span>
            <h2 className="contact-heading">This is BizzNEST!</h2>
            <p className="contact-intro">
              <strong>We're powered by young minds with bold ideas!</strong> Share your vision, and we'll review it, reach out for details, and see how we can bring it to life.{' '}
              <strong>(We stay bizzy at BizzNEST!)</strong> If you move forward with us, we'll craft a proposal just for you. Expect a response{' '}
              <strong>within 5 business days.</strong>
            </p>

            <div className="contact-steps">
              {steps.map(({ number, icon: Icon, title, body }) => (
                <div className="contact-step" key={number}>
                  <div className="contact-step-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="contact-step-text">
                    <span className="contact-step-label">STEP <span className="contact-step-number">{number}</span></span>
                    <h3 className="contact-step-title">{title}</h3>
                    <p className="contact-step-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <ContactCTA />
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={e => e.preventDefault()}>

              <div className="contact-form-group">
                <label className="contact-label">Name</label>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label className="contact-sublabel">First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="contact-field">
                    <label className="contact-sublabel">Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-sublabel required">Email</label>
                <input type="email" required />
              </div>

              <div className="contact-field">
                <label className="contact-sublabel required">Phone</label>
                <input type="tel" required />
              </div>

              <div className="contact-field">
                <label className="contact-sublabel required">What services do you need?</label>
                <div className="contact-checkboxes">
                  {services.map(service => (
                    <label className="contact-checkbox-label" key={service}>
                      <input type="checkbox" value={service} />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-sublabel required">Organization Name</label>
                <input type="text" required />
              </div>

              <div className="contact-field">
                <label className="contact-sublabel required">Can you provide a brief description of your organization?</label>
                <textarea rows={3} required />
              </div>

              <div className="contact-field">
                <label className="contact-sublabel required">Do you have an idea of who your target audience is?</label>
                <textarea rows={3} required />
              </div>

              <button type="submit" className="btn contact-submit">Submit</button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
