import { useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountAnimation } from '../../hooks/useCountAnimation'
import LazyImage from '../../components/LazyImage'
import CaseStudyGlance from '../../components/CaseStudyGlance'
import CaseStudyToc from '../../components/CaseStudyToc'
import NextProject from '../../components/NextProject'
import './CaseStudy.css'
import './NowpurchaseWebsite.css'

export default function NowpurchaseWebsite() {

  useEffect(() => {
    document.title = 'NowPurchase Website Revamp — Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.1)

  return (
    <main className="case-study nowpurchase-case-study">
      {/* 1. HERO SECTION */}
      <section className="case-hero fade-up">
        <div className="case-hero__inner">
          <span className="case-hero__tag">WEBSITE · GROWTH</span>
          <h1>NowPurchase Website Revamp</h1>
          <p className="case-hero__subtitle">
            A website redesign for a B2B procurement platform, informed by usage data, competitor review, and stakeholder interviews.
          </p>

          <CaseStudyGlance stats={[{ value: '20×', label: 'Reported organic sessions within 6 months of launch' }, { value: '50%', label: 'Reported company sales growth in 6 months' }, { value: '30 days', label: 'Project timeline' }]} />

          <div className="case-hero__visual">
            <LazyImage
              src="/images/nowpurchase-website/hero_image.png"
              alt="NowPurchase website revamp — hero section design"
              className="case-visual case-visual--hero"
              priority={true}
            />
          </div>

          <div className="case-metadata-grid">
            <div className="metadata-item fade-up-child">
              <h3>My Role</h3>
              <p>Solo Designer & Development Lead</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Team</h3>
              <p>3 Members (design done solo; I also directed development)</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Timeline</h3>
              <p>April 1 – April 30, 2023</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Tools</h3>
              <p>Clickup · Miro · Microsoft Clarity · Google Analytics · Amplitude · Figma</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTEXT */}
      <section className="case-section context-dark fade-up">
        <div className="case-section__inner">
          <h2 className="context-heading">NowPurchase had outgrown its own website.</h2>
          <div className="context-body">
            <p className="context-paragraph">
              NowPurchase — a B2B company serving India's foundry industry — had built significant credibility with enterprise clients through MetalCloud, its SaaS platform. But its public website still spoke the language of an early-stage startup: vague, jargon-heavy, and unclear about what the company actually did. Four things were consistently failing visitors: users were confused about what the business did, technical jargon made content inaccessible, navigation was unclear, and company culture and investor credibility were invisible.
            </p>
            <p className="context-paragraph">
              The ask was simple but demanding: a complete website redesign in 30 days. One designer leading the project. Me.
            </p>
            <p className="context-paragraph">
              That constraint — one month, one person, complete overhaul — became the thing that forced clarity. We couldn't afford to redesign for complexity. We had to redesign for understanding.
            </p>
          </div>

          <figure className="case-figure np-figure">
            <div className="np-browser">
              <div className="np-browser__bar" aria-hidden="true"><span /><span /><span /></div>
              <div className="np-browser__frame" tabIndex={0} role="region" aria-label="Scrollable screenshot of the existing NowPurchase website">
                <LazyImage src="/images/nowpurchase-website/existing-website.png" alt="NowPurchase existing website before revamp" sizes="(min-width: 1200px) 1120px, 100vw" />
              </div>
            </div>
            <figcaption>The existing NowPurchase website — before the revamp <span className="np-hint">Scroll to explore</span></figcaption>
          </figure>
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

          <div className="np-research">
            <article className="np-research__item cs-card fade-up-child">
              <div className="np-research__text">
                <span className="np-eyebrow">Data analysis</span>
                <h3>30-Day Heatmap & Session Recording Analysis</h3>
                <p className="np-research__meta"><strong>Tool:</strong> Microsoft Clarity</p>
                <p className="np-research__desc">
                  Studied 30 days of heatmap data and session recordings to see where visitors clicked and scrolled on the existing site. The recordings informed our interpretation of where the page needed clearer content.
                </p>
                <p className="np-research__finding">
                  <strong>Key findings:</strong> Users were scrolling past the hero without engaging. The MetalCloud section was being ignored despite being the company's core product. The "Why NowPurchase" section had near-zero interaction.
                </p>
              </div>
              <div className="np-research__media np-heatmaps">
                <LazyImage src="/images/nowpurchase-website/heatmap-1.png" alt="Heatmap — Hero section" className="np-heatmap" sizes="(min-width: 1024px) 300px, 50vw" />
                <LazyImage src="/images/nowpurchase-website/heatmap-2.png" alt="Heatmap — Careers section" className="np-heatmap" sizes="(min-width: 1024px) 300px, 50vw" />
                <LazyImage src="/images/nowpurchase-website/heatmap-3.png" alt="Heatmap — MetalCloud section" className="np-heatmap" sizes="(min-width: 1024px) 300px, 50vw" />
                <LazyImage src="/images/nowpurchase-website/heatmap-4.png" alt="Heatmap — Footer" className="np-heatmap" sizes="(min-width: 1024px) 300px, 50vw" />
              </div>
            </article>

            <article className="np-research__item cs-card fade-up-child">
              <div className="np-research__text">
                <span className="np-eyebrow">Competitive analysis</span>
                <h3>Benchmarking Against 6 Competitors</h3>
                <p className="np-research__desc">
                  Evaluated how trusted B2B procurement platforms structured their messaging, navigation, and social proof. Identified patterns that built credibility and patterns that created confusion.
                </p>
                <p className="np-research__finding">
                  <strong>Pattern in the sites reviewed:</strong> Several led with outcomes for buyers. NowPurchase's site led with features and internal terminology.
                </p>
              </div>
              <div className="np-research__media">
                <p className="np-research__meta"><strong>Competitors studied</strong></p>
                <ul className="np-chips" aria-label="Competitors studied">
                  {['Zetwerk', 'Grainmart', 'IndiaMART', 'BlazerCart', 'Gravio', 'and others'].map(name => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="np-research__item cs-card fade-up-child">
              <div className="np-research__text">
                <span className="np-eyebrow">Stakeholder interviews</span>
                <h3>12 Strategic Priorities, One Framework</h3>
                <p className="np-research__meta"><strong>Framework used:</strong> Why-How-What</p>
                <p className="np-research__desc">
                  Conducted structured interviews with NowPurchase stakeholders using the Why-How-What framework to understand the company's goals, how it delivers value, and what it wants to be known for.
                </p>
                <p className="np-research__finding">
                  <strong>12 priorities emerged</strong> — including: invest in technology to streamline procurement, provide superior service to become a trusted platform, digitise operations, expand to 200+ clients, and overcome the perception that cloud-based procurement is unreliable.
                </p>
              </div>
              <figure className="case-figure np-research__media">
                <LazyImage src="/images/nowpurchase-website/stakeholder-interview.png" alt="Stakeholder interview session with NowPurchase leadership" className="case-visual" sizes="(min-width: 1024px) 600px, 100vw" />
                <figcaption>Stakeholder interview session — NowPurchase leadership</figcaption>
              </figure>
            </article>
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
              Our hypothesis was that clearer language and a structure based on visitors' questions would make the site easier to understand. Conversion impact was not isolated in the available data.
            </p>
          </div>

          <blockquote className="np-quote">
            <p>The problem wasn't the design. It was the content strategy. Fix that first — then design around it.</p>
          </blockquote>
        </div>
      </section>

      {/* 5. THE STRATEGY */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Two brands inside one company. Both needed their own voice.</h2>
          <div className="case-body">
            <p>
              During brainstorming sessions with the team, we identified that NowPurchase was actually two distinct offerings being presented as one.
            </p>
          </div>

          <div className="case-image-row">
            <figure className="case-figure">
              <LazyImage src="/images/nowpurchase-website/brainstorm-1.png" alt="Strategy workshop with the team" className="case-visual" sizes="(min-width: 768px) 560px, 100vw" />
              <figcaption>Strategy workshop — aligning on content and brand direction</figcaption>
            </figure>
            <figure className="case-figure">
              <LazyImage src="/images/nowpurchase-website/brainstorm-2.png" alt="1-on-1 stakeholder discussion" className="case-visual" sizes="(min-width: 768px) 560px, 100vw" />
              <figcaption>1-on-1 stakeholder session — defining the sub-brand strategy</figcaption>
            </figure>
          </div>

          <div className="np-brands">
            <article className="np-brand cs-card fade-up-child">
              <span className="np-eyebrow np-eyebrow--accent">NowPurchase MarketPlace</span>
              <h3>A procurement platform for raw material buyers.</h3>
              <p><strong>Core value:</strong> Optimise raw material supply chain for timely, high-quality delivery. Explore different alloys to add value to procurement. Develop a sustainable scrap ecosystem. Analyse procurement data at a granular level. Aim to make India the largest supplier in the market.</p>
            </article>
            <article className="np-brand cs-card fade-up-child">
              <span className="np-eyebrow np-eyebrow--accent">NowPurchase MetalCloud</span>
              <h3>A SaaS platform for foundry operations.</h3>
              <p><strong>Core value:</strong> Real-time updates to foundries to optimise workflows and ensure timely delivery. Identify patterns and trends to increase efficiency. Save costs and improve casting quality with precise control over melting processes. Determine optimal combination of raw materials for desired alloys at lowest cost and highest efficiency.</p>
            </article>
          </div>

          <div className="case-body">
            <p>
              The naming came from an internal competition among the team. Having distinct sub-brand names — NowPurchase MarketPlace and NowPurchase MetalCloud — allowed each to speak clearly to its specific audience without creating confusion.
            </p>
            <p>
              We structured the entire website using the Why-How-What sales funnel model: start with why NowPurchase exists, move to how it delivers value, then what it specifically offers. This gave every page section a clear job to do.
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
              With the content strategy locked, I moved into design. The process: Information Architecture → Wireframes → Visual Design → Prototype → Stakeholder Review.
            </p>
          </div>

          <div className="np-steps">
            <div className="np-step">
              <div className="np-step__text">
                <h3>Information Architecture</h3>
                <p>The full Information Architecture covered three zones:</p>
                <ul className="np-list">
                  <li><strong>Header</strong> Home, About, Products (NowPurchase MarketPlace / NowPurchase MetalCloud), Culture, Contact</li>
                  <li><strong>Content sections</strong> Why-Vision, How-Benefits, What-Products, Statistics, Customer Map, Value, Place & Pricing, Graphs, Testimonials, Investors, Job Openings</li>
                  <li><strong>Footer</strong> Address, Terms, Email ID, Privacy Policy, Copyright Info, Corporate Social Responsibility, Events, Site Map</li>
                </ul>
              </div>
              <figure className="case-figure np-figure">
                <LazyImage src="/images/nowpurchase-website/information-architecture.png" alt="NowPurchase website information architecture diagram" className="case-visual np-surface-visual" sizes="(min-width: 1200px) 1120px, 100vw" />
                <figcaption>Information architecture — full site structure across Home, NP MarketPlace, NP MetalCloud, Culture, and Career</figcaption>
              </figure>
            </div>

            <div className="np-step">
              <div className="np-step__text">
                <h3>Wireframes</h3>
                <p>
                  Built full wireframes for both the NowPurchase MarketPlace and NowPurchase MetalCloud landing pages before moving to visual design. Every content decision from the strategy phase was expressed in structure before any visual treatment was applied.
                </p>
              </div>
              <div className="case-image-row np-figure">
                <figure className="case-figure">
                  <div className="np-browser">
                    <div className="np-browser__bar" aria-hidden="true"><span /><span /><span /></div>
                    <div className="np-browser__frame" tabIndex={0} role="region" aria-label="Scrollable NP MarketPlace wireframes">
                      <LazyImage src="/images/nowpurchase-website/wireframe-1.png" alt="NowPurchase MarketPlace wireframes" sizes="(min-width: 768px) 560px, 100vw" />
                    </div>
                  </div>
                  <figcaption>NP MarketPlace — wireframes <span className="np-hint">Scroll to explore</span></figcaption>
                </figure>
                <figure className="case-figure">
                  <div className="np-browser">
                    <div className="np-browser__bar" aria-hidden="true"><span /><span /><span /></div>
                    <div className="np-browser__frame" tabIndex={0} role="region" aria-label="Scrollable NP MetalCloud wireframes">
                      <LazyImage src="/images/nowpurchase-website/wireframe-2.png" alt="NP MetalCloud wireframes" sizes="(min-width: 768px) 560px, 100vw" />
                    </div>
                  </div>
                  <figcaption>NP MetalCloud — wireframes <span className="np-hint">Scroll to explore</span></figcaption>
                </figure>
              </div>
            </div>

            <div className="np-step">
              <div className="np-step__text">
                <h3>Visual Design</h3>
                <ul className="np-list">
                  <li><strong>Typography</strong> Selected a typeface system that felt trustworthy and modern for an industrial Business-to-Business audience — not too corporate, not too startup.</li>
                  <li><strong>Color palette</strong> Extended from the existing NowPurchase brand while introducing more visual hierarchy and contrast than the original site had.</li>
                  <li><strong>Homepage design</strong> Led with the company's core value proposition, supported by social proof (client logos, investor logos), then moved into the two product offerings with clear differentiation.</li>
                </ul>
              </div>
              <figure className="case-figure np-figure">
                <div className="np-browser">
                  <div className="np-browser__bar" aria-hidden="true"><span /><span /><span /></div>
                  <div className="np-browser__frame" tabIndex={0} role="region" aria-label="Scrollable screenshot of the final homepage design">
                    <LazyImage src="/images/nowpurchase-website/final-ui.png" alt="NowPurchase revamped homepage — final visual design" sizes="(min-width: 1200px) 1120px, 100vw" />
                  </div>
                </div>
                <figcaption>Final homepage design — NowPurchase website revamp <span className="np-hint">Scroll to explore</span></figcaption>
              </figure>
            </div>

            <div className="np-step">
              <div className="np-step__text">
                <h3>Stakeholder Review</h3>
                <p>
                  Reviewed the final prototype with NowPurchase team members and stakeholders. The website design was presented to leadership and investors; photos from that session are shown below.
                </p>
                <p>
                  After review, the website went live at nowpurchase.com.
                </p>
              </div>
              <figure className="case-figure np-figure">
                <div className="np-gallery">
                  <LazyImage src="/images/nowpurchase-website/presentation-1.png" alt="Website showcase presented to the NowPurchase team" className="case-visual" sizes="(min-width: 768px) 560px, 100vw" />
                  <LazyImage src="/images/nowpurchase-website/presentation-3.png" alt="Audience listening during the website presentation" className="case-visual" sizes="(min-width: 768px) 560px, 100vw" />
                </div>
                <figcaption>Formal website presentation to NowPurchase leadership and investors</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE OUTCOME */}
      <section className="case-section impact-section fade-up">
        <div className="case-section__inner">
          <h2 className="impact-heading">The numbers after launch.</h2>

          <div className="impact-stats">
            <div className="impact-stat fade-up-child">
              <div className="impact-stat__number"><span data-count-to="20" data-suffix="×">20×</span></div>
              <p className="impact-stat__label">Growth in organic sessions over 6 months</p>
              <p className="impact-stat__sub">Measured post-launch vs pre-revamp baseline</p>
            </div>
            <div className="impact-stat fade-up-child">
              <div className="impact-stat__number"><span data-count-to="50" data-suffix="%">50%</span></div>
              <p className="impact-stat__label">Sales growth in 6 months</p>
              <p className="impact-stat__sub">Company-reported growth; the website's share is unverified</p>
            </div>
            <div className="impact-stat fade-up-child">
              <div className="impact-stat__number"><span data-count-to="1" data-suffix=" month">1 month</span></div>
              <p className="impact-stat__label">End-to-end delivery</p>
              <p className="impact-stat__sub">Research, IA, wireframes, UI, and launch</p>
            </div>
          </div>

          <div className="np-impact-body">
            <p>
              The redesign didn't just improve aesthetics — it gave the business a clearer voice, a smarter content structure, and a website that could finally explain what NowPurchase does to someone encountering it for the first time.
            </p>
            <p className="np-impact-body__note">
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
              This project reinforced how much the content strategy and information architecture shape a website redesign. The visual design made those decisions easier to navigate and understand.
            </p>
            <p>
              Three things I'd take into every future website project:
            </p>
          </div>

          <div className="learning-points">
            <div className="learning-point fade-up-child">
              <div className="learning-point__number">01</div>
              <div className="learning-point__content">
                <h3>Go to where the work happens.</h3>
                <p>
                  Read the analytics before opening Figma. The Clarity recordings showed which sections visitors passed over and gave us specific places to investigate.
                </p>
              </div>
            </div>

            <div className="learning-point fade-up-child">
              <div className="learning-point__number">02</div>
              <div className="learning-point__content">
                <h3>Naming is a design decision.</h3>
                <p>
                  The decision to create NP MarketPlace and NP MetalCloud as distinct sub-brands came out of a design workshop, not a marketing meeting. Giving each product a name and a voice made every downstream design decision easier — because each section now had a clear audience.
                </p>
              </div>
            </div>

            <div className="learning-point fade-up-child">
              <div className="learning-point__number">03</div>
              <div className="learning-point__content">
                <h3>Present the work. Don't just deliver it.</h3>
                <p>
                  Presenting the research, strategy, and rationale to leadership helped explain the choices behind the final design. That made the review more useful than a screen-by-screen walkthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEXT PROJECT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <NextProject
            to="/work/design-system"
            tag="Design Systems · B2B SaaS"
            title="Design System — NowPurchase × MetalCloud"
            metric="Shared system across two products · rollout in progress"
            image="/images/design-system/design_system_cover.png"
            imageAlt="NowPurchase & MetalCloud Design System"
          />
        </div>
      </section>
      <CaseStudyToc />
    </main>
  )
}
