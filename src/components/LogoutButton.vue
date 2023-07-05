<script setup lang="ts">
import { router } from '@/router';
import { useAuthStore } from '@/stores/authStore';
import Button from 'primevue/button';

const authStore = useAuthStore();
const handleLogout = () => {
  authStore.destroyTokens();
  router.push('/login');
};
</script>
<template>
  <button
    class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
    @click="handleLogout"
  >
    <i class="pi pi-sign-out" />
    <span class="ml-2">Log Out</span>
  </button>
</template>
