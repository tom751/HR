<template>
  <li class="rounded hover:bg-indigo-100 transition duration-75 ease-in" :class="{ 'bg-indigo-100': active }">
    <button class="w-full font-semibold text-left p-2 flex items-center"><slot /></button>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  active: Boolean,
});
</script>

<style></style>
