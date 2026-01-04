<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { projectsData } from '../data/projects'

const selectedCategory = ref('All')

const categories = computed(() => {
  const unique = new Set(projectsData.map(project => project.category))
  return ['All', ...unique]
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projectsData
  return projectsData.filter(project => project.category === selectedCategory.value)
})
</script>

<template>
  <section class="py-24 bg-white dark:bg-slate-950 min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
      <div class="flex flex-col gap-6 mb-16 text-center">
        <p class="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-500">Portfolio</p>
        <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Semua Proyek Terbaru</h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Jelajahi daftar lengkap proyek pengembangan web, API, dan platform internal yang pernah saya kerjakan.
        </p>
        <div class="flex justify-center">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-all"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke beranda
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          class="px-6 py-3 rounded-xl font-semibold transition-all"
          :class="
            selectedCategory === cat
              ? 'bg-gradient-to-r from-brand-500 to-emerald-500 text-white shadow-lg scale-105'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          "
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="aspect-[4/3] relative overflow-hidden bg-gradient-to-br" :class="project.color">
            <div class="absolute inset-0 opacity-20">
              <div
                class="absolute inset-0"
                style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 30px 30px;"
              ></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white/60"
                loading="lazy"
              />
              <div
                v-else
                class="w-full h-full bg-white/90 rounded-lg shadow-2xl border-4 border-white/50 flex items-center justify-center backdrop-blur-sm"
              >
                <svg class="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <div
              class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-300 flex items-center justify-center"
            >
              <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <button
                  class="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-brand-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  View Project
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 dark:text-slate-100"
            >
              {{ project.category }}
            </div>
          </div>

          <div class="p-6">
            <h3
              class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              {{ project.desc }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-100 rounded-full text-xs font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

