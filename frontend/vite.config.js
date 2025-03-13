import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/~hatleyha/CS340/Assignment4/',
  server: {
    proxy: {
      '/customers':    { target: 'http://localhost:3000' }
      }
  }
})

