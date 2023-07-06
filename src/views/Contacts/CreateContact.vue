<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';
import { usePostV2Contact } from '@/api/v2/generated/contact/contact';
import { useForm } from 'vee-validate';
import InputText from 'primevue/inputtext';
import * as yup from 'yup';
import { useUserStore } from '@/stores/userStore';
import Message from 'primevue/message';

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const userStore = useUserStore();

/**
 * VeeValidate and Yup handle form validation
 * They also play quite nicely with PrimeVue.
 * See examples from maintainers:
 * @see https://stackblitz.com/edit/vee-validate-v4-prime-vue-1kwgkn?file=src%2FApp.vue
 * @see https://primevue.org/inputtext/#veevalidate
 */
const { handleSubmit, errors, defineComponentBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required()
  })
});

const firstName = defineComponentBinds('firstName');
const lastName = defineComponentBinds('lastName');
const email = defineComponentBinds('email');

/**
 * Vue Query means this one line is all we need for data binding.
 * Everything else is auto-generated :-)
 */
const { mutate, isLoading, isSuccess } = usePostV2Contact();

const onSubmit = handleSubmit((values) => {
  mutate({
    data: {
      communityId: userStore.communityId,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    }
  });
  // TODO: Cache invalidate when we have GET endpoint
});
</script>
<template>
  <Button label="Add Contact" @click="toggle" />
  <Sidebar v-model:visible="visible" position="right" id="create-contact" class="md:!w-[30rem]">
    <template #header>
      <h2 class="text-lg font-bold mr-2">Create new contact</h2>
    </template>
    <form class="my-2 grid grid-cols-2 gap-4" @submit="onSubmit">
      <!-- TODO: can these fields be reusable components? -->
      <div class="mt-4">
        <span class="p-float-label">
          <InputText
            v-bind="firstName"
            aria-describedby="firstName-help"
            :class="{ 'p-invalid': errors.firstName, 'w-full': true }"
          />
          <label for="firstName">First Name</label>
        </span>
        <small id="firstName-help" class="p-error">{{ errors.firstName }}</small>
      </div>
      <div class="mt-4">
        <span class="p-float-label">
          <InputText
            v-bind="lastName"
            aria-describedby="lastName-help"
            type="lastName"
            :class="{ 'p-invalid': errors.lastName, 'w-full': true }"
          />
          <label for="lastName">Last Name</label>
        </span>
        <small id="lastName-help" class="p-error">{{ errors.lastName }}</small>
      </div>
      <div class="col-span-2 mt-4">
        <span class="p-float-label">
          <InputText
            v-bind="email"
            aria-describedby="email-help"
            type="email"
            :class="{ 'p-invalid': errors.email, 'w-full': true }"
          />
          <label for="email">Email</label>
        </span>
        <small id="email-help" class="p-error">{{ errors.email }}</small>
      </div>

      <div class="col-span-2">
        <Button type="submit" label="Submit" :loading="isLoading" />
      </div>

      <Message v-if="isSuccess">Done!</Message>
    </form>
  </Sidebar>
</template>

<style lang="scss">
// Prob not a goos idea to do this per component stuff much... but we can.
.p-sidebar-header {
  justify-content: space-between;
}
</style>
