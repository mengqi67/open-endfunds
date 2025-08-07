/*
 * @Author: ymq
 * @Date: 2025-08-01 19:57:09
 * @LastEditTime: 2025-08-07 15:36:57
 * @LastEditors: ymq
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'node:path'
import { viteMockServe } from 'vite-plugin-mock'

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
    viteMockServe({  
      mockPath: './mock',  
      // localEnabled: true,  
      // prodEnabled: false,  
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    },
    extensions: ['.js','.vue', '.ts']
  },
  server: {
    proxy: {
      '/fund': {
        target: 'http://112.125.18.176',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/fund/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/common.scss" as *;`
      }
    }
  },
})
