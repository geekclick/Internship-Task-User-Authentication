import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: ""
  }),

  actions: {
    setIsLoggedIn(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },

    setUser(user) {
      this.user = user;
    },
  },
});
