import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "aos/dist/aos.css"
import AOS from "aos"
import "animate.css"

const app = createApp(App)
app.AOS = new AOS.init();
app.use(router).mount('#app')