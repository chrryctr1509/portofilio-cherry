<script setup>
import { ref } from 'vue'

const techStack = ref([
  { name: 'Vue.js', icon: '🟢', color: '#42b883' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', icon: '📘', color: '#3178c6' },
  { name: 'Node.js', icon: '🟩', color: '#339933' },
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'Go', icon: '🔵', color: '#00add8' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'MongoDB', icon: '🍃', color: '#47a248' },
  { name: 'Redis', icon: '🔴', color: '#dc382d' },
  { name: 'Git', icon: '📦', color: '#f05032' },
  { name: 'AWS', icon: '☁️', color: '#ff9900' },
  { name: 'Tailwind CSS', icon: '🎨', color: '#06b6d4' },
  { name: 'GraphQL', icon: '🔷', color: '#e10098' }
])
</script>

<template>
  <section class="py-12 px-4 md:px-8 max-w-6xl mx-auto">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-white mb-2">🛠️ Tech Stack</h2>
      <p class="text-gray-400">Technologies I work with</p>
    </div>

    <div class="flex flex-wrap gap-3">
      <div
        v-for="tech in techStack"
        :key="tech.name"
        class="group relative px-4 py-2 bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] rounded-lg transition-all duration-200 cursor-pointer"
      >
        <div class="flex items-center gap-2">
          <span class="text-xl">{{ tech.icon }}</span>
          <span class="text-gray-300 font-medium">{{ tech.name }}</span>
        </div>

        <!-- Hover effect -->
        <div
          class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"
          :style="{ backgroundColor: tech.color }"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional animations */
</style>
