import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
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
  ]
}
