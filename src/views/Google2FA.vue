<script setup lang="ts">
import { usePostClientTokenValidateTwoFactor } from '@/api/client/generated/authentication-tokens/authentication-tokens';
import { router } from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { useQueryClient } from '@tanstack/vue-query';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
540;

const props = defineProps({
  token: { type: String, required: true }
});

const otp = ref('');

const queryClient = useQueryClient();
const authStore = useAuthStore();
const toast = useToast();

const { mutate, isLoading } = usePostClientTokenValidateTwoFactor({
  mutation: {
    onSuccess: (data) => {
      authStore.saveTokens(data.token as string, data.refreshToken as string);
      authStore.setRefreshTimeout();
      queryClient.invalidateQueries();
      router.push('/');
    }
  }
});

const onSubmit = (e: Event) => {
  e.preventDefault();
  mutate({
    data: {
      token: props.token,
      twoFactorCode: otp.value
    }
  });
};
</script>
<template>
  <form @submit="onSubmit" class="flex flex-col justify-items-stretch gap-4">
    <label for="email">2FA</label>
    token: {{ $props.token }}
    <InputText id="email" type="text" v-model="otp" />
    <Button type="submit" label="Submit" :loading="isLoading" />
  </form>
</template>
