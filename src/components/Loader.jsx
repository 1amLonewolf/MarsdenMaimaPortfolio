import { useEffect, useState } from 'react'

/**
 * Loader Component
 *
 * Displays a loading animation with the wolf logo while the app initializes.
 * Automatically fades out after content is ready.
 * 
 * @param {boolean} isLoading - Optional prop to control loader visibility externally.
 *                              If not provided, auto-hides after 1.5 seconds.
 */
function Loader({ isLoading }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Auto-hide only if isLoading prop is not provided
    if (isLoading === undefined) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 1500) // Show loader for 1.5 seconds minimum

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // If isLoading prop is provided, use it; otherwise use internal state
  const shouldHide = isLoading !== undefined ? !isLoading : isLoaded
  
  if (shouldHide) return null

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
