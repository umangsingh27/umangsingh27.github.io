import { useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountAnimation } from '../../hooks/useCountAnimation'
import LazyImage from '../../components/LazyImage'
import CaseStudyGlance from '../../components/CaseStudyGlance'
import CaseStudyToc from '../../components/CaseStudyToc'
import Button from '../../components/Button'
import NextProject from '../../components/NextProject'
import Icon from '../../components/Icon'
import './CaseStudy.css'
import './DesignSystem.css'

const IMG = '/images/design-system/'

function Figure({ src, alt, caption, className = '' }) {
  return (
    <figure className={`case-figure ds-figure ${className}`}>
      <LazyImage src={`${IMG}${src}`} alt={alt} sizes="(max-width: 1200px) 100vw, 1120px" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

const PROJECT_FACTS = [
  { label: 'Domain', value: 'Industrial B2B' },
  { label: 'Team Size', value: '4 Members' },
  { label: "Umang's Role", value: 'Lead UX/UI Designer & Project Head' },
  { label: 'Designer (Co)', value: 'Sayan (UX/UI Designer)' },
  { label: 'Timeline', value: '180 Days (Initiation to Component Launch)' },
]

const TOOLS = [
  { name: 'Figma', desc: 'Ideation, UI Design & Component Library' },
  { name: 'FigJam', desc: 'Brainstorming & Collaboration' },
  { name: 'Clarity', desc: 'Heat-maps & Recordings' },
  { name: 'Amplitude', desc: 'Data Analytics Study' },
  { name: 'Analytics', desc: 'Data Analytics Study' },
  { name: 'Notion', desc: 'Project Management' },
]

const PROCESS_STEPS = [
  'Understanding & Why Now?',
  'Planning Next Steps',
  'Current System Audit',
  'Design Language for Ecosystem Consistency',
  'Usability Testing',
  'Building the System',
  'Implementing on Live Platform',
  'Impact & Maintenance Plan',
]

const REASONS = [
  { title: 'Boosts Productivity', desc: 'Saves time for both developers and designers by eliminating redundant work. Ensures teams avoid solving the same problem again and again when a solution already exists.' },
  { title: 'Accelerates Development', desc: 'Developers can quickly access branding assets and pre-built components that work perfectly and adjust to screen size automatically. Increases delivery speed.' },
  { title: 'Focus on Solving Real Problems', desc: 'By offloading repetitive styling and design tasks to a design system, teams can dedicate more time to solving complex, meaningful problems that drive product innovation.' },
  { title: 'Enhances Consistency', desc: "Using standard design and usability patterns leverages users' prior experience. Inconsistencies force users to relearn, increasing their effort and time." },
  { title: 'System-wide Updates in a Click', desc: 'Design updates made at the component level get reflected everywhere — across all modules, both in design files and developed screens — with a single click.' },
  { title: 'Light & Dark Themes', desc: 'Light Mode and Dark Mode can be easily implemented at the component level and work throughout the system without any extra effort.' },
]

const AUDIT = [
  { title: 'Landing Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-landing.png', alt: 'Audit of inconsistent landing pages' },
  { title: 'No Data Found Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-empty-states.png', alt: 'Audit of inconsistent empty state pages' },
  { title: 'Dashboard Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-dashboards.png', alt: 'Audit of inconsistent dashboard pages' },
  { title: 'Details Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-details.png', alt: 'Audit of inconsistent details pages' },
  { title: 'New Item Creation Pages', severity: 'Inconsistent', image: 'ds-audit-creation.png', alt: 'Audit of inconsistent creation/form pages' },
  { title: 'Icons', severity: 'Majorly Inconsistent', image: 'ds-audit-icons.png', alt: 'Audit of inconsistent icon usage' },
]

const LANGUAGE = [
  { title: 'Listing Pages', images: [['ds-lang-listing.png', 'Design language for listing pages']] },
  { title: 'Details & Add New/Edit Pages', images: [['ds-lang-details.png', 'Design language for details and form pages']] },
  { title: 'PDFs & Reports', images: [['ds-lang-reports.png', 'Design language for PDF and report exports']] },
  {
    title: 'Other Elements (states, empty states, notifications)',
    images: [1, 2, 3, 4].map(n => [`ds-lang-elements-${n}.png`, `Design language elements part ${n}`]),
  },
  { title: 'Switch Device — Responsive Layouts', images: [['ds-lang-responsive.png', 'Design language for responsive layouts across devices']] },
]

const LAYERS = [
  {
    title: 'Sub-atoms — Brand, Alias, Mapped, Responsive, Styles',
    wide: true,
    items: [
      { name: 'Colors', desc: '7 scales (Grey, Blue, Red, Green, Yellow, Purple, Teal), each with 11 steps (100–1100)', image: 'ds-system-colors.png', alt: 'Color scales system with 7 palettes and 11 steps' },
      { name: 'Typography', image: 'ds-system-typography.png', alt: 'Typography system with font scales and styles' },
      { name: 'Scale, Border, Spacing', image: 'ds-system-spacing.png', alt: 'Spacing and border tokens system' },
      { name: 'Icons', image: 'ds-system-icons.png', alt: 'Icon library with complete set of system icons' },
    ],
  },
  {
    title: 'Atoms',
    items: [
      { name: 'Tooltip', image: 'ds-atoms-tooltip.png', alt: 'Tooltip component variations' },
      { name: 'Buttons', image: 'ds-atoms-buttons.png', alt: 'Button component styles' },
      { name: 'CheckBoxes', image: 'ds-atoms-checkboxes.png', alt: 'Checkbox component states' },
      { name: 'Toggles', image: 'ds-atoms-toggles.png', alt: 'Toggle component variations' },
      { name: 'Input + Label', image: 'ds-atoms-input-label.png', alt: 'Input field with label component' },
      { name: 'Left Navigation Items', image: 'ds-atoms-nav-items.png', alt: 'Left navigation item components' },
      { name: 'Breadcrumb & Menu Items', image: 'ds-atoms-breadcrumb-menu.png', alt: 'Breadcrumb navigation and menu items' },
      { name: 'Menu', image: 'ds-atoms-menu.png', alt: 'Menu component variations' },
    ],
  },
  {
    title: 'Molecules',
    items: [
      { name: 'Text Boxes', image: 'ds-molecules-textboxes.png', alt: 'Text box molecule component' },
      { name: 'Dropdowns', image: 'ds-molecules-dropdowns.png', alt: 'Dropdown molecule component' },
      { name: 'Left Panel & Breadcrumbs', image: 'ds-molecules-nav.png', alt: 'Left panel and breadcrumb molecules' },
      { name: 'Search', image: 'ds-molecules-search.png', alt: 'Search molecule component' },
    ],
  },
  {
    title: 'Organisms',
    single: true,
    items: [{ name: 'Profile Menu', image: 'ds-organisms-profile.png', alt: 'Profile menu organism component' }],
  },
  {
    title: 'Layouts',
    wide: true,
    items: [
      { name: 'Left Panel', image: 'ds-layouts-left-panel.png', alt: 'Left panel layout component' },
      { name: 'Top Bar', image: 'ds-layouts-topbar.png', alt: 'Top bar layout component' },
    ],
  },
  {
    title: 'Pages',
    single: true,
    items: [{ name: 'Listing Page', image: 'ds-pages-listing.png', alt: 'Listing page template' }],
  },
]

const OUTCOMES = [
  { title: 'Speed', desc: 'Design-to-dev handoff that previously required extensive back-and-forth — clarifying colours, spacing, states — now references a single source of truth. Target: 30% reduction in handoff time within 6 months of full adoption.' },
  { title: 'Consistency', desc: 'Landing pages, dashboards, detail views, empty states, and creation flows — all previously built with diverging patterns — now follow a unified language. Target: 50% fewer inconsistency-related bugs and rework cycles within 6 months.' },
  { title: 'Focus', desc: 'By removing repetitive UI decision-making from both designers and developers, the team can now spend meaningful time on product thinking and user problems — not redrawing buttons.' },
]

export default function DesignSystem() {

  useEffect(() => {
    document.title = 'Design System — NowPurchase & MetalCloud | Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.3)

  return (
    <main className="case-study design-system-case-study">
      {/* 1. HERO */}
      <section className="case-hero fade-up">
        <div className="case-hero__inner">
          <span className="case-hero__tag">DESIGN SYSTEMS · B2B SAAS</span>
          <h1>Design System</h1>
          <p className="case-hero__subtitle">
            A unified atomic design system spanning NowPurchase and MetalCloud — standardising component patterns across desktop, mobile, TV, kiosk, and print to reduce inconsistencies and accelerate design-to-dev handoff.
          </p>

          <CaseStudyGlance stats={[{ value: '2', label: 'Products covered by the shared system' }, { value: '30%', label: 'Handoff improvement target for month 6' }, { value: '50%', label: 'Inconsistency reduction target for month 6' }]} />

          <div className="case-hero__visual">
            <LazyImage
              src={`${IMG}ds-thumbnail.png`}
              alt="NowPurchase and MetalCloud Design System cover"
              priority={true}
            />
          </div>

          <div className="case-metadata-grid">
            <div className="metadata-item fade-up-child">
              <h3>My Role</h3>
              <p>Lead UX/UI Designer & Project Head</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Team</h3>
              <p>4 members (design: Umang + Sayan)</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Timeline</h3>
              <p>180 Days (Initiation to Component Launch)</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Status</h3>
              <p>In Progress · Implementation Rolling Out</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Same problem, solved from scratch, every time.</h2>
          <div className="case-body">
            <p>
              As the product and design teams kept growing, inconsistencies crept in across different platforms (desktop, mobile, TV, Kiosk, print) and across different modules of the same product. Each team was solving the same UI problems from scratch, every time. Time to design and develop new features was also very high.
            </p>
          </div>

          <Figure
            src="ds-foundry-context.png"
            alt="Melting process in a foundry — the industrial world we were designing for"
            caption="Melting process in a foundry — the industrial world we were designing for"
          />

          <dl className="ds-facts">
            {PROJECT_FACTS.map(fact => (
              <div key={fact.label} className="ds-facts__item">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="ds-block">
            <h3>Tools Used</h3>
            <ul className="ds-tools">
              {TOOLS.map(tool => (
                <li key={tool.name} className="ds-tools__item">
                  <span className="ds-tools__name">{tool.name}</span>
                  <span className="ds-tools__desc">{tool.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. THE DESIGN PROCESS */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>An 8-step process, not a redesign sprint.</h2>
          <div className="case-body">
            <p>8 steps to building the system:</p>
          </div>

          <Figure src="ds-process-steps.png" alt="8-step design process for the design system" />

          <ol className="ds-steps">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className="ds-steps__item fade-up-child">
                <span className="ds-steps__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="ds-steps__label">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. UNDERSTANDING & WHY NOW */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Six reasons the team said yes.</h2>
          <div className="case-body">
            <p>To make the team understand the importance of a Design System, we made a presentation and showcased it to the team.</p>
          </div>

          <div className="ds-block">
            <h3>Why Is It Needed?</h3>
            <Figure src="ds-why-illustrations.png" alt="Six reasons why a design system was needed" />

            <div className="ds-reasons">
              {REASONS.map((reason, i) => (
                <div key={reason.title} className="cs-card ds-reason fade-up-child">
                  <span className="ds-card-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="ds-card-title">{reason.title}</h4>
                  <p className="ds-card-text">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ds-block">
            <h3>Cost of Not Having a Design System</h3>
            <p className="ds-note">Example is for a single Landing Page with 5 design variants. Figures are illustrative only.</p>

            <Figure src="ds-cost-comparison.png" alt="Cost comparison table: with vs without a design system" />

            <div className="ds-savings">
              <p className="ds-savings__label">Cost that could have been saved (a – b)</p>
              <p className="ds-savings__amount">Rs. 2,05,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANNING NEXT STEPS */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Atomic Design, chosen over the alternatives.</h2>
          <div className="case-body">
            <p>Once we got a go-ahead from the team, we explored various methodologies for creating a design system, along with the pros and cons of each. Once we reached a conclusion, we created a plan to move forward.</p>
          </div>

          <div className="ds-block">
            <h3>Why Atomic Design System?</h3>
            <Figure src="ds-atomic-design.png" alt="Atomic design methodology diagram" />
          </div>

          <div className="ds-block">
            <h3>Project Plan</h3>
            <Figure src="ds-project-plan.png" alt="Project plan with stages and timeline" />
          </div>
        </div>
      </section>

      {/* 6. CURRENT SYSTEM AUDIT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>An audit of six page types, mostly inconsistent.</h2>
          <div className="case-body">
            <p>Based on the plan, the design team started understanding current inconsistencies and design patterns across the product.</p>
          </div>

          <div className="ds-audit">
            {AUDIT.map(finding => (
              <article key={finding.title} className="cs-card ds-audit__item fade-up-child">
                <header className="ds-audit__head">
                  <h4 className="ds-card-title">{finding.title}</h4>
                  <span className={`ds-severity${finding.severity.startsWith('Majorly') ? ' ds-severity--major' : ''}`}>
                    {finding.severity}
                  </span>
                </header>
                <Figure src={finding.image} alt={finding.alt} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DESIGN LANGUAGE */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>One template per page type, reusable everywhere.</h2>
          <div className="case-body">
            <p>After auditing the current designs, we created design language templates for all major page types — reusable across all modules and responsive across devices.</p>
          </div>

          <div className="ds-language">
            {LANGUAGE.map(section => (
              <div key={section.title} className="cs-card ds-language__item fade-up-child">
                <h4 className="ds-card-title">{section.title}</h4>
                <div className={section.images.length > 1 ? 'ds-language__grid' : undefined}>
                  {section.images.map(([src, alt]) => (
                    <Figure key={src} src={src} alt={alt} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. USABILITY TESTING */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Tested before a single component was built.</h2>
          <div className="case-body">
            <p>Once the design language was ready, we reviewed it with stakeholders and tested it with users before investing further effort into building the system. We revised the design language based on those reviews and tests.</p>
          </div>

          <Figure src="ds-usability-testing.png" alt="MetalCloud supplier matrix interface showing supplier ratings and order summaries" />
        </div>
      </section>

      {/* 9. BUILDING THE SYSTEM */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Sub-atoms to pages, built in that order.</h2>
          <div className="case-body">
            <p>After conducting usability tests and updating the design language, we went forward to create the required Sub-atoms, Atoms, Molecules, Organisms, Layouts, Templates & Pages.</p>
          </div>

          <div className="ds-layers">
            {LAYERS.map(layer => (
              <div key={layer.title} className="ds-layer fade-up-child">
                <h3 className="ds-layer__title">{layer.title}</h3>
                <div className={`ds-layer__grid${layer.wide ? ' ds-layer__grid--wide' : ''}${layer.single ? ' ds-layer__grid--single' : ''}`}>
                  {layer.items.map(item => (
                    <div key={item.name} className="ds-tile">
                      <h4 className="ds-tile__name">{item.name}</h4>
                      {item.desc && <p className="ds-tile__desc">{item.desc}</p>}
                      <Figure src={item.image} alt={item.alt} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. IMPLEMENTING ON LIVE PLATFORM */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Rolling out across both products, over 3 months.</h2>
          <div className="case-body">
            <p>The components have been created and are now being rolled out across both products over the next 3 months.</p>
          </div>
        </div>
      </section>

      {/* 11. IMPACT & RESULTS */}
      <section className="impact-section case-section fade-up">
        <div className="case-section__inner">
          <h2 className="impact-heading">What shipped and what is still a target</h2>

          <div className="impact-stats ds-impact-stats">
            {[
              { number: '30%', label: 'Faster design-to-dev handoff', sub: 'Target: Month 6' },
              { number: '50%', label: 'Fewer UI inconsistencies', sub: 'Target: Month 6' },
              { number: '2', label: 'Products unified under one system', sub: 'NowPurchase & MetalCloud' },
              { number: '180', label: 'Days from audit to component launch', sub: 'On schedule' },
            ].map(stat => (
              <div key={stat.label} className="impact-stat fade-up-child">
                <div className="impact-stat__number">{stat.number}</div>
                <p className="impact-stat__label">{stat.label}</p>
                <p className="impact-stat__sub">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="ds-shipped">
            <h3>What Shipped</h3>
            <p>
              Before this system existed, NowPurchase and MetalCloud had no shared design language — two separate product teams were independently solving the same layout, component, and pattern problems. Every new screen meant starting from scratch.
            </p>
            <p>
              We built a complete Atomic Design System from the ground up: colour tokens across 7 palettes with 11-step scales, a full typography system, spacing and border tokens, a unified icon library, and a component library covering Sub-atoms through to full Pages.
            </p>
            <p>
              The system is now live and actively being adopted by both the Design and Development teams across MetalCloud and NowPurchase.
            </p>
          </div>

          <div className="ds-outcomes">
            {OUTCOMES.map(outcome => (
              <div key={outcome.title} className="cs-card ds-outcome fade-up-child">
                <h4 className="ds-card-title">{outcome.title}</h4>
                <p className="ds-card-text">{outcome.desc}</p>
              </div>
            ))}
          </div>

          <blockquote className="ds-reflection">
            <p>The hardest part wasn't building the components — it was building the case for why the system needed to exist before anyone would invest time in it. The ROI presentation used an illustrative estimate of Rs. 2,05,000 in potential savings for one landing-page example. Learning to speak in business terms helped frame the investment.</p>
            <footer>Umang Singh, Lead UX/UI Designer</footer>
          </blockquote>

          <div className="ds-status">
            <div>
              <p className="ds-status__title">In Progress · Implementation rolling out over 3 months</p>
              <p className="ds-status__note">Long-term governance led by the design team lead</p>
            </div>
            <Button
              href="https://www.figma.com/design/JAwKifrBtSKtk2z4DexTa8/Other?node-id=49-5020"
              target="_blank"
              variant="primary"
            >
              View Design System in Figma <Icon name="arrowRight" size={17} />
            </Button>
          </div>
        </div>
      </section>

      {/* 12. NEXT PROJECT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <NextProject
            to="/work/metalcloud-platform"
            tag="B2B SaaS · Enterprise"
            title="MetalCloud Platform"
            metric="13 → 120 enterprise clients"
            image="/images/metalcloud/spectro-hero.png"
            imageAlt="MetalCloud Platform"
          />
        </div>
      </section>
      <CaseStudyToc />
    </main>
  )
}
