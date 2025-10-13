<script setup>
</script>

<template>
  <div class="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div class="text-center">
      <!-- Spinner -->
      <div class="relative inline-flex">
        <div class="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      
      <!-- Loading Text -->
      <div class="mt-6">
        <h3 class="text-lg font-bold text-slate-900 mb-1">Loading...</h3>
        <p class="text-sm text-slate-600">Please wait a moment</p>
      </div>
      
      <!-- Progress Dots -->
      <div class="flex items-center justify-center gap-2 mt-4">
        <div class="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
        <div class="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
        <div class="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}
</style>

