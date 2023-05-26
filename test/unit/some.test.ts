import plugins from '@/scripts/plugins'
import HomePage from '@/views/HomePage.vue'
import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'

describe('ManagementUser', () => {
    it('hello', () => {
        mount(HomePage, {
            global: {
                plugins: [plugins],
            },
        })
    })
})
