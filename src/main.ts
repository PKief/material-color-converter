import { createPinia } from "pinia";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import "./assets/main.scss";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: "dark" },
});

app.use(createPinia());
app.use(vuetify);

app.mount("#app");
