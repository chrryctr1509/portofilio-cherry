<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const visibleSections = ref([])

const tableProjects = [
  { icon: '🔧', title: 'CRUD API User Laravel', desc: 'RESTful API with full JWT authentication & role management', stack: ['Laravel', 'MySQL'] },
  { icon: '📋', title: 'API LSP', desc: 'Certification & competency management platform', stack: ['Laravel', 'PHP'] },
  { icon: '🤖', title: 'AI Customer Service', desc: 'Intelligent chatbot with OpenAI integration & context memory', stack: ['Node.js', 'OpenAI'] },
  { icon: '📚', title: 'React LMS', desc: 'Full-featured Learning Management System with progress tracking', stack: ['React.js', 'REST API'] },
  { icon: '⚙️', title: 'Automation Scripts', desc: 'Developer productivity tools & workflow automation', stack: ['Python', 'Shell'] },
]

const categories = ['All', 'CodeIgniter', 'Node.js', 'Laravel']
const selectedCategory = ref('All')
const showModal = ref(false)
const selectedProject = ref(null)

const projects = [
  {
    id: 1,
    title: 'Nasi Goreng Web App',
    category: 'CodeIgniter',
    desc: 'Aplikasi pemesanan Nasi Goreng dengan manajemen menu, pesanan, dan kasir.',
    color: 'from-amber-500 to-orange-600',
    image: '/images/nasigoreng.png',
    tags: ['CodeIgniter 3', 'MySQL'],
    liveUrl: null,
    specs: {
      role: 'Full-Stack Developer',
      duration: '2 Bulan',
      year: '2023',
      client: 'Warung Nasi Goreng Pak Joko',
      features: [
        'Manajemen menu dan harga',
        'Sistem pemesanan online',
        'Dashboard kasir',
        'Laporan penjualan harian',
        'Manajemen stok bahan'
      ],
      technologies: ['CodeIgniter 3', 'MySQL', 'Bootstrap 4', 'jQuery', 'AJAX'],
      description: 'Aplikasi web lengkap untuk mengelola pemesanan makanan dengan fitur kasir terintegrasi, manajemen menu, dan laporan penjualan real-time.'
    }
  },
  {
    id: 2,
    title: 'WhatsApp Service API',
    category: 'Node.js',
    desc: 'Layanan REST API berbasis Express untuk integrasi WhatsApp (send/receive).',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/whastapp.png',
    tags: ['Node.js', 'Express', 'SQL'],
    liveUrl: 'https://cherrychat.my.id/',
    specs: {
      role: 'Backend Developer',
      duration: '1 Bulan',
      year: '2024',
      client: 'Internal Project',
      features: [
        'Kirim pesan individual & broadcast',
        'Webhook untuk menerima pesan',
        'Multi-session support',
        'QR Code authentication',
        'Message queue system'
      ],
      technologies: ['Node.js', 'Express.js', 'Baileys', 'MySQL', 'Redis', 'Socket.io'],
      description: 'REST API service untuk integrasi WhatsApp yang mendukung pengiriman dan penerimaan pesan secara programatik dengan fitur multi-session.'
    }
  },
  {
    id: 3,
    title: 'Absensi Perusahaan',
    category: 'Laravel',
    desc: 'Sistem absensi karyawan: clock-in/out, rekap harian, dan laporan HR.',
    color: 'from-sky-500 to-cyan-600',
    image: '/images/absen.png',
    tags: ['Laravel', 'MySQL'],
    liveUrl: 'https://adam.pejuangsourcecode.com/login',
    specs: {
      role: 'Full-Stack Developer',
      duration: '3 Bulan',
      year: '2024',
      client: 'PT. Maju Bersama',
      features: [
        'Clock-in/out dengan GPS',
        'Rekap absensi harian & bulanan',
        'Manajemen cuti & izin',
        'Laporan HR otomatis',
        'Dashboard admin & karyawan'
      ],
      technologies: ['Laravel 10', 'MySQL', 'Livewire', 'Tailwind CSS', 'Alpine.js'],
      description: 'Sistem absensi karyawan lengkap dengan tracking GPS, manajemen cuti, dan laporan HR yang terintegrasi.'
    }
  },
  {
    id: 4,
    title: 'E-commerce Maxi Custom',
    category: 'Laravel',
    desc: 'Platform toko online dengan katalog, cart, checkout, dan manajemen pesanan.',
    color: 'from-fuchsia-500 to-rose-600',
    image: '/images/maxicustom.png',
    tags: ['Laravel 8', 'MySQL'],
    liveUrl: 'https://atma-eccomerce.pejuangsourcecode.com/',
    specs: {
      role: 'Full-Stack Developer',
      duration: '4 Bulan',
      year: '2023',
      client: 'Maxi Custom',
      features: [
        'Katalog produk dengan kategori',
        'Shopping cart & wishlist',
        'Checkout dengan multiple payment',
        'Order tracking',
        'Admin dashboard lengkap'
      ],
      technologies: ['Laravel 8', 'MySQL', 'Vue.js', 'Tailwind CSS', 'Midtrans Payment'],
      description: 'Platform e-commerce lengkap dengan fitur katalog produk, keranjang belanja, sistem pembayaran, dan manajemen pesanan.'
    }
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

watch(showModal, (val) => {
  if (val) {
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section
          if (!visibleSections.value.includes(section)) {
            visibleSections.value.push(section)
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.gh-animate-section').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <section id="portfolio">
    <div class="gh-section-header">
      <h2 class="gh-section-title">🚀 Portfolio</h2>
      <p class="gh-section-sub">Selected projects showcasing problem-solving, performance, and user experience.</p>
    </div>


    <!-- Featured Projects Table -->
    <div class="gh-table-wrap gh-animate-section" data-section="featured" :class="{ 'gh-animate-in': visibleSections.includes('featured') }" style="margin-bottom:32px">
      <h3 class="gh-featured-title">🚀 Featured Projects</h3>
      <table class="gh-projects-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Description</th>
            <th>Stack</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in tableProjects" :key="p.title">
            <td class="gh-icon-cell">{{ p.icon }}</td>
            <td class="gh-title-cell">{{ p.title }}</td>
            <td class="gh-desc-cell">{{ p.desc }}</td>
            <td class="gh-stack-cell">
              <span v-for="s in p.stack" :key="s" class="gh-stack-badge">{{ s }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Category Filter -->
    <div class="gh-filter-row gh-animate-section" data-section="filter" :class="{ 'gh-animate-in': visibleSections.includes('filter') }">
      <button
        v-for="(cat, idx) in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="gh-filter-btn"
        :class="{ active: selectedCategory === cat }"
        :style="{ animationDelay: `${idx * 50}ms` }"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="gh-projects-grid gh-animate-section" data-section="grid" :class="{ 'gh-animate-in': visibleSections.includes('grid') }">
      <div
        v-for="(project, idx) in filteredProjects"
        :key="project.id"
        @click="openModal(project)"
        class="gh-project-card"
        :style="{ animationDelay: `${idx * 100}ms` }"
      >
        <div class="gh-project-img-wrap" :class="project.color">
          <div class="gh-project-pattern"></div>
          <div class="gh-project-img-center">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="gh-project-img"
              loading="lazy"
            />
          </div>
          <div class="gh-project-overlay">
            <span class="gh-project-view-btn">Lihat Detail</span>
          </div>
          <div class="gh-project-cat-badge">{{ project.category }}</div>
        </div>
        <div class="gh-project-body">
          <h3 class="gh-project-title">{{ project.title }}</h3>
          <p class="gh-project-desc">{{ project.desc }}</p>
          <div class="gh-project-tags">
            <span v-for="tag in project.tags" :key="tag" class="gh-project-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gh-section-header {
  margin-bottom: 32px;
}
.gh-section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 8px;
}
.gh-section-sub {
  font-size: 1rem;
  color: #8B949E;
  margin: 0;
  line-height: 1.5;
}
.gh-table-wrap {
  background: #161B22;
  border: 1px solid #30363D;
  border-radius: 8px;
  padding: 20px;
}
.gh-featured-title {
  font-size: 1rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 16px;
}
.gh-projects-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}
.gh-projects-table th {
  text-align: left;
  padding: 12px 16px;
  color: #A78BFA;
  border-bottom: 1px solid #30363D;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
}
.gh-projects-table td {
  padding: 16px;
  border-bottom: 1px solid rgba(48,54,61,0.5);
  color: #E6EDF3;
  vertical-align: middle;
}
.gh-projects-table tr:last-child td {
  border-bottom: none;
}
.gh-projects-table tr:hover td {
  background: rgba(124,58,237,0.05);
}
.gh-icon-cell {
  font-size: 1.25rem;
  width: 50px;
}
.gh-title-cell {
  font-weight: 600;
  white-space: nowrap;
  min-width: 150px;
}
.gh-desc-cell {
  color: #8B949E;
  line-height: 1.5;
}
.gh-stack-cell {
  white-space: nowrap;
}
.gh-stack-badge {
  display: inline-block;
  padding: 4px 10px;
  margin: 2px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  background: rgba(124,58,237,0.15);
  border: 1px solid rgba(124,58,237,0.3);
  color: #A78BFA;
}
.gh-filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.gh-filter-btn {
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 150ms;
  background: transparent;
  color: #8B949E;
  border: 1px solid #30363D;
  cursor: pointer;
}
.gh-filter-btn:hover { background: #21262D; color: #E6EDF3; }
.gh-filter-btn.active {
  background: #7C3AED;
  color: #fff;
  border-color: #7C3AED;
}
.gh-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.gh-project-card {
  border: 1px solid #30363D;
  border-radius: 6px;
  overflow: hidden;
  background: #161B22;
  cursor: pointer;
  transition: border-color 150ms, transform 150ms;
}
.gh-project-card:hover {
  border-color: #A78BFA;
  transform: translateY(-2px);
}
.gh-project-img-wrap {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}
.gh-project-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0);
  background-size: 30px 30px;
}
.gh-project-img-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.gh-project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.gh-project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 300ms;
}
.gh-project-card:hover .gh-project-overlay { background: rgba(0,0,0,0.7); }
.gh-project-view-btn {
  opacity: 0;
  padding: 8px 16px;
  background: white;
  color: #0D1117;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: opacity 300ms;
}
.gh-project-card:hover .gh-project-view-btn { opacity: 1; }
.gh-project-cat-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 2px 8px;
  background: rgba(255,255,255,0.9);
  color: #0D1117;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}
.gh-project-body { padding: 16px; }
.gh-project-title {
  font-size: 1rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 4px;
}
.gh-project-desc {
  font-size: 0.8125rem;
  color: #8B949E;
  margin: 0 0 12px;
  line-height: 1.4;
}
.gh-project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
/* Animation Styles */
.gh-animate-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.gh-animate-section.gh-animate-in {
  opacity: 1;
  transform: translateY(0);
}
.gh-project-card {
  opacity: 0;
  transform: translateY(15px);
  animation: gh-fadeInUp 0.4s ease forwards;
}
.gh-animate-in .gh-project-card {
  animation: gh-fadeInUp 0.4s ease forwards;
}
.gh-filter-btn {
  opacity: 0;
  transform: translateY(10px);
  animation: gh-fadeInUp 0.3s ease forwards;
}
.gh-animate-in .gh-filter-btn {
  animation: gh-fadeInUp 0.3s ease forwards;
}
@keyframes gh-fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>