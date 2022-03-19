import { createApp } from 'vue'
import App from './App.vue'
import '../styles/styles/styles.css'
import "normalize.css"
import Store from './store/index.js'

createApp(App)
.use(Store)
.mount('#app')
