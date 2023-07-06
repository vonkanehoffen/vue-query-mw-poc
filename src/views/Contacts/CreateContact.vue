<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';
import { usePostV2Contact } from '@/api/v2/generated/contact/contact';
import { useForm } from 'vee-validate';
import InputText from 'primevue/inputtext';
import * as yup from 'yup';

const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const { mutate, isLoading } = usePostV2Contact();
const { handleSubmit, values, errors, defineComponentBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required()
  })
});

const firstName = defineComponentBinds('firstName');
const lastName = defineComponentBinds('lastName');
const email = defineComponentBinds('lastName');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<template>
  <Button label="Add Contact" @click="toggle" />
  <Sidebar v-model:visible="visible" position="right" id="create-contact">
    <template #header>
      <h2 class="text-lg font-bold mr-2">Create new contact</h2>
    </template>
    <form class="my-2" @submit="onSubmit">
      <InputText label="First Name" v-bind="firstName" />
      <InputText label="Last Name" v-bind="lastName" />
      <InputText label="Email" v-bind="email" />
      <Button type="submit" label="Submit" :loading="isLoading" />
    </form>
    <pre> {{ JSON.stringify(values, null, 2) }}</pre>
    <h2>errors:</h2>
    <pre> {{ JSON.stringify(errors, null, 2) }}</pre>
  </Sidebar>
</template>

<style lang="scss">
// Prob not a goos idea to do this per component stuff much... but we can.
.p-sidebar-header {
  justify-content: space-between;
}
</style>
