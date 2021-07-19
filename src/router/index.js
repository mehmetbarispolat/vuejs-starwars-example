import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import StarShipDetail from "../views/StarShipDetail";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/detail/:id",
      name: "StarShipDetail",
      component: StarShipDetail
    }
  ]
});
