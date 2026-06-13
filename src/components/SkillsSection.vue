<script setup>
const skillsByCategory = {
  'Languages': [
    {
      name: 'JavaScript',
      meta: 'ES6+ & Modern JS',
      color: '#f7df1e',
      percent: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'TypeScript',
      meta: 'Type-safe Development',
      color: '#3178c6',
      percent: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Python',
      meta: 'Backend & Automation',
      color: '#3776ab',
      percent: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'Go',
      meta: 'High-performance APIs',
      color: '#00add8',
      percent: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
    }
  ],
  'Frontend': [
    {
      name: 'Vue.js',
      meta: 'SPA Framework',
      color: '#41b883',
      percent: 92,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      name: 'React.js',
      meta: 'Component UI',
      color: '#61dafb',
      percent: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Tailwind CSS',
      meta: 'Utility-first Styling',
      color: '#38bdf8',
      percent: 88,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    }
  ],
  'Backend': [
    {
      name: 'Node.js',
      meta: 'Runtime & APIs',
      color: '#3c873a',
      percent: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Laravel',
      meta: 'PHP Framework',
      color: '#f55247',
      percent: 84,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
    },
    {
      name: 'Express.js',
      meta: 'REST Services',
      color: '#111827',
      percent: 87,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'MySQL',
      meta: 'Relational Database',
      color: '#00618a',
      percent: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
    }
  ],
  'DevOps & Cloud': [
    {
      name: 'Docker',
      meta: 'Containerization',
      color: '#2496ed',
      percent: 82,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Kubernetes',
      meta: 'Container Orchestration',
      color: '#326ce5',
      percent: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
    },
    {
      name: 'AWS',
      meta: 'Cloud Infrastructure',
      color: '#ff9900',
      percent: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    }
  ],
  'Tools': [
    {
      name: 'Git',
      meta: 'Version Control',
      color: '#f05032',
      percent: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'VS Code',
      meta: 'Code Editor',
      color: '#007acc',
      percent: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    }
  ]
}
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 bg-[#0a0f0a]">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8 max-w-7xl">
      <header class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] px-4 py-2 text-sm font-semibold text-[#22c55e] mb-4 font-mono">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          TECH STACK
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-white leading-tight">
          Keahlian sebagai Web Developer Front-End & Backend
        </h2>
        <p class="text-lg text-[#94a3b8] mt-5">
          Fondasi teknis yang saya gunakan untuk membangun UI modern, API yang scalable, dan sistem database yang andal.
        </p>
      </header>

      <!-- Skills by Category -->
      <div v-for="(skills, category) in skillsByCategory" :key="category" class="mb-12 last:mb-0">
        <h3 class="category-label">{{ category }}</h3>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <article
            v-for="skill in skills"
            :key="skill.name"
            class="skill-card"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="skill-icon">
                <img :src="skill.icon" :alt="skill.name" loading="lazy" />
              </div>
              <div class="flex-1">
                <h4 class="skill-name">{{ skill.name }}</h4>
                <p class="skill-meta">{{ skill.meta }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Category Label */
.category-label {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #22c55e;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Skill Card */
.skill-card {
  background: rgba(15, 31, 15, 0.8);
  border: 1px solid rgba(34, 197, 94, 0.15);
  border-radius: 1rem;
  padding: 1.25rem;
  transition: all 250ms ease;
}

.skill-card:hover {
  border-color: rgba(34, 197, 94, 0.5);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.1);
  transform: translateY(-2px);
}

/* Skill Icon */
.skill-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  juy-content: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
  border: 1px solid rgba(34, 197, 94, 0.1);
  flex-shrink: 0;
}

.skill-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: brightness(1.2);
}

/* Skill Name */
.skill-name {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}

/* Skill Meta */
.skill-meta {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.125rem;
}
</style>
