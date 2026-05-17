<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  const el = document.querySelector('.gh-contact-card')
  if (el) observer.observe(el)
})
</script>

<template>
  <section class="gh-contact">
    <div class="gh-contact-card" :class="{ 'gh-animate-in': isVisible }">
      <h2 class="gh-contact-heading">🤝 Let's Build Something Together</h2>
      <p class="gh-contact-sub">
        Open for freelance collaborations, full-time opportunities, and interesting projects.
        Reach out and let's create something great.
      </p>
      <div class="gh-contact-btns">
        <a href="https://wa.me/6287761882915?text=Halo%20Cherry%2C%20saya%20tertarik%20untuk%20terhubung%20dengan%20Anda"
           target="_blank"
           rel="noopener noreferrer"
           class="gh-btn gh-btn-primary">
          💬 Chat WhatsApp
        </a>
        <a href="mailto:chrryctr1509@gmail.com"
           class="gh-btn gh-btn-ghost">
          📧 Email Me
        </a>
      </div>
      <div class="gh-contact-links">
        <a href="https://github.com/chrryctr1509" target="_blank" class="gh-contact-link">GitHub</a>
        <a href="https://www.facebook.com/cherryctr" target="_blank" class="gh-contact-link">Facebook</a>
        <a href="https://www.instagram.com/mascherr30" target="_blank" class="gh-contact-link">Instagram</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gh-contact {
  margin-top: 8px;
}
.gh-contact-card {
  background: #161B22;
  border: 1px solid #30363D;
  border-radius: 6px;
  padding: 32px 24px;
  text-align: center;
}
.gh-contact-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 12px;
}
.gh-contact-sub {
  font-size: 0.875rem;
  color: #8B949E;
  max-width: 480px;
  margin: 0 auto 24px;
  line-height: 1.6;
}
.gh-contact-btns {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.gh-contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.gh-contact-link {
  font-size: 0.875rem;
  color: #A78BFA;
  text-decoration: none;
}
.gh-contact-link:hover { text-decoration: underline; }

/* Animation */
.gh-contact-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.gh-contact-card.gh-animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>