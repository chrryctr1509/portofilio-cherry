<script setup>
// Mobile bottom navigation — fixed at bottom, mobile only
// Active state handled by router or parent prop
import { ref } from 'vue'

const navItems = [
  { label: 'Home', icon: '🏠', href: '#' },
  { label: 'Projects', icon: '🛠️', href: '#projects' },
  { label: 'Skills', icon: '📂', href: '#skills' },
  { label: 'Contact', icon: '💬', href: '#contact' },
]

const activeIndex = ref(0)
</script>

<template>
  <nav class="bottom-nav">
    <a
      v-for="(item, index) in navItems"
      :key="item.label"
      :href="item.href"
      class="nav-item"
      :class="{ active: index === activeIndex }"
      @click="activeIndex = index"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span class="nav-label">{{ item.label }}</span>
    </a>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 50;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-item.active {
  color: var(--accent-blue);
}

.nav-item:hover {
  color: var(--text-secondary);
}

.nav-item.active:hover {
  color: var(--accent-blue);
}

.nav-icon {
  font-size: 24px;
  line-height: 1;
}

.nav-label {
  font-size: 10px;
  font-family: var(--font-sans);
  font-weight: 500;
}
</style>
