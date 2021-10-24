<template>
  <main class="max-w-4xl m-auto">
    <PageTitle>Your details</PageTitle>
    <form>
      <div class="grid place-items-center">
        <p class="mb-4 font-semibold text-gray-700">Photo</p>
        <img :src="card.avatar" alt="profile picture" class="rounded-full ring-4 ring-indigo-200" />
      </div>
      <div class="grid grid-cols-2 gap-x-8 gap-y-6 mt-8 mb-6">
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
      </div>
      <Button>Save</Button>
    </form>
    <section class="mt-12">
      <h1 class="font-bold text-4xl mb-2">Employment details</h1>
      <h2 class="font-medium text-xl">These are managed by your employer</h2>
      <div class="grid grid-cols-2 gap-x-8 gap-y-6 mt-8">
        <div>
          <p class="font-bold">Job title</p>
          <p>{{ job }}</p>
        </div>
        <div>
          <p class="font-bold">Line Manager</p>
          <p>{{ lineManager }}</p>
        </div>
        <div>
          <p class="font-bold">Employment start date</p>
          <p>01/10/2021</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import faker from 'faker';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const addressLineOne = ref('');
const addressLineTwo = ref('');
const town = ref('');
const postcode = ref('');

const card = faker.helpers.contextualCard();
const job = faker.name.jobTitle();
const lineManager = faker.name.findName();
</script>

<style></style>
