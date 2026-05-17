<script setup>
import { ref } from 'vue'

const profile = {
  name: 'Cherry Citra Cahyaning',
  username: 'chrryctr1509',
  pronouns: 'he/him',
  bio: 'Fullstack Developer & AI Engineer — Building scalable web apps & intelligent systems. Laravel · React · Node.js · OpenAI · Open for freelance collaboration.',
  location: 'Indonesia',
  githubUrl: 'https://github.com/chrryctr1509',
  photo: '/images/cherry.png',
}

</script>

<template>
  <aside class="gh-sidebar">
    <div class="gh-avatar-wrap">
      <img :src="profile.photo" :alt="profile.name" class="gh-avatar" />
    </div>

    <div class="gh-profile-info">
      <h1 class="gh-name">{{ profile.name }}</h1>
      <p class="gh-username">{{ profile.username }} <span class="gh-pronouns">{{ profile.pronouns }}</span></p>
    </div>

    <p class="gh-bio">{{ profile.bio }}</p>

    <button class="gh-edit-btn">Edit profile</button>


    <div class="gh-meta-list">
      <div class="gh-meta-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" class="gh-meta-icon">
          <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"/>
        </svg>
        <span>{{ profile.location }}</span>
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
  margin-bottom: 16px;
}
.gh-avatar {
  width: 100%;
  max-width: 296px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid #30363D;
  object-fit: cover;
  object-position: top;
  display: block;
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
.gh-edit-btn {
  display: block;
  width: 100%;
  padding: 5px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #E6EDF3;
  background: transparent;
  border: 1px solid #30363D;
  border-radius: 6px;
  cursor: default;
  margin-bottom: 16px;
  text-align: center;
  transition: background 150ms;
}
.gh-edit-btn:hover { background: #21262D; }
.gh-stats {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  font-size: 0.875rem;
}
.gh-stat-link {
  color: #E6EDF3;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}
.gh-stat-link:hover { color: #A78BFA; }
.gh-stat-link strong { font-weight: 600; }
.gh-stat-link span { color: #8B949E; }
.gh-stat-sep { color: #30363D; margin: 0 2px; }
.gh-meta-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
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
  color: #A78BFA;
  text-decoration: none;
  font-size: 0.8rem;
}
.gh-link:hover { text-decoration: underline; }
.gh-section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #E6EDF3;
  margin: 0 0 8px;
}
.gh-achievement-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.gh-achievement-item {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #30363D;
  cursor: pointer;
  transition: border-color 150ms;
}
.gh-achievement-item:hover { border-color: #A78BFA; }
.gh-achievement-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
