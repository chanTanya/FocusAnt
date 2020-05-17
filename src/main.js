import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as api from '@/api/api';
import 'lib-flexible/flexible.js';
import IconSvg from '../src/components/icon-svg/icon-svg.vue';
import SublevelNav from '../src/components/sublevel-header/sublevel-header.vue';
import '@/utils/Vant.js';
import qs from 'qs';

Vue.component('IconSvg', IconSvg);
Vue.component('SublevelNav', SublevelNav);

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$qs = qs;
Vue.prototype.baseUrl = 'http://www.jrfzb.cn';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
