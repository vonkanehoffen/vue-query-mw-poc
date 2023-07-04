<script setup lang="ts">
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const handleClick = () => {
  toast.add({ severity: 'error', summary: 'lorem ipsum', detail: 'dfdsdfgdsgsdfg', life: 3000 });
};
</script>

<template>
  <h1 class="text-lg">Contacts</h1>
  <Button label="Click me" @click="handleClick()" />
</template>
