import { BriefcaseIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Nav from "./components/Nav";
import Home from "./2D/Home";
import About from "./2D/About";

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

            <div
                className="bg-indigo-900/50 p-4 lg:p-8 flex flex-col items-center"
                id="projects-div"
                style={{
                    minHeight: "calc(100vh - 72px)",
                }}
            >
                <header className="text-center">
                    <span className="flex gap-4 w-full justify-between">
                        <DocumentDuplicateIcon className="h-6 w-6 text-indigo-400" />
                        <span className="font-bold text-indigo-400">PROJECTS</span>
                        <DocumentDuplicateIcon className="h-6 w-6 text-indigo-400" />
                    </span>
                    <span className="font-bold text-4xl">My Projects</span>
                    <div className="my-4" />
                    <div className="flex items-center justify-center">
                        <div className="h-2 bg-indigo-500 w-[90px]" />
                    </div>
                </header>
                <main className="mt-4 flex flex-col items-center w-full max-w-7xl">
                    <p className="max-w-2xl text-center">Here are some cool projects I made</p>
                </main>
            </div>
            <div
                className="bg-indigo-900/70 min-h-dvh p-4 lg:p-8 flex flex-col items-center"
                id="experience-div"
            >
                <header className="text-center mt-[72px]">
                    <span className="flex gap-4 w-full justify-between">
                        <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                        <span className="font-bold text-indigo-400">EXPERIENCE</span>
                        <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                    </span>
                    <span className="font-bold text-4xl">My Experience</span>
                    <div className="my-4" />
                    <div className="flex items-center justify-center">
                        <div className="h-2 bg-indigo-500 w-[90px]" />
                    </div>
                </header>
                <main className="mt-4 flex flex-col items-center w-full max-w-7xl"></main>
            </div>
        </>
    );
}

export default App;
