import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@sections', replacement: '/src/components/sections' },
      { find: '@layouts', replacement: '/src/components/layouts' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@images', replacement: '/src/images' },
      { find: '@data', replacement: '/src/data' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@context', replacement: '/src/context' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@templates', replacement: '/src/templates' },
      { find: '@config', replacement: '/src/config' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@services', replacement: '/src/services' },
      { find: '@api', replacement: '/src/api' },
      { find: '@types', replacement: '/src/types' },
      { find: '@public', replacement: '/public' },
    ],
  },
})
