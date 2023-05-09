import { defineConfig, mergeConfig } from 'vite'
import baseConfig from './vite.dev.base.config'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        server: {
            proxy: {
                '/api': 'http://183.6.92.101:8000/iam',
            },
        },
    }),
)
