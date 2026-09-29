import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountAnimation } from '../hooks/useCountAnimation'
import LazyImage from '../components/LazyImage'
import Button from '../components/Button'
import Icon from '../components/Icon'
import './Home.css'

const YOUTUBE_ID = '15OKpiRyF9E'
const LINKEDIN_POST_URL = 'https://www.linkedin.com/posts/umangsingh123_fofkolkata-config2026-productdesign-ugcPost-7481642612769353728-yz0H/'

export default function Home() {
  const heroRef = useRef(null)
  const [videoActive, setVideoActive] = useState(false)

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

  const clients = [
    'NowPurchase', 'MetalCloud', 'Winjit', 'RBL Bank', 'SIDBI', 'BuildingLink', 'Docuverus', 'Torrent Labs',
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            <img src="/umang_singh.svg" alt="Umang Singh" className="hero-title-svg" />
          </h1>
          <p className="hero-subtitle">Product design for complex B2B workflows</p>
          <p className="hero-description">
            Lead Product Designer at NowPurchase. My work spans foundry operations, procurement, and a shared design system.
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
            <div className="stat-label">MetalCloud clients over 12 months</div>
          </div>
          <div className="stat">
            <div className="stat-number">2</div>
            <div className="stat-label">Products in the shared design system</div>
          </div>
          <div className="stat">
            <div className="stat-number">20×</div>
            <div className="stat-label">Organic sessions within 6 months of the website revamp</div>
          </div>
        </div>
      </section>

      <section className="home-talk fade-up" aria-labelledby="home-talk-title">
        <div className="home-talk__inner">
          <div className="home-talk__text">
            <span className="home-talk__tag">Speaking · Friends of Figma Kolkata</span>
            <h2 id="home-talk-title" className="home-talk__title">AI graduated. We're the only ones still in beta.</h2>
            <p className="home-talk__description">
              A talk at Friends of Figma Kolkata about what Config 2026 means for product designers building with AI.
            </p>
            <a
              href={LINKEDIN_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-talk__link"
            >
              View the post on LinkedIn <Icon name="arrowRight" size={17} />
            </a>
          </div>

          <div className="home-talk__video">
            {videoActive ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Umang Singh at Friends of Figma Kolkata"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="home-talk__poster"
                onClick={() => setVideoActive(true)}
                aria-label="Play video: Umang Singh at Friends of Figma Kolkata"
              >
                <img
                  src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="home-talk__play" aria-hidden="true"><Icon name="play" size={28} /></span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Work Cards Section */}
      <section className="home-work fade-up content-visibility-auto" id="work">
        <div className="home-work__inner">
          <div className="home-work__heading">
            <span>Selected work</span>
            <h2>Products, systems, and the decisions behind them.</h2>
          </div>
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
                <div className="work-card__stat">13 → 120</div>
                <div className="work-card__stat-label">Platform clients over 12 months</div>
                <h3 className="work-card__title">MetalCloud Platform</h3>
                <p className="work-card__description">IoT + AI modules that digitise India's foundry shop floor — from spectrometer readings to ChargeMix calculations to WhatsApp alerts.</p>
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
              </div>
              <div className="work-card__meta">
                <span className="work-card__tag">DESIGN SYSTEMS · B2B SAAS</span>
                <div className="work-card__stat">2 products</div>
                <div className="work-card__stat-label">One shared component language · rollout in progress</div>
                <h3 className="work-card__title">Design System — NowPurchase × MetalCloud</h3>
                <p className="work-card__description">Unified atomic design system spanning two products — built to reduce design inconsistencies and accelerate engineering handoff.</p>
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
                <div className="work-card__stat">20×</div>
                <div className="work-card__stat-label">Organic sessions in 6 months after launch</div>
                <h3 className="work-card__title">NowPurchase Website Revamp</h3>
                <p className="work-card__description">End-to-end website redesign grounded in 30 days of heatmap data, competitive analysis, and stakeholder research.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section — testimonial + companies worked with */}
      <section className="home-trust fade-up" data-nav-theme="dark">
        <div className="home-trust__inner">
          <blockquote className="home-trust__quote">
            <p>“One of the brightest minds I have ever worked with. This guy has great communication skills and knowledge about Experience Design. I highly recommend him.”</p>
            <footer>
              <span className="home-trust__author">Younis Mushtaq</span>
              <span className="home-trust__author-title">UX Designer, Spektra Systems</span>
            </footer>
          </blockquote>
          <Link to="/about#testimonials" className="home-trust__more">More from the team <Icon name="arrowRight" size={16} /></Link>

          <div className="home-trust__clients" role="list" aria-label="Companies worked with">
            {clients.map((name) => (
              <span key={name} className="home-trust__client" role="listitem">{name}</span>
            ))}
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
    </main>
  )
}
