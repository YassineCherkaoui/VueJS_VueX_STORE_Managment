import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import store from './store'



const app = createApp(App)

app.use(store)

app.config.globalProperties.me = {id:"3", name:"yassine3"};

app.mount('#app')



// App.use(store)

// createApp(App).mount('#app')
