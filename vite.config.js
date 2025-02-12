import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
});
