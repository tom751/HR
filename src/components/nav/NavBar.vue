<template>
  <nav class="h-screen w-full max-w-xs px-6 py-8 flex flex-col">
    <h4 class="text-3xl font-semibold">👋 Hi {{ firstName }}!</h4>

    <ul class="space-y-2 mt-8">
      <NavLink to="/"><HomeIcon class="mr-4" /> Home</NavLink>
      <NavLink to="/details"><ProfileIcon class="mr-4" /> Your details</NavLink>
      <NavLink to="/holidays"><PlaneIcon class="mr-4" /> Holidays</NavLink>
      <NavLink to="/sickness"><HospitalIcon class="mr-4" /> Sickness</NavLink>
      <NavLink to="/payslips"><CashIcon class="mr-4" /> Payslips</NavLink>
    </ul>
    <NavProfile class="mt-auto" />
  </nav>
</template>

<script setup lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
import HospitalIcon from '../icons/HospitalIcon.vue';
import PlaneIcon from '../icons/PlaneIcon.vue';
import NavLink from '../nav/NavLink.vue';
import NavProfile from '../nav/NavProfile.vue';
import CashIcon from '../icons/CashIcon.vue';
import ProfileIcon from '../icons/ProfileIcon.vue';
import { useStore } from '../../store';
import { computed } from 'vue';

const store = useStore();
const firstName = computed(() => store.state.user.firstName);
</script>
