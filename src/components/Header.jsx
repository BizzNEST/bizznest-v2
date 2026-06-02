import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#about' },
  { label: 'Join Us', href: '#join' },
  { label: 'Contact', href: '#contact' },
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary header-cta-mobile" onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </nav>

        <a href="#contact" className="btn btn-primary header-cta">
          Get Started
        </a>

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
