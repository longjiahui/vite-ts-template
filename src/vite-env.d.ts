/// <reference types="vite/client" />
import * as $const from '@/const'
import * as models from '@/models'
import router from '@/router'
import * as utils from '@/scripts/utils'

declare module 'vue' {
    interface ComponentCustomProperties {
        $const: typeof $const
        $router: typeof router
        $utils: typeof utils
        $model: typeof models
    }
}
