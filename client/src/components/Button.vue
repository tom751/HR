<template>
  <button
    class="bg-indigo-300 dark:bg-indigo-800 hover:bg-indigo-600 transition-colors py-2 px-4 rounded-md disabled:dark:bg-indigo-400 disabled:cursor-not-allowed relative"
    :disabled="loading"
  >
    <slot />
    <Spinner v-if="loading" class="absolute h-5 w-5 top-2.5 right-4" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>
