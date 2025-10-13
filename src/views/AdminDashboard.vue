<script setup>
import { ref, onMounted } from 'vue'

const token = localStorage.getItem('token')
const base = 'http://localhost:8080'
const services = ref([])
const newService = ref({ title: '', desc: '' })

async function fetchServices() {
  const res = await fetch(`${base}/api/services`)
  services.value = await res.json()
}
async function createService() {
  await fetch(`${base}/api/admin/services`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(newService.value) })
  newService.value = { title: '', desc: '' }
  await fetchServices()
}
async function deleteService(id) {
  await fetch(`${base}/api/admin/services?id=${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
  await fetchServices()
}

onMounted(fetchServices)
</script>

<template>
  <div class="min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6">Admin Dashboard</h1>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="border-2 border-slate-200 rounded-xl p-4">
        <h2 class="font-bold mb-3">Create Service</h2>
        <div class="space-y-3">
          <input v-model="newService.title" placeholder="Title" class="w-full border-2 border-slate-200 rounded-xl px-4 py-3" />
          <textarea v-model="newService.desc" placeholder="Description" class="w-full border-2 border-slate-200 rounded-xl px-4 py-3"></textarea>
          <button @click="createService" class="px-4 py-2 rounded-xl bg-slate-900 text-white">Create</button>
        </div>
      </div>
      <div class="border-2 border-slate-200 rounded-xl p-4">
        <h2 class="font-bold mb-3">Services</h2>
        <ul class="space-y-2">
          <li v-for="s in services" :key="s.id" class="flex items-center justify-between border rounded-lg px-3 py-2">
            <div>
              <div class="font-semibold">{{ s.title }}</div>
              <div class="text-sm text-slate-600">{{ s.desc }}</div>
            </div>
            <button @click="deleteService(s.id)" class="text-red-600">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>


