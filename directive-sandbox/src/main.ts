import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { focus, lifecycle } from "./directives";

Vue.directive("focus", focus);
Vue.directive("lifecycle", lifecycle);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
