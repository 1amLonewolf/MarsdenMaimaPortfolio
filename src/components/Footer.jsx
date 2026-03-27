import { Helmet } from 'react-helmet-async'

/**
 * Footer Component
 * 
 * Features:
 * - Social links with hover effects
 * - Professional branding
 * - Copyright and attribution
 * - Structured data for SEO
 */
function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      href: 'https://github.com/1amLonewolf',
      icon: 'bi-github',
      label: 'GitHub',
      className: 'github'
    },
    {
      href: 'https://www.linkedin.com/in/marsden-maima/',
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      className: 'linkedin'
    },
    {
      href: 'mailto:maimamarsden@gmail.com',
      icon: 'bi-envelope',
      label: 'Email',
      className: 'email'
    }
  ]

  return (
    <footer className="footer">
      <Helmet>
        <link rel="author" href="https://github.com/1amLonewolf" />
      </Helmet>
      
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <a href="/" className="footer-brand">
              <div className="logo-wrapper logo-wrapper-small">
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
            </a>
            <p className="footer-tagline mt-2">
              <strong>Every project matters.</strong> I pour my expertise and 
              dedication into creating exceptional digital experiences that 
              drive real results.
            </p>
          </div>

          {/* Social Links */}
          <div className="social-links" role="social" aria-label="Social media links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`social-link ${social.className}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow me on ${social.label}`}
                title={social.label}
              >
                <i className={`bi ${social.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Marsden Maima. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <span className="heart" aria-label="love">♥</span> and{' '}
            <span className="code">&lt;Code/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
