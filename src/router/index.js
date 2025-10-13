import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const AdminDashboard = () => import('../views/AdminDashboard.vue')
const UserDashboard = () => import('../views/UserDashboard.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/admin', name: 'admin', component: AdminDashboard, meta: { requiresAuth: true, role: 'admin' } },
  { path: '/dashboard', name: 'dashboard', component: UserDashboard, meta: { requiresAuth: true, role: 'user' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta?.requiresAuth) return next()
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  if (!token) return next({ name: 'login', query: { redirect: to.fullPath } })
  if (to.meta.role === 'admin' && role !== 'admin') return next({ name: 'dashboard' })
  return next()
})

export default router


