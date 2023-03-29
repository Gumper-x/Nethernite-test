import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { en } from "vuetify/locale";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  locale: {
    locale: "en",
    fallback: "en",
    messages: { en },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
  },
});

export { components, directives };
