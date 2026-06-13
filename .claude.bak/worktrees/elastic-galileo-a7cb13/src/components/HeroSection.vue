<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const animated = ref(false)
const fxReady = ref(false)
const fxContainer = ref(null)
let fxCanvas = null
let fxLib = null
let fxTexture = null
let fxAnimId = null
let fxStartTime = 0

const roles = [
  'Full‑Stack Developer',
  'Backend Developer',
  'Frontend Engineer',
  'Software Engineer',
  'DevOps Enthusiast',
]
const typedText = ref('')
const loopIndex = ref(0)
const isDeleting = ref(false)
let typingTimer = null

function tick() {
  const full = roles[loopIndex.value % roles.length]
  if (!isDeleting.value) {
    typedText.value = full.substring(0, typedText.value.length + 1)
    const atWord = typedText.value === full
    typingTimer = setTimeout(tick, atWord ? 1400 : 80)
    if (atWord) isDeleting.value = true
  } else {
    typedText.value = full.substring(0, typedText.value.length - 1)
    const cleared = typedText.value === ''
    typingTimer = setTimeout(tick, cleared ? 400 : 40)
    if (cleared) { isDeleting.value = false; loopIndex.value++ }
  }
}

onMounted(async () => {
  setTimeout(() => { animated.value = true }, 80)
  setTimeout(() => tick(), 600)

  try {
    const mod = await import('glfx')
    fxLib = (mod && (mod.default?.fx || mod.fx)) || (typeof window !== 'undefined' ? window.fx : null)
  } catch { fxLib = null }

  await nextTick()
  if (!fxLib?.canvas) { fxReady.value = false; return }

  let canvas
  try { canvas = fxLib.canvas() } catch { fxReady.value = false; return }

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = '/images/cherry.png'
  img.onload = () => {
    fxTexture = canvas.texture(img)
    canvas.width = img.width
    canvas.height = img.height

    if (fxContainer.value) {
      fxContainer.value.innerHTML = ''
      canvas.className = 'w-full h-full object-cover photo-mask'
      fxContainer.value.appendChild(canvas)
      fxCanvas = canvas
      fxReady.value = true
    }

    fxStartTime = performance.now()
    const render = () => {
      const t = (performance.now() - fxStartTime) / 1000
      const sat = 0.14 + 0.03 * Math.sin(t * 0.25)
      const contrast = 0.16 + 0.015 * Math.sin(t * 0.2)
      canvas.draw(fxTexture).unsharpMask(2.0, 0.8).hueSaturation(0, sat).brightnessContrast(0.02, contrast).vignette(0.32, 0.55).update()
      fxAnimId = requestAnimationFrame(render)
    }
    render()
  }
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
  if (fxCanvas?.parentNode) fxCanvas.parentNode.removeChild(fxCanvas)
  if (fxAnimId) cancelAnimationFrame(fxAnimId)
  try { fxTexture?.destroy() } catch {}
})
</script>

<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center bg-white dark:bg-slate-950 pt-16 overflow-hidden"
  >
    <!-- Subtle background decoration -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 dark:bg-emerald-950/20 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 dark:bg-teal-950/20 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>
    </div>

    <div class="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20 xl:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

        <!-- LEFT: Content -->
        <div
          class="space-y-8 transition-all duration-700 order-2 lg:order-1"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <!-- Location + experience badge row -->
          <div class="flex items-center gap-3 flex-wrap">
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Jakarta, Indonesia
            </div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              5+ Tahun Pengalaman
            </div>
          </div>

          <!-- Heading -->
          <div>
            <p class="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-widest uppercase mb-3">Halo, Perkenalkan Saya</p>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Cherry Citra
            </h1>
            <div class="mt-3 h-12 flex items-center">
              <span
                v-if="typedText"
                class="text-2xl sm:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              >{{ typedText }}</span>
              <span class="typing-caret ml-0.5"></span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            Membangun aplikasi web dan mobile yang performan, merancang backend yang kuat, dan menghadirkan pengalaman pengguna yang menyenangkan.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-3">
            <a
              href="#contact"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-600 hover:to-teal-700 transition-all cursor-pointer"
            >
              Hubungi Saya
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#portfolio"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all cursor-pointer"
            >
              Lihat Portofolio
            </a>
          </div>

          <!-- Social links -->
          <div class="flex items-center gap-1 pt-1">
            <span class="text-xs text-slate-400 mr-3">Temukan saya:</span>
            <a href="https://www.facebook.com/cherryctr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               class="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-pointer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06A10 10 0 1010.75 22v-6.99H8.2v-2.95h2.55V9.92c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.95h-2.34V22A10 10 0 0022 12.06z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mascherr30" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               class="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all cursor-pointer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 19a5.5 5.5 0 010-11.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 6.5z"/>
              </svg>
            </a>
            <a href="https://github.com/chrryctr1509" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               class="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.68c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.36 1.12 2.94.85.1-.67.36-1.12.65-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 015 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.96-2.35 4.83-4.58 5.08.37.33.7.97.7 1.96v2.9c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" clip-rule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- RIGHT: Photo -->
        <div
          class="relative flex justify-center lg:justify-end transition-all duration-700 delay-200 order-1 lg:order-2"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <!-- Photo card -->
          <div class="relative w-72 sm:w-80 lg:w-96 xl:w-[440px]">
            <!-- Decorative ring -->
            <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-xl"></div>

            <!-- Card -->
            <div class="relative rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl">

              <!-- Photo area -->
              <div class="relative h-72 sm:h-80 lg:h-96 xl:h-[420px] overflow-hidden bg-gradient-to-b from-emerald-100/50 to-transparent dark:from-emerald-900/20">
                <div ref="fxContainer" v-show="fxReady" class="absolute inset-0 flex items-end justify-center">
                </div>
                <img
                  v-show="!fxReady"
                  src="/images/cherry.png"
                  alt="Cherry Citra"
                  class="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 sm:h-80 lg:h-96 xl:h-[420px] w-auto object-contain photo-mask"
                />
              </div>

              <!-- Info strip -->
              <div class="px-5 py-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-3">
                  <div class="flex-1 min-w-0">
                    <p class="font-bold text-slate-900 dark:text-white text-sm leading-tight">Cherry Citra</p>
                    <p class="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Full-Stack Developer</p>
                  </div>
                  <div class="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full shrink-0">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Siap Bekerja</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Floating skill chips -->
            <div class="absolute -left-10 top-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 animate-float-a">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-4 h-4" alt="Vue.js" />
              Vue.js
            </div>
            <div class="absolute -right-10 top-1/3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 animate-float-b">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" class="w-4 h-4" alt="Laravel" />
              Laravel
            </div>
            <div class="absolute -left-10 top-[58%] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2 animate-float-c">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="w-4 h-4" alt="Node.js" />
              Node.js
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.typing-caret {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: #10b981;
  animation: blink 1s steps(1) infinite;
  vertical-align: -0.15em;
  border-radius: 1px;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.photo-mask {
  -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}

@keyframes float-a {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(-2deg); }
}
@keyframes float-b {
  0%, 100% { transform: translateY(0px) rotate(1deg); }
  50% { transform: translateY(-6px) rotate(1deg); }
}
@keyframes float-c {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-10px) rotate(-1deg); }
}

.animate-float-a { animation: float-a 4s ease-in-out infinite; }
.animate-float-b { animation: float-b 5s ease-in-out infinite 0.5s; }
.animate-float-c { animation: float-c 4.5s ease-in-out infinite 1s; }
</style>
