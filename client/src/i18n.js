import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'; //OPTIONAL

i18n
  .use(Backend)
  .use(LanguageDetector) // OPTIONAL
  .use(initReactI18next)
  .init({
    //  Set default language
    lng: 'ko',
    //  language to use if translations in user language are not available
    fallbackLng: 'ko',
    debug: false,
    //  string or array of namespaces to load
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
    //  default namespace used if not passed to 'translation function'
    defaultNS: 'navigation',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
