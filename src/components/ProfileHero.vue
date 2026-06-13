<script setup>
import { ref } from 'vue'

const profile = ref({
  name: 'Cherry Citra Cahyaning',
  username: 'chrryctr1509',
  bio: 'Fullstack Developer & AI Engineer • Building scalable web apps & intelligent systems • Laravel • React • Node.js • OpenAI • Open for freelance',
  location: 'Indonesia',
  website: 'https://github.com/chrryctr1509',
  followers: 8,
  following: 8,
  avatarUrl: '/images/cherry.png',
  email: 'chrryctr1509@gmail.com',
  whatsapp: '6287761882915'
})
</script>

<template>
  <div class="profile-txac38" style="padding: 16px; text-align: center;">
    <!-- Avatar -->
    <a href="https://github.com/chrryctr1509" target="_blank" rel="noopener noreferrer">
      <img
        class="avatar"
        :src="profile.avatarUrl"
        :alt="profile.name"
        @error="$event.target.style.display='none'"
      />
    </a>

    <!-- Name -->
    <h1 class="profile-name">{{ profile.name }}</h1>

    <!-- Username -->
    <p class="profile-username">{{ profile.username }}</p>

    <!-- Bio -->
    <p class="profile-bio">{{ profile.bio }}</p>

    <!-- Edit Profile Button -->
    <a class="profile-edit-btn" href="#">Edit profile</a>

    <!-- Profile Details -->
    <ul class="profile-details">
      <li>
        <!-- Work icon -->
        <svg viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;fill:#8b949e;">
          <path d="M9.75 1a5.985 5.985 0 00-4.469 1.5c-.126.144-.23.297-.316.454l-.003.006A4.503 4.503 0 004.55 4.5a.75.75 0 00.193.632 4.51 4.51 0 003.88 3.908l.003-.002.001.001a.75.75 0 00.632.193 4.51 4.51 0 003.908 3.88l.002-.003A4.503 4.503 0 0014.5 10.47a.75.75 0 00-.632-.193 4.51 4.51 0 00-3.908-3.88l-.002.003.001-.001a.75.75 0 00-.193-.632 4.503 4.503 0 00-1.44-1.04l-.006.003A5.985 5.985 0 009.75 1z"/>
          <path d="M10.75 8.5a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm-4 0a.25.25 0 00-.25-.25h-.5a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5zm0-3a.25.25 0 00-.25-.25h-.5a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5zm0 6a.25.25 0 00-.25-.25h-.5a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5zm4 0a.25.25 0 00-.25-.25H10.5a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5z"/>
        </svg>
        <span>No organization</span>
      </li>
      <li>
        <!-- Location icon -->
        <svg viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;fill:#8b949e;">
          <path d="M11.536 3.464a5 5 0 010 7.072l2.878 2.878a.75.75 0 11-1.061 1.061l-2.878-2.878a5 5 0 01-3.415-3.415L9.586 10.5a.75.75 0 01.063-1.033L12 7.5l1.5 2zm-7.072 0a5 5 0 010-7.072L2.5 5.29a.75.75 0 111.061-1.061l2.878 2.878a5 5 0 013.415 3.415l1.506 1.387a.75.75 0 01-.063 1.033L7 7.5 5.5 9.5zM8 9a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>
        <span>{{ profile.location }}</span>
      </li>
      <li>
        <!-- Link icon -->
        <svg viewBox="0 0 16 16" fill="currentColor" style="width:16px;height:16px;fill:#8b949e;">
          <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.24 0l2.5-2.5a3.5 3.5 0 00-4.24-4.24l-1.25 1.25zm-.025 5.19a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06-1.06l-2.5-2.5z"/>
        </svg>
        <a :href="profile.website" target="_blank" rel="noopener noreferrer">github.com/chrryctr1509</a>
      </li>
    </ul>

    <!-- Social links row -->
    <div class="profile-social-row">
      <a href="https://twitter.com/chrryctr1509" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">X (Twitter): none</a>
    </div>
    <div class="profile-social-row">
      <a href="https://github.com/chrryctr1509?tab=followers" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 600; margin-right: 4px;">{{ profile.followers }}</a>
      <span>followers</span>
      <span>·</span>
      <a href="https://github.com/chrryctr1509?tab=following" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none; font-weight: 600; margin-right: 4px;">{{ profile.following }}</a>
      <span>following</span>
    </div>

    <!-- Achievement badges (shield.io style) -->
    <div class="profile-achievements">
      <img src="https://img.shields.io/badge/Quickdraw-7EE787?style=flat-square" alt="Quickdraw" height="32" />
      <img src="https://img.shields.io/badge/Pull%20Shark-1F6FEB?style=flat-square" alt="Pull Shark" height="32" />
      <img src="https://img.shields.io/badge/YOLO-DB61A2?style=flat-square" alt="YOLO" height="32" />
      <img src="https://img.shields.io/badge/Arctic%20Code%20Vault-F0883E?style=flat-square" alt="Arctic Code Vault" height="32" />
      <img src="https://img.shields.io/github/followers/chrryctr1509?style=flat-square&color=3fb950&label=Followers" alt="Followers badge" height="32" />
      <img src="https://komarev.com/ghpvc/?username=chrryctr1509&style=flat-square&color=58a6ff&label=Views" alt="Profile Views" height="32" />
    </div>
  </div>
</template>

<style scoped>
.profile-txac38 {
  width: 100%;
}
</style>