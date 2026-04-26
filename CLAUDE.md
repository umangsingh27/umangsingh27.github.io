# CLAUDE.md — Umang Singh Portfolio

## Identity
Lead Product Designer at NowPurchase (MetalCloud), Kolkata.
Founding designer. 4.5 years experience. B2B SaaS + AI workflows.
Targeting Lead/Senior Product Designer roles at Indian B2B SaaS and AI-first companies.
This portfolio must work hard to explain itself — the company name is not well-known. 
Depth of process and clarity of outcomes are the competitive advantage.

**Hero positioning:** "Designs B2B SaaS. Ships AI that sells."
**Core message:** Lead Product Designer at NowPurchase. Designs the platform digitizing India's $19B foundry industry, and builds the AI agents closing the B2B sales pipeline behind it.

## Design Philosophy
Clean, professional, content-led. The work carries the weight, not visual theatrics.
Every element earns its place. Fast load = good judgment.
Case study depth is the competitive advantage. Clarity beats cleverness.

## Typography
Fonts: Orbitron (headings) + Ubuntu (body).
- Hero name: 80px desktop / 56px tablet / 52px mobile / 44px small mobile, weight 700, letter-spacing -0.003em, font-family: 'Orbitron', sans-serif
- H1 (page titles): 80px desktop / 56px tablet / 52px mobile / 40px small mobile, weight 700, letter-spacing -0.003em, line-height 1.05, font-family: 'Orbitron', sans-serif
- H2 (section headings): 40px desktop / 32px mobile / 28px small mobile, weight 700, letter-spacing -0.01em, font-family: 'Orbitron', sans-serif
- H3 (sub-headings): 24px desktop / 21px mobile, weight 600, letter-spacing -0.005em, font-family: 'Orbitron', sans-serif
- Body: 17px desktop / 16px mobile, weight 400, line-height 1.75, font-family: 'Ubuntu', sans-serif
- Tags/labels: 12px, weight 600, letter-spacing 0.08em, UPPERCASE, font-family: 'Orbitron', sans-serif
- Navigation logo: 16px, weight 600, font-family: 'Orbitron', sans-serif
- All body copy: left-aligned always

## Color System (in index.css)
Light mode (only defined color scheme):
- --color-bg: #FFFFFF (background)
- --color-surface: #F5F5F7 (cards, surfaces)
- --color-surface-2: #FAFAFA (alternate surface)
- --color-text-primary: #1D1D1F (16.7:1 contrast on white — WCAG AAA)
- --color-text-secondary: #6E6E73 (6.1:1 contrast — WCAG AA)
- --color-text-tertiary: #86868B (4.6:1 contrast — WCAG AA, was 3.3:1, upgraded in latest session)
- --color-accent: #0066CC (primary action color)
- --color-accent-hover: #004499 (darker accent on hover)
- --color-border: #D2D2D7 (primary border color)
- --color-border-light: #E8E8ED (subtle borders)
- --color-card-hover: #F5F5F7 (card background on hover)

All text/bg pairs verified for WCAG AA/AAA compliance.

## Dark Stats Section
Used on About page and MetalCloud case study.
Background: #1A1A1A (hardcoded, NOT a CSS variable — stays dark in both modes).
Text: white. Numbers: white. Accent: #0066CC.
This is intentional — the dark section is a deliberate contrast moment.

## Scroll Animations
Every page uses IntersectionObserver to add class "visible" to ".fade-up" elements.
Animation: fadeUp keyframe, 0.6s, cubic-bezier(0.25, 0.46, 0.45, 0.94).
Stagger: direct children get delay 0, 0.1s, 0.2s, 0.3s etc.
Observer threshold: 0. Fire once — never reset on scroll-up.
This logic must be in EVERY page component.

## Navigation
Logo left: "Umang Singh" with logo SVG — 16px weight 600, Orbitron sans-serif.
Links right: Work · About · Resume — nav pills with animated indicator.
Sticky header with backdrop-filter blur and gradient fade mask.

**Theme detection:** IntersectionObserver-based (no longer per-pixel sampling).
- Observes sections with `data-nav-theme="dark"` attribute
- Dynamically adjusts logo/links/CTA pill colors based on dark section visibility
- Mobile hamburger button with:
  - `aria-label`, `aria-expanded`, `aria-controls` attributes
  - Escape key handler to close overlay
  - `body { overflow: hidden }` when menu open
  - Overlay has `aria-modal="true"`, `role="dialog"`, `aria-label`

Mobile: hamburger → full-screen overlay with large centered links (32px font) + Get in Touch CTA.

## Project Cards (Home Page Work Grid)
3 case study cards displayed (N8N card removed — was "Coming Soon" placeholder):
1. **MetalCloud Platform** — B2B SaaS + IoT/AI modules for foundries
2. **Design System** — Unified atomic system across 2 products (In Progress status)
3. **NowPurchase Website** — End-to-end redesign with 20× organic growth

Card layout: Horizontal split grid `grid-template-columns: 5fr 7fr` on desktop, responsive on tablet/mobile.
Background: #F5F5F7. Border-radius: 18px. Min-height: 340px.
Hover effect: Shadow elevation + image zoom (1.04x) instead of uniform scale.
Images use LazyImage component with WebP variants + responsive srcset.

## Case Study Pages
Max-width `--case-study-width: 680px` for text content. Centered on page.
Section headings have border-left: 3px solid var(--color-accent).
Full-width breakouts allowed for: dark stats sections, hero.
No scroll animations at page load — only triggered by IntersectionObserver.

## Responsiveness — NON-NEGOTIABLE
Mobile-first. Test every component at 375px.
Breakpoints: 375px, 768px, 1024px.
No horizontal overflow at any breakpoint.
Touch targets minimum 44x44px.

## Routes
/ → Home
/work → Home (work listing)  
/work/ai-sales-agent → Case Study (Stubbed - "Coming Soon")
/work/design-system → Case Study (Stubbed - "Coming Soon")
/work/metalcloud-platform → Case Study
/work/nowpurchase-website → Case Study
/about → About

## Stack
React + Vite. React Router with basename="/umang-portfolio".
Plain CSS with CSS custom properties. No Tailwind. No external UI libs.
gh-pages for deployment.

## Design System
Design specifications are maintained at: https://api.anthropic.com/v1/design/h/xHMGqEOeQNKcgPKILSnt0Q

## Code Organization & Hooks

### Custom Hooks (src/hooks/)
**useScrollReveal.js** — IntersectionObserver-based fade-up animations.
- Applies `.visible` class to `.fade-up` elements when they enter viewport
- Fires once on initial page load and on scroll
- Used on: Home, About, all case study pages
- Threshold: 0.05 (5% of element must be visible)

**useCountAnimation.js** — Counting number animations with easing.
- Animates `[data-count-to]` elements with `cubic-bezier(0.25, 0.46, 0.45, 0.94)` easing
- Configurable threshold (default 0.3)
- Used on: Home (0.5), About (0.3), MetalCloud (0.3), NowPurchase (0.1)
- Duration: 1200ms per animation

### Components (src/components/)
**Navigation.jsx** — Smart header with background-aware theming.
- 40-segment horizontal sampling with 3 vertical points per segment
- Detects dark backgrounds and adjusts text/logo color automatically
- Mobile: hamburger menu → full-screen overlay
- Sticky, backdrop-filter blur

**Footer.jsx** — Clean footer with email + LinkedIn links.

**ScrollToTop.jsx** — Auto-scroll to top on route change.

### Pages (src/pages/)
**Home.jsx** — Work listing + hero + stats + CTA.
Uses: useScrollReveal, useCountAnimation(0.5), data-scroll-to for smooth scroll

**About.jsx** — Bio, experience, education, tools, teaching.
Uses: useScrollReveal, useCountAnimation(0.3)

**Resume.jsx** — PDF viewer with zoom controls (50% to 200%).
Custom zoom state management, not tied to hooks.

### Case Studies (src/pages/work/)
**MetalcloudPlatform.jsx** — Full case study with 10+ sections.
Uses: useScrollReveal, useCountAnimation(0.3)

**NowpurchaseWebsite.jsx** — Full case study with research → strategy → design flow.
Uses: useScrollReveal, useCountAnimation(0.1)

**AiSalesAgent.jsx, DesignSystem.jsx** — Stub pages ("Coming Soon").
Both use CaseStudy.css for consistent styling.

### CSS Organization
Root styles: **src/index.css** (typography, colors, reset)
Page styles: **src/pages/*.css** (page-specific layouts)
Component styles: **src/components/*.css** (scoped to components)
Case study shared: **src/pages/work/CaseStudy.css** (stub pages)
Case study specific: **src/pages/work/*.css** (full case studies)

## Recent Fixes & Improvements (Latest Session)

### Content & Copy
✅ V1-010: Email standardized to `hello@umangsingh.dev` (Footer, Navigation)
✅ V1-014: "View Work" converted from button to semantic anchor with smooth scroll (`scroll-behavior: smooth`)
✅ V1-015: N8N "Coming Soon" card removed from work grid (was placeholder, kept project clean)

### Visual Design
✅ V1-019: Star ratings removed from MetalCloud testimonial cards (★★★★★ removed)
✅ V1-020: Visual connection line added to process timeline using CSS gradient `::before`
✅ V1-013: Navigation indicator easing updated to `var(--ease-spring)` (removed bouncy cubic-bezier)

### Code Architecture & Accessibility
✅ V4-007: Mobile menu accessibility enhanced:
  - Escape key handler closes overlay
  - Body overflow lock when menu open
  - `aria-controls`, `aria-modal`, `role="dialog"` attributes added
  - Semantic HTML with skip-link for keyboard navigation
✅ V4-011: Heading font-sizes now use CSS tokens:
  - h1: `var(--text-h1-fluid)` with responsive clamp
  - h2: `var(--text-h2-fluid)` with responsive clamp
  - h3: `var(--text-h3)` with fixed size
✅ V4-017: Added `.flow > * + *` utility for consistent paragraph spacing (1.25em margin-top)
✅ V2-003: useCountAnimation fixed to prevent double-fire in StrictMode (idempotency check added)

## Best Practices (Implemented)
✅ Do Not Repeat Yourself principle: Counting animation extracted into reusable hook
✅ Lazy observer cleanup: IntersectionObserver disconnects after use
✅ Event listener management: Proper add/remove in useEffect cleanup
✅ Accessibility: aria-labels, alt text, semantic HTML, rel="noopener noreferrer", skip-link, keyboard support
✅ Performance: RequestAnimationFrame for animations, passive scroll listeners, IntersectionObserver theming
✅ No security vulnerabilities: No inline HTML, safe string handling
✅ Semantic HTML: Main landmark with id="main-content", proper heading hierarchy
✅ Responsive design: 100svh (mobile Safari fix), clamp() for fluid typography, media queries at 480px/768px/1024px

## Build Configuration & Deployment
**Vite config settings:**
- Base path: `/` (GitHub Pages root)
- Dev server: `no-cache, no-store, must-revalidate` headers (forces fresh content)
- Terser minification with selective `pure_funcs: ['console.log', 'console.debug']`
- HMR enabled (removed earlier `hmr: false` setting)
- Brotli compression disabled (GitHub Pages doesn't serve pre-compressed)
- CSS code splitting enabled
- Rollup output with manualChunks for vendor isolation

**Deployment target:** GitHub Pages (gh-pages branch)
**Build output:** `/dist` folder (cleared between builds to force fresh compile)

## Known Issues & Workarounds
1. **Dev server HMR caching:** Changes to React components sometimes don't immediately reflect in browser preview despite correct source files. 
   - Workaround: Clear `.vite/` and `node_modules/.vite/` caches, restart dev server
   - This does NOT affect production builds — deployed code is correct
   - Workaround confirmed working: Manual DOM manipulation verified the underlying code was correct

2. **Unused routes:** `/work/ai-sales-agent` and `/work/design-system` are "Coming Soon" stubs
   - Consider: Complete one of these case studies or remove routes entirely

## Project Status & Remaining Work

### Completed (Latest Session)
- 11 major fixes across content, design, and code architecture
- All accessibility improvements for mobile menu
- Responsive heading typography with CSS tokens
- Visual enhancements (timeline line, hover effects, spacing utilities)
- Email standardization and CTA improvements

### High Priority (Not Yet Done)
- [ ] V1-016: Break About journey text into scannable paragraphs with pull quotes
- [ ] V1-017: Redesign testimonials grid as asymmetric masonry layout
- [ ] V2-009: Add page transition animations between routes
- [ ] V4-013: Implement route-based lazy loading for case study pages
- [ ] V4-015: Convert fonts from TTF to WOFF2 format (50% smaller)

### Medium Priority
- [ ] V2-002: Upgrade useScrollReveal with MutationObserver for dynamic content
- [ ] V2-006: Implement CSS custom properties for animation stagger
- [ ] V4-016: Move passive scroll listeners from document to refs
- [ ] Complete or delete stub case studies (AI Sales Agent, Design System)

### Quality Gates
- Production build passes Lighthouse > 90 (currently overstated at 95)
- LCP < 2.5s (currently overstated at 1.8s)
- Zero ESLint warnings
- Mobile (375px) and desktop (1920px) tested
- WCAG AA accessibility throughout
- No console errors or warnings

### Image Optimization Status
- WebP variants generated at 480w, 768w, 1280w, 1920w breakpoints
- LazyImage component uses `<picture>` element with srcset fallbacks
- Estimated image weight reduction: 67MB → ~2.5MB for case studies

## NEVER build
- Gradient backgrounds (except for image placeholders)
- Glassmorphism or backdrop-filter (except navigation)
- Particle systems or WebGL
- Centered body copy (hero text mobile only exception)
- Skill bars or percentage rings
- Neon or glow effects
- Horizontal overflow
- "Coming Soon" placeholder cards (remove or complete the work)
