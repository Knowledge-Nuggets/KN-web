import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Knowledge-Nuggets/',
  server: {
    // server configuration if needed
  },
  plugins: [react()],
})