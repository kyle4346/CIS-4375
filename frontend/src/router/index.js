import { createRouter, createWebHistory } from 'vue-router'
import Project from '../views/Project.vue'
import Investors from '../views/Investors.vue'
import Subcontractors from '../views/Subcontractors.vue'
import Task from '../views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'Project',
    component: Project
  },
  {
    path: '/Investors',
    name: 'Investors',
    component: Investors
  },
  {
    path: '/Subcontractors',
    name: 'Subcontractors',
    component: Subcontractors
  },
  {
    path: '/Task',
    name: 'Task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
