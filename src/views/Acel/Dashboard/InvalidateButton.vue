<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import Button from 'primevue/button';

const queryClient = useQueryClient();
</script>
<template>
  <Button label="Invalidate cache" @click="queryClient.invalidateQueries()" />
</template>
