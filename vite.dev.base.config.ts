import baseConfig from './vite.base.config'
import vue from '@vitejs/plugin-vue'
import { defineConfig, mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [vue(), eslint()],
    }),
)
