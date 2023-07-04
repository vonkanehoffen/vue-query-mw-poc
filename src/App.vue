<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainNav from './components/MainNav.vue';
import { useAuthStore } from '@/stores/auth';
import { useTokenRefresh } from '@/api/useTokenRefresh';

const authStore = useAuthStore();
// authStore.isAuthenticated

useTokenRefresh();
</script>

<template>
  <header>
    <MainNav />
  </header>
  <h1 v-if="authStore.isAuthenticated">Authenticated</h1>
  <h1 v-else>Not Authenticated</h1>
  <RouterView />
</template>
