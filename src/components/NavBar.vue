<template>
  <nav class="h-screen w-full max-w-xs p-6">
    <h4 class="text-3xl mt-4 font-semibold">👋 Hi Tom!</h4>

    <ul class="space-y-2 mt-8">
      <NavLink :active="true"><HomeIcon class="mr-4" /> Home</NavLink>
      <NavLink><ProfileIcon class="mr-4" /> Your details</NavLink>
      <NavLink><PlaneIcon class="mr-4" /> Holidays</NavLink>
      <NavLink><HospitalIcon class="mr-4" /> Sickness</NavLink>
      <NavLink><CashIcon class="mr-4" /> Payslips</NavLink>
    </ul>
  </nav>
</template>

<script>
import HomeIcon from './icons/HomeIcon.vue';
import HospitalIcon from './icons/HospitalIcon.vue';
import PlaneIcon from './icons/PlaneIcon.vue';
import NavLink from './NavLink.vue';
import CashIcon from './icons/CashIcon.vue';
import ProfileIcon from './icons/ProfileIcon.vue';
export default {
  components: { NavLink, HomeIcon, PlaneIcon, HospitalIcon, CashIcon, ProfileIcon },
};
</script>
, Plan, HospitalIconeIcon
<style></style>
