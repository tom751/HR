import faker from 'faker'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

const card = faker.helpers.contextualCard()
const job = faker.name.jobTitle()
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const addressLineOne = faker.address.streetAddress()
const town = faker.address.cityName()
const postcode = faker.address.zipCode()
const lineManager = faker.name.findName()
const employmentStartDate = faker.date.past(3)

export interface State {
  user: {
    firstName: string
    lastName: string
    email: string
    dob: Date
    avatarUrl: string
    jobTitle: string
    phoneNumber: string
    addressLineOne: string
    addressLineTwo: string
    town: string
    postcode: string
    lineManager: string
    employmentStartDate: Date
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    user: {
      firstName,
      lastName,
      email: card.email,
      avatarUrl: card.avatar,
      dob: card.dob,
      jobTitle: job,
      phoneNumber: card.phone,
      addressLineOne,
      addressLineTwo: '',
      town,
      postcode,
      lineManager,
      employmentStartDate,
    },
  },
  getters: {
    fullName(state): string {
      return `${state.user.firstName} ${state.user.lastName}`
    },
  },
})

export function useStore() {
  return baseUseStore(key)
}
