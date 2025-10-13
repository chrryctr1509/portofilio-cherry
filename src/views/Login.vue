<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// Use Vite env variable for API base URL (prefix VITE_)
const API = import.meta.env.VITE_API_URL || 'http://localhost:8080'
const isRegister = ref(false)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const name = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

function goHome() {
  router.push('/')
}

async function login() {
  error.value = ''
  success.value = ''
  loading.value = true
  try {
    const res = await fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
    if (!res.ok) throw new Error('Email atau password salah')
    const data = await res.json()
    localStorage.setItem('token', data.token)
    localStorage.setItem('role', data.role)
    localStorage.setItem('email', email.value)
    router.push(data.role === 'admin' ? '/admin' : '/dashboard')
  } catch (e) {
    error.value = e.message || 'Login gagal'
  } finally {
    loading.value = false
  }
}

async function register() {
  error.value = ''
  success.value = ''
  if (password.value !== confirmPassword.value) {
    error.value = 'Password tidak cocok'
    return
  }
  loading.value = true
  try {
    const res = await fetch(`${API}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value, name: name.value })
    })
    const data = await res.json().catch(() => null)
    if (!res.ok) {
      error.value = (data && data.error) ? data.error : 'Registrasi gagal'
      return
    }

    // success: save token and redirect
    if (data && data.token) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('role', data.role || 'user')
      localStorage.setItem('email', email.value)
      router.push(data.role === 'admin' ? '/admin' : '/dashboard')
      return
    }

    success.value = 'Registrasi berhasil! Silakan login.'
    setTimeout(() => {
      isRegister.value = false
      success.value = ''
    }, 1500)
  } catch (e) {
    error.value = e.message || 'Registrasi gagal'
  } finally {
    loading.value = false
  }
}

function toggleMode() {
  isRegister.value = !isRegister.value
  error.value = ''
  success.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
  name.value = ''
}
</script>

<template>
  <div class="grid lg:grid-cols-2 min-h-screen">
    <!-- Left Side - Form -->
    <div class="flex items-center justify-center bg-white p-4 sm:p-6 lg:p-12 relative min-h-screen lg:min-h-0">
      <!-- Back to Home Button -->
      <button 
        @click="goHome"
        class="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group z-10"
      >
        <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span class="font-semibold text-sm sm:text-base">Back to Home</span>
      </button>

      <div class="w-full max-w-md" :class="isRegister ? 'pt-16 sm:pt-20' : 'pt-12 sm:pt-0'">
        <!-- Header -->
        <div class="mb-6 sm:mb-8">
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">{{ isRegister ? 'SIGN UP' : 'LOGIN' }}</h1>
          <p class="text-slate-600 text-xs sm:text-sm">{{ isRegister ? 'How to I get started lorem ipsum dolor at?' : 'How to I get started lorem ipsum dolor at?' }}</p>
        </div>

        <!-- Login Form -->
        <form v-if="!isRegister" @submit.prevent="login" class="space-y-3 sm:space-y-4">
          <!-- Alerts (show above inputs) -->
          <div v-if="error" class="p-2.5 sm:p-3 bg-red-50 border-l-4 border-red-500 text-xs sm:text-sm text-red-700 rounded-r">{{ error }}</div>
          <div v-if="success" class="p-2.5 sm:p-3 bg-green-50 border-l-4 border-green-500 text-xs sm:text-sm text-green-700 rounded-r">{{ success }}</div>
          <div class="relative">
            <div class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input 
              v-model="email" 
              type="email" 
              placeholder="Username" 
              class="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-emerald-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-300 outline-none transition-all text-sm placeholder:text-slate-400"
              required 
            />
          </div>

          <div class="relative">
            <div class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Password" 
              class="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-emerald-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-300 outline-none transition-all text-sm placeholder:text-slate-400"
              required 
            />

            <!-- Toggle show/hide password -->
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700" :aria-label="showPassword ? 'Hide password' : 'Show password'">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.223-3.74M6.1 6.1L4 4m16 16l-2.1-2.1M9.88 9.88A3 3 0 0114.12 14.12" />
              </svg>
            </button>
          </div>

          

          <button 
            type="submit"
            :disabled="loading"
            class="w-full py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm hover:from-emerald-700 hover:to-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl mt-4 sm:mt-5"
          >
            {{ loading ? 'Logging in...' : 'Login Now' }}
          </button>

          <!-- Login with Others -->
          <div class="mt-5 sm:mt-6">
            <p class="text-center text-slate-600 font-semibold text-xs sm:text-sm mb-2.5 sm:mb-3">Login <span class="font-normal">with Others</span></p>
            
            <div class="space-y-2 sm:space-y-2.5">
              <button type="button" class="w-full flex items-center justify-center gap-2 sm:gap-2.5 py-2 sm:py-2.5 px-3 sm:px-4 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span class="font-semibold text-slate-700 text-xs sm:text-sm">Login with <span class="font-bold">google</span></span>
              </button>

              <button type="button" class="w-full flex items-center justify-center gap-2 sm:gap-2.5 py-2 sm:py-2.5 px-3 sm:px-4 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                <svg class="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span class="font-semibold text-slate-700 text-xs sm:text-sm">Login with <span class="font-bold">Facebook</span></span>
              </button>
            </div>
          </div>

          <!-- Toggle to Register -->
          <div class="text-center mt-4 sm:mt-5">
            <p class="text-slate-600 text-xs sm:text-sm">
              Don't have an account? 
              <button type="button" @click="toggleMode" class="text-emerald-600 font-bold hover:text-emerald-700 transition-colors">Sign Up</button>
            </p>
          </div>

          <div class="pt-3 sm:pt-4 border-t border-slate-200 mt-5 sm:mt-6">
            <p class="text-xs text-slate-500 text-center leading-relaxed">
              <span class="font-semibold">Demo:</span> admin@x.com (Admin) • user@x.com (User)
            </p>
          </div>
        </form>

        <!-- Register Form -->
        <form v-else @submit.prevent="register" class="space-y-3 sm:space-y-4">
          <!-- Alerts (show above inputs) -->
          <div v-if="error" class="p-2.5 sm:p-3 bg-red-50 border-l-4 border-red-500 text-xs sm:text-sm text-red-700 rounded-r">{{ error }}</div>
          <div v-if="success" class="p-2.5 sm:p-3 bg-green-50 border-l-4 border-green-500 text-xs sm:text-sm text-green-700 rounded-r">{{ success }}</div>

          <div class="relative">
            <div class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input 
              v-model="name" 
              type="text" 
              placeholder="Full Name" 
              class="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-emerald-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-300 outline-none transition-all text-sm placeholder:text-slate-400"
              required 
            />
          </div>

          <div class="relative">
            <div class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input 
              v-model="email" 
              type="email" 
              placeholder="Email" 
              class="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-emerald-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-300 outline-none transition-all text-sm placeholder:text-slate-400"
              required 
            />
          </div>

          <div class="relative">
            <div class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Password" 
              class="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-emerald-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-300 outline-none transition-all text-sm placeholder:text-slate-400"
              required 
            />

            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700" :aria-label="showPassword ? 'Hide password' : 'Show password'">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.223-3.74M6.1 6.1L4 4m16 16l-2.1-2.1M9.88 9.88A3 3 0 0114.12 14.12" />
              </svg>
            </button>
          </div>

          <div class="relative">
            <div class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <input 
              v-model="confirmPassword" 
              :type="showConfirmPassword ? 'text' : 'password'" 
              placeholder="Confirm Password" 
              class="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 bg-emerald-50 border-0 rounded-lg focus:ring-2 focus:ring-emerald-300 outline-none transition-all text-sm placeholder:text-slate-400"
              required 
            />

            <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700" :aria-label="showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'">
              <svg v-if="!showConfirmPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.223-3.74M6.1 6.1L4 4m16 16l-2.1-2.1M9.88 9.88A3 3 0 0114.12 14.12" />
              </svg>
            </button>
          </div>

          

          <button 
            type="submit"
            :disabled="loading"
            class="w-full py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-sm hover:from-emerald-700 hover:to-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl mt-4 sm:mt-5"
          >
            {{ loading ? 'Creating Account...' : 'Sign Up Now' }}
          </button>

          <!-- Sign Up with Others -->
          <div class="mt-5 sm:mt-6">
            <p class="text-center text-slate-600 font-semibold text-xs sm:text-sm mb-2.5 sm:mb-3">Sign Up <span class="font-normal">with Others</span></p>
            
            <div class="space-y-2 sm:space-y-2.5">
              <button type="button" class="w-full flex items-center justify-center gap-2 sm:gap-2.5 py-2 sm:py-2.5 px-3 sm:px-4 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span class="font-semibold text-slate-700 text-xs sm:text-sm">Sign Up with <span class="font-bold">google</span></span>
              </button>

              <button type="button" class="w-full flex items-center justify-center gap-2 sm:gap-2.5 py-2 sm:py-2.5 px-3 sm:px-4 bg-white border-2 border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all">
                <svg class="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span class="font-semibold text-slate-700 text-xs sm:text-sm">Sign Up with <span class="font-bold">Facebook</span></span>
              </button>
            </div>
          </div>

          <!-- Toggle to Login -->
          <div class="text-center mt-4 sm:mt-5">
            <p class="text-slate-600 text-xs sm:text-sm">
              Already have an account? 
              <button type="button" @click="toggleMode" class="text-emerald-600 font-bold hover:text-emerald-700 transition-colors">Login</button>
            </p>
          </div>
        </form>
      </div>
    </div>

    <!-- Right Side - Illustration with Emerald Background -->
    <div class="hidden lg:flex items-center justify-center bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-500 relative overflow-hidden p-16">
      <!-- Decorative Background Circles -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 -left-32 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>
      </div>

      <!-- Decorative Waves -->
      <div class="absolute inset-0 opacity-10">
        <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z" fill="white" opacity="0.15"/>
          <path d="M0,500 C320,400 420,600 720,500 C1020,400 1120,600 1440,500 L1440,800 L0,800 Z" fill="white" opacity="0.15"/>
        </svg>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex items-center justify-center w-full h-full">
        <!-- Illustration Image -->
        <div class="w-full max-w-lg">
          <img 
            src="/images/login.png" 
            alt="Login Illustration" 
            class="w-full h-auto drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>


