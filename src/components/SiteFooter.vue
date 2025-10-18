<script setup>
const currentYear = new Date().getFullYear();

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Brand Strategy",
  "Cloud Solutions",
];

const company = [
  { name: "About Us", href: "#about" },
  { name: "Our Team", href: "#team" },
  { name: "Careers", href: "#careers" },
  { name: "Case Studies", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
];

const resources = [
  { name: "Documentation", href: "#docs" },
  { name: "Help Center", href: "#help" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
  { name: "Cookie Policy", href: "#cookies" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    href: "#",
  },
  {
    name: "Twitter",
    icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    href: "#",
  },
  {
    name: "Facebook",
    icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    href: "#",
  },
  {
    name: "Instagram",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    href: "#",
  },
  {
    name: "GitHub",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
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
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <!-- Brand Column -->
          <div class="lg:col-span-4">
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
                >Cherry Citra</span
              >
            </div>
            <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
              I'm a software engineer focused on building reliable, scalable,
              and user‑friendly products. Open to new opportunities and
              collaborations.
            </p>

            <!-- Contact Info -->
            <div class="mb-6 space-y-3">
              <a
                href="mailto:hello@example.com"
                class="flex items-center gap-3 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-300 group"
              >
                <svg
                  class="w-5 h-5 text-brand-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                class="flex items-center gap-3 transition-colors text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-300 group"
              >
                <svg
                  class="w-5 h-5 text-brand-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (234) 567-8900</span>
              </a>
              <div
                class="flex items-start gap-3 text-slate-600 dark:text-slate-300"
              >
                <svg
                  class="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Remote • Open to Relocation</span>
              </div>
            </div>

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

          <!-- Skills Column -->
          <div class="lg:col-span-2">
            <h4
              class="mb-6 text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Skills
            </h4>
            <ul class="space-y-3">
              <li v-for="service in services" :key="service">
                <a
                  href="#skills"
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

          <!-- Resume Column -->
          <div class="lg:col-span-3">
            <h4
              class="mb-6 text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Resume
            </h4>
            <ul class="space-y-3">
              <li v-for="link in company" :key="link.name">
                <a
                  :href="link.href"
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
                  <span>{{ link.name }}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Links Column -->
          <div class="lg:col-span-3">
            <h4
              class="mb-6 text-lg font-bold text-slate-900 dark:text-slate-100"
            >
              Links
            </h4>
            <ul class="space-y-3">
              <li v-for="link in resources" :key="link.name">
                <a
                  :href="link.href"
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
                  <span>{{ link.name }}</span>
                </a>
              </li>
            </ul>
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
              © {{ currentYear }} Cherry Citra.
            </p>
            <div class="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                class="transition-colors text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300"
                >Privacy</a
              >
              <a
                href="#terms"
                class="transition-colors text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300"
                >Terms</a
              >
              <a
                href="#cookies"
                class="transition-colors text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300"
                >Cookies</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
