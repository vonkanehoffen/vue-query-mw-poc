<script setup lang="ts">
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

import { ref } from 'vue'
import { useQueryClient } from '@tanstack/vue-query'
import { usePostClientToken } from '@/api/client/generated/authentication-tokens/authentication-tokens'

const email = ref(null)
const password = ref(null)

const queryClient = useQueryClient()

const mutation = usePostClientToken({
  mutation: {
    onSuccess: (data) => {
      console.log('success', data)
      queryClient.invalidateQueries()
    }
  }
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  console.log('sub')
  mutation.mutate({
    data: {
      email: email.value,
      password: password.value
    }
  })
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="sm:w-96 w-full">
      <Card>
        <template #content>
          <form @submit="onSubmit" class="flex flex-col gap-4">
            <p>Mobilityways</p>
            <label for="email">Email</label>
            <InputText id="email" type="text" v-model="email" />
            <label for="password">Password</label>
            <Password id="password" v-model="password" :feedback="false" />
            <Button type="submit" label="Submit" />
          </form>
        </template>
      </Card>
    </div>
  </div>
</template>
