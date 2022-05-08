import { acceptHMRUpdate, defineStore } from 'pinia'
import client from '@/api/client'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
  jobTitle: string
}

export interface AuthState {
  user?: User
}

const defaultAuthState: AuthState = {
  user: undefined,
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => defaultAuthState,
  actions: {
    async login(email: string, password: string) {
      const res = await client.login({ email, password })
      this.user = res.response
      this.user.avatarUrl = 'https://i.pravatar.cc/300'
    },
    async logout() {
      // TODO - log out server side
      this.user = undefined
    },
  },
  getters: {
    fullName(state) {
      return state.user ? `${state.user.firstName} ${state.user.lastName}` : ''
    },
    isLoggedIn(state) {
      return !!state.user
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
