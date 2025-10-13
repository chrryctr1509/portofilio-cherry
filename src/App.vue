<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import PageLoader from './components/PageLoader.vue'

const route = useRoute()
const showLayout = computed(() => route.path !== '/login')
const isLoading = ref(false)

// Watch for route changes to show loader
watch(() => route.path, () => {
  isLoading.value = true
  // Simulate minimum loading time for smooth transition
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800">
    <!-- Page Loader -->
    <Transition name="fade">
      <PageLoader v-if="isLoading" />
    </Transition>

    <SiteHeader v-if="showLayout" />
    <main :class="{ 'pt-0': !showLayout }">
      <Suspense>
        <template #default>
          <RouterView v-slot="{ Component }">
            <Transition name="page" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </template>
        <template #fallback>
          <PageLoader />
        </template>
      </Suspense>
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

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

