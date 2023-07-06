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

const selectedCommunityName = computed(() => {
  if (isLoading.value) {
    return 'Loading...';
  }
  if (data.value?.response?.communities) {
    const community = data.value.response.communities.find((c) => c.id === communityId.value);
    return community?.name || 'Select a community';
  }
  return 'Select a community';
});

const overlayPanel = ref();
const toggle = (event: Event) => {
  overlayPanel.value.toggle(event);
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
    {{ selectedCommunityName }}
    <i class="pi pi-angle-down ml-2" style="color: var(--primary-color)"></i>
  </div>
  <OverlayPanel ref="overlayPanel">
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
