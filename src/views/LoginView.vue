<script setup lang="ts">
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import { ref } from 'vue';
import { useQueryClient } from '@tanstack/vue-query';
import { usePostClientToken } from '@/api/client/generated/authentication-tokens/authentication-tokens';
import { router } from '@/router';
import { useAuthStore } from '@/stores/authStore';

const email = ref(null);
const password = ref(null);

const queryClient = useQueryClient();
const authStore = useAuthStore();

const { error, mutate, isLoading } = usePostClientToken({
  mutation: {
    onSuccess: (data) => {
      console.log('success', data);
      // A 200 response will always have tokens:
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
      email: email.value,
      password: password.value
    }
  });
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="sm:w-96 w-full">
      <Card>
        <template #content>
          <form @submit="onSubmit" class="flex flex-col justify-items-stretch gap-4">
            <p>Mobilityways</p>
            <label for="email">Email</label>
            <InputText id="email" type="text" v-model="email" />
            <label for="password">Password</label>
            <InputText id="password" type="password" v-model="password" />
            <Button type="submit" label="Submit" :loading="isLoading" />
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>
