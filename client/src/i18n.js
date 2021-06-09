import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend'; // fallback http load
import LanguageDetector from 'i18next-browser-languagedetector'; //OPTIONAL

i18n
  .use(Backend)
  .use(LanguageDetector) // OPTIONAL
  .use(initReactI18next)
  .init({
    backend: {
      backends: [
        LocalStorageBackend,  // primary
        HttpApi               // fallback
      ],
      // backendOptions: [{
      //   /* below options */
      // }, {
      //   loadPath: '/locales/{{lng}}/{{ns}}.json' // xhr load path for my own fallback
      // }]
    },
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
