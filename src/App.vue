<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNav from './components/MainNav.vue'
</script>

<template>
  <header>
    <MainNav />
  </header>

  <RouterView />
</template>
