import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const [segmentThemes, setSegmentThemes] = useState(new Array(40).fill(false))
  const [pillThemes, setPillThemes] = useState({ logo: false, links: false, cta: false })

  // Smart Header: Higher-resolution background sampling (10 points)
  useEffect(() => {
    let ticking = false

    const detectThemeAtPoint = (x, y) => {
      if (typeof x !== 'number' || typeof y !== 'number') return false
      const elements = document.elementsFromPoint(x, y)
      if (!elements || elements.length === 0) return false
      
      const elementBehind = elements.find(el => {
        return el && el instanceof HTMLElement && !el.closest('.nav-header') && !el.closest('.nav-overlay')
      })
      
      if (!elementBehind) return false

      let currentEl = elementBehind
      let isDarkDetected = false
      while (currentEl && currentEl !== document.body) {
        // 1. Explicit dark class check (Project Cards)
        if (currentEl.classList.contains('work-card__cover--n8n') || 
            currentEl.classList.contains('work-card__cover--metalcloud') ||
            currentEl.classList.contains('impact-section') ||
            currentEl.classList.contains('about-stats')) {
          isDarkDetected = true
          break
        }

        const style = window.getComputedStyle(currentEl)
        
        // 2. Background Color check
        const bg = style.backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          const rgb = bg.match(/\d+/g)
          if (rgb) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
            // Increased threshold to 200 for high sensitivity
            if (brightness < 200) { isDarkDetected = true; break; }
          }
        }

        // 3. Gradient / Image + Text Color proxy check
        const bgImg = style.backgroundImage
        if (bgImg && bgImg !== 'none' && bgImg.includes('gradient')) {
          // Check color of current element or its first child
          const checkColor = (el) => {
            const s = window.getComputedStyle(el)
            const rgb = s.color.match(/\d+/g)
            if (rgb) {
              const b = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
              return b > 140 // Light text indicator
            }
            return false
          }
          
          if (checkColor(currentEl) || (currentEl.firstElementChild && checkColor(currentEl.firstElementChild))) {
            isDarkDetected = true
            break
          }
        }

        if (currentEl.getAttribute('data-theme') === 'dark') { isDarkDetected = true; break; }
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') break
        currentEl = currentEl.parentElement
      }
      return isDarkDetected
    }

    const updateThemes = () => {
      const numSegments = 40 
      const width = window.innerWidth
      const nextSegmentThemes = []

      // Sample 40 segments horizontally
      // For each segment, check 3 vertical points (Y=20, Y=50, Y=80) 
      // to ensure the header reacts proactively as it enters a section
      const yPoints = [20, 50, 80]

      for (let i = 0; i < numSegments; i++) {
        const x = (width / numSegments) * (i + 0.5)
        // If any point in the vertical column is dark, the segment is dark
        const isDark = yPoints.some(y => detectThemeAtPoint(x, y))
        nextSegmentThemes.push(isDark)
      }

      setSegmentThemes(nextSegmentThemes)

      // Calculate pill themes based on their actual positions
      const getPillTheme = (selector) => {
        const el = document.querySelector(selector)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        const centerX = (rect.left + rect.right) / 2
        // Find which segment this center corresponds to
        const segmentIdx = Math.floor((centerX / width) * numSegments)
        return nextSegmentThemes[Math.min(segmentIdx, numSegments - 1)]
      }

      setPillThemes({
        logo: getPillTheme('.nav-logo-frame'),
        links: getPillTheme('.nav-links-frame'),
        cta: getPillTheme('.nav-cta-frame')
      })
      
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateThemes)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateThemes()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="nav-header">
        {/* High-Resolution Segmented Background */}
        <div className="nav-header-bg">
          {segmentThemes.map((isDark, i) => (
            <div 
              key={i} 
              className={`nav-bg-segment ${isDark ? 'dark' : ''}`} 
              style={{ flex: `0 0 ${100 / segmentThemes.length}%` }}
            />
          ))}
        </div>
        
        <nav className="nav-inner">
          <div className={`nav-logo-frame ${(pillThemes.logo && !menuOpen) ? 'pill--dark' : ''}`}>
            <NavLink to="/" className="nav-logo">
              Umang Singh
            </NavLink>
          </div>

          {/* Desktop links frame */}
          <div className={`nav-links-frame ${pillThemes.links ? 'pill--dark' : ''}`}>
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    (isActive || location.pathname.startsWith('/work'))
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Work
                </NavLink>
              </li>
              <div className="nav-separator" aria-hidden="true" />
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  About
                </NavLink>
              </li>
              <div className="nav-separator" aria-hidden="true" />
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link nav-resume'}
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={`nav-cta-frame ${pillThemes.cta ? 'pill--dark' : ''}`}>
            <a href="mailto:mail2umangsingh@gmail.com" className="nav-cta">
              Get in Touch
            </a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`nav-hamburger ${(pillThemes.cta && !menuOpen) ? 'pill--dark' : ''} ${menuOpen ? 'nav-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`nav-overlay${menuOpen ? ' nav-overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="nav-overlay-links">
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                (isActive || location.pathname.startsWith('/work'))
                  ? 'overlay-link active'
                  : 'overlay-link'
              }
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'overlay-link active' : 'overlay-link'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => isActive ? 'overlay-link active' : 'overlay-link'}
            >
              Resume
            </NavLink>
          </li>
          <li className="overlay-cta-container">
            <a href="mailto:mail2umangsingh@gmail.com" className="overlay-cta">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
