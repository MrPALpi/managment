import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: () => import('../views/СhoiceEnterprise.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/schema',
      name: 'schema',
      component: () => import('../views/SchemaEnterprise.vue'),
      meta: { transition: 'slide-right' }, 
    }
  ]
})

export default router
