import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountAnimation } from '../../hooks/useCountAnimation'
import LazyImage from '../../components/LazyImage'
import './DesignSystem.css'

export default function DesignSystem() {

  useEffect(() => {
    document.title = 'Design System — NowPurchase & MetalCloud | Umang Singh'
  }, [])

  useScrollReveal()
  useCountAnimation(0.3)

  return (
    <main className="design-system-case-study">
      {/* 1. HERO SECTION */}
      <section className="case-hero fade-up">
        <div className="case-hero__inner">
          <span className="case-hero__tag">DESIGN SYSTEMS · B2B SAAS</span>
          <h1>Design System</h1>
          <p className="case-hero__subtitle">
            A unified atomic design system spanning NowPurchase and MetalCloud — standardising component patterns across desktop, mobile, TV, kiosk, and print to reduce inconsistencies and accelerate design-to-dev handoff.
          </p>

          <div className="case-metadata-grid">
            <div className="metadata-item fade-up-child">
              <h3>My Role</h3>
              <p>Lead UX/UI Designer & Project Head</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Team</h3>
              <p>4 Members (Umang + Sayan)</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Timeline</h3>
              <p>180 Days (Initiation to Launch)</p>
            </div>
            <div className="metadata-item fade-up-child">
              <h3>Status</h3>
              <p>In Progress · Implementation Rolling Out</p>
            </div>
          </div>

          <div className="case-hero__visual">
            <img
              src="/images/design-system/ds-thumbnail.png"
              alt="NowPurchase and MetalCloud Design System cover"
              width="100%"
              style={{borderRadius: '12px', display: 'block'}}
            />
          </div>
        </div>
      </section>

      {/* 2. KEY METRICS ROW */}
      <section className="case-section metrics-hero-section fade-up" data-theme="dark">
        <div className="case-section__inner">
          <div className="hero-metrics-grid">
            <div className="hero-metric-chip fade-up-child">
              <div className="hero-metric__number">30%</div>
              <div className="hero-metric__label">faster design-to-dev handoff</div>
              <div className="hero-metric__target">Target: Month 6</div>
            </div>
            <div className="hero-metric-chip fade-up-child">
              <div className="hero-metric__number">50%</div>
              <div className="hero-metric__label">fewer UI inconsistencies</div>
              <div className="hero-metric__target">Target: Month 6</div>
            </div>
            <div className="hero-metric-chip fade-up-child">
              <div className="hero-metric__number">180 Days</div>
              <div className="hero-metric__label">audit to component library launch</div>
              <div className="hero-metric__target">Completed on schedule</div>
            </div>
            <div className="hero-metric-chip fade-up-child">
              <div className="hero-metric__number">2</div>
              <div className="hero-metric__label">products unified under one system</div>
              <div className="hero-metric__target">NowPurchase + MetalCloud</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>The Problem</h2>
          <div className="case-body">
            <p>
              As the product and design teams kept growing, inconsistencies crept in across different platforms (desktop, mobile, TV, Kiosk, print) and across different modules of the same product. Each team was solving the same UI problems from scratch, every time. Time to design and develop new features was also very high.
            </p>

            <img
              src="/images/design-system/ds-foundry-context.png"
              alt="Melting process in a foundry — the industrial world we were designing for"
              width="100%"
              style={{borderRadius: '12px', marginTop: '24px', marginBottom: '8px', display: 'block'}}
            />
            <p style={{fontSize: '13px', color: '#888', marginTop: '8px', textAlign: 'center', marginBottom: '24px'}}>
              Melting process in a foundry — the industrial world we were designing for
            </p>

            <div className="problem-metadata-section">
              <div className="metadata-row">
                <div className="metadata-col">
                  <h4>Domain</h4>
                  <p>Industrial B2B</p>
                </div>
                <div className="metadata-divider"></div>
                <div className="metadata-col">
                  <h4>Team Size</h4>
                  <p>4 Members</p>
                </div>
                <div className="metadata-divider"></div>
                <div className="metadata-col">
                  <h4>Umang's Role</h4>
                  <p>Lead UX/UI Designer & Project Head</p>
                </div>
                <div className="metadata-divider"></div>
                <div className="metadata-col">
                  <h4>Designer (Co)</h4>
                  <p>Sayan (UX/UI Designer)</p>
                </div>
              </div>
              <div className="metadata-divider-full"></div>
              <div className="metadata-row">
                <div className="metadata-col">
                  <h4>Timeline</h4>
                  <p>180 Days (Initiation to Launch)</p>
                </div>
              </div>
            </div>

            <div className="tools-section">
              <h4>Tools Used</h4>
              <div className="tools-grid">
                <div className="tool-card">
                  <span className="tool-icon">🎨</span>
                  <span className="tool-name">Figma</span>
                  <span className="tool-desc">Ideation, UI Design & Component Library</span>
                </div>
                <div className="tool-card">
                  <span className="tool-icon">✍️</span>
                  <span className="tool-name">FigJam</span>
                  <span className="tool-desc">Brainstorming & Collaboration</span>
                </div>
                <div className="tool-card">
                  <span className="tool-icon">📊</span>
                  <span className="tool-name">Clarity</span>
                  <span className="tool-desc">Heat-maps & Recordings</span>
                </div>
                <div className="tool-card">
                  <span className="tool-icon">📈</span>
                  <span className="tool-name">Amplitude</span>
                  <span className="tool-desc">Data Analytics Study</span>
                </div>
                <div className="tool-card">
                  <span className="tool-icon">📉</span>
                  <span className="tool-name">Analytics</span>
                  <span className="tool-desc">Data Analytics Study</span>
                </div>
                <div className="tool-card">
                  <span className="tool-icon">📋</span>
                  <span className="tool-name">Notion</span>
                  <span className="tool-desc">Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE DESIGN PROCESS TIMELINE */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>The Design Process</h2>
          <p className="process-intro">8 steps to building the system:</p>

          <img
            src="/images/design-system/ds-process-steps.png"
            alt="8-step design process for the design system"
            width="100%"
            style={{borderRadius: '12px', marginBottom: '24px', display: 'block'}}
          />

          <div className="process-staircase">
            {[
              'Understanding & Why Now?',
              'Planning Next Steps',
              'Current System Audit',
              'Design Language for Ecosystem Consistency',
              'Usability Testing',
              'Building the System',
              'Implementing on Live Platform',
              'Impact & Maintenance Plan'
            ].map((step, i) => (
              <div key={i} className="process-step-card fade-up-child">
                <div className="process-step-number">{i + 1}</div>
                <p className="process-step-label">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UNDERSTANDING & WHY NOW */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Understanding & Why Now?</h2>
          <div className="case-body">
            <p>To make the team understand the importance of a Design System, we made a presentation and showcased it to the team.</p>
          </div>

          <div className="section-subsection">
            <h3>Why Is It Needed?</h3>

            <img
              src="/images/design-system/ds-why-illustrations.png"
              alt="Six reasons why a design system was needed"
              width="100%"
              style={{borderRadius: '12px', marginBottom: '32px', display: 'block'}}
            />

            <div className="reasons-grid">
              {[
                {
                  title: 'Boosts Productivity',
                  desc: 'Saves time for both developers and designers by eliminating redundant work. Ensures teams avoid solving the same problem again and again when a solution already exists.'
                },
                {
                  title: 'Accelerates Development',
                  desc: 'Developers can quickly access branding assets and pre-built components that work perfectly and adjust to screen size automatically. Increases delivery speed.'
                },
                {
                  title: 'Focus on Solving Real Problems',
                  desc: 'By offloading repetitive styling and design tasks to a design system, teams can dedicate more time to solving complex, meaningful problems that drive product innovation.'
                },
                {
                  title: 'Enhances Consistency',
                  desc: "Using standard design and usability patterns leverages users' prior experience. Inconsistencies force users to relearn, increasing their effort and time."
                },
                {
                  title: 'System-wide Updates in a Click',
                  desc: 'Design updates made at the component level get reflected everywhere — across all modules, both in design files and developed screens — with a single click.'
                },
                {
                  title: 'Light & Dark Themes',
                  desc: 'Light Mode and Dark Mode can be easily implemented at the component level and work throughout the system without any extra effort.'
                }
              ].map((reason, i) => (
                <div key={i} className="reason-card fade-up-child">
                  <h4>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-subsection">
            <h3>Cost of Not Having a Design System</h3>
            <p className="table-note">Example is for a single Landing Page with 5 design variants. Figures are illustrative only.</p>

            <img
              src="/images/design-system/ds-cost-comparison.png"
              alt="Cost comparison table: with vs without a design system"
              width="100%"
              style={{borderRadius: '12px', marginBottom: '24px', display: 'block'}}
            />

            <div className="cost-comparison" style={{display: 'none'}}>
              <div className="cost-column">
                <h4>WITHOUT DESIGN SYSTEM</h4>
                <div className="cost-item">
                  <span className="cost-label">Design team – Design Creation</span>
                  <span className="cost-value">25,000 × 5 = Rs. 1,25,000</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Development Team – Design Creation</span>
                  <span className="cost-value">35,000 × 5 = Rs. 1,75,000</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Onboarding</span>
                  <span className="cost-value">500 × 50 × 5 = Rs. 1,25,000</span>
                </div>
                <div className="cost-item cost-item--total">
                  <span className="cost-label">Total Cost (a)</span>
                  <span className="cost-value">Rs. 4,25,000</span>
                </div>
              </div>

              <div className="cost-column">
                <h4>WITH DESIGN SYSTEM</h4>
                <div className="cost-item">
                  <span className="cost-label">Design team – Component Creation</span>
                  <span className="cost-value">Rs. 30,000</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Development Team – Component Creation</span>
                  <span className="cost-value">Rs. 40,000</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Design team – Design Creation</span>
                  <span className="cost-value">10,000 × 5 = Rs. 50,000</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Development Team – Design Creation</span>
                  <span className="cost-value">10,000 × 5 = Rs. 50,000</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Onboarding</span>
                  <span className="cost-value">500 × 50 × 2 = Rs. 50,000</span>
                </div>
                <div className="cost-item cost-item--total">
                  <span className="cost-label">Total Cost (b)</span>
                  <span className="cost-value">Rs. 2,20,000</span>
                </div>
              </div>
            </div>

            <div className="cost-savings">
              <div className="savings-highlight">
                <p className="savings-label">Cost that could have been saved (a – b)</p>
                <p className="savings-amount">Rs. 2,05,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLANNING NEXT STEPS */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Planning Next Steps</h2>
          <div className="case-body">
            <p>Once we got a go-ahead from the team, we explored various methodologies for creating a design system, along with the pros and cons of each. Once we reached a conclusion, we created a plan to move forward.</p>
          </div>

          <div className="section-subsection">
            <h3>Why Atomic Design System?</h3>
            <img
              src="/images/design-system/ds-atomic-design.png"
              alt="Atomic design methodology diagram"
              width="100%"
              style={{borderRadius: '12px', marginBottom: '24px', display: 'block'}}
            />
          </div>

          <div className="section-subsection">
            <h3>Project Plan</h3>
            <img
              src="/images/design-system/ds-project-plan.png"
              alt="Project plan with stages and timeline"
              width="100%"
              style={{borderRadius: '12px', marginBottom: '24px', display: 'block'}}
            />
            <div className="timeline-table" style={{display: 'none'}}>
              <div className="timeline-row timeline-row--header">
                <div className="timeline-col timeline-col--stage">Stage</div>
                <div className="timeline-col timeline-col--subtasks">Sub-tasks</div>
                <div className="timeline-col timeline-col--timeline">Timeline</div>
              </div>

              <div className="timeline-row">
                <div className="timeline-col timeline-col--stage">Audit & Testing</div>
                <div className="timeline-col timeline-col--subtasks">Current System Audit</div>
                <div className="timeline-col timeline-col--timeline">2 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col timeline-col--stage"></div>
                <div className="timeline-col timeline-col--subtasks">Consistent Design Language Creation</div>
                <div className="timeline-col timeline-col--timeline">2 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col timeline-col--stage"></div>
                <div className="timeline-col timeline-col--subtasks">Usability Testing with actual users</div>
                <div className="timeline-col timeline-col--timeline">2 Weeks</div>
              </div>

              <div className="timeline-row timeline-row--major">
                <div className="timeline-col timeline-col--stage">Design Team</div>
                <div className="timeline-col timeline-col--subtasks">Tokens, Variables & Styles</div>
                <div className="timeline-col timeline-col--timeline">3 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col"></div>
                <div className="timeline-col timeline-col--subtasks">Atoms & Test</div>
                <div className="timeline-col timeline-col--timeline">4 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col"></div>
                <div className="timeline-col timeline-col--subtasks">Molecules & Test</div>
                <div className="timeline-col timeline-col--timeline">3 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col"></div>
                <div className="timeline-col timeline-col--subtasks">Organisms & Test</div>
                <div className="timeline-col timeline-col--timeline">2 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col"></div>
                <div className="timeline-col timeline-col--subtasks">Templates & Test</div>
                <div className="timeline-col timeline-col--timeline">2 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col"></div>
                <div className="timeline-col timeline-col--subtasks">Pages & Test</div>
                <div className="timeline-col timeline-col--timeline">1 Week</div>
              </div>

              <div className="timeline-row timeline-row--parallel">
                <div className="timeline-col timeline-col--stage">Dev Team (Parallel)</div>
                <div className="timeline-col timeline-col--subtasks">Tokens, Variables & Styles</div>
                <div className="timeline-col timeline-col--timeline">3 Weeks</div>
              </div>
              <div className="timeline-row">
                <div className="timeline-col"></div>
                <div className="timeline-col timeline-col--subtasks">Atoms through Pages (as Design)</div>
                <div className="timeline-col timeline-col--timeline">12 Weeks</div>
              </div>

              <div className="timeline-row timeline-row--final">
                <div className="timeline-col timeline-col--stage">Maintenance</div>
                <div className="timeline-col timeline-col--subtasks">Continuous governance & updates</div>
                <div className="timeline-col timeline-col--timeline">Ongoing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CURRENT SYSTEM AUDIT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Current System Audit</h2>
          <div className="case-body">
            <p>Based on the plan, the design team started understanding current inconsistencies and design patterns across the product.</p>
          </div>

          <div className="audit-findings">
            {[
              { title: 'Landing Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-landing.png', alt: 'Audit of inconsistent landing pages' },
              { title: 'No Data Found Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-empty-states.png', alt: 'Audit of inconsistent empty state pages' },
              { title: 'Dashboard Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-dashboards.png', alt: 'Audit of inconsistent dashboard pages' },
              { title: 'Details Pages', severity: 'Majorly Inconsistent', image: 'ds-audit-details.png', alt: 'Audit of inconsistent details pages' },
              { title: 'New Item Creation Pages', severity: 'Inconsistent', image: 'ds-audit-creation.png', alt: 'Audit of inconsistent creation/form pages' },
              { title: 'Icons', severity: 'Majorly Inconsistent', image: 'ds-audit-icons.png', alt: 'Audit of inconsistent icon usage' }
            ].map((finding, i) => (
              <div key={i} className="audit-finding fade-up-child">
                <div className="finding-header">
                  <h4>{finding.title}</h4>
                  <span className="finding-severity">{finding.severity}</span>
                </div>
                <img
                  src={`/images/design-system/${finding.image}`}
                  alt={finding.alt}
                  width="100%"
                  style={{borderRadius: '12px', marginTop: '12px', display: 'block'}}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DESIGN LANGUAGE FOR ECOSYSTEM CONSISTENCY */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Design Language for Ecosystem Consistency</h2>
          <div className="case-body">
            <p>After auditing the current designs, we created design language templates for all major page types — reusable across all modules and responsive across devices.</p>
          </div>

          <div className="design-language-sections">
            <div className="language-section fade-up-child">
              <h4>Listing Pages</h4>
              <img
                src="/images/design-system/ds-lang-listing.png"
                alt="Design language for listing pages"
                width="100%"
                style={{borderRadius: '12px', display: 'block'}}
              />
            </div>

            <div className="language-section fade-up-child">
              <h4>Details & Add New/Edit Pages</h4>
              <img
                src="/images/design-system/ds-lang-details.png"
                alt="Design language for details and form pages"
                width="100%"
                style={{borderRadius: '12px', display: 'block'}}
              />
            </div>

            <div className="language-section fade-up-child">
              <h4>PDFs & Reports</h4>
              <img
                src="/images/design-system/ds-lang-reports.png"
                alt="Design language for PDF and report exports"
                width="100%"
                style={{borderRadius: '12px', display: 'block'}}
              />
            </div>

            <div className="language-section fade-up-child">
              <h4>Other Elements (states, empty states, notifications)</h4>
              {['ds-lang-elements-1.png', 'ds-lang-elements-2.png', 'ds-lang-elements-3.png', 'ds-lang-elements-4.png'].map((image, i) => (
                <img
                  key={i}
                  src={`/images/design-system/${image}`}
                  alt={`Design language elements part ${i + 1}`}
                  width="100%"
                  style={{borderRadius: '12px', display: 'block', marginTop: i > 0 ? '12px' : '0'}}
                />
              ))}
            </div>

            <div className="language-section fade-up-child">
              <h4>Switch Device — Responsive Layouts</h4>
              <img
                src="/images/design-system/ds-lang-responsive.png"
                alt="Design language for responsive layouts across devices"
                width="100%"
                style={{borderRadius: '12px', display: 'block'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. USABILITY TESTING */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Usability Testing</h2>
          <div className="case-body">
            <p>Once the design language was ready, we tested its usability before investing further effort into building the actual system. Based on insights from testing, we revised the design language.</p>
          </div>

          <img
            src="/images/design-system/ds-usability-testing.png"
            alt="Usability testing sessions and findings"
            width="100%"
            style={{borderRadius: '12px', marginTop: '32px', display: 'block'}}
          />
        </div>
      </section>

      {/* 10. BUILDING THE SYSTEM */}
      <section className="case-section case-section--bg fade-up">
        <div className="case-section__inner">
          <h2>Building the System</h2>
          <div className="case-body">
            <p>After conducting usability tests and updating the design language, we went forward to create the required Sub-atoms, Atoms, Molecules, Organisms, Layouts, Templates & Pages.</p>
          </div>

          <div className="system-components">
            <div className="component-subsection fade-up-child">
              <h3>Sub-atoms — Brand, Alias, Mapped, Responsive, Styles</h3>
              <div className="component-grid">
                <div className="component-item">
                  <h5>Colors</h5>
                  <p>7 scales (Grey, Blue, Red, Green, Yellow, Purple, Teal), each with 11 steps (100–1100)</p>
                  <img
                    src="/images/design-system/ds-system-colors.png"
                    alt="Color scales system with 7 palettes and 11 steps"
                    width="100%"
                    style={{borderRadius: '12px', marginTop: '12px', display: 'block'}}
                  />
                </div>
                <div className="component-item">
                  <h5>Typography</h5>
                  <img
                    src="/images/design-system/ds-system-typography.png"
                    alt="Typography system with font scales and styles"
                    width="100%"
                    style={{borderRadius: '12px', display: 'block'}}
                  />
                </div>
                <div className="component-item">
                  <h5>Scale, Border, Spacing</h5>
                  <img
                    src="/images/design-system/ds-system-spacing.png"
                    alt="Spacing and border tokens system"
                    width="100%"
                    style={{borderRadius: '12px', display: 'block'}}
                  />
                </div>
                <div className="component-item">
                  <h5>Icons</h5>
                  <img
                    src="/images/design-system/ds-system-icons.png"
                    alt="Icon library with complete set of system icons"
                    width="100%"
                    style={{borderRadius: '12px', display: 'block'}}
                  />
                </div>
              </div>
            </div>

            <div className="component-subsection fade-up-child">
              <h3>Atoms</h3>
              <div className="component-grid">
                {[
                  {name: 'Tooltip', image: 'ds-atoms-tooltip.png', alt: 'Tooltip component variations'},
                  {name: 'Buttons', image: 'ds-atoms-buttons.png', alt: 'Button component styles'},
                  {name: 'CheckBoxes', image: 'ds-atoms-checkboxes.png', alt: 'Checkbox component states'},
                  {name: 'Toggles', image: 'ds-atoms-toggles.png', alt: 'Toggle component variations'},
                  {name: 'Input + Label', image: 'ds-atoms-input-label.png', alt: 'Input field with label component'},
                  {name: 'Left Navigation Items', image: 'ds-atoms-nav-items.png', alt: 'Left navigation item components'},
                  {name: 'Breadcrumb & Menu Items', image: 'ds-atoms-breadcrumb.png', alt: 'Breadcrumb navigation and menu items'},
                  {name: 'Menu', image: 'ds-atoms-menu.png', alt: 'Menu component variations'}
                ].map((atom, i) => (
                  <div key={i} className="component-item">
                    <h5>{atom.name}</h5>
                    <img
                      src={`/images/design-system/${atom.image}`}
                      alt={atom.alt}
                      width="100%"
                      style={{borderRadius: '12px', display: 'block'}}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="component-subsection fade-up-child">
              <h3>Molecules</h3>
              <div className="component-grid">
                {[
                  {name: 'Text Boxes', image: 'ds-molecules-textboxes.png', alt: 'Text box molecule component'},
                  {name: 'Dropdowns', image: 'ds-molecules-dropdowns.png', alt: 'Dropdown molecule component'},
                  {name: 'Left Panel & Breadcrumbs', image: 'ds-molecules-leftpanel.png', alt: 'Left panel and breadcrumb molecules'},
                  {name: 'Search', image: 'ds-molecules-search.png', alt: 'Search molecule component'}
                ].map((mol, i) => (
                  <div key={i} className="component-item">
                    <h5>{mol.name}</h5>
                    <img
                      src={`/images/design-system/${mol.image}`}
                      alt={mol.alt}
                      width="100%"
                      style={{borderRadius: '12px', display: 'block'}}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="component-subsection fade-up-child">
              <h3>Organisms</h3>
              <div className="component-item">
                <h5>Profile Menu</h5>
                <img
                  src="/images/design-system/ds-organisms-profile.png"
                  alt="Profile menu organism component"
                  width="100%"
                  style={{borderRadius: '12px', display: 'block'}}
                />
              </div>
            </div>

            <div className="component-subsection fade-up-child">
              <h3>Layouts</h3>
              <div className="component-grid">
                {[
                  {name: 'Left Panel', image: 'ds-layouts-left-panel.png', alt: 'Left panel layout component'},
                  {name: 'Top Bar', image: 'ds-layouts-topbar.png', alt: 'Top bar layout component'}
                ].map((layout, i) => (
                  <div key={i} className="component-item">
                    <h5>{layout.name}</h5>
                    <img
                      src={`/images/design-system/${layout.image}`}
                      alt={layout.alt}
                      width="100%"
                      style={{borderRadius: '12px', display: 'block'}}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="component-subsection fade-up-child">
              <h3>Pages</h3>
              <div className="component-item">
                <h5>Listing Page</h5>
                <img
                  src="/images/design-system/ds-pages-listing.png"
                  alt="Listing page template"
                  width="100%"
                  style={{borderRadius: '12px', display: 'block'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. IMPLEMENTING ON LIVE PLATFORM */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <h2>Implementing on Live Platform</h2>
          <div className="case-body">
            <p>The components have been created and are now being rolled out across both products over the next 3 months.</p>
          </div>

          <div className="case-image-placeholder" style={{height: '280px', marginTop: '32px'}}>
            Live Implementation — Listing Pages
          </div>
        </div>
      </section>

      {/* 12. IMPACT & RESULTS — MOST PROMINENT */}
      <section className="impact-section case-section fade-up" data-theme="dark">
        <div className="case-section__inner">
          <h2 className="impact-heading">Impact & Results</h2>

          <div className="impact-stats-grid">
            <div className="impact-stat-card fade-up-child">
              <div className="impact-stat-number">30%</div>
              <p className="impact-stat-metric">faster design-to-dev handoff</p>
              <p className="impact-stat-target">Target: Month 6</p>
            </div>
            <div className="impact-stat-card fade-up-child">
              <div className="impact-stat-number">50%</div>
              <p className="impact-stat-metric">fewer UI inconsistencies</p>
              <p className="impact-stat-target">Target: Month 6</p>
            </div>
            <div className="impact-stat-card fade-up-child">
              <div className="impact-stat-number">2</div>
              <p className="impact-stat-metric">products unified under one system</p>
              <p className="impact-stat-target">NowPurchase & MetalCloud</p>
            </div>
            <div className="impact-stat-card fade-up-child">
              <div className="impact-stat-number">180</div>
              <p className="impact-stat-metric">days from audit to component launch</p>
              <p className="impact-stat-target">On schedule</p>
            </div>
          </div>

          <div className="impact-narrative">
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

          <div className="impact-outcomes">
            <div className="outcome-card fade-up-child">
              <h4>Speed</h4>
              <p>Design-to-dev handoff that previously required extensive back-and-forth — clarifying colours, spacing, states — now references a single source of truth. Target: 30% reduction in handoff time within 6 months of full adoption.</p>
            </div>
            <div className="outcome-card fade-up-child">
              <h4>Consistency</h4>
              <p>Landing pages, dashboards, detail views, empty states, and creation flows — all previously built with diverging patterns — now follow a unified language. Target: 50% fewer inconsistency-related bugs and rework cycles within 6 months.</p>
            </div>
            <div className="outcome-card fade-up-child">
              <h4>Focus</h4>
              <p>By removing repetitive UI decision-making from both designers and developers, the team can now spend meaningful time on product thinking and user problems — not redrawing buttons.</p>
            </div>
          </div>

          <div className="designer-reflection">
            <blockquote>
              <p>"The hardest part wasn't building the components — it was building the case for why the system needed to exist before anyone would invest time in it. The ROI presentation showing Rs. 2,05,000 in savings per feature launch was what got the team aligned. As a designer, learning to speak in business terms — not just design terms — was the real unlock."</p>
              <p className="reflection-attribution">— Umang Singh, Lead UX/UI Designer</p>
            </blockquote>
          </div>

          <div className="impact-footer">
            <div className="status-section">
              <p className="status-badge">In Progress · Implementation rolling out over 3 months</p>
              <p className="maintenance-note">Long-term governance led by the design team lead</p>
            </div>
            <a href="https://www.figma.com/design/JAwKifrBtSKtk2z4DexTa8/Other?node-id=49-5020" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              View Design System in Figma →
            </a>
          </div>
        </div>
      </section>

      {/* 13. NEXT PROJECT */}
      <section className="case-section case-section--surface fade-up">
        <div className="case-section__inner">
          <div className="next-project">
            <span className="next-project__label">END OF CASE STUDY</span>
            <Link to="/work" className="next-project__link">
              ← Back to Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
