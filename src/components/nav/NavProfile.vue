<template>
  <div class="flex items-center">
    <img :src="card.avatar" alt="profile pictue" class="max-h-12 rounded-full" />
    <div class="ml-2 overflow-hidden text-sm mr-2">
      <p class="font-bold">{{ card.name }}</p>
      <p class="truncate">{{ job }}</p>
    </div>
    <button class="ml-auto">
      <LogoutIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import faker from 'faker';
import LogoutIcon from '../icons/LogoutIcon.vue';

const card = faker.helpers.contextualCard();
const job = faker.name.jobTitle();
</script>
