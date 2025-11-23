<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const { theme, toggleTheme } = useTheme()

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const smoothScroll = (e, target) => {
  e.preventDefault()
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled 
      ? 'bg-white shadow-lg dark:bg-slate-900 dark:shadow-black/20' 
      : 'bg-white/90 backdrop-blur-md dark:bg-slate-900/80'"
  >
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span class="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full animate-pulse"></span>
          </div>
          <span class="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Cherry Citra
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <a 
            v-for="item in ['About', 'Skills', 'Projects']" 
            :key="item"
            :href="`#${item.toLowerCase()}`"
            @click="(e) => smoothScroll(e, `#${item.toLowerCase()}`)"
            class="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-emerald-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-lg transition-all relative group"
          >
            {{ item }}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-3/4 transition-all duration-300"></span>
          </a>
        </nav>

        <!-- CTA Buttons Desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="h-10 w-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" :aria-pressed="theme==='dark'">
            <svg v-if="theme==='light'" class="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 4a1 1 0 011 1h-2a1 1 0 011-1zm0-22a1 1 0 00-1 1h2a1 1 0 00-1-1zM1 13a1 1 0 010-2h2a1 1 0 010 2H1zm20 0a1 1 0 010-2h2a1 1 0 010 2h-2zM4.22 19.78a1 1 0 010-1.41l1.42-1.42a1 1 0 111.41 1.41L5.64 19.78a1 1 0 01-1.42 0zM16.95 7.05a1 1 0 010-1.41l1.41-1.42a1 1 0 111.42 1.41L18.36 7.05a1 1 0 01-1.41 0zM4.22 4.22a1 1 0 011.41 0L7.05 5.64A1 1 0 115.64 7.05L4.22 5.63a1 1 0 010-1.41zM16.95 16.95a1 1 0 011.41 0l1.42 1.41a1 1 0 01-1.42 1.42l-1.41-1.42a1 1 0 010-1.41z"/></svg>
            <svg v-else class="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor"><path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z"/></svg>
          </button>
          <a href="#contact" @click="(e) => smoothScroll(e, '#contact')" class="px-6 py-2.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-500 via-emerald-500 to-teal-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Contact Me
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden pb-6 pt-2">
          <nav class="flex flex-col gap-2">
            <a 
              v-for="item in ['About', 'Skills', 'Projects']"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              @click="(e) => smoothScroll(e, `#${item.toLowerCase()}`)"
              class="px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-emerald-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-lg transition-all"
            >
              {{ item }}
            </a>
          </nav>
          <div class="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-200">
            <button @click="toggleTheme" class="px-4 py-3 text-sm font-bold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
              <span v-if="theme==='light'">Enable Dark Mode</span>
              <span v-else>Disable Dark Mode</span>
            </button>
            <a href="#contact" @click="(e) => smoothScroll(e, '#contact')" class="px-4 py-3 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-500 to-emerald-500 shadow-lg text-center">
              Contact Me
            </a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
</style>

