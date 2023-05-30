import App from './App.vue'
import { isDev } from './const'
import './style.scss'
import DefaultLib from '@/index'
import plugins from '@/scripts/plugins'
import { createApp } from 'vue'

const app = createApp(App)

app.use(plugins)

const module = isDev
    ? import.meta.glob('@/index')
    : import.meta.glob('../dist/myLib.js')

;(async () => {
    const [{ default: defaultLib }] = (await Promise.all(
        Object.keys(module).map((k: keyof typeof module) => module[k]()),
    )) as [{ default: typeof DefaultLib }]
    defaultLib()
})().finally(() => {
    app.mount('#app')
})
