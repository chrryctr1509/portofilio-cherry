<script setup>
const skills = [
  {
    name: 'JavaScript & TypeScript',
    meta: 'App Logic & Interaction',
    category: 'Frontend',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Vue.js',
    meta: 'SPA Framework',
    category: 'Frontend',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'React.js',
    meta: 'Component UI',
    category: 'Frontend',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    meta: 'Utility‑first Styling',
    category: 'Styling',
    categoryColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Node.js',
    meta: 'Runtime & APIs',
    category: 'Backend',
    categoryColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    meta: 'REST Services',
    category: 'Backend',
    categoryColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Laravel',
    meta: 'Backend Framework',
    category: 'Backend',
    categoryColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  },
  {
    name: 'CodeIgniter 3',
    meta: 'Lightweight MVC',
    category: 'Backend',
    categoryColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
  },
  {
    name: 'PostgreSQL',
    meta: 'Relational Database',
    category: 'Database',
    categoryColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    meta: 'Relational Database',
    category: 'Database',
    categoryColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    name: 'Docker',
    meta: 'Containerization',
    category: 'DevOps',
    categoryColor: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Git',
    meta: 'Version Control',
    category: 'Tools',
    categoryColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
]
</script>

<template>
  <section id="tech-stack" class="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <header class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100/70 dark:bg-emerald-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-emerald-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Web Dev Stack
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Keahlian sebagai Web Developer
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 mt-5">
          Fondasi teknis yang saya gunakan untuk membangun UI modern, API yang scalable, dan sistem database yang andal.
        </p>
      </header>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <article
          v-for="skill in skills"
          :key="skill.name"
          class="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default text-center"
        >
          <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-700 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
            <img
              :src="skill.icon"
              :alt="skill.name"
              loading="lazy"
              class="w-9 h-9 object-contain"
            />
          </div>
          <div>
            <p class="font-bold text-slate-900 dark:text-white text-sm leading-tight">{{ skill.name }}</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ skill.meta }}</p>
          </div>
          <span :class="`text-[10px] font-semibold px-2 py-0.5 rounded-full ${skill.categoryColor}`">
            {{ skill.category }}
          </span>
        </article>
      </div>

    </div>
  </section>
</template>
