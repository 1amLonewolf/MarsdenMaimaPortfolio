import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

/**
 * Home/Hero Component
 * 
 * First impression section that:
 * - Introduces Marsden as a dedicated Web Developer
 * - Emphasizes commitment to client success
 * - Features professional imagery with glowing effects
 * - Clear CTAs to view work and get in touch
 */
function Home() {
  // Profile image - using your actual photo from /public/Projects/
  // You can also add a dedicated profile photo to /public/ folder
  const profileImageUrl = "/Projects/MarsdenMaima.png"

  return (
    <>
      <Helmet>
        <title>Marsden Maima | Web Developer - Building Exceptional Digital Experiences</title>
        <meta name="description" content="Web Developer dedicated to crafting exceptional digital experiences. I combine clean code with beautiful design to deliver projects that exceed expectations." />
        <meta name="keywords" content="Web Developer, React, Node.js, JavaScript, Portfolio" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Marsden Maima | Web Developer" />
        <meta property="og:description" content="Building exceptional digital experiences with clean code and beautiful design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:image" content="/logo-wolf.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marsden Maima | Web Developer" />
        <meta name="twitter:description" content="Building exceptional digital experiences with clean code and beautiful design." />
      </Helmet>

      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-6 hero-content animate-fade-in-up">
              <h1 className="hero-title">
                <span className="greeting mono">Hello, I'm</span>
                <span className="name">Marsden Maima</span>
              </h1>
              
              <p className="hero-subtitle">
                <span className="typing-effect">a Web Developer</span>
              </p>
              
              <p className="hero-description">
                I build <strong>exceptional digital experiences</strong> that combine 
                <strong> clean code</strong> with <strong>beautiful design</strong>. 
                Every project I take on receives my <strong>absolute best effort</strong> 
                because I believe your success is my success.
              </p>
              
              <p className="hero-description">
                Specializing in <strong>modern web technologies</strong> to create 
                responsive, user-friendly applications that <strong>deliver real results</strong> 
                and <strong>exceed expectations</strong>.
              </p>

              <div className="hero-cta">
                <Link to="/projects" className="btn-primary-custom">
                  <i className="bi bi-briefcase" aria-hidden="true"></i>
                  View My Work
                </Link>
                <Link to="/contact" className="btn-outline-custom">
                  <i className="bi bi-chat-dots" aria-hidden="true"></i>
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-lg-6 mt-5 mt-lg-0 animate-fade-in-up delay-2">
              <div className="profile-container">
                <div className="profile-glow-ring" aria-hidden="true"></div>
                <div className="profile-wrapper">
                  <img
                    src={profileImageUrl}
                    alt="Marsden Maima - Web Developer"
                    className="profile-image"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
