<template>
  <nav class="h-screen w-full max-w-xs px-6 py-8 flex flex-col">
    <h4 class="text-3xl font-semibold">👋 Hi {{ firstName }}!</h4>

    <ul class="space-y-2 mt-8">
      <NavLink to="/"><HomeIcon class="mr-4 h-8 w-8" /> Home</NavLink>
      <NavLink to="/details"><UserCircleIcon class="mr-4 h-8 w-8" /> Your details</NavLink>
      <NavLink to="/holidays"><CalendarIcon class="mr-4 h-8 w-8" /> Holidays</NavLink>
      <NavLink to="/sickness"><EmojiSadIcon class="mr-4 h-8 w-8" /> Sickness</NavLink>
      <NavLink to="/payslips"><CashIcon class="mr-4 h-8 w-8" /> Payslips</NavLink>
    </ul>
    <NavProfile class="mt-auto" />
  </nav>
</template>

<script setup lang="ts">
import { HomeIcon, UserCircleIcon, CalendarIcon, CashIcon, EmojiSadIcon } from '@heroicons/vue/outline';
import NavLink from '../nav/NavLink.vue';
import NavProfile from '../nav/NavProfile.vue';
import { useStore } from '../../store';
import { computed } from 'vue';

const store = useStore();
const firstName = computed(() => store.state.user.firstName);
</script>
