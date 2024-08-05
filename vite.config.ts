import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    // port: 5174,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://tourtally.ai',
        // target: 'http://192.168.14.122:8080',
        changeOrigin: true
      }
    }
  }
})
