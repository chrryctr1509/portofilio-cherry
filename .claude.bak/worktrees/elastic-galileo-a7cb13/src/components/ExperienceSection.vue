<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const experiences = [
  {
    id: 1,
    role: 'Fullstack Developer',
    company: 'PT Multiartha Prima Sejahtera',
    period: 'Aug 2021 – Sekarang',
    location: 'Jakarta Selatan, Indonesia',
    type: 'Full-time',
    color: 'from-brand-500 to-emerald-500',
    highlights: [
      'Bertanggung jawab pengembangan aplikasi end-to-end dari perencanaan hingga implementasi',
      'Menentukan struktur aplikasi dan konfigurasi awal proyek',
      'Mengembangkan fitur frontend dan backend sesuai kebutuhan sistem',
      'Mengelola dan mengoptimalkan struktur database untuk efisiensi sistem',
      'Melakukan deployment, monitoring, dan maintenance aplikasi di lingkungan produksi',
      'Berkontribusi dalam pengambilan keputusan teknis dan pengembangan sistem',
    ],
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Node.js'],
  },
  {
    id: 2,
    role: 'Instruktur',
    company: 'PT Bhakti Adikarya Buana Abadi (BabaStudio)',
    period: 'Nov 2019 – Jun 2021',
    location: 'Jakarta Selatan, Indonesia',
    type: 'Full-time',
    color: 'from-violet-500 to-purple-500',
    highlights: [
      'Menyusun dan mengembangkan kurikulum digital marketing, desain grafis, dan programming',
      'Menyampaikan materi secara jelas, terstruktur, dan aplikatif kepada peserta',
      'Membimbing peserta dalam praktik langsung (hands-on) untuk menghasilkan karya nyata',
      'Melakukan evaluasi pembelajaran melalui tugas, kuis, dan project',
      'Menyesuaikan metode pengajaran dengan tingkat pemahaman peserta',
    ],
    tags: ['Digital Marketing', 'Desain Grafis', 'Programming', 'Kurikulum'],
  },
  {
    id: 3,
    role: 'Web Developer',
    company: 'PT Chitra Maju Jaya Abadi',
    period: 'Jul 2019 – Nov 2019',
    location: 'Jakarta Utara, Indonesia',
    type: 'Full-time',
    color: 'from-sky-500 to-cyan-500',
    highlights: [
      'Pengembangan aplikasi end-to-end dari perencanaan hingga implementasi',
      'Setup awal proyek termasuk struktur aplikasi dan konfigurasi environment',
      'Mengembangkan fitur frontend dan backend sesuai kebutuhan sistem',
      'Mengelola dan mengoptimalkan struktur database',
      'Deployment, monitoring, dan maintenance aplikasi di lingkungan produksi',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 4,
    role: 'Teknisi Produksi (Magang)',
    company: 'PT Zyrexindo Mandiri Buana',
    period: 'Okt 2017 – Nov 2017',
    location: 'Jakarta, Indonesia',
    type: 'Magang',
    color: 'from-amber-500 to-orange-500',
    highlights: [
      'Melakukan instalasi software atau sistem sesuai arahan',
      'Membantu perakitan, pemasangan, atau penggantian komponen perangkat',
      'Monitoring dan pengecekan rutin terhadap sistem atau perangkat',
      'Mencatat error atau kendala yang ditemukan selama proses kerja',
    ],
    tags: ['Hardware', 'Software Install', 'Troubleshooting'],
  },
]

const visibleItems = ref(new Set())
const sectionRef = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.dataset.id)
          visibleItems.value = new Set([...visibleItems.value, id])
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('[data-experience]').forEach((el) => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="experience" class="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <header class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Pengalaman Kerja
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Riwayat Pekerjaan
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300">
          Perjalanan profesional saya dalam dunia pengembangan perangkat lunak.
        </p>
      </header>

      <!-- Timeline -->
      <div class="relative max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto" ref="sectionRef">

        <!-- Vertical line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-emerald-400 to-teal-400 -translate-x-1/2 hidden sm:block"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :data-id="exp.id"
          :data-experience="true"
          class="relative flex gap-6 mb-12 last:mb-0 transition-all duration-700"
          :class="visibleItems.has(exp.id)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'"
          :style="`transition-delay: ${index * 120}ms`"
        >
          <!-- Timeline dot (desktop center) -->
          <div class="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
            <div :class="`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-white dark:ring-slate-950 shadow-lg`"></div>
          </div>

          <!-- Card — alternating sides on desktop -->
          <div
            class="w-full sm:w-[calc(50%-2.5rem)]"
            :class="index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'"
          >
            <div class="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">

              <!-- Top gradient bar -->
              <div :class="`h-1.5 w-full bg-gradient-to-r ${exp.color}`"></div>

              <div class="p-6">
                <!-- Role & type -->
                <div class="flex items-start justify-between gap-3 mb-1">
                  <h3 class="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                    {{ exp.role }}
                  </h3>
                  <span class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                    :class="exp.type === 'Freelance'
                      ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                      : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'"
                  >
                    {{ exp.type }}
                  </span>
                </div>

                <!-- Company -->
                <p class="font-semibold text-brand-600 dark:text-emerald-400 mb-1">{{ exp.company }}</p>

                <!-- Meta -->
                <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V9H3v10a2 2 0 002 2z"/>
                    </svg>
                    {{ exp.period }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {{ exp.location }}
                  </span>
                </div>

                <!-- Highlights -->
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="h in exp.highlights"
                    :key="h"
                    class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    {{ h }}
                  </li>
                </ul>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in exp.tags"
                    :key="tag"
                    class="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
