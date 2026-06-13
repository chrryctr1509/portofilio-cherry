# Project Signal
generated_at: 2026-05-17T21:47+07:00

## Codebase Analysis
From: docs/codebase-analysis.md

**Stack detected:**
- Vue 3 + Vite (Rolldown-vite)
- Tailwind CSS v4
- Vue Router 4
- No backend (static portfolio)
- glfx library (canvas effects, graceful fallback)

**Key findings:**
- `style.css` → CSS variable tokens via Tailwind `@theme`
- `index.html` → Inter font via Google Fonts, dark mode flash-prevention
- All data (projects, skills, features) is **hardcoded inline** in components
- `src/data/projects.js` → **dead file** (not imported anywhere)
- `AboutSection.vue` → **dead component** (not imported in Home.vue)
- Single route `"/"` — SPA portfolio
- `useTheme()` composable only shared state
- Total estimated CSS surface: ~700 lines across 10 components

**Design currently:** white/light theme with emerald green (#22c55e) accents

---

## Requirements
From: briefs/redesign-brief.md

**Goal:** Full visual redesign → dark terminal/hacker aesthetic

**Design tokens:**
- bg-primary: #0a0f0a, bg-card: #0f1f0f
- border-default/accent/glow (green variants)
- text-primary: #e2ffe2, text-secondary: #94a3b8
- accent-green: #00ff88, accent-green-soft: #22c55e
- fonts: JetBrains Mono + Space Grotesk

**Global:** dot grid pattern + scanline overlay

**Components to redesign (11 files):**
1. src/style.css — CSS variables + global styles
2. src/App.vue — scanline overlay, force dark mode
3. index.html — Google Fonts (JetBrains Mono + Space Grotesk)
4. src/components/SiteHeader.vue — dark nav, >_ logo prefix
5. src/components/HeroSection.vue — dark card, badge, CTA
6. src/components/SkillsSection.vue — dark grid cards, hover glow
7. src/components/FeaturesSection.vue — collapsible panel + table
8. src/components/PortfolioSection.vue — expandable table (keep modal)
9. src/components/AboutSection.vue — 2-col grid principles
10. src/components/ContactSection.vue — dark form + social icons
11. src/components/SiteFooter.vue — 3-col dark footer

**Animations:** cursor blink, glow pulse, expand/collapse, card hover glow

**Out of scope:**
- Logic Vue (composables, router, i18n)
- Data/content (names, projects, skills)
- Form functionality
- GLFX photo effect

---

## Scope & Estimate
type: NEW_FEATURE (visual redesign only)
effort: L (large — 11 files, ~700 CSS lines, 4 waves)
risk_flags:
  - Tailwind v4 @theme conflicts with existing CSS variable approach
  - glfx library may conflict with dark frame styling
  - AboutSection.vue is dead code — clarify if redesign or remove
  - Icons on dark background may need brightness filter adjustments

complexity_notes:
  - Tailwind v4 uses @theme for custom tokens (not tailwind.config.js)
  - Vue 3 transitions needed for expand/collapse (Features + Portfolio)
  - Google Fonts async loading considerations
  - Mobile responsive must be preserved

recommended_wave_count: 4

Dependencies:
  - Wave 1 must complete BEFORE all other waves (foundation: style.css, App.vue, index.html)
  - Wave 2 depends on Wave 1 (HeroSection, SkillsSection use new tokens)
  - Wave 3 depends on Wave 1 (FeaturesSection, PortfolioSection use new tokens)
  - Wave 4 depends on Wave 1 (About, Contact, Footer use new tokens)