<template>
  <main class="container m-auto p-10 rounded-md">
    <PageTitle>Your details</PageTitle>
    <form>
      <div class="grid place-items-center">
        <p class="mb-4 font-semibold">Photo</p>
        <img :src="avatarUrl" alt="profile picture" class="rounded-full ring-4 ring-indigo-200" />
      </div>

      <div class="grid grid-cols-6 mt-8 mb-6">
        <div class="col-span-2">
          <h4 class="font-bold text-3xl">Basic details</h4>
          <p class="text-gray-300">Some basic details about you.</p>
        </div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-6 col-start-3 col-span-4">
          <div>
            <label for="firstName">First name</label>
            <input type="text" id="firstName" v-model="firstName" />
          </div>
          <div>
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" v-model="lastName" />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
          </div>
          <div>
            <label for="phone">Phone number</label>
            <input type="tel" id="phone" v-model="phone" />
          </div>
          <div>
            <label for="dob">Date of birth</label>
            <input type="date" id="dob" v-model="dob" />
          </div>
          <div class="col-span-2">
            <label for="address1">Address line 1</label>
            <input type="text" id="address1" v-model="addressLineOne" />
          </div>
          <div class="col-span-2">
            <label for="address2">Address line 2</label>
            <input type="text" id="address2" v-model="addressLineTwo" />
          </div>
          <div>
            <label for="town">Town/city</label>
            <input type="text" id="town" v-model="town" />
          </div>
          <div>
            <label for="postcode">Postcode</label>
            <input type="text" id="postcode" v-model="postcode" />
          </div>
          <Button class="place-self-start">Save</Button>
        </div>
      </div>
    </form>
    <section class="mt-12">
      <hr class="" />
      <div class="grid grid-cols-6 mt-8 mb-6">
        <div class="col-span-2">
          <h4 class="font-bold text-3xl">Employment details</h4>
          <p class="text-gray-300">These are managed by your employer</p>
        </div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-6 col-start-3 col-span-4">
          <div>
            <p class="font-bold">Job title</p>
            <p>{{ user.jobTitle }}</p>
          </div>
          <div>
            <p class="font-bold">Line Manager</p>
            <p>{{ user.lineManager }}</p>
          </div>
          <div>
            <p class="font-bold">Employment start date</p>
            <p>{{ user.employmentStartDate }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()
const user = store.state.user

const avatarUrl = user.avatarUrl
const firstName = ref(user.firstName)
const lastName = ref(user.lastName)
const email = ref(user.email)
const dob = ref(user.dob)
const phone = ref(user.phoneNumber)
const addressLineOne = ref(user.addressLineOne)
const addressLineTwo = ref(user.addressLineTwo)
const town = ref(user.town)
const postcode = ref(user.postcode)
</script>

<style></style>
