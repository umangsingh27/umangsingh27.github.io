import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountAnimation } from '../hooks/useCountAnimation'
import LazyImage from '../components/LazyImage'
import './Home.css'

export default function Home() {
  const glowRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = 'Umang Singh — Senior Product Designer'
  }, [])

  useScrollReveal()
  useCountAnimation(0.5)

  // Cursor glow effect
  useEffect(() => {
    const isTouchDevice = () => {
      return !!(typeof window !== 'undefined' &&
        ('ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)))
    }

    const touchDevice = isTouchDevice()

    if (touchDevice) {
      document.body.classList.add('touch-device')
      return
    }

    const glow = glowRef.current
    const hero = heroRef.current

    if (!glow || !hero) return

    const handleMouseMove = (e) => {
      document.body.classList.add('mouse-active')

      const mouseX = e.clientX
      const mouseY = e.clientY

      const heroRect = hero.getBoundingClientRect()
      const isInsideHero =
        mouseX >= heroRect.left &&
        mouseX <= heroRect.right &&
        mouseY >= heroRect.top &&
        mouseY <= heroRect.bottom

      if (isInsideHero) {
        glow.style.opacity = '1'
        glow.style.left = `${mouseX - 150}px`
        glow.style.top = `${mouseY - 150}px`

        const title = hero.querySelector('.hero-title')
        const description = hero.querySelector('.hero-description')

        if (title) {
          const titleRect = title.getBoundingClientRect()
          const titleDistance = Math.hypot(
            mouseX - (titleRect.left + titleRect.width / 2),
            mouseY - (titleRect.top + titleRect.height / 2)
          )
          if (titleDistance < 300) {
            title.classList.add('glow')
          } else {
            title.classList.remove('glow')
          }
        }

        if (description) {
          const descRect = description.getBoundingClientRect()
          const descDistance = Math.hypot(
            mouseX - (descRect.left + descRect.width / 2),
            mouseY - (descRect.top + descRect.height / 2)
          )
          if (descDistance < 300) {
            description.classList.add('glow')
          } else {
            description.classList.remove('glow')
          }
        }
      } else {
        glow.style.opacity = '0'
        hero.querySelectorAll('.glow').forEach(el => el.classList.remove('glow'))
      }
    }

    const handleMouseLeave = () => {
      document.body.classList.remove('mouse-active')
      if (glow) glow.style.opacity = '0'
      hero?.querySelectorAll('.glow').forEach(el => el.classList.remove('glow'))
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.classList.remove('mouse-active')
    }
  }, [])

  useEffect(() => {
    const handleScrollToWork = (e) => {
      const target = e.currentTarget.getAttribute('data-scroll-to')
      if (target) {
        e.preventDefault()
        const element = document.querySelector(target)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const buttons = document.querySelectorAll('[data-scroll-to]')
    buttons.forEach((btn) => {
      btn.addEventListener('click', handleScrollToWork)
    })

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('click', handleScrollToWork)
      })
    }
  }, [])

  const otherWork = [
    { company: 'Docuverus', type: 'Product Design', year: '2022', href: 'https://www.docuverus.com' },
    { company: 'Torrent Labs', type: 'Product Design', year: '2022', href: 'https://torrentlab.com' },
    { company: 'RBL Bank', type: 'Website Revamp', year: '2022', href: 'https://www.rblbank.com' },
    { company: 'SIDBI', type: 'Website & Product', year: '2022', href: 'https://www.sidbi.in/en' },
    { company: 'BuildingLink', type: 'Website & Product', year: '2022', href: 'https://www.buildinglink.io' },
    { company: 'Doxiva', type: 'Product Design', year: '2022', href: 'https://doxiva.com' },
    { company: 'Mint My Piece', type: 'Product Design', year: '2022', href: 'https://bobamintco.com/mintmypiece/' },
    { company: 'Sealcon', type: 'Product Design', year: '2022', href: 'https://www.sealconusa.com' },
  ]

  return (
    <>
      {/* Cursor glow element */}
      <div className="cursor-glow" ref={glowRef}></div>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">Umang Singh</h1>
          <p className="hero-subtitle">Senior Product Designer</p>
          <p className="hero-description">
            I design Business-to-Business Software as a Service products for India's manufacturing industry — and build the Artificial Intelligence workflows that power the sales behind them.
          </p>
          <p className="hero-location">
            Currently at NowPurchase · Kolkata · Open to Bangalore, Hyderabad, Gurugram, Remote
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" data-scroll-to="#work">View Work</button>
            <Link to="/about" className="btn btn-secondary">About Me</Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">
              <span data-count-to="13">13</span> → <span data-count-to="120">120</span>
            </div>
            <div className="stat-label">Enterprise clients</div>
          </div>
          <div className="stat">
            <div className="stat-number"><span data-count-to="10">10</span>%</div>
            <div className="stat-label">Revenue growth</div>
          </div>
          <div className="stat">
            <div className="stat-number"><span data-count-to="60">60</span>%</div>
            <div className="stat-label">Sales cycle reduction</div>
          </div>
        </div>
      </section>

      {/* Work Cards Section */}
      <section className="home-work fade-up" id="work">
        <div className="home-work__inner">
          <div className="work-grid">
            <div className="work-card" style={{ cursor: 'default' }}>
              <div className="work-card__cover work-card__cover--n8n">
                <div className="work-card__cover-text">
                  <span className="work-card__cover-label">N8N + Claude Application Programming Interface</span>
                  <span className="work-card__cover-arrow">→</span>
                  <span className="work-card__cover-sub">WhatsApp</span>
                </div>
                <div className="card-coming-soon">Coming Soon</div>
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">ARTIFICIAL INTELLIGENCE · AUTOMATION</span>
                <h3 className="work-card__title">Artificial Intelligence Sales Agent</h3>
                <p className="work-card__description">Designed and built an autonomous N8N + Claude Application Programming Interface sales agent that handles Business-to-Business raw material qualification on WhatsApp — without human intervention.</p>
                <div className="work-card__metric">10% revenue growth · Month 1</div>
              </div>
            </div>

            <Link to="/work/metalcloud-platform" className="work-card">
              <div className="work-card__cover work-card__cover--metalcloud">
                <LazyImage src="/images/metalcloud/spectro-hero.png" alt="MetalCloud Platform" />
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">BUSINESS-TO-BUSINESS SOFTWARE AS A SERVICE · ENTERPRISE</span>
                <h3 className="work-card__title">MetalCloud Platform</h3>
                <p className="work-card__description">Internet of Things + Artificial Intelligence modules that digitise India's foundry shop floor — from spectrometer readings to ChargeMix calculations to WhatsApp alerts.</p>
                <div className="work-card__metric">13 → 120 enterprise clients</div>
              </div>
            </Link>

            <Link to="/work/design-system" className="work-card">
              <div className="work-card__cover work-card__cover--design-system">
                <LazyImage src="/images/design-system/design_system_cover.png" alt="NowPurchase & MetalCloud Design System" />
                <div className="card-status">In Progress</div>
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">DESIGN SYSTEMS · B2B SAAS</span>
                <h3 className="work-card__title">Design System — NowPurchase × MetalCloud</h3>
                <p className="work-card__description">Unified atomic design system spanning two products — built to reduce design inconsistencies and accelerate engineering handoff.</p>
                <div className="work-card__metric">30% faster dev handoff · 50% fewer inconsistencies</div>
              </div>
            </Link>

            <Link to="/work/nowpurchase-website" className="work-card">
              <div className="work-card__cover work-card__cover--nowpurchase">
                <LazyImage src="/images/nowpurchase-website/nowpurchase_cover.png" alt="NowPurchase Website Revamp" />
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">WEBSITE · GROWTH</span>
                <h3 className="work-card__title">NowPurchase Website Revamp</h3>
                <p className="work-card__description">End-to-end website redesign grounded in 30 days of heatmap data, competitive analysis, and stakeholder research.</p>
                <div className="work-card__metric">20x organic sessions growth</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Work Section */}
      <section className="home-other-work fade-up">
        <div className="home-other-work__inner">
          <h2>Other Work</h2>
          <div className="other-work-list">
            {otherWork.map((work, i) => (
              <a key={i} href={work.href} target="_blank" rel="noopener noreferrer" className="other-work-item">
                <span className="other-work-company">{work.company}</span>
                <span className="other-work-type">{work.type}</span>
                <span className="other-work-year">{work.year}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section fade-up">
        <div className="home-cta__outer">
          <div className="about-cta-card">
            <h2 className="about-cta__heading">Let's work together.</h2>
            <p className="about-cta__subline">
              Open to Lead/Senior Product Designer roles at Business-to-Business Software as a Service and Artificial Intelligence-first companies.
            </p>
            <div className="about-cta__buttons">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Umang_Singh_Resume.pdf"
                className="btn btn--primary"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/umangsingh123/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
