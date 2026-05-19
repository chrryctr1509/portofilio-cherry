<script setup>
import { ref, onMounted } from 'vue'

const visibleCategories = ref([])

const categories = [
  {
    emoji: '🖥️',
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'Python', icon: 'python' },
      { name: 'PHP', icon: 'php' },
      { name: 'Go', icon: 'go' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
    ]
  },
  {
    emoji: '🎨',
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ]
  },
  {
    emoji: '⚙️',
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Fastify', icon: 'fastify', logoUrl: 'https://fastify.dev/img/logos/fastify-white.svg' },
      { name: 'Go Fiber', icon: 'go' },
    ]
  },
  {
    emoji: '🗄️',
    label: 'Databases',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
    ]
  },
  {
    emoji: '🛠️',
    label: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'vscode' },
    ]
  },
]

const aiItems = [
  'OpenAI API',
  'Llama Models',
  'Prompt Engineering',
  'AI Agents',
  'Workflow Automation',
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const label = entry.target.dataset.category
          if (!visibleCategories.value.includes(label)) {
            visibleCategories.value.push(label)
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.gh-animate-section').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <section id="tech-stack">
    <div class="gh-section-header">
      <h2 class="gh-section-title">🛠️ Tech Stack</h2>
      <p class="gh-section-sub">Technologies I work with daily</p>
    </div>

    <div class="gh-stack-grid">
      <div
        v-for="(cat, index) in categories"
        :key="cat.label"
        class="gh-stack-category gh-animate-section"
        :data-category="cat.label"
        :class="{ 'gh-animate-in': visibleCategories.includes(cat.label) }"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <h3 class="gh-cat-header">
          <span>{{ cat.emoji }}</span>
          <span>{{ cat.label }}</span>
        </h3>

        <div class="gh-icon-grid">
          <div
            v-for="(item, idx) in cat.items"
            :key="item.name"
            class="gh-icon-wrapper"
            :title="item.name"
            :style="{ animationDelay: `${idx * 50}ms` }"
          >
            <img
              v-if="item.logoUrl"
              :src="item.logoUrl"
              :alt="item.name"
              class="gh-badge-img"
              loading="lazy"
            />
            <img
              v-else
              :src="`https://skillicons.dev/icons?i=${item.icon}&theme=dark`"
              :alt="item.name"
              class="gh-badge-img"
              loading="lazy"
            />
            <span class="gh-tooltip">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gh-section-header {
  margin-bottom: 24px;
}
.gh-section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px;
}
.gh-section-sub {
  font-size: 0.875rem;
  color: #E6EDF3;
  margin: 0;
}
.gh-stack-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}
.gh-stack-category {
  background: #161B22;
  border: 1px solid #30363D;
  border-radius: 8px;
  padding: 16px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.gh-stack-category.gh-animate-in {
  opacity: 1;
  transform: translateY(0);
}
.gh-cat-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 12px;
  font-family: 'JetBrains Mono', monospace;
}
.gh-icon-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.gh-icon-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.gh-icon-wrapper:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.15);
}
.gh-badge-img {
  width: 40px;
  height: 40px;
}
.gh-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #21262D;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #30363D;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 10;
}
.gh-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #30363D;
}
.gh-icon-wrapper:hover .gh-tooltip {
  opacity: 1;
}
.gh-ai-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.gh-ai-pill {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.8125rem;
  font-family: 'JetBrains Mono', monospace;
  color: #ffffff;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateY(10px);
  animation: gh-fadeInUp 0.4s ease forwards;
}
.gh-animate-in .gh-ai-pill {
  animation: gh-fadeInUp 0.4s ease forwards;
}
.gh-ai-pill:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}
@media (max-width: 640px) {
  .gh-badge-img {
    width: 32px;
    height: 32px;
  }
  .gh-icon-wrapper {
    width: 50px;
    height: 50px;
  }
  .gh-stack-category {
    padding: 12px;
  }
}
</style>