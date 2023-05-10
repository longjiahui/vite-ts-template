import './style.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import plugins from '@/scripts/plugins'
app.use(plugins)

app.mount('#app')
