import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Website2D from "./2D";

let lang: string;
try {
    lang = localStorage.getItem("LOCALE") ?? "en";
} catch (e) {
    console.error("Failed to access localStorage", e);
    lang = "en";
}

// Initialize i18n
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

function App() {
    return (
        <>
            <div className="bg-black fixed top-0 bottom-0 w-full h-full -z-10" />
            <Website2D />
        </>
    );
}

export default App;
