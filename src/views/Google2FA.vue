<script setup lang="ts">
import { usePostClientTokenValidateTwoFactor } from '@/api/client/generated/authentication-tokens/authentication-tokens';
import { router } from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { useQueryClient } from '@tanstack/vue-query';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
540;

const props = defineProps({
  token: { type: String, required: true }
});

const otp = ref('');
const input = ref();

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
onMounted(() => {
  input.value.$el.focus();
});
</script>
<template>
  <form @submit="onSubmit" class="flex flex-col justify-items-stretch gap-4">
    <label for="otp">2FA</label>
    <InputText id="otp" type="text" v-model="otp" ref="input" />
    <Button type="submit" label="Submit" :loading="isLoading" />
  </form>
</template>
