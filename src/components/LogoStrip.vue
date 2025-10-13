<script setup>
const brands = [
  'Google', 'Microsoft', 'Amazon', 'Shopify', 'Netflix', 
  'Stripe', 'Airbnb', 'Spotify', 'Adobe', 'Salesforce'
]
</script>

<template>
  <section class="py-16 bg-white border-y border-slate-100">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Trusted by Industry Leaders</p>
      </div>
      
      <!-- Marquee Effect -->
      <div class="relative overflow-hidden">
        <div class="flex animate-marquee space-x-12 lg:space-x-16">
          <div v-for="(b, idx) in [...brands, ...brands]" :key="`${b}-${idx}`" 
               class="flex-shrink-0 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <div class="flex items-center justify-center h-16 px-8 text-2xl font-bold text-slate-700">
              {{ b }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>

