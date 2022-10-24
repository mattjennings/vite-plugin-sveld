import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveld from 'vite-plugin-sveld'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), sveld()]
})
