import baseConfig from './vite.base.config'
import vue from '@vitejs/plugin-vue'
import { defineConfig, mergeConfig } from 'vite'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [vue()],
    }),
)
