# Parsed Brief — Cherry Citra Portfolio Redesign
generated_at: 2026-05-17T21:48+07:00

## Feature Breakdown (Per Component)

### Foundation Files
| File | Changes | Priority |
|------|---------|----------|
| `src/style.css` | Add dark terminal CSS variables, dot grid bg, scanline, animations | P0 (must first) |
| `src/App.vue` | Add scanline overlay div, force dark class on mount | P0 |
| `index.html` | Add JetBrains Mono + Space Grotesk fonts, remove Inter | P0 |
| `src/components/SiteHeader.vue` | Dark bg, green nav links, >_ logo prefix, dark toggle | P1 |
| `src/components/SiteFooter.vue` | 3-col dark layout, muted text, green hover links | P4 |

### Hero & Skills (Wave 2)
| File | Changes | Priority |
|------|---------|----------|
| `src/components/HeroSection.vue` | Status badge (green border+glow), photo card dark frame+glow, CTA dark buttons, preserve typing animation + GLFX | P2 |
| `src/components/SkillsSection.vue` | Dark grid cards, green borders, hover glow, filter:brightness on icons | P2 |

### Main Sections (Wave 3)
| File | Changes | Priority |
|------|---------|----------|
| `src/components/FeaturesSection.vue` | Collapsible panel, "HOW I BUILD SOFTWARE" table, expand/collapse transition | P3 |
| `src/components/PortfolioSection.vue` | Keep modal + add expandable table view, green table styling | P3 |

### Supporting (Wave 4)
| File | Changes | Priority |
|------|---------|----------|
| `src/components/AboutSection.vue` | 2-col grid principles, no cards, bullet list style | P4 |
| `src/components/ContactSection.vue` | Dark form inputs, green focus glow, submit button dark green | P4 |

---

## Technical Requirements

### CSS Variables (Design Tokens)
```css
:root {
  --bg-primary: #0a0f0a;
  --bg-secondary: #0d1a0d;
  --bg-card: #0f1f0f;
  --bg-card-hover: #142414;
  --border-default: rgba(34, 197, 94, 0.15);
  --border-accent: rgba(34, 197, 94, 0.4);
  --border-glow: rgba(74, 222, 128, 0.6);
  --text-primary: #e2ffe2;
  --text-secondary: #94a3b8;
  --text-muted: #4a6b4a;
  --accent-green: #00ff88;
  --accent-green-soft: #22c55e;
  --accent-yellow: #fbbf24;
  --glow-sm: 0 0 8px rgba(34, 197, 94, 0.3);
  --glow-md: 0 0 20px rgba(34, 197, 94, 0.2);
  --glow-lg: 0 0 40px rgba(34, 197, 94, 0.15);
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
}
```

### Animations Required
1. **Cursor blink** — `@keyframes cursor-blink` 1s infinite, `|>` or `▊` char
2. **Glow pulse** — badge status pulsing box-shadow
3. **Expand/collapse** — Vue `<Transition name="expand">` with max-height 0→1000px, 0.3s ease
4. **Card hover glow** — `translateY(-2px)` + border glow on hover

### Fonts (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Dark Mode
Force: `document.documentElement.classList.add('dark')` in `main.js` — permanent, no toggle.

---

## Acceptance Criteria (Per Component)

### style.css
- [ ] All CSS variables defined and consumed by components
- [ ] Dot grid pattern background on body
- [ ] Scrollbar styled for dark theme
- [ ] All Tailwind v4 `@theme` tokens updated for dark palette

### App.vue
- [ ] Scanline overlay div present (fixed, inset 0, pointer-events none, z-9999)
- [ ] Dark class forced on mount
- [ ] Page loader updated to dark theme (optional but nice)

### SiteHeader.vue
- [ ] Logo has `>_` prefix or blinking cursor
- [ ] Nav links: `#94a3b8` default, `#00ff88` on hover with glow
- [ ] Background: `rgba(10,15,10,0.95)` + `backdrop-blur-md`
- [ ] Border bottom: `1px solid rgba(34,197,94,0.2)`

### HeroSection.vue
- [ ] Status badge: green border, `#22c55e` text, glow pulse animation, ping dot
- [ ] Name text: `#00ff88` or green gradient
- [ ] CTA primary: transparent bg, green border, green text, hover glow
- [ ] CTA secondary: transparent bg, white muted border
- [ ] Photo card: dark bg, green border, green glow shadow
- [ ] Social icons shown in photo card strip
- [ ] Typing animation preserved
- [ ] GLFX effect frame updated (dark card instead of light)

### SkillsSection.vue
- [ ] Category labels: uppercase, `#22c55e`, monospace, small
- [ ] Skill cards: dark bg, green border, hover glow effect
- [ ] Icons: `filter: brightness(1.2)` or `brightness(1.5)` for visibility
- [ ] Grid layout preserved (responsive)

### FeaturesSection.vue
- [ ] Clickable header "🎯 Professional Values — click to expand"
- [ ] Expand/collapse transition works (Vue Transition)
- [ ] Expanded table: "HOW I BUILD SOFTWARE" with 6 rows
- [ ] Table styling: green header, muted cells, green borders

### PortfolioSection.vue
- [ ] Keep existing modal behavior (no changes to modal)
- [ ] Add expandable table view above/below cards
- [ ] Table: `#` col muted, title+emoji bold white, desc muted, stack as green badges
- [ ] Table header: `#22c55e`, green border bottom
- [ ] Expand trigger: "🚀 Featured Projects — click to expand"

### AboutSection.vue
- [ ] 4 principles in 2-column grid
- [ ] Label: white bold, description: muted green
- [ ] No cards, no borders — clean list style with `•` bullets

### ContactSection.vue
- [ ] Form inputs: dark bg `rgba(15,31,15,0.8)`, green border
- [ ] Focus: green glow ring
- [ ] Placeholder: `#4a6b4a`
- [ ] Submit button: `#22c55e` bg, dark text
- [ ] Social icons: GitHub, LinkedIn, WhatsApp below form

### SiteFooter.vue
- [ ] Background: `#050a05` (darker than main)
- [ ] 3-col layout: Logo+desc | Nav | Contact
- [ ] Text muted, links green on hover
- [ ] Copyright text

---

## Ambiguities Detected

1. **AboutSection.vue — dead component**: Not imported in Home.vue. Redesign or remove?
   → Decision: Redesign as part of Wave 4, update content to personal ("I" not "We")

2. **FeaturesSection.vue — expand trigger**: Click on header only, or full row?
   → Decision: Header click only (standard UX pattern)

3. **PortfolioSection.vue — table position**: Above cards or replace cards?
   → Decision: Add as alternative view (table first, then grid cards below it)

4. **AboutSection.vue — content**: Current content is agency-template leftovers. Real content needed.
   → Decision: Use 4 principles from the brief's vision, no lorem ipsum

---

## Priority Order (Wave Execution)

Wave 1 (Foundation — must complete first):
1. src/style.css
2. index.html
3. src/App.vue

Wave 2 (Hero & Skills):
4. src/components/SiteHeader.vue
5. src/components/HeroSection.vue
6. src/components/SkillsSection.vue

Wave 3 (Main Sections):
7. src/components/FeaturesSection.vue
8. src/components/PortfolioSection.vue

Wave 4 (Supporting):
9. src/components/AboutSection.vue
10. src/components/ContactSection.vue
11. src/components/SiteFooter.vue