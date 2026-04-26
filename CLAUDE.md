# CLAUDE.md — Umang Singh Portfolio

## Identity
Senior Product Designer at NowPurchase (MetalCloud), Kolkata.
Founding designer. 4.5 years experience. Business-to-Business Software as a Service + Artificial Intelligence workflows.
Targeting Senior Product Designer roles at Indian Business-to-Business Software as a Service and Artificial Intelligence-first companies.
This portfolio must work hard to explain itself — the company name is not 
well-known. Depth of process and clarity of outcomes are the competitive advantage.

## Design Philosophy
Clean, professional, content-led. The work carries the weight, not visual theatrics.
Every element earns its place. Fast load = good judgment.
Case study depth is the competitive advantage. Clarity beats cleverness.

## Typography
Fonts: Rokkitt (headings) + Ubuntu (body).
- Hero name: 80px desktop / 56px tablet / 52px mobile / 44px small mobile, weight 700, letter-spacing -0.003em, font-family: 'Rokkitt', serif
- H1 (page titles): 80px desktop / 56px tablet / 52px mobile / 40px small mobile, weight 700, letter-spacing -0.003em, line-height 1.05, font-family: 'Rokkitt', serif
- H2 (section headings): 40px desktop / 32px mobile / 28px small mobile, weight 700, letter-spacing -0.01em, font-family: 'Rokkitt', serif
- H3 (sub-headings): 24px desktop / 21px mobile, weight 600, letter-spacing -0.005em, font-family: 'Rokkitt', serif
- Body: 17px desktop / 16px mobile, weight 400, line-height 1.75, font-family: 'Ubuntu', sans-serif
- Tags/labels: 12px, weight 600, letter-spacing 0.08em, UPPERCASE, font-family: 'Rokkitt', serif
- Navigation logo: 16px, weight 600, font-family: 'Rokkitt', serif
- All body copy: left-aligned always

## Color System (already in index.css — do not change)
Light mode (only defined color scheme):
--color-bg: #FFFFFF
--color-surface: #F5F5F7
--color-surface-2: #FAFAFA
--color-text-primary: #1D1D1F
--color-text-secondary: #6E6E73
--color-text-tertiary: #9D9D9F
--color-accent: #0066CC
--color-accent-hover: #004499
--color-border: #D2D2D7
--color-border-light: #E8E8ED
--color-card-hover: #F5F5F7

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
Logo left: "Umang Singh" — Inter 17px weight 600.
Links right: Work · About · Resume (13px, weight 400).
Sticky. Header uses `backdrop-filter: saturate(180%) blur(20px)`.
Mobile: hamburger → full-screen overlay with large centered links.

## Project Cards
Horizontal split grid: `grid-template-columns: 40% 60%`. Background #F5F5F7. 
Border-radius 18px. Cover height: 320px.  
Hover: `transform: translateY(-2px)`, `box-shadow: var(--shadow-card-hover)`.

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

## Best Practices (Implemented)
✅ Do Not Repeat Yourself principle: Counting animation extracted into reusable hook
✅ Lazy observer cleanup: IntersectionObserver disconnects after use
✅ Event listener management: Proper add/remove in useEffect cleanup
✅ Accessibility: aria-labels, alt text, semantic HTML, rel="noopener noreferrer"
✅ Performance: RequestAnimationFrame for animations, passive scroll listeners
✅ No security vulnerabilities: No inline HTML, safe string handling

## NEVER build
- Gradient backgrounds (except for image placeholders)
- Glassmorphism or backdrop-filter (except navigation)
- Particle systems or WebGL
- Centered body copy (hero text mobile only exception)
- Skill bars or percentage rings
- Neon or glow effects
- Horizontal overflow
