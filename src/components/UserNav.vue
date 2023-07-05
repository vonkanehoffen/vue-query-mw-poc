<script setup lang="ts">
import { useGetV2Community } from '@/api/v2/generated/community/community';
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import LogoutButton from '@/components/LogoutButton.vue';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

const userStore = useUserStore();
const { isLoading, data } = useGetV2Community();
const menu = ref();

const toggle = (event) => {
  menu.value.toggle(event);
};

const items = computed(() => {
  return [
    { separator: true },
    ...(data.value?.response?.communities?.map((c) => ({
      label: c.name,
      command: () => {
        userStore.communityId = c.id as string;
      }
    })) || []),
    { separator: true }
  ];
});
</script>
<template>
  <Button
    type="button"
    label="Toggle"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
  />
  <Menu :model="items" :popup="true" ref="menu" id="overlay_menu">
    <template #start>
      <button
        class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"
      >
        <Avatar class="mr-2" shape="circle" />
        <div class="flex flex-column align">
          <span class="font-bold">Amy Elsner</span>
          <span class="text-sm">Agent</span>
        </div>
      </button>
    </template>
    <template #end>
      <LogoutButton />
    </template>
  </Menu>
</template>
