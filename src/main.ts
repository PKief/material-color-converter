import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.scss";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);

app.mount("#app");
