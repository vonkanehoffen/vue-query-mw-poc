<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { computed, reactive } from 'vue';
import { useGetDashboardAcelReports } from '@/api/private/generated/mobilityways-dashboard/mobilityways-dashboard.ts';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();

const { communityId } = storeToRefs(userStore);

const params = reactive({
  cid: communityId
});

/**
 * This is all we need to get the reports list from the server.
 * It'll deal with retriies, caching etc. and update when the communityId changes.
 */
const { data, isLoading } = useGetDashboardAcelReports(params);

const names = computed(() => data.value?.reports?.map((r) => r.name));
</script>
<template>
  <div class="m-8">
    <h1 class="text-xl font-bold">ACEL reports</h1>
    <pre>params = {{ params }}</pre>
    <pre>userStore.communityId = {{ userStore.communityId }}</pre>
    <pre>loading {{ isLoading }}</pre>
    <pre>{{ names }}</pre>
  </div>
</template>
