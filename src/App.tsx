import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Nav from "./components/Nav";
import Home from "./2D/Home";
import About from "./2D/About";
import Projects from "./2D/Projects";
import Experience from "./2D/Experience";
import Contact from "./2D/Contact";

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

            <Nav />

            {/* Add pages now */}
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </>
    );
}

export default App;
