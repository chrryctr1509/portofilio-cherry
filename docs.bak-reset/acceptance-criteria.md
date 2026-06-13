# Acceptance Criteria — Portfolio Redesign

**Pipeline:** BUILD / NEW_FEATURE
**Generated:** 2026-05-17

---

## Visual Checkpoints

| # | Checkpoint | Method |
|---|-----------|--------|
| AC1 | Global background is #0a0f0a with green dot grid pattern | Browser inspection |
| AC2 | Scanline overlay visible on entire page | Visual |
| AC3 | Nav links are muted gray → hover to #00ff88 with glow | Hover test |
| AC4 | Hero: status badge has green border + glow pulse animation | Visual + console |
| AC5 | Hero: name "Cherry Citra" rendered in #00ff88 or gradient green | Visual |
| AC6 | Hero: photo card has dark bg + green border + glow | Visual |
| AC7 | Hero: CTA buttons are transparent with green border (not filled) | Visual |
| AC8 | Skills: category labels uppercase mono green | Visual |
| AC9 | Skills: skill cards have dark bg + green border + hover glow | Hover test |
| AC10 | Features: "Professional Values" section is collapsible with arrow | Click test |
| AC11 | Features: expanded table has green header + terminal rows | Expand + visual |
| AC12 | Portfolio: "Featured Projects" section is collapsible | Click test |
| AC13 | Portfolio: table view shows project rows with stack badges | Expand + visual |
| AC14 | Portfolio: modal still works (filter + card + modal preserved) | Click test |
| AC15 | Contact: form fields have dark bg + green border | Visual |
| AC16 | Contact: submit button is green filled (not outline) | Visual |
| AC17 | Footer: 3-column dark layout with muted text | Visual |
| AC18 | Typography: JetBrains Mono used for code/badges/mono elements | Inspect |
| AC19 | Typography: Space Grotesk used for headings/body | Inspect |
| AC20 | No white/light backgrounds anywhere | Full page visual |
| AC21 | No Inter font visible anywhere | Inspect |

---

## Functional Checkpoints

| # | Checkpoint | Method |
|----|-----------|--------|
| FC1 | Dark mode toggle is removed or disabled | Visual |
| FC2 | Smooth scroll navigation still works | Click nav links |
| FC3 | Page transitions still work | Navigate pages |
| FC4 | Skills filter still works | Click filter buttons |
| FC5 | Portfolio filter + modal still works | Click filter + project card |
| FC6 | Form submission behavior unchanged | Submit test |
| FC7 | Mobile responsive layout preserved | Resize to mobile |
| FC8 | glfx photo effects still work (no change) | Visual photo |

---

## Build & Technical

| # | Checkpoint | Method |
|---|-----------|--------|
| TC1 | `npm run build` exits with code 0 | CLI |
| TC2 | No console errors on any page load | Browser console |
| TC3 | AboutSection is now visible on homepage | Navigate home |
| TC4 | All 11 files modified, no other files changed | git diff check |

---

## Out of Scope (should NOT change)

| Item | Expected State |
|------|---------------|
| Logic in composables | Unchanged |
| Router config | Unchanged |
| i18n content | Unchanged |
| Project/skill data | Unchanged |
| GLFX photo effects | Unchanged |
| Form submission API | Unchanged |