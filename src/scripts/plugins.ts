import { createPinia } from 'pinia'

import * as $const from '@/const'
import router from '@/router'
import * as utils from '@/scripts/utils'
import * as models from '@/models'

import { App } from 'vue'

export default {
    install(app: App) {
        app.use(router)

        app.use(createPinia())

        app.config.globalProperties.$utils = utils
        app.config.globalProperties.$const = $const
        app.config.globalProperties.$model = models
    },
}
