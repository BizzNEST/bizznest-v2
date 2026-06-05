import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#about' },
  { label: 'Join Us', href: '/#join' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src="/logo.png" alt="BizzNEST" width="32" height="32" />
          <span>BizzNEST</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="header-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary header-cta-mobile" onClick={() => setMenuOpen(false)}>
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
