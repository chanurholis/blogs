import { defineStore } from "pinia";

export const useLandingPageMenusStore = defineStore({
  id: "landingPageMenusStore",
  state: () => ({
    landingPageMenusStore: [{}],
    getters: {
      getLandingPageMenus: (state: any) =>
        (state.landingPageMenusStore = [
          {
            key: 1,
            name: "Login",
            link: "/login",
          },
          {
            key: 2,
            name: "Register",
            link: "/register",
          },
        ]),
    },
    actions: {
      // code ...
    },
  }),
});
