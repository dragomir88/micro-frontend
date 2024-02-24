import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
      cors: true,
      port: 5173, // Enables CORS for all resources
      // or for more fine-grained control:
      // cors: { origin: 'http://localhost:PORT_OF_MAIN_APP', credentials: true },
  },
    build: {
        lib: {
            entry: 'src/App.jsx', // Or your component's entry point
            name: 'grid', // Matches the 'window.grid' in main app
            fileName: 'bundle' 
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'axios'], // Prevents bundling dependencies
            output: { globals: { react: 'React' }} // Maps for external use
        }
    }
});
