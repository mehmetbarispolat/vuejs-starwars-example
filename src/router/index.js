import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
