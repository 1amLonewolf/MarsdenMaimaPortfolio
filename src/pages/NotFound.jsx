import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

/**
 * 404 Not Found Page
 * 
 * Custom error page for broken links and missing routes.
 * Features wolf theme with helpful navigation back to safety.
 */
function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Marsden Maima Portfolio</title>
        <meta name="description" content="Oops! This page wandered off into the wilderness. Let's get you back on track." />
      </Helmet>

      <div className="not-found-container">
        <div className="not-found-content">
          {/* Wolf Logo - Lost Theme */}
          <div className="not-found-logo">
            <img
              src="/logo-wolf.png"
              alt="Lost Wolf"
              className="not-found-wolf"
            />
          </div>

          {/* Error Code */}
          <h1 className="not-found-title">404</h1>

          {/* Error Message */}
          <h2 className="not-found-subtitle">
            Looks like this page wandered off into the wilderness 🐺
          </h2>

          <p className="not-found-description">
            Don't worry, even the best developers have broken links sometimes.
            Let's get you back to safety!
          </p>

          {/* Action Buttons */}
          <div className="not-found-actions">
            <Link to="/" className="btn-primary-custom">
              <i className="bi bi-house-door" aria-hidden="true"></i>
              Back to Home
            </Link>
            <Link to="/projects" className="btn-outline-custom">
              <i className="bi bi-briefcase" aria-hidden="true"></i>
              View Projects
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="not-found-links">
            <p className="not-found-links-title">Or explore:</p>
            <div className="not-found-link-grid">
              <Link to="/projects">Projects</Link>
              <span className="not-found-link-separator">•</span>
              <Link to="/contact">Contact</Link>
              <span className="not-found-link-separator">•</span>
              <a href="https://github.com/1amLonewolf" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="not-found-bg-glow not-found-glow-1"></div>
        <div className="not-found-bg-glow not-found-glow-2"></div>
      </div>
    </>
  )
}

export default NotFound
