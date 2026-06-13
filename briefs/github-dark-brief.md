# 🎨 Redesign Brief — GitHub Dark Mode + Mobile Bottom Nav

---

## 1. CONTEXT & GOAL

Project: Cherry Citra Portfolio (Vue 3 + Vite + Tailwind CSS v4)

**Goal redesign:**
- Ubah tampilan menjadi **GitHub.com Dark Mode** style
- Clean, professional, dark gray background
- **Mobile: bottom navigation bar** (seperti app mobile)

---

## 2. DESIGN TOKENS (CSS Variables)

Tambahkan di `src/style.css`:

```css
:root {
  /* GitHub Dark Mode Theme */
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --bg-tertiary: #21262d;
  --bg-card: #161b22;
  --bg-elevated: #1c2128;

  --border-default: #30363d;
  --border-muted: #21262d;
  --border-accent: #58a6ff;

  --text-primary: #e6edf3;
  --text-secondary: #8b949e;
  --text-muted: #6e7681;

  --accent-blue: #58a6ff;
  --accent-green: #3fb950;
  --accent-purple: #bc8cff;
  --accent-orange: #f0883e;
  --accent-red: #f85149;

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## 3. GLOBAL STYLES

```css
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
}

/* Card */
.card-dark {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: 6px;
}

/* GitHub-like shadows */
.shadow-sm { box-shadow: 0 1px 0 rgba(27,31,36,0.04); }
.shadow-md { box-shadow: 0 3px 6px rgba(140,146,153,0.15); }
```

---

## 4. KOMPONEN YANG HARUS DIUBAH

### 4.1 `SiteHeader.vue` → Desktop Only
- Background: `var(--bg-secondary)` + `border-bottom: 1px solid var(--border-default)`
- Logo: bold, putih
- Nav links: hover → `color: var(--text-primary)`
- Active: `color: var(--text-primary)` + `border-bottom: 2px solid var(--accent-orange)`

### 4.2 `MobileBottomNav.vue` — NEW COMPONENT
Bottom nav untuk mobile (handphone):
```html
<nav class="bottom-nav">
  <a href="#" class="nav-item active">
    <span class="nav-icon">🏠</span>
    <span class="nav-label">Home</span>
  </a>
  <a href="#" class="nav-item">
    <span class="nav-icon">🛠️</span>
    <span class="nav-label">Projects</span>
  </a>
  <a href="#" class="nav-item">
    <span class="nav-icon">📂</span>
    <span class="nav-label">Skills</span>
  </a>
  <a href="#" class="nav-item">
    <span class="nav-icon">💬</span>
    <span class="nav-label">Contact</span>
  </a>
</nav>
```

**Style:**
- Position: `fixed`, bottom: 0, left: 0, right: 0
- Background: `var(--bg-secondary)` + `border-top: 1px solid var(--border-default)`
- Height: ~60px
- 4 items: Home | Projects | Skills | Contact
- Active: icon `var(--accent-blue)`, label `var(--accent-blue)`
- Inactive: icon & label `var(--text-muted)`
- Icon size: 24px, label: 10px
- Safe area: `padding-bottom: env(safe-area-inset-bottom)`

### 4.3 `HeroSection.vue`
- Avatar card: rounded, border `var(--border-default)`, no glow
- Name: bold, putih besar
- Badge available: green dot + text `var(--accent-green)`
- Role text: `var(--text-secondary)`
- Description: `var(--text-muted)`
- CTA buttons: outline style, border `var(--border-default)`, hover → `var(--accent-blue)`

### 4.4 `SkillsSection.vue`
- Section heading: uppercase, `var(--text-muted)`, font-mono
- Cards: `card-dark` style, `border-radius: 6px`
- Grid: 2-3 columns, gap 12px
- Icon: white/light, size ~32px
- Skill name: `var(--text-primary)`, bold
- Meta: `var(--text-muted)`

### 4.5 `FeaturesSection.vue`
- Heading: bold, white
- Collapsible panel (click to expand)
- Table style: header `var(--text-muted)`, rows `var(--border-default)` separators
- Icon emoji + bold label + description muted

### 4.6 `PortfolioSection.vue`
- Heading: bold, white
- Expandable table layout
- Row hover: `background: var(--bg-tertiary)`
- Stack badges: small pills, border `var(--border-muted)`, text `var(--accent-blue)`

### 4.7 `AboutSection.vue`
- 2-column grid for principles
- Label: bold, white
- Description: `var(--text-muted)`

### 4.8 `ContactSection.vue`
- Input fields: `background: var(--bg-tertiary)`, border `var(--border-default)`, text white
- Focus: border `var(--accent-blue)`
- Submit button: `background: var(--accent-blue)`, text dark
- Social icons: hover → `var(--accent-blue)`

### 4.9 `SiteFooter.vue`
- Background: `var(--bg-secondary)`
- Border top: `var(--border-default)`
- 3-column layout
- Text muted, links hover → `var(--text-primary)`

---

## 5. TYPOGRAPHY

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 6. RESPONSIVE BREAKPOINTS

```css
/* Desktop: header visible, no bottom nav */
@media (min-width: 768px) {
  .bottom-nav { display: none; }
  .site-header { display: flex; }
}

/* Mobile: bottom nav visible, header hidden */
@media (max-width: 767px) {
  .bottom-nav { display: flex; }
  .site-header { display: none; }
  body { padding-bottom: 70px; }
}
```

---

## 7. WAVE PLAN

**Wave 1 — Foundation**
1. `src/style.css` — CSS variables + global styles + responsive
2. `src/App.vue` — layout wrapper, mobile nav placeholder
3. `index.html` — Google Fonts import
4. `MobileBottomNav.vue` — NEW component

**Wave 2 — Content Sections**
5. `HeroSection.vue` — dark card, avatar
6. `SkillsSection.vue` — card grid
7. `FeaturesSection.vue` — collapsible
8. `PortfolioSection.vue` — expandable table

**Wave 3 — Supporting**
9. `AboutSection.vue` — principles grid
10. `ContactSection.vue` — dark form
11. `SiteFooter.vue` — dark footer

---

## 8. OUT OF SCOPE

- Logic Vue (composables, router, i18n)
- Data/content (nama, projects, skills)
- Form functionality
- GLFX photo effect