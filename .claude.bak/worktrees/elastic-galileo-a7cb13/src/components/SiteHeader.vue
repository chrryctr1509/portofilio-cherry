<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const { theme, toggleTheme } = useTheme()

const navItems = [
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'portfolio', label: 'Portofolio' },
]

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

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80'
      : 'bg-transparent'"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-18">

        <!-- Logo -->
        <a href="#" @click="(e) => smoothScroll(e, '#about')" class="flex items-center gap-2.5 group cursor-pointer">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="font-bold text-slate-900 dark:text-white text-base tracking-tight">
            Cherry <span class="text-emerald-600 dark:text-emerald-400">Citra</span>
          </span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            @click="(e) => smoothScroll(e, `#${item.id}`)"
            class="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            :aria-label="theme === 'dark' ? 'Mode terang' : 'Mode gelap'"
          >
            <svg v-if="theme === 'light'" class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg v-else class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <a
            href="#contact"
            @click="(e) => smoothScroll(e, '#contact')"
            class="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-sm hover:shadow-md hover:from-emerald-600 hover:to-teal-700 transition-all cursor-pointer"
          >
            Hubungi Saya
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          class="lg:hidden pb-4 pt-1 border-t border-slate-200 dark:border-slate-800 mt-1"
        >
          <nav class="flex flex-col gap-1 mb-4">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click="(e) => smoothScroll(e, `#${item.id}`)"
              class="px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {{ item.label }}
            </a>
          </nav>
          <div class="flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              @click="toggleTheme"
              class="flex-1 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {{ theme === 'light' ? '🌙 Mode Gelap' : '☀️ Mode Terang' }}
            </button>
            <a
              href="#contact"
              @click="(e) => smoothScroll(e, '#contact')"
              class="flex-1 py-2.5 text-sm font-semibold text-white text-center bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg cursor-pointer"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
