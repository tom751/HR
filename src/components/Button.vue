<template>
  <button class="bg-indigo-300 py-2 px-4 rounded" @click.prevent="onClick"><slot /></button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}
</script>
