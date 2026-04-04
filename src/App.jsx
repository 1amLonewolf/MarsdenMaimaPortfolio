import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

/**
 * App Component
 * 
 * Main application wrapper with:
 * - React Router for client-side navigation
 * - HelmetProvider for SEO meta tag management
 * - Vercel Analytics for tracking
 * - Loading animation on initial load
 * - 404 page for unknown routes
 * - Consistent layout with Navbar and Footer
 */
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Loader />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        
        {/* Vercel Analytics */}
        <Analytics />
        
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  )
}

export default App
