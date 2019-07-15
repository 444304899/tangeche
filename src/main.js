import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HeaderInner from './components/Header-inner.vue'
import appDownload from './components/appDownload.vue'

axios.defaults.baseURL = 'http://192.168.7.100:8888';
Vue.prototype.axios=axios;

Vue.use(ElementUI);

Vue.component("header-inner",HeaderInner);
Vue.component("app-download",appDownload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
