import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'), // Point to the entry file
      name: 'GridApp', // The name of the global variable when included via a script tag
      formats: ['es', 'umd'], // Output in ES module format and UMD for compatibility
      fileName: (format) => `grid-app.${format}.js` // The file name for output
    },
    rollupOptions: {
      // Externalize peer dependencies to keep the bundle size small
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
