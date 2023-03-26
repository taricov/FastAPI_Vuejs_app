import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./assets/tailwind.css";

import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
