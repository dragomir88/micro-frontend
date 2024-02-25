import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { version } from './package.json'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'), // entry file
      name: 'ImageApp', // global variable  included in script tag
      formats: ['es', 'umd'], // ES module format 
      fileName: (format) => `image-app-${version}.${format}.js` // file name for output
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
