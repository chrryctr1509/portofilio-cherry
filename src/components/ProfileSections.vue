<script setup>
import { ref } from 'vue'
import CollapsibleSection from './CollapsibleSection.vue'

const projects = ref([
  {
    name: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Vue.js, Node.js, and PostgreSQL',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    stars: 245,
    forks: 67,
    url: 'https://github.com/cherrycitra1008/ecommerce'
  },
  {
    name: 'Task Management App',
    description: 'Real-time collaborative task manager with WebSocket support',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
    stars: 189,
    forks: 43,
    url: 'https://github.com/cherrycitra1008/taskmanager'
  },
  {
    name: 'API Gateway',
    description: 'Microservices API gateway with rate limiting and authentication',
    tech: ['Go', 'Redis', 'Docker', 'Kubernetes'],
    stars: 312,
    forks: 89,
    url: 'https://github.com/cherrycitra1008/api-gateway'
  }
])

const achievements = ref([
  { icon: '🏆', title: 'Top Contributor', description: 'Ranked in top 5% of contributors on GitHub' },
  { icon: '⭐', title: '1000+ Stars', description: 'Accumulated over 1000 stars across repositories' },
  { icon: '🎯', title: '365 Day Streak', description: 'Maintained a year-long contribution streak' },
  { icon: '🤝', title: 'Open Source', description: 'Contributed to 50+ open source projects' }
])

const stats = ref({
  totalCommits: '2,456',
  pullRequests: '342',
  issues: '189',
  repositories: '67'
})
</script>

<template>
  <section class="py-12 px-4 md:px-8 max-w-6xl mx-auto">
    <!-- About Me -->
    <CollapsibleSection title="About Me" icon="👨‍💻" :default-open="true">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1 text-gray-300 space-y-4">
          <p class="leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building scalable web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p class="leading-relaxed">
            When I'm not coding, you'll find me contributing to open source projects, writing technical articles,
            or exploring new technologies and frameworks.
          </p>
          <div class="flex flex-wrap gap-2 pt-4">
            <span class="px-3 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded-full text-sm">Problem Solver</span>
            <span class="px-3 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded-full text-sm">Team Player</span>
            <span class="px-3 py-1 bg-[#1f6feb]/20 text-[#58a6ff] rounded-full text-sm">Fast Learner</span>
          </div>
        </div>
        <div class="flex-shrink-0">
          <div class="w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-6xl">
            💻
          </div>
        </div>
      </div>
    </CollapsibleSection>

    <!-- Projects -->
    <CollapsibleSection title="Featured Projects" icon="🚀" :default-open="true">
      <div class="grid gap-4">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          class="p-4 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] rounded-lg transition-all group"
        >
          <div class="flex items-start justify-between mb-2">
            <h4 class="text-lg font-semibold text-[#58a6ff] group-hover:underline">{{ project.name }}</h4>
            <div class="flex gap-3 text-sm text-gray-400">
              <span class="flex items-center gap-1">⭐ {{ project.stars }}</span>
              <span class="flex items-center gap-1">🔱 {{ project.forks }}</span>
            </div>
          </div>
          <p class="text-gray-400 mb-3">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-2 py-1 bg-[#1f6feb]/10 text-[#58a6ff] rounded text-xs"
            >
              {{ tech }}
            </span>
          </div>
        </a>
      </div>
    </CollapsibleSection>

    <!-- Statistics -->
    <CollapsibleSection title="GitHub Statistics" icon="📊">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-[#161b22] border border-[#30363d] rounded-lg text-center">
          <div class="text-3xl font-bold text-[#58a6ff] m1">{{ stats.totalCommits }}</div>
          <div class="text-sm text-gray-400">Total Commits</div>
        </div>
        <div class="p-4 bg-[#161b22] border border-[#30363d] rounded-lg text-center">
          <div class="text-3xl font-bold text-[#58a6ff] mb-1">{{ stats.pullRequests }}</div>
          <div class="text-sm text-gray-400">Pull Requests</div>
        </div>
        <div class="p-4 bg-[#161b22] border border-[#30363d] rounded-lg text-center">
          <div class="text-3xl font-bold text-[#58a6ff] mb-1">{{ stats.issues }}</div>
          <div class="text-sm text-gray-400">Issues Resolved</div>
        </div>
        <div class="p-4 bg-[#161b22] border border-[#30363d] rounded-lg text-center">
          <div class="text-3xl font-bold text-[#58a6ff] mb-1">{{ stats.repositories }}</div>
          <div class="text-sm text-gray-400">Repositories</div>
        </div>
      </div>
    </CollapsibleSection>

    <!-- Achievements -->
    <CollapsibleSection title="Achievements" icon="🎖️">
      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="achievement in achievements"
          :key="achievement.title"
          class="p-4 bg-[#161b22] border border-[#30363d] rounded-lg flex items-start gap-4"
        >
          <span class="text-4xl">{{ achievement.icon }}</span>
          <div>
            <h4 class="text-lg font-semibold text-white mb-1">{{ achievement.title }}</h4>
            <p class="text-gray-400 text-sm">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  </section>
</template>
