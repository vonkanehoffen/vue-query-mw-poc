import './assets/main.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import { router } from './router'
import axios from 'axios'
import { postClientTokenRefresh } from './api/client/generated/authentication-tokens/authentication-tokens'
import { STORAGE_REFRESH_TOKEN, STORAGE_TOKEN } from './api/constants'
import { useAuthStore } from './stores/auth'
import Toast, { useToast, type PluginOptions, POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        // TODO: Is this really gonna be depreciated in v5? See https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
        onError: async (error) => {
          // If it's 401 we need to update the auth state in pinia
          console.log('DEFAULT ERROR', error, error.response?.status)

          const authStore = useAuthStore()
          const toast = useToast()
          toast(error.message)

          if (axios.isAxiosError(error)) {
            if (error.response?.status === 401 && authStore.isAuthenticated) {
              console.log('gonna refresh')
              try {
                const response = await postClientTokenRefresh({
                  token: localStorage.getItem(STORAGE_TOKEN),
                  refreshToken: localStorage.getItem(STORAGE_REFRESH_TOKEN)
                })
                console.log('refreh suvvess', response)
                authStore.saveTokens(response.token, response.refreshToken)
              } catch (error) {
                console.log('refresh error', error)
              }
            }
          }
        }
      }
    }
  }
}

const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT
}

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, vueQueryPluginOptions)
app.use(PrimeVue)
app.use(Toast, toastOptions)

app.mount('#app')
