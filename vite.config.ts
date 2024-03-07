/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteSvgrPlugin from 'vite-plugin-svgr'

import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

import path from 'path'

export default defineConfig(({ mode }) => ({
  server: { port: 8080 },
  plugins: [
    viteSvgrPlugin({ svgrOptions: { icon: true } }),
    createHtmlPlugin({
      minify: true,
      entry: '/src/index.tsx',
      template: '/src/index.html',
      inject: {
        data: {
          config: (mode === 'development') ? 'dev.js' : 'config.js',
        },
      },
    }),
    react(),
    eslint(),
  ],
  define: {
    'process.env': {
      REACT_SPINKIT_NO_STYLES: process.env.REACT_SPINKIT_NO_STYLES || false,
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
      generateScopedName: 'Znt-[folder]-[local]--[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      containers: path.resolve(__dirname, './src/containers'),
      components: path.resolve(__dirname, './src/components'),
      core: path.resolve(__dirname, './src/core'),
      routes: path.resolve(__dirname, './src/routes'),
      '@znt-ds': path.resolve(__dirname, './src/design-system'),
      '@zenity-ui': path.resolve(__dirname, './zenity-frontend/@zenity-ui'),
      'test-utils': path.resolve(__dirname, './unit-test/test-utils'),
    },
  },
  test: {
    css: {
      modules: { classNameStrategy: 'non-scoped' }
    },
    deps: { inline: ['moment'] },
    globals: true,
    environment: 'jsdom',
    setupFiles: './unit-test/vitest.setup.ts',
  }
}))
