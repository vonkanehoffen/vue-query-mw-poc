<script setup lang="ts">
import { useGetV2Community } from '@/api/v2/generated/community/community';
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import LogoutButton from '@/components/LogoutButton.vue';
import OverlayPanel from 'primevue/overlaypanel';
import Dropdown from 'primevue/dropdown';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { communityId } = storeToRefs(userStore);
const { isLoading, data } = useGetV2Community();

const op = ref();
const toggle = (event: Event) => {
  op.value.toggle(event);
};
</script>
<template>
  <div
    class="p-menuitem cursor-pointer"
    role="menuitem"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
  >
    Community name here
    <i class="pi pi-angle-down" style="color: var(--primary-color)"></i>
  </div>
  <OverlayPanel ref="op">
    <Dropdown
      v-model="communityId"
      :options="data?.response?.communities || []"
      :optionValue="(opt) => opt.id"
      filter
      optionLabel="name"
      placeholder="Select a Coummunity"
      class="w-full md:w-14rem"
    />
    <div class="mt-4">
      <LogoutButton />
    </div>
  </OverlayPanel>
</template>
