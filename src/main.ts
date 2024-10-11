import { createApp } from 'vue'
import './assets/css/main.scss'
import App from './App.vue'
import router from './router'
import VueCarousel from '@chenfengyuan/vue-carousel';

const app = createApp(App)

app.component(VueCarousel.name, VueCarousel);
app.use(router)
app.mount('#app')