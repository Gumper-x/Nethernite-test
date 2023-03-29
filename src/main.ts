import { createApp } from "vue";
import App from "./App.vue";
import { DI_KEY } from "./constants";
import { getDIContainer, initDIContainer } from "./di";
import vuetify from "./plugins/vuetify";
import { store } from "./store";

initDIContainer();
const app = createApp(App);
app.provide(DI_KEY, getDIContainer());
app.use(store);
app.use(vuetify);
app.mount("#app");
