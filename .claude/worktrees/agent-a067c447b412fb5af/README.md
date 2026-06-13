# Cherry Citra - Professional Portfolio

🚀 Website CV/Portfolio profesional yang modern, interaktif, dan responsive, dibangun dengan Vue 3 + Vite + Tailwind CSS v4.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue-3.5.22-green.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-blue.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)

## 👨‍💻 Tentang

Website portfolio profesional untuk **Cherry Citra** - Full-Stack Developer yang berpengalaman dalam pengembangan web dan mobile. Website ini menampilkan:

- Profil profesional
- Keahlian & Skills
- Portfolio project
- Informasi kontak

## ✨ Fitur Utama

### 🎨 Design & UI/UX
- **Modern & Professional**: Design yang clean dengan gradient yang eye-catching
- **Fully Responsive**: Sempurna di semua device (mobile, tablet, desktop)
- **Dark Mode**: Support dark mode dengan toggle
- **Interactive Animations**: Smooth transitions dan hover effects
- **Custom Scrollbar**: Branded scrollbar dengan gradient

### 🔥 Komponen

| Komponen | Fitur |
|----------|-------|
| **Hero Section** | Typing effect, animated entrance, social links |
| **Features Section** | 6 skills dengan hover effects dan icons |
| **Stats Bar** | Animated counter dengan Intersection Observer |
| **Portfolio Section** | Category filter, modal detail, live demo links |
| **Contact Section** | WhatsApp integration, quick contact links |
| **Footer** | Social links, contact info, navigation |

### 📂 Portfolio Projects
- ✅ Nasi Goreng Web App (CodeIgniter)
- ✅ WhatsApp Service API (Node.js)
- ✅ Absensi Perusahaan (Laravel)
- ✅ E-commerce Maxi Custom (Laravel)

## 🛠️ Teknologi

- **Vue 3.5.22** - Progressive JavaScript Framework
- **Vite 7.1.14** - Next Generation Frontend Tooling
- **Tailwind CSS v4.1.14** - Utility-first CSS Framework

## 📦 Installation

### Development (Local)

```bash
# Clone repository
git clone https://gitlab.com/chrryctr1509/vue_js_cherry.git
cd vue_js_cherry

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🐳 Docker

#### Production Mode
```bash
# Build dan jalankan
docker-compose up -d --build

# Lihat logs
docker-compose logs -f

# Stop container
docker-compose down
```

#### Development Mode (dengan hot reload)
```bash
docker-compose --profile dev up dev
```

#### Manual Docker Build
```bash
# Build image
docker build -t cherry-portfolio .

# Run container
docker run -d -p 8111:8111 --name cherry-portfolio cherry-portfolio
```

**🌐 Akses Website: http://localhost:8111**

## 📁 Struktur Project

```
src/
├── components/
│   ├── SiteHeader.vue          # Navigation dengan mobile menu
│   ├── HeroSection.vue         # Hero dengan typing effect
│   ├── FeaturesSection.vue     # Skills showcase
│   ├── SkillsSection.vue       # Skills grid
│   ├── StatsBar.vue            # Animated statistics
│   ├── PortfolioSection.vue    # Filtered portfolio + modal
│   ├── ContactSection.vue      # Contact dengan WhatsApp
│   ├── SubscribeSection.vue    # Newsletter signup
│   └── SiteFooter.vue          # Footer dengan social links
├── views/
│   └── Home.vue                # Main homepage
├── locales/
│   ├── id.json                 # Indonesian translations
│   └── en.json                 # English translations
├── App.vue                     # Main app component
├── main.js                     # Entry point
└── style.css                   # Global styles + Tailwind
```

## 🎨 Color Palette

```css
Brand Green/Teal:
- brand-500: #22c55e (Primary)
- emerald-500: #10b981
- teal-500: #14b8a6
```

## 📱 Responsive Breakpoints

| Breakpoint | Size | Device |
|------------|------|--------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

## 🔧 Konfigurasi

### Environment Variables
Buat file `.env` jika diperlukan:
```env
VITE_APP_TITLE=Cherry Citra Portfolio
```

### Docker Port
Edit `docker-compose.yml` untuk mengubah port:
```yaml
ports:
  - "8111:8111"  # Ubah sesuai kebutuhan
```

## 📝 Changelog

### Version 1.0.0 (Januari 2025)
- ✨ Initial release sebagai CV/Portfolio profesional
- ✨ Hero section dengan typing effect
- ✨ Portfolio dengan modal detail dan live demo links
- ✨ Contact section dengan WhatsApp integration
- ✨ Dark mode support
- ✨ Full responsive design
- ✨ Docker support untuk deployment
- ✨ SEO meta tags lengkap

## 📬 Kontak

- **Email**: chrryctr1509@gmail.com
- **WhatsApp**: +62 877-6188-2915
- **Facebook**: [cherryctr](https://www.facebook.com/cherryctr)
- **Instagram**: [mascherr30](https://www.instagram.com/mascherr30)
- **GitHub**: [chrryctr1509](https://github.com/chrryctr1509)

## 📄 License

MIT License - Feel free to use as reference for your own portfolio

## 👨‍💻 Author

**Cherry Citra** - Full-Stack Developer

---

**⚡ Ready to launch!** 

- Local: Run `npm run dev` → http://localhost:5173
- Docker: Run `docker-compose up -d --build` → http://localhost:8111
