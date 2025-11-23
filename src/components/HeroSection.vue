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

// Typing effect for role titles
const roles = [
  'Full‑Stack Developer',
  'Backend Developer',
  'Frontend Engineer',
  'Software Engineer',
  'DevOps Enthusiast'
]
// no skills here; moved to separate section
const typedText = ref('')
const loopIndex = ref(0)
const isDeleting = ref(false)
let typingTimer = null

function tick() {
  const full = roles[loopIndex.value % roles.length]
  if (!isDeleting.value) {
    typedText.value = full.substring(0, typedText.value.length + 1)
    const atWord = typedText.value === full
    typingTimer = setTimeout(tick, atWord ? 1200 : 120)
    if (atWord) isDeleting.value = true
  } else {
    typedText.value = full.substring(0, typedText.value.length - 1)
    const cleared = typedText.value === ''
    typingTimer = setTimeout(tick, cleared ? 300 : 60)
    if (cleared) {
      isDeleting.value = false
      loopIndex.value++
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 100)
  setTimeout(() => tick(), 400)
})

onMounted(async () => {
  try {
    // Dynamic import glfx; works with Vite
    const mod = await import('glfx')
    fxLib = (mod && (mod.default?.fx || mod.fx)) || (typeof window !== 'undefined' ? window.fx : null)
  } catch (e) {
    fxLib = null
  }

  await nextTick()

  // Setup canvas and apply effects if supported
  if (!fxLib || !fxLib.canvas) {
    fxReady.value = false
    return
  }

  let canvas
  try {
    canvas = fxLib.canvas()
  } catch (e) {
    fxReady.value = false
    return
  }

  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = '/images/cherry.png'
  img.onload = () => {
    fxTexture = canvas.texture(img)
    // Set internal resolution to image natural size
    canvas.width = img.width
    canvas.height = img.height

    // Mount canvas into container and mirror previous sizing styles
    if (fxContainer.value) {
      fxContainer.value.innerHTML = ''
      canvas.className = 'mx-auto h-64 md:h-80 w-auto object-contain drop-shadow-xl -translate-y-10 md:-translate-y-16 scale-[1.30] md:scale-[1.40] photo-mask transition-transform duration-500 ease-out will-change-transform'
      fxContainer.value.appendChild(canvas)
      fxCanvas = canvas
      fxReady.value = true
    }

    // Cartoon-like effect with subtle animated parameters
    fxStartTime = performance.now()
    const render = () => {
      const t = (performance.now() - fxStartTime) / 1000
      // smoother, slower oscillation
      const sat = 0.16 + 0.03 * Math.sin(t * 0.25)
      const vignetteSize = 0.34 + 0.015 * Math.sin(t * 0.25)
      const contrast = 0.18 + 0.015 * Math.sin(t * 0.2)

      canvas
        .draw(fxTexture)
        .unsharpMask(2.0, 1.0)
        .ink(0.20)
        .hueSaturation(0, sat)
        .brightnessContrast(0.02, contrast)
        .vignette(vignetteSize, 0.6)
        .update()

      fxAnimId = requestAnimationFrame(render)
    }
    render()
  }
})

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer)
  if (fxCanvas && fxCanvas.parentNode) {
    fxCanvas.parentNode.removeChild(fxCanvas)
  }
  if (fxAnimId) cancelAnimationFrame(fxAnimId)
  if (fxTexture && typeof fxTexture.destroy === 'function') {
    try { fxTexture.destroy() } catch (_) {}
  }
})
</script>

<template>
  <section id="about" class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    </div>

    <div class="relative mx-auto container px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div 
          class="space-y-8 transition-all duration-1000 order-2 lg:order-1"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Badge -->
          <div class="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-200/50 dark:border-brand-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-brand-700 dark:text-emerald-300 shadow-lg hover:shadow-xl transition-shadow">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            Professional Resume
          </div>

          <!-- Heading -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            <span class="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
              Hi, I'm Cherry Citra
            </span>
            <template v-if="typedText">
              <br />
              <span class="bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">{{ typedText }}</span>
              <span class="typing-caret"></span>
            </template>
          </h1>

          <!-- Description -->
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            I build performant web and mobile applications, design robust backends, and deliver delightful user experiences. Passionate about solving problems and shipping high‑quality products.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-row-reverse sm:flex-row items-stretch gap-3 pt-2">
            <a 
              href="#contact" 
              class="group inline-flex flex-1 items-center justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
            >
              Contact Me
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#projects" 
              class="inline-flex flex-1 items-center justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold shadow-xl hover:shadow-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all text-center"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              View Projects
            </a>
          </div>
        </div>

        <!-- Right Visual -->
        <div 
          class="relative transition-all duration-1000 delay-300 order-1 lg:order-2"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Redesigned Photo Card -->
          <div class="relative min-h-[460px] flex items-center justify-center">
            <!-- outer glow -->
            <div class="absolute -inset-10 rounded-[32px] bg-gradient-to-br from-brand-200/30 via-emerald-200/30 to-teal-200/30 blur-2xl"></div>

            <!-- gradient border wrapper -->
            <div class="relative p-[2px] rounded-[28px] bg-gradient-to-br from-brand-300/70 via-emerald-300/70 to-teal-300/70 shadow-2xl w-[360px] sm:w-[420px] lg:w-[480px]">
              <div class="relative bg-white dark:bg-slate-800 rounded-[28px] overflow-visible animate-float-soft">
                <!-- status badge -->
                <div class="absolute top-3 right-3 z-10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg rounded-xl px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 items-center gap-1 hidden lg:flex">
                  <span class="relative flex h-2.5 w-2.5 mr-1">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                  </span>
                  Available for Work
                </div>

                <!-- header visual area -->
                <div class="relative h-64 md:h-72 flex items-center justify-center bg-white dark:bg-slate-900 rounded-[100px] overflow-visible">
                  <!-- soft background lights -->
                  <div class="absolute -top-10 -left-10 w-48 h-48 bg-brand-200/40 rounded-full blur-3xl"></div>
                  <div class="absolute -bottom-10 -right-10 w-56 h-56 bg-emerald-200/40 rounded-full blur-3xl"></div>

                  <!-- canvas host -->
                  <div ref="fxContainer" v-show="fxReady" class="pointer-events-none"></div>
                  <!-- fallback image -->
                  <img 
                    v-show="!fxReady"
                    src="/images/cherry.png" 
                    alt="Cherry Citra" 
                    class="mx-auto h-64 md:h-80 w-auto object-contain drop-shadow-xl -translate-y-10 md:-translate-y-16 scale-[1.30] md:scale-[1.40] photo-mask transition-transform duration-500 ease-out will-change-transform"
                  />

                  <!-- wave separator -->
                  <svg class="absolute -bottom-1 left-0 w-full text-white z-20" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,0 C150,40 450,0 600,40 L600,40 L0,40 Z" fill="currentColor"></path>
                  </svg>
                </div>

                <!-- info area -->
                <div class="px-6 pt-6 text-center">
                  <!-- mobile inline status badge -->
                  <div class="lg:hidden flex justify-center">
                    <div class="inline-flex items-center gap-1 bg-white border border-slate-200 shadow-sm rounded-xl px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-slate-900 dark:border-slate-700 dark:text-emerald-400">
                      <span class="relative flex h-2.5 w-2.5 mr-1">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                      </span>
                      Available for Work
                    </div>
                  </div>
                  <!-- socials: Facebook, Instagram, GitHub -->
                  <div class="mt-4 flex items-center justify-center gap-4 text-slate-600 dark:text-slate-200">
                    <a href="#" aria-label="Facebook" class="icon-soft">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M22 12.06A10 10 0 1010.75 22v-6.99H8.2v-2.95h2.55V9.92c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.95h-2.34V22A10 10 0 0022 12.06z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" class="icon-soft">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 19a5.5 5.5 0 010-11.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 6.5z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="GitHub" class="icon-soft">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.68c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.36 1.12 2.94.85.1-.67.36-1.12.65-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 015 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.96-2.35 4.83-4.58 5.08.37.33.7.97.7 1.96v2.9c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" clip-rule="evenodd"/>
                      </svg>
                    </a>
                  </div>

                  <!-- actions bar -->
                  <div class="mt-6 border-t border-slate-200 dark:border-slate-700 flex divide-x divide-slate-200 dark:divide-slate-700 text-[13px] font-bold uppercase tracking-wide text-slate-700 dark:text-white">
                    <a href="#cv" class="btn-soft flex-1 py-4 text-center">Download CV</a>
                    <a href="#contact" class="btn-soft flex-1 py-4 text-center">Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Glow Effects -->
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-300/40 rounded-full blur-3xl"></div>
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-emerald-300/40 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typing-caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 4px;
  background-color: #0f172a; /* slate-900 */
  animation: blink 1s steps(1) infinite;
  vertical-align: -0.1em;
}

.dark .typing-caret {
  background-color: #e2e8f0; /* slate-200 */
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@keyframes float-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.animate-float-soft {
  animation: float-soft 6s ease-in-out infinite;
}

.photo-mask {
  /* Fade out bottom part of the photo so body looks rapi ketika melewati wave */
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%);
}

.btn-soft {
  transition: background-color 300ms ease, box-shadow 300ms ease, transform 200ms ease;
}
.btn-soft:hover {
  background-color: rgba(15, 23, 42, 0.04); /* slate-900 @ 4% */
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
}
.btn-soft:active {
  transform: translateY(1px);
}
.btn-soft:focus-visible {
  outline: 2px solid rgba(16, 185, 129, 0.5); /* emerald-500 */
  outline-offset: -2px;
}

.icon-soft {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  transition: background-color 200ms ease, color 200ms ease, transform 200ms ease;
}
.icon-soft:hover {
  background-color: rgba(15, 23, 42, 0.06);
  color: #0f172a; /* slate-900 */
  transform: translateY(-1px);
}
.icon-soft:active {
  transform: translateY(0);
}
</style>

