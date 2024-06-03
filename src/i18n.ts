import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

import enTranslations from '../public/locales/en/translation.json';
import ptTranslations from '../public/locales/pt/translation.json';

i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                "translation": {
                    ...enTranslations
                }
            },
            pt: {
                "translation": {
                    ...ptTranslations
                }
            },
        },
        lng: 'pt'
    })

export default i18n;