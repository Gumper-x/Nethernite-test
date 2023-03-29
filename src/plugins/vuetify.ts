import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { en } from "vuetify/locale";

export default createVuetify({
  locale: {
    locale: "en",
    fallback: "en",
    messages: { en },
  },
  theme: {
    defaultTheme: "light",
  },
});

export { components, directives };
