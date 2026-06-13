<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { label: 'Project Selesai', value: 50, suffix: '+', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Kepuasan Klien', value: 98, suffix: '%', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Nilai Project', value: 500, prefix: 'Rp ', suffix: 'Jt+', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Tahun Pengalaman', value: 5, suffix: '+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
]

const displayValues = ref(stats.map(() => 0))
const hasAnimated = ref(false)
const sectionEl = ref(null)
let observer = null

const animateValue = (index, target) => {
  const duration = 1800
  const increment = target / (duration / 16)
  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      displayValues.value[index] = target
      clearInterval(timer)
    } else {
      displayValues.value[index] = Math.floor(current)
    }
  }, 16)
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      stats.forEach((s, i) => setTimeout(() => animateValue(i, s.value), i * 120))
    }
  }, { threshold: 0.4 })
  if (sectionEl.value) observer.observe(sectionEl.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section ref="sectionEl" id="stats-section" class="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
    </div>

    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div
          v-for="(s, i) in stats"
          :key="s.label"
          class="text-center"
        >
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="s.icon" />
            </svg>
          </div>
          <div class="text-3xl lg:text-5xl font-black text-white tracking-tight">
            {{ s.prefix || '' }}{{ displayValues[i] }}{{ s.suffix || '' }}
          </div>
          <p class="text-emerald-100 text-sm lg:text-base font-medium mt-2">{{ s.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
