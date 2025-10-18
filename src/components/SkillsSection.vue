<script setup>
const skills = [
  { name: 'Node.js', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Laravel', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'React.js', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', percent: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'CodeIgniter', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' }
]
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 bg-white dark:bg-slate-900">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <header class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Skills
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Penguasaan Skills</h2>
        <p class="text-lg text-slate-600 dark:text-slate-300">Teknologi yang saya kuasai beserta tingkat profisiensinya.</p>
      </header>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="(s, idx) in skills" :key="s.name" class="p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <img :src="s.icon" :alt="s.name" class="w-7 h-7" loading="lazy" />
              <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{ s.name }}</span>
            </div>
            <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{ s.percent }}%</span>
          </div>
          <div class="h-2.5 rounded-full bg-slate-200/80 dark:bg-slate-700/70 overflow-hidden">
            <div class="h-2.5 rounded-full bg-gradient-to-r from-brand-500 via-emerald-500 to-teal-500 transition-[width] duration-700 ease-out" :style="{ width: s.percent + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>


