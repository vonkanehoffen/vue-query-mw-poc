import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactsView.vue'),
      beforeEnter: (to, from) => {
        console.log('onBeforeEnter', to, from)
        // Nope. No vue query hooks here.
        // So we need auth state in pinia.
        // const { isAuthenticated } = useAuth()
        return isAuthenticated || '/login'
      }
    }
  ]
})
