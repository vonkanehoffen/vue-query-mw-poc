<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <div class="about">
    <h1 class="text-3xl font-bold underline">This is an about page</h1>
    <Button label="Click me" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
