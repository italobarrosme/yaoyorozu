import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import {default as preserveDirectives} from 'rollup-plugin-preserve-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'istanbul', // or 'v8'
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: resolve(__dirname, 'index.ts'),
      name: 'react-components',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
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
    }
  }
})