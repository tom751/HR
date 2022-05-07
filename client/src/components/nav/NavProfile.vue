<template>
  <div class="flex items-center">
    <img :src="user?.avatarUrl" alt="profile pictue" class="max-h-12 rounded-full" />
    <div class="ml-2 overflow-hidden text-sm mr-2">
      <p class="font-bold">{{ store.fullName }}</p>
      <p class="truncate">{{ user?.jobTitle }}</p>
    </div>
    <button class="ml-auto">
      <LogoutIcon class="h-7 w-7" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store'
import { LogoutIcon } from '@heroicons/vue/outline'

const store = useAuthStore()
const user = store.user
</script>
