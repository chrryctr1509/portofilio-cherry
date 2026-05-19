<script setup>
import { ref } from 'vue'

const profile = {
  name: 'Cherry Citra Cahyaning',
  username: 'chrryctr1509',
  pronouns: 'he/him',
  bio: 'Fullstack Developer & AI Engineer — Building scalable web apps & intelligent systems. Laravel · React · Node.js · OpenAI · Open for freelance collaboration.',
  location: 'Indonesia',
  githubUrl: 'https://github.com/chrryctr1509',
  email: 'chrryctr1509@gmail.com',
  whatsapp: '6287761882915',
  photo: '/images/cherry.png',
}

const isVisible = ref(false)

setTimeout(() => {
  isVisible.value = true
}, 100)
</script>

<template>
  <aside class="gh-sidebar">
    <div class="gh-avatar-wrap" :class="{ 'gh-animate-in': isVisible }">
      <img :src="profile.photo" :alt="profile.name" class="gh-avatar" />
    </div>

    <div class="gh-profile-info">
      <h1 class="gh-name">{{ profile.name }}</h1>
      <p class="gh-username">{{ profile.username }} <span class="gh-pronouns">{{ profile.pronouns }}</span></p>
    </div>

    <p class="gh-bio">{{ profile.bio }}</p>

    <div class="gh-meta-list">
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
        </svg>
        <span>{{ profile.location }}</span>
      </div>
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="M1 4.5A1.5 1.5 0 0 1 2.5 3v9A1.5 1.5 0 0 1 0 13.5v-9Zm14.5 0H1v-9h14.5v9ZM3 5.5l5 4.5 5-4.5v7H3v-7Zm4 3L4.5 6H6v-.5a1.5 1.5 0 0 1 1.5 1.5V8.5H9l2.5 2Z"/>
        </svg>
        <a :href="`mailto:${profile.email}`" class="gh-link">{{ profile.email }}</a>
      </div>
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="M14.6 3.7a.5.5 0 0 0-.4-.2h-1.3c-.1 0-.2.1-.3.1l-1 .2c-.2 0-.3.1-.5.2l-.5 1.5-.5 1.5c0 .1-.1.2-.2.3l-.5.6c-.3.2-.4.5-.3.7l.2.8c0 .2 0 .4-.1.5l-.3.4c-.1.1-.1.2-.3.3l-.4 1.3c-.1.2-.3.3-.5.3l-1.7-.3c-.1 0-.3-.1-.3-.2l-.8-1.2c-.1-.1-.2-.1-.3-.1H7c-.2 0-.3.1-.4.2l-.7.5c-.4.1-.7.3-1 .4-.1.1-.2.1-.3.2l-.7 1c-.2.1-.4.1-.5 0l-.7-.5c-.1 0-.2-.1-.2-.2L.3 11a1 1 0 0 0-.2.5v.3c0 .3.2.5.5.5h.4l.2.5c0 .2.1.4.3.5l.6.3c.1 0 .1.1.2.1l1.6.5c.1 0 .2.1.3.1h.7c.2 0 .3.1.4.2l.4.7c.2.2.2.3.2.2h.7c.2 0 .3.2.4.3l.4.7.2.3.2.3c.2.1.4.2.6.2l1.4-.2c.2 0 .3-.1.5-.2l.4-.4.3-.2.4-.2.3-.1 1.3-.1h.8c.2 0 .4-.2.5-.4l.3-.6c.1-.2.2-.4.1-.6l-.1-.6.1-.5c.1-.2.2-.4.1-.6l-.2-.4Z"/>
        </svg>
        <a :href="`https://wa.me/${profile.whatsapp}`" target="_blank" class="gh-link">WhatsApp</a>
      </div>
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
        </svg>
        <a :href="profile.githubUrl" target="_blank" class="gh-link">{{ profile.githubUrl.replace('https://', '') }}</a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.gh-sidebar {
  position: sticky;
  top: 86px;
  width: 296px;
}
.gh-avatar-wrap {
  width: 100%;
  max-width: 296px;
  aspect-ratio: 1;
  margin: 110px auto 20px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.gh-avatar-wrap.gh-animate-in {
  opacity: 1;
  transform: translateY(0);
}
.gh-avatar {
  width: 67%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
}
.gh-profile-info {
  margin-bottom: 16px;
}
.gh-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #E6EDF3;
  line-height: 1.25;
  margin: 0 0 4px;
}
.gh-username {
  font-size: 1.25rem;
  color: #8B949E;
  margin: 0 0 16px;
  font-weight: 300;
}
.gh-pronouns {
  font-size: 0.8125rem;
  background: #21262D;
  border: 1px solid #30363D;
  border-radius: 20px;
  padding: 1px 6px;
  color: #8B949E;
  font-weight: 400;
}
.gh-bio {
  font-size: 0.875rem;
  color: #E6EDF3;
  line-height: 1.5;
  margin: 0 0 16px;
}
.gh-meta-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.gh-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #E6EDF3;
}
.gh-meta-icon { color: #8B949E; flex-shrink: 0; }
.gh-link {
  color: #E6EDF3;
  text-decoration: none;
  font-size: 0.8rem;
}
.gh-link:hover { color: #A78BFA; text-decoration: underline; }
</style>