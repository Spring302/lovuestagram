import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)

app.config.globalProperties.emitter = emitter;

import store from './store.js'
import './registerServiceWorker'

app.use(store).mount('#app')
