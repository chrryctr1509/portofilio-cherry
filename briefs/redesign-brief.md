# 🎨 Redesign Brief — Cherry Citra Portfolio
**Target: Mengubah tampilan menjadi dark hacker/terminal aesthetic seperti referensi gambar**

---

## 1. CONTEXT & GOAL

Project ini adalah **portfolio personal Vue.js** milik Cherry Citra, seorang Full-Stack Developer & DevOps Enthusiast. Saat ini tampilan menggunakan white/light theme modern dengan warna emerald green. 

**Goal redesign:** Mengubah visual seluruh site agar mengacu pada gambar referensi — yaitu **dark terminal/hacker aesthetic** dengan karakteristik:
- Background gelap (`#0a0f0a` / `#0d1117`)
- Aksen hijau neon/lime (`#00ff88`, `#22c55e`, `#4ade80`)
- Grid pattern / scanline overlay sebagai background texture
- Card dengan border hijau dan subtle glow effect
- Typography yang lebih bold, tegas, dengan font monospace untuk elemen teknis
- Collapsed/expandable sections dengan arrow indicator
- Table-style layout untuk Projects section
- Badge/tag dengan border dan glow
- Foto developer dengan efek kartu gelap + glow tepi

---

## 2. DESIGN TOKENS (CSS Variables)

Tambahkan/ganti di `src/style.css`:

```css
:root {
  /* Dark Terminal Theme */
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

---

## 3. BACKGROUND GLOBAL

Di `src/App.vue` dan `src/style.css`, tambahkan grid dot pattern sebagai background:

```css
body {
  background-color: var(--bg-primary);
  background-image:
    radial-gradient(circle, rgba(34,197,94,0.08) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

Tambahkan scanline overlay subtle di `App.vue`:
```html
<div class="scanline-overlay"></div>
```
```css
.scanline-overlay {
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.03) 2px,
    rgba(0,0,0,0.03) 4px
  );
  pointer-events: none;
  z-index: 9999;
}
```

---

## 4. KOMPONEN-KOMPONEN YANG HARUS DIUBAH

### 4.1 `SiteHeader.vue`
- Background: `rgba(10,15,10,0.95)` + `backdrop-blur-md`
- Border bottom: `1px solid rgba(34,197,94,0.2)`
- Nav links: warna `#94a3b8`, hover → `#00ff88` dengan underline glow
- Logo "Cherry Citra" → font monospace dengan `>_` prefix atau cursor blink
- Dark mode toggle: ganti dengan terminal icon jika ada
- Active link: `color: #00ff88` + `text-shadow: 0 0 8px rgba(0,255,136,0.5)`

---

### 4.2 `HeroSection.vue`
Perubahan besar sesuai referensi:

**Status badge:**
```html
<div class="badge-available">
  <span class="ping-dot"></span>
  ● Available for work
</div>
```
- Style: `border: 1px solid #22c55e`, background `rgba(34,197,94,0.1)`, teks `#22c55e`

**Heading:**
```
Halo, saya
[nama besar bold]
Cherry Citra  ← warna #00ff88 atau gradient green
```

**Subtitle:** Tetap `DevOps Enthusiast & Full Stack Developer` — font normal, warna `#94a3b8`

**Description text:** warna `#6b8f6b`, ukuran kecil

**CTA Buttons:**
- Primary: `bg: transparent`, `border: 1px solid #22c55e`, `color: #22c55e`, hover → `bg: rgba(34,197,94,0.1)` + glow
- Secondary: `bg: transparent`, `border: 1px solid rgba(255,255,255,0.15)`, warna putih muted

**Photo Card:**
- Background card: `#0f1f0f`
- Border: `1px solid rgba(34,197,94,0.3)`
- Box shadow: `0 0 30px rgba(34,197,94,0.1), inset 0 0 30px rgba(0,0,0,0.5)`
- Info strip bawah: tambahkan icon GitHub, LinkedIn dari `socials` array yang sudah ada
- Label nama: putih terang, label role: `#22c55e`
- Tambahkan tag `Privacy Ethic` atau badge kecil di bawah nama

---

### 4.3 `FeaturesSection.vue` → **"Professional Values"** (expandable)
Sesuai gambar referensi, section ini menjadi **collapsible panel**:

```
🎯 Professional Values — click to expand
[Collapsed/Expanded toggle]
```

Saat expanded, tampilkan table **"HOW I BUILD SOFTWARE"**:
```
Clean Code         | Readable, documented, maintainable
Scalable Arch      | Systems that grow without breaking
Performance First  | Fast, efficient, resource-conscious
Security by Design | Defense-in-depth from day one
Continuous Learning| Always current with best practices
Team Collaboration | Clear communication, shared ownership
```

Style table:
- Border: `1px solid rgba(34,197,94,0.2)`
- Header row: `background: rgba(34,197,94,0.05)`, teks `#22c55e` uppercase
- Row cells: kiri = emoji + bold putih, kanan = teks muted `#94a3b8`
- Row separator: `border-bottom: 1px solid rgba(34,197,94,0.1)`

Implementasi Vue:
```vue
const valuesExpanded = ref(false)
```
```html
<div @click="valuesExpanded = !valuesExpanded" class="section-toggle-header">
  🎯 Professional Values — <span>click to expand</span>
</div>
<Transition name="expand">
  <div v-if="valuesExpanded" class="values-table">...</div>
</Transition>
```

---

### 4.4 `SkillsSection.vue` → **"Tech Stack"**
Sesuai referensi: grid dengan kategori (Languages, Frontend, Backend, DevOps & Cloud, Tools)

**Label kategori:** uppercase, warna `#22c55e`, font mono, kecil
**Card skill:**
- Background: `rgba(15,31,15,0.8)`
- Border: `1px solid rgba(34,197,94,0.15)`
- Hover: border glow `rgba(34,197,94,0.5)` + `box-shadow: 0 0 15px rgba(34,197,94,0.1)`
- Icon: pada background gelap, beberapa icon perlu `filter: brightness(1.2)`
- Nama skill: putih bold, meta: `#64748b`

Tambahkan kategori yang sesuai gambar:
```js
// Languages
{ name: 'JavaScript', icon: '...' },
{ name: 'Go', icon: '...' },
{ name: 'Python', icon: '...' },

// Frontend  
{ name: 'Python (Django)', icon: '...' },  // sesuaikan
{ name: 'Vue.js', icon: '...' },
{ name: 'Tailwind', icon: '...' },

// Backend
{ name: 'Node.js', icon: '...' },
{ name: 'MySQL', icon: '...' },

// DevOps & Cloud
{ name: 'Docker', icon: '...' },
{ name: 'Kubernetes', icon: '...' },
{ name: 'AWS', icon: '...' },

// Tools
{ name: 'Git', icon: '...' },
{ name: 'VS Code', icon: '...' },
```

---

### 4.5 `PortfolioSection.vue` → **"Featured Projects"** (expandable table)
Sesuai gambar referensi: **tabel expandable** seperti terminal output

Header:
```
🚀 Featured Projects — click to expand
```

Saat expanded, tampilkan tabel:
```
# Project          | Description                        | Stack
─────────────────────────────────────────────────────────────
🔧 CRUD API User   | RESTful API with full JWT auth...   | Laravel / MySQL
📋 API LSP         | Certification & competency mgmt     | Laravel / PHP
🤖 AI Customer...  | Intelligent chatbot with OpenAI...  | Node.js / OpenAI
📚 React LMS       | Full-featured Learning Mgmt Sys...  | React.js / REST API
⚙️ Automation      | Developer productivity tools...      | Python / Shell
```

Style tabel:
- Header row: `color: #22c55e`, `border-bottom: 1px solid rgba(34,197,94,0.3)`
- `#` kolom: angka dengan `color: #4a6b4a`
- Project name: icon emoji + bold putih, hover → `color: #00ff88`
- Description: `#94a3b8`, truncate dengan ellipsis
- Stack: badge kecil `border: 1px solid rgba(34,197,94,0.3)`, font mono, `color: #22c55e`

Data projects yang digunakan (dari `projects.js` yang ada + tambahan):
```js
[
  { icon: '🔧', title: 'CRUD API User', desc: 'RESTful API with full JWT authentication & role management', stack: ['Laravel', 'Laravel MySQL'] },
  { icon: '📋', title: 'API LSP', desc: 'Certification & competency management platform', stack: ['Laravel', 'Laravel PHP'] },
  { icon: '🤖', title: 'AI Customer Service', desc: 'Intelligent chatbot with OpenAI integration & context memory', stack: ['Node.js', 'Node.js OpenAI'] },
  { icon: '📚', title: 'React LMS', desc: 'Full-featured Learning Management System with progress tracking', stack: ['React.js', 'React.js REST API'] },
  { icon: '⚙️', title: 'Automation Scripts', desc: 'Developer productivity tools & workflow automation', stack: ['Python', 'Python Shell'] },
]
```

---

### 4.6 `AboutSection.vue` → **"Visi & Prinsip"**
Section ini menampilkan 4 prinsip dalam **2-column grid**:

```
• Infrastructure as Code    • Performance-First
  [desc text muted]           [desc text muted]

• Performance-First         • Clean & Maintainable
  [desc text muted]           [desc text muted]
```

Style:
- Label prinsip: `font-weight: 700`, `color: #e2ffe2`
- Deskripsi: `color: #6b8f6b`, font kecil, lorem ipsum → ganti dengan teks nyata
- No card, no border — clean list style dengan bullet `•`

---

### 4.7 `ContactSection.vue` → **"Hubungi Saya"**
Sesuai referensi:

**Form fields:**
- Input background: `rgba(15,31,15,0.8)`
- Border: `1px solid rgba(34,197,94,0.2)`
- Focus: border glow `rgba(34,197,94,0.5)` + `box-shadow: 0 0 0 2px rgba(34,197,94,0.1)`
- Placeholder: `#4a6b4a`
- Label: hidden, placeholder sebagai label

**Submit button:**
- Background: `rgba(34,197,94,0.9)` → `#22c55e`
- Text: `#0a0f0a` (gelap), `font-weight: 700`
- Hover: `background: #00ff88` + glow
- Full width

**Social icons bawah form:** GitHub, LinkedIn, WhatsApp (sesuai referensi gambar)
- Style: icon outline, hover → warna aksen

---

### 4.8 `SiteFooter.vue`
- Background: `#050a05` (lebih gelap dari main bg)
- Border top: `1px solid rgba(34,197,94,0.1)`
- 3-column layout: Logo+desc | Navigasi | Kontak/Alamat
- Teks: `#4a6b4a` muted, link hover → `#22c55e`
- Copyright: `© 2025 Cherry Citra. All rights reserved.`
- Bottom right: logo/badge kecil (bintang/diamond shape seperti di referensi)

---

## 5. TYPOGRAPHY

Install font via Google Fonts di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Penggunaan:
- **Heading besar** (nama, section title): `Space Grotesk`, `font-weight: 800`
- **Body text**: `Space Grotesk`, `font-weight: 400`
- **Code, badge, table header, label kategori**: `JetBrains Mono`
- **Meta/muted text**: `Space Grotesk`, `font-weight: 400`, warna muted

---

## 6. ANIMASI & MICRO-INTERACTIONS

### Terminal cursor blink
```css
@keyframes cursor-blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.terminal-cursor::after {
  content: '▊';
  color: #00ff88;
  animation: cursor-blink 1s infinite;
}
```

### Glow pulse pada status badge
```css
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 5px rgba(34,197,94,0.3); }
  50% { box-shadow: 0 0 15px rgba(34,197,94,0.6); }
}
```

### Expand/collapse transition
```css
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to, .expand-leave-from {
  max-height: 1000px;
  opacity: 1;
}
```

### Card hover glow
```css
.card-dark:hover {
  border-color: rgba(34, 197, 94, 0.4);
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.1), 0 8px 30px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

---

## 7. DARK MODE

Karena theme baru sudah **selalu dark**, disable light mode atau set dark sebagai default permanent:

Di `src/composables/useTheme.js`:
```js
// Force dark mode always
document.documentElement.classList.add('dark')
```

Atau di `src/main.js`:
```js
document.documentElement.classList.add('dark')
```

Semua Tailwind class `dark:` yang sudah ada tetap berfungsi sebagai base.

---

## 8. URUTAN PENGERJAAN (Wave Plan)

**Wave 1 — Foundation**
1. `src/style.css` → CSS variables + background + global typography
2. `src/App.vue` → scanline overlay, force dark mode, font import di `index.html`
3. `SiteHeader.vue` → dark nav

**Wave 2 — Hero & Skills**
4. `HeroSection.vue` → dark card, dark badge, CTA buttons dark style
5. `SkillsSection.vue` → dark cards, kategori baru, grid layout

**Wave 3 — Sections Utama**
6. `FeaturesSection.vue` → collapsible + values table
7. `PortfolioSection.vue` → expandable table layout (simpan modal yang ada, tambah tabel view)

**Wave 4 — Supporting Sections**
8. `AboutSection.vue` → visi prinsip 2-col grid
9. `ContactSection.vue` → dark form + social icons
10. `SiteFooter.vue` → dark footer 3-col

---

## 9. PROMPT UNTUK CLAUDE CODE

Gunakan prompt berikut saat menjalankan Claude Code di root project:

---

```
/start

MODE: SMALL_EDIT (multiple files, visual redesign only — no logic changes)

TASK: Redesign seluruh tampilan portfolio Vue.js ini menjadi dark terminal/hacker aesthetic mengacu pada design brief di docs/design-direction.md.

SCOPE:
- Ubah semua background menjadi dark (#0a0f0a) dengan green grid dot pattern
- Terapkan CSS variables di src/style.css untuk design tokens
- Force dark mode permanent di main.js
- Ubah semua komponen sesuai brief (HeroSection, SkillsSection, FeaturesSection, PortfolioSection, AboutSection, ContactSection, SiteHeader, SiteFooter)
- FeaturesSection dan PortfolioSection menjadi expandable/collapsible
- PortfolioSection tambahkan table view (modal yang ada tetap dipertahankan)
- Typography: tambahkan JetBrains Mono + Space Grotesk via Google Fonts di index.html
- Animasi: terminal cursor, glow pulse, expand transition, card hover glow

OUT OF SCOPE (jangan ubah):
- Logic Vue (composables, router, i18n)
- Data/konten (nama, project, skills)
- Fungsionalitas form
- GLFX photo effect di HeroSection

READ FIRST: docs/design-direction.md (simpan brief ini di sana sebelum mulai)

VERIFY: Setelah selesai, jalankan `npm run build` — harus 0 error.
```

---

## 10. NOTES TAMBAHAN

- **Jangan hapus** animasi typing di HeroSection — sangat sesuai dengan terminal aesthetic
- **Pertahankan** responsive grid (mobile-first)
- **Test** di dark background: pastikan semua icon devicon terlihat (beberapa butuh `filter: brightness(1.5)` di dark bg)
- **Foto cherry.png** — GLFX effect sudah ada dan bagus, pertahankan, hanya ubah frame/card-nya
- Untuk section heading (`🎯 Professional Values — click to expand`), gunakan cursor pointer + hover color `#00ff88`
- Warna aksen **kuning/gold** (`#fbbf24`) bisa digunakan untuk highlight tertentu (misal angka stats, icon penting)

---

*Brief ini disiapkan berdasarkan analisis source code project dan gambar referensi desain.*
*Salin file ini ke `docs/design-direction.md` di project sebelum menjalankan Claude Code.*
