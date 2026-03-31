import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/programming-hero-a-06/',
  plugins: [react(),
    tailwindcss()
  ],
})
