import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../../components/LazyImage'
import './CaseStudy.css'

export default function AiSalesAgent() {
  useEffect(() => {
    document.title = 'AI Sales Agent — Umang Singh'
  }, [])

  return (
    <main className="page-content case-study">
      {/* Hero Section */}
      <section className="case-hero">
        <span className="case-hero__tag">AI · AUTOMATION</span>
        <h1>AI Sales Agent</h1>
        <div className="case-hero__image">
          <LazyImage 
            src="/images/hero.png" 
            alt="AI Sales Agent case study" 
            priority={true}
          />
        </div>
      </section>

      {/* Overview Stats */}
      <section className="case-overview">
        <div className="case-grid">
          <div className="case-stat">
            <h3>Role</h3>
            <p>Senior Product Designer</p>
          </div>
          <div className="case-stat">
            <h3>Duration</h3>
            <p>3 months</p>
          </div>
          <div className="case-stat">
            <h3>Status</h3>
            <p>Live in production</p>
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
