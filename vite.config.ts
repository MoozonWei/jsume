import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Icons(),
    WindiCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        {
          'pinia': [
            'storeToRefs',
            'defineStore',
          ],
          '@vueuse/core': [
            'useAsyncState',
            'useStorage',
            'useThrottleFn',
            'useDebounceFn',
          ],
          'vue-i18n': ['useI18n'],
          'lodash': [
            ['default', '_'],
          ],
          'axios': [
            ['default', 'axios'],
          ],
        },
      ],
      dirs: [
        './src/stores',
        './src/api',
        './src/utils',
        './src/constants',
      ],
      vueTemplate: true,
    }),
    Components({
      resolvers: [
        IconsResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
