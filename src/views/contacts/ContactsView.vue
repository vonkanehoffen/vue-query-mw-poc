<script setup lang="ts">
import { usePostV2ContactFilter } from '@/api/v2/generated/contact/contact';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import { onMounted, watch } from 'vue';
import PageHeader from '@/components/layout/PageHeader.vue';
import CreateContact from './CreateContact.vue';

const userStore = useUserStore();
const { communityId } = storeToRefs(userStore);

// TODO: Why is this endpoint a POST? It makes things awkward...
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

// We wouldn't need a watch if this was a GET / useQuery.
watch(communityId, () => {
  postContactFilter();
});

onMounted(postContactFilter);
</script>

<template>
  <PageHeader title="Contacts">
    <template #buttons>
      <CreateContact />
    </template>
  </PageHeader>
  <div class="flex px-6">
    <DataTable :value="contactFilter.data.value?.response?.contacts" class="w-full">
      <Column field="firstName" header="First Name"></Column>
      <Column field="lastName" header="Last Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="homeAddress" header="Home Address"></Column>
      <Column header="Tags">
        <template #body="slotProps">
          <ul>
            <li v-for="tag in slotProps.data.tags" :key="tag"><Tag :value="tag"></Tag></li>
          </ul>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
