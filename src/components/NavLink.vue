<template>
  <li class="rounded hover:bg-indigo-100 transition duration-75 ease-in" :class="{ 'bg-indigo-100': active }">
    <router-link :to="to" class="w-full font-semibold text-left p-2 flex items-center">
      <slot />
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});

const route = useRoute();

const active = ref(route.path === props.to);

watch(
  () => route.path,
  (newPath: string) => {
    active.value = newPath === props.to;
  }
);
</script>

<style></style>
