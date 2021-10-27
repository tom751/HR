<template>
  <div class="bg-indigo-50 md:flex min-h-screen">
    <NavBar />
    <div class="bg-white shadow-2xl w-full rounded-tl-xl p-8 py-20">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/nav/NavBar.vue'
</script>
