# CLAUDE.md — Umang Singh Portfolio

---

## 1. WHO & WHY

**Identity:** Lead/Senior Product Designer at NowPurchase (founding designer, 4.5 yrs). B2B SaaS + AI workflows. Based in Kolkata, targeting remote/Bangalore/Hyderabad/Gurugram roles.

**Job search goal:** Land Senior Product Designer at Tier 1 Indian B2B SaaS or AI-first startup within 60 days of April 2, 2026. Target: ₹25–35 LPA (stretch ₹35–45 LPA).

**Canonical positioning (use verbatim across all copy):**
> "A Senior Product Designer who sits at the intersection of enterprise B2B UX and AI automation — someone who doesn't just design for AI features, but actually builds and ships AI-driven product workflows."

**Three proof points (anchor all portfolio messaging to these):**
1. AI Sales Agent (N8N + LLM) shipped to production → 10% revenue growth in month 1
2. MetalCloud: 13 → 120 enterprise clients in 12 months ($19B foundry industry digitised)
3. Unified Design System (Atomic Design) → 30% faster dev handoff, 50% fewer inconsistencies

**Second-order differentiator:** Google Stitch → Figma → MCP → Claude Code pipeline. Almost no Indian designer has this set up. Position as "compressed a 3–4 day design-to-handoff cycle to one morning."

**Target companies (Tier 1):** Razorpay, Postman, BrowserStack, Sarvam AI, Krutrim, Freshworks, Groww
**Target companies (Tier 2):** Atlassian, Microsoft, Salesforce, Adobe

**Hero positioning:** "Designs B2B SaaS. Ships AI that sells."

---

## 2. TYPOGRAPHY

**Fonts in use (actual code):** Orbitron (headings) + Ubuntu (body)
- Note: An earlier strategy doc references Rokkitt — that was superseded. Orbitron is locked in the implementation. Do NOT change.

**Font size scale (locked — do not alter):**
- Hero name: 80px desktop / 56px tablet / 52px mobile / 44px small mobile, weight 700, letter-spacing -0.003em
- H1 (page titles): 80px → 56px → 52px → 40px, weight 700, letter-spacing -0.003em, line-height 1.05
- H2 (section headings): 40px → 32px → 28px, weight 700, letter-spacing -0.01em
- H3 (sub-headings): 24px → 21px, weight 600, letter-spacing -0.005em
- Body: 17px → 16px, weight 400, line-height 1.75
- Tags/labels: 12px, weight 600, letter-spacing 0.08em, UPPERCASE
- Navigation logo: 16px, weight 600, Orbitron

**CSS variables:** `--font-family-heading: 'Orbitron', sans-serif` / `--font-family-body: 'Ubuntu', sans-serif`
**All body copy:** left-aligned always.

---

## 3. COLOR SYSTEM

```css
--color-bg: #FFFFFF                  /* primary background */
--color-surface: #F5F5F7             /* cards, alt sections */
--color-surface-2: #FAFAFA           /* alternate surface */
--color-text-primary: #1D1D1F        /* WCAG AAA on white */
--color-text-secondary: #6E6E73      /* WCAG AA */
--color-text-tertiary: #86868B       /* WCAG AA */
--color-accent: #0066CC              /* primary CTA */
--color-accent-hover: #004499
--color-border: #D2D2D7
--color-border-light: #E8E8ED
--color-card-hover: #F5F5F7
```

**Dark stats section:** `background: #1A1A1A` (hardcoded, not a CSS var). Text/numbers: white. Accent: `#0066CC`. Used on About page and MetalCloud case study — deliberate contrast moment.

**Section alternation rule (LOCKED — follow this exact order in case studies):**
1. Hero: `--color-bg` white
2. Context: `--color-bg` white
3. Problems: `--color-surface` grey
4. Design Process: `--color-bg` white
5. Understanding System: `--color-surface` grey
6. Identifying Opportunities: `--color-bg` white
7. The Solution: `--color-surface` grey
8. Usability Testing: `--color-bg` white
9. Impact: `#1A1A1A` dark
10. What I Learned: `--color-bg` white
11. Next Project CTA: `--color-surface` grey

---

## 4. VISUAL LANGUAGE — WHAT NOT TO BUILD

- NO gradient backgrounds (except image placeholders)
- NO glassmorphism or backdrop-filter (navigation only exception)
- NO particle systems or WebGL
- NO centered body copy (hero text on mobile is only exception)
- NO skill bars or percentage rings
- NO neon or glow effects
- NO decorative large quote marks
- NO excessive shadows
- NO horizontal overflow at any breakpoint
- NO "Coming Soon" cards (remove or build the actual thing)

**Design philosophy:** Apple-inspired minimalism. Generous whitespace. Surgical use of accent. Content carries the weight, not visual theatrics. Case study depth = competitive advantage.

---

## 5. ROUTES & PAGES

```
/                          → Home.jsx
/work                      → Home.jsx (work listing)
/work/ai-sales-agent       → AiSalesAgent.jsx  ← P0, currently a stub, MUST BUILD
/work/design-system        → DesignSystem.jsx   ← has content + images
/work/metalcloud-platform  → MetalcloudPlatform.jsx ← full case study ✅
/work/nowpurchase-website  → NowpurchaseWebsite.jsx ← full case study ✅
/tools                     → Tools.jsx          ← NOT YET CREATED, high priority
/about                     → About.jsx ✅
/resume                    → Resume.jsx ✅
```

**basename:** `"/"` (GitHub Pages root). Router is BrowserRouter.

---

## 6. CASE STUDY PAGE PATTERN

All 4 case studies follow this section order:
```
Hero → Context → Problem → Design Process → Solution → Usability Testing → Impact → What I Learned → Next Project CTA
```

- Max-width for text: `--case-study-width: 680px`, centered
- Section h2 headings: NO blue left border (border-left was removed)
- Stats: 3-column block, clean typography, no boxes around numbers
- Images: full-width, break out of 680px to 100% width
- Dark Impact section: `#1A1A1A` background

---

## 7. CASE STUDY CONTENT REFERENCE

### AI Sales Agent (N8N) — P0, MUST BUILD
**Status:** Stub page. Content and assets NOT yet in code.
**Positioning:** Highest signal project. Shipped to production. Revenue impact. AI differentiator.
**Key facts to write from:**
- Built N8N + LLM workflow to automate B2B sales follow-ups
- Shipped to production → 10% revenue growth in month 1
- Differentiator: designer who actually builds and ships AI agents
- Assets needed: N8N workflow screenshots, WhatsApp agent-in-action screenshots, before/after data

### MetalCloud Platform — ✅ Full case study exists
**Two modules merged into one case study (NOT two separate ones):**

**Spectro Pro (IoT spectrometer module):**
- Connects spectrometer machine → MetalCloud server → real-time chemical analysis
- AI/ML calculates Addition/Dilution suggestions (eliminates manual calc)
- WhatsApp delivery of results to supervisor
- Post-MVP: Shop-floor TV display + Spectrometer Dashboard for stakeholders
- Task flow: Start → Login → Spectrometer Listing → View Reading → Details Page

**Optimise (ChargeMix module):**
- Inputs: Target Product Requirement, Raw Materials (yield % + price), Furnace Capacity
- Output: On-screen ChargeMix → WhatsApp sharing → PDF/CSV export
- Post-PMF: Grades module + Inventory module
- Task flow: Start → Login → ChargeMix Listing → Add New/View → Step 1 → Step 2 → Step 3 → Details

**Key metrics:**
- 36 heats/day → 41 heats/day (20% productivity improvement via Spectro Pro)
- Optimise: 12% cost saving
- Client growth: 13 → 120 enterprise foundries in 12 months
- Industry: $19B Indian foundry sector

### NowPurchase Website Revamp — ✅ Full case study + images exist
**Lead with:** 20x organic sessions, 50% sales growth in 6 months
**Research documented:** Clarity heatmaps (4 tiles), Amplitude, stakeholder interviews, Miro IA diagrams, wireframes
**Image assets:** All present in `/public/images/nowpurchase-website/`

### Design System — ✅ Content + images exist
**Figma source:** `JAwKifrBtSKtk2z4DexTa8` node `49-5020`
**Atomic Design layers:**
- Sub-atoms: Colors, Typography, Scale/Border/Spacing, Icons
- Atoms: Tooltip, Buttons, CheckBoxes, Toggles, Input & Label, Left Nav Panel Items, Breadcrumb & Menu Items, Menu
- Molecules: Text Boxes, Dropdowns, Left Panel Modules + Breadcrumbs + Profile Menu, Search
- Organisms: Profile Menu
- Layouts: Left Panel, Top Bar
- Pages: Listing Page
**Image naming:** `ds-[layer]-[component].png` (e.g., `ds-atoms-buttons.png`)

---

## 8. TOOLS PAGE ("How I Work in 2026") — NOT YET BUILT

**Route:** `/tools`
**Priority:** High — key differentiator page
**Purpose:** Showcase Google Stitch → Figma → MCP → Claude Code pipeline with real screenshots.
**Content angle:** "I compressed a 3–4 day design-to-handoff cycle to one morning."
**File to create:** `src/pages/Tools.jsx` + `src/pages/Tools.css`

---

## 9. HOME PAGE — PROJECT CARDS

**4 case studies total (once AI Sales Agent is built):**
1. AI Sales Agent (N8N) — P0 — build first
2. MetalCloud Platform — B2B SaaS + IoT/AI modules for foundries
3. Design System — Unified atomic system across 2 products
4. NowPurchase Website — End-to-end redesign, 20× organic growth

**Card layout:** Desktop 2-column grid. Mobile: full-width stack, 16px gap.
`grid-template-columns: 5fr 7fr` on desktop.
Background: `#F5F5F7`. Border-radius: 18px. Min-height: 340px.
Hover: shadow elevation + image zoom (1.04x).

---

## 10. COMPONENT & HOOK ARCHITECTURE

### Custom Hooks (src/hooks/)
- **useScrollReveal.js** — IntersectionObserver fade-up. `.visible` on `.fade-up`. Threshold: 0.05. Fire once.
- **useCountAnimation.js** — `[data-count-to]` count animations. Threshold configurable. Duration 1200ms. StrictMode idempotency fixed.

### Components (src/components/)
- **Navigation.jsx** — Sticky, backdrop-blur. IntersectionObserver-based theme detection via `data-nav-theme="dark"`. Mobile hamburger → full-screen overlay with aria-label/aria-expanded/aria-modal/role="dialog". Escape key closes.
- **StickyTextReveal.jsx** — Scroll-driven word opacity reveal. `scrollDistance` prop controls container height. Sticky inner at 100vh.
- **LazyImage.jsx** — `<picture>` with WebP srcset at 480w/768w/1280w/1920w.
- **Button.jsx**, **Footer.jsx**, **ScrollToTop.jsx** — standard utility components.

### CSS Organization
- Global: `src/index.css` (variables, reset, typography)
- Per-page: `src/pages/*.css`
- Per-component: `src/components/*.css`
- Case study shared (stubs): `src/pages/work/CaseStudy.css`
- Case study specific: `src/pages/work/*.css`

---

## 11. SCROLL ANIMATIONS

Every page uses IntersectionObserver → class `"visible"` on `.fade-up` elements.
Animation: `fadeUp` keyframe, 0.6s, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.
Stagger: direct children get delay 0, 0.1s, 0.2s, 0.3s...
`useScrollReveal()` must be called in EVERY page component.

---

## 12. RESPONSIVENESS — NON-NEGOTIABLE

Mobile-first. Test at 375px first.
Breakpoints: 375px, 768px, 1024px, 1200px.
No horizontal overflow at any breakpoint.
Touch targets minimum 44×44px.
Nav collapses to hamburger at < 768px.

---

## 13. BUILD & DEPLOYMENT

- **Stack:** React + Vite. React Router. Plain CSS. No Tailwind. No UI libs.
- **Deployment:** GitHub Pages via `gh-pages` npm package.
- **URL:** `https://umangsingh27.github.io`
- **Basename:** `"/"`
- **Vite:** HMR enabled. Terser minification. CSS code splitting. Rollup manualChunks.
- **Dev server HMR issue:** Changes sometimes don't reflect without clearing `.vite/` cache and restarting. Does NOT affect production builds.

---

## 14. IMPORTANT IDs & REFERENCES

| Resource | Value |
|---|---|
| Portfolio URL | `https://umangsingh27.github.io` |
| LinkedIn | `https://www.linkedin.com/in/umangsingh123/` |
| Email | `mail2umangsingh@gmail.com` |
| Phone | +91 70447 03370 |
| Figma file (case studies) | `JAwKifrBtSKtk2z4DexTa8` |
| Figma node (Design System) | `49-5020` |
| Figma node (NP Website Revamp) | `18-735` |
| AI Vision demo video | `https://youtu.be/74HHLrdwrZc` |
| UX Gyan Sessions YouTube | `https://rb.gy/xvwogp` |
| Notion Kanban board | `335b3c26-d217-81fc-938d-c02115e73172` |

---

## 15. ANALYTICS (PLANNED — NOT YET IMPLEMENTED)

- **GA4** — backbone (all traffic/behavior)
- **Microsoft Clarity** — heatmaps + session recordings (free, unlimited)
- **Google Search Console** — organic keyword intelligence
- **Events to track:** `resume_download` (P0 KPI), `contact_click`, `case_study_open` (per project), `youtube_play`, `linkedin_click`

---

## 16. CURRENT STATUS

### Completed ✅
- Portfolio: React + Vite deployed to GitHub Pages
- MetalCloud Platform — full case study with images
- NowPurchase Website Revamp — full case study with images
- Design System — content + images (review for completeness)
- About page — redesigned, sticky text reveal animation
- Navigation — IntersectionObserver theming, mobile menu accessibility
- All scroll animations, count animations
- Responsive at 375px

### Pending / Must Build ❌
- **AI Sales Agent case study** — P0. Content NOT written. Needs N8N screenshots, WhatsApp screenshots, revenue data from Umang.
- **Tools page** (`/tools`) — NOT created. Showcase Google Stitch → Figma → MCP → Claude Code pipeline.
- **Analytics implementation** — GA4 + Clarity + Search Console scripts not added.
- **AI Sales Agent home card** — Add back to home work grid once case study is built.

### High Priority Polish
- Page transition animations between routes
- Route-based lazy loading for case study pages
- Font format: TTF → WOFF2 (50% smaller)

---

## 17. CODE RULES (NON-NEGOTIABLE)

1. **INSERT, don't restructure.** All changes must insert into existing structure. Never alter component structure unless explicitly asked.
2. **Metric-first everywhere.** Every headline, bullet, and stat leads with the number.
3. **Non-destructive by default.** Verify which version/file you're editing before changing.
4. **No comments** unless the WHY is genuinely non-obvious (hidden constraint, workaround for a bug).
5. **Mobile-first always.** Write CSS for 375px, then add breakpoints upward.
