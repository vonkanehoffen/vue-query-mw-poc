<script setup lang="ts">
import { useGetV2Community } from '@/api/v2/generated/community/community';
import { useGetV2Contact, usePostV2ContactFilter } from '@/api/v2/generated/contact/contact';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';

const userStore = useUserStore();
const { communityId } = storeToRefs(userStore);

// // TODO: Why is this endpoint a POST? It makes things awkward...
const contactFilter = usePostV2ContactFilter();

const postContactFilter = () => {
  if (communityId) {
    contactFilter.mutate({
      data: {
        communityId: communityId.value,
        filter: { searchTerm: '' },
        page: 1,
        contactsPerPage: 50
      }
    });
  }
};

watch(communityId, (communityId) => {
  console.log('watch', communityId);
  postContactFilter();
});

onMounted(postContactFilter);
</script>

<template>
  <h1 class="text-lg">Contacts - com {{ userStore.communityId }}</h1>
  <pre> {{ JSON.stringify(contactFilter.data.value, null, 2) }}</pre>
</template>
