<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import Button from 'primevue/button';

const queryClient = useQueryClient();

const handleInvalidate = () => {
  queryClient.invalidateQueries({ queryKey: ['v2', 'acel'] });
};
</script>
<template>
  <Button label="Invalidate cache" @click="handleInvalidate()" />
</template>
