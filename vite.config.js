import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gowtham-portfolio/',
  plugins: [react()],
})