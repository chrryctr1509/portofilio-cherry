<script setup>
const partners = [
  { name: 'Google' },
  { name: 'Microsoft' },
  { name: 'Amazon' },
  { name: 'Shopify' },
  { name: 'Netflix' },
  { name: 'Stripe' },
  { name: 'Airbnb' },
  { name: 'Spotify' },
  { name: 'Adobe' },
  { name: 'Salesforce' }
]

const getInitials = (name) => {
  return name.split(' ').map(p => p[0]).join('').slice(0, 3).toUpperCase()
}
</script>

<template>
  <section id="partners" class="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8 max-w-7xl">
      <!-- Header -->
      <header class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h10M7 16h6" />
          </svg>
          Kolaborasi Proyek
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
          Berkolaborasi dengan tim
        </h2>
        <p class="text-slate-600 dark:text-slate-300">
          Berikut sebagian partner yang pernah atau sedang bekerja sama.
        </p>
      </header>

      <!-- Partners Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <div
          v-for="p in partners"
          :key="p.name"
          class="group relative rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 md:p-6 flex items-center justify-center overflow-hidden hover:border-brand-300 dark:hover:border-emerald-500 transition-all"
        >
          <!-- Subtle glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand-200/20 via-emerald-200/20 to-teal-200/20"></div>

          <!-- Logo Placeholder -->
          <div class="relative flex items-center gap-3">
            <div class="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white font-black flex items-center justify-center shadow-md">
              {{ getInitials(p.name) }}
            </div>
            <div class="text-base md:text-lg font-bold text-slate-700 dark:text-slate-200 tracking-tight">
              {{ p.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-14">
        <a 
          href="#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold hover:scale-105 transition-all shadow-lg"
        >
          Ajukan Kolaborasi
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>


