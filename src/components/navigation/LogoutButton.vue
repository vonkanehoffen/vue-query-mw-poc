<script setup lang="ts">
import { router } from '@/router';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const handleLogout = () => {
  authStore.destroyTokens();
  router.push('/login');
};
</script>
<template>
  <Button
    icon="pi pi-sign-out"
    @click="handleLogout"
    label="Log Out"
    class="w-full"
    size="small"
    severity="secondary"
  />
</template>
