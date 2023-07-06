import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { type VueQueryPluginOptions } from '@tanstack/vue-query';
import { useToast } from 'vue-toastification';
import { router } from '../router';

export const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        /**
         * Handle API errors globally.
         * This can be overridden per component if needed, but having this here keeps things DRY.
         *
         * There will be some changes around onError in v5.
         * @see https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
         * This global handler should be ok though.
         */
        onError: (error) => {
          console.log('DEFAULT QUERY ERROR', error);
          const authStore = useAuthStore();
          const toast = useToast();

          // Error can be anything: https://tkdodo.eu/blog/react-query-and-type-script#what-about-error
          if (axios.isAxiosError(error)) {
            toast.error(`Server error: ${error.message}`);

            // If it's 401 we need to update the auth state in pinia
            if (error.response?.status === 401 && authStore.isAuthenticated) {
              authStore.destroyTokens();
              router.push('/login');
            }
          } else if (error instanceof Error) {
            toast.error(`General error: ${error.message}`);
          }
        }
      },
      mutations: {
        onError: (error) => {
          // TODO: 401 should clear tokens here too, but there's some inconsistency with responses on backend I think
          console.log('DEFAULT MUTATION ERROR', error);
          const toast = useToast();
          toast.error(`Server error: ${error.message}`);
        }
      }
    }
  }
};
