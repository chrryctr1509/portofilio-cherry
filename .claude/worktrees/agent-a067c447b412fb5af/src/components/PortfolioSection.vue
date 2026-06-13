<script setup>
import { ref, computed, watch } from 'vue'

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
    liveUrl: null, // Coming soon
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

// Close modal on escape key
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
</script>

<template>
  <section class="py-20 lg:py-28 bg-white dark:bg-slate-900" id="portfolio">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8  max-w-7xl">
      <!-- Header -->
      <header class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Portofolio
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Karya Pilihan
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300">
          Gambaran pekerjaan yang menyoroti pemecahan masalah, performa, dan user experience
        </p>
      </header>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-6 py-3 rounded-xl font-semibold transition-all"
          :class="selectedCategory === cat 
            ? 'bg-gradient-to-r from-brand-500 to-emerald-500 text-white shadow-lg scale-105' 
            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          @click="openModal(project)"
          class="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <!-- Image Container -->
          <div class="aspect-[4/3] relative overflow-hidden bg-gradient-to-br" :class="project.color">
            <!-- Pattern Overlay -->
            <div class="absolute inset-0 opacity-20">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 30px 30px;"></div>
            </div>

            <!-- Project Image or Fallback Mockup -->
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white/60"
                loading="lazy"
              />
              <div v-else class="w-full h-full bg-white/90 rounded-lg shadow-2xl border-4 border-white/50 flex items-center justify-center backdrop-blur-sm">
                <svg class="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <!-- Overlay with Link -->
            <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <span class="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold flex items-center gap-2">
                  Lihat Detail
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 dark:text-slate-100">
              {{ project.category }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              {{ project.desc }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-100 rounded-full text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-16">
          <a 
            href="#contact" 
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 hover:border-slate-900 dark:hover:border-slate-100 transition-all"
          >
          Lihat Semua
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div 
          v-if="showModal && selectedProject" 
          class="modal-overlay"
          @click.self="closeModal"
        >
          <!-- Modal Container -->
          <Transition name="modal-scale">
            <div 
              v-if="showModal"
              class="modal-container"
            >
              <!-- Modal Content Wrapper -->
              <div class="modal-content">
                <!-- Sticky Header with Image -->
                <div class="modal-header" :class="selectedProject.color">
                  <!-- Close Button -->
                  <button 
                    @click="closeModal"
                    class="close-btn"
                    aria-label="Tutup"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <!-- Pattern Overlay -->
                  <div class="absolute inset-0 opacity-20">
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 30px 30px;"></div>
                  </div>

                  <!-- Category Badge -->
                  <div class="absolute top-4 left-4 z-10 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-slate-900 shadow-lg">
                    {{ selectedProject.category }}
                  </div>

                  <!-- Image Container -->
                  <div class="relative z-10 flex items-center justify-center h-full p-6 pt-14">
                    <img
                      v-if="selectedProject.image"
                      :src="selectedProject.image"
                      :alt="selectedProject.title"
                      class="max-h-full w-auto object-contain rounded-xl shadow-2xl border-4 border-white/70"
                    />
                  </div>
                </div>

                <!-- Scrollable Body -->
                <div class="modal-body">
                  <!-- Title Section -->
                  <div class="mb-6">
                    <h2 class="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                      {{ selectedProject.title }}
                    </h2>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {{ selectedProject.specs.description }}
                    </p>
                  </div>

                  <!-- Project Info Cards -->
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    <div class="info-card">
                      <div class="info-icon bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p class="info-label">Role</p>
                      <p class="info-value">{{ selectedProject.specs.role }}</p>
                    </div>
                    <div class="info-card">
                      <div class="info-icon bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p class="info-label">Durasi</p>
                      <p class="info-value">{{ selectedProject.specs.duration }}</p>
                    </div>
                    <div class="info-card">
                      <div class="info-icon bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p class="info-label">Tahun</p>
                      <p class="info-value">{{ selectedProject.specs.year }}</p>
                    </div>
                    <div class="info-card">
                      <div class="info-icon bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p class="info-label">Client</p>
                      <p class="info-value text-sm">{{ selectedProject.specs.client }}</p>
                    </div>
                  </div>

                  <!-- Features Section -->
                  <div class="mb-8">
                    <h3 class="section-title">
                      <span class="section-icon bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Fitur Utama
                    </h3>
                    <div class="grid sm:grid-cols-2 gap-3">
                      <div 
                        v-for="feature in selectedProject.specs.features" 
                        :key="feature"
                        class="feature-item"
                      >
                        <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{{ feature }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Technologies Section -->
                  <div>
                    <h3 class="section-title">
                      <span class="section-icon bg-brand-100 dark:bg-brand-900/30 text-brand-600">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </span>
                      Teknologi
                    </h3>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in selectedProject.specs.technologies" 
                        :key="tech"
                        class="tech-badge"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Visit Website Button -->
                  <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <a 
                      v-if="selectedProject.liveUrl"
                      :href="selectedProject.liveUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="visit-btn group"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span>Kunjungi Website</span>
                      <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div 
                      v-else
                      class="coming-soon-badge"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Demo Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(4px);
}

/* Modal Container */
.modal-container {
  position: relative;
  width: 100%;
  max-width: 48rem;
  max-height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.dark .modal-container {
  background: #1e293b;
}

/* Modal Content */
.modal-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 2rem);
}

/* Modal Header */
.modal-header {
  position: relative;
  flex-shrink: 0;
  height: 200px;
  background: linear-gradient(135deg, var(--tw-gradient-stops));
}

@media (min-width: 640px) {
  .modal-header {
    height: 240px;
  }
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.95);
  color: #334155;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
}

.close-btn:hover {
  background: white;
  transform: scale(1.1);
}

/* Modal Body */
.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  overscroll-behavior: contain;
}

@media (min-width: 640px) {
  .modal-body {
    padding: 2rem;
  }
}

/* Custom Scrollbar */
.modal-body::-webkit-scrollbar {
  width: 6px;
}

.modal-body::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark .modal-body::-webkit-scrollbar-track {
  background: #334155;
}

.dark .modal-body::-webkit-scrollbar-thumb {
  background: #475569;
}

/* Info Cards */
.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0.75rem;
  background: #f8fafc;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
}

.dark .info-card {
  background: rgba(51, 65, 85, 0.5);
  border-color: #334155;
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
}

.info-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.dark .info-label {
  color: #94a3b8;
}

.info-value {
  font-size: 0.875rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.3;
}

.dark .info-value {
  color: #f1f5f9;
}

/* Section Title */
.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
}

.dark .section-title {
  color: #f1f5f9;
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
}

/* Feature Item */
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.dark .feature-item {
  background: rgba(51, 65, 85, 0.3);
  border-color: #334155;
  color: #cbd5e1;
}

/* Tech Badge */
.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #0d9488;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(20, 184, 166, 0.3);
  border-radius: 9999px;
}

.dark .tech-badge {
  color: #5eead4;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(16, 185, 129, 0.15));
  border-color: rgba(20, 184, 166, 0.4);
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-scale-leave-active {
  transition: all 0.2s ease-in;
}

.modal-scale-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Visit Website Button */
.visit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #0d9488, #10b981);
  border-radius: 1rem;
  box-shadow: 0 10px 25px -10px rgba(16, 185, 129, 0.5);
  text-decoration: none;
  transition: all 0.3s ease;
}

.visit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px -10px rgba(16, 185, 129, 0.6);
  background: linear-gradient(135deg, #0f766e, #059669);
}

.visit-btn:active {
  transform: translateY(0);
}

/* Coming Soon Badge */
.coming-soon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #64748b;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 1rem;
}

.dark .coming-soon-badge {
  color: #94a3b8;
  background: rgba(51, 65, 85, 0.5);
  border-color: #475569;
}
</style>
