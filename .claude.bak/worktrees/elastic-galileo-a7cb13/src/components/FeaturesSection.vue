<script setup>
const features = [
  {
    title: 'Frontend Development',
    desc: 'React, Vue.js, Next.js, Tailwind CSS. UI yang responsif, aksesibel, dan berbasis komponen.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    num: '01',
  },
  {
    title: 'Backend Development',
    desc: 'Node.js, Laravel, RESTful API, autentikasi, caching, dan desain database yang skalabel.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    num: '02',
  },
  {
    title: 'Arsitektur & Desain',
    desc: 'Clean architecture, pola modular, dan desain pragmatis untuk sistem yang mudah dipelihara.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    num: '03',
  },
  {
    title: 'Mobile Apps',
    desc: 'React Native dan Flutter untuk pengalaman lintas platform dengan performa native.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    num: '04',
  },
  {
    title: 'DevOps & Cloud',
    desc: 'Docker, CI/CD, monitoring, dan deployment cloud untuk pengiriman yang andal dan efisien.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    color: 'from-cyan-500 to-sky-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    num: '05',
  },
  {
    title: 'Testing & Kualitas',
    desc: 'Unit, integrasi, dan e2e testing. Profiling performa dan optimasi kode.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    num: '06',
  },
]
</script>

<template>
  <section id="skills" class="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <header class="text-center max-w-2xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-4">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Keahlian & Expertise
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Yang Saya Kuasai</h2>
        <p class="text-slate-500 dark:text-slate-400">Keterampilan inti yang saya gunakan untuk merancang, membangun, dan mengirimkan produk</p>
      </header>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="f in features"
          :key="f.title"
          class="group relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
        >
          <!-- Icon -->
          <div class="relative mb-5 w-fit">
            <div :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all`">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="f.icon" />
              </svg>
            </div>
          </div>

          <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
            {{ f.title }}
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ f.desc }}</p>
        </article>
      </div>

    </div>
  </section>
</template>
