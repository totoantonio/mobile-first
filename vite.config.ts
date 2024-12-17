import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No need to call `vite-plugin-gh-pages` directly
export default defineConfig({
  plugins: [react()],
  base: '/mobile-first/', // Replace with your GitHub repository name
});
