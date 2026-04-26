import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountAnimation } from '../../hooks/useCountAnimation'
import LazyImage from '../../components/LazyImage'
import './MetalcloudPlatform.css'

export default function MetalcloudPlatform() {

  useEffect(() => {
    document.title = 'MetalCloud Platform — Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.3)

  return (
    <main className="metalcloud-case-study">
      {/* 1. HERO SECTION */}
      <section className="case-hero fade-up">
        <div className="case-hero__inner">
          <span className="case-hero__tag">B2B SAAS · ENTERPRISE</span>
          <h1>MetalCloud Platform</h1>
          <p className="case-hero__subtitle">
            Digitising India's $19 billion foundry industry — from paper records and gut instinct to Internet of Things-connected, Artificial Intelligence-powered manufacturing intelligence.
          </p>

          <div className="case-metadata-grid">
            <div className="metadata-item fade-up-child">
              <h3>My Role</h3>
              <p>Lead User Experience/User Interface Designer & Project Head</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Team</h3>
              <p>4 Members</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Timeline</h3>
              <p>45 days (Spectro Pro) · 30 days (Optimise)</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Tools</h3>
              <p>FigJam · Figma · Clarity · Amplitude · Google Analytics · Notion</p>
            </div>
          </div>

          <div className="case-hero__visual">
            <LazyImage
              src="/images/metalcloud/spectro-hero.png"
              alt="MetalCloud Spectro Pro — Dashboard, Smart View shop floor display, and WhatsApp alerts"
              className="case-visual case-visual--hero"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* 2. THE CONTEXT SECTION - DARK MANIFESTO */}
      <section className="case-section case-section--dark context-dark fade-up" data-theme="dark">
        <div className="case-section__inner">
          <h2 className="context-heading">India's foundries run on paper and instinct.</h2>
          <div className="context-body">
            <p className="context-paragraph">
              India's $19B metal manufacturing sector — foundries — rely on paper records, Excel sheets, and decades of accumulated gut instinct to run production. A foundry takes raw materials, melts them in a furnace, analyses the molten metal's chemistry using a spectrometer, manually calculates how to adjust the mix, and pours it into moulds.
            </p>
            <p className="context-paragraph">
              Every step in this chain was manual, time-consuming, and error-prone. NowPurchase's MetalCloud platform was already helping foundries with procurement — but the shop floor itself was still analogue.
            </p>
            <p className="context-paragraph">
              I was brought in to design two new modules that would change that.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TWO PROBLEMS SECTION */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Two separate problems. Both costing foundries money every day.</h2>

          <div className="problems-grid">
            <div className="problem-card problem-card--spectro fade-up-child">
              <h3>Furnace idle time</h3>
              <span className="problem-label">SPECTRO PRO</span>
              <p>
                After each melt, a bath sample is taken to a spectrometer for chemical analysis. The printed report is hand-carried to the melting supervisor, who manually calculates the addition/dilution and relays instructions back to the floor. During all of this — the furnace sits idle, burning energy.
              </p>
              <div className="problem-metric">
                <p><strong>Current reality:</strong> 36 heats/day at ~40 min each</p>
                <p><strong>Potential:</strong> 41 heats/day at ~35 min each</p>
                <p className="problem-impact">20% opportunity for cost saving (approx)</p>
              </div>
            </div>

            <div className="problem-card problem-card--optimise fade-up-child">
              <h3>ChargeMix inaccuracy</h3>
              <span className="problem-label">OPTIMISE</span>
              <p>
                Every heat requires a ChargeMix — a precise recipe of raw materials (quantities of scrap, alloys, additives) to achieve target metal chemistry. Foundries were building these manually on paper or Excel, without considering real-time raw material prices, and with no safeguard against human calculation errors.
              </p>
              <div className="problem-metric">
                <p className="problem-impact">12% opportunity for cost saving (approx)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESIGN PROCESS TIMELINE */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>The same 8-step process, applied to both modules.</h2>

          <div className="process-timeline">
            {[
              'Understand the Existing System',
              'Define the System',
              'Identify Opportunities',
              'Ideate for Solution',
              'Create Designs & Develop',
              'Usability Testing & Launch',
              'Product Updates',
              'Impact Showcase'
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-step__number">{i + 1}</div>
                <p className="process-step__label">{step}</p>
              </div>
            ))}
          </div>

          <p className="process-note">
            <em>Both Spectro Pro and Optimise followed this process independently. What's described below is the combined journey.</em>
          </p>
        </div>
      </section>

      {/* 5. UNDERSTANDING THE SYSTEM */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>We went to the factory floor. Not to a meeting room.</h2>
          <div className="case-body">
            <p>
              Research for both modules started with on-ground visits to foundries. We didn't interview stakeholders in an office — we watched operators work, stood next to spectrometer machines, photographed real ChargeMix boards written in chalk, and observed the exact moment a supervisor got a printed report and started calculating by hand.
            </p>

            <div className="case-image-row">
              <figure className="case-figure">
                <LazyImage
                  src="/images/metalcloud/spectro-machine.png"
                  alt="Metavision 1008i spectrometer machine at an Indian foundry"
                  className="case-visual"
                />
                <figcaption>Spectrometer machine (Metavision 1008i) at a partner foundry</figcaption>
              </figure>
              <figure className="case-figure">
                <LazyImage
                  src="/images/metalcloud/optimise-chalkboard.png"
                  alt="Chalk board showing hand-written ChargeMix table at a foundry"
                  className="case-visual"
                />
                <figcaption>ChargeMix records — still done on chalk boards in most foundries</figcaption>
              </figure>
            </div>

            <p>
              For Spectro Pro: Just like a chef tastes food to perfect the seasoning, foundries analyse molten metal after melting. A bath sample is taken, solidified, tested in a spectrometer (the actual machine: a Metavision 1008i), compared to the target chemistry, and adjustments are made through an addition/dilution process.
            </p>
            <p>
              For Optimise: Each foundry's ChargeMix was created based on the grade, part number, target chemistry (Min/Max for each element), raw material yield percentages, and furnace capacity — then calculated manually by the melting supervisor from experience and prior records.
            </p>
            <p>
              <strong>Key insight from field research:</strong> While each foundry had its own variations, the underlying process was standardised enough to digitise. The problem wasn't complexity — it was the absence of tooling.
            </p>
          </div>
        </div>
      </section>

      {/* 6. IDENTIFYING OPPORTUNITIES */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>The numbers told us exactly where the pain was.</h2>

          <div className="opportunities-grid">
            <div className="opportunity-block">
              <h3>SPECTRO PRO</h3>
              <p>
                The current process of taking a bath sample, sending it for analysis, awaiting the report, relaying it to the supervisor, and then making adjustments was keeping furnaces idle for an average of 40 minutes per heat. At 36 heats per day, this was the ceiling. At 35 minutes per heat, 41 heats per day became achievable.
              </p>

              <div className="case-image-single">
                <LazyImage
                  src="/images/metalcloud/spectro-opportunity.png"
                  alt="Radar chart showing impact on Production Cost, Energy Loss, Time, and Productivity — with 36 vs 41 heats per day comparison"
                  className="case-visual"
                />
              </div>

              <p className="opportunity-highlight">Opportunity: 20% cost saving (approx)</p>
              <p className="opportunity-dimensions">
                <strong>4 dimensions of impact:</strong> Production Cost · Energy Loss · Time · Productivity
              </p>
            </div>

            <div className="opportunity-block">
              <h3>OPTIMISE</h3>
              <p>Three pain points discovered through user interviews:</p>
              <ol>
                <li>Raw material price is not considered while creating ChargeMix</li>
                <li>Manual calculations introduce human errors</li>
                <li>Multiple experimental heats are run when the mix is wrong — each one costs money</li>
              </ol>

              <div className="case-image-single">
                <LazyImage
                  src="/images/metalcloud/optimise-painpoints.png"
                  alt="Optimise — 12% cost saving opportunity identified through pain point analysis"
                  className="case-visual"
                />
              </div>

              <p className="opportunity-highlight">Opportunity: 12% cost saving (approx)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE SOLUTION */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Connected. Calculated. Delivered.</h2>

          <div className="solution-subsection">
            <h3>Spectro Pro — what we built</h3>
            <div>
              <p>The solution had 4 components working together:</p>
              <ol className="solution-list">
                <li><strong>Connect Spectrometer</strong> — Internet of Things integration connects the spectrometer machine to MetalCloud's server, streaming chemical analysis data in real time.</li>
                <li><strong>Data Analysis & Calculation</strong> — Artificial Intelligence/Machine Learning engine calculates the required Addition/Dilution suggestion instantly, eliminating the manual calculation step.</li>
                <li><strong>WhatsApp Delivery</strong> — Results are pushed to the supervisor's WhatsApp immediately, no paper required.</li>
                <li><strong>Web App History</strong> — Full heat history stored and accessible. Every past reading, every adjustment, timestamped and searchable.</li>
              </ol>

              <div className="case-image-single case-image-single--flow">
                <LazyImage
                  src="/images/metalcloud/spectro-solution-flow.png"
                  alt="Spectro Pro 4-component solution: Internet of Things connection → Artificial Intelligence/Machine Learning calculation → WhatsApp delivery → Web app history"
                  className="case-visual"
                />
              </div>
            </div>

            <p>
              After Minimum Viable Product launch and 5-customer validation, two new features were added based on field feedback:
            </p>
            <ul className="solution-list">
              <li><strong>Shop-floor Display:</strong> A large TV screen at the factory floor showing live readings and AI suggestions — addressing the reality that not all foundries allow mobile phones on the floor.</li>
              <li><strong>Spectrometer Dashboard:</strong> A data analytics interface for senior stakeholders to track trends, draw insights, and make decisions across multiple heats.</li>
            </ul>

            <div className="case-image-single">
              <LazyImage
                src="/images/metalcloud/spectro-updates.png"
                alt="Shop-floor Display TV showing live readings, and Spectrometer Dashboard for senior stakeholders"
                className="case-visual"
              />
            </div>

            <p className="solution-taskflow">
              <strong>Task flow:</strong> Start → Login → Spectrometer Listing Page → View Reading → Details Page
            </p>

            <div className="case-image-single case-image-single--mockup">
              <LazyImage
                src="/images/metalcloud/spectro-ui.png"
                alt="Spectro Pro web application — data listing and reading detail screens"
                className="case-visual"
              />
            </div>
          </div>

          <div className="solution-subsection">
            <h3>Optimise — what we built</h3>
            <div>
              <p>
                A web-based ChargeMix module that takes three inputs — Target Product Requirement (grade, CE value, target chemistry), Raw Materials inventory (with yield % and current market price), and Furnace Capacity — and calculates the optimal ChargeMix automatically.
              </p>

              <div className="case-image-single case-image-single--system">
                <LazyImage
                  src="/images/metalcloud/optimise-system-flow.png"
                  alt="Optimise system flow: Target product requirements + Raw materials + Furnace capacity → ChargeMix output"
                  className="case-visual"
                />
              </div>

              <p>
                <strong>Outputs:</strong> On-screen ChargeMix recommendation → WhatsApp sharing → Portable Document Format/Comma-Separated Values export for records.
              </p>

              <div className="case-image-single case-image-single--mockup">
                <LazyImage
                  src="/images/metalcloud/optimise-ui.png"
                  alt="Optimise ChargeMix module — multi-step web interface for calculating optimal raw material mix"
                  className="case-visual"
                />
              </div>
            </div>

            <p>
              After PMF validation, two additional modules were shipped:
            </p>
            <ul className="solution-list">
              <li><strong>Grades:</strong> Managing the library of product grades and their specifications</li>
              <li><strong>Inventory:</strong> Tracking raw material stock levels in real time</li>
            </ul>

            <p className="solution-taskflow">
              <strong>Task flow:</strong> Start → Login → ChargeMix Listing → Add New or View CM → Step 1 → Step 2 → Step 3 → Details Page
            </p>
          </div>
        </div>
      </section>

      {/* 8. USABILITY TESTING */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>We tested in real foundries. Not in a lab.</h2>
          <div className="case-body">
            <p>
              Once each Minimum Viable Product was ready, we conducted usability testing with actual operators and supervisors at partner foundries — standing on the factory floor, next to the equipment, with real users performing real tasks.
            </p>
            <p>
              For Spectro Pro: Testing was conducted at the spectrometer machine itself. We observed operators interact with the system in real working conditions — high heat, low lighting, the physical rhythm of a working foundry.
            </p>
            <p>
              For Optimise: Testing was conducted with melting supervisors who had been building ChargeMixes manually for years. We watched them move from their chalk boards and Excel sheets to the web interface.
            </p>

            <div className="case-image-row">
              <figure className="case-figure">
                <LazyImage
                  src="/images/metalcloud/spectro-testing.png"
                  alt="Usability testing of Spectro Pro — operator at the spectrometer machine on the factory floor"
                  className="case-visual"
                />
                <figcaption>Spectro Pro — testing at the spectrometer machine</figcaption>
              </figure>
              <figure className="case-figure">
                <LazyImage
                  src="/images/metalcloud/optimise-testing.png"
                  alt="Usability testing of Optimise — melting supervisors reviewing the ChargeMix interface"
                  className="case-visual"
                />
                <figcaption>Optimise — testing with melting supervisors</figcaption>
              </figure>
            </div>

            <p>
              <strong>What we fixed based on testing:</strong>
            </p>
            <ul>
              <li>Spectro Pro: Added the shop-floor TV display after learning mobile phones aren't always permitted on the factory floor</li>
              <li>Optimise: Simplified the input flow after observing that step 2 caused hesitation in first-time users</li>
            </ul>
            <p>
              After reaching satisfactory usage parameters, both products were launched in beta for market validation.
            </p>
          </div>
        </div>
      </section>

      {/* 9. IMPACT SECTION */}
      <section className="case-section impact-section fade-up" data-theme="dark">
        <div className="case-section__inner">
          <h2 className="impact-heading">The numbers after launch.</h2>

          <div className="impact-stats">
            <div className="impact-stat fade-up-child">
              <div className="impact-stat__number"><span>20 → </span><span data-count-to="140" data-suffix="+">140+</span></div>
              <p className="impact-stat__label">Monthly active users (Spectro Pro)</p>
              <p className="impact-stat__sub">Growth since inception, 2022 → 2025</p>
            </div>
            <div className="impact-stat fade-up-child">
              <div className="impact-stat__number"><span data-count-to="8" data-suffix="+">8+</span></div>
              <p className="impact-stat__label">New customers per month (Optimise)</p>
              <p className="impact-stat__sub">By month 6 post-launch</p>
            </div>
            <div className="impact-stat fade-up-child">
              <div className="impact-stat__number"><span data-count-to="2" data-suffix="">2</span></div>
              <p className="impact-stat__label">Real testimonials from foundry owners</p>
              <p className="impact-stat__sub">Below this section</p>
            </div>
          </div>

          <div className="case-image-row case-image-row--dark">
            <figure className="case-figure case-figure--dark">
              <p className="chart-label">Spectro Pro — Monthly active users</p>
              <LazyImage
                src="/images/metalcloud/spectro-growth.png"
                alt="Spectro Pro monthly active users growth chart — 20 users in 2022 to 140+ in 2025"
                className="case-visual"
              />
              <figcaption>Growth since inception, 2022 → 2025</figcaption>
            </figure>
            <figure className="case-figure case-figure--dark">
              <p className="chart-label">Optimise — New customers per month</p>
              <LazyImage
                src="/images/metalcloud/optimise-growth.png"
                alt="Optimise month-on-month customer growth chart — reaching 8+ new customers per month by month 6"
                className="case-visual"
              />
              <figcaption>Month 1–6 post-launch growth</figcaption>
            </figure>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card fade-up-child">
              <p className="testimonial-quote">
                "With MetalCloud's Spectro Pro module, there's no more furnace idle time. We get instant results, adjust immediately, and save energy and costs every day."
              </p>
              <p className="testimonial-attribution">
                <strong>Owner, 500-ton foundry, Maharashtra</strong>
              </p>
              <p className="testimonial-rating">★★★★½</p>
            </div>

            <div className="testimonial-card fade-up-child">
              <p className="testimonial-quote">
                "MetalCloud's ChargeMix module helped us reduce production costs by guiding us toward more affordable raw materials — all without compromising on quality."
              </p>
              <p className="testimonial-attribution">
                <strong>Owner, 100-ton foundry, West Bengal</strong>
              </p>
              <p className="testimonial-rating">★★★★★</p>
            </div>

            <div className="testimonial-card testimonial-card--small fade-up-child">
              <p className="testimonial-quote">
                "Melting supervisors can act immediately without follow-ups or last-minute rush. It's simplified our workflow."
              </p>
              <p className="testimonial-attribution">
                <strong>Owner, 650-ton foundry, Punjab</strong>
              </p>
              <p className="testimonial-rating">★★★★★</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHAT I LEARNED */}
      <section className="case-section case-section--bg case-section--learnings fade-up">
        <div className="case-section__inner">
          <h2>The hardest design challenge wasn't the interface.</h2>

          <div className="case-body">
            <p>
              Designing for industrial B2B users is fundamentally different from designing consumer products. Our users weren't browsing — they were working. Every interaction happened under real constraints: heat, noise, time pressure, and years of muscle memory built around manual processes.
            </p>
            <p>
              Three things I'd take into every future project:
            </p>
          </div>

          <div className="learning-points">
            <div className="learning-point fade-up-child">
              <div className="learning-point__number">1</div>
              <div className="learning-point__content">
                <h3>Go to where the work happens.</h3>
                <p>
                  Watching a supervisor hand-carry a printed spectrometer report across a factory floor taught me more about the problem than any stakeholder interview would have. The insight that drove Shop-floor Display — that mobile phones aren't allowed on many factory floors — only came from being there.
                </p>
              </div>
            </div>

            <div className="learning-point fade-up-child">
              <div className="learning-point__number">2</div>
              <div className="learning-point__content">
                <h3>Minimum Viable Products should be ugly. Validate before you polish.</h3>
                <p>
                  Both Spectro Pro and Optimise launched with minimal UI — functional, fast, and honest about being a beta. Getting to 5 customers with an imperfect product was worth more than delaying for visual refinement.
                </p>
              </div>
            </div>

            <div className="learning-point fade-up-child">
              <div className="learning-point__number">3</div>
              <div className="learning-point__content">
                <h3>Real metrics are earned, not assumed.</h3>
                <p>
                  The 20% and 12% cost saving opportunities weren't marketing estimates — they came from timing actual heats, counting actual heats per day, and doing the arithmetic with real foundry operators. Designing from those numbers gave the product credibility that no amount of beautiful UI could provide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEXT PROJECT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <div className="next-project">
            <span className="next-project__label">NEXT CASE STUDY</span>
            <Link to="/work/nowpurchase-website" className="next-project__link">
              NowPurchase Website Revamp →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
