import { useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountAnimation } from '../../hooks/useCountAnimation'
import LazyImage from '../../components/LazyImage'
import CaseStudyGlance from '../../components/CaseStudyGlance'
import CaseStudyToc from '../../components/CaseStudyToc'
import NextProject from '../../components/NextProject'
import './CaseStudy.css'
import './MetalcloudPlatform.css'

const PROCESS_STEPS = [
  'Understand the Existing System',
  'Define the System',
  'Identify Opportunities',
  'Ideate for Solution',
  'Create Designs & Develop',
  'Usability Testing & Launch',
  'Product Updates',
  'Impact Showcase',
]

const SPECTRO_COMPONENTS = [
  { title: 'Connect Spectrometer', text: "IoT integration connects the spectrometer machine to MetalCloud's server, streaming chemical analysis data in real time." },
  { title: 'Data Analysis & Calculation', text: 'AI/ML engine calculates the required Addition/Dilution suggestion instantly, eliminating the manual calculation step.' },
  { title: 'WhatsApp Delivery', text: "Results are pushed to the supervisor's WhatsApp immediately, no paper required." },
  { title: 'Web App History', text: 'Full heat history stored and accessible. Every past reading, every adjustment, timestamped and searchable.' },
]

const SPECTRO_UPDATES = [
  { title: 'Shop-floor Display', text: 'A large TV screen at the factory floor showing live readings and AI suggestions — addressing the reality that not all foundries allow mobile phones on the floor.' },
  { title: 'Spectrometer Dashboard', text: 'A data analytics interface for senior stakeholders to track trends, draw insights, and make decisions across multiple heats.' },
]

const OPTIMISE_MODULES = [
  { title: 'Grades', text: 'Managing the library of product grades and their specifications' },
  { title: 'Inventory', text: 'Tracking raw material stock levels in real time' },
]

const SPECTRO_FLOW = ['Start', 'Login', 'Spectrometer Listing Page', 'View Reading', 'Details Page']
const OPTIMISE_FLOW = ['Start', 'Login', 'ChargeMix Listing', 'Add New or View CM', 'Step 1', 'Step 2', 'Step 3', 'Details Page']

const TESTING_FIXES = [
  { module: 'Spectro Pro', text: "Added the shop-floor TV display after learning mobile phones aren't always permitted on the factory floor" },
  { module: 'Optimise', text: 'Simplified the input flow after observing that step 2 caused hesitation in first-time users' },
]

const TESTIMONIALS = [
  { quote: "With MetalCloud's Spectro Pro module, there's no more furnace idle time. We get instant results, adjust immediately, and save energy and costs every day.", author: 'Owner, 500-ton foundry, Maharashtra' },
  { quote: "MetalCloud's ChargeMix module helped us reduce production costs by guiding us toward more affordable raw materials — all without compromising on quality.", author: 'Owner, 100-ton foundry, West Bengal' },
  { quote: "Melting supervisors can act immediately without follow-ups or last-minute rush. It's simplified our workflow.", author: 'Owner, 650-ton foundry, Punjab' },
]

const pad = (n) => String(n).padStart(2, '0')

function TaskFlow({ steps }) {
  return (
    <div className="mc-flow">
      <span className="mc-eyebrow">Task flow</span>
      <ol className="mc-flow__steps">
        {steps.map((step, i) => (
          <li key={`${step}-${i}`}><span className="mc-flow__chip">{step}</span></li>
        ))}
      </ol>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="mc-stat">
      <span className="mc-stat__value">{value}</span>
      <span className="mc-stat__label">{label}</span>
    </div>
  )
}

export default function MetalcloudPlatform() {

  useEffect(() => {
    document.title = 'MetalCloud Platform — Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.3)

  return (
    <main className="case-study metalcloud-case-study">
      {/* 1. HERO */}
      <section className="case-hero fade-up">
        <div className="case-hero__inner">
          <span className="case-hero__tag">B2B SAAS · ENTERPRISE</span>
          <h1>MetalCloud Platform</h1>
          <p className="case-hero__subtitle">
            Bringing foundry operations from paper records and manual calculations to IoT-connected manufacturing tools.
          </p>

          <CaseStudyGlance stats={[{ value: '13 → 120', label: 'Platform clients in 12 months' }, { value: '36 → 41', label: 'Heats per day identified as a potential improvement' }, { value: '12%', label: 'Approximate cost-saving opportunity identified for Optimise' }]} />

          <div className="case-hero__visual">
            <LazyImage
              src="/images/metalcloud/spectro-hero.png"
              alt="MetalCloud Spectro Pro — Dashboard, Smart View shop floor display, and WhatsApp alerts"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
            />
          </div>

          <div className="case-metadata-grid">
            <div className="metadata-item fade-up-child">
              <h3>My Role</h3>
              <p>Lead UX/UI Designer & Project Head</p>
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
        </div>
      </section>

      {/* 2. CONTEXT */}
      <section className="case-section context-dark fade-up">
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

      {/* 3. PROBLEMS */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Two separate problems. Both costing foundries money every day.</h2>

          <div className="mc-grid-2">
            <article className="cs-card mc-card fade-up-child">
              <span className="mc-eyebrow">Spectro Pro</span>
              <h3>Furnace idle time</h3>
              <p className="mc-card__text">
                After each melt, a bath sample is taken to a spectrometer for chemical analysis. The printed report is hand-carried to the melting supervisor, who manually calculates the addition/dilution and relays instructions back to the floor. During all of this — the furnace sits idle, burning energy.
              </p>
              <dl className="mc-facts">
                <div>
                  <dt>Current reality</dt>
                  <dd>36 heats/day at ~40 min each</dd>
                </div>
                <div>
                  <dt>Potential</dt>
                  <dd>41 heats/day at ~35 min each</dd>
                </div>
              </dl>
              <Stat value="20%" label="Opportunity for cost saving (approx)" />
            </article>

            <article className="cs-card mc-card fade-up-child">
              <span className="mc-eyebrow">Optimise</span>
              <h3>ChargeMix inaccuracy</h3>
              <p className="mc-card__text">
                Every heat requires a ChargeMix — a precise recipe of raw materials (quantities of scrap, alloys, additives) to achieve target metal chemistry. Foundries were building these manually on paper or Excel, without considering real-time raw material prices, and with no safeguard against human calculation errors.
              </p>
              <Stat value="12%" label="Opportunity for cost saving (approx)" />
            </article>
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>The same 8-step process, applied to both modules.</h2>

          <ol className="mc-steps">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className="mc-step">
                <span className="mc-step__number">{pad(i + 1)}</span>
                <span className="mc-step__label">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mc-note">
            Both Spectro Pro and Optimise followed this process independently. What's described below is the combined journey.
          </p>
        </div>
      </section>

      {/* 5. FIELD RESEARCH */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Field research on the factory floor.</h2>
          <div className="case-body">
            <p>
              Research for both modules started with on-ground visits to foundries. We watched operators work, observed spectrometer machines, photographed real ChargeMix boards written in chalk, and followed how printed reports reached supervisors for manual calculations.
            </p>
          </div>

          <div className="mc-gallery mc-gallery--research">
            <figure className="case-figure">
              <div className="mc-media">
                <LazyImage
                  src="/images/metalcloud/spectro-machine.png"
                  alt="Metavision 1008i spectrometer machine at an Indian foundry"
                  sizes="(max-width: 768px) 100vw, 780px"
                />
              </div>
              <figcaption>Spectrometer machine (Metavision 1008i) at a partner foundry</figcaption>
            </figure>
            <figure className="case-figure">
              <div className="mc-media">
                <LazyImage
                  src="/images/metalcloud/optimise-chalkboard.png"
                  alt="Chalk board showing hand-written ChargeMix table at a foundry"
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
              <figcaption>ChargeMix records — still done on chalk boards in most foundries</figcaption>
            </figure>
          </div>

          <div className="case-body">
            <p>
              For Spectro Pro: Just like a chef tastes food to perfect the seasoning, foundries analyse molten metal after melting. A bath sample is taken, solidified, tested in a spectrometer (the actual machine: a Metavision 1008i), compared to the target chemistry, and adjustments are made through an addition/dilution process.
            </p>
            <p>
              For Optimise: Each foundry's ChargeMix was created based on the grade, part number, target chemistry (Min/Max for each element), raw material yield percentages, and furnace capacity — then calculated manually by the melting supervisor from experience and prior records.
            </p>
          </div>

          <div className="mc-insight">
            <span className="mc-eyebrow">Key insight from field research</span>
            <p>
              While each foundry had its own variations, the underlying process was standardised enough to digitise. The problem wasn't complexity — it was the absence of tooling.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OPPORTUNITIES */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Quantifying the opportunities.</h2>

          <div className="mc-grid-2">
            <article className="cs-card mc-card fade-up-child">
              <span className="mc-eyebrow">Spectro Pro</span>
              <p className="mc-card__text">
                The current process of taking a bath sample, sending it for analysis, awaiting the report, relaying it to the supervisor, and then making adjustments was keeping furnaces idle for an average of 40 minutes per heat. At 36 heats per day, this was the ceiling. At 35 minutes per heat, 41 heats per day became achievable.
              </p>
              <div className="mc-plate">
                <LazyImage
                  src="/images/metalcloud/spectro-opportunity.png"
                  alt="Radar chart showing impact on Production Cost, Energy Loss, Time, and Productivity — with 36 vs 41 heats per day comparison"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className="mc-dimensions">
                <span className="mc-dimensions__label">4 dimensions of impact</span>
                <ul>
                  <li>Production Cost</li>
                  <li>Energy Loss</li>
                  <li>Time</li>
                  <li>Productivity</li>
                </ul>
              </div>
              <p className="mc-highlight">Opportunity: 20% cost saving (approx)</p>
            </article>

            <article className="cs-card mc-card fade-up-child">
              <span className="mc-eyebrow">Optimise</span>
              <p className="mc-card__text">Three pain points discovered through user interviews:</p>
              <ol className="mc-rows mc-rows--compact">
                <li>
                  <span className="mc-rows__num">01</span>
                  <span className="mc-rows__text">Raw material price is not considered while creating ChargeMix</span>
                </li>
                <li>
                  <span className="mc-rows__num">02</span>
                  <span className="mc-rows__text">Manual calculations introduce human errors</span>
                </li>
                <li>
                  <span className="mc-rows__num">03</span>
                  <span className="mc-rows__text">Multiple experimental heats are run when the mix is wrong — each one costs money</span>
                </li>
              </ol>
              <div className="mc-plate">
                <LazyImage
                  src="/images/metalcloud/optimise-painpoints.png"
                  alt="Optimise — 12% cost saving opportunity identified through pain point analysis"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <p className="mc-highlight">Opportunity: 12% cost saving (approx)</p>
            </article>
          </div>
        </div>
      </section>

      {/* 7. THE SOLUTION */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Four components, working in real time.</h2>

          <div className="mc-module">
            <span className="mc-eyebrow">Module 01</span>
            <h3>Spectro Pro — what we built</h3>

            <div className="mc-split">
              <div className="mc-split__text">
                <p className="mc-lead">The solution had 4 components working together:</p>
                <ol className="mc-rows">
                  {SPECTRO_COMPONENTS.map((c, i) => (
                    <li key={c.title}>
                      <span className="mc-rows__num">{pad(i + 1)}</span>
                      <span className="mc-rows__text">
                        <strong>{c.title}</strong>
                        {c.text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mc-split__media">
                <div className="mc-plate">
                  <LazyImage
                    src="/images/metalcloud/spectro-solution-flow.png"
                    alt="Spectro Pro 4-component solution: Internet of Things connection → Artificial Intelligence/Machine Learning calculation → WhatsApp delivery → Web app history"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
              </div>
            </div>

            <p className="mc-lead">
              After MVP launch and 5-customer validation, two new features were added based on field feedback:
            </p>
            <div className="mc-grid-2">
              {SPECTRO_UPDATES.map((f) => (
                <div key={f.title} className="cs-card mc-feature">
                  <h4 className="mc-feature__title">{f.title}</h4>
                  <p className="mc-card__text">{f.text}</p>
                </div>
              ))}
            </div>

            <div className="mc-wide">
              <LazyImage
                src="/images/metalcloud/spectro-updates.png"
                alt="Shop-floor Display TV showing live readings, and Spectrometer Dashboard for senior stakeholders"
                sizes="(max-width: 768px) 100vw, 1120px"
              />
            </div>

            <TaskFlow steps={SPECTRO_FLOW} />

            <div className="mc-media mc-screen">
              <LazyImage
                src="/images/metalcloud/spectro-ui.png"
                alt="Spectro Pro web application — data listing and reading detail screens"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>

          <div className="mc-module">
            <span className="mc-eyebrow">Module 02</span>
            <h3>Optimise — what we built</h3>

            <div className="mc-split mc-split--tall">
              <div className="mc-split__text">
                <p className="mc-lead">
                  A web-based ChargeMix module that takes three inputs — Target Product Requirement (grade, CE value, target chemistry), Raw Materials inventory (with yield % and current market price), and Furnace Capacity — and calculates the optimal ChargeMix automatically.
                </p>
                <p className="mc-lead">
                  <strong>Outputs:</strong> On-screen ChargeMix recommendation → WhatsApp sharing → PDF/CSV export for records.
                </p>
                <p className="mc-lead">After PMF validation, two additional modules were shipped:</p>
                <ol className="mc-rows">
                  {OPTIMISE_MODULES.map((m, i) => (
                    <li key={m.title}>
                      <span className="mc-rows__num">{pad(i + 1)}</span>
                      <span className="mc-rows__text">
                        <strong>{m.title}</strong>
                        {m.text}
                      </span>
                    </li>
                  ))}
                </ol>
                <TaskFlow steps={OPTIMISE_FLOW} />
              </div>
              <div className="mc-split__media">
                <div className="mc-plate mc-plate--tall">
                  <LazyImage
                    src="/images/metalcloud/optimise-system-flow.png"
                    alt="Optimise system flow: Target product requirements + Raw materials + Furnace capacity → ChargeMix output"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </div>
              </div>
            </div>

            <div className="mc-device">
              <LazyImage
                src="/images/metalcloud/optimise-ui.png"
                alt="Optimise ChargeMix module — multi-step web interface for calculating optimal raw material mix"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. USABILITY TESTING */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Usability testing, on the factory floor.</h2>
          <div className="case-body">
            <p>
              Once each MVP was ready, we conducted usability testing with actual operators and supervisors at partner foundries — standing on the factory floor, next to the equipment, with real users performing real tasks.
            </p>
            <p>
              For Spectro Pro: Testing was conducted at the spectrometer machine itself. We observed operators interact with the system in real working conditions — high heat, low lighting, the physical rhythm of a working foundry.
            </p>
            <p>
              For Optimise: Testing was conducted with melting supervisors who had been building ChargeMixes manually for years. We watched them move from their chalk boards and Excel sheets to the web interface.
            </p>
          </div>

          <div className="mc-gallery mc-gallery--testing">
            <figure className="case-figure">
              <div className="mc-media">
                <LazyImage
                  src="/images/metalcloud/spectro-testing.png"
                  alt="Usability testing of Spectro Pro — operator at the spectrometer machine on the factory floor"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <figcaption>Spectro Pro — testing at the spectrometer machine</figcaption>
            </figure>
            <figure className="case-figure">
              <div className="mc-media">
                <LazyImage
                  src="/images/metalcloud/optimise-testing.png"
                  alt="Usability testing of Optimise — melting supervisors reviewing the ChargeMix interface"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
              </div>
              <figcaption>Optimise — testing with melting supervisors</figcaption>
            </figure>
          </div>

          <span className="mc-eyebrow mc-eyebrow--block">What we fixed based on testing</span>
          <div className="mc-grid-2">
            {TESTING_FIXES.map((f) => (
              <div key={f.module} className="cs-card mc-feature">
                <h4 className="mc-feature__title">{f.module}</h4>
                <p className="mc-card__text">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="case-body mc-after">
            <p>
              After reaching satisfactory usage parameters, both products were launched in beta for market validation.
            </p>
          </div>
        </div>
      </section>

      {/* 9. IMPACT */}
      <section className="case-section impact-section mc-impact fade-up">
        <div className="case-section__inner">
          <h2 className="impact-heading">Growth metrics post-launch.</h2>

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
              <div className="impact-stat__number"><span data-count-to="3" data-suffix="">3</span></div>
              <p className="impact-stat__label">Real testimonials from foundry owners</p>
              <p className="impact-stat__sub">Below this section</p>
            </div>
          </div>

          <div className="mc-gallery mc-gallery--charts">
            <figure className="case-figure mc-chart">
              <span className="mc-chart__label">Spectro Pro — Monthly active users</span>
              <div className="mc-plate">
                <LazyImage
                  src="/images/metalcloud/spectro-growth.png"
                  alt="Spectro Pro monthly active users growth chart — 20 users in 2022 to 140+ in 2025"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <figcaption>Growth since inception, 2022 → 2025</figcaption>
            </figure>
            <figure className="case-figure mc-chart">
              <span className="mc-chart__label">Optimise — New customers per month</span>
              <div className="mc-plate">
                <LazyImage
                  src="/images/metalcloud/optimise-growth.png"
                  alt="Optimise month-on-month customer growth chart — reaching 8+ new customers per month by month 6"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
              </div>
              <figcaption>Month 1–6 post-launch growth</figcaption>
            </figure>
          </div>

          <div className="mc-testimonials">
            {TESTIMONIALS.map((t) => (
              <figure key={t.author} className="cs-card mc-testimonial fade-up-child">
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>{t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHAT I LEARNED */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>The real challenge: designing for industrial users.</h2>

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
              <div className="learning-point__number">01</div>
              <div className="learning-point__content">
                <h3>Go to where the work happens.</h3>
                <p>
                  Watching a supervisor hand-carry a printed spectrometer report across a factory floor taught me more about the problem than any stakeholder interview would have. The insight that drove Shop-floor Display — that mobile phones aren't allowed on many factory floors — only came from being there.
                </p>
              </div>
            </div>

            <div className="learning-point fade-up-child">
              <div className="learning-point__number">02</div>
              <div className="learning-point__content">
                <h3>Minimum Viable Products should be ugly. Validate before you polish.</h3>
                <p>
                  Both Spectro Pro and Optimise launched with minimal UI — functional, fast, and honest about being a beta. Getting to 5 customers with an imperfect product was worth more than delaying for visual refinement.
                </p>
              </div>
            </div>

            <div className="learning-point fade-up-child">
              <div className="learning-point__number">03</div>
              <div className="learning-point__content">
                <h3>Real metrics are earned, not assumed.</h3>
                <p>
                  The 20% and 12% figures were framed as approximate cost-saving opportunities. The 36-to-41 heats-per-day scenario helped define the Spectro Pro opportunity; it should not be confused with a measured post-launch outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEXT PROJECT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <NextProject
            to="/work/nowpurchase-website"
            tag="Website · Growth"
            title="NowPurchase Website Revamp"
            metric=""
            image="/images/nowpurchase-website/nowpurchase_cover.png"
            imageAlt="NowPurchase Website Revamp"
          />
        </div>
      </section>
      <CaseStudyToc />
    </main>
  )
}
