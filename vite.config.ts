import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  resolve: {
    alias: {
      '@': './src',
    },
    extensions: ['.js', '.mjs', '.ts', '.tsx']
  },
  plugins: [react(), svgr()],
})
