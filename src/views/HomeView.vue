<script setup lang="ts">
import { useGetV2Community } from '@/api/v2/generated/community/community'

const { isLoading, data } = useGetV2Community()
</script>

<template>
  <main>
    <h1 class="text-lg">Home</h1>
    <i v-if="isLoading" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <pre v-else> {{ JSON.stringify(data, null, 2) }}</pre>
  </main>
</template>
