<template>
  <div class="min-h-screen bg-gray-100 pt-72 bg-bottom bg-repeat-x bg-cover">
    <div class="text-center mb-10 max-w-lg m-auto">
      <h1 class="text-gray-700 text-4xl font-semibold"><span class="text-indigo-600">Sign in</span> to your account</h1>
    </div>
    <div class="shadow-lg bg-white rounded-lg max-w-lg p-12 m-auto">
      <form @submit="login">
        <Input label="Email address" type="email" id="email" />
        <Input label="Password" type="password" id="password" />
        <div class="flex items-center mt-4">
          <input type="checkbox" id="remember" />
          <label for="remember" class="text-gray-800 flex-1 mb-0 ml-2">Remember me</label>
        </div>
        <Alert v-if="state.error">
          <p>{{ state.error }}</p>
        </Alert>
        <Button class="w-full mt-4" type="submit" :loading="isSubmitting" @click="login">Sign in</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store'
import { reactive } from 'vue'
import Alert from '@/components/Alert.vue'
import router from '@/router'
import { RouteNames } from '@/router/enums'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

const authStore = useAuthStore()

const state = reactive({
  error: '',
})

const schema = object({
  email: string().required().email().label('Email address').trim(),
  password: string().required().label('Password'),
})

const { handleSubmit, isSubmitting } = useForm({ validationSchema: schema })

const login = handleSubmit(async (values) => {
  try {
    await authStore.login(values.email!.trim(), values.password!)
    router.push({ name: RouteNames.Home })
  } catch (error) {
    state.error = (error as Error).message
  }
})
</script>
