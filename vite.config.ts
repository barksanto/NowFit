import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // this comes from types/node.js that was installed with Vite

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // @ any time you see @, replace it with the path to the src folder
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  }
})
