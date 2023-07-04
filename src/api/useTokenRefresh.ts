import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
import { postClientTokenRefresh } from './client/generated/authentication-tokens/authentication-tokens';
import { STORAGE_REFRESH_TOKEN, STORAGE_TOKEN } from './constants';
import { router } from '@/router';
import axios from 'axios';

export function useTokenRefresh() {
  const authStore = useAuthStore();

  onMounted(() => {
    // check token fresh, set timeout.
    // This is ok because VQ has retries which will buffer against initial fails on stale token.
    if (authStore.token) {
      const jwtPayload = JSON.parse(atob(authStore.token.split('.')[1]));
      const expirationTime = jwtPayload.exp;
      console.log('token payload', jwtPayload);

      // Calculate the remaining time until token expiration
      const currentTime = Math.floor(Date.now() / 1000);
      const remainingTime = expirationTime - currentTime;

      console.log('remain time', remainingTime);

      setTimeout(refreshToken, remainingTime * 1000); // Convert remainingTime to milliseconds

      async function refreshToken() {
        console.log('Refreshing the token...');
        try {
          const response = await postClientTokenRefresh({
            token: localStorage.getItem(STORAGE_TOKEN),
            refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN)
          });
          console.log('refresh success', response);
          authStore.saveTokens(response.token as string, response.refreshToken as string);
        } catch (error) {
          // If it's a 401 from the server, the user is logged out os return to login.
          // We don't want to destroy tokens if it's just a temp server error.
          console.log('refresh error', error);
          if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
              authStore.destroyTokens();
              router.push('/login');
            }
          }
        }
      }
    }
  });
}
