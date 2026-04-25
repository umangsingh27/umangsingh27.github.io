import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountAnimation } from '../../hooks/useCountAnimation'
import './NowpurchaseWebsite.css'

export default function NowpurchaseWebsite() {

  useEffect(() => {
    document.title = 'NowPurchase Website Revamp — Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.1)

  return (
    <main className="nowpurchase-case-study">
      {/* 1. HERO SECTION */}
      <section className="case-hero fade-up">
        <div className="case-hero__inner">
          <span className="case-hero__tag">WEBSITE · GROWTH</span>
          <h1>NowPurchase Website Revamp</h1>
          <p className="case-hero__subtitle">
            A full end-to-end redesign of a B2B procurement platform's website — grounded in data, stakeholder research, and a clear content strategy that doubled organic reach.
          </p>

          <div className="case-metadata-grid">
            <div className="metadata-item">
              <h3>My Role</h3>
              <p>Project Head & User Experience Designer</p>
            </div>
            <div className="metadata-item">
              <h3>Team</h3>
              <p>3 Members</p>
            </div>
            <div className="metadata-item">
              <h3>Timeline</h3>
              <p>April 1 – April 30, 2023</p>
            </div>
            <div className="metadata-item">
              <h3>Tools</h3>
              <p>Clickup · Miro · Microsoft Clarity · Google Analytics · Amplitude · Figma</p>
            </div>
          </div>

          <div className="case-hero__visual">
            <img
              src="/images/nowpurchase-website/hero_image.png"
              alt="NowPurchase website revamp — hero section design"
              className="case-visual case-visual--hero"
            />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="case-section case-section--dark context-dark fade-up">
        <div className="case-section__inner">
          <h2 className="context-heading">NowPurchase had outgrown its own website.</h2>
          <div className="context-body">
            <p className="context-paragraph">
              NowPurchase — a B2B company digitising India's $19B foundry industry — had built significant credibility with enterprise clients through MetalCloud, its SaaS platform. But its public website still spoke the language of an early-stage startup: vague, jargon-heavy, and unclear about what the company actually did. Four things were consistently failing visitors: users were confused about what the business did, technical jargon made content inaccessible, navigation was unclear, and company culture and investor credibility were invisible.
            </p>
            <p className="context-paragraph">
              The ask was simple but demanding: a complete website redesign in 30 days. One designer leading the project. Me.
            </p>
            <p className="context-paragraph">
              That constraint — one month, one person, complete overhaul — became the thing that forced clarity. We couldn't afford to redesign for complexity. We had to redesign for understanding.
            </p>

            <figure className="case-figure case-figure--full" style={{marginTop: '2rem'}}>
              <img src="/images/nowpurchase-website/existing-website.png" alt="NowPurchase existing website before revamp" className="case-visual case-visual--screenshot" />
              <figcaption>The existing NowPurchase website — before the revamp</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 3. THE RESEARCH */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Three research methods. One clear picture.</h2>
          <div className="case-body">
            <p>
              Before touching Figma, I spent the first week doing three things: analysing how the current site was actually being used, understanding what competitors were doing better, and getting strategic clarity from the people who knew the business best.
            </p>
          </div>

          <div className="research-grid">
            <div className="research-block">
              <span className="research-label">DATA ANALYSIS</span>
              <h3>30-Day Heatmap & Session Recording Analysis</h3>
              <p className="research-tool"><strong>Tool:</strong> Microsoft Clarity</p>
              <p className="research-desc">
                Studied 30 days of heatmap data and session recordings to understand exactly where users were clicking, scrolling, hesitating, and dropping off on the existing site. No assumptions — only observed behaviour.
              </p>
              <p className="research-finding">
                <strong>Key findings:</strong> Users were scrolling past the hero without engaging. The MetalCloud section was being ignored despite being the company's core product. The "Why NowPurchase" section had near-zero interaction.
              </p>
              <div className="case-image-row" style={{marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px'}}>
                <img src="/images/nowpurchase-website/heatmap-1.png" alt="Heatmap — Hero section" className="case-visual case-visual--heatmap" />
                <img src="/images/nowpurchase-website/heatmap-2.png" alt="Heatmap — Careers section" className="case-visual case-visual--heatmap" />
                <img src="/images/nowpurchase-website/heatmap-3.png" alt="Heatmap — MetalCloud section" className="case-visual case-visual--heatmap" />
                <img src="/images/nowpurchase-website/heatmap-4.png" alt="Heatmap — Footer" className="case-visual case-visual--heatmap" />
              </div>
            </div>

            <div className="research-block">
              <span className="research-label">COMPETITIVE ANALYSIS</span>
              <h3>Benchmarking Against 6 Competitors</h3>
              <p className="research-tool"><strong>Competitors studied:</strong> Zetwerk · Grainmart · IndiaMART · BlazerCart · Gravio · and others</p>
              <p className="research-desc">
                Evaluated how trusted B2B procurement platforms structured their messaging, navigation, and social proof. Identified patterns that built credibility and patterns that created confusion.
              </p>
              <p className="research-finding">
                <strong>Key finding:</strong> The best-performing B2B procurement sites led with outcomes (what you gain), not features (what we offer). NowPurchase's site was doing the opposite.
              </p>
            </div>

            <div className="research-block">
              <span className="research-label">STAKEHOLDER INTERVIEWS</span>
              <h3>12 Strategic Priorities, One Framework</h3>
              <p className="research-tool"><strong>Framework used:</strong> Why-How-What</p>
              <p className="research-desc">
                Conducted structured interviews with NowPurchase stakeholders using the Why-How-What framework to understand the company's goals, how it delivers value, and what it wants to be known for.
              </p>
              <p className="research-finding">
                <strong>12 priorities emerged</strong> — including: invest in technology to streamline procurement, provide superior service to become a trusted platform, digitise operations, expand to 200+ clients, and overcome the perception that cloud-based procurement is unreliable.
              </p>
              <figure className="case-figure" style={{marginTop: '1.5rem'}}>
                <img src="/images/nowpurchase-website/stakeholder-interview.png" alt="Stakeholder interview session with NowPurchase leadership" className="case-visual" />
                <figcaption>Stakeholder interview session — NowPurchase leadership</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE INSIGHT */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>The site was speaking to itself. Not to its visitors.</h2>
          <div className="case-body">
            <p>
              The research painted a consistent picture: NowPurchase's website was written by people who deeply understood the business, for people who already understood it. Technical terms like "ChargeMix," "heat," and "spectrometer" appeared without explanation. The two distinct offerings — a procurement marketplace and a SaaS platform — were presented as one undifferentiated product.
            </p>
            <p>
              The opportunity: if we could make the website explain itself in plain language, structured around what visitors actually needed to know, NowPurchase could convert significantly more of the right traffic.
            </p>
          </div>

          <blockquote className="insight-callout">
            "The problem wasn't the design. It was the content strategy. Fix that first — then design around it."
          </blockquote>
        </div>
      </section>

      {/* 5. THE STRATEGY */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Two brands inside one company. Both needed their own voice.</h2>
          <div className="case-body">
            <p>
              During brainstorming sessions with the team, we identified that NowPurchase was actually two distinct offerings being presented as one. The naming came from an internal competition among the team. Having distinct sub-brand names allowed each to speak clearly to its specific audience without creating confusion.
            </p>
          </div>

          <div className="case-image-row" style={{marginTop: '2rem', marginBottom: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
            <figure className="case-figure">
              <img src="/images/nowpurchase-website/brainstorm-1.png" alt="Strategy workshop with the team" className="case-visual" />
              <figcaption>Strategy workshop — aligning on content and brand direction</figcaption>
            </figure>
            <figure className="case-figure">
              <img src="/images/nowpurchase-website/brainstorm-2.png" alt="1-on-1 stakeholder discussion" className="case-visual" />
              <figcaption>1-on-1 stakeholder session — defining the sub-brand strategy</figcaption>
            </figure>
          </div>

          <div className="strategy-grid">
            <div className="strategy-card strategy-card--marketplace">
              <span className="strategy-tag">NOWPURCHASE MARKETPLACE</span>
              <h3>A procurement platform for raw material buyers.</h3>
              <p><strong>Core value:</strong> Optimise raw material supply chain for timely, high-quality delivery. Explore different alloys to add value to procurement. Develop a sustainable scrap ecosystem. Analyse procurement data at a granular level. Aim to make India the largest supplier in the market.</p>
            </div>

            <div className="strategy-card strategy-card--metalcloud">
              <span className="strategy-tag">NOWPURCHASE METALCLOUD</span>
              <h3>A SaaS platform for foundry operations.</h3>
              <p><strong>Core value:</strong> Real-time updates to foundries to optimise workflows and ensure timely delivery. Identify patterns and trends to increase efficiency. Save costs and improve casting quality with precise control over melting processes. Determine optimal combination of raw materials for desired alloys at lowest cost and highest efficiency.</p>
            </div>
          </div>

          <div className="case-body">
            <p>
              The naming came from an internal competition among the team. Having distinct sub-brand names — NP MarketPlace and NP MetalCloud — allowed each to speak clearly to its specific audience without creating confusion.
            </p>
            <p>
              We structured the entire website using the Why-How-What sales funnel model: start with why NowPurchase exists, move to how it delivers value, then what it specifically offers. This gave every page section a clear job to do. The naming came from an internal competition among the team. Having distinct sub-brand names — NowPurchase MarketPlace and NowPurchase MetalCloud — allowed each to speak clearly to its specific audience without creating confusion.
            </p>
          </div>
        </div>
      </section>

      {/* 6. THE DESIGN */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>From research to information architecture to high-fidelity UI.</h2>
          <div className="case-body">
            <p>
              With the content strategy locked, I moved into design. The process: Information Architecture → Wireframes → Visual Design → Prototype → Usability Testing.
            </p>
          </div>

          <div className="design-subsection">
            <h3>Information Architecture</h3>
            <p>The full Information Architecture covered three zones:</p>
            <ul className="design-list">
              <li><strong>Header:</strong> Home, About, Products (NowPurchase MarketPlace / NowPurchase MetalCloud), Culture, Contact</li>
              <li><strong>Content sections:</strong> Why-Vision, How-Benefits, What-Products, Statistics, Customer Map, Value, Place & Pricing, Graphs, Testimonials, Investors, Job Openings</li>
              <li><strong>Footer:</strong> Address, Terms, Email ID, Privacy Policy, Copyright Info, Corporate Social Responsibility, Events, Site Map</li>
            </ul>

            <figure className="case-figure case-figure--full" style={{marginTop: '1.5rem'}}>
              <img src="/images/nowpurchase-website/information-architecture.png" alt="NowPurchase website information architecture diagram" className="case-visual" />
              <figcaption>Information architecture — full site structure across Home, NP MarketPlace, NP MetalCloud, Culture, and Career</figcaption>
            </figure>
          </div>

          <div className="design-subsection">
            <h3>Wireframes</h3>
            <p>
              Built full wireframes for both the NowPurchase MarketPlace and NowPurchase MetalCloud landing pages before moving to visual design. Every content decision from the strategy phase was expressed in structure before any visual treatment was applied.
            </p>

            <div className="case-image-row" style={{marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              <figure className="case-figure">
                <img src="/images/nowpurchase-website/wireframe-1.png" alt="NowPurchase MarketPlace wireframes" className="case-visual" />
                <figcaption>NP MarketPlace — wireframes</figcaption>
              </figure>
              <figure className="case-figure">
                <img src="/images/nowpurchase-website/wireframe-2.png" alt="NP MetalCloud wireframes" className="case-visual" />
                <figcaption>NP MetalCloud — wireframes</figcaption>
              </figure>
            </div>
          </div>

          <div className="design-subsection">
            <h3>Visual Design</h3>
            <ul className="design-list">
              <li><strong>Typography:</strong> Selected a typeface system that felt trustworthy and modern for an industrial Business-to-Business audience — not too corporate, not too startup.</li>
              <li><strong>Color palette:</strong> Extended from the existing NowPurchase brand while introducing more visual hierarchy and contrast than the original site had.</li>
              <li><strong>Homepage design:</strong> Led with the company's core value proposition, supported by social proof (client logos, investor logos), then moved into the two product offerings with clear differentiation.</li>
            </ul>

            <figure className="case-figure case-figure--full" style={{marginTop: '1.5rem'}}>
              <img src="/images/nowpurchase-website/final-ui.png" alt="NowPurchase revamped homepage — final visual design" className="case-visual case-visual--screenshot" />
              <figcaption>Final homepage design — NowPurchase website revamp</figcaption>
            </figure>
          </div>

          <div className="design-subsection">
            <h3>Usability Testing</h3>
            <p>
              Tested the final prototype with actual NowPurchase team members and stakeholders. The new website design was formally presented to NowPurchase leadership and investors — real presentation photos exist from this session.
            </p>
            <p>
              After passing usability review, the website went live at nowpurchase.com.
            </p>

            <div style={{marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr', gap: '16px'}}>
              <figure className="case-figure">
                <img src="/images/nowpurchase-website/presentation-1.png" alt="Website showcase presentation to NowPurchase team" className="case-visual" />
                <figcaption>Formal website presentation to NowPurchase leadership and investors</figcaption>
              </figure>
              <figure className="case-figure">
                <img src="/images/nowpurchase-website/presentation-2.png" alt="Website presentation — team walkthrough" className="case-visual" />
              </figure>
              <figure className="case-figure">
                <img src="/images/nowpurchase-website/presentation-3.png" alt="Website presentation — Q&A session" className="case-visual" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE OUTCOME */}
      <section className="case-section impact-section fade-up" data-theme="dark">
        <div className="case-section__inner">
          <h2 className="impact-heading">The numbers after launch.</h2>

          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-stat__number"><span data-count-to="20" data-suffix="x">20x</span></div>
              <p className="impact-stat__label">Growth in organic sessions</p>
              <p className="impact-stat__sub">Measured post-launch vs pre-revamp baseline</p>
            </div>
            <div className="impact-stat">
              <div className="impact-stat__number"><span data-count-to="50" data-suffix="%">50%</span></div>
              <p className="impact-stat__label">Sales growth in 6 months</p>
              <p className="impact-stat__sub">Attributed to improved website conversion</p>
            </div>
            <div className="impact-stat">
              <div className="impact-stat__number"><span data-count-to="1" data-suffix=" month">1 month</span></div>
              <p className="impact-stat__label">End-to-end delivery</p>
              <p className="impact-stat__sub">Research, IA, wireframes, UI, and launch</p>
            </div>
          </div>

          <div className="impact-body">
            <p>
              The redesign didn't just improve aesthetics — it gave the business a clearer voice, a smarter content structure, and a website that could finally explain what NowPurchase does to someone encountering it for the first time.
            </p>
            <p className="impact-disclaimer">
              * Outcome metrics sourced from internal analytics (Google Analytics + Amplitude). Sales growth figure reflects reported growth over the 6 months following launch.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHAT I LEARNED */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Design is the last thing you do.</h2>

          <div className="case-body">
            <p>
              This project reinforced something I now hold as a principle: on a website redesign, the content strategy and information architecture decisions are 80% of the work. The visual design is just making those decisions legible.
            </p>
            <p>
              Three things I'd take into every future website project:
            </p>
          </div>

          <div className="learning-points">
            <div className="learning-point">
              <div className="learning-point__number">1</div>
              <div className="learning-point__content">
                <h3>Go to where the work happens.</h3>
                <p>
                  Read the analytics before you open Figma. Thirty days of Clarity session recordings told me more about what was broken than any brief could have. Users don't lie — they just scroll past things that don't work.
                </p>
              </div>
            </div>

            <div className="learning-point">
              <div className="learning-point__number">2</div>
              <div className="learning-point__content">
                <h3>Naming is a design decision.</h3>
                <p>
                  The decision to create NP MarketPlace and NP MetalCloud as distinct sub-brands came out of a design workshop, not a marketing meeting. Giving each product a name and a voice made every downstream design decision easier — because each section now had a clear audience.
                </p>
              </div>
            </div>

            <div className="learning-point">
              <div className="learning-point__number">3</div>
              <div className="learning-point__content">
                <h3>Present the work. Don't just deliver it.</h3>
                <p>
                  The formal presentation to NowPurchase leadership wasn't just a handoff — it was a design decision. Walking stakeholders through the research, the strategy, and the rationale built the kind of organisational confidence that gets websites actually launched, not endlessly revised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEXT PROJECT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <div className="next-project">
            <span className="next-project__label">NEXT CASE STUDY</span>
            <Link to="/work/metalcloud-platform" className="next-project__link">
              MetalCloud Platform →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
