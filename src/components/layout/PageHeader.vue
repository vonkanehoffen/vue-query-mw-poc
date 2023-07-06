<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>
<template>
  <div class="w-full px-6 mb-6">
    <header
      class="flex justify-between items-center align-middle gap-6 py-6 border-b border-gray-300"
    >
      <h1 class="text-2xl font-bold">{{ props.title }}</h1>
      <div class="flex justify-end"><slot name="buttons"></slot></div>
    </header>
  </div>
</template>
