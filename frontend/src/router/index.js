import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Phases from '../views/Phases.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Phases',
    name: 'Phases',
    component: Phases
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
