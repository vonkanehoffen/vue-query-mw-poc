import { useAuthStore } from '@/stores/auth';
import { onMounted, onUnmounted } from 'vue';
import { postClientTokenRefresh } from './client/generated/authentication-tokens/authentication-tokens';
import { STORAGE_REFRESH_TOKEN, STORAGE_TOKEN } from './constants';
import { router } from '@/router';
import axios from 'axios';

export const useTokenRefresh = () => {
  const authStore = useAuthStore();
  let timeoutId: number;

  const refreshToken = async () => {
    console.log('Refreshing the token...');
    try {
      const response = await postClientTokenRefresh({
        token: localStorage.getItem(STORAGE_TOKEN),
        refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN)
      });
      console.log('refresh success', response);
      authStore.saveTokens(response.token as string, response.refreshToken as string);
      setRefreshTimeout();
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
  };

  const setRefreshTimeout = () => {
    if (authStore.token) {
      const jwtPayload = JSON.parse(atob(authStore.token.split('.')[1]));
      const expirationTime = jwtPayload.exp;
      console.log('token payload', jwtPayload);

      // Calculate the remaining time until token expiration
      const currentTime = Math.floor(Date.now() / 1000);
      const remainingTime = expirationTime - currentTime;

      console.log('remain time ere', remainingTime);

      timeoutId = setTimeout(refreshToken, remainingTime * 1000 - 15);
    }
  };
  onMounted(() => {
    // check token fresh, set timeout.
    // This is ok because VQ has retries which will buffer against initial fails on stale token.
    setRefreshTimeout();
  });
  onUnmounted(() => {
    console.log('unmount');
    clearTimeout(timeoutId);
  });
};
