<script setup>
import { ref, onMounted } from 'vue'

const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 100)
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/30 pt-24 pb-20 lg:pt-32 lg:pb-28">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <div class="relative mx-auto container px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div 
          class="space-y-8 transition-all duration-1000"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Badge -->
          <div class="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-200/50 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-brand-700 shadow-lg hover:shadow-xl transition-shadow">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            #1 Trusted Digital Agency 2024
          </div>

          <!-- Heading -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            <span class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span class="bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            We craft exceptional digital experiences that drive growth, engage audiences, and elevate your brand to new heights. Let's build something extraordinary together.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <a 
              href="#contact" 
              class="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Start Your Project
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#portfolio" 
              class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Our Work
            </a>
          </div>
        </div>

        <!-- Right Visual -->
        <div 
          class="relative transition-all duration-1000 delay-300"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Main Card -->
          <div class="relative rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 p-8 shadow-2xl border border-white">
            <!-- Decorative Grid -->
            <div class="aspect-[4/3] rounded-2xl bg-white shadow-inner border border-slate-200 grid place-items-center relative overflow-hidden">
              <div class="absolute inset-0 grid grid-cols-6 grid-rows-6">
                <div v-for="i in 36" :key="i" class="border border-slate-100"></div>
              </div>
              <div class="relative z-10 text-center space-y-4">
                <div class="flex justify-center">
                  <svg class="w-24 h-24 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="text-slate-400 font-semibold">Professional Web Design</div>
              </div>
            </div>
          </div>

          <!-- Floating Cards -->
          <div class="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-bounce" style="animation-duration: 3s;">
            <div class="flex items-center gap-3">
              <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-400 to-emerald-400 flex items-center justify-center text-white font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-slate-500">Success Rate</div>
                <div class="text-lg font-bold text-slate-900">98%</div>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-bounce" style="animation-duration: 3s; animation-delay: 1s;">
            <div class="flex items-center gap-3">
              <div class="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-slate-500">Fast Delivery</div>
                <div class="text-lg font-bold text-slate-900">2 Weeks</div>
              </div>
            </div>
          </div>

          <!-- Glow Effects -->
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-300/40 rounded-full blur-3xl"></div>
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-emerald-300/40 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

