import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/createtodo',
      name: 'createtodo',
      component: () => import('../views/TodoCreateView.vue'),
    },
    {
      path: '/listtodo',
      name: 'listtodo',
      component: () => import('../views/TodoListView.vue'),
    },
    {
      path: '/edit/:id',
      name: 'edittodo',
      component: () => import('../views/TodoEditView.vue'),
    }
  ]
})

export default router
