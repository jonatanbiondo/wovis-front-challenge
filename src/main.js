import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import { ValidationProvider,ValidationObserver } from 'vee-validate';

Vue.use(VueI18n)
 
import '../scss/custom.scss';

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
// Override the default message.
extend('required', {
  ...required,
  message: 'Este campo es requerido'
});

// Override the default message.
extend('email', {
  ...email,
  message: 'El email ingresado no es correcto.'
});
// Override the default message.
extend('min', {
  ...min,
  message: 'El campo requiere {length} caracteres como mínimo'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
