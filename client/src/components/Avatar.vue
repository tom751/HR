<template>
  <img v-if="user?.avatarUrl" :src="user.avatarUrl" alt="profile pictue" class="max-h-12 rounded-full" />
  <span v-else class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-600 font-bold">
    {{ initials }}
  </span>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store'

const authStore = useAuthStore()
const user = authStore.user
const initials = `${user?.firstName[0]}${user?.lastName[0]}`.toUpperCase()
</script>
