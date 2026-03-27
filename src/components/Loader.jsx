import { useEffect, useState } from 'react'

/**
 * Loader Component
 * 
 * Displays a loading animation with the wolf logo while the app initializes.
 * Automatically fades out after content is ready.
 */
function Loader() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Fade out loader after content is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500) // Show loader for 1.5 seconds minimum

    return () => clearTimeout(timer)
  }, [])

  if (isLoaded) return null

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Animated Wolf Logo */}
        <div className="loader-logo-wrapper">
          <img
            src="/logo-wolf.png"
            alt="Loading..."
            className="loader-logo"
          />
          <div className="loader-ring loader-ring-1"></div>
          <div className="loader-ring loader-ring-2"></div>
          <div className="loader-ring loader-ring-3"></div>
        </div>

        {/* Loading Text */}
        <div className="loader-text">
          <span className="loader-text-main">Loading</span>
          <span className="loader-dots">...</span>
        </div>

        {/* Progress Bar */}
        <div className="loader-progress">
          <div className="loader-progress-bar"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
