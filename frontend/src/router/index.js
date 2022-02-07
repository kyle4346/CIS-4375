import { createRouter, createWebHistory } from 'vue-router'
import Project from '../views/Project.vue'
import Phases from '../views/Phases.vue'
import Step from '../views/Step.vue'
import Task from '../views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'Project',
    component: Project
  },
  {
    path: '/Phases',
    name: 'Phases',
    component: Phases
  },
  {
    path: '/Step',
    name: 'Step',
    component: Step
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
