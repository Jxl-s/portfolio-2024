import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Website2D from "./2D";
import Website3D from "./3D";
// import Website3D from "./3D";

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
    // check if ?3d=true
    const urlParams = new URLSearchParams(window.location.search);
    const is3D = urlParams.get("3d") === "true";

    return (
        <>
            {is3D ? <Website3D /> : <Website2D />}
            {/* <Website3D /> */}
        </>
    );
}

export default App;
