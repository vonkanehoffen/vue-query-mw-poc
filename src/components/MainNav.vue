<script setup lang="ts">
import { ref } from 'vue'
import Menubar, { type MenubarProps } from 'primevue/menubar'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

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
    label: 'Scoping'
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
])
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
        <div v-if="authStore.isAuthenticated">AUTHED</div>
        <div v-else>PUBLIC</div>
      </template>
    </Menubar>
  </nav>
</template>
