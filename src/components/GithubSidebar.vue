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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16" class="gh-meta-icon gh-icon-mail">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
        </svg>
        <a :href="`mailto:${profile.email}`" class="gh-link">{{ profile.email }}</a>
      </div>
      <div class="gh-meta-item">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" class="gh-meta-icon gh-icon-wa">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
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
.gh-icon-mail { color: #EA4335; }
.gh-icon-wa { color: #25D366; }
.gh-link {
  color: #E6EDF3;
  text-decoration: none;
  font-size: 0.8rem;
}
.gh-link:hover { color: #A78BFA; text-decoration: underline; }
</style>