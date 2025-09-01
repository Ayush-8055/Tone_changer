import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  
  // 1. Set correct base for GitHub Pages
  base: '/Text_Tone_Picker_/',   // <-- must match your repo name

  // 2. Define build options
  build: {
    outDir: 'dist',
    sourcemap: true,             // helps debugging in production
  },

  // 3. Resolve aliases (optional, improves imports)
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8080', // backend API
    },
  },
});
=======
base: '/Text_Tone_Picker_/',
plugins: [react()],
server: {
  proxy: {
    '/api': 'http://localhost:8080'
  }
}
});
>>>>>>> 18dbd91 (Added backend fetch integration for tone API)
