import { postClientTokenRefresh } from '@/api/client/generated/authentication-tokens/authentication-tokens';
import { STORAGE_REFRESH_TOKEN, STORAGE_TOKEN } from '@/api/constants';
import { router } from '@/router';
import axios from 'axios';
import { defineStore } from 'pinia';

/**
 * Auth store
 * Stores tokens and supplies authentication state
 */
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem(STORAGE_TOKEN),
    refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN),
    timeoutId: 0
  }),
  getters: {
    /**
     * Auth state for component logic
     * Direct reads from local storage don't work with Vue's component lifecycle as setup scripts only get called once.
     * That's the main reason we need this store.
     */
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    /**
     * Save new tokens to local storage and store.
     *
     * Note for API requests tokens are read direct from locaStorage.
     * That's because they could be updated by another window that doesn't have access to this store.
     */
    saveTokens(token: string, refreshToken: string) {
      this.token = token;
      this.refreshToken = refreshToken;
      localStorage.setItem(STORAGE_TOKEN, token);
      localStorage.setItem(STORAGE_REFRESH_TOKEN, refreshToken);
    },

    /**
     * Logout: Destroy tokens.
     */
    destroyTokens() {
      this.token = null;
      this.refreshToken = null;
      localStorage.removeItem(STORAGE_TOKEN);
      localStorage.removeItem(STORAGE_REFRESH_TOKEN);
    },

    /**
     * Timer based token refresh.
     * The old method checked expiration when API requests were made but we can;t do that with Vue Query:
     * A request gets retried before it triggers an error handler.
     * This works in our favour though as retires can happen while a token refresh occurs, preventiong race conditions.
     * It also means we don't have to de-dupe token requests when multiple API requests are made at once.
     */
    async refreshTokens() {
      try {
        const response = await postClientTokenRefresh({
          token: localStorage.getItem(STORAGE_TOKEN),
          refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN)
        });
        this.saveTokens(response.token as string, response.refreshToken as string);
        this.setRefreshTimeout();
      } catch (error) {
        // If it's a 401 or 403 from the server, the user is logged out os return to login.
        // We don't want to destroy tokens if it's just a temp server error.
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401 || error.response?.status === 403) {
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

        // Calculate the remaining time until token expiration
        const currentTime = Math.floor(Date.now() / 1000);
        const remainingTime = expirationTime - currentTime;

        this.timeoutId = setTimeout(this.refreshTokens, remainingTime * 1000 - 15);
      }
    },
    clearRefreshTimeout() {
      clearTimeout(this.timeoutId);
    }
  }
});
