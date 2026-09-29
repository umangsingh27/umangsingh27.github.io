# Portfolio redesign handoff

Updated: 2026-09-29

## Goal and guardrails

Finish the Portfolio redesign in this repository. Preserve truthful, evidence-backed claims, keep targets and reported outcomes distinct, and do not commit, push, or deploy. The working tree contains substantial uncommitted user work; preserve it.

## Current implementation

- Updated the app shell, Home, About, Resume page, four case studies, shared components, image pipeline, and responsive image assets.
- Reconciled the owner-confirmed distinctions: the two Friends of Figma events are in separate years; Hackathon recognition is “Best Presenter & Runner-up”; MetalCloud has three testimonials; NowPurchase website design was solo and the owner led a three-person development team; the Design System language had stakeholder review and user testing; 20× organic sessions is reported over six months.
- Kept targets/opportunities distinct from outcomes. Removed the unsubstantiated $19B market estimate from case-study copy and removed the AI Sales Agent 10% figure from the case study because the repo has no traceable measurement source. Removed the unsupported “120+ enterprises use the procurement platform” About attribution.
- Kept Design System 30% handoff and 50% inconsistency figures labeled as targets; kept MetalCloud heat/cost figures labeled as opportunities; described website sales growth as company-reported without assigning causality to the website.
- Restored Orbitron headings after the owner confirmed the repository’s locked typeface rule. Shared case-study spacing/radius now references global tokens, with exact matching 72px and 128px spacing tokens added.
- Converted all eight self-hosted Ubuntu faces to WOFF2 and removed the unused TTF originals. File total dropped from 2.4 MB to about 1.0 MB in the built public font directory. The in-app browser loaded the regular, medium, and bold WOFF2 faces.
- Reduced the NowPurchase presentation gallery from three repeated photos to two distinct views. Fixed browser-history scroll restoration, direct hash restoration, mobile menu focus/cleanup, reduced-motion behavior, and 404 redirect initialization. The resume page uses its existing image preview in-browser because the embedded PDF rendered blank in the local preview; open/download actions still point to the unchanged PDF.
- Responsive image derivatives are generated and the image manifest is consistent; `scripts/optimize-images.js` no longer reprocesses its own outputs or exits before writes finish.

## Verification completed

- Local preview is running at `http://127.0.0.1:5173/` and the in-app browser can access it. Leave the server running unless the user asks otherwise.
- Seven public route paths (Home, `/work` alias, About, Resume, and three case studies) × six widths (360, 390, 768, 1024, 1440, 1920 CSS px): no horizontal overflow or broken images. A 567px effective-width check also passed; this approximates a 200% zoom on a 1135px CSS viewport because the browser zoom shortcut did not change actual zoom. `/work/ai-sales-agent` is intentionally hidden and returns the 404 page.
- Mobile navigation: focus entry/trap/return, Escape, body overflow and inert cleanup, resize-to-desktop, and 844×390 landscape checked.
- Interactive hit-area audit at 390px found undersized Home testimonial, footer, skip, and logo targets. Their hit areas now meet 44px; Home, About, and Resume have no remaining visible targets below 44px.
- Reduced motion checked; reveals show and counters settle immediately. Light color-scheme and evidence-image legibility were checked; emulation was reset.
- Resume image preview and PDF actions checked at 390px and in the desktop in-app browser. The PDF is intentionally deferred unchanged at the owner's request; its unsupported claims and source-file gap remain documented for later.
- Case-study TOC checked across all three public case studies at mobile, plus desktop/tablet positions on the Design System route. It hides when it would overlap content and reappears in clear space.
- Browser back/forward restored the exact Home scroll position; `/about#testimonials` loads directly at its target. Route titles, main-content focus on navigation, and 404 redirect were checked.
- Route sweep: all seven public routes loaded; the hidden AI Sales Agent path returned the 404 page. Titles were correct, in-page links resolved, and there were no broken images or overflow. No browser console warnings or errors on the final sweep.
- Light mode was visually inspected; case-study imagery/crops, the About page, Home hero rhythm, presentation gallery, and resume responsive layout were reviewed in the rendered browser.

## Deferred work and remaining evidence gaps

The owner asked to leave `public/resume.pdf` and `public/resume-preview.webp` unchanged and revisit them later. They still contain claims not verified by the website source: AI Agent +10% revenue, Vision demo −60% sales cycle, Grades & Parts +25% engagement/−30% go-to-market time, and a $19B market-size claim. No editable source file exists in this repository. Resume claim audit, PDF edits, preview regeneration, and rendered PDF review are deferred until the owner resumes that work.

Typography was aligned to the locked scale in `CLAUDE.md`: page-title H1 steps are 80/56/52/40px, Home's SVG wordmark follows 80/56/52/44px, section H2s use 40/32/28px, and H3s use 24/21px. The long NowPurchase case-study title scales to fit on compact screens. Body copy uses the documented 17px desktop / 16px mobile sizes and 1.75 line height.

The website case study retains a company-reported 50% sales-growth statement with an explicit note that the website’s contribution is unverified. The 10% AI Agent claim has been removed from public case-study copy pending a source and measurement method.

The AI Sales Agent project is hidden from the public site for now: it has no route or Home card, and its former URL resolves to the 404 page. The unreferenced local component is retained for possible later work. Source screenshots, workflow decisions, collaborators, and a verifiable outcome method remain absent; if the project is re-enabled, do not invent missing evidence. `CLAUDE.md` also mentions a planned Tools page and analytics; its status section is partly stale. Do not add analytics collection without resolving scope and privacy requirements.

## Later follow-up

1. When the owner resumes PDF work, locate/provide an editable resume source, verify the remaining claims, then regenerate and inspect the PDF and preview. Keep personal contact information private.
2. Keep the preview on `/` and the local server running. Do not deploy; make any further commits or pushes only with explicit authorization.
