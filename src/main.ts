import { createApp } from "vue";
import { createI18n, useI18n } from "vue-i18n";
import "./style.css";
import App from "./App.vue";
import { defaulteLocate, languages } from "./i18n";
import router from "./router";
import { createPinia } from "pinia";
import vue3StarRatings from "vue3-star-ratings";

const localStorageLang = localStorage.getItem("lang");
const messages = Object.assign(languages);
const i18n = createI18n({
  locale: localStorageLang || defaulteLocate,
  legacy: false,
  fallbackLocale: defaulteLocate,
  messages,
});
const pinia = createPinia();

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

app.use(i18n);
app.use(router);
app.use(pinia);
app.component("vue3-star-ratings", vue3StarRatings);
app.mount("#app");
