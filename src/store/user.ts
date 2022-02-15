import { defineStore } from 'pinia';

interface IUserInfo {
  name: string;
}

export const useUser = defineStore('user', {
  state(): IUserInfo {
    return {
      name: ''
    };
  },
  actions: {
    updateUserName(name: string) {
      this.name = name;
    }
  }
});