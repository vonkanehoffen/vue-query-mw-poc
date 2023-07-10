<script setup lang="ts">
import { ref } from 'vue';
import Menubar, { type MenubarProps } from 'primevue/menubar';
import Tag from 'primevue/tag';
import { useAuthStore } from '@/stores/authStore';
import UserNav from './UserNav.vue';

const authStore = useAuthStore();

const items = ref<MenubarProps['model']>([
  {
    label: 'Dashboards',
    items: [
      {
        label: 'Low-frequency dashboard'
      },
      {
        label: 'Liftshare dashboard'
      }
    ]
  },
  {
    label: 'Contacts',
    to: '/contacts'
  },
  {
    label: 'Scoping',
    to: '/scoping'
  },
  {
    label: 'Surveys'
  },
  {
    label: 'ACEL',
    items: [
      {
        label: 'ACEL Dashboard',
        to: '/acel/dashbard'
      },
      {
        label: 'ACEL Reports'
      },
      {
        label: 'ACEL Generator'
      }
    ]
  }
]);
</script>

<template>
  <nav>
    <Menubar :model="items">
      <template #start>
        <RouterLink to="/">
          <img alt="logo" src="@/assets/mw-wave.svg" width="95" height="24" class="mr-2" />
        </RouterLink>
      </template>
      <template #end>
        <UserNav v-if="authStore.isAuthenticated" />
        <Tag severity="info" class="mr-2" v-else>PUBLIC</Tag>
      </template>
    </Menubar>
  </nav>
</template>
