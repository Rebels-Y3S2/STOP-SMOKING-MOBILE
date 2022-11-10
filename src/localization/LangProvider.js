import React, { useState } from "react";
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



export const LocaleContext = React.createContext();

export const LangProvider = ({children}) => {
    const [locale, setLocale_] = useState('en');
    const [showLocaleModal, setShowLocaleModal] = useState(false)

    const setLocale = (locale) => {
        setLocale_(locale);
    }

    const getLocale = () => {
        return locale;
    }

    i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        resources,
        lng: getLocale(),  // change this to sn , tm to change language
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      })



    return(
        <LocaleContext.Provider value={{setLocale, getLocale, showLocaleModal, setShowLocaleModal}}>
            {children}
        </LocaleContext.Provider>
    );
}