<script setup lang="ts">
import { getGetV2AcelReportIdQueryKey } from '@/api/v2/generated/survey/survey';
import { useQueryClient } from '@tanstack/vue-query';
import Button from 'primevue/button';

const queryClient = useQueryClient();

/**
 * Invalidation is normally used afterd a mutation changes something on the server.
 * eg. Adding a new contact should invalidate the list of contacts.
 * It works for data retrieved via GET (useQuery) endpoints.
 * .... which is currently a problem in this POC as POST is used for getting the contacts list.
 *
 * Here though, all ACEL report lists will refetch following this invalidation.
 */
const handleInvalidate = () => {
  // Orval suplies query key functions:
  // queryClient.invalidateQueries({ queryKey: getGetV2AcelReportIdQueryKey('abcd') });

  // We want to invalidate report lists for ALL communities though, for this example, hence we leave the last key off:
  queryClient.invalidateQueries({ queryKey: ['v2', 'acel'] });
  // Look in Vue dev tools to see currently active query keys.
};
</script>
<template>
  <Button label="Invalidate cache" @click="handleInvalidate()" />
  {{ getGetV2AcelReportIdQueryKey(false) }}
</template>
