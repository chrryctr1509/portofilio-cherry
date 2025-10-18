<script setup>
import { ref, onMounted } from 'vue'

const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 200)
})
</script>

<template>
  <section id="education" class="py-20 lg:py-28 bg-white dark:bg-slate-900">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <header class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V9H3v10a2 2 0 002 2z" />
          </svg>
          Education
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Education & Certifications</h2>
        <p class="text-lg text-slate-600 dark:text-slate-300">Formal education and notable certifications related to software development.</p>
      </header>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Left: Education List -->
        <div 
          class="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 4-9 4-9-4 9-4zm0 6l5 2.222V15l-5 2.778L7 15v-3.778L12 9z"/></svg>
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Education</h3>
          </div>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <div class="mt-1">
                <svg class="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 4v6c0 5-7 10-7 10S5 17 5 12V6l7-4z"/></svg>
              </div>
              <div>
                <div class="font-bold text-slate-900 dark:text-white">SMK Cengkareng 2 — Jakarta</div>
                <div class="text-sm text-slate-500 dark:text-slate-300">Teknik Komputer dan Jaringan • 2016–2019</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="mt-1">
                <svg class="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 4v6c0 5-7 10-7 10S5 17 5 12V6l7-4z"/></svg>
              </div>
              <div>
                <div class="font-bold text-slate-900 dark:text-white">Universitas Bina Sarana Informatika — Jakarta</div>
                <div class="text-sm text-slate-500 dark:text-slate-300">Teknik Informasi • 2021–2025</div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: Certifications -->
        <div 
          class="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 100ms"
        >
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H7a2 2 0 00-2 2v14l7-3 7 3V5a2 2 0 00-2-2z"/></svg>
            <h3 class="text-lg font-extrabold text-slate-900 dark:text-white">Certifications</h3>
          </div>
          <ul class="space-y-3 text-slate-700 dark:text-slate-300">
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z"/></svg>
              <span>Certified Laravel Developer</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z"/></svg>
              <span>Node.js API Design — Professional</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z"/></svg>
              <span>DevOps Fundamentals (Docker & CI/CD)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>


