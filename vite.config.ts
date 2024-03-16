/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
      { find: "img", replacement: "/src/assets/img" }
    ]
  }
})
