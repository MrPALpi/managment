import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'home',
      component: () => import('../views/HomeView.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/StudentView.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/teststudent',
      name: 'testStudent',
      component: () => import('../views/testStudentView.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/result/:id',
      name: 'result',
      component: () => import('../views/resultView.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'slide-right' }, 
    },
    {
      path: '/employers',
      name: 'employers',
      component: () => import('../views/EmployerView.vue'),
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
router.beforeEach(async (to, from, next) => {
  if(from.name==='result' && to.name==='schema'){
    next({name:'home'});
 
  }

  else{

    next();
  }
 

})

export default router
