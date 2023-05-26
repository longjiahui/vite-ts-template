import baseConfig from './vite.base.config'
import vue from '@vitejs/plugin-vue'
import { defineConfig, mergeConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [vue(), viteCompression()],
        base: './',
    }),
)
