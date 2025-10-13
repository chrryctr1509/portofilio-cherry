<script setup>
import { ref, onMounted } from 'vue'

const me = ref({})
const token = localStorage.getItem('token')

onMounted(async () => {
  if (token) {
    const res = await fetch('http://localhost:8080/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
    me.value = await res.json()
  }
})

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  window.location.href = '/'
}
</script>

<template>
  <div class="min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-4">User Dashboard</h1>
    <pre class="bg-slate-100 p-4 rounded-xl">{{ me }}</pre>
    <button @click="logout" class="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white">Logout</button>
  </div>
</template>

<style scoped>
</style>


