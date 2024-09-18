import React from 'react'
import Parse from 'parse'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from "./config/i18n/locales/en/global.json"
import global_fr from "./config/i18n/locales/fr/global.json"


i18next
  .init({
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: "en",
    resources: {
        en: {
          global_en
        },
        fr: {
          global_fr
        }
    }
  });

  Parse.initialize("blogy");

  const origin = window.location.origin;

  const LOCAL = origin.includes('localhost') || origin.includes('127.0.0.1');
  const PREPROD = origin.includes('preprod')
  const PROD = !LOCAL && !PREPROD;

  (window as any).LOCAL = LOCAL;
  (window as any).PREPROD = PREPROD;
  (window as any).PROD = PROD;

  const parseServerURL = LOCAL ? 'http://localhost:8082/parse' : `${origin}/parse`;
  
  Parse.serverURL  = parseServerURL;

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>,
  )


