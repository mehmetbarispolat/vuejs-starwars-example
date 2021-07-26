import Vue from "vue";
import App from "./App.vue";
import store from './store/index'

import axios from "axios";

import { router } from "./router/index";

import FullpageModal from 'vue-fullpage-modal'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(FullpageModal)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

Vue.prototype.$http = axios;  

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");


