<script setup>
const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
]

const values = [
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'Innovation First',
    desc: 'We stay ahead of trends and leverage cutting-edge technologies to deliver future-proof solutions.'
  },
  {
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'Client-Centric',
    desc: 'Your success is our success. We build lasting partnerships through transparent communication.'
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Quality Assured',
    desc: 'Every project undergoes rigorous testing and quality checks to ensure excellence.'
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Fast Delivery',
    desc: 'We move quickly without compromising quality, delivering projects on time, every time.'
  },
]
</script>

<template>
  <section class="py-20 lg:py-28 bg-white" id="about">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          About Me
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Building Products That Make An Impact
        </h2>
        <p class="text-lg text-slate-600 leading-relaxed">
          I'm a software engineer focused on crafting scalable systems and intuitive interfaces. Over the years I've worked across the stack, leading projects from idea to production.
        </p>
      </div>

      <!-- Two Column Content -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <!-- Left - Image/Visual -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-100 to-emerald-100 p-8 relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-200 rounded-full blur-3xl opacity-50"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
            
            <!-- Content -->
            <div class="relative h-full flex items-center justify-center">
              <div class="text-center space-y-6">
                <div class="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-2xl">
                  <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="text-6xl font-black text-slate-900">10+</div>
                <div class="text-xl font-bold text-slate-700">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Content -->
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-slate-900">
            A Bit About My Background
          </h3>
          <p class="text-slate-600 leading-relaxed">
            I value clean code, clear communication, and pragmatic solutions. My work blends product thinking, design sense, and engineering rigor.
          </p>
          <p class="text-slate-600 leading-relaxed">
            I've collaborated with startups and enterprises to deliver products that are reliable, maintainable, and user‑centric.
          </p>
          
          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div v-for="stat in stats" :key="stat.label" class="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
              <div class="text-3xl font-black text-brand-600 mb-1">{{ stat.value }}</div>
              <div class="text-sm text-slate-600 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values Grid -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-slate-900 text-center mb-12">
          Principles I Work By
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(value, idx) in values" 
            :key="value.title"
            class="group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Icon -->
            <div class="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon" />
              </svg>
            </div>
            
            <h4 class="text-xl font-bold text-slate-900 mb-3">{{ value.title }}</h4>
            <p class="text-slate-600">{{ value.desc }}</p>

            <!-- Number Badge -->
            <div class="absolute top-6 right-6 text-5xl font-black text-slate-100 group-hover:text-brand-100 transition-colors">
              0{{ idx + 1 }}
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-16">
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h3>
        <p class="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your digital presence and achieve your business goals.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-emerald-500 text-white font-bold hover:scale-105 transition-all shadow-xl"
          >
            Get Started Today
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="#portfolio" 
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

