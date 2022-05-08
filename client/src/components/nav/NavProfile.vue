<template>
  <div class="flex items-center">
    <Avatar />
    <div class="ml-2 overflow-hidden text-sm mr-2">
      <p class="font-bold">{{ store.fullName }}</p>
      <p class="truncate">{{ user?.jobTitle }}</p>
    </div>
    <Button class="ml-auto dark:bg-transparent dark:hover:bg-gray-800" @click="logout">
      <LogoutIcon class="h-7 w-7" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { RouteNames } from '@/router/enums'
import { useAuthStore } from '@/store'
import { LogoutIcon } from '@heroicons/vue/outline'
import Avatar from '@/components/Avatar.vue'

const store = useAuthStore()
const user = store.user

async function logout() {
  await store.logout()
  router.push({ name: RouteNames.Login })
}
</script>
