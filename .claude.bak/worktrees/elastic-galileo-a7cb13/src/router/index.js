import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const PortfolioList = () => import('../views/PortfolioList.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/portfolio', name: 'portfolio', component: PortfolioList },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


