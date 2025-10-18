<script setup>
import { ref } from "vue";

const email = ref("");
const isSubmitting = ref(false);
const isSuccess = ref(false);

async function subscribe() {
  if (!email.value) return;

  isSubmitting.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  isSubmitting.value = false;
  isSuccess.value = true;

  setTimeout(() => {
    isSuccess.value = false;
    email.value = "";
  }, 3000);
}
</script>

<template>
  <section id="contact" class="py-20 lg:py-28 relative overflow-hidden">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-brand-500 via-emerald-500 to-teal-500 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900"
    ></div>
    <div class="absolute inset-0 opacity-10 dark:opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 2px 2px,
            white 2px,
            transparent 0
          );
          background-size: 50px 50px;
        "
      ></div>
    </div>

    <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Icon -->
        <div
          class="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/20 dark:bg-white/30 backdrop-blur-sm mb-6"
        >
          <svg
            class="w-10 h-10 text-white dark:text-slate-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <!-- Heading -->
        <h2
          class="text-4xl md:text-5xl font-black text-white dark:text-slate-100 mb-4"
        >
          Get In Touch
        </h2>
        <p
          class="text-lg md:text-xl text-white/90 dark:text-slate-200 mb-8 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Send me a message and
          I'll get back to you soon.
        </p>

        <!-- Form -->
        <form @submit.prevent="subscribe" class="max-w-xl mx-auto">
          <div class="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              v-model="email"
              type="email"
              required
              placeholder="Your email address"
              class="flex-1 rounded-xl border-2 border-white/20 dark:border-white/30 bg-white/10 dark:bg-white/15 backdrop-blur-sm px-6 py-4 text-white dark:text-slate-100 placeholder-white/60 dark:placeholder-slate-300 outline-none focus:ring-4 focus:ring-white/30 dark:focus:ring-white/40 focus:border-white/40 dark:focus:border-white/50 transition-all"
            />
            <button
              type="submit"
              :disabled="isSubmitting || isSuccess"
              class="px-8 py-4 rounded-xl bg-white dark:bg-slate-200 text-brand-600 dark:text-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-100 disabled:opacity-75 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <span v-if="!isSubmitting && !isSuccess">Send Message</span>
              <span v-if="isSubmitting" class="flex items-center gap-2">
                <svg
                  class="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
              <span v-if="isSuccess" class="flex items-center gap-2">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Sent!
              </span>
            </button>
          </div>
          <p class="text-sm text-white/70 dark:text-slate-300">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </form>

        <!-- Social Proof -->
        <div class="mt-12 flex items-center justify-center gap-6 flex-wrap">
          <div
            class="flex items-center gap-2 text-white/90 dark:text-slate-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
              />
            </svg>
            <span class="font-semibold">5,000+ subscribers</span>
          </div>
          <div class="h-4 w-px bg-white/30 dark:bg-white/40"></div>
          <div
            class="flex items-center gap-2 text-white/90 dark:text-slate-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            <span class="font-semibold">Weekly insights</span>
          </div>
          <div class="h-4 w-px bg-white/30 dark:bg-white/40"></div>
          <div
            class="flex items-center gap-2 text-white/90 dark:text-slate-200"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-semibold">No spam</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
