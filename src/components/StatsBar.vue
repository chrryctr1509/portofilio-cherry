<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const stats = [
  {
    label: "Projects Completed",
    value: 500,
    suffix: "+",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-blue-500 to-indigo-500",
  },
  {
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Revenue Generated",
    value: 50,
    prefix: "$",
    suffix: "M+",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Years Experience",
    value: 10,
    suffix: "+",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-orange-500 to-red-500",
  },
];

const displayValues = ref(stats.map(() => 0));
const hasAnimated = ref(false);
let observer = null;

const animateValue = (index, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      displayValues.value[index] = target;
      clearInterval(timer);
    } else {
      displayValues.value[index] = Math.floor(current);
    }
  }, 16);
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true;
      stats.forEach((stat, index) => {
        setTimeout(() => animateValue(index, stat.value), index * 100);
      });
    }
  });
};

onMounted(() => {
  const section = document.querySelector("#stats-section");
  observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });
  if (section) observer.observe(section);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <section
    id="experience"
    class="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10 dark:opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgb(71 85 105) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="container relative px-4 mx-auto sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 text-center">
        <h2
          class="mb-3 text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100"
        >
          Career Snapshot
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          A quick look at experience and outcomes
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        <div v-for="(s, idx) in stats" :key="s.label" class="relative group">
          <!-- Card -->
          <div
            class="relative p-8 transition-all duration-300 border shadow-lg rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-sm border-slate-200 dark:border-white/20 hover:bg-white/90 dark:hover:bg-white/15 hover:border-slate-300 dark:hover:border-white/30 hover:scale-105 dark:shadow-none"
          >
            <!-- Icon -->
            <div
              class="inline-flex items-center justify-center mb-4 text-white transition-transform shadow-lg h-14 w-14 rounded-xl bg-gradient-to-br group-hover:scale-110"
              :class="s.color"
            >
              <svg
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="s.icon"
                />
              </svg>
            </div>

            <!-- Value -->
            <div
              class="mb-2 text-4xl font-black text-slate-900 lg:text-5xl dark:text-slate-100"
            >
              {{ s.prefix || "" }}{{ displayValues[idx] }}{{ s.suffix || "" }}
            </div>

            <!-- Label -->
            <p class="font-medium text-slate-600 dark:text-slate-400">
              {{ s.label }}
            </p>

            <!-- Glow Effect -->
            <div
              class="absolute inset-0 transition-opacity opacity-0 rounded-2xl group-hover:opacity-100 bg-gradient-to-br blur-xl -z-10"
              :class="s.color"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
