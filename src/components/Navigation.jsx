import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import './Navigation.css'
import LiquidGlassLayers from './LiquidGlassLayers'

export default function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [pillThemes, setPillThemes] = useState({ logo: false, links: false, cta: false })
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({})
  const navLinksRef = useRef(null)
  const logoRef = useRef(null)
  const ctaRef = useRef(null)
  const hamburgerRef = useRef(null)
  const observerRef = useRef(null)
  const navHeaderRef = useRef(null)
  const darkSectionsRef = useRef(new Set())

  const getPathname = () => location.pathname.split('/')[1]
  const isActive = (page) => getPathname() === page

  // Update active indicator position smoothly
  useEffect(() => {
    const updateIndicator = () => {
      const navLinksContainer = navLinksRef.current
      if (!navLinksContainer) return

      const activeLink = navLinksContainer.querySelector('.nav-item.active')
      if (!activeLink) return

      const containerRect = navLinksContainer.getBoundingClientRect()
      const activeRect = activeLink.getBoundingClientRect()

      setActiveIndicatorStyle({
        left: `${activeRect.left - containerRect.left}px`,
        width: `${activeRect.width}px`,
      })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [location])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  // IntersectionObserver-based theme detection
  useEffect(() => {
    const nav = navHeaderRef.current
    if (!nav) return

    const updatePillThemes = () => {
      const hasDarkSection = darkSectionsRef.current.size > 0
      setPillThemes({
        logo: hasDarkSection,
        links: hasDarkSection,
        cta: hasDarkSection
      })
    }

    // Observe all sections with data-nav-theme attribute
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          darkSectionsRef.current.add(entry.target)
        } else {
          darkSectionsRef.current.delete(entry.target)
        }
      })
      updatePillThemes()
    }, {
      threshold: 0,
      rootMargin: '0px 0px -100% 0px'
    })

    // Observe all dark theme sections
    const scanSections = () => {
      document.querySelectorAll('[data-nav-theme="dark"]').forEach(el => {
        observerRef.current.observe(el)
      })
    }

    scanSections()
    
    // Also re-scan after a short delay to account for potential late renders
    const timer = setTimeout(scanSections, 500)

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
      clearTimeout(timer)
    }
  }, [location.pathname])

  // Liquid Glass Specular Tracking
  useEffect(() => {
    const updateSpecular = (e) => {
      const pills = [logoRef.current, navLinksRef.current, ctaRef.current, hamburgerRef.current].filter(Boolean);
      
      pills.forEach(pill => {
        const specular = pill.querySelector('.glass-specular');
        if (!specular) return;

        const rect = pill.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        
        // Calculate percentage position of mouse within the pill
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;

        // Check if hovered
        const isHovered = pill.matches(':hover');
        
        // Spotlight effect following the mouse
        specular.style.background = `
          radial-gradient(
            120px circle at ${xPercent}% ${yPercent}%, 
            rgba(255, 255, 255, ${isHovered ? 0.4 : 0.15}), 
            transparent 100%
          )
        `;
      });
    };

    window.addEventListener('mousemove', updateSpecular);
    return () => window.removeEventListener('mousemove', updateSpecular);
  }, []);

  return (
    <header className="nav-header" ref={navHeaderRef}>
      <div className={`nav-header-bg ${pillThemes.logo ? 'dark' : ''}`}></div>

      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="nav-inner">
        {/* Logo Pill */}
        <Link 
          to="/" 
          className={`nav-logo-pill ${pillThemes.logo ? 'pill--dark' : ''}`}
          ref={logoRef}
        >
          <LiquidGlassLayers />
          <svg width="119" height="16" viewBox="0 0 119 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo-image">
            <path d="M2.20799 12.32C1.80266 12.32 1.42933 12.2187 1.08799 12.016C0.757326 11.8133 0.49066 11.5467 0.287993 11.216C0.0959928 10.8853 -7.15256e-06 10.5173 -7.15256e-06 10.112V3.04H2.09599V10.032C2.09599 10.0853 2.11199 10.1333 2.14399 10.176C2.18666 10.208 2.23466 10.224 2.28799 10.224H7.13599C7.18933 10.224 7.23199 10.208 7.26399 10.176C7.30666 10.1333 7.32799 10.0853 7.32799 10.032V3.04H9.42399V10.112C9.42399 10.5173 9.32266 10.8853 9.11999 11.216C8.92799 11.5467 8.66666 11.8133 8.33599 12.016C8.00533 12.2187 7.63199 12.32 7.21599 12.32H2.20799ZM10.7504 12.32V3.04H22.2544C22.6704 3.04 23.0437 3.14133 23.3744 3.344C23.705 3.54667 23.9664 3.81333 24.1584 4.144C24.361 4.47467 24.4624 4.84267 24.4624 5.248V12.32H22.3824V5.328C22.3824 5.27467 22.361 5.232 22.3184 5.2C22.2757 5.15733 22.2277 5.136 22.1744 5.136H18.8624C18.809 5.136 18.761 5.15733 18.7184 5.2C18.6864 5.232 18.6704 5.27467 18.6704 5.328V12.32H16.5584V5.328C16.5584 5.27467 16.537 5.232 16.4944 5.2C16.4624 5.15733 16.4197 5.136 16.3664 5.136H13.0384C12.985 5.136 12.937 5.15733 12.8944 5.2C12.8624 5.232 12.8464 5.27467 12.8464 5.328V12.32H10.7504ZM28.2232 12.32C27.8179 12.32 27.4446 12.2187 27.1032 12.016C26.7726 11.8133 26.5059 11.5467 26.3032 11.216C26.1112 10.8853 26.0152 10.5173 26.0152 10.112V6.624H33.3432V5.328C33.3432 5.27467 33.3219 5.232 33.2792 5.2C33.2472 5.15733 33.2046 5.136 33.1512 5.136H26.0152V3.04H33.2312C33.6366 3.04 34.0046 3.14133 34.3352 3.344C34.6766 3.54667 34.9432 3.81333 35.1352 4.144C35.3379 4.47467 35.4392 4.84267 35.4392 5.248V12.32H28.2232ZM28.3032 10.224H33.3432V8.512H28.1112V10.032C28.1112 10.0853 28.1272 10.1333 28.1592 10.176C28.2019 10.208 28.2499 10.224 28.3032 10.224ZM36.9847 12.32V3.04H44.2007C44.6061 3.04 44.9741 3.14133 45.3047 3.344C45.6461 3.54667 45.9127 3.81333 46.1047 4.144C46.3074 4.47467 46.4087 4.84267 46.4087 5.248V12.32H44.3127V5.328C44.3127 5.27467 44.2914 5.232 44.2487 5.2C44.2167 5.15733 44.1741 5.136 44.1207 5.136H39.2727C39.2194 5.136 39.1714 5.15733 39.1287 5.2C39.0967 5.232 39.0807 5.27467 39.0807 5.328V12.32H36.9847ZM49.36 15.984V13.872H54.944C54.9973 13.872 55.04 13.8507 55.072 13.808C55.1147 13.776 55.136 13.7333 55.136 13.68V12.32H50.016C49.6213 12.32 49.2533 12.2187 48.912 12.016C48.5813 11.8133 48.3147 11.5467 48.112 11.216C47.9093 10.8853 47.808 10.5173 47.808 10.112V5.248C47.808 4.84267 47.9093 4.47467 48.112 4.144C48.3147 3.81333 48.5813 3.54667 48.912 3.344C49.2533 3.14133 49.6213 3.04 50.016 3.04H55.04C55.4453 3.04 55.8133 3.14133 56.144 3.344C56.4747 3.54667 56.736 3.81333 56.928 4.144C57.1307 4.47467 57.232 4.84267 57.232 5.248V13.776C57.232 14.192 57.136 14.5653 56.944 14.896C56.752 15.2267 56.4853 15.488 56.144 15.68C55.8133 15.8827 55.4453 15.984 55.04 15.984H49.36ZM50.096 10.224H54.944C54.9973 10.224 55.04 10.208 55.072 10.176C55.1147 10.1333 55.136 10.0853 55.136 10.032V5.328C55.136 5.27467 55.1147 5.232 55.072 5.2C55.04 5.15733 54.9973 5.136 54.944 5.136H50.096C50.0427 5.136 49.9947 5.15733 49.952 5.2C49.92 5.232 49.904 5.27467 49.904 5.328V10.032C49.904 10.0853 49.92 10.1333 49.952 10.176C49.9947 10.208 50.0427 10.224 50.096 10.224ZM58.9379 14.432V12.336H70.3619V14.432H58.9379ZM74.2999 12.32C73.8945 12.32 73.5265 12.2187 73.1959 12.016C72.8652 11.8133 72.5985 11.5467 72.3959 11.216C72.1932 10.8853 72.0919 10.5173 72.0919 10.112V9.76H74.1879V10.032C74.1879 10.0853 74.2039 10.1333 74.2359 10.176C74.2785 10.208 74.3265 10.224 74.3799 10.224H79.2279C79.2812 10.224 79.3239 10.208 79.3559 10.176C79.3985 10.1333 79.4199 10.0853 79.4199 10.032V8.928C79.4199 8.87467 79.3985 8.832 79.3559 8.8C79.3239 8.75733 79.2812 8.736 79.2279 8.736H74.2999C73.8945 8.736 73.5265 8.63467 73.1959 8.432C72.8652 8.22933 72.5985 7.96267 72.3959 7.632C72.1932 7.30133 72.0919 6.93333 72.0919 6.528V5.248C72.0919 4.84267 72.1932 4.47467 72.3959 4.144C72.5985 3.81333 72.8652 3.54667 73.1959 3.344C73.5265 3.14133 73.8945 3.04 74.2999 3.04H79.3079C79.7239 3.04 80.0972 3.14133 80.4279 3.344C80.7585 3.54667 81.0252 3.81333 81.2279 4.144C81.4305 4.47467 81.5319 4.84267 81.5319 5.248V5.6H79.4199V5.328C79.4199 5.27467 79.3985 5.232 79.3559 5.2C79.3239 5.15733 79.2812 5.136 79.2279 5.136H74.3799C74.3265 5.136 74.2785 5.15733 74.2359 5.2C74.2039 5.232 74.1879 5.27467 74.1879 5.328V6.432C74.1879 6.48533 74.2039 6.53333 74.2359 6.576C74.2785 6.608 74.3265 6.624 74.3799 6.624H79.3079C79.7239 6.624 80.0972 6.72533 80.4279 6.928C80.7585 7.13067 81.0252 7.39733 81.2279 7.728C81.4305 8.05867 81.5319 8.42667 81.5319 8.832V10.112C81.5319 10.5173 81.4305 10.8853 81.2279 11.216C81.0252 11.5467 80.7585 11.8133 80.4279 12.016C80.0972 12.2187 79.7239 12.32 79.3079 12.32H74.2999ZM83.1246 12.32V3.04H85.2206V12.32H83.1246ZM83.1246 2.112V-9.53674e-07H85.2206V2.112H83.1246ZM87.0785 12.32V3.04H94.2945C94.6998 3.04 95.0678 3.14133 95.3985 3.344C95.7398 3.54667 96.0065 3.81333 96.1985 4.144C96.4012 4.47467 96.5025 4.84267 96.5025 5.248V12.32H94.4065V5.328C94.4065 5.27467 94.3852 5.232 94.3425 5.2C94.3105 5.15733 94.2678 5.136 94.2145 5.136H89.3665C89.3132 5.136 89.2652 5.15733 89.2225 5.2C89.1905 5.232 89.1745 5.27467 89.1745 5.328V12.32H87.0785ZM99.4537 15.984V13.872H105.038C105.091 13.872 105.134 13.8507 105.166 13.808C105.208 13.776 105.23 13.7333 105.23 13.68V12.32H100.11C99.7151 12.32 99.3471 12.2187 99.0057 12.016C98.6751 11.8133 98.4084 11.5467 98.2057 11.216C98.0031 10.8853 97.9017 10.5173 97.9017 10.112V5.248C97.9017 4.84267 98.0031 4.47467 98.2057 4.144C98.4084 3.81333 98.6751 3.54667 99.0057 3.344C99.3471 3.14133 99.7151 3.04 100.11 3.04H105.134C105.539 3.04 105.907 3.14133 106.238 3.344C106.568 3.54667 106.83 3.81333 107.022 4.144C107.224 4.47467 107.326 4.84267 107.326 5.248V13.776C107.326 14.192 107.23 14.5653 107.038 14.896C106.846 15.2267 106.579 15.488 106.238 15.68C105.907 15.8827 105.539 15.984 105.134 15.984H99.4537ZM100.19 10.224H105.038C105.091 10.224 105.134 10.208 105.166 10.176C105.208 10.1333 105.23 10.0853 105.23 10.032V5.328C105.23 5.27467 105.208 5.232 105.166 5.2C105.134 5.15733 105.091 5.136 105.038 5.136H100.19C100.136 5.136 100.088 5.15733 100.046 5.2C100.014 5.232 99.9977 5.27467 99.9977 5.328V10.032C99.9977 10.0853 100.014 10.1333 100.046 10.176C100.088 10.208 100.136 10.224 100.19 10.224ZM109.032 12.32V-9.53674e-07H111.128V3.04H116.248C116.653 3.04 117.021 3.14133 117.352 3.344C117.682 3.54667 117.949 3.81333 118.152 4.144C118.354 4.47467 118.456 4.84267 118.456 5.248V12.32H116.36V5.328C116.36 5.27467 116.338 5.232 116.296 5.2C116.264 5.15733 116.221 5.136 116.168 5.136H111.32C111.266 5.136 111.218 5.15733 111.176 5.2C111.144 5.232 111.128 5.27467 111.128 5.328V12.32H109.032Z" fill="currentColor"/>
          </svg>
        </Link>

        {/* Nav Links Pill */}
        <nav className={`nav-links-pill ${pillThemes.links ? 'pill--dark' : ''}`} ref={navLinksRef}>
          <LiquidGlassLayers />
          <div className="nav-indicator" style={activeIndicatorStyle} />
          <ul className="nav-items">
            <li className={`nav-item ${isActive('') ? 'active' : ''}`}>
              <NavLink to="/">Work</NavLink>
            </li>
            <li className={`nav-item ${isActive('about') ? 'active' : ''}`}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={`nav-item ${isActive('resume') ? 'active' : ''}`}>
              <NavLink to="/resume">Resume</NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <a 
          href="mailto:mail2umangsingh@gmail.com" 
          className={`nav-cta-btn ${pillThemes.cta ? 'pill--dark' : ''}`}
          ref={ctaRef}
        >
          <LiquidGlassLayers />
          Get in Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`nav-hamburger ${menuOpen ? 'nav-hamburger--open' : ''} ${pillThemes.links ? 'pill--dark' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          ref={hamburgerRef}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-overlay"
        >
          <LiquidGlassLayers />
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        id="mobile-nav-overlay"
        className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}
        aria-modal="true"
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="nav-overlay-panel">
          <LiquidGlassLayers />
          <ul className="nav-overlay-links">
            <li>
              <NavLink to="/" className={`overlay-link ${isActive('') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={`overlay-link ${isActive('about') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={`overlay-link ${isActive('resume') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                Resume
              </NavLink>
            </li>
          </ul>
          <div className="overlay-cta-container">
            <a href="mailto:mail2umangsingh@gmail.com" className="overlay-cta" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
