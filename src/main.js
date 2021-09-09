import Vue from 'vue'
import App from './App.vue'
import axios from './vue-axios/axios'
import router from './router'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios,
  VueSimpleAlert,
}).$mount('#app')
