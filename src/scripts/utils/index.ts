export * from './storage'
export * from './traverse'

import * as storage from './storage'
import * as $const from '@/const'
import { ref, watch, WatchSource, WatchOptions, Ref } from 'vue'

export function getLocalToken(): string {
    return storage.getLocal($const.StorageKey.token, '')
}

/**
 * @method                  创建异步的computed
 * @param watcher           监听函数，与watch的第一个参数对应
 * @param asyncFunction     异步computed函数
 * @param initValue         初始值
 * @param options           watch的options
 * @returns { Ref<T> }      返回Ref<T>
 */
export function computedAsync<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Return = any, // return type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T = any, // watch type
    Immediate extends Readonly<boolean> = true,
>(
    watcher: WatchSource<T>,
    asyncFunction: (val: T, old?: T) => Promise<Return>,
    initValue?: Return,
    options?: WatchOptions<Immediate>,
): Ref<Return | undefined> {
    const ret = ref<Return | undefined>(initValue) as Ref<Return | undefined>
    watch<T, boolean>(
        watcher,
        async (val, old) => {
            if (val !== old) {
                ret.value = await asyncFunction(val, old)
            }
        },
        {
            immediate: true,
            deep: true,
            ...options,
        },
    )
    return ret
}

export function selectFile(accept?: string): Promise<Blob | undefined> {
    const input = document.createElement('input')
    input.type = 'file'
    if (accept) {
        input.accept = accept
    }
    return new Promise((r, reject) => {
        input.onchange = (e) => {
            const target = e.target as HTMLInputElement
            r(target.files?.[0])
        }
        input.onerror = reject
        input.click()
    })
}
