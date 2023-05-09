/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite'
import baseConfig from './vite.dev.base.config'

// https://vitejs.dev/config/
export default mergeConfig(baseConfig, defineConfig({}))
