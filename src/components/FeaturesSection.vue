<script setup>
const features = [
  { 
    title: 'Web Development', 
    desc: 'Build responsive, fast, and scalable web applications with modern technologies and best practices.',
    icon: 'code',
    color: 'from-blue-500 to-indigo-500'
  },
  { 
    title: 'UI/UX Design', 
    desc: 'Create stunning, user-friendly interfaces that engage users and drive conversions.',
    icon: 'design',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Digital Marketing', 
    desc: 'Grow your online presence with data-driven marketing strategies and SEO optimization.',
    icon: 'marketing',
    color: 'from-orange-500 to-red-500'
  },
  { 
    title: 'Mobile Apps', 
    desc: 'Develop native and cross-platform mobile applications for iOS and Android.',
    icon: 'mobile',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Brand Strategy', 
    desc: 'Build a strong brand identity that resonates with your target audience and stands out.',
    icon: 'brand',
    color: 'from-teal-500 to-cyan-500'
  },
  { 
    title: 'Cloud Solutions', 
    desc: 'Deploy and scale your applications with cloud infrastructure and DevOps excellence.',
    icon: 'cloud',
    color: 'from-violet-500 to-purple-500'
  },
]

const getIcon = (type) => {
  const icons = {
    code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    design: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    marketing: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    mobile: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    brand: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  }
  return icons[type] || icons.code
}
</script>

<template>
  <section class="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50" id="services">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Our Services
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Complete Digital Solutions
        </h2>
        <p class="text-lg text-slate-600">
          We provide end-to-end services to transform your digital presence and accelerate business growth
        </p>
      </header>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(f, idx) in features" 
          :key="f.title" 
          class="group relative rounded-2xl border-2 border-slate-200 bg-white p-8 hover:border-brand-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Gradient Background on Hover -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" :class="f.color"></div>
          
          <!-- Icon -->
          <div class="relative mb-6">
            <div 
              class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all" 
              :class="f.color"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(f.icon)" />
              </svg>
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
            {{ f.title }}
          </h3>
          <p class="text-slate-600 leading-relaxed mb-4">
            {{ f.desc }}
          </p>

          <!-- Arrow Link -->
          <div class="flex items-center gap-2 text-brand-600 font-semibold group-hover:gap-4 transition-all">
            <span>Learn More</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>

          <!-- Number Badge -->
          <div class="absolute top-6 right-6 text-6xl font-black text-slate-100 group-hover:text-brand-100 transition-colors">
            0{{ idx + 1 }}
          </div>
        </article>
      </div>

      <!-- CTA Bottom -->
      <div class="text-center mt-16">
        <p class="text-slate-600 mb-6">Can't find what you're looking for?</p>
        <a 
          href="#contact" 
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 hover:scale-105 transition-all shadow-lg"
        >
          Discuss Your Project
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

