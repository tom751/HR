import { defineStore } from 'pinia'

export interface AuthState {
  user?: {
    firstName: string
    lastName: string
    email: string
    avatarUrl: string
    jobTitle: string
  }
}

const defaultAuthState: AuthState = {
  user: {
    firstName: 'Bob',
    lastName: 'Smith',
    avatarUrl: '',
    email: 'a@a.com',
    jobTitle: 'Software Engineer',
  },
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => defaultAuthState,
  actions: {
    loadUser(id: number) {
      // TODO - call the server
      this.user = defaultAuthState.user
    },
  },
  getters: {
    fullName(state) {
      return state.user ? `${state.user.firstName} ${state.user.lastName}` : ''
    },
  },
})
