import { createApp } from 'vue'
import App from './App.vue'
import routerd from './router/routes'



createApp(App).use(routerd).mount('#app')
