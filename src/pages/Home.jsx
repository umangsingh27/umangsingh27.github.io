import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountAnimation } from '../hooks/useCountAnimation'
import LazyImage from '../components/LazyImage'
import Button from '../components/Button'
import './Home.css'

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = 'Umang Singh — Lead Product Designer'
  }, [])

  useScrollReveal()
  useCountAnimation(0.5)

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
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            <img src="/umang_singh.svg" alt="Umang Singh" className="hero-title-svg" />
          </h1>
          <p className="hero-subtitle">Designs B2B SaaS. Ships AI that sells.</p>
          <p className="hero-description">
            Lead Product Designer at NowPurchase. I design the platform digitizing India's $19B foundry industry, and build the AI agents closing the B2B sales pipeline behind it.
          </p>
          <p className="hero-location">
            Kolkata, India — open to remote
          </p>
          <div className="hero-buttons">
            <Button href="#work" variant="primary">View Work</Button>
            <Button to="/about" variant="secondary">About Me</Button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">
              <span className="stat-value" data-count-to="13">13</span>
              <span className="stat-arrow">→</span>
              <span className="stat-value" data-count-to="120">120</span>
            </div>
            <div className="stat-label">Enterprise clients</div>
          </div>
          <div className="stat">
            <div className="stat-number">
              <span className="stat-value" data-count-to="10">10</span>
              <span className="stat-unit">%</span>
            </div>
            <div className="stat-label">Revenue growth</div>
          </div>
          <div className="stat">
            <div className="stat-number">
              <span className="stat-value" data-count-to="60">60</span>
              <span className="stat-unit">%</span>
            </div>
            <div className="stat-label">Sales cycle reduction</div>
          </div>
        </div>
      </section>

      {/* Work Cards Section */}
      <section className="home-work fade-up content-visibility-auto" id="work" data-nav-theme="dark">
        <div className="home-work__inner">
          <div className="work-grid">
            <Link to="/work/metalcloud-platform" className="work-card">
              <div className="work-card__cover work-card__cover--metalcloud">
                <LazyImage 
                  src="/images/metalcloud/spectro-hero.png" 
                  alt="MetalCloud Platform" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  imgStyle={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">B2B SAAS · ENTERPRISE</span>
                <h3 className="work-card__title">MetalCloud Platform</h3>
                <p className="work-card__description">IoT + AI modules that digitise India's foundry shop floor — from spectrometer readings to ChargeMix calculations to WhatsApp alerts.</p>
                <div className="work-card__metric">13 → 120 enterprise clients</div>
              </div>
            </Link>

            <Link to="/work/design-system" className="work-card">
              <div className="work-card__cover work-card__cover--design-system">
                <LazyImage 
                  src="/images/design-system/design_system_cover.png" 
                  alt="NowPurchase & MetalCloud Design System" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  imgStyle={{ height: '100%', objectFit: 'cover' }}
                />
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
                <LazyImage 
                  src="/images/nowpurchase-website/nowpurchase_cover.png" 
                  alt="NowPurchase Website Revamp" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  imgStyle={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">WEBSITE · GROWTH</span>
                <h3 className="work-card__title">NowPurchase Website Revamp</h3>
                <p className="work-card__description">End-to-end website redesign grounded in 30 days of heatmap data, competitive analysis, and stakeholder research.</p>
                <div className="work-card__metric">20× organic sessions in 6 months (~800 to 16k/mo)</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Work Section */}
      <section className="home-other-work fade-up content-visibility-auto" data-nav-theme="dark">
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
      <section className="home-cta-section fade-up content-visibility-auto">
        <div className="home-cta__outer">
          <div className="about-cta-card">
            <h2 className="about-cta__heading">Let's work together.</h2>
            <p className="about-cta__subline">
              Open to Lead Product Designer roles at B2B SaaS and AI-first companies.
            </p>
            <div className="about-cta__buttons">
              <Button
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Umang_Singh_Resume.pdf"
                variant="primary"
              >
                Download Resume
              </Button>
              <Button
                href="https://www.linkedin.com/in/umangsingh123/"
                target="_blank"
                variant="secondary"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
