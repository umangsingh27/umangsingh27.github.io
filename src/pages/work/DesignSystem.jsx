import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CaseStudy.css'

export default function DesignSystem() {
  useEffect(() => {
    document.title = 'Design System — Umang Singh'
  }, [])

  return (
    <main className="page-content case-study">
      {/* Hero Section */}
      <section className="case-hero">
        <span className="case-hero__tag">DESIGN SYSTEMS</span>
        <h1>NowPurchase & MetalCloud Design System</h1>
        <div className="case-hero__image">
          <img src="/hero.png" alt="Design System case study" />
        </div>
      </section>

      {/* Overview Stats */}
      <section className="case-overview">
        <div className="case-grid">
          <div className="case-stat">
            <h3>Role</h3>
            <p>Design System Architect</p>
          </div>
          <div className="case-stat">
            <h3>Duration</h3>
            <p>6 months</p>
          </div>
          <div className="case-stat">
            <h3>Impact</h3>
            <p>200+ components</p>
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="case-body">
        <h2>Case Study</h2>
        <p className="text-secondary">
          Detailed case study content coming soon. Check back for an in-depth look at the design
          process, challenges, and outcomes of this project.
        </p>
        <Link to="/work" className="btn btn--secondary">← Back to Work</Link>
      </section>
    </main>
  )
}
