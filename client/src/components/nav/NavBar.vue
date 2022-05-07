<template>
  <div class="bg-indigo-400 dark:bg-gray-800 flex justify-end text-gray-200 md:hidden">
    <button class="focus:bg-indigo-800 dark:focus:bg-indigo-600 focus:ring-0 p-4" @click="hideSidebar = !hideSidebar">
      <MenuIcon class="h-7 w-7" />
    </button>
  </div>
  <nav
    class="h-screen w-full max-w-xs px-6 py-8 flex flex-col absolute inset-y-0 left-0 trasnform transition duration-200 ease-in-out bg-indigo-50 dark:bg-gray-900 dark:text-gray-200 md:relative md:translate-x-0"
    :class="{ '-translate-x-full': hideSidebar }"
  >
    <h4 class="text-3xl font-semibold">👋 Hi {{ store.user?.firstName }}!</h4>

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
import { HomeIcon, UserCircleIcon, CalendarIcon, CashIcon, EmojiSadIcon, MenuIcon } from '@heroicons/vue/outline'
import NavLink from '@/components/nav/NavLink.vue'
import NavProfile from '@/components/nav/NavProfile.vue'
import { useAuthStore } from '@/store'
import { ref } from 'vue'

const store = useAuthStore()

const hideSidebar = ref(true)
</script>
