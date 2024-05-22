import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import {default as preserveDirectives} from 'rollup-plugin-preserve-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts()],
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
      },
      plugins: [
        preserveDirectives()
      ]
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
})