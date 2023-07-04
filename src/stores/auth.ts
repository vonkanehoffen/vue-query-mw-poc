import { postClientTokenRefresh } from '@/api/client/generated/authentication-tokens/authentication-tokens';
import { STORAGE_REFRESH_TOKEN, STORAGE_TOKEN } from '@/api/constants';
import { router } from '@/router';
import axios from 'axios';
import { defineStore } from 'pinia';

/**
 * Auth store
 * Stores tokens and supplies authentication state
 *
 * Note for API requests tokens are read direct from locaStorage not here.
 * That's because they could be updated by another window.
 * We still need this store to supply auth state to components though:
 * Direct reads from local storage don't work with Vue's component lifecycle as setup scripts only get called once.
 *
 * Hmmm... although would a computed property on a composable work for that?
 * Let's leave it for now as we're not replacing auth in the main app for now.
 */
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem(STORAGE_TOKEN),
    refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN),
    timeoutId: 0
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    saveTokens(token: string, refreshToken: string) {
      this.token = token;
      this.refreshToken = refreshToken;
      localStorage.setItem(STORAGE_TOKEN, token);
      localStorage.setItem(STORAGE_REFRESH_TOKEN, refreshToken);
    },
    destroyTokens() {
      this.token = null;
      this.refreshToken = null;
      localStorage.removeItem(STORAGE_TOKEN);
      localStorage.removeItem(STORAGE_REFRESH_TOKEN);
    },
    async refreshTokens() {
      try {
        const response = await postClientTokenRefresh({
          token: localStorage.getItem(STORAGE_TOKEN),
          refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN)
        });
        console.log('refresh success', response);
        this.saveTokens(response.token as string, response.refreshToken as string);
        this.setRefreshTimeout();
      } catch (error) {
        // If it's a 401 from the server, the user is logged out os return to login.
        // We don't want to destroy tokens if it's just a temp server error.
        console.log('refresh error', error);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            this.destroyTokens();
            this.clearRefreshTimeout();
            router.push('/login');
          }
        }
      }
    },
    setRefreshTimeout() {
      if (this.token) {
        const jwtPayload = JSON.parse(atob(this.token.split('.')[1]));
        const expirationTime = jwtPayload.exp;
        console.log('setRefreshTimeout token payload', jwtPayload);

        // Calculate the remaining time until token expiration
        const currentTime = Math.floor(Date.now() / 1000);
        const remainingTime = expirationTime - currentTime;

        console.log('remain time', remainingTime);

        this.timeoutId = setTimeout(this.refreshTokens, remainingTime * 1000 - 15);
      }
    },
    clearRefreshTimeout() {
      console.log('clearRefreshTimeout', this.timeoutId);
      clearTimeout(this.timeoutId);
    }
  }
});
