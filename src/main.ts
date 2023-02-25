import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/locale/i18n'

import 'virtual:windi.css'
import '@/styles/main.css'

const pinia = createPinia()

const app = createApp(App)
  .use(i18n)
  .use(pinia)
  .use(router)

app.mount('#app')
