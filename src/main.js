import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router)
app.use(VueScrollTo)

app.mount('#app')
