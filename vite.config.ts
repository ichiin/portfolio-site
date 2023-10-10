import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    extensions: ['.js', '.mjs']
  },
  plugins: [react()],
})
