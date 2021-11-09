<template>
  <div class="min-h-screen bg-gray-100 pt-72 bg-bottom bg-repeat-x bg-cover">
    <div class="text-center mb-10 max-w-lg m-auto">
      <h1 class="text-gray-700 text-4xl font-semibold"><span class="text-indigo-600">Sign in</span> to your account</h1>
    </div>
    <div class="shadow-lg bg-white rounded-lg max-w-lg p-12 m-auto">
      <form @submit.prevent="login">
        <label class="text-gray-800" for="email">Email address</label>
        <input id="email" type="email" v-model="email" />
        <label class="text-gray-800 mt-4" for="password">Password</label>
        <input id="password" type="password" v-model="password" />
        <div class="flex items-center mt-4">
          <input type="checkbox" id="remember" />
          <label for="remember" class="text-gray-800 flex-1 mb-0 ml-2">Remember me</label>
        </div>
        <button class="w-full mt-12">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>
