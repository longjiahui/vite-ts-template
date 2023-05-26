import App from './App.vue'
import './style.scss'
import plugins from '@/scripts/plugins'
import { createApp } from 'vue'

const app = createApp(App)

app.use(plugins)

app.mount('#app')
