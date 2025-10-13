<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const testimonials = [
  { 
    name: 'Sarah Johnson', 
    role: 'CEO at TechFlow', 
    company: 'TechFlow Inc.',
    text: 'Working with CreativeHub transformed our digital presence completely. Their team delivered beyond our expectations, creating a stunning website that increased our conversion rate by 150%. The attention to detail and creative approach was exceptional.',
    rating: 5,
    avatar: 'SJ'
  },
  { 
    name: 'Michael Chen', 
    role: 'Founder', 
    company: 'StartupLab',
    text: 'The best decision we made was partnering with CreativeHub. They understood our vision and brought it to life with incredible design and functionality. Our user engagement has skyrocketed since the launch!',
    rating: 5,
    avatar: 'MC'
  },
  { 
    name: 'Emma Williams', 
    role: 'Marketing Director', 
    company: 'GrowthCo',
    text: 'Professional, creative, and results-driven. CreativeHub helped us rebrand and redesign our entire digital ecosystem. The ROI has been phenomenal, and we continue to work with them on new projects.',
    rating: 5,
    avatar: 'EW'
  },
  { 
    name: 'David Rodriguez', 
    role: 'Product Manager', 
    company: 'InnovateTech',
    text: 'From concept to execution, CreativeHub demonstrated excellence at every stage. Their technical expertise combined with creative vision made our app stand out in a crowded market. Highly recommend!',
    rating: 5,
    avatar: 'DR'
  },
]

const index = ref(0)
const current = computed(() => testimonials[index.value])

let autoPlayInterval = null

function prev() { 
  index.value = (index.value + testimonials.length - 1) % testimonials.length 
  resetAutoPlay()
}

function next() { 
  index.value = (index.value + 1) % testimonials.length 
  resetAutoPlay()
}

function goTo(idx) {
  index.value = idx
  resetAutoPlay()
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    index.value = (index.value + 1) % testimonials.length
  }, 5000)
}

function resetAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
  startAutoPlay()
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<template>
  <section class="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white" id="testimonials">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Testimonials
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          What Our Clients Say
        </h2>
        <p class="text-lg text-slate-600">
          Don't just take our word for it - hear from businesses we've helped transform
        </p>
      </header>

      <div class="max-w-6xl mx-auto">
        <!-- Main Testimonial Card -->
        <div class="relative">
          <div class="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
            <div class="grid lg:grid-cols-5 gap-8 p-8 lg:p-12">
              <!-- Left Side - Avatar & Info -->
              <div class="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div class="relative mb-6">
                  <!-- Avatar -->
                  <div class="h-32 w-32 rounded-full bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    {{ current.avatar }}
                  </div>
                  <!-- Quote Icon -->
                  <div class="absolute -bottom-3 -right-3 h-14 w-14 rounded-full bg-slate-900 flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                <!-- Stars -->
                <div class="flex gap-1 mb-4">
                  <svg v-for="i in 5" :key="i" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <h3 class="text-2xl font-bold text-slate-900 mb-1">{{ current.name }}</h3>
                <p class="text-brand-600 font-semibold mb-1">{{ current.role }}</p>
                <p class="text-slate-500 text-sm">{{ current.company }}</p>
              </div>

              <!-- Right Side - Testimonial Text -->
              <div class="lg:col-span-3 flex flex-col justify-center">
                <p class="text-xl lg:text-2xl text-slate-700 leading-relaxed italic">
                  "{{ current.text }}"
                </p>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex items-center justify-center gap-4 mt-8">
            <button 
              @click="prev"
              class="h-12 w-12 rounded-full bg-white border-2 border-slate-300 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center group shadow-lg"
            >
              <svg class="w-6 h-6 text-slate-600 group-hover:text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <!-- Dots -->
            <div class="flex gap-2">
              <button
                v-for="(_, idx) in testimonials"
                :key="idx"
                @click="goTo(idx)"
                class="transition-all rounded-full"
                :class="index === idx 
                  ? 'w-12 h-3 bg-gradient-to-r from-brand-500 to-emerald-500' 
                  : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'"
              ></button>
            </div>

            <button 
              @click="next"
              class="h-12 w-12 rounded-full bg-white border-2 border-slate-300 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center group shadow-lg"
            >
              <svg class="w-6 h-6 text-slate-600 group-hover:text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

