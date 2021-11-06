<template>
  <div class="min-h-screen bg-gray-100 pt-72 bg-waves bg-bottom bg-repeat-x bg-cover">
    <div class="text-center mb-10 max-w-lg m-auto">
      <h1 class="text-gray-700 text-4xl font-semibold"><span class="text-indigo-600">Sign in</span> to your account</h1>
    </div>
    <div class="shadow-lg bg-white rounded-lg max-w-lg p-12 m-auto">
      <form>
        <label class="text-gray-800" for="email">Email address</label>
        <input
          id="email"
          class="block w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-700"
          type="email"
        />
        <label class="text-gray-800 mt-4" for="password">Password</label>
        <input
          id="password"
          type="password"
          class="block w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-600 text-gray-700"
        />
        <div class="flex items-center mt-4">
          <input
            type="checkbox"
            id="remember"
            class="
              w-5
              h-5
              checked:bg-indigo-600 checked:border-transparent
              focus:outline-none focus:ring-indigo-600 focus:ring-2
              text-indigo-600
              border border-gray-300
              rounded-md
            "
          />
          <label for="remember" class="text-gray-800 font-normal flex-1 mb-0 ml-2">Remember me</label>
        </div>
        <Button class="w-full mt-12">Sign in</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
</script>
