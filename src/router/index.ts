import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
  ],
});
