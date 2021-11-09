<template>
  <button type="submit" class="bg-indigo-300 dark:bg-indigo-800 py-2 px-4 rounded-md" @click.prevent="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}
</script>
