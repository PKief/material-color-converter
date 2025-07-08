/** biome-ignore-all lint/style/useNamingConvention: Imported components have PascalCase */
import '@mdi/font/css/materialdesignicons.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import {
  VApp,
  VBtn,
  VCard,
  VCol,
  VContainer,
  VForm,
  VIcon,
  VRow,
  VTextField,
  VTooltip,
} from 'vuetify/components';
// Import only the directives we use
import { Ripple } from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';
import App from './App.vue';
import './assets/main.scss';
import { loadFonts } from './plugins/webfontloader';
import { darkTheme, lightTheme } from './themes';

loadFonts();

const app = createApp(App);
app.use(createPinia());

const vuetify = createVuetify({
  components: {
    VApp,
    VBtn,
    VCard,
    VCol,
    VContainer,
    VForm,
    VIcon,
    VRow,
    VTextField,
    VTooltip,
  },
  directives: {
    Ripple,
  },
  theme: {
    defaultTheme: 'darkTheme',
    themes: { lightTheme, darkTheme },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(vuetify);

app.mount('#app');
