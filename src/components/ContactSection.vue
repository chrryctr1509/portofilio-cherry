<script setup>
const quickContacts = [
  { label: 'Call', value: '0852 4614 5547', icon: 'M3 5h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 5m2 13a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0' },
  { label: 'Email', value: 'ariacherry.dev@gmail.com', icon: 'M3 8l9 6 9-6m-16 8h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { label: 'Location', value: 'Jakarta, Indonesia', icon: 'M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6s-2.5 1.12-2.5 2.5S10.62 11 12 11zm0 9.5s6-4.35 6-10A6 6 0 006 10.5c0 5.65 6 10 6 10z' }
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
          Contact Us
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">Bicarakan project Anda</h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 mt-4">
          Hubungi saya kapan saja melalui formulir berikut. Saya akan merespons maksimal 1–2 hari kerja.
        </p>
      </header>

      <div class="rounded-[32px] border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.8)] p-6 sm:p-10">
        <div class="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-stretch">
          <div class="map-shell">
            <div class="map-grid"></div>
            <div class="map-gradient"></div>
            <div class="map-pin map-pin--main" style="top: 38%; left: 42%">
              <span class="map-pulse"></span>
              <span class="map-dot"></span>
              <span class="map-label">Aria HQ St.</span>
            </div>
            <div class="map-pin" style="top: 18%; left: 70%"></div>
            <div class="map-pin" style="top: 60%; left: 22%"></div>
            <div class="map-pin" style="top: 68%; left: 75%"></div>
          </div>

          <form class="space-y-5">
            <label class="form-field">
              <span>Nama</span>
              <input type="text" placeholder="Masukkan nama Anda" class="input-field" />
            </label>
            <label class="form-field">
              <span>Email address</span>
              <input type="email" placeholder="nama@email.com" class="input-field" />
            </label>
            <label class="form-field">
              <span>Message</span>
              <textarea rows="4" placeholder="Ceritakan project Anda" class="input-field"></textarea>
            </label>
            <button type="submit" class="submit-btn">Send now</button>
          </form>
        </div>

        <div class="grid gap-6 sm:grid-cols-3 mt-10">
          <div
            v-for="info in quickContacts"
            :key="info.label"
            class="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 px-4 py-3"
          >
            <div class="h-12 w-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center shadow-inner">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path :d="info.icon" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
.map-shell {
  position: relative;
  min-height: 320px;
  border-radius: 28px;
  border: 1.5px solid rgba(148, 163, 184, 0.5);
  background: radial-gradient(circle at top left, rgba(34, 197, 94, 0.08), transparent 45%),
    radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.15), transparent 50%),
    #f8fafc;
  overflow: hidden;
}
.map-grid::before,
.map-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(90deg, rgba(148, 163, 184, 0.18) 1px, transparent 1px),
    linear-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px);
  background-size: 70px 70px;
}
.map-grid::after {
  opacity: 0.4;
  transform: rotate(2deg) scale(1.05);
}
.map-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(16, 185, 129, 0.05));
}
.map-pin {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.45);
}
.map-pin--main {
  width: 30px;
  height: 30px;
}
.map-dot {
  position: absolute;
  inset: 4px;
  border-radius: inherit;
  background: white;
}
.map-pulse {
  position: absolute;
  inset: -12px;
  border: 2px solid rgba(34, 197, 94, 0.35);
  border-radius: 999px;
  animation: pulse 2.2s infinite;
}
.map-label {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #0f172a;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
}

.form-field span {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 0.35rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.input-field {
  width: 100%;
  border: 1.5px solid rgba(148, 163, 184, 0.5);
  border-radius: 1rem;
  padding: 0.9rem 1rem;
  font-size: 0.95rem;
  background: #fff;
  color: #0f172a;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.input-field:focus {
  outline: none;
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
}
.dark .input-field {
  background: rgba(15, 23, 42, 0.6);
  color: white;
  border-color: rgba(148, 163, 184, 0.4);
}

.submit-btn {
  width: 100%;
  border: none;
  border-radius: 1.2rem;
  padding: 1rem;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  background: linear-gradient(120deg, #22c55e, #10b981);
  box-shadow: 0 18px 30px -20px rgba(16, 185, 129, 0.8);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 40px -25px rgba(16, 185, 129, 0.9);
}
.submit-btn:focus-visible {
  outline: 3px solid rgba(34, 197, 94, 0.35);
  outline-offset: 3px;
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


