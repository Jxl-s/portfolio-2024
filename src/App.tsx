import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Website2D from "./2D";

// Initialize i18n
i18n.use(initReactI18next).init({
    resources: {
        en: { translation: messagesEn },
        fr: { translation: messagesFr },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

function App() {
    return (
        <>
            <div className="bg-black fixed top-0 bottom-0 w-full h-full -z-10" />
            <Website2D />
            <Analytics />
        </>
    );
}

export default App;
