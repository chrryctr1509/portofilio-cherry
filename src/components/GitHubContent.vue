<script setup>
import { ref } from 'vue'

const pinnedRepos = ref([
  {
    name: 'vue_js_cherry',
    desc: 'Personal portfolio website built with Vue.js 3 and Tailwind CSS',
    lang: 'Vue',
    langColor: '#41b883',
    stars: 0,
    forks: 0,
    visibility: 'Public'
  },
  {
    name: 'laravel-crud-api',
    desc: 'RESTful API with full JWT authentication & role management',
    lang: 'PHP',
    langColor: '#4F5D95',
    stars: 12,
    forks: 5,
    visibility: 'Public'
  },
  {
    name: 'ai-customer-service',
    desc: 'Intelligent chatbot with OpenAI integration & context memory',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 8,
    forks: 2,
    visibility: 'Public'
  },
  {
    name: 'react-lms',
    desc: 'Full-featured Learning Management System with progress tracking',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 15,
    forks: 7,
    visibility: 'Public'
  },
  {
    name: 'api-lsp',
    desc: 'Certification & competency management platform',
    lang: 'PHP',
    langColor: '#4F5D95',
    stars: 6,
    forks: 3,
    visibility: 'Public'
  },
  {
    name: 'automation-scripts',
    desc: 'Developer productivity tools & workflow automation',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 4,
    forks: 1,
    visibility: 'Public'
  }
])

const activeTab = ref('overview')
</script>

<template>
  <div class="github-content">
    <!-- Tab Navigation -->
    <nav class="tab-nav">
      <a href="#" class="tab" :class="{ active: activeTab === 'overview' }" @click.prevent="activeTab = 'overview'">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm1.75-.25a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"/>
          <path d="M6.5 6.5v1h3v-1h-3zm0 2v1h3v-1h-3z"/>
        </svg>
        Overview
      </a>
      <a href="#" class="tab" :class="{ active: activeTab === 'repositories' }" @click.prevent="activeTab = 'repositories'">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a5 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
        </svg>
        Repositories
        <span class="tab-count">20</span>
      </a>
      <a href="#" class="tab" :class="{ active: activeTab === 'projects' }" @click.prevent="activeTab = 'projects'">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v7.5a.75.75 0 01-1.5 0v-7.5zM8 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5A.75.75 0 008 3z"/>
        </svg>
        Projects
      </a>
      <a href="#" class="tab" :class="{ active: activeTab === 'packages' }" @click.prevent="activeTab = 'packages'">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"/>
        </svg>
        Packages
      </a>
    </nav>

    <!-- Content Area -->
    <div style="padding: 24px;">
      <!-- Popular Repositories Section -->
      <section v-if="activeTab === 'overview'" style="margin-bottom: 32px;">
        <h2 style="font-size: 16px; font-weight: 600; color: var(--gh-text); margin-bottom: 16px;">
          Popular repositories
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 16px;">
          <div v-for="repo in pinnedRepos" :key="repo.name" class="repo-card">
            <div class="repo-header">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="color: var(--gh-muted);">
                <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
              </svg>
              <a class="repo-name" :href="`https://github.com/chrryctr1509/${repo.name}`" target="_blank">{{ repo.name }}</a>
              <span class="repo-visibility">{{ repo.visibility }}</span>
            </div>
            <p class="repo-desc">{{ repo.desc }}</p>
            <div class="repo-meta">
              <span class="repo-lang">
                <span style="width: 12px; height: 12px; border-radius: 50%; display: inline-block;" :style="{ backgroundColor: repo.langColor }"></span>
                {{ repo.lang }}
              </span>
              <span v-if="repo.stars > 0">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="vertical-align: text-bottom; margin-right: 4px;">
                  <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                </svg>
                {{ repo.stars }}
              </span>
              <span v-if="repo.forks > 0">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="vertical-align: text-bottom; margin-right: 4px;">
                  <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                </svg>
                {{ repo.forks }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- GitHub Stats Section -->
      <section v-if="activeTab === 'overview'" style="margin-bottom: 32px;">
        <h2 style="font-size: 16px; font-weight: 600; color: var(--gh-text); margin-bottom: 16px;">
          Contribution activity
        </h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <!-- Contribution Graph -->
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=chrryctr1509&theme=github-compact&hide_border=true&area=true&bg_color=0d1117&color=58a6ff&line=58a6ff&point=e6edf3"
            alt="Contribution Graph"
            style="width: 100%; border-radius: 6px; border: 1px solid var(--gh-border);"
          />

          <!-- Streak Stats -->
          <img
            src="https://streak-stats.demolab.com?user=chrryctr1509&theme=github-dark-blue&hide_border=true&background=0d1117&ring=58a6ff&fire=f0883e&currStreakLabel=e6edf3"
            alt="GitHub Streak"
            style="width: 100%; border-radius: 6px; border: 1px solid var(--gh-border);"
          />

          <!-- Profile Trophy -->
          <img
            src="https://github-profile-trophy.vercel.app/?username=chrryctr1509&theme=algolia&no-frame=true&no-bg=true&margin-w=8&row=1&column=7"
            alt="Trophies"
            style="width: 100%;"
          />
        </div>
      </section>

      <!-- Repositories Tab Content -->
      <section v-if="activeTab === 'repositories'">
        <div style="color: var(--gh-muted); text-align: center; padding: 48px 0;">
          <svg viewBox="0 0 16 16" width="48" height="48" fill="currentColor" style="margin-bottom: 16px; opacity: 0.4;">
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
          </svg>
          <p style="font-size: 16px; margin-bottom: 8px;">View all repositories on GitHub</p>
          <a href="https://github.com/chrryctr1509?tab=repositories" target="_blank" style="color: var(--gh-blue); text-decoration: none;">
            github.com/chrryctr1509?tab=repositories
          </a>
        </div>
      </section>

      <!-- Projects Tab Content -->
      <section v-if="activeTab === 'projects'">
        <div style="color: var(--gh-muted); text-align: center; padding: 48px 0;">
          <p style="font-size: 16px;">No projects yet</p>
        </div>
      </section>

      <!-- Packages Tab Content -->
      <section v-if="activeTab === 'packages'">
        <div style="color: var(--gh-muted); text-align: center; padding: 48px 0;">
          <p style="font-size: 16px;">No packages published</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.github-content {
  min-height: 100vh;
  background: var(--gh-bg);
}
</style>
