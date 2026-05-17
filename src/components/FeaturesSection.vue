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

  const el = document.querySelector('.gh-about-wrap')
  if (el) observer.observe(el)
})
</script>

<template>
  <section>
    <div class="gh-about-wrap" :class="{ 'gh-animate-in': isVisible }">
      <div class="gh-about-left">
        <h2 class="gh-section-heading">👋 About Me</h2>
        <p class="gh-about-text">
          I'm a <strong>Fullstack Developer</strong> and <strong>AI Engineer</strong>
          based in Indonesia, passionate about building scalable systems and intelligent
          applications. I specialize in end-to-end product development — from architecting
          backends to deploying production AI pipelines.
        </p>
        <blockquote class="gh-quote">
          "I don't just write code — I engineer solutions that scale."
        </blockquote>
        <table class="gh-expertise-table">
          <tbody>
            <tr><td>🌐 <strong>Web</strong></td><td>Fullstack Development</td></tr>
            <tr><td>🤖 <strong>AI/ML</strong></td><td>LLM Integration, AI Agents, Prompt Engineering</td></tr>
            <tr><td>☁️ <strong>Cloud</strong></td><td>Docker, Linux, Nginx, CI/CD Pipelines</td></tr>
            <tr><td>🔒 <strong>Security</strong></td><td>Auth systems, API security, best practices</td></tr>
            <tr><td>🗄️ <strong>Databases</strong></td><td>MySQL, PostgreSQL, MongoDB, Redis</td></tr>
          </tbody>
        </table>
      </div>
      <div class="gh-about-right">
        <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
             alt="Developer animation" class="gh-dev-gif" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gh-about-wrap {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  background: #161B22;
  border: 1px solid #30363D;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 16px;
}
.gh-about-left { flex: 1; min-width: 0; }
.gh-about-right { flex-shrink: 0; width: 220px; }
.gh-dev-gif { width: 100%; border-radius: 8px; }
.gh-section-heading {
  font-size: 1.125rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 12px;
}
.gh-about-text {
  font-size: 0.875rem;
  color: #E6EDF3;
  line-height: 1.6;
  margin-bottom: 12px;
}
.gh-about-text strong { color: #E6EDF3; font-weight: 600; }
.gh-quote {
  border-left: 3px solid #7C3AED;
  margin: 0 0 16px;
  padding: 8px 12px;
  background: rgba(124,58,237,0.05);
  border-radius: 0 4px 4px 0;
  font-style: italic;
  font-size: 0.875rem;
  color: #8B949E;
}
.gh-expertise-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}
.gh-expertise-table td {
  padding: 6px 8px;
  border-bottom: 1px solid #21262D;
  color: #E6EDF3;
  vertical-align: top;
}
.gh-expertise-table td:first-child {
  white-space: nowrap;
  padding-right: 12px;
  color: #A78BFA;
  font-weight: 600;
}
.gh-expertise-table tr:last-child td { border-bottom: none; }
@media (max-width: 600px) {
  .gh-about-wrap { flex-direction: column; }
  .gh-about-right { width: 100%; }
}

/* Animation */
.gh-about-wrap {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.gh-about-wrap.gh-animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>