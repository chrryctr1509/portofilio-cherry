<script setup>
import GithubSidebar from '../components/GithubSidebar.vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <div class="gh-layout">
    <GithubSidebar />
    <main class="gh-main">
      <HeroSection />
      <div class="gh-divider" />
      <FeaturesSection />
      <div class="gh-divider" />
      <SkillsSection />
      <PortfolioSection />
      <div class="gh-divider" />
      <AboutSection />
      <div class="gh-divider" />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
</style>