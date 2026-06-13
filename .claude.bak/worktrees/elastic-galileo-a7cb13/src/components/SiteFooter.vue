<script setup>
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Pendidikan', href: '#education' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Kontak', href: '#contact' },
]

const services = [
  'Web Development',
  'Mobile App Development',
  'Backend & API',
  'DevOps & Deployment',
]

const contact = {
  phone: '+62 877-6188-2915',
  email: 'chrryctr1509@gmail.com',
  location: 'Jakarta Barat, Indonesia',
}

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/cherryctr',
    icon: 'M22 12.06A10 10 0 1010.75 22v-6.99H8.2v-2.95h2.55V9.92c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.95h-2.34V22A10 10 0 0022 12.06z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mascherr30',
    icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 19a5.5 5.5 0 010-11.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 6.5z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/chrryctr1509',
    icon: 'M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.68c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.36 1.12 2.94.85.1-.67.36-1.12.65-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 015 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.96-2.35 4.83-4.58 5.08.37.33.7.97.7 1.96v2.9c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z',
  },
]
</script>

<template>
  <footer class="bg-slate-900 dark:bg-slate-950 text-slate-300">

    <!-- Main content -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="font-bold text-white text-base">Cherry <span class="text-emerald-400">Citra</span></span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
            Developer yang berdedikasi dalam menciptakan solusi digital inovatif. Fokus pada kualitas, performa, dan pengalaman pengguna.
          </p>
          <div class="flex items-center gap-2">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.name"
              class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors cursor-pointer group"
            >
              <svg class="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path :d="s.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigasi -->
        <div>
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Navigasi</h4>
          <ul class="space-y-2.5">
            <li v-for="link in navLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Layanan & Kontak -->
        <div>
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Kontak</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a :href="`tel:${contact.phone.replace(/\s|-/g,'')}`" class="text-sm text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer">{{ contact.phone }}</a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a :href="`mailto:${contact.email}`" class="text-sm text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer break-all">{{ contact.email }}</a>
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm text-slate-400">{{ contact.location }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-800">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-slate-500">© {{ currentYear }} Cherry Citra. All rights reserved.</p>
        <div class="flex items-center gap-4 text-xs text-slate-500">
          <a href="#" class="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</a>
          <span class="text-slate-700">·</span>
          <a href="#" class="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</a>
        </div>
      </div>
    </div>

  </footer>
</template>
