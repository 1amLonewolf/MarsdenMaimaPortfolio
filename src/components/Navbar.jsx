import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Navbar Component
 * 
 * Features:
 * - React state-based mobile menu toggle (no Bootstrap JS dependency)
 * - Scroll detection for navbar styling
 * - Accessible hamburger menu with ARIA labels
 * - Smooth animations for mobile menu
 */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Brand */}
          <NavLink 
            to="/" 
            className="navbar-brand"
            aria-label="Marsden Maima - Home"
          >
            <div className="logo-wrapper">
              <img 
                src="/logo-wolf.png" 
                alt="Lonewolf Logo" 
                className="logo-image"
                aria-hidden="true"
              />
            </div>
            <span className="code-bracket">&lt;</span>
            Marsden
            <span className="code-bracket">/&gt;</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="nav-link"
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-toggler d-md-none ${isMobileMenuOpen ? 'active' : ''}`}
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <span className="navbar-toggler-icon" aria-hidden="true">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          role="menu"
        >
          <div className="d-flex flex-column gap-2 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="nav-link"
                role="menuitem"
                end={link.to === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
