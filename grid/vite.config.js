import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { version } from './package.json'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'), // entry file
      name: 'GridApp', // global variable  included in script tag
      formats: ['es', 'umd'], // ES module format 
      fileName: (format) => `grid-app-${version}.${format}.js` //  file name with version
    },
    rollupOptions: {
      // peer dependencies to keep the bundle size small
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
