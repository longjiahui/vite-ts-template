/// <reference types="vite/client" />
import router from '@/router'
import * as $const from '@/const'
import * as utils from '@/scripts/utils'
import * as models from '@/models'

declare module 'vue' {
    interface ComponentCustomProperties {
        $const: typeof $const
        $router: typeof router
        $utils: typeof utils
        $model: typeof models
    }
}
