<script setup lang="ts">
import { ref } from 'vue'
import Menubar, { type MenubarProps } from 'primevue/menubar'
const items = ref<MenubarProps['model']>([
  {
    label: 'Dashboards',
    items: [
      {
        label: 'Low-frequency dashboard',
        to: '/low-frequency-dashboard'
      },
      {
        label: 'Liftshare dashboard',
        to: '/liftshare-dashboard'
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
    label: 'Surveys',
    to: '/surveys'
  },
  {
    label: 'ACEL',
    items: [
      {
        label: 'ACEL Dashboard',
        to: '/acel-dashboard'
      },
      {
        label: 'ACEL Reports',
        to: '/acel-reports'
      },
      {
        label: 'ACEL Generator',
        to: '/acel-generator'
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
    </Menubar>
  </nav>
</template>
