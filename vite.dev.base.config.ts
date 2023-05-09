import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import baseConfig from './vite.base.config'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [vue(), eslint()],
    }),
)
