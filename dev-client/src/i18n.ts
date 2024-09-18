import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  // .use(LanguageDetector as any) // language detector cause an error, so we do it manually
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: {
                greeting: {
                    hello: "Hello world!"
                }
            }
        },
        fr: {
            translation: {
                greeting: {
                    hello: "Bonjour tout le monde!"
                }
            }
        }
    }
  });

  export default i18n;
