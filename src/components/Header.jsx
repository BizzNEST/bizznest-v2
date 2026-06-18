import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'

const serviceLinks = [
  { label: 'Design', href: '/services/design' },
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'Marketing', href: '/services/marketing' },
]

const navLinks = [
  { label: 'Why Us', href: '/#about' },
  { label: 'Join Us', href: '/#join' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="BizzNEST" width="32" height="32" />
          <span>BizzNEST</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <div className={`header-dropdown ${servicesOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="header-link header-dropdown-toggle"
              onClick={() => setServicesOpen((open) => !open)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={16} className="header-dropdown-chevron" />
            </button>
            <div className="header-dropdown-menu">
              {serviceLinks.map((service) => (
                <Link
                  key={service.label}
                  to={service.href}
                  className="header-dropdown-item"
                  onClick={closeMenu}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="header-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/contact" className="btn btn-primary header-cta-mobile" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>

        <Link to="/contact" className="btn btn-primary header-cta">
          Contact Us
        </Link>

        <button
          className="header-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
