# Scope Estimate — Cherry Citra Portfolio Redesign
generated_at: 2026-05-17T21:48+07:00

## scope_type
NEW_FEATURE (visual redesign — CSS/styling only, no Vue logic, no backend)

---

## effort: L

**Justification:**
- 11 files to modify (foundation: 3, components: 8)
- ~700 lines of scoped CSS to rewrite
- 4 waves with inter-wave dependencies (Wave 2-4 depend on Wave 1)
- Animations (cursor blink, glow pulse, expand/collapse, card hover)
- Tailwind v4 @theme token migration (different from v3 config)
- Google Fonts swap (Inter → JetBrains Mono + Space Grotesk)
- Force dark mode (remove existing light/dark toggle behavior)

Not XL because:
- No backend changes
- No data/logic changes
- No routing changes
- No testing infrastructure needed
- Single developer (fe-developer) sufficient for most waves

---

## risk_flags

1. **Tailwind v4 @theme conflicts** — existing CSS vars in style.css use `@theme {}` block. Adding custom CSS variables alongside may cause precedence issues.
   → Mitigation: Use `--bg-primary` etc. as CSS vars outside Tailwind @theme, consume via `var()` in styles

2. **glfx library dark frame conflict** — HeroSection uses glfx canvas for photo effects. Dark card frame may not match existing effect.
   → Mitigation: Only change the frame/card around the image, keep glfx effect intact

3. **AboutSection.vue dead code** — not imported in Home.vue. Risk of spending time on unused component.
   → Mitigation: Confirm with brief — redesign it anyway as it's in scope list

4. **Devicon visibility on dark bg** — several skill icons may be nearly invisible on #0a0f0a background.
   → Mitigation: Add `filter: brightness(1.5)` to `.devicon` classes globally

5. **Font loading flash** — JetBrains Mono + Space Grotesk async load may cause FOUT (Flash of Unstyled Text).
   → Mitigation: Use `font-display: swap` in Google Fonts URL (already default)

---

## complexity_notes

**Vue/Tailwind complexity:**
- Tailwind v4 uses `@theme` directive in CSS (not `tailwind.config.js`) for custom tokens
- Vue 3 `<Transition>` component needed for expand/collapse animations
- Existing `useTheme()` composable behavior changes (force dark, no toggle)
- Scoped styles in components using both Tailwind utilities + custom CSS

**CSS complexity:**
- CSS custom properties (design tokens) as primary theming mechanism
- Multiple animation types (keyframe, transition, Vue transition)
- Box-shadow for glow effects (multiple sizes)
- Background layers (dot grid + scanline overlay)
- Responsive design (mobile-first, breakpoints in Tailwind)

**Animation complexity:**
- 4 distinct animation types across components
- Expand/collapse needs Vue Transition with max-height trick
- Cursor blink uses CSS animation with `::after` pseudo-element
- Glow pulse is subtle (not jarring) — timing matters

---

## recommended_wave_count: 4

Wave 1 (Foundation — sequential, must complete before others):
- style.css, index.html, App.vue
- Estimated: ~100 lines CSS, ~5 lines HTML
- Dependency: all other waves

Wave 2 (Hero & Skills — parallel, both use Wave 1 tokens):
- SiteHeader.vue, HeroSection.vue, SkillsSection.vue
- Estimated: ~280 lines CSS (largest wave)
- Dependencies: Wave 1 complete

Wave 3 (Main Sections — parallel, both need Vue transitions):
- FeaturesSection.vue, PortfolioSection.vue
- Estimated: ~200 lines CSS
- Dependencies: Wave 1 complete

Wave 4 (Supporting — parallel, smallest):
- AboutSection.vue, ContactSection.vue, SiteFooter.vue
- Estimated: ~120 lines CSS
- Dependencies: Wave 1 complete

---

## Dependencies

```
Wave 1 (Foundation)
    ├── style.css (CSS tokens + global styles)
    ├── index.html (fonts)
    └── App.vue (scanline + force dark)
            │
            ▼ (Wave 1 must complete)
Wave 2 ───┬─────────────────────────────────────────
  SiteHeader.vue  ──────────────────────────────────► Wave 3 ──► Wave 4
  HeroSection.vue ──► Wave 3 ──► Wave 4
  SkillsSection.vue
```

Key constraint: Wave 2, 3, 4 cannot start until Wave 1 (style.css, index.html, App.vue) is complete because they depend on CSS variables and font imports.

**No circular dependencies** — linear dependency chain from Wave 1 → Waves 2/3/4 in parallel.