import './assets/main.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import { router } from './router';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import ToastService from 'primevue/toastservice';
import { useToast } from 'primevue/usetoast';

import Button from 'primevue/button';

const app = createApp(App);

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        // TODO: Is this really gonna be depreciated in v5? See https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
        onError: (error) => {
          // If it's 401 we need to update the auth state in pinia
          console.log('DEFAULT ERROR', error, error.response?.status);

          const authStore = useAuthStore();
          const toast = useToast();
          toast.add({ severity: 'error', summary: 'Server error', detail: error.message });

          if (axios.isAxiosError(error)) {
            if (error.response?.status === 401 && authStore.isAuthenticated) {
              console.log('VueQuery 401. Destroying tokens');
              authStore.destroyTokens();
              router.push('/login');
            }
          }
        }
      },
      mutations: {
        // TODO
      }
    }
  }
};

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.use(PrimeVue);
app.use(ToastService);

// TODO: Do this for all components we want globally?
app.component('Button', Button);

app.mount('#app');
