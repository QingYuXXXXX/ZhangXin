import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './locales/resources'

i18n.use(initReactI18next).init({
  fallbackLng: 'zh',
  lng: 'zh',
  debug: true,
  resources: resources,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
