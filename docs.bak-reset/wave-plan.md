# Wave Plan — GitHub 2-Panel Layout

**Generated:** 2026-05-17
**Pipeline:** BUILD (major layout refactor)
**Branch:** `github-2panel-layout`
**Base:** `main`

---

## Overview

Complete redesign from dark terminal layout → GitHub 2-panel profile layout.
- Sidebar (296px fixed): GithubSidebar component
- Main panel: README-style content with collapsible sections
- New header bar replacing SiteHeader
- No footer (GitHub profile has none)

---

## Single Wave: Full Layout Refactor

**Scope:** All 13 tasks are interdependent — sidebar, header, layout, and all content sections must be done together to produce a working page.

### Files

**New files:**
- `src/components/GithubSidebar.vue` — sidebar with avatar, bio, stats, achievements
- `src/components/GithubHeader.vue` — slim top bar with GitHub logo

**Modified files:**
- `src/style.css` — ADD .gh-* classes, GitHub dark palette (KEEP existing terminal vars but ADD GitHub vars)
- `src/App.vue` — replace SiteHeader with GithubHeader, remove SiteFooter, add dark class
- `src/views/Home.vue` — .gh-layout 2-column grid
- `src/components/HeroSection.vue` — full rewrite: banner + typing + badges + CTA
- `src/components/FeaturesSection.vue` — About Me 2-col layout + expertise table
- `src/components/SkillsSection.vue` — gh-collapsible with skillicons.dev
- `src/components/PortfolioSection.vue` — add collapsible table view above existing cards
- `src/components/AboutSection.vue` — 2 gh-collapsibles: GitHub stats + achievements
- `src/components/ContactSection.vue` — "Let's Build" centered CTA
- `index.html` — Inter + JetBrains Mono fonts

**Deleted from active layout (can keep files, remove imports):**
- `src/components/SiteHeader.vue` — NOT used in new layout
- `src/components/SiteFooter.vue` — NOT used in new layout

### NOT Modified (out of scope):
- `src/router/index.js`
- `src/composables/useTheme.js` (can remain, won't be imported)
- `src/data/projects.js`
- `src/i18n/`
- `src/locales/`

---

## Implementation Order

1. **Global foundation:** style.css → .gh-* CSS vars and layout → index.html fonts → App.vue
2. **New components:** GithubHeader.vue → GithubSidebar.vue
3. **Home layout:** Home.vue → .gh-layout
4. **Content sections:** HeroSection → FeaturesSection → SkillsSection → PortfolioSection → AboutSection → ContactSection
5. **Cleanup:** Remove SiteHeader + SiteFooter from App.vue imports

---

## OUT OF SCOPE

- GLFX photo effects (photo moves to sidebar, no GLFX in new layout)
- Terminal green aesthetic
- Scanline overlay
- Dot grid background

---

## Design System

Reference: `docs/design-direction.md`
- GitHub dark palette (#0D1117 bg, #161B22 surface)
- Purple accent (#7C3AED primary, #A78BFA secondary)
- Fonts: Inter + JetBrains Mono
- Collapsible pattern: .gh-collapsible + .expand Vue transition

---

## Success Criteria

- `npm run build` exits with code 0
- Page loads at http://localhost:5173 with 2-panel layout
- Sidebar visible (296px, sticky)
- GithubHeader visible (slim dark bar)
- Hero banner displays with gradient
- All collapsible sections expand/collapse
- No console errors