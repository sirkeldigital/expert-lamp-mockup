import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/vigilant-pancake-mockup/',
  plugins: [vue(), tailwindcss()],
})
