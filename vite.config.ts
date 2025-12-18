import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Amore_AkiMemeWeddingWebsite/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})