<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stats = [
  { 
    label: 'Projects Completed', 
    value: 500, 
    suffix: '+',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-blue-500 to-indigo-500'
  },
  { 
    label: 'Client Satisfaction', 
    value: 98, 
    suffix: '%',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    label: 'Revenue Generated', 
    value: 50, 
    prefix: '$',
    suffix: 'M+',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    label: 'Years Experience', 
    value: 10, 
    suffix: '+',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-orange-500 to-red-500'
  },
]

const displayValues = ref(stats.map(() => 0))
const hasAnimated = ref(false)
let observer = null

const animateValue = (index, target, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start

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

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      stats.forEach((stat, index) => {
        setTimeout(() => animateValue(index, stat.value), index * 100)
      })
    }
  })
}

onMounted(() => {
  const section = document.querySelector('#stats-section')
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  })
  if (section) observer.observe(section)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="stats-section" class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="relative mx-auto container px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
          Career Snapshot
        </h2>
        <p class="text-slate-300 text-lg">
          A quick look at experience and outcomes
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div 
          v-for="(s, idx) in stats" 
          :key="s.label" 
          class="group relative"
        >
          <!-- Card -->
          <div class="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
            <!-- Icon -->
            <div 
              class="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg mb-4 group-hover:scale-110 transition-transform" 
              :class="s.color"
            >
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="s.icon" />
              </svg>
            </div>

            <!-- Value -->
            <div class="text-4xl lg:text-5xl font-black text-white mb-2">
              {{ s.prefix || '' }}{{ displayValues[idx] }}{{ s.suffix || '' }}
            </div>

            <!-- Label -->
            <p class="text-slate-300 font-medium">
              {{ s.label }}
            </p>

            <!-- Glow Effect -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br blur-xl -z-10" :class="s.color"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

