import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vueJsx(),
        AutoImport({
            imports: ['vue'],
            dts: 'src/auto-imports.d.ts',
        }),
        AutoImportComponents({
            // default: src.components
            dirs: ['src/components'],
            extensions: ['vue'],
            deep: true,
            dts: 'src/components.d.ts',
        }),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
