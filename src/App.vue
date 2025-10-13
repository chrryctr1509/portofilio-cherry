<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TestimonialsCarousel from './components/TestimonialsCarousel.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialsCarousel />
    </main>
    <SiteFooter />
  </div>
  
</template>

<style scoped>
</style>

