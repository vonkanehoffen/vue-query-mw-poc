<script setup lang="ts">
import { ref } from 'vue';
import Menubar, { type MenubarProps } from 'primevue/menubar';
import { useAuthStore } from '@/stores/authStore';
import LogoutButton from '@/components/LogoutButton.vue';
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
        label: 'ACEL Dashboard'
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
// Next.... a community selector on the nav bar that saves selected ID to Pinia
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
        <div v-else>PUBLIC</div>
      </template>
    </Menubar>
  </nav>
</template>
