import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mixpanelService from './mixpanelService'

const app = createApp(App)

// Use the Mixpanel service globally
app.config.globalProperties.$mixpanel = mixpanelService

app.use(createPinia())
app.use(router)

app.mount('#app')
