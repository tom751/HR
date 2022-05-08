<template>
  <div v-if="authStore.isLoggedIn" class="bg-indigo-50 dark:bg-gray-900 md:flex min-h-screen">
    <NavBar />
    <div class="bg-white dark:bg-gray-800 shadow-2xl w-full rounded-tl-xl p-8 py-20">
      <router-view></router-view>
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<script setup lang="ts">
import NavBar from '@/components/nav/NavBar.vue'
import { useAuthStore } from './store'

const authStore = useAuthStore()
</script>
