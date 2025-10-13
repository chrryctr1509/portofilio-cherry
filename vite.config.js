import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env files and use VITE_API_URL for proxy target if provided
  const env = loadEnv(mode, process.cwd(), '')
  const api = env.VITE_API_URL || 'http://localhost:8080'

  return {
    plugins: [vue()],
    server: {
      proxy: {
        // Proxy /api requests to backend to avoid CORS in dev
        '/api': {
          target: api,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '/api'),
        },
      },
    },
  }
})
