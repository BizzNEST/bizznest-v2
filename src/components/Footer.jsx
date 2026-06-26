import { Link } from 'react-router-dom'
import './Footer.css'

const serviceLinks = [
  { label: 'Design', to: '/services/design' },
  { label: 'Software Development', to: '/services/software-development' },
  { label: 'Marketing', to: '/services/marketing' },
]

const companyLinks = [
  { label: 'About Us', to: '/#about' },
  { label: 'Our Work', to: '/#work' },
  { label: 'Join Us', to: '/#join' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="BizzNEST" width="28" height="28" />
              <span>BizzNEST</span>
            </Link>
            <p className="footer-tagline">
              Bringing creativity to life through software development, design, and marketing.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
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
