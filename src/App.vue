<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import GithubHeader from './components/GithubHeader.vue'

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <div class="gh-app">
    <GithubHeader />
    <RouterView />
  </div>
</template>

<style>
.gh-app {
  min-height: 100vh;
  background: #0D1117;
}
</style>