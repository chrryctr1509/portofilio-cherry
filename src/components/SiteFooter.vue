<script setup>
const currentYear = new Date().getFullYear();

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software",
  "Portfolio",
];

const contact = {
  address: [
    "Jln Mutiara 6 Blok A9 No 13",
    "Perumahan Kutabumi 2",
    "Pasar Kemis, Kabupaten Tangerang",
    "Banten 15560",
  ],
  phone: "+62 822-9999-5502",
  email: "masroma75@gmail.com",
};

const socialLinks = [
  {
    name: "Facebook",
    icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    href: "#",
  },
  {
    name: "Instagram",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM18 6.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 6.5zM12 8.5A5.5 5.5 0 1017.5 14 5.5 5.5 0 0012 8.5z",
    href: "#",
  },
  {
    name: "TikTok",
    icon: "M16 2h2a5 5 0 005 5v2a7 7 0 01-5-2v8a6 6 0 11-6-6h2a4 4 0 104 4V2z",
    href: "#",
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
                >Masroma</span
              >
            </div>
            <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
              Kami adalah tim developer yang berdedikasi untuk menciptakan solusi digital inovatif. Dari website hingga aplikasi mobile, kami membantu bisnis Anda berkembang di era digital.
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
              Layanan
            </h4>
            <ul class="space-y-3">
              <li v-for="service in services" :key="service">
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
                  <span>{{ service }}</span>
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
              © {{ currentYear }} Masroma. All rights reserved.
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
