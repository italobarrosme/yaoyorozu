import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { default as preserveDirectives } from 'rollup-plugin-preserve-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-components',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
      },
      plugins: [preserveDirectives()],
    },
  },
})
