<script setup lang="ts">
import { useGetV2AcelReportId } from '@/api/v2/generated/survey/survey';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import { computed, ref, watch } from 'vue';

const selectedReportId = ref('');
// const reports = ref([
//   { name: 'Babergh', code: 'pt' },
//   { name: 'Willis', code: 'zm' },
//   { name: 'Another one', code: 'kioy' }
// ]);
// watch(selectedReportId, (newValue) => {
//   console.log(newValue);
// });

// const code = computed(() => selectedReportId.value && selectedReportId.value.code);

// Note these both havwe to be computed. Using refs direct doesn't work.
const id = computed(() => selectedReportId.value);
const enabled = computed(() => !!selectedReportId.value);
const { isLoading, data } = useGetV2AcelReportId(id, {
  query: {
    enabled
  }
});
</script>
<template>
  <div>
    <h1>ACEL dash - just a GET test - {{ selectedReportId }}</h1>
    <Button label="report one" @click="selectedReportId = 'zm'" />
    <Button label="report two" @click="selectedReportId = 'kioy'" />
    <p v-if="isLoading">Loading...</p>
    <pre> {{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>
