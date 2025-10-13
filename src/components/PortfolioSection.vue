<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'E-commerce']
const selectedCategory = ref('All')

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    desc: 'Modern e-commerce solution with seamless checkout experience',
    color: 'from-blue-500 to-indigo-600',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    category: 'Mobile App',
    desc: 'Health tracking app with personalized workout plans',
    color: 'from-emerald-500 to-teal-600',
    tags: ['React Native', 'Firebase']
  },
  {
    id: 3,
    title: 'Brand Identity System',
    category: 'Branding',
    desc: 'Complete brand identity for tech startup',
    color: 'from-purple-500 to-pink-600',
    tags: ['Figma', 'Illustrator']
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Design',
    desc: 'Analytics dashboard with real-time data visualization',
    color: 'from-orange-500 to-red-600',
    tags: ['Vue.js', 'Chart.js']
  },
  {
    id: 5,
    title: 'Food Delivery App',
    category: 'Mobile App',
    desc: 'Fast and intuitive food ordering experience',
    color: 'from-teal-500 to-cyan-600',
    tags: ['Flutter', 'Dart']
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'Web Design',
    desc: 'Professional website for B2B services company',
    color: 'from-violet-500 to-purple-600',
    tags: ['Next.js', 'Tailwind']
  },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>

<template>
  <section class="py-20 lg:py-28 bg-white" id="portfolio">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Our Portfolio
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p class="text-lg text-slate-600">
          Explore our recent work and see how we've helped businesses transform their digital presence
        </p>
      </header>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-6 py-3 rounded-xl font-semibold transition-all"
          :class="selectedCategory === cat 
            ? 'bg-gradient-to-r from-brand-500 to-emerald-500 text-white shadow-lg scale-105' 
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200 hover:border-brand-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Image Container -->
          <div class="aspect-[4/3] relative overflow-hidden bg-gradient-to-br" :class="project.color">
            <!-- Pattern Overlay -->
            <div class="absolute inset-0 opacity-20">
              <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 30px 30px;"></div>
            </div>
            
            <!-- Mockup -->
            <div class="absolute inset-0 flex items-center justify-center p-8">
              <div class="w-full h-full bg-white/90 rounded-lg shadow-2xl border-4 border-white/50 flex items-center justify-center backdrop-blur-sm">
                <svg class="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <!-- Overlay with Link -->
            <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <button class="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-brand-500 hover:text-white transition-colors flex items-center gap-2">
                  View Project
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
              {{ project.category }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-slate-600 mb-4">
              {{ project.desc }}
            </p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-16">
        <a 
          href="#contact" 
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-900 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
        >
          View All Projects
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

