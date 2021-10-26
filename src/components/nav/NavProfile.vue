<template>
  <div class="flex items-center">
    <img :src="avatarUrl" alt="profile pictue" class="max-h-12 rounded-full" />
    <div class="ml-2 overflow-hidden text-sm mr-2">
      <p class="font-bold">{{ fullName }}</p>
      <p class="truncate">{{ job }}</p>
    </div>
    <button class="ml-auto">
      <LogoutIcon class="h-7 w-7" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../store';
import { LogoutIcon } from '@heroicons/vue/outline';

const store = useStore();
const job = computed(() => store.state.user.jobTitle);
const avatarUrl = computed(() => store.state.user.avatarUrl);
const fullName = computed(() => store.getters.fullName);
</script>
