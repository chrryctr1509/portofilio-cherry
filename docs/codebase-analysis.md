# Codebase Analysis — vue_js_cherry

## 1. Current Design System

### Colors (Tailwind v4 CSS variables — `src/style.css`)
| Token | Hex | Role |
|---|---|---|
| `--color-brand-50` | `#f0fdf4` | Light tint |
| `--color-brand-100` | `#dcfce7` | Light tint |
| `--color-brand-200` | `#bbf7d0` | Light tint |
| `--color-brand-300` | `#86efac` | Light tint |
| `--color-brand-400` | `#4ade80` | Light |
| `--color-brand-500` | `#22c55e` | **Primary brand** (emerald-500) |
| `--color-brand-600` | `#16a34a` | Primary dark |
| `--color-brand-700` | `#15803d` | Dark |
| `--color-brand-800` | `#166534` | Darker |
| `--color-brand-900` | `#14532d` | Darkest |

- Text: slate-900 (light) / white (dark)
- Borders: `#e2e8f0` (slate-200)
- Surface light: white / slate-50
- Surface dark: slate-950 / slate-900
- Accent greens: emerald-500 primary, `#25D366` WhatsApp button

### Typography
- Font: **Inter** (Google Fonts) — weights 400–900
- Configured in `src/style.css` via `@theme --font-sans`
- Loaded in `index.html` via `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap`
- Heading: `font-black`, `tracking-tight`, scale `text-4xl` → `text-7xl`
- Body: `text-base` to `text-lg`, line-height `leading-relaxed`

### Spacing & Layout
- Container max: `--container: 64rem` (1024px equivalent)
- Section padding: `py-24 lg:py-32`, `px-6 lg:px-8`
- Grid: `max-w-6xl`, `max-w-7xl`, `max-w-4xl` variants per section
- Card radius: `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Border: `border-1.5` to `border-2`

### Dark Mode
- Class-based (`dark` on `<html>`)
- Flash prevention via inline script in `index.html`
- All components use `dark:` Tailwind variants
- Dark surfaces: `bg-slate-950`, `bg-slate-900`, `bg-slate-800`
- Dark borders: `border-slate-700`, `border-slate-800`, `rgba(255,255,255,0.08)`

---

## 2. Component Structure + Dependencies

### Component Tree
```
App.vue
├── SiteHeader.vue        (scroll detection, theme toggle, mobile menu)
├── Home.vue
│   ├── HeroSection.vue        (typed text, glfx canvas, stats, socials)
│   ├── FeaturesSection.vue   (6 expertise cards, gradient icons)
│   ├── SkillsSection.vue     (3 groups, tech icons from CDN, entrance anim)
│   ├── PortfolioSection.vue  (filter + modal, inline data)
│   └── ContactSection.vue    (WhatsApp CTA, quick contact chips)
└── SiteFooter.vue        (brand, nav links, contact info, socials)
```

### No `AboutSection.vue` in tree — but file exists (`src/components/AboutSection.vue`)
- File contains different content than referenced (about the developer, not the portfolio owner)
- **Not imported in `Home.vue`** — dead code

### Key Scopes
- **HeroSection.vue** — self-contained (typed text loop, glfx library dynamic import, social links, stats)
- **SkillsSection.vue** — hardcoded `skillGroups` data inline (not from external file)
- **PortfolioSection.vue** — hardcoded `projects` array inline (not from `src/data/projects.js`)
- **FeaturesSection.vue** — hardcoded `features` array inline

### Inter-component Communication
- `useTheme()` composable shared across `SiteHeader.vue`, `App.vue`
- Route-driven layout hiding for `/login` path (dead code — no login route defined)

---

## 3. Data Files

| File | Contents | Used By |
|---|---|---|
| `src/data/projects.js` | 4 projects with `localeKey`, category, image, tags | **NOT imported** anywhere — dead file |
| `SkillsSection.vue` | `skillGroups` — 3 groups (Frontend, Backend, DB), 10 skills total | Inline only |
| `PortfolioSection.vue` | `projects` array — 4 projects with full specs | Inline only |
| `FeaturesSection.vue` | `features` — 6 expertise items | Inline only |

### Dead Data: `src/data/projects.js`
Exports `projectsData` array matching what `PortfolioSection.vue` duplicates inline. Recommendation: deduplicate by importing from this file.

---

## 4. Routing Structure

```js
// src/router/index.js
routes: [
  { path: "/", name: "home", component: Home },
  { path: "/:pathMatch(.*)*", redirect: "/" }  // wildcard → home
]
```

- Single page app, no nested routes
- `/login` path checked in `App.vue` to hide layout (dead code)
- Vue Router 4 with `createWebHistory` (HTML5 history mode)
- `scroll-behavior: smooth` via CSS on `html`

---

## 5. State Management (Composables)

| Composable | File | State | Actions |
|---|---|---|---|
| `useTheme` | `src/composables/useTheme.js` | `theme` ref (`'light'`/`'dark'`) | `toggleTheme()` — writes localStorage + toggles `.dark` class on `<html>` |

No Pinia, no Vuex. Single composable for the only shared state.

---

## 6. Animations & Transitions

| Animation | Type | Location |
|---|---|---|
| Page loader spinner + bounce dots | CSS keyframes | `App.vue` `<style scoped>` |
| Page transition | Vue `Transition name="page"` | `App.vue` — fade + translateY |
| Skills entrance | CSS class toggle (`opacity-0 translate-y-4` → `opacity-100 translate-y-0`) | `SkillsSection.vue` |
| Typed text + caret blink | JS setTimeout loop | `HeroSection.vue` |
| glfx canvas effects | `requestAnimationFrame` + glfx library | `HeroSection.vue` (graceful fallback to static img) |
| Project card hover | CSS `translateY(-2px)` + shadow | `PortfolioSection.vue` `<style scoped>` |
| Modal scale + fade | Vue `Transition name="modal-scale/fade"` | `PortfolioSection.vue` |
| Mobile menu slide | Vue `Transition name="menu-slide"` | `SiteHeader.vue` |
| Scroll-aware header | JS scroll listener → class toggle | `SiteHeader.vue` |
| Skills entrance | CSS class toggle with transition-delay per item | `SkillsSection.vue` |

---

## 7. Key Files for Full CSS Redesign

Priority-ordered by impact and coupling:

### Critical (global impact)
1. **`src/style.css`** — design token definitions (`@theme`), scrollbar, focus-visible, dark mode variant
2. **`index.html`** — font loading, dark mode flash-prevention script, meta/SEO

### High (large components with extensive scoped styles)
3. **`src/App.vue`** — page loader styles, page transition
4. **`src/components/SiteHeader.vue`** — nav pills, theme button, mobile menu
5. **`src/components/SiteFooter.vue`** — social button styles
6. **`src/components/HeroSection.vue`** — typed text, photo card, CTAs, social icon hover
7. **`src/components/SkillsSection.vue`** — skill item cards, icon wrappers, entrance animation
8. **`src/components/PortfolioSection.vue`** — project card, modal, filter buttons, tag chips

### Medium (moderate style surface)
9. **`src/components/FeaturesSection.vue`** — feature cards, gradient icons, hover states
10. **`src/components/ContactSection.vue`** — WhatsApp button, contact chips

### Low / Dead Code
11. **`src/components/AboutSection.vue`** — not imported anywhere; full redesign candidate or deletion
12. **`src/data/projects.js`** — dead (not imported anywhere)

### Structural / No Style
- **`src/router/index.js`** — no style changes needed
- **`src/composables/useTheme.js`** — behavior only, no styles
- **`src/views/Home.vue`** — import statements only, no styles
- **`vite.config.js`** — proxy config, no redesign impact

---

## 8. Additional Observations

### glfx library
`HeroSection.vue` dynamically imports `glfx` (canvas image effects library). It gracefully degrades if unavailable. This is an unusual dependency for a static portfolio — consider if the effect is production-critical.

### Category mismatch
`src/data/projects.js` uses `localeKey` + `localeKey` pattern (i18n placeholder), but `PortfolioSection.vue` uses hardcoded English text. The `localeKey` field in `projects.js` is unused.

### AboutSection.vue content conflict
`AboutSection.vue` references "We", "Our", "Team Members", "years of excellence" — suggests it was copy-pasted from a team/agency template. `Home.vue` does not import it. It should be either removed or replaced with personal content for Cherry.

### Scroll behavior
Smooth scroll handled via `scroll-behavior: smooth` in CSS + JS `scrollIntoView({behavior:'smooth'})` in some components. Consistent approach already in place.

### No build-time optimization
`vite.config.js` includes a proxy for `/api` targeting `VITE_API_URL` — useful infrastructure for future backend integration, currently unused.

---

## Summary: Redesign Surface

| Scope | Files | Est. CSS Lines |
|---|---|---|
| Global tokens | `style.css` | ~75 |
| Root/app shell | `App.vue`, `index.html` | ~70 |
| Header + Footer | `SiteHeader.vue`, `SiteFooter.vue` | ~120 |
| Hero | `HeroSection.vue` | ~80 |
| Skills | `SkillsSection.vue` | ~90 |
| Portfolio + Modal | `PortfolioSection.vue` | ~180 |
| Features | `FeaturesSection.vue` | ~30 |
| Contact | `ContactSection.vue` | ~55 |
| **Total scoped CSS** | | **~700 lines** |
| Dead/removable | `AboutSection.vue`, `src/data/projects.js` | — |