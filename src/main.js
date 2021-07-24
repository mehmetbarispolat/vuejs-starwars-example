import Vue from "vue";
import App from "./App.vue";
import store from './store/index'

import axios from "axios";

import { router } from "./router/index";

import FullpageModal from 'vue-fullpage-modal'

Vue.use(FullpageModal)

Vue.prototype.$http = axios;  

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount("#app");


