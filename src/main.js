import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import { ValidationProvider,ValidationObserver } from 'vee-validate';

Vue.use(VueI18n)
 
import '../scss/custom.scss';

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
new Vue({
  render: h => h(App),
}).$mount('#app')
