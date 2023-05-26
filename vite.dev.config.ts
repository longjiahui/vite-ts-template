import baseConfig from './vite.dev.base.config'
import { defineConfig, mergeConfig } from 'vite'

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
