/// <reference types="vitest" />
import baseConfig from './vite.dev.base.config'
import { defineConfig, mergeConfig } from 'vite'

// https://vitejs.dev/config/
export default mergeConfig(baseConfig, defineConfig({}))
