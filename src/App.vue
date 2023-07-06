<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainNav from './components/MainNav.vue';
import { useAuthStore } from '@/stores/authStore';
import Toast from 'primevue/toast';
import { onMounted, onUnmounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  /**
   * check token fresh, set timeout.
   * This is ok because Vue Query has retries which will buffer against initial fails on stale token.
   * See store comments.
   */
  authStore.setRefreshTimeout();
});

onUnmounted(() => {
  /**
   * Clear is just needed for dev.
   * The timeout gets instatiated on the root component but that gets remounted on hot reload,
   * hence this is used on a lifecycle function
   */
  authStore.clearRefreshTimeout();
});
</script>

<template>
  <Toast position="bottom-right" />
  <header>
    <MainNav />
  </header>
  <RouterView />
</template>
