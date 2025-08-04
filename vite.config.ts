/*
 * @Author: ymq
 * @Date: 2025-08-01 19:57:09
 * @LastEditTime: 2025-08-03 14:18:32
 * @LastEditors: ymq
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    },
    extensions: ['.js','.vue', '.ts']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/common.scss";`
      }
    }
  },
})
