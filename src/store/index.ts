import { createStore } from "vuex";
import { packageStore } from "./modules/package";

export const store = createStore({
  modules: {
    package: packageStore,
  },
});
