import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['/android-chrome-192x192.png', '/android-chrome-512x512.png'],
      manifest: {
        name: 'My-Restaurant POC',
        short_name: 'My-Restaurant POC',
        description: 'A React Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
    tsconfigPaths()
  ]
})
