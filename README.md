# CreativeHub - Professional Web Agency Website

🚀 Website agency profesional yang modern, interaktif, dan responsive, dibangun dengan Vue 3 + Vite + Tailwind CSS v4.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.5.22-green.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-blue.svg)

## ✨ Fitur Utama

### 🎨 Design & UI/UX
- **Modern & Professional**: Design yang clean dengan gradient yang eye-catching
- **Fully Responsive**: Sempurna di semua device (mobile, tablet, desktop)
- **Interactive Animations**: Smooth transitions dan hover effects
- **Dark Mode Ready**: Siap untuk implementasi dark mode
- **Custom Scrollbar**: Branded scrollbar dengan gradient

### 🔥 Komponen Interaktif

#### 1. **Navigation Header**
- ✅ Sticky header dengan scroll effect
- ✅ Mobile hamburger menu dengan smooth transition
- ✅ Smooth scroll navigation
- ✅ Logo dengan animated badge
- ✅ CTA buttons dengan gradient

#### 2. **Hero Section**
- ✅ Animated entrance effects
- ✅ Gradient text effects
- ✅ Floating cards dengan stats
- ✅ Background animated blobs
- ✅ Dual CTA buttons

#### 3. **Logo Strip**
- ✅ Marquee animation (auto-scroll)
- ✅ Pause on hover
- ✅ Brand showcase dari companies ternama

#### 4. **Features/Services Section**
- ✅ 6 layanan utama dengan icons
- ✅ Hover effects dengan transform
- ✅ Gradient backgrounds per card
- ✅ Animated arrows
- ✅ Number badges

#### 5. **Stats Counter**
- ✅ Animated counter dengan Intersection Observer
- ✅ Dark theme dengan pattern background
- ✅ Icon per metric
- ✅ Glow effects on hover

#### 6. **About Section** (NEW)
- ✅ Two-column layout
- ✅ Company stats grid
- ✅ Core values showcase
- ✅ CTA section

#### 7. **Portfolio Section**
- ✅ Category filter (All, Web Design, Mobile App, Branding, E-commerce)
- ✅ Smooth filtering transition
- ✅ Hover overlay dengan View Project button
- ✅ Technology tags
- ✅ Gradient mockups

#### 8. **Testimonials Carousel**
- ✅ Auto-play carousel (5 detik interval)
- ✅ Manual navigation (prev/next)
- ✅ Dot indicators
- ✅ 5-star rating display
- ✅ Avatar dengan initials
- ✅ Quote icon design
- ✅ Stats bar di bawah testimonial

#### 9. **Newsletter Subscribe**
- ✅ Eye-catching gradient background
- ✅ Loading state animation
- ✅ Success state feedback
- ✅ Email validation
- ✅ Social proof indicators

#### 10. **Footer**
- ✅ Comprehensive link structure
- ✅ Contact information dengan icons
- ✅ Social media links (LinkedIn, Twitter, Facebook, Instagram, GitHub)
- ✅ Multi-column layout
- ✅ Hover animations
- ✅ Copyright dengan dynamic year

## 🎯 Perbandingan Before & After

### Before (Versi Lama)
- ❌ Design basic & kurang menarik
- ❌ Tidak ada mobile menu
- ❌ Animasi minimal
- ❌ Stats tidak realistis (20% satisfaction)
- ❌ Portfolio tanpa filter
- ❌ Testimonial manual saja
- ❌ Footer sederhana

### After (Versi Baru)
- ✅ Design modern & profesional
- ✅ Full mobile responsive dengan hamburger menu
- ✅ Rich animations & transitions
- ✅ Stats realistis & animated (98% satisfaction)
- ✅ Portfolio dengan category filter
- ✅ Testimonial auto-play carousel
- ✅ Footer lengkap dengan kontak & social links

## 🛠️ Teknologi

- **Vue 3.5.22** - Progressive JavaScript Framework
- **Vite 7.1.14** - Next Generation Frontend Tooling
- **Tailwind CSS v4.1.14** - Utility-first CSS Framework

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

```css
Brand Green:
- brand-50:  #f0fdf4
- brand-100: #dcfce7
- brand-200: #bbf7d0
- brand-300: #86efac
- brand-400: #4ade80
- brand-500: #22c55e (Primary)
- brand-600: #16a34a
- brand-700: #15803d
- brand-800: #166534
- brand-900: #14532d
```

## 📁 Struktur Project

```
src/
├── components/
│   ├── SiteHeader.vue          # Navigation dengan mobile menu
│   ├── HeroSection.vue         # Hero dengan animations
│   ├── LogoStrip.vue           # Marquee brand logos
│   ├── FeaturesSection.vue     # Services showcase
│   ├── StatsBar.vue            # Animated statistics
│   ├── AboutSection.vue        # About company (NEW)
│   ├── PortfolioSection.vue    # Filtered portfolio grid
│   ├── TestimonialsCarousel.vue # Auto-play testimonials
│   ├── SubscribeSection.vue    # Newsletter signup
│   └── SiteFooter.vue          # Comprehensive footer
├── App.vue                     # Main app component
├── main.js                     # Entry point
└── style.css                   # Global styles + Tailwind
```

## 🚀 Features Highlights

### Interactivity
- **Smooth Scroll**: Smooth scrolling ke sections
- **Intersection Observer**: Animasi saat element terlihat
- **Hover States**: Rich hover effects di semua interactive elements
- **Loading States**: Feedback untuk form submissions
- **Auto-play Carousel**: Testimonials dengan auto-advance

### Performance
- **Optimized Images**: Gradient placeholders untuk images
- **Lazy Loading**: Components load on demand
- **CSS Animations**: Hardware-accelerated transforms
- **Minimal Dependencies**: Hanya essential libraries

### Accessibility
- **Semantic HTML**: Proper HTML5 tags
- **ARIA Labels**: For screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
```

## 🎯 Use Cases

Website ini cocok untuk:
- ✅ Digital Agency
- ✅ Web Development Studio
- ✅ Creative Agency
- ✅ Marketing Agency
- ✅ Design Studio
- ✅ Freelance Portfolio
- ✅ Tech Startup

## 🔧 Customization

### Ganti Brand Color
Edit `src/style.css`:
```css
--color-brand-500: #22c55e; /* Ganti dengan warna pilihan */
```

### Ganti Company Name
1. Edit `SiteHeader.vue` - Logo & nama
2. Edit `SiteFooter.vue` - Footer branding
3. Edit `AboutSection.vue` - Company description

### Tambah/Edit Content
Semua content ada di dalam component masing-masing:
- Services: `FeaturesSection.vue` → `features` array
- Portfolio: `PortfolioSection.vue` → `projects` array
- Testimonials: `TestimonialsCarousel.vue` → `testimonials` array

## 📝 Changelog

### Version 2.0.0 (Oktober 2024)
- ✨ Complete redesign dari navbar sampai footer
- ✨ Tambah mobile hamburger menu
- ✨ Tambah AboutSection baru
- ✨ Portfolio dengan category filter
- ✨ Testimonial auto-play carousel dengan rating
- ✨ Animated stats counter
- ✨ Newsletter dengan loading states
- ✨ Footer lengkap dengan social links
- ✨ Custom scrollbar
- ✨ Smooth scroll navigation
- 🐛 Fix stats data (20% → 98% satisfaction)
- 🎨 Modern gradient designs
- 📱 Full responsive untuk semua devices

## 📄 License

MIT License - Feel free to use for personal or commercial projects

## 👨‍💻 Author

Redesigned with ❤️ for Professional Web Development

## 🙏 Credits

- Icons: Heroicons (via SVG paths)
- Fonts: Inter (System font stack)
- Color Palette: Tailwind CSS v4 Green

---

**⚡ Ready to launch!** Run `npm run dev` and open http://localhost:5173

**Need help?** Check the Vue 3 docs: https://vuejs.org/
