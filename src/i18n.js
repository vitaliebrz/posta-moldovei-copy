import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"
import ro from "./locales/ro.json"
import ru from "./locales/ru.json"

const lang = localStorage.getItem("lang") || "en";

i18n
    .use(initReactI18next)
    .init({
        lng: lang,
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: true
        },
        resources: {
            en: {
                translation: en
            },
            ro: {
                translation: ro
            },
            ru: {
                translation: ru
            }
        }
    })