import { STORAGE_REFRESH_TOKEN, STORAGE_TOKEN } from '@/api/constants'
import { defineStore } from 'pinia'

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
    refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN)
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    saveTokens(token: string, refreshToken: string) {
      this.token = token
      this.refreshToken = refreshToken
      localStorage.setItem(STORAGE_TOKEN, token)
      localStorage.setItem(STORAGE_REFRESH_TOKEN, refreshToken)
    },
    destroyTokens() {
      this.token = null
      this.refreshToken = null
      localStorage.removeItem(STORAGE_TOKEN)
      localStorage.removeItem(STORAGE_REFRESH_TOKEN)
    }
  }
})
