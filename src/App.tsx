import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Website2D from "./2D";
import { addEffect } from "@react-three/fiber";
import Lenis from "@studio-freight/lenis";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: messagesEn,
            },
            fr: {
                translation: messagesFr,
            },
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });

const lenis = new Lenis({ syncTouch: true });
addEffect((t) => lenis.raf(t));

function App() {
    return (
        <>
            <div
                className="bg-black"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />

            <Website2D />
        </>
    );
}

export default App;
