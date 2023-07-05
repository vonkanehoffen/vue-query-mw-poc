<script setup lang="ts">
import { usePostV2ContactFilter } from '@/api/v2/generated/contact/contact';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import { onMounted, watch } from 'vue';

const userStore = useUserStore();
const { communityId } = storeToRefs(userStore);

// // TODO: Why is this endpoint a POST? It makes things awkward...
const contactFilter = usePostV2ContactFilter();

const postContactFilter = () => {
  if (communityId.value) {
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
  <DataTable :value="contactFilter.data.value?.response?.contacts">
    <Column field="firstName" header="First Name"></Column>
    <Column field="lastName" header="Last Name"></Column>
    <Column field="email" header="Email"></Column>
    <Column field="homeAddress" header="Home Address"></Column>
    <Column header="Tags">
      <template #body="slotProps">
        <ul>
          <li v-for="tag in slotProps.data.tags"><Tag :value="tag"></Tag></li>
        </ul>
      </template>
    </Column>
  </DataTable>
</template>
