import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VCharts);
Vue.use(VueAxios, axios);

Vue.prototype.$qs = qs;

// axios.defaults.baseURL = store.getters.host.root; // domain name
axios.defaults.baseURL = store.getters.host.testRoot; // test domain name

new Vue({
  router,
  store,
  qs,
  render: h => h(App)
}).$mount('#app')
