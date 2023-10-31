import { createApp } from 'vue'
import App from './App.vue'

import Vue3Spline from 'vue3-spline'

let app = createApp(App)

app.use(Vue3Spline, { name: 'Vue3Spline' })
app.mount('#app')
