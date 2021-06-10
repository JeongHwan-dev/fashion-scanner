import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [LocalStorageBackend, HttpApi],
    },
    fallbackLng: 'ko',
    debug: false,
    ns: [
      'devTeamSub',
      'example',
      'failCard',
      'footer',
      'infoCard',
      'introduction',
      'lookbook',
      'magazine',
      'memberInfo',
      'memberMatching',
      'navigation',
      'notFound',
      'picture',
      'questions',
      'request',
      'result',
    ],
    defaultNS: 'navigation',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
