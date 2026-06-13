<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const educations = [
  {
    id: 1,
    institution: 'Universitas Bina Sarana Informatika',
    location: 'Jakarta, Indonesia',
    degree: 'S1 Teknik Informatika',
    period: '2021 – 2025',
    description: 'Berfokus pada pengembangan perangkat lunak, pemrograman web, algoritma, dan basis data.',
    color: 'from-brand-500 to-emerald-500',
    current: true,
  },
  {
    id: 2,
    institution: 'SMK Cengkareng 2',
    location: 'Jakarta, Indonesia',
    degree: 'Teknik Komputer dan Jaringan',
    period: '2016 – 2019',
    description: 'Mempelajari dasar-dasar jaringan komputer, pemrograman dasar, dan administrasi sistem.',
    color: 'from-sky-500 to-cyan-500',
    current: false,
  },
]

const certifications = [
  {
    id: 1,
    title: 'Certified Laravel Developer',
    issuer: 'Laravel Academy',
    year: '2023',
    color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  },
  {
    id: 2,
    title: 'Node.js API Design — Professional',
    issuer: 'Udemy',
    year: '2022',
    color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    id: 3,
    title: 'DevOps Fundamentals (Docker & CI/CD)',
    issuer: 'Dicoding Indonesia',
    year: '2023',
    color: 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400',
    iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2021',
    color: 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
    iconPath: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
]

const visibleItems = ref(new Set())
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.eduId
          if (id) visibleItems.value = new Set([...visibleItems.value, id])
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('[data-edu-id]').forEach((el) => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="education" class="py-20 lg:py-28 bg-white dark:bg-slate-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <header class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          Pendidikan
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
          Pendidikan & Sertifikasi
        </h2>
        <p class="text-slate-500 dark:text-slate-400">
          Latar belakang pendidikan formal dan sertifikasi yang mendukung keahlian profesional saya.
        </p>
      </header>

      <div class="grid lg:grid-cols-2 gap-10">

        <!-- Education Cards -->
        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Riwayat Pendidikan
          </h3>

          <div class="space-y-4">
            <div
              v-for="(edu, i) in educations"
              :key="edu.id"
              :data-edu-id="`edu-${edu.id}`"
              class="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
              :class="visibleItems.has(`edu-${edu.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
              :style="`transition-delay: ${i * 100}ms`"
            >
              <!-- Top accent bar -->
              <div :class="`h-1 bg-gradient-to-r ${edu.color}`"></div>

              <div class="p-5 flex gap-4">
                <!-- Icon -->
                <div :class="`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0 shadow-sm`">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between gap-2 mb-0.5">
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm leading-tight">{{ edu.institution }}</h4>
                    <span v-if="edu.current" class="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Aktif
                    </span>
                  </div>
                  <p class="text-brand-600 dark:text-emerald-400 font-semibold text-sm mb-2">{{ edu.degree }}</p>
                  <div class="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V9H3v10a2 2 0 002 2z"/>
                      </svg>
                      {{ edu.period }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      </svg>
                      {{ edu.location }}
                    </span>
                  </div>
                  <p class="text-sm text-slate-600 dark:text-slate-300">{{ edu.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Sertifikasi
          </h3>

          <div class="space-y-3">
            <div
              v-for="(cert, i) in certifications"
              :key="cert.id"
              :data-edu-id="`cert-${cert.id}`"
              class="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-500 cursor-default"
              :class="visibleItems.has(`cert-${cert.id}`) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'"
              :style="`transition-delay: ${i * 80}ms`"
            >
              <div :class="`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cert.color}`">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cert.iconPath" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-slate-900 dark:text-white text-sm leading-tight">{{ cert.title }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ cert.issuer }} · {{ cert.year }}</p>
              </div>
              <div class="shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
