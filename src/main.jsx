import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'pl'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/src/data/language/{{lng}}/translation.json',
        }
    });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

