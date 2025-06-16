'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from '../locales/en';
import { zhCN } from '../locales/zh-cn';

const resources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN },
};

const language =
  typeof window !== 'undefined'
    ? localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en'
    : 'en';

let initialized = false;

export function initI18n() {
  if (initialized || i18n.isInitialized) return;

  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

  initialized = true;
}

initI18n();
export default i18n;
