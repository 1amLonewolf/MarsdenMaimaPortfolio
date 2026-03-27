import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * Projects Component
 * 
 * Displays:
 * - Featured projects with detailed impact statements
 * - Live GitHub repositories fetched from API
 * - Professional project cards with tech stacks
 * 
 * TODO: Replace featured projects with your actual work
 */
function Projects() {
  const [githubRepos, setGithubRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Get GitHub username from environment variable
  const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || '1amLonewolf'

  /**
   * Featured Projects
   * 
   * Your actual shipped projects with real impact
   */
  const featuredProjects = [
    {
      id: 1,
      title: "SchoolFlow Hub",
      description: "A comprehensive school management system that streamlines student data management, attendance tracking, and administrative workflows. Built to simplify complex school operations.",
      impact: "Reduced administrative workload by 60% with automated reporting and centralized student data management.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/Projects/SchoolFlow Hub Screenshot.jpg",
      liveUrl: "#", // Demo unavailable - confidential client project
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Student Manager",
      description: "An intuitive student management platform with real-time reporting, performance analytics, and multi-role access for administrators, teachers, and staff.",
      impact: "Improved data accuracy by 45% and enabled instant report generation for decision-makers.",
      technologies: ["React", "JavaScript", "CSS3", "REST API"],
      image: "/Projects/StudentManagerReportsScreenshot.PNG",
      liveUrl: "#", // Demo unavailable - confidential client project
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Excellent Life Foundation",
      description: "A professional foundation website showcasing charitable initiatives, donation programs, and community impact stories. Built with a focus on donor engagement and transparency.",
      impact: "Increased online donations by 35% and improved donor communication through integrated storytelling features.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
      image: "/Projects/ExcellentLifeFoundationScreenshot.PNG",
      liveUrl: "https://excellentlifefoundation.org", // TODO: Replace with actual URL
      githubUrl: "#",
      featured: true
    }
  ]

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        setError(null)
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        
        const data = await response.json()
        setGithubRepos(data.slice(0, 4))
        setLoading(false)
      } catch (err) {
        console.error('Error fetching GitHub repos:', err)
        setError('Unable to load GitHub repositories. Please check back later.')
        setLoading(false)
      }
    }

    fetchGithubRepos()
  }, [githubUsername])

  return (
    <>
      <Helmet>
        <title>Projects | Marsden Maima - Web Developer</title>
        <meta name="description" content="Explore my portfolio of web development projects. From e-commerce platforms to dashboards, each project demonstrates my commitment to excellence." />
      </Helmet>

      <section className="projects">
        <div className="container">
          {/* Section Header */}
          <div className="section-header animate-fade-in-up">
            <span className="section-icon">💻</span>
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              Each project represents my commitment to delivering exceptional results.
              I invest my full expertise to ensure every deliverable exceeds expectations.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-5">
            <h3 className="projects-section-header animate-fade-in-up delay-1">
              <i className="bi bi-star-fill" aria-hidden="true"></i>
              Featured Projects
            </h3>
            
            <div className="row g-4">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="col-md-6 col-lg-6 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <article className="project-card">
                    <div className="project-img-wrapper">
                      <img
                        src={project.image}
                        alt={`${project.title} - Project Screenshot`}
                        className="project-img"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback image if project screenshot doesn't exist
                          e.target.src = `https://via.placeholder.com/400x200/0066ff/ffffff?text=${encodeURIComponent(project.title)}`
                        }}
                      />
                      <div className="project-img-overlay" aria-hidden="true"></div>
                    </div>
                    
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {/* Impact Statement - Shows client value */}
                      <div className="project-impact">
                        <div className="project-impact-label">Impact Delivered</div>
                        <div className="project-impact-text">{project.impact}</div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="project-tech" role="list" aria-label="Technologies used">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="tech-badge mono"
                            role="listitem"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Project Links */}
                      <div className="project-links">
                        <a
                          href={project.liveUrl}
                          className="project-link primary"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.title} on GitHub`}
                        >
                          <i className="bi bi-github" aria-hidden="true"></i>
                          Source Code
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Repositories */}
          <div>
            <h3 className="projects-section-header animate-fade-in-up delay-1">
              <i className="bi bi-github" aria-hidden="true"></i>
              Latest from GitHub
            </h3>

            {loading ? (
              <div className="text-center py-5 animate-fade-in">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading repositories...</span>
                </div>
                <p className="mt-3 text-muted">Fetching my latest work...</p>
              </div>
            ) : error ? (
              <div className="text-center py-5 animate-fade-in">
                <i className="bi bi-exclamation-triangle" style={{ fontSize: '3rem', color: 'var(--error-red)' }} aria-hidden="true"></i>
                <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>{error}</p>
              </div>
            ) : githubRepos.length > 0 ? (
              <div className="row g-4">
                {githubRepos.map((repo, index) => (
                  <div 
                    key={repo.id} 
                    className="col-md-6 col-lg-3 animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <article className="project-card">
                      <div className="project-content">
                        <h3 className="project-title" style={{ fontSize: '1.15rem' }}>
                          {repo.name}
                        </h3>
                        <p className="project-description" style={{ fontSize: '0.9rem' }}>
                          {repo.description || 'A project showcasing my development skills'}
                        </p>
                        
                        {/* Repo Stats */}
                        <div className="project-tech" role="list" aria-label="Repository stats">
                          {repo.language && (
                            <span className="tech-badge mono" role="listitem">
                              <i className="bi bi-circle-fill me-1" style={{ fontSize: '0.5rem' }} aria-hidden="true"></i>
                              {repo.language}
                            </span>
                          )}
                          <span className="tech-badge mono" role="listitem">
                            <i className="bi bi-star-fill me-1" aria-hidden="true"></i>
                            {repo.stargazers_count}
                          </span>
                          {repo.forks_count > 0 && (
                            <span className="tech-badge mono" role="listitem">
                              <i className="bi bi-git me-1" aria-hidden="true"></i>
                              {repo.forks_count}
                            </span>
                          )}
                        </div>
                        
                        {/* Repo Links */}
                        <div className="project-links">
                          <a
                            href={repo.html_url}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${repo.name} on GitHub`}
                          >
                            <i className="bi bi-github" aria-hidden="true"></i>
                            View Repo
                          </a>
                          {repo.homepage && repo.homepage !== '' && (
                            <a
                              href={repo.homepage}
                              className="project-link primary"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View live demo of ${repo.name}`}
                            >
                              <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 animate-fade-in">
                <i className="bi bi-inbox" style={{ fontSize: '3rem', color: 'var(--text-muted)' }} aria-hidden="true"></i>
                <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
                  No public repositories found. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
