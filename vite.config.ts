/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"]
  },
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "assets", replacement: "/src/assets" },
      { find: "css", replacement: "/src/assets/css" },
      { find: "img", replacement: "/src/assets/img" },
      { find: "components", replacement: "/src/components" },
      { find: "routes", replacement: "/src/routes" }
    ]
  }
})
