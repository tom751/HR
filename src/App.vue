<template>
  <div class="bg-indigo-50 flex">
    <NavBar />
    <div class="bg-white w-full rounded-tl-xl p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/nav/NavBar.vue';
</script>
