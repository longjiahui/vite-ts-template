import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import baseConfig from './vite.base.config'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [vue(), viteCompression()],
        base: './',
    }),
)
