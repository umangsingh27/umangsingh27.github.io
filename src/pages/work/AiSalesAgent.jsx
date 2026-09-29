import { useEffect } from 'react'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import './CaseStudy.css'

export default function AiSalesAgent() {
  useEffect(() => {
    document.title = 'AI Sales Agent — Umang Singh'
  }, [])

  return (
    <main className="case-study ai-case-study">
      <section className="case-hero">
        <div className="case-hero__inner">
          <span className="case-hero__tag">AI · Workflow automation</span>
          <h1>AI Sales Agent</h1>
          <p className="case-hero__subtitle">
            An n8n and LLM workflow for B2B sales follow-ups, built and shipped to production.
          </p>
          <div className="case-metadata-grid">
            <div className="metadata-item"><h3>My contribution</h3><p>Built the follow-up workflow</p></div>
            <div className="metadata-item"><h3>Stack</h3><p>n8n · LLM</p></div>
            <div className="metadata-item"><h3>Status</h3><p>In production</p></div>
          </div>
        </div>
      </section>

      <section className="case-section case-section--surface">
        <div className="case-section__inner">
          <h2>What the current record supports</h2>
          <div className="case-body">
            <p>The workflow automates B2B sales follow-ups and shipped to production. The available project record does not include a verifiable outcome measurement, so no revenue-impact figure is presented here.</p>
            <p>Workflow screenshots, decisions, collaborators, and a verified measurement method are not yet available in this portfolio. I have left those details out until they can be documented.</p>
          </div>
          <div style={{ marginTop: 32 }}><Button to="/work" variant="secondary"><Icon name="arrowLeft" size={17} /> Back to work</Button></div>
        </div>
      </section>
    </main>
  )
}
