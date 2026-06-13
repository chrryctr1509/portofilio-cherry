<script setup>
import { ref, computed } from 'vue'

const username = ref('cherrycitra1008')

// GitHub Stats API URLs
const statsUrl = computed(() => `https://github-readme-stats.vercel.app/api?username=${username.value}&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9`)
const streakUrl = computed(() => `https://github-readme-streak-stats.herokuapp.com/?user=${username.value}&theme=dark&hide_border=true&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`)
const topLangsUrl = computed(() => `https://github-readme-stats.vercel.app/api/top-langs/?username=${username.value}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`)
</script>

<template>
  <section class="py-12 px-4 md:px-8 max-w-6xl mx-auto">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-white mb-2">📈 GitHub Stats</h2>
      <p class="text-gray-400">My contribution statistics</p>
    </div>

    <div class="grid gap-6">
      <!-- Main Stats -->
      <div class="bg-[#161b22] border border-[#30363d] rounded-lg p-4 overflow-hidden">
        <img
          :src="statsUrl"
          alt="GitHub Stats"
          class="w-full h-auto"
          loading="lazy"
        />
      </div>

      <!-- Streak Stats -->
      <div class="bg-[#161b22] border border-[#30363d] rounded-lg p-4 overflow-hidden">
        <img
          :src="streakUrl"
          alt="GitHub Streak"
          class="w-full h-auto"
          loading="lazy"
        />
      </div>

      <!-- Top Languages -->
      <div class="bg-[#161b22] border border-[#30363d] rounded-lg p-4 overflow-hidden">
        <img
          :src="topLangsUrl"
          alt="Top Languages"
          class="w-full h-auto"
          loading="lazy"
        />
      </div>

      <!-- Contribution Graph Placeholder -->
      <div class="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
        <h3 class="text-xl font-semibold text-white mb-4">📅 Contribution Activity</h3>
        <div class="flex items-center justify-center h-32 text-gray-500">
          <p>Visit <a :href="`https://github.com/${username}`" target="_blank" class="text-[#58a6ff] hover:underline">@{{ username }}</a> to see full contribution graph</p>
        </div>
      </div>
    </div>
  </section>
</template>
