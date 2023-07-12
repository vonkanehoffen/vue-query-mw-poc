import { defineStore } from 'pinia';

/**
 * User state
 *
 * Vue Query just deals with server state management, so global state
 * in the app, such as the current selected community, should remain managed by Pinia.
 */
export const useUserStore = defineStore('user', {
  state: () => ({
    communityId: 'wj'
  })
});
