/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.ts'],
    coverage: {
      provider: 'istanbul',
      exclude: ['**/*.stories.tsx', '**/*.stories.ts', 'src/App.tsx', 'src/main.tsx', '.storybook', '.eslintrc.cjs']
    },
  },
})