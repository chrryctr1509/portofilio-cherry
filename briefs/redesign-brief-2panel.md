# 🎨 Design Brief — GitHub 2-Panel Layout Portfolio
> Simpan ke `docs/design-direction.md` lalu jalankan prompt di bagian bawah

---

## 1. VISION

Ubah layout website menjadi **2-panel persis seperti GitHub Profile page**:
- **Panel KIRI (sidebar ~25%)** — Foto profil bulat + nama + bio + info + achievements
- **Panel KANAN (konten ~75%)** — README-style: banner, typing, badges, About, collapsible sections

Background global: `#0D1117` (GitHub dark)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Header/Navbar — opsional slim bar]                                │
├───────────────────┬─────────────────────────────────────────────────┤
│                   │  ╔═════════════════════════════════════╗        │
│  [Foto bulat]     │  ║  Cherry Citra Cahyaning  (banner)   ║        │
│                   │  ║  Fullstack • AI • Architect          ║        │
│  Cherry Citra     │  ╚═════════════════════════════════════╝        │
│  Cahyaning        │                                                  │
│  chrryctr1509     │  Crafting...  (typing animation)                │
│  he/him           │  [Badges row]                                   │
│                   │  [Gmail btn] [GitHub btn]                       │
│  [Bio text]       │  ─────────────────────────────────────         │
│                   │  👋 About Me     [GIF]                          │
│  [Edit profile]   │  table expertise...                             │
│                   │  ─────────────────────────────────────         │
│  8 followers      │  ▶ 🛠️ Tech Stack — click to expand             │
│  8 following      │  ▶ 🚀 Featured Projects — click to expand      │
│                   │  ▶ 📊 GitHub Statistics — click to expand      │
│  📍 Indonesia     │  ▶ 🏆 Achievements — click to expand           │
│  🔗 github link   │  ▶ 🎯 Professional Values — click to expand    │
│                   │  ─────────────────────────────────────         │
│  Achievements     │  📬 Let's Build Something Together              │
│  [🏅][🏅][🏅][🏅] │  [Send Email] [View GitHub]                    │
│                   │                                                  │
└───────────────────┴─────────────────────────────────────────────────┘
```

---

## 2. ARSITEKTUR KOMPONEN BARU

### Hapus SiteHeader.vue dari layout (atau buat sangat tipis/tersembunyi)
GitHub tidak punya navbar besar. Cukup slim bar atas dengan GitHub logo style.

### Buat komponen baru: `GithubSidebar.vue`
Komponen sidebar kiri yang berisi semua info profil.

### Ubah `src/views/Home.vue` menjadi 2-column layout:
```vue
<template>
  <div class="gh-layout">
    <GithubSidebar />
    <main class="gh-main">
      <HeroSection />
      <div class="gh-divider" />
      <FeaturesSection />   <!-- About Me table -->
      <div class="gh-divider" />
      <SkillsSection />     <!-- Collapsible -->
      <PortfolioSection />  <!-- Collapsible -->
      <StatsSection />      <!-- Collapsible — BARU atau AboutSection diubah -->
      <ValuesSection />     <!-- Collapsible -->
      <ContactSection />    <!-- Let's Build CTA -->
    </main>
  </div>
</template>
```

---

## 3. CSS VARIABLES & GLOBAL — `src/style.css`

Tambahkan/ganti:

```css
/* Tambah di @theme block atau :root */
:root {
  --gh-bg:          #0D1117;
  --gh-surface:     #161B22;
  --gh-card:        #21262D;
  --gh-border:      #30363D;
  --gh-text:        #E6EDF3;
  --gh-muted:       #8B949E;
  --gh-subtle:      #484F58;

  --accent-purple:  #7C3AED;
  --accent-purple2: #A78BFA;
  --accent-green:   #059669;
  --accent-green2:  #34D399;
  --accent-blue:    #1F6FEB;
  --accent-amber:   #F59E0B;

  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

body {
  background-color: #0D1117 !important;
  color: #E6EDF3 !important;
}

/* 2-panel layout */
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

/* Collapsible pattern — shared */
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

/* Expand/collapse Vue transition */
.expand-enter-active, .expand-leave-active {
  transition: opacity 0.25s ease, max-height 0.3s ease;
  overflow: hidden;
  max-height: 2000px;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
}

/* Responsive — mobile: stack vertically */
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

---

## 4. BUAT KOMPONEN BARU: `src/components/GithubSidebar.vue`

Ini komponen sidebar kiri — **buat file baru**.

```vue
<script setup>
import { ref } from 'vue'

// Data (gunakan data yang sudah ada di project)
const profile = {
  name: 'Cherry Citra Cahyaning',
  username: 'chrryctr1509',
  pronouns: 'he/him',
  bio: 'Fullstack Developer & AI Engineer • Building scalable web apps & intelligent systems • Laravel · React · Node.js · OpenAI • Open for freelance collaboration',
  followers: 8,
  following: 8,
  location: 'Indonesia',
  githubUrl: 'https://github.com/chrryctr1509',
  photo: '/images/cherry.png',
}

const achievements = [
  { src: 'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png', label: 'Quickdraw' },
  { src: 'https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png', label: 'YOLO' },
  { src: 'https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png', label: 'Pull Shark' },
  { src: 'https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png', label: 'Starstruck' },
]
</script>

<template>
  <aside class="gh-sidebar">

    <!-- Avatar -->
    <div class="gh-avatar-wrap">
      <img :src="profile.photo" :alt="profile.name" class="gh-avatar" />
    </div>

    <!-- Name & Username -->
    <div class="gh-profile-info">
      <h1 class="gh-name">{{ profile.name }}</h1>
      <p class="gh-username">{{ profile.username }} <span class="gh-pronouns">{{ profile.pronouns }}</span></p>
    </div>

    <!-- Bio -->
    <p class="gh-bio">{{ profile.bio }}</p>

    <!-- Edit Profile Button (decorative) -->
    <button class="gh-edit-btn">Edit profile</button>

    <!-- Stats -->
    <div class="gh-stats">
      <a href="https://github.com/chrryctr1509?tab=followers" target="_blank" class="gh-stat-link">
        <svg class="gh-stat-icon" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
          <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"/>
        </svg>
        <strong>{{ profile.followers }}</strong> <span>followers</span>
      </a>
      <span class="gh-stat-sep">·</span>
      <a href="https://github.com/chrryctr1509?tab=following" target="_blank" class="gh-stat-link">
        <strong>{{ profile.following }}</strong> <span>following</span>
      </a>
    </div>

    <!-- Location -->
    <div class="gh-meta-list">
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"/>
        </svg>
        <span>{{ profile.location }}</span>
      </div>
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
        </svg>
        <a :href="profile.githubUrl" target="_blank" class="gh-link">{{ profile.githubUrl.replace('https://', '') }}</a>
      </div>
    </div>

    <!-- Achievements -->
    <div class="gh-achievements">
      <h3 class="gh-section-title">Achievements</h3>
      <div class="gh-achievement-grid">
        <div
          v-for="ach in achievements"
          :key="ach.label"
          class="gh-achievement-item"
          :title="ach.label"
        >
          <img :src="ach.src" :alt="ach.label" class="gh-achievement-img" />
        </div>
      </div>
    </div>

  </aside>
</template>

<style scoped>
.gh-sidebar {
  position: sticky;
  top: 24px;
  width: 296px;
}

/* Avatar */
.gh-avatar-wrap {
  margin-bottom: 16px;
}
.gh-avatar {
  width: 100%;
  max-width: 296px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid #30363D;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Name */
.gh-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #E6EDF3;
  line-height: 1.25;
  margin: 0 0 4px;
}
.gh-username {
  font-size: 1.25rem;
  color: #8B949E;
  margin: 0 0 16px;
  font-weight: 300;
}
.gh-pronouns {
  font-size: 0.8125rem;
  background: #21262D;
  border: 1px solid #30363D;
  border-radius: 20px;
  padding: 1px 6px;
  color: #8B949E;
  font-weight: 400;
}

/* Bio */
.gh-bio {
  font-size: 0.875rem;
  color: #E6EDF3;
  line-height: 1.5;
  margin: 0 0 16px;
}

/* Edit button */
.gh-edit-btn {
  display: block;
  width: 100%;
  padding: 5px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #E6EDF3;
  background: transparent;
  border: 1px solid #30363D;
  border-radius: 6px;
  cursor: default;
  margin-bottom: 16px;
  text-align: center;
  transition: background 150ms;
}
.gh-edit-btn:hover { background: #21262D; }

/* Stats */
.gh-stats {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  font-size: 0.875rem;
}
.gh-stat-link {
  color: #E6EDF3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}
.gh-stat-link:hover { color: #A78BFA; }
.gh-stat-link strong { font-weight: 600; }
.gh-stat-link span { color: #8B949E; }
.gh-stat-icon { color: #8B949E; }
.gh-stat-sep { color: #30363D; margin: 0 2px; }

/* Meta list */
.gh-meta-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
.gh-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #E6EDF3;
}
.gh-meta-icon { color: #8B949E; flex-shrink: 0; }
.gh-link {
  color: #A78BFA;
  text-decoration: none;
  font-size: 0.8rem;
}
.gh-link:hover { text-decoration: underline; }

/* Achievements */
.gh-section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 8px;
}
.gh-achievement-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.gh-achievement-item {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #30363D;
  cursor: pointer;
  transition: border-color 150ms;
}
.gh-achievement-item:hover { border-color: #A78BFA; }
.gh-achievement-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

---

## 5. BUAT KOMPONEN BARU: `src/components/GithubHeader.vue`

Header tipis mirip GitHub top bar (opsional, atau hapus SiteHeader):

```vue
<template>
  <header class="gh-topbar">
    <div class="gh-topbar-inner">
      <!-- GitHub-style logo -->
      <div class="gh-topbar-logo">
        <svg height="32" viewBox="0 0 16 16" fill="#E6EDF3" width="32">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
        </svg>
        <span>chrryctr1509</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.gh-topbar {
  background: #161B22;
  border-bottom: 1px solid #30363D;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0 16px;
}
.gh-topbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 62px;
  display: flex;
  align-items: center;
}
.gh-topbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #E6EDF3;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
```

---

## 6. UPDATE `src/views/Home.vue`

```vue
<script setup>
import GithubSidebar from '../components/GithubSidebar.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <div class="gh-layout">
    <GithubSidebar />
    <main class="gh-main">
      <HeroSection />
      <div class="gh-divider" />
      <FeaturesSection />
      <div class="gh-divider" />
      <SkillsSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </main>
  </div>
</template>
```

---

## 7. UPDATE `src/App.vue`

Ganti `SiteHeader` dengan `GithubHeader`, hapus `SiteFooter` atau buat sangat minimal:

```vue
<template>
  <div>
    <GithubHeader />
    <RouterView />
  </div>
</template>
```

---

## 8. UPDATE `HeroSection.vue` — Panel Kanan Atas

Hapus layout 2-kolom yang ada (teks kiri + foto kanan). Foto sudah di sidebar, jadi hero sekarang **full-width** fokus ke konten README:

```
┌─────────────────────────────────────────────────────────┐
│  ╔═════════════════════════════════════════════════════╗ │
│  ║         Cherry Citra Cahyaning                      ║ │
│  ║   Fullstack Developer • AI Engineer • Architect     ║ │
│  ╚═════════════════════════════════════════════════════╝ │
│                                                          │
│  Building Intelligent Systems 🤖  (typing anim)         │
│                                                          │
│  [Profile Views: 51] [Followers: 8] [Open Freelance]    │
│  [Location: 🇮🇩]                                         │
│                                                          │
│  [📧 Gmail]  [⭐ GitHub]                                │
└─────────────────────────────────────────────────────────┘
```

### Perubahan HeroSection.vue:

**Hapus:** Grid 2-kolom, foto/photo card kanan, semua kode GLFX (foto sudah di sidebar)

**Tambah:**

1. **Banner header** (gradient dark purple):
```html
<div class="gh-hero-banner">
  <h1 class="gh-hero-name">Cherry Citra Cahyaning</h1>
  <p class="gh-hero-sub">Fullstack Developer • AI Engineer • Software Architect</p>
</div>
```
Style:
```css
.gh-hero-banner {
  background: linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%);
  border-radius: 6px;
  padding: 40px 24px;
  text-align: center;
  margin-bottom: 24px;
  border: 1px solid #30363D;
}
.gh-hero-name {
  font-size: 2.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
}
.gh-hero-sub {
  font-size: 1rem;
  color: #A78BFA;
  margin: 0;
}
```

2. **Typing animation** — pertahankan logic yang ada, update style:
```html
<div class="gh-typing-line">
  {{ typedText }}<span class="gh-caret"></span>
</div>
```
```css
.gh-typing-line {
  font-family: var(--font-mono);
  font-size: 1.125rem;
  color: #A78BFA;
  text-align: center;
  margin-bottom: 20px;
  min-height: 1.75rem;
}
.gh-caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #A78BFA;
  margin-left: 2px;
  vertical-align: -0.1em;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
```

Update array `roles`:
```js
const roles = [
  'Building Intelligent Systems 🤖',
  'Crafting Scalable Architectures 🏗️',
  'Turning Ideas into Products 🚀',
  'Open for Freelance Collaboration 🤝'
]
```

3. **Badges row** (shield.io images):
```html
<div class="gh-badges">
  <img src="https://komarev.com/ghpvc/?username=chrryctr1509&style=flat-square&color=7C3AED&label=Profile+Views" alt="views"/>
  <img src="https://img.shields.io/github/followers/chrryctr1509?style=flat-square&color=059669&label=Followers" alt="followers"/>
  <img src="https://img.shields.io/badge/Status-Open%20for%20Freelance-0EA5E9?style=flat-square" alt="status"/>
  <img src="https://img.shields.io/badge/Location-Indonesia%20%F0%9F%87%AE%F0%9F%87%A9-F59E0B?style=flat-square" alt="location"/>
</div>
```
```css
.gh-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
```

4. **CTA Buttons:**
```html
<div class="gh-cta-row">
  <a href="mailto:chrryctr1509@gmail.com" class="gh-btn gh-btn-primary">
    📧 Gmail
  </a>
  <a href="https://github.com/chrryctr1509" target="_blank" class="gh-btn gh-btn-ghost">
    ⭐ GitHub
  </a>
</div>
```
```css
.gh-cta-row { display:flex; justify-content:center; gap:12px; }
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

## 9. UPDATE `FeaturesSection.vue` → "👋 About Me" 2-kolom

Ubah menjadi layout 2-kolom: teks+tabel kiri, GIF kanan.

```html
<div class="gh-about-wrap">
  <div class="gh-about-left">
    <h2 class="gh-section-heading">👋 About Me</h2>
    <p class="gh-about-text">
      I'm a <strong>Fullstack Developer</strong> and <strong>AI Engineer</strong>
      based in Indonesia, passionate about building scalable systems and intelligent
      applications. I specialize in end-to-end product development — from architecting
      backends to deploying production AI pipelines.
    </p>
    <blockquote class="gh-quote">
      "I don't just write code — I engineer solutions that scale."
    </blockquote>
    <table class="gh-expertise-table">
      <tbody>
        <tr><td>🌐 <strong>Web</strong></td><td>Fullstack Development (React, Next.js, Laravel, Node.js)</td></tr>
        <tr><td>🤖 <strong>AI/ML</strong></td><td>LLM Integration, AI Agents, Prompt Engineering</td></tr>
        <tr><td>☁️ <strong>Cloud</strong></td><td>Docker, Linux, Nginx, CI/CD Pipelines</td></tr>
        <tr><td>🔒 <strong>Security</strong></td><td>Auth systems, API security, best practices</td></tr>
        <tr><td>🗄️ <strong>Databases</strong></td><td>MySQL, PostgreSQL, MongoDB, Redis</td></tr>
      </tbody>
    </table>
  </div>
  <div class="gh-about-right">
    <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
         alt="Developer animation" class="gh-dev-gif" />
  </div>
</div>
```

Style:
```css
.gh-about-wrap {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  background: #161B22;
  border: 1px solid #30363D;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 16px;
}
.gh-about-left { flex: 1; min-width: 0; }
.gh-about-right { flex-shrink: 0; width: 220px; }
.gh-dev-gif { width: 100%; border-radius: 8px; }
.gh-section-heading { font-size: 1.125rem; font-weight: 600; color: #E6EDF3; margin: 0 0 12px; }
.gh-about-text { font-size: 0.875rem; color: #E6EDF3; line-height: 1.6; margin-bottom: 12px; }
.gh-about-text strong { color: #E6EDF3; font-weight: 600; }
.gh-quote {
  border-left: 3px solid #7C3AED;
  margin: 0 0 16px;
  padding: 8px 12px;
  background: rgba(124,58,237,0.05);
  border-radius: 0 4px 4px 0;
  font-style: italic;
  font-size: 0.875rem;
  color: #8B949E;
}
.gh-expertise-table { width: 100%; border-collapse: collapse; font-size: 0.8125rem; }
.gh-expertise-table td {
  padding: 6px 8px;
  border-bottom: 1px solid #21262D;
  color: #E6EDF3;
  vertical-align: top;
}
.gh-expertise-table td:first-child { white-space: nowrap; padding-right: 12px; color: #A78BFA; font-weight: 600; }
.gh-expertise-table tr:last-child td { border-bottom: none; }
@media (max-width: 600px) {
  .gh-about-wrap { flex-direction: column; }
  .gh-about-right { width: 100%; }
}
```

---

## 10. UPDATE `SkillsSection.vue` → Collapsible + skillicons.dev

```vue
<script setup>
import { ref } from 'vue'
const expanded = ref(false)

const groups = [
  { label: '💻 Languages', icons: 'js,ts,python,php,go,html,css' },
  { label: '🎨 Frontend',  icons: 'react,nextjs,vue,tailwind,bootstrap' },
  { label: '⚙️ Backend',   icons: 'nodejs,express,laravel' },
  { label: '🗄️ Databases', icons: 'mysql,postgresql,mongodb,redis' },
  { label: '☁️ DevOps',    icons: 'docker,linux,nginx,git,github,postman,vscode' },
]
</script>

<template>
  <div class="gh-collapsible">
    <div class="gh-collapsible-header" @click="expanded = !expanded">
      <span>🛠️ Tech Stack</span>
      <span class="gh-expand-hint">— click to expand</span>
      <span class="gh-chevron" :class="{ open: expanded }">▶</span>
    </div>
    <Transition name="expand">
      <div v-if="expanded" class="gh-collapsible-body">
        <div v-for="g in groups" :key="g.label" style="margin-bottom:16px">
          <p style="font-size:0.8125rem;font-weight:600;color:#A78BFA;margin:0 0 8px;font-family:var(--font-mono)">{{ g.label }}</p>
          <img :src="`https://skillicons.dev/icons?i=${g.icons}&theme=dark`" :alt="g.label" style="display:block"/>
        </div>
        <div>
          <p style="font-size:0.8125rem;font-weight:600;color:#A78BFA;margin:0 0 8px;font-family:var(--font-mono)">🤖 AI / ML Stack</p>
          <code style="font-size:0.8125rem;color:#8B949E;font-family:var(--font-mono)">
            OpenAI API &nbsp;•&nbsp; Llama Models &nbsp;•&nbsp; Prompt Engineering &nbsp;•&nbsp; AI Agents &nbsp;•&nbsp; Workflow Automation
          </code>
        </div>
      </div>
    </Transition>
  </div>
</template>
```

---

## 11. UPDATE `PortfolioSection.vue` → Collapsible Table

Tambahkan collapsible table view di ATAS existing content (pertahankan modal).

```vue
<script setup>
// ... existing code ...
const tableExpanded = ref(false)
const tableProjects = [
  { icon: '🔧', title: 'CRUD API User Laravel', desc: 'RESTful API with full JWT authentication & role management', stack: ['Laravel', 'MySQL'] },
  { icon: '📋', title: 'API LSP', desc: 'Certification & competency management platform', stack: ['Laravel', 'PHP'] },
  { icon: '🤖', title: 'AI Customer Service', desc: 'Intelligent chatbot with OpenAI integration & context memory', stack: ['Node.js', 'OpenAI'] },
  { icon: '📚', title: 'React LMS', desc: 'Full-featured Learning Management System with progress tracking', stack: ['React.js', 'REST API'] },
  { icon: '⚙️', title: 'Automation Scripts', desc: 'Developer productivity tools & workflow automation', stack: ['Python', 'Shell'] },
]
</script>

<!-- Tambah di ATAS existing template content -->
<div class="gh-collapsible" style="margin-bottom:24px">
  <div class="gh-collapsible-header" @click="tableExpanded = !tableExpanded">
    <span>🚀 Featured Projects</span>
    <span class="gh-expand-hint">— click to expand</span>
    <span class="gh-chevron" :class="{ open: tableExpanded }">▶</span>
  </div>
  <Transition name="expand">
    <div v-if="tableExpanded" class="gh-collapsible-body">
      <table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
        <thead>
          <tr>
            <th style="text-align:left;padding:6px 8px;color:#A78BFA;border-bottom:1px solid #30363D;font-family:var(--font-mono);font-size:0.75rem;text-transform:uppercase">#</th>
            <th style="text-align:left;padding:6px 8px;color:#A78BFA;border-bottom:1px solid #30363D;font-family:var(--font-mono);font-size:0.75rem;text-transform:uppercase">Project</th>
            <th style="text-align:left;padding:6px 8px;color:#A78BFA;border-bottom:1px solid #30363D;font-family:var(--font-mono);font-size:0.75rem;text-transform:uppercase">Description</th>
            <th style="text-align:left;padding:6px 8px;color:#A78BFA;border-bottom:1px solid #30363D;font-family:var(--font-mono);font-size:0.75rem;text-transform:uppercase">Stack</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in tableProjects" :key="p.title" style="transition:background 150ms" @mouseenter="$event.currentTarget.style.background='rgba(124,58,237,0.05)'" @mouseleave="$event.currentTarget.style.background=''">
            <td style="padding:8px;border-bottom:1px solid rgba(48,54,61,0.5);font-size:1rem">{{ p.icon }}</td>
            <td style="padding:8px;border-bottom:1px solid rgba(48,54,61,0.5);font-weight:600;color:#E6EDF3;white-space:nowrap">{{ p.title }}</td>
            <td style="padding:8px;border-bottom:1px solid rgba(48,54,61,0.5);color:#8B949E">{{ p.desc }}</td>
            <td style="padding:8px;border-bottom:1px solid rgba(48,54,61,0.5)">
              <span v-for="s in p.stack" :key="s" style="display:inline-block;padding:2px 8px;margin:2px;border-radius:20px;font-size:0.6875rem;font-family:var(--font-mono);background:rgba(124,58,237,0.1);border:1px solid rgba(124,58,237,0.3);color:#A78BFA">{{ s }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Transition>
</div>
```

---

## 12. UPDATE `AboutSection.vue` → 2 Collapsible: Stats + Achievements

Ganti seluruh konten dengan 2 collapsible sections:

```vue
<script setup>
import { ref } from 'vue'
const statsExp = ref(false)
const achExp = ref(false)
</script>

<template>
  <div>
    <!-- GitHub Statistics -->
    <div class="gh-collapsible">
      <div class="gh-collapsible-header" @click="statsExp = !statsExp">
        <span>📊 GitHub Statistics</span>
        <span class="gh-expand-hint">— click to expand</span>
        <span class="gh-chevron" :class="{ open: statsExp }">▶</span>
      </div>
      <Transition name="expand">
        <div v-if="statsExp" class="gh-collapsible-body" style="display:flex;flex-direction:column;gap:16px;align-items:center">
          <img src="https://streak-stats.demolab.com?user=chrryctr1509&theme=midnight-purple&hide_border=true&date_format=j%20M%5B%20Y%5D"
               alt="GitHub Streak" style="max-width:100%;border-radius:6px"/>
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=chrryctr1509&theme=tokyo-night&hide_border=true&area=true&color=A78BFA&line=7C3AED&point=ffffff"
               alt="Activity Graph" style="max-width:100%;border-radius:6px"/>
        </div>
      </Transition>
    </div>

    <!-- GitHub Achievements -->
    <div class="gh-collapsible">
      <div class="gh-collapsible-header" @click="achExp = !achExp">
        <span>🏆 GitHub Achievements</span>
        <span class="gh-expand-hint">— click to expand</span>
        <span class="gh-chevron" :class="{ open: achExp }">▶</span>
      </div>
      <Transition name="expand">
        <div v-if="achExp" class="gh-collapsible-body" style="text-align:center">
          <img src="https://github-profile-trophy.vercel.app/?username=chrryctr1509&theme=algolia&no-frame=true&no-bg=true&margin-w=12&row=1&column=7"
               alt="GitHub Trophies" style="max-width:100%"/>
        </div>
      </Transition>
    </div>
  </div>
</template>
```

---

## 13. UPDATE `ContactSection.vue` → "Let's Build Something Together"

```html
<section style="text-align:center;padding:32px 0 16px">
  <h2 style="font-size:1.125rem;font-weight:600;color:#E6EDF3;margin-bottom:20px">
    📬 Let's Build Something Together
  </h2>
  <div style="display:flex;justify-content:center;gap:12px;margin-bottom:16px">
    <a href="mailto:chrryctr1509@gmail.com" class="gh-btn gh-btn-primary">📧 Send Email</a>
    <a href="https://github.com/chrryctr1509" target="_blank" class="gh-btn gh-btn-ghost">⭐ View GitHub</a>
  </div>
  <p style="font-size:0.875rem;color:#8B949E;font-style:italic">
    Available for freelance projects and technical collaborations.
  </p>
</section>
```

---

## 14. ⚡ PROMPT CLAUDE CODE

Salin ke `docs/design-direction.md` lalu jalankan:

```
/start

MODE: BUILD (new components + multi-file refactor)

TASK: Ubah layout website portfolio Vue.js menjadi 2-panel GitHub Profile style — sidebar kiri + README panel kanan. Baca brief lengkap di docs/design-direction.md.

LANGKAH WAJIB BERURUTAN:

1. src/style.css
   → Tambah CSS variables GitHub dark theme
   → Tambah .gh-layout (grid 2-col: 296px + 1fr)
   → Tambah .gh-main, .gh-divider
   → Tambah .gh-collapsible, .gh-collapsible-header, .gh-chevron, .gh-expand-hint, .gh-collapsible-body
   → Tambah .expand-enter/leave transition
   → Tambah .gh-btn, .gh-btn-primary, .gh-btn-ghost
   → Set body background #0D1117

2. index.html
   → Tambah Google Fonts: Inter + JetBrains Mono

3. src/main.js
   → Tambah: document.documentElement.classList.add('dark')

4. BUAT BARU: src/components/GithubSidebar.vue
   → Foto profil BULAT (gunakan /images/cherry.png)
   → Nama "Cherry Citra Cahyaning", username, pronouns
   → Bio text
   → Edit profile button (decorative)
   → Followers/following stats
   → Location + GitHub link
   → Achievements badges (4 gambar dari github.githubassets.com)
   → position: sticky; top: 24px

5. BUAT BARU: src/components/GithubHeader.vue
   → Header slim gelap (bg #161B22, border-bottom #30363D, height 62px)
   → GitHub octicon SVG + teks "chrryctr1509"

6. src/views/Home.vue
   → Ganti seluruh template dengan .gh-layout
   → Import dan gunakan GithubSidebar
   → Urutan konten: HeroSection → divider → FeaturesSection → divider → SkillsSection → PortfolioSection → AboutSection → ContactSection

7. src/App.vue
   → Ganti SiteHeader dengan GithubHeader
   → Hapus SiteFooter

8. src/components/HeroSection.vue
   → HAPUS: grid 2-kolom, foto card kanan, GLFX code seluruhnya
   → TAMBAH: .gh-hero-banner (gradient dark purple, judul centered)
   → PERTAHANKAN: typing animation (update roles array & caret color ke #A78BFA)
   → TAMBAH: badges row (4 shield.io img tags)
   → TAMBAH: CTA row (Gmail + GitHub buttons)

9. src/components/FeaturesSection.vue
   → Ubah jadi About Me 2-kolom (teks+tabel kiri, GIF kanan)
   → Expertise table 5 baris (Web, AI/ML, Cloud, Security, Databases)
   → Bungkus dalam gh-about-wrap card (#161B22, border #30363D)
   → GIF: https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif

10. src/components/SkillsSection.vue
    → Ubah seluruhnya jadi gh-collapsible
    → 5 grup + AI/ML text row
    → Gunakan skillicons.dev/icons?i=...&theme=dark untuk setiap grup

11. src/components/PortfolioSection.vue
    → Tambah gh-collapsible table DI ATAS existing content (jangan hapus modal)
    → 5 proyek: CRUD API User, API LSP, AI Customer Service, React LMS, Automation Scripts

12. src/components/AboutSection.vue
    → Ganti seluruh konten dengan 2 gh-collapsible
    → Section 1: GitHub Statistics (streak-stats + activity-graph images)
    → Section 2: GitHub Achievements (trophy image)

13. src/components/ContactSection.vue
    → Ubah jadi "Let's Build" centered CTA
    → 2 buttons: Send Email (purple) + View GitHub (ghost)
    → Sub-text italic

VERIFY: npm run build → 0 errors & 0 warnings
```

---

*Layout 2-panel ini secara langsung mengikuti struktur GitHub Profile page: sidebar narrow di kiri, README content area di kanan.*
