import { mount } from '@vue/test-utils'
import { describe, it } from 'vitest'

import HomePage from '@/views/HomePage.vue'
import plugins from '@/scripts/plugins'

describe('ManagementUser', () => {
    it('hello', () => {
        mount(HomePage, {
            global: {
                plugins: [plugins],
            },
        })
    })
})
