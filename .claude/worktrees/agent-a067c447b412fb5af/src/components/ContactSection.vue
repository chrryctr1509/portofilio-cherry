<script setup>
// Icon Components
const WhatsAppIcon = {
  viewBox: '0 0 24 24',
  path: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z`
}

const PhoneIcon = {
  viewBox: '0 0 24 24',
  path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
}

const EmailIcon = {
  viewBox: '0 0 24 24',
  path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
}

const LocationIcon = {
  viewBox: '0 0 24 24',
  path: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
}

const ArrowRightIcon = {
  viewBox: '0 0 24 24',
  path: 'M13 7l5 5m0 0l-5 5m5-5H6'
}

const quickContacts = [
  { label: 'Call', value: '0877 6188 2915', icon: PhoneIcon },
  { label: 'Email', value: 'chrryctr1509@gmail.com', icon: EmailIcon },
  { label: 'Location', value: 'Jakarta Barat, Indonesia', icon: LocationIcon }
]
</script>

<template>
  <section id="contact" class="py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/40 dark:from-slate-950 dark:to-slate-900">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8 max-w-6xl">
      <header class="text-center max-w-3xl mx-auto mb-14">
        <div class="inline-flex items-center gap-2 rounded-full bg-brand-100/70 dark:bg-brand-900/30 px-4 py-2 text-sm font-semibold text-brand-700 dark:text-brand-200 mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
          </svg>
          Mari Terhubung
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">Hubungi Saya</h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 mt-4">
          Saya terbuka untuk kesempatan profesional, kolaborasi, atau sekadar diskusi seputar teknologi. Jangan ragu untuk menghubungi.
        </p>
      </header>

      <div class="rounded-[32px] border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.8)] p-6 sm:p-10">
          <div class="flex flex-col items-center justify-center space-y-6 py-8">
            <div class="text-center space-y-3">
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg mb-4">
                <svg class="w-10 h-10 text-white" fill="currentColor" :viewBox="WhatsAppIcon.viewBox">
                  <path :d="WhatsAppIcon.path" />
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Chat via WhatsApp
              </h3>
              <p class="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                Klik tombol di bawah untuk langsung chat dengan saya melalui WhatsApp. Respon cepat dan mudah!
              </p>
            </div>
            
            <a 
              href="https://wa.me/6287761882915?text=Halo%20Cherry%2C%20saya%20tertarik%20untuk%20terhubung%20dengan%20Anda" 
              target="_blank"
              rel="noopener noreferrer"
              class="whatsapp-btn group"
            >
              <svg class="w-6 h-6 mr-2 transition-transform group-hover:scale-110" fill="currentColor" :viewBox="WhatsAppIcon.viewBox">
                <path :d="WhatsAppIcon.path" />
              </svg>
              <span class="font-bold">Chat WhatsApp Sekarang</span>
              <svg class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" :viewBox="ArrowRightIcon.viewBox">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="ArrowRightIcon.path" />
              </svg>
            </a>

            <div class="flex flex-wrap gap-3 justify-center mt-4">
              <a 
                href="tel:+6287761882915" 
                class="contact-link"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" :viewBox="PhoneIcon.viewBox">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="PhoneIcon.path" />
                </svg>
                Call
              </a>
              <a 
                href="mailto:chrryctr1509@gmail.com" 
                class="contact-link"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" :viewBox="EmailIcon.viewBox">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="EmailIcon.path" />
                </svg>
                Email
              </a>
            </div>
          </div>

        <div class="grid gap-6 sm:grid-cols-3 mt-10">
          <div
            v-for="info in quickContacts"
            :key="info.label"
            class="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 px-4 py-3"
          >
            <div class="h-12 w-12 rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 flex items-center justify-center shadow-inner">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" :viewBox="info.icon.viewBox">
                <path :d="info.icon.path" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.25em]">{{ info.label }}</p>
              <p class="text-base font-bold text-slate-900 dark:text-white">{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  color: white;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 1.25rem;
  box-shadow: 0 20px 40px -20px rgba(37, 211, 102, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.whatsapp-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 25px 50px -15px rgba(37, 211, 102, 0.8);
  background: linear-gradient(135deg, #128C7E 0%, #075E54 100%);
}

.whatsapp-btn:active {
  transform: translateY(-1px);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
  background: rgba(148, 163, 184, 0.1);
  border: 1.5px solid rgba(148, 163, 184, 0.3);
  border-radius: 0.75rem;
  transition: all 0.2s ease;
  text-decoration: none;
}

.contact-link:hover {
  color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.4);
  transform: translateY(-2px);
}

.dark .contact-link {
  color: #94a3b8;
  background: rgba(148, 163, 184, 0.1);
  border-color: rgba(148, 163, 184, 0.2);
}

.dark .contact-link:hover {
  color: #22c55e;
  background: rgba(34, 197, 94, 0.15);
  border-color: rgba(34, 197, 94, 0.5);
}


@keyframes pulse {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>


