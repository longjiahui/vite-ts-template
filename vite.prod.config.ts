import baseConfig from './vite.base.config'
import vue from '@vitejs/plugin-vue'
import { defineConfig, mergeConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [
            vue(),
            viteCompression(),
            dts({
                include: 'src/index.ts',
            }),
        ],
        base: './',
        build: {
            lib: {
                formats: ['es', 'umd', 'iife'],
                entry: 'src/index.ts',
                name: 'myLib',
                fileName: 'myLib',
            },
            rollupOptions: {
                external: ['vue', 'vue-router'],
                output: {
                    globals: {
                        vue: 'Vue',
                        'vue-router': 'VueRouter',
                    },
                },
            },
        },
    }),
)
