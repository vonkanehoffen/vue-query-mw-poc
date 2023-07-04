<script setup lang="ts">
import { router } from '@/router';
import { useAuthStore } from '@/stores/auth';
import Button from 'primevue/button';

const authStore = useAuthStore();
const handleLogout = () => {
  authStore.destroyTokens();
  router.push('/login');
};
</script>
<template><Button label="Logout" @click="handleLogout()" /></template>
