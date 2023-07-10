<script setup lang="ts">
import { useGetV2AcelReportId } from '@/api/v2/generated/survey/survey';
import Dropdown from 'primevue/dropdown';
import { computed, ref } from 'vue';
import InvalidateButton from './InvalidateButton.vue';

const selectedReportId = ref({ name: 'Babergh', code: 'pt' });
const reports = ref([
  { name: 'Babergh', code: 'pt' },
  { name: 'Willis', code: 'zm' },
  { name: 'Another one', code: 'kioy' }
]);

// Note these both havwe to be computed. Using refs direct doesn't work.
const id = computed(() => selectedReportId.value?.code);
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
    <Dropdown
      v-model="selectedReportId"
      :options="reports"
      optionLabel="name"
      placeholder="Select a Report"
      class="w-full md:w-14rem"
    />
    <InvalidateButton />
    <p v-if="isLoading && enabled">Loading...</p>
    <pre> {{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>
