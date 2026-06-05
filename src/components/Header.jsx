import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#about' },
  { label: 'Join Us', href: '#join' },
  { label: 'Contact', href: '/contact', isRoute: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="header-logo">
          <img src="/logo.png" alt="BizzNEST" width="32" height="32" />
          <span>BizzNEST</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="header-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="header-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <Link to="/contact" className="btn btn-primary header-cta-mobile" onClick={() => setMenuOpen(false)}>
            Get Started
          </Link>
        </nav>

        <Link to="/contact" className="btn btn-primary header-cta">
          Get Started
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
