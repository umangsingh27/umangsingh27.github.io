import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountAnimation } from '../hooks/useCountAnimation'
import './Home.css'

export default function Home() {

  useEffect(() => {
    document.title = 'Umang Singh — Senior Product Designer'
  }, [])

  useScrollReveal()
  useCountAnimation(0.5)

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
      {/* Hero Section */}
      <section className="home-hero fade-up">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <span className="home-hero__label">Senior Product Designer</span>
            <h1 className="home-hero__name">Umang Singh</h1>
            <p className="home-hero__description">
              I design Business-to-Business Software as a Service products for India's manufacturing industry — and build the Artificial Intelligence workflows that power the sales behind them.
            </p>
            <p className="home-hero__location">Currently at NowPurchase · Kolkata · Open to Bangalore, Hyderabad, Gurugram, Remote</p>
            <div className="home-hero__actions">
              <button className="btn btn--primary" data-scroll-to="#work">View Work</button>
              <Link to="/about" className="btn btn--secondary">About Me</Link>
            </div>
            <div className="home-hero__stats">
              <div className="hero-stat">
                <div className="hero-stat__number">
                  <span data-count-to="13">13</span> → <span data-count-to="120">120</span>
                </div>
                <p className="hero-stat__label">Enterprise clients</p>
              </div>
              <div className="hero-stat__divider"></div>
              <div className="hero-stat">
                <div className="hero-stat__number"><span data-count-to="10">10</span>%</div>
                <p className="hero-stat__label">Revenue growth</p>
              </div>
              <div className="hero-stat__divider"></div>
              <div className="hero-stat">
                <div className="hero-stat__number"><span data-count-to="60">60</span>%</div>
                <p className="hero-stat__label">Sales cycle reduction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero__decoration"></div>
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
                <img src="/images/metalcloud/spectro-hero.png" alt="MetalCloud Platform" />
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">BUSINESS-TO-BUSINESS SOFTWARE AS A SERVICE · ENTERPRISE</span>
                <h3 className="work-card__title">MetalCloud Platform</h3>
                <p className="work-card__description">Internet of Things + Artificial Intelligence modules that digitise India's foundry shop floor — from spectrometer readings to ChargeMix calculations to WhatsApp alerts.</p>
                <div className="work-card__metric">13 → 120 enterprise clients</div>
              </div>
            </Link>

            <div className="work-card" style={{ cursor: 'default' }}>
              <div className="work-card__cover work-card__cover--design-system">
                <div className="design-grid">
                  {[
                    '#0071E3', '#1D1D1D', '#6B6B6B', '#E5E5E7',
                    '#34C759', '#FF3B30', '#FF9500', '#FFFFFF',
                    '#5856D6', '#00B4DB', '#A2845E', '#F5F5F7',
                    '#D70015', '#FFD700', '#8B7355', '#2D2D2D'
                  ].map((color, i) => (
                    <div key={i} className="grid-square" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
                <div className="card-coming-soon">Coming Soon</div>
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">DESIGN SYSTEMS</span>
                <h3 className="work-card__title">NowPurchase & MetalCloud Design System</h3>
                <p className="work-card__description">Unified atomic design system spanning two products — built to reduce design inconsistencies and accelerate engineering handoff.</p>
                <div className="work-card__metric">30% faster dev handoff target</div>
              </div>
            </div>

            <Link to="/work/nowpurchase-website" className="work-card">
              <div className="work-card__cover work-card__cover--nowpurchase">
                <div className="work-card__cover-text">
                  <span className="work-card__cover-domain">nowpurchase.com</span>
                  <div className="work-card__cover-line"></div>
                </div>
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
