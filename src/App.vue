<template>
<!--
  <div class="bg-indigo-50 dark:bg-indigo-900 md:flex min-h-screen">
    <NavBar />
    <div class="bg-white dark:bg-gray-800 shadow-2xl w-full rounded-tl-xl p-8 py-20">
      <router-view></router-view>
    </div>
  </div>
  -->
  <Login />
</template>

<script setup lang="ts">
import NavBar from '@/components/nav/NavBar.vue'
import Login from '@/views/Login.vue'
</script>
