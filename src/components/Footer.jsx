import './Footer.css'

const serviceLinks = ['Software Development', 'Graphic Design', 'Marketing']
const companyLinks = ['About Us', 'Our Work', 'Careers', 'Blog']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="BizzNEST" width="28" height="28" />
              <span>BizzNEST</span>
            </div>
            <p className="footer-tagline">
              Bringing creativity to life through software development, design, and marketing.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link}><a href="#services">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}><a href="#about">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@bizznest.org">hello@bizznest.org</a></li>
              <li><a href="tel:+18315550100">(831) 555-0100</a></li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BizzNEST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
