import Vue from 'vue'
import router from "./router";
import App from './components/pages/App.vue'
import store from "./store/store.js";

Vue.config.productionTip = false

/* eslint-disable */
const cors = require('cors')
/* eslint-enable */






new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
