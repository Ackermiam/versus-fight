import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/versus-fight',
  plugins: [vue()],
  build: {
    assetsInclude: ['./src/assets/**']
  }
})