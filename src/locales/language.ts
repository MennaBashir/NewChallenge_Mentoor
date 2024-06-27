import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './en/translation.json';
import arTranslation from './ar/translation.json';
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {//Translations file
            en: {
                translation: enTranslation,
            },
            ar: {
                translation: arTranslation,
            },
        },
        fallbackLng: 'en', // fallback language if a translation is missing
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie'] //To save detect language in cookie        
        }
    });

export default i18n;
