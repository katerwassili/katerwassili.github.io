import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
import Scrollspy from 'vue2-scrollspy';
import Home from '../views/Home.vue'
import Kunst from '../views/Kunst.vue'
import Literatur from '../views/Literatur.vue'
import Kontakt from '../views/Kontakt.vue'
import Bild from '../views/Bild.vue'

Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(Scrollspy)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Kunst',
    name: 'Kunst',
    component: Kunst
  },
  {
    path: '/Bild',
    name: 'Bild',
    component: Bild,
    props: true
  },
  {
    path: '/Literatur',
    name: 'Literatur',
    component: Literatur
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    component: Kontakt
  }
]

const router = new VueRouter({
  routes
})

export default router
