import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)
 
import '../scss/custom.scss';

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
