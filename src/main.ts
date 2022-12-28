import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import './style.css'
import App from './App.vue' 
import bulma from 'bulma'
import router from './router'
import store from './store'
const app = createApp(App);
app.use(router).use(store).use(bulma).mount('#app')
  