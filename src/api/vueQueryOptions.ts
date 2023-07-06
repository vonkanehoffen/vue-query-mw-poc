import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { type VueQueryPluginOptions } from '@tanstack/vue-query';
import { useToast } from 'vue-toastification';
import { router } from '../router';

export const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        // TODO: Is this really gonna be depreciated in v5? See https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
        onError: (error) => {
          // If it's 401 we need to update the auth state in pinia
          console.log('DEFAULT ERROR', error, error.response?.status);

          const authStore = useAuthStore();
          const toast = useToast();
          toast.error(`Server error: ${error.message}`);

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
        onError: (error) => {
          // TODO: 401 should clear tokens here too, but there's some inconsistency with responses on backend I think
          console.log('DEFAULT MUTATION ERROR', error);
          const toast = useToast();
          // TODO: Not working here. Inject warning
          toast.error(`Server error: ${error.message}`);
        }
      }
    }
  }
};
