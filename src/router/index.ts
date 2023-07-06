import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/authStore';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        private: true
      }
    },
    {
      path: '/login',
      component: () => import('../views/Login/LoginView.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue'),
      meta: {
        private: true
      }
    },
    {
      path: '/scoping',
      component: () => import('../views/ScopingView.vue')
    }
  ]
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  if (to.meta.private && !authStore.isAuthenticated) return '/login';
  if (to.meta.auth && authStore.isAuthenticated) return '/';
});
