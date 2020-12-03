import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueScrollTo)
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
