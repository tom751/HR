<template>
  <p>Home</p>
  <button @click="call">press</button>
</template>

<script setup lang="ts">
import client from '@/api/client'
import hr from '@/types/hr_pb'

function call() {
  const details = new hr.LoginDetails()
  details.setEmail('a@a.com')
  details.setPassword('password')
  client.login(details, null, (e, user) => {
    console.log(user)
  })
}
</script>
