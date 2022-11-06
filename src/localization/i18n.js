import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/translation.json'
import translationSN from './sn/translation.json'
import translationTM from './tm/translation.json'

export const resources = {
  en: {
    translation: translationEN,
  },
  sn: {
    translation: translationSN,
  },
  tm: {
    translation: translationTM,
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',  // change this to sn , tm to change language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
