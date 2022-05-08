<template>
  <li
    class="rounded-md hover:bg-indigo-100 dark:hover:bg-gray-800 transition active:ring-0"
    :class="{ 'bg-indigo-100 dark:bg-gray-800': active }"
  >
    <router-link :to="to" class="w-full font-semibold text-left p-2 flex items-center rounded-md">
      <slot />
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})

const route = useRoute()

const active = ref(route.path === props.to)

watch(
  () => route.path,
  (newPath: string) => {
    active.value = newPath === props.to
  }
)
</script>
