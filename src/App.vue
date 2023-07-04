<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
// import { useAuth } from './api/auth'
// import { useAuthStore } from '@/stores/auth'
import { getIsAuthenticated } from './api/helpers'

// const authStore = useAuthStore()
// authStore.isAuthenticated

const isAuthenticated = getIsAuthenticated()
</script>

<template>
  <header>
    <MainNav />
  </header>
  <h1 v-if="isAuthenticated">Authenticated</h1>
  <h1 v-else>Not Authenticated</h1>
  <RouterView />
</template>
