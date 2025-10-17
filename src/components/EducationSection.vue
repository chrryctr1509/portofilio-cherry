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
        <div 
          class="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <div class="text-xl font-bold text-slate-900 dark:text-white">B.S. in Computer Science</div>
          <div class="text-sm text-slate-500 dark:text-slate-300">Universitas Contoh — 2015 - 2019</div>
          <p class="mt-4 text-slate-600 dark:text-slate-300">Focused on software engineering, algorithms, and systems design. Graduated with honors and completed capstone on scalable web architectures.</p>
        </div>

        <div 
          class="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 100ms"
        >
          <div class="text-xl font-bold text-slate-900 dark:text-white">Certifications</div>
          <ul class="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Certified Laravel Developer
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Node.js API Design — Professional
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              DevOps Fundamentals (Docker & CI/CD)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>


