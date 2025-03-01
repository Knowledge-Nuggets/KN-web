import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",  // Ensure the build output goes to 'dist/'
  },
  base: "/KN-web/",  // Important for GitHub Pages to serve files correctly
  plugins: [react()],
})