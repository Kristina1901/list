<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SwitchLanguages from "./components/SwitchLanguages.vue";
import Header from "./components/Header.vue";

const { locale } = useI18n({
  useScope: "global",
});
const switchLang = () => {
  locale.value === "en" ? (locale.value = "uk") : (locale.value = "en");
  localStorage.setItem("lang", locale.value);
};
</script>

<template>
  <div class="container">
    <div class="switcher__container">
      <SwitchLanguages :lang="locale" @toggleLang="switchLang" />
    </div>
    <router-link to="/" class="link__wrapper">
      <img src="./assets/img/list.jpg" alt="list" class="list" />
    </router-link>
    <Header />
  </div>
</template>

<style scoped>
.switcher__container {
  display: flex;
  justify-content: end;
  padding-top: 20px;
}
.container {
  padding: 45px 16px;
}
.list {
  height: 270px;
}
.link__wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
@media (min-width: 577px) {
  .container {
    padding: 129px 40px;
  }
}
@media (min-width: 1367px) {
  .container {
    padding: 0;
    width: 1458px;
    margin: 0 auto;
    padding-top: 129px;
    padding-bottom: 129px;
  }
  .logo {
    height: 80px;
  }
}
</style>
