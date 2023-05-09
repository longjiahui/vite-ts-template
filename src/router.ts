import { createRouter, createWebHashHistory } from 'vue-router'
import * as $const from '@/const'
import { useTokenStore } from '@/stores'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: $const.Routes.default,
            component: () => import('@/views/HomePage.vue'),
        },
        {
            path: '/:catchAll(.*)',
            name: $const.Routes.pageNotFound,
            component: () => import('@/views/PageNotFound.vue'),
        },
    ],
})

router.beforeEach(async (to) => {
    if (
        ![
            $const.Routes.login as string,
            $const.Routes.pageNotFound as string,
        ].includes(to.name?.toString() || '')
    ) {
        // 检查是否登录
        const tokenStore = useTokenStore()
        if (!tokenStore.isLogin) {
            router.replace({
                name: $const.Routes.login,
                query: {
                    from: to.path,
                },
            })
            return false
        }
    }
})

export default router
