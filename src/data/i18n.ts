import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messagesEn from "../locales/en.json";
import messagesFr from "../locales/fr.json";

const resources = {
    en: { translation: messagesEn },
    fr: { translation: messagesFr },
};

// Set initial language
let lang: string;
try {
    lang = localStorage.getItem("LOCALE") ?? "en";
} catch (e) {
    console.error("Failed to access localStorage", e);
    lang = "en";
}

export type Language = keyof typeof resources;

declare module "i18next" {
    interface i18n {
        language: Language;
    }
}

export function i18nInit() {
    i18n.use(initReactI18next).init({
        resources: {
            en: { translation: messagesEn },
            fr: { translation: messagesFr },
        },
        lng: lang,
        fallbackLng: lang,

        interpolation: {
            escapeValue: false,
        },
    });
}
