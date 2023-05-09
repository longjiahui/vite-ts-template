import { defineStore } from 'pinia'

import { StorageKey } from '@/const'
import { setLocal, removeLocal, getLocalToken } from '@/scripts/utils'

export const useTokenStore = defineStore('token', {
    state() {
        return {
            token: getLocalToken(),
        }
    },
    getters: {
        isLogin(): boolean {
            return true || !!this.token
        },
    },
    actions: {
        setToken(token: string) {
            setLocal(StorageKey.token, token)
            this.token = token
        },
        removeToken() {
            removeLocal(StorageKey.token)
            this.token = ''
        },
    },
})
