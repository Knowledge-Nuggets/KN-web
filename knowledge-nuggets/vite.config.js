import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Expose to all network interfaces
    port: 3000 // Optional: specify port
  },
  plugins: [react()],
})
