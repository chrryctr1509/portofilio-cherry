<script setup>
const contacts = [
  {
    label: 'Telepon',
    value: '0877 6188 2915',
    href: 'tel:+6287761882915',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  {
    label: 'Email',
    value: 'chrryctr1509@gmail.com',
    href: 'mailto:chrryctr1509@gmail.com',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    label: 'Lokasi',
    value: 'Jakarta Barat, Indonesia',
    href: null,
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  },
]

const whatsappPath = `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z`
</script>

<template>
  <section id="contact" class="py-20 lg:py-28 bg-white dark:bg-slate-950">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <header class="text-center max-w-2xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-4">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Mari Terhubung
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Hubungi Saya</h2>
        <p class="text-slate-500 dark:text-slate-400">
          Saya terbuka untuk kesempatan profesional, kolaborasi, atau diskusi seputar teknologi.
        </p>
      </header>

      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          <!-- LEFT: WhatsApp Card -->
          <div class="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 lg:p-10 text-center h-full flex flex-col items-center justify-center">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25">
              <svg class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path :d="whatsappPath" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Chat via WhatsApp</h3>
            <p class="text-slate-500 dark:text-slate-400 mb-8 max-w-xs">
              Klik tombol di bawah untuk langsung chat. Respon cepat dan siap berdiskusi tentang project Anda!
            </p>
            <a
              href="https://wa.me/6287761882915?text=Halo%20Cherry%2C%20saya%20tertarik%20untuk%20terhubung%20dengan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:from-green-600 hover:to-emerald-700 transition-all cursor-pointer text-base"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path :d="whatsappPath" />
              </svg>
              Chat WhatsApp Sekarang
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <!-- RIGHT: Contact Info -->
          <div class="flex flex-col gap-4">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Informasi Kontak</h3>
            <component
              :is="c.href ? 'a' : 'div'"
              v-for="c in contacts"
              :key="c.label"
              :href="c.href || undefined"
              class="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              :class="c.href ? 'cursor-pointer' : ''"
            >
              <div :class="`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${c.color}`">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="c.icon" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{{ c.label }}</p>
                <p class="font-semibold text-slate-700 dark:text-slate-200">{{ c.value }}</p>
              </div>
            </component>

            <!-- Availability badge -->
            <div class="flex items-center gap-3 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mt-1">
              <span class="relative flex h-3 w-3 shrink-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <p class="text-sm font-bold text-emerald-700 dark:text-emerald-400">Tersedia untuk Pekerjaan Baru</p>
                <p class="text-xs text-emerald-600/70 dark:text-emerald-500">Terbuka untuk full-time, freelance, dan kolaborasi</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
