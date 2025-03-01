import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: ".", // Ensure this points to the root
  build: {
    outDir: "dist", // Make sure this is the correct output directory
  },
  base: "/Knowledge-Nuggets/", // Ensure this is set for GitHub Pages
  plugins: [react()],
})