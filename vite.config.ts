import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      manifest: {
        name: 'JapaMala',
        short_name: 'JapaMala',
        theme_color: '#ffffff',
        icons: [
          {
            src: './public/logo.svg',
            sizes: '192x192',
            type: 'image/svg'
          },
          {
            src: './public/logo.svg',
            sizes: '512x512',
            type: 'image/svg'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
