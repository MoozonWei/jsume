import en from './lang/en'
import zh from './lang/zh'

const messages = {
  en,
  'en-US': en,
  zh,
  'zh-CN': zh,
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
