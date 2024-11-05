import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",  // Set your repository name here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Only exclude if necessary
  },
})