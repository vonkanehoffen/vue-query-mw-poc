<script setup lang="ts">
import { useGetV2Community } from '@/api/v2/generated/community/community';
import { usePostV2ContactFilter } from '@/api/v2/generated/contact/contact';
import { watch } from 'vue';

const community = useGetV2Community();
// TODO: Why is this endpoint a POST?
const contactFilter = usePostV2ContactFilter();

watch(community.data, (data) => {
  const communityId = data?.response?.communities[0].id;
  console.log('watch', communityId);
  if (communityId) {
    contactFilter.mutate({
      data: {
        communityId,
        filter: { searchTerm: '' },
        page: 1,
        contactsPerPage: 50
      }
    });
  }
});
</script>

<template>
  <h1 class="text-lg">Contacts</h1>
  <pre> {{ JSON.stringify(contactFilter.data, null, 2) }}</pre>
</template>
