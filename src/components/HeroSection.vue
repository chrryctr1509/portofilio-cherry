<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = [
  'Building Intelligent Systems 🤖',
  'Crafting Scalable Architectures 🏗️',
  'Turning Ideas into Products 🚀',
  'Open for Freelance Collaboration 🤝',
]

const typedText = ref('')
const roleIndex = ref(0)
const isDeleting = ref(false)
let typingInterval = ref(null)

const startTyping = () => {
  let charIndex = roles[roleIndex.value].length
  isDeleting.value = false

  const type = () => {
    if (!isDeleting.value) {
      charIndex++
      if (charIndex > roles[roleIndex.value].length) {
        isDeleting.value = true
        typedText.value = roles[roleIndex.value].substring(0, charIndex)
        setTimeout(type, 2000)
        return
      }
    } else {
      charIndex--
      if (charIndex < 0) {
        isDeleting.value = false
        roleIndex.value = (roleIndex.value + 1) % roles.length
        charIndex = 0
        setTimeout(type, 500)
        return
      }
    }
    typedText.value = roles[roleIndex.value].substring(0, charIndex)
    setTimeout(type, isDeleting.value ? 50 : 100)
  }
  type()
}

onMounted(() => {
  startTyping()
})

onUnmounted(() => {
  clearInterval(typingInterval.value)
})
</script>

<template>
  <section class="gh-hero">
    <!-- Banner -->
    <div class="gh-hero-banner">
      <h1 class="gh-hero-name">Cherry Citra Cahyaning</h1>
      <p class="gh-hero-sub">Fullstack Developer • AI Engineer • Software Architect</p>
    </div>

    <!-- Typing + Badges -->
    <div class="gh-typing-line">{{ typedText }}<span class="gh-caret"></span></div>

    <div class="gh-badges">
      <img src="https://komarev.com/ghpvc/?username=chrryctr1509&style=flat-square&color=7C3AED&label=Profile+Views" alt="views" />
      <img src="https://img.shields.io/github/followers/chrryctr1509?style=flat-square&color=059669&label=Followers" alt="followers" />
      <img src="https://img.shields.io/badge/Status-Open%20for%20Freelance-0EA5E9?style=flat-square" alt="status" />
      <img src="https://img.shields.io/badge/Location-Indonesia%20%F0%9F%87%AE%F0%9F%87%A9-F59E0B?style=flat-square" alt="location" />
    </div>

    <!-- CTA -->
    <div class="gh-cta-row">
      <a href="mailto:chrryctr1509@gmail.com" class="gh-btn gh-btn-primary">📧 Gmail</a>
      <a href="https://github.com/chrryctr1509" target="_blank" class="gh-btn gh-btn-ghost">⭐ GitHub</a>
    </div>
  </section>
</template>

<style scoped>
.gh-hero {
  margin-bottom: 0;
}
.gh-hero-banner {
  background: linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%);
  border-radius: 6px;
  padding: 40px 24px;
  text-align: center;
  margin-bottom: 24px;
  border: 1px solid #30363D;
}
.gh-hero-name {
  font-size: 2.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
}
.gh-hero-sub {
  font-size: 1rem;
  color: #A78BFA;
  margin: 0;
}
.gh-typing-line {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.125rem;
  color: #A78BFA;
  text-align: center;
  margin-bottom: 20px;
  min-height: 1.75rem;
}
.gh-caret {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #A78BFA;
  margin-left: 2px;
  vertical-align: -0.1em;
  animation: blink 1s steps(1) infinite;
}
@keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
.gh-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
.gh-cta-row {
  display: flex;
  justify-content: center;
  gap: 12px;
}
</style>