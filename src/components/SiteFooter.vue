<script setup>
const currentYear = new Date().getFullYear();

const expertise = [
  "Web Development",
  "Mobile App Development",
  "Backend & API",
  "Portofolio",
];

const contact = {
  address: [
    "Jl. Pedongkelan Belakang Rt 07/016. 102",
    "Kecamatan Cengkareng",
    "Kota Jakarta Barat",
    "DKI Jakarta 11720",
  ],
  phone: "+62 877-6188-2915",
  email: "chrryctr1509@gmail.com",
};

const socialLinks = [
  {
    name: "Facebook",
    icon: "M22 12.06A10 10 0 1010.75 22v-6.99H8.2v-2.95h2.55V9.92c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.95h-2.34V22A10 10 0 0022 12.06z",
    href: "https://www.facebook.com/cherryctr",
  },
  {
    name: "Instagram",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5a7 7 0 100 14 7 7 0 000-14zm0 3.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM18.5 4.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z",
    href: "https://www.instagram.com/mascherr30",
  },
  {
    name: "GitHub",
    icon: "M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.68c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.36 1.12 2.94.85.1-.67.36-1.12.65-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 015 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.96-2.35 4.83-4.58 5.08.37.33.7.97.7 1.96v2.9c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z",
    href: "https://github.com/chrryctr1509",
  },
];
</script>

<template>
  <footer
    class="relative overflow-hidden bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white"
    id="contact"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5 dark:opacity-3">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgb(71 85 105) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative">
      <!-- Main Footer Content -->
      <div class="container px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-20">
        <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
          <!-- Brand Column -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div
                class="flex items-center justify-center w-12 h-12 font-bold text-white shadow-lg rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500"
              >
                <svg
                  class="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span
                class="text-2xl font-bold text-slate-900 dark:text-slate-100"
                >Tentang Saya</span
              >
            </div>
            <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
              Seorang developer yang berdedikasi dalam menciptakan solusi digital inovatif. Berpengalaman dalam pengembangan web dan mobile dengan fokus pada kualitas dan pengalaman pengguna.
            </p>

            <!-- Social Links -->
            <div class="flex items-center gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                class="flex items-center justify-center w-10 h-10 transition-all border rounded-lg bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 border-slate-300 dark:border-white/20 hover:border-brand-500 dark:hover:border-brand-300 group hover:scale-110"
              >
                <svg
                  class="w-5 h-5 transition-colors text-slate-600 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Services Column -->
          <div>
            <h4
              class="mb-6 text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Keahlian
            </h4>
            <ul class="space-y-3">
              <li v-for="skill in expertise" :key="skill">
                <a
                  href="#"
                  class="flex items-center gap-2 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 group"
                >
                  <svg
                    class="w-4 h-4 -ml-0 transition-all opacity-0 text-brand-400 group-hover:opacity-100 group-hover:ml-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>{{ skill }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Column -->
          <div>
            <h4
              class="mb-6 text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Kontak
            </h4>
            <div class="space-y-4 text-slate-600 dark:text-slate-300">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-amber-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <div>
                  <div v-for="line in contact.address" :key="line">{{ line }}</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C12.85 21 3 11.15 3 0a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                </svg>
                <a :href="`tel:${contact.phone.replace(/\s|-/g,'')}`" class="hover:text-brand-600 dark:hover:text-brand-300">{{ contact.phone }}</a>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4z"/>
                </svg>
                <a :href="`mailto:${contact.email}`" class="hover:text-brand-600 dark:hover:text-brand-300">{{ contact.email }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-slate-300 dark:border-white/20">
        <div class="container px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <div
            class="flex flex-col items-center justify-between gap-4 md:flex-row"
          >
            <p class="text-sm text-slate-500 dark:text-slate-400">
              © {{ currentYear }} Cherry Citra. All rights reserved.
            </p>
            <div class="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                class="transition-colors text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300"
                >Privacy Policy</a
              >
              <a
                href="#terms"
                class="transition-colors text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300"
                >Terms of Service</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
