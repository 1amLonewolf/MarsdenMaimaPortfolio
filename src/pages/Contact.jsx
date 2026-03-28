import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'

/**
 * Contact Component
 * 
 * Features:
 * - EmailJS integration for real email sending
 * - Form validation with user-friendly error messages
 * - Loading, success, and error states
 * - Professional contact information display
 * 
 * EmailJS Setup Required:
 * 1. Create account at https://dashboard.emailjs.com/
 * 2. Create an Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
 * 4. Get your Service ID, Template ID, and Public Key
 * 5. Add them to your .env file (see .env.example)
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '' // Honeypot field (hidden from humans)
  })
  
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success' | 'error' | 'loading'
    message: ''
  })

  // Simple spam prevention: track submission time
  const [submissionTime, setSubmissionTime] = useState(null)

  // EmailJS configuration from environment variables
  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID // Auto-reply template
  }

  const isEmailJsConfigured = emailJsConfig.serviceId && 
                               emailJsConfig.templateId && 
                               emailJsConfig.publicKey

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear status when user starts typing again
    if (formStatus.type) {
      setFormStatus({ type: '', message: '' })
    }
  }

  // Spam detection: Check if form was filled too quickly (bot behavior)
  const isPotentialSpam = () => {
    const timeToFill = Date.now() - submissionTime
    // If filled in less than 3 seconds, likely a bot
    if (submissionTime && timeToFill < 3000) {
      return true
    }
    // If honeypot field is filled, definitely a bot
    if (formData.phone && formData.phone.trim() !== '') {
      return true
    }
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Record submission time for spam detection
    if (!submissionTime) {
      setSubmissionTime(Date.now())
    }
    
    // Check for spam
    if (isPotentialSpam()) {
      console.warn('🛡️ Spam detected! Form submission blocked.')
      // Silently succeed to confuse bots
      setFormStatus({
        type: 'success',
        message: "Thank you! Your message has been sent. I'll get back to you within 24 hours."
      })
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: ''
      })
      return
    }
    
    // Set loading state
    setFormStatus({
      type: 'loading',
      message: 'Sending your message...'
    })

    // If EmailJS is not configured, show helpful message
    if (!isEmailJsConfigured) {
      console.warn('EmailJS not configured. Please set up your .env file with EmailJS credentials.')
      setFormStatus({
        type: 'error',
        message: 'Contact form is not configured. Please email me directly at maimamarsden@gmail.com'
      })
      return
    }

    try {
      // Send notification email to YOU (the form submission)
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Marsden Maima'
        },
        emailJsConfig.publicKey
      );

      // Send auto-reply to the person who contacted you
      if (emailJsConfig.autoReplyTemplateId) {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.autoReplyTemplateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            to_email: formData.email
          },
          emailJsConfig.publicKey
        );
      }

      // Success!
      setFormStatus({
        type: 'success',
        message: "Thank you! Your message has been sent. I'll get back to you within 24 hours."
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      setFormStatus({
        type: 'error',
        message: `Error: ${error.status || 'Unknown'} - ${error.text || error.message || 'Failed to send. Please email maimamarsden@gmail.com directly'}`
      });
    }
  }

  const contactInfo = [
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: 'maimamarsden@gmail.com',
      href: 'mailto:maimamarsden@gmail.com',
      ariaLabel: 'Send me an email'
    },
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: 'Open to Remote Work Worldwide', // TODO: Update with your location
      href: null,
      ariaLabel: 'My location'
    },
    {
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/marsden-maima',
      href: 'https://www.linkedin.com/in/marsden-maima/',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      icon: 'bi-github',
      label: 'GitHub',
      value: 'github.com/1amLonewolf',
      href: 'https://github.com/1amLonewolf',
      ariaLabel: 'View my GitHub profile'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contact | Marsden Maima - Let's Work Together</title>
        <meta name="description" content="Ready to start your next project? Get in touch! I respond to all inquiries within 24 hours and would love to discuss how I can help bring your vision to life." />
      </Helmet>

      <section className="contact">
        <div className="container">
          {/* Section Header */}
          <div className="section-header animate-fade-in-up">
            <span className="section-icon">📬</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or want to discuss how we can work together?
              I'm always excited to take on new challenges and help bring ideas to life.
            </p>
          </div>

          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-lg-5 animate-fade-in-up delay-1">
              <div className="contact-info">
                <h3>
                  <i className="bi bi-person-lines-fill me-2 text-cyan" aria-hidden="true"></i>
                  Contact Information
                </h3>
                <p className="text-muted mb-4">
                  I respond to all inquiries within <strong className="text-cyan">24 hours</strong>. 
                  Your project deserves my full attention, and I'll get back to you promptly.
                </p>

                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon" aria-hidden="true">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div className="contact-text">
                      <strong>{item.label}</strong>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          aria-label={item.ariaLabel}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                {/* Availability Badge */}
                <div className="mt-4 p-3" style={{ 
                  background: 'rgba(0, 255, 136, 0.1)', 
                  borderRadius: '8px',
                  border: '1px solid var(--success-green)'
                }}>
                  <div className="d-flex align-items-center gap-2">
                    <span style={{ 
                      width: '10px', 
                      height: '10px', 
                      background: 'var(--success-green)',
                      borderRadius: '50%',
                      display: 'inline-block',
                      boxShadow: '0 0 10px var(--success-green)'
                    }} aria-hidden="true"></span>
                    <strong style={{ color: 'var(--success-green)' }}>Available for new projects</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 animate-fade-in-up delay-2">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>
                  <i className="bi bi-chat-left-text me-2 text-cyan" aria-hidden="true"></i>
                  Send Me a Message
                </h3>
                <p className="text-muted mb-4">
                  Tell me about your project. The more details you share, the better I can help!
                </p>

                {/* Honeypot Field - Hidden from humans, bots will fill it */}
                <div className="honeypot-field" aria-hidden="true">
                  <label htmlFor="phone">
                    Leave this field empty - it's for spam bots 🤖
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Status Messages */}
                {formStatus.message && (
                  <div 
                    className={`form-status ${formStatus.type}`}
                    role="alert"
                    aria-live={formStatus.type === 'error' ? 'assertive' : 'polite'}
                  >
                    {formStatus.type === 'loading' && (
                      <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    )}
                    {formStatus.type === 'success' && (
                      <i className="bi bi-check-circle-fill me-2" aria-hidden="true"></i>
                    )}
                    {formStatus.type === 'error' && (
                      <i className="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i>
                    )}
                    {formStatus.message}
                  </div>
                )}

                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="text-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    aria-required="true"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-cyan">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    aria-required="true"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Your Message <span className="text-cyan">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    aria-required="true"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn-primary-custom w-100"
                  disabled={formStatus.type === 'loading'}
                  aria-busy={formStatus.type === 'loading'}
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2" aria-hidden="true"></i>
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.85rem' }}>
                  <span className="text-cyan">*</span> Required fields. I respect your privacy and 
                  will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
