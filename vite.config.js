import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default {
  server: {
    port: process.env.PORT || 5173, // Use Render's PORT or fallback to 5173 for local development
    host: '0.0.0.0', // Ensure the server is accessible from all network interfaces
  },
};
