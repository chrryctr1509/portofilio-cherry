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
    const mod = await import('glfx')
    fxLib = (mod && (mod.default?.fx || mod.fx)) || (typeof window !== 'undefined' ? window.fx : null)
  } catch (e) {
    fxLib = null
  }

  await nextTick()

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
    canvas.width = img.width
    canvas.height = img.height

    if (fxContainer.value) {
      fxContainer.value.innerHTML = ''
      canvas.className = 'mx-auto h-64 md:h-80 w-auto object-contain drop-shadow-xl -translate-y-10 md:-translate-y-16 scale-[1.30] md:scale-[1.40] photo-mask transition-transform duration-500 ease-out will-change-transform'
      fxContainer.value.appendChild(canvas)
      fxCanvas = canvas
      fxReady.value = true
    }

    fxStartTime = performance.now()
    const render = () => {
      const t = (performance.now() - fxStartTime) / 1000
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
  <section id="about" class="relative overflow-hidden bg-[#0a0f0a] pt-24 pb-20 lg:pt-32 lg:pb-28">
    <div class="relative mx-auto container px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div
          class="space-y-8 transition-all duration-1000 order-2 lg:order-1"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Available Badge -->
          <div class="badge-available">
            <span class="ping-dot"></span>
            Available for Work
          </div>

          <!-- Heading -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            <span class="block text-[#94a3b8] font-normal text-base md:text-lg mb-2">Halo, saya</span>
            <span class="text-green-neon">Cherry Citra</span>
            <template v-if="typedText">
              <br />
              <span class="text-[#94a3b8] font-normal">{{ typedText }}</span>
              <span class="typing-caret"></span>
            </template>
          </h1>

          <!-- Description -->
          <p class="text-base md:text-lg text-[#6b8f6b] max-w-2xl leading-relaxed">
            Saya membangun aplikasi web dan mobile yang performan, merancang backend yang kuat, dan memberikan pengalaman pengguna yang menyenangkan. Semangat dalam memecahkan masalah dan mengirimkan produk berkualitas tinggi.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-row-reverse sm:flex-row items-stretch gap-3 pt-2">
            <a
              href="#contact"
              class="btn-primary"
            >
              Hubungi Saya
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#portfolio"
              class="btn-secondary"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              Lihat Portofolio
            </a>
          </div>
        </div>

        <!-- Right Visual -->
        <div
          class="relative transition-all duration-1000 delay-300 order-1 lg:order-2"
          :class="animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Photo Card -->
          <div class="relative min-h-[460px] flex items-center justify-center">
            <!-- outer glow -->
            <div class="absolute -inset-10 rounded-[32px] bg-[#22c55e]/10 blur-2xl"></div>

            <!-- card wrapper -->
            <div class="relative rounded-[28px] bg-[#0f1f0f] border border-[rgba(34,197,94,0.3)] shadow-[0_0_30px_rgba(34,197,94,0.1)] w-[360px] sm:w-[420px] lg:w-[480px] overflow-visible animate-float-soft">
              <!-- header visual area -->
              <div class="relative h-64 md:h-72 flex items-center justify-center bg-[#0f1f0f] rounded-[100px] overflow-visible">
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
                <svg class="absolute -bottom-1 left-0 w-full text-[#0f1f0f] z-20" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,0 C150,40 450,0 600,40 L600,40 L0,40 Z" fill="currentColor"></path>
                </svg>
              </div>

              <!-- info area -->
              <div class="px-6 pb-6 text-center">
                <!-- name & role -->
                <p class="text-white font-bold text-lg">Cherry Citra</p>
                <p class="text-[#22c55e] text-sm font-mono mt-0.5">Full-Stack Developer</p>

                <!-- Privacy Ethic badge -->
                <div class="mt-2 inline-flex items-center gap-1.5 border border-[rgba(34,197,94,0.3)] rounded-full px-3 py-1 text-xs font-mono text-[rgba(34,197,94,0.8)]">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Privacy Ethic
                </div>

                <!-- socials -->
                <div class="mt-4 flex items-center justify-center gap-3">
                  <a href="https://www.facebook.com/cherryctr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="icon-dark">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.06A10 10 0 1010.75 22v-6.99H8.2v-2.95h2.55V9.92c0-2.52 1.5-3.92 3.8-3.92 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.95h-2.34V22A10 10 0 0022 12.06z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/mascherr30" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="icon-dark">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 19a5.5 5.5 0 010-11zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 6.5z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/chrryctr1509" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="icon-dark">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.68c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.57 2.36 1.12 2.94.85.1-.67.36-1.12.65-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.2 9.2 0 015 0c1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.96-2.35 4.83-4.58 5.08.37.33.7.97.7 1.96v2.9c0 .27.18.58.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>

                <!-- actions bar -->
                <div class="mt-5 border-t border-[rgba(34,197,94,0.15)] flex divide-x divide-[rgba(34,197,94,0.15)] text-[12px] font-mono uppercase tracking-wide text-slate-400">
                  <a href="#cv" class="btn-card-action flex-1 py-3.5 text-center">Unduh CV</a>
                  <a href="#contact" class="btn-card-action flex-1 py-3.5 text-center">Hubungi Saya</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Available Badge */
.badge-available {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #22c55e;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
}

.ping-dot {
  position: relative;
  display: inline-flex;
  height: 0.5rem;
  width: 0.5rem;
}

.ping-dot::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #22c55e;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  opacity: 0.75;
}

.ping-dot::after {
  content: '';
  position: relative;
  display: inline-flex;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: #22c55e;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Green Neon Text */
.text-green-neon {
  color: #00ff88;
  font-family: 'Space Grotesk', sans-serif;
}

/* Typing Caret */
.typing-caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 4px;
  background-color: #00ff88;
  animation: blink 1s steps(1) infinite;
  vertical-align: -0.1em;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* CTA Buttons */
.btn-primary {
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  background: transparent;
  border: 1px solid #22c55e;
  color: #22c55e;
  font-weight: 700;
  transition: all 300ms ease;
  text-align: center;
}

.btn-primary:hover {
  background: rgba(34, 197, 94, 0.1);
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
}

.btn-secondary {
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
  transition: all 300ms ease;
  text-align: center;
}

.btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.9);
}

/* Float Animation */
@keyframes float-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.animate-float-soft {
  animation: float-soft 6s ease-in-out infinite;
}

/* Photo Mask */
.photo-mask {
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 100%);
}

/* Icon Dark */
.icon-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  color: #94a3b8;
  transition: all 200ms ease;
}

.icon-dark:hover {
  background-color: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  transform: translateY(-1px);
}

/* Card Action Button */
.btn-card-action {
  transition: all 200ms ease;
}

.btn-card-action:hover {
  background-color: rgba(34, 197, 94, 0.05);
  color: #22c55e;
}
</style>
