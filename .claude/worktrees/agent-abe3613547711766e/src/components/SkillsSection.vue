<script setup>
const skills = [
  {
    name: 'JavaScript & TypeScript',
    meta: 'App Logic & Interaction',
    category: 'Frontend',
    color: '#3178c6',
    percent: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Vue.js',
    meta: 'SPA Framework',
    category: 'Frontend',
    color: '#41b883',
    percent: 92,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'React.js',
    meta: 'Component UI',
    category: 'Frontend',
    color: '#61dafb',
    percent: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Tailwind CSS',
    meta: 'Utility‑first Styling',
    category: 'Styling',
    color: '#38bdf8',
    percent: 88,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Node.js',
    meta: 'Runtime & APIs',
    category: 'Backend',
    color: '#3c873a',
    percent: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Express.js',
    meta: 'REST Services',
    category: 'Backend',
    color: '#111827',
    percent: 87,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    name: 'Laravel',
    meta: 'Backend Framework',
    category: 'Backend',
    color: '#f55247',
    percent: 84,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
  },
  {
    name: 'CodeIgniter 3',
    meta: 'Lightweight MVC Backend',
    category: 'Backend',
    color: '#f4511e',
    percent: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'
  },
  {
    name: 'PostgreSQL',
    meta: 'Relational Database',
    category: 'Database',
    color: '#336791',
    percent: 82,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MySQL',
    meta: 'Relational Database',
    category: 'Database',
    color: '#00618a',
    percent: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
  }
]
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8 max-w-7xl">
      <header class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100/70 dark:bg-emerald-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-emerald-300 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Web Dev Stack
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Keahlian sebagai Web Developer Front-End & Backend
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 mt-5">
          Fondasi teknis yang saya gunakan untuk membangun UI modern, API yang scalable, dan sistem database yang andal.
        </p>
      </header>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
          :style="{ '--accent': skill.color, '--progress': skill.percent + '%' }"
        >
          <div class="flex items-center justify-between gap-4 mb-5">
            <div class="flex items-center gap-3">
              <div class="skill-chip">
                <span class="skill-chip-ring"></span>
                <span class="skill-chip-avatar">
                  <img :src="skill.icon" :alt="skill.name" loading="lazy" />
                </span>
              </div>
              <div>
                <p class="skill-category">{{ skill.category }}</p>
                <h3 class="skill-name">{{ skill.name }}</h3>
              </div>
            </div>
            <div class="text-right">
              <p class="skill-percent-value">{{ skill.percent }}%</p>
              <p class="skill-percent-label">Proficiency</p>
            </div>
          </div>
          <p class="skill-meta">{{ skill.meta }}</p>
          <div class="skill-progress">
            <span class="skill-progress-fill"></span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  border-radius: 28px;
  padding: 1.75rem;
  border: 1.5px solid rgba(15, 23, 42, 0.08);
  background: white;
  box-shadow: 0 25px 60px -40px rgba(15, 23, 42, 0.45);
  transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
}
.dark .skill-card {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(148, 163, 184, 0.15);
  box-shadow: 0 30px 50px -45px rgba(0, 0, 0, 0.9);
}
.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(34, 197, 94, 0.6);
  box-shadow: 0 30px 80px -40px rgba(34, 197, 94, 0.4);
}

.skill-chip {
  position: relative;
  width: 56px;
  height: 56px;
}
.skill-chip-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    conic-gradient(
      var(--accent, #22c55e) 0 var(--progress, 75%),
      rgba(226, 232, 240, 0.7) var(--progress, 75%) 100%
    );
}
.dark .skill-chip-ring {
  background:
    conic-gradient(
      var(--accent, #22c55e) 0 var(--progress, 75%),
      rgba(51, 65, 85, 0.9) var(--progress, 75%) 100%
    );
}
.skill-chip-avatar {
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-chip-avatar img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.dark .skill-chip-avatar {
  background: #0f172a;
}

.skill-category {
  font-size: 0.65rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(100, 116, 139, 0.9);
}
.dark .skill-category {
  color: rgba(148, 163, 184, 0.8);
}
.skill-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}
.dark .skill-name {
  color: #f8fafc;
}

.skill-percent-value {
  font-size: 2rem;
  font-weight: 900;
  color: #0f172a;
}
.dark .skill-percent-value {
  color: white;
}
.skill-percent-label {
  font-size: 0.6rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(100, 116, 139, 0.85);
}
.dark .skill-percent-label {
  color: rgba(148, 163, 184, 0.7);
}

.skill-meta {
  font-size: 0.95rem;
  color: rgba(71, 85, 105, 0.95);
  margin-bottom: 1rem;
}
.dark .skill-meta {
  color: rgba(226, 232, 240, 0.85);
}

.skill-progress {
  position: relative;
  height: 8px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.35);
  overflow: hidden;
}
.skill-progress-fill {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent, #22c55e), #10b981);
  width: var(--progress, 75%);
}
</style>
