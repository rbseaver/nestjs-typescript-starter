/// <reference types="vitest/config" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.spec.ts'],
    coverage: {
      reporter: ['lcov', 'cobertura'],
      exclude: [
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/test/**',
        '**/node_modules/**',
        '**/.github/**',
        '*.config.js',
        '**/*.spec.ts',
        '**/*.module.ts',
        'eslint.config.mjs'
      ],
      provider: 'v8',
      all: true
    },
  }
});