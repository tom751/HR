<template>
  <p>Home</p>
  <button @click="call">press</button>
</template>

<script setup lang="ts">
import client from '@/api/client'

async function call() {
  const a = await client.login({ email: 'a@a.com', password: 'password' })
  console.log(a.response)
}
</script>
