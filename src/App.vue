<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainNav from './components/MainNav.vue';
import { useAuthStore } from '@/stores/auth';
import Toast from 'primevue/toast';
import { onMounted, onUnmounted } from 'vue';

const authStore = useAuthStore();
// authStore.isAuthenticated

onMounted(() => {
  // check token fresh, set timeout.
  // This is ok because VQ has retries which will buffer against initial fails on stale token.
  authStore.setRefreshTimeout();
});
onUnmounted(() => {
  authStore.clearRefreshTimeout();
});
</script>

<template>
  <Toast position="bottom-right" />
  <header>
    <MainNav />
  </header>
  <h1 v-if="authStore.isAuthenticated">Authenticated</h1>
  <h1 v-else>Not Authenticated</h1>
  <RouterView />
</template>
