<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useTheme } from './composables/useTheme'

const route = useRoute()
const router = useRouter()
const showLayout = computed(() => route.path !== '/login')
const isLoading = ref(false)

// Initialize theme
const { theme } = useTheme()

// Track route loading state properly
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    isLoading.value = true
  }
  next()
})

router.afterEach(() => {
  // Add small delay for smooth transition after component is loaded
  setTimeout(() => {
    isLoading.value = false
  }, 150)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
    <!-- Page Loader -->
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
        <!-- Loader Container -->
        <div class="flex flex-col items-center gap-4">
          <!-- Spinner -->
          <div class="relative">
            <div class="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            <!-- Inner pulse -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-8 h-8 bg-emerald-500 rounded-full animate-pulse opacity-20"></div>
            </div>
          </div>
          
          <!-- Loading Text -->
          <div class="flex flex-col items-center gap-2">
            <p class="text-slate-700 dark:text-slate-300 font-semibold text-lg">Loading...</p>
            <div class="flex gap-1">
              <span class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce-dot" style="animation-delay: 0ms"></span>
              <span class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce-dot" style="animation-delay: 150ms"></span>
              <span class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce-dot" style="animation-delay: 300ms"></span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <SiteHeader v-if="showLayout" />
    <main :class="{ 'pt-0': !showLayout }">
      <!-- Use RouterView with proper transition and loading handling -->
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <div v-if="!isLoading" :key="route.path">
            <component :is="Component" />
          </div>
        </Transition>
      </RouterView>
    </main>
    <SiteFooter v-if="showLayout" />
  </div>
</template>

<style scoped>
/* Fade transition for loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page transition for content */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom bounce animation for dots */
@keyframes bounce-dot {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
}

.animate-bounce-dot {
  animation: bounce-dot 1s infinite;
}
</style>

