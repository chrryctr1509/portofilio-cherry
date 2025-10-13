<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const isLoggedIn = ref(false)
const userRole = ref('')

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

const checkAuth = () => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  isLoggedIn.value = !!token
  userRole.value = role || ''
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  localStorage.removeItem('email')
  isLoggedIn.value = false
  userRole.value = ''
  router.push('/')
}

const dashboardLink = computed(() => {
  return userRole.value === 'admin' ? '/admin' : '/dashboard'
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  checkAuth()
  // Re-check auth on storage change (for multi-tab sync)
  window.addEventListener('storage', checkAuth)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('storage', checkAuth)
})
</script>

<template>
  <header 
    class="sticky top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'"
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
          <span class="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            CreativeHub
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <a 
            v-for="item in ['Services', 'Portfolio', 'Testimonials', 'About', 'Contact']" 
            :key="item"
            :href="`#${item.toLowerCase()}`"
            @click="(e) => smoothScroll(e, `#${item.toLowerCase()}`)"
            class="px-4 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all relative group"
          >
            {{ item }}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-3/4 transition-all duration-300"></span>
          </a>
        </nav>

        <!-- CTA Buttons Desktop -->
        <div class="hidden lg:flex items-center gap-3">
          <template v-if="!isLoggedIn">
            <a href="/login" class="px-5 py-2.5 text-sm font-semibold text-slate-700 rounded-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
              Sign In
            </a>
            <a href="/login" class="px-6 py-2.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-500 via-emerald-500 to-teal-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Start Project
            </a>
          </template>
          <template v-else>
            <a :href="dashboardLink" class="px-5 py-2.5 text-sm font-semibold text-slate-700 rounded-lg border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ userRole === 'admin' ? 'Admin Panel' : 'Dashboard' }}
            </a>
            <button @click="logout" class="px-6 py-2.5 text-sm font-bold text-white rounded-lg bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
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
              v-for="item in ['Services', 'Portfolio', 'Testimonials', 'About', 'Contact']"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              @click="(e) => smoothScroll(e, `#${item.toLowerCase()}`)"
              class="px-4 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
            >
              {{ item }}
            </a>
          </nav>
          <div class="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-200">
            <template v-if="!isLoggedIn">
              <a href="/login" class="px-4 py-3 text-sm font-semibold text-slate-700 rounded-lg border-2 border-slate-200 hover:bg-slate-50 transition-all text-center">
                Sign In
              </a>
              <a href="/login" class="px-4 py-3 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-500 to-emerald-500 shadow-lg text-center">
                Start Project
              </a>
            </template>
            <template v-else>
              <a :href="dashboardLink" class="px-4 py-3 text-sm font-semibold text-slate-700 rounded-lg border-2 border-slate-200 hover:bg-brand-50 transition-all text-center">
                {{ userRole === 'admin' ? 'Admin Panel' : 'Dashboard' }}
              </a>
              <button @click="logout" class="px-4 py-3 text-sm font-bold text-white rounded-lg bg-slate-900 shadow-lg">
                Logout
              </button>
            </template>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
</style>

