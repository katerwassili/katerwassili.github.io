import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kunst from '../views/Kunst.vue'
import Literatur from '../views/Literatur.vue'
import Kontakt from '../views/Kontakt.vue'
import Bild from '../views/Bild.vue'

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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router
