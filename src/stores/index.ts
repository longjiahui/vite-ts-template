import { StorageKey } from '@/const'
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
    state() {
        return {
            token: useLocalStorage(StorageKey.token, ''),
        }
    },
    getters: {
        isLogin(): boolean {
            return true || !!this.token
        },
    },
    actions: {
        setToken(token: string) {
            this.token = token
        },
        removeToken() {
            this.token = ''
        },
    },
})
