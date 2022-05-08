<template>
  <div class="rounded bg-red-100 p-2 mt-4 text-red-600 font-medium text-center">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  variation: {
    type: String,
    default: 'error',
    validator: (value: string) => ['error'].includes(value),
  },
})
</script>
