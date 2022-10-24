import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import App from "./App.vue";
import "./assets/main.scss";
import { loadFonts } from "./plugins/webfontloader";
import { darkTheme, lightTheme } from "./themes";

loadFonts();

const app = createApp(App);
app.use(createPinia());

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "darkTheme",
    themes: { lightTheme, darkTheme },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(vuetify);

app.mount("#app");
