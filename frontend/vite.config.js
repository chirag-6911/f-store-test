import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {port: 5173},
  resolve: {
    alias: {
      "@": "/src", // Adjust the alias path if needed
    },
  },
});
