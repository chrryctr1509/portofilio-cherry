# Deliberation — Portfolio Redesign Pipeline

**Generated:** 2026-05-17
**Pipeline:** BUILD / NEW_FEATURE
**Scope:** Full visual redesign → dark terminal aesthetic

---

## Requirements Analysis (from brief + codebase)

| Item | Status | Notes |
|------|--------|-------|
| CSS tokens in @theme | ⚠️ | Tailwind v4 — must use @theme block, not tailwind.config.js |
| Google Fonts injection | ⚠️ | JetBrains Mono + Space Grotesk — add to index.html |
| Force dark mode | ✅ | main.js single line addition |
| Scanline overlay | ✅ | Fixed CSS overlay in App.vue |
| Dot grid background | ✅ | CSS background-image radial-gradient |
| SiteHeader dark nav | ✅ | CSS variable swaps |
| HeroSection full rework | ✅ | Card, badge, CTA, photo frame |
| SkillsSection dark cards | ✅ | Grid + glow hover |
| FeaturesSection collapsible | ✅ | Vue transition expand/collapse + table |
| PortfolioSection table view | ⚠️ | Keep modal + add table — dual view |
| AboutSection 2-col grid | ✅ | Dead component — must import in Home.vue first |
| ContactSection dark form | ✅ | Form fields + submit button |
| SiteFooter 3-col | ✅ | Dark bg + social icons |

---

## Risk Flags

### 1. Tailwind v4 @theme Conflicts
**Risk:** Existing style.css has custom CSS vars + @theme block. New tokens must be added to @theme, not CSS vars directly.
**Mitigation:** fe-developer reads .claude/skills/vue-conventions.md + tailwind v4 docs. Use @theme block throughout.

### 2. AboutSection.vue is Dead Code
**Risk:** Component exists but not imported in Home.vue.
**Mitigation:** In Wave 1, verify Home.vue imports AboutSection first. If not, add import alongside redesign.

### 3. glfx Photo Effects
**Risk:** Photo in HeroSection has glfx canvas effects. Dark frame may clash with existing effect colors.
**Mitigation:** Only change card/frame CSS — do NOT touch glfx effect code. Test photo visibility on dark bg.

### 4. Icon Visibility on Dark BG
**Risk:** Devicon icons (CSS-based) may be invisible on dark backgrounds.
**Mitigation:** Add `filter: brightness(1.2)` to icon elements in SkillsSection.

### 5. Fonts Async Loading
**Risk:** Google Fonts loads async → flash of unstyled fallback.
**Mitigation:** Use `display=swap` in font URL (already in brief). Accept FOUT as minor.

---

## Pre-Mortem

| Scenario | Likelihood | Mitigation |
|----------|-----------|-----------|
| fe-developer spills outside wave scope (edits data/logic) | Medium | Clear OUT OF SCOPE list in prompt |
| Tailwind v4 @theme token syntax wrong | Medium | Pre-generate ready-to-paste tokens in design-direction.md |
| AboutSection not imported → design changes invisible | Low | Wave 1 check + fix import first |
| Icons too dark on dark bg | Low | Add brightness filter as part of wave |
| Build passes but browser looks broken | Low | Phase 4 Playwright verification |

---

## Open Questions (resolved)

| Question | Resolution |
|----------|-----------|
| AboutSection not imported? | Add import to Home.vue in Wave 1 |
| Data files change? | No — data stays as-is |
| GLFX effects? | No — photo card only, not effects |
| i18n needed? | No — redesign is visual only |

---

## Scope Completeness Check

- Input items: 11 files + global styles + fonts
- All items matched in codebase analysis: ✅
- AboutSection found but dead: ✅ (will activate + redesign)
- No unmatched items

**Ready for planning: YES**