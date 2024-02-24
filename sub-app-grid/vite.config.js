import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensure all modules in the bundle are treated as having side effects
        manualChunks(id) {
          if (id.includes('main.jsx')) {
            // You can name this chunk as you like, here it's named 'main'
            return 'main';
          }
        }
      }
    }
  }
});
