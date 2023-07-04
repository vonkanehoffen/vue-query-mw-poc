<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainNav from './components/MainNav.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
import { postClientTokenRefresh } from './api/client/generated/authentication-tokens/authentication-tokens';
import { STORAGE_TOKEN, STORAGE_REFRESH_TOKEN } from './api/constants';
import { router } from './router';
import axios from 'axios';

const authStore = useAuthStore();
// authStore.isAuthenticated

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
        authStore.saveTokens(response.token, response.refreshToken);
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
</script>

<template>
  <header>
    <MainNav />
  </header>
  <h1 v-if="authStore.isAuthenticated">Authenticated</h1>
  <h1 v-else>Not Authenticated</h1>
  <RouterView />
</template>
