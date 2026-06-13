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
    class="sticky top-0 z-50 transition-all duration-300 border-b"
    :class="scrolled
      ? 'shadow-lg shadow-black/20'
      : 'backdrop-blur-md'"
    style="background: rgba(10,15,10,0.95); border-color: rgba(34,197,94,0.2);"
  >
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow" style="background: linear-gradient(135deg, var(--accent-green-soft), var(--accent-green));">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span class="absolute -top-1 -right-1 h-3 w-3 rounded-full animate-pulse" style="background: var(--accent-green);"></span>
          </div>
          <span class="text-xl font-bold tracking-tight terminal-cursor" style="font-family: var(--font-mono); color: var(--text-primary);">
            >_ Cherry Citra
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <a
            v-for="item in ['About', 'Skills', 'Portfolio']"
            :key="item"
            :href="`#${item.toLowerCase()}`"
            @click="(e) => smoothScroll(e, `#${item.toLowerCase()}`)"
            class="nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all relative group"
            style="color: var(--text-secondary);"
          >
            {{ item }}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300" style="background: var(--accent-green-soft);"></span>
          </a>
        </nav>

        <!-- CTA Buttons Desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <a href="#contact" @click="(e) => smoothScroll(e, '#contact')" class="cta-button px-6 py-2.5 text-sm font-bold rounded-lg border transition-all" style="border-color: var(--accent-green-soft); color: var(--accent-green-soft); background: transparent;">
            Contact Me
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg transition-colors"
          style="color: var(--text-secondary);"
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
              v-for="item in ['About', 'Skills', 'Portfolio']"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              @click="(e) => smoothScroll(e, `#${item.toLowerCase()}`)"
              class="px-4 py-3 text-base font-medium rounded-lg transition-all"
              style="color: var(--text-secondary);"
            >
              {{ item }}
            </a>
          </nav>
          <div class="flex flex-col gap-3 mt-4 pt-4 border-t" style="border-color: var(--border-default);">
            <a href="#contact" @click="(e) => smoothScroll(e, '#contact')" class="px-4 py-3 text-sm font-bold rounded-lg shadow-lg text-center border" style="border-color: var(--accent-green-soft); color: var(--accent-green-soft); background: transparent;">
              Contact Me
            </a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.nav-link:hover {
  color: var(--accent-green);
  text-shadow: var(--glow-sm);
}

.nav-link:hover span {
  width: 75%;
}

.cta-button:hover {
  background: rgba(34, 197, 94, 0.1);
  box-shadow: var(--glow-sm);
}
</style>

