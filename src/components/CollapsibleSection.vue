<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '📌'
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="border border-[#30363d] rounded-lg overflow-hidden bg-[#0d1117] mb-4">
    <!-- Header -->
    <button
      @click="toggle"
      class="w-full px-6 py-4 flex items-center justify-between bg-[#161b22] hover:bg-[#1c2128] transition-colors text-left"
    >
      <div class="flex items-center gap-3">
        <span class="text-2xl">{{ icon }}</span>
        <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
      </div>
      <svg
        class="w-5 h-5 text-gray-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Content -->
    <Transition name="collapse">
      <div v-show="isOpen" class="px-6 py-4 border-t border-[#30363d]">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
