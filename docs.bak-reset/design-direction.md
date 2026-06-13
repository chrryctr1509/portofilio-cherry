# Design Direction — GitHub 2-Panel Layout

> Replacing dark terminal aesthetic with GitHub Profile page layout.

---

## 1. Color Palette

```css
/* GitHub Dark Palette */
:root {
  --gh-bg:          #0D1117;   /* page background */
  --gh-surface:     #161B22;   /* header, about card bg */
  --gh-card:        #21262D;   /* collapsible header, edit button */
  --gh-border:      #30363D;   /* all borders */
  --gh-text:        #E6EDF3;   /* primary text */
  --gh-muted:       #8B949E;   /* secondary text */
  --gh-subtle:       #484F58;   /* dividers, hints */

  /* Accents */
  --accent-purple:  #7C3AED;
  --accent-purple2: #A78BFA;   /* headings, links, active states */
  --accent-green:   #059669;
  --accent-green2:  #34D399;
  --accent-blue:     #1F6FEB;
  --accent-amber:    #F59E0B;
}

/* Body */
body {
  background-color: #0D1117 !important;
  color: #E6EDF3 !important;
}
```

---

## 2. Layout System

### 2-Panel Grid
```css
.gh-layout {
  display: grid;
  grid-template-columns: 296px 1fr;
  gap: 0;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px;
  align-items: start;
  min-height: 100vh;
}

.gh-main {
  padding-left: 24px;
}

.gh-divider {
  height: 1px;
  background: #21262D;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .gh-layout {
    grid-template-columns: 1fr;
    padding: 16px;
  }
  .gh-main {
    padding-left: 0;
    padding-top: 24px;
  }
}
```

### Top Bar (GitHubHeader)
- Background: `#161B22`
- Border-bottom: `1px solid #30363D`
- Height: 62px, sticky top
- Logo: GitHub octicon SVG + username text

### Sidebar (GithubSidebar)
- Width: 296px fixed
- Position: sticky, top: 24px
- Contents: avatar circle, name, username, bio, edit button, stats, location, GitHub link, achievements

---

## 3. Typography

**Fonts:** Inter + JetBrains Mono (Google Fonts)

| Element | Font | Weight | Color |
|---------|------|--------|-------|
| Name | Inter | 600 | `#E6EDF3` |
| Username | Inter | 300 | `#8B949E` |
| Bio | Inter | 400 | `#E6EDF3` |
| Section headings | Inter | 600 | `#E6EDF3` |
| Body text | Inter | 400 | `#E6EDF3` |
| Muted text | Inter | 400 | `#8B949E` |
| Labels, table headers | JetBrains Mono | 600 | `#A78BFA` |
| Code, mono text | JetBrains Mono | 400 | `#8B949E` |

---

## 4. Collapsible Pattern (shared)

```css
.gh-collapsible {
  background: transparent;
  border: 1px solid #30363D;
  border-radius: 6px;
  margin-bottom: 16px;
  overflow: hidden;
}

.gh-collapsible-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9375rem;
  color: #E6EDF3;
  user-select: none;
  transition: background 150ms;
}
.gh-collapsible-header:hover { background: #161B22; }

.gh-expand-hint {
  color: #A78BFA;
  font-weight: 400;
  font-size: 0.8125rem;
}

.gh-chevron {
  margin-left: auto;
  color: #8B949E;
  font-size: 0.75rem;
  transition: transform 250ms ease;
  display: inline-block;
}
.gh-chevron.open { transform: rotate(90deg); }

.gh-collapsible-body {
  padding: 16px;
  border-top: 1px solid #30363D;
}
```

**Vue transition:**
```css
.expand-enter-active, .expand-leave-active {
  transition: opacity 0.25s ease, max-height 0.3s ease;
  overflow: hidden;
  max-height: 2000px;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
}
```

---

## 5. Buttons

```css
.gh-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 150ms;
  cursor: pointer;
}
.gh-btn-primary {
  background: #7C3AED;
  color: #fff;
  border: 1px solid #6D28D9;
}
.gh-btn-primary:hover { background: #6D28D9; }
.gh-btn-ghost {
  background: transparent;
  color: #E6EDF3;
  border: 1px solid #30363D;
}
.gh-btn-ghost:hover { background: #21262D; }
```

---

## 6. HeroSection Layout (README Panel)

```
┌──────────────────────────────────────────────────┐
│ Banner gradient dark purple (#0F0C29 → #302B63)  │
│  Cherry Citra Cahyaning  (centered, white, 2.25rem)│
│  Fullstack Developer • AI Engineer • Architect    │
│  (purple text, centered)                         │
└──────────────────────────────────────────────────┘
│  Typing animation (purple caret)                 │
│  Badges row (4 shield.io images, centered)       │
│  [📧 Gmail] [⭐ GitHub] (CTA buttons)            │
└──────────────────────────────────────────────────┘
```

**Banner style:**
```css
.gh-hero-banner {
  background: linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%);
  border-radius: 6px;
  padding: 40px 24px;
  text-align: center;
  margin-bottom: 24px;
  border: 1px solid #30363D;
}
```

**Typing:**
- Font: JetBrains Mono
- Color: `#A78BFA`
- Roles: Building Intelligent Systems, Crafting Scalable Architectures, Turning Ideas into Products, Open for Freelance

---

## 7. Component Map

| Component | What it becomes |
|-----------|----------------|
| SiteHeader.vue | REMOVE (replaced by GithubHeader.vue) |
| SiteFooter.vue | REMOVE (no footer in GitHub layout) |
| HeroSection.vue | README hero: banner + typing + badges + CTA |
| FeaturesSection.vue | About Me 2-col: text+table left, GIF right |
| SkillsSection.vue | Single gh-collapsible with skillicons.dev |
| PortfolioSection.vue | Add collapsible table ABOVE existing content |
| AboutSection.vue | 2 gh-collapsibles: GitHub stats + achievements |
| ContactSection.vue | "Let's Build Something Together" centered CTA |
| Home.vue | .gh-layout grid, imports all sections |

**New components:**
- `GithubSidebar.vue` — sticky 296px sidebar
- `GithubHeader.vue` — slim 62px top bar

---

## 8. Forbidden Patterns

- ❌ ANY terminal aesthetic (green glow, dot grid, scanlines) — this is a DIFFERENT design
- ❌ SiteHeader or SiteFooter
- ❌ GLFX photo effects in HeroSection (photo moves to sidebar)
- ❌ Emerald/green color scheme
- ❌ Card dark styling from previous redesign
- ❌ Scanline overlay

**CORRECT:** GitHub dark palette (#0D1117), purple accents, JetBrains Mono for mono, Inter for body