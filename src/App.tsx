import {
    BriefcaseIcon,
    CircleStackIcon,
    DevicePhoneMobileIcon,
    DocumentDuplicateIcon,
    FingerPrintIcon,
    LanguageIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Canvas } from "@react-three/fiber";
import HomeScene from "./3D/HomeScene";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import messagesEn from "./locales/en.json";
import messagesFr from "./locales/fr.json";
import Nav from "./Nav";

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
            <div className="bg-indigo-900/50 min-h-dvh p-4 lg:p-8 flex flex-col" id="home-div">
                <main className="grid grid-cols-2 flex-grow items-center mt-[72px] lg:mt-0">
                    <section className="text-center col-span-2 p-6 lg:col-span-1 items-center justify-center flex">
                        <div className="max-w-xl">
                            <h2 className="text-xl">HELLO</h2>
                            <h1 className="text-6xl font-bold mt-2">
                                I'm <span className="text-indigo-500">Jia</span>
                            </h1>
                            <h2 className="text-xl">
                                a <span className="text-indigo-500">Computer Science Student</span>
                            </h2>
                            <div className="my-4" />
                            <div className="flex items-center justify-center">
                                <div className="h-2 bg-indigo-500 w-[90px]" />
                            </div>
                            <div className="my-4" />
                            <p>
                                Passionate in problem solving, creative full-stack development and
                                software engineering.
                            </p>
                            <div className="my-4" />
                            <div className="grid grid-cols-2 px-10 gap-4">
                                <button className="w-full bg-black rounded-lg py-2 shadow-md font-semibold">
                                    GitHub
                                </button>
                                <button className="w-full bg-blue-500 rounded-lg py-2 shadow-md font-semibold">
                                    LinkedIn
                                </button>
                                <a className="col-span-2 font-semibold text-indigo-500">
                                    Download my Resume (PDF)
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="text-center col-span-2 p-6 lg:col-span-1">
                        <div className="w-full h-[400px] bg-black">
                            <Canvas className="w-full h-full rounded-lg border border-indigo-500/50 cursor-pointer">
                                <HomeScene />
                            </Canvas>
                        </div>
                        <p className="text-center mt-2">
                            (Click to view the 3D version of my portfolio)
                        </p>
                    </section>
                </main>
                <div className="text-center w-full bg-red-500">
                    Note: I am still developing this website. If you happened to find this by
                    accident, it's not complete :D
                </div>
            </div>

            <div
                className="bg-indigo-900/70 min-h-dvh p-4 lg:p-8 flex flex-col items-center"
                id="about-div"
            >
                <header className="text-center mt-[72px]">
                    <span className="flex gap-4 w-full justify-between">
                        <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-400" />
                        <span className="font-bold text-indigo-400">ABOUT</span>
                        <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-400" />
                    </span>
                    <span className="font-bold text-4xl">About Me</span>
                    <div className="my-4" />
                    <div className="flex items-center justify-center">
                        <div className="h-2 bg-indigo-500 w-[90px]" />
                    </div>
                </header>
                <main className="mt-4 flex flex-col items-center w-full max-w-7xl">
                    <p className="max-w-2xl text-center">
                        I'm currently pursuing a degree in Computer Science at Vanier College, while
                        having an interest in full-stack development. I've been programming for over
                        6 years and have recently started exploring 3D web graphics as a hobby. I'm
                        enthusiastic about leveraging technology to create engaging and immersive
                        experiences on the web.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
                        <div className="col-span-2 lg:col-span-1 bg-indigo-800/50 shadow-lg rounded-lg p-6 flex gap-4 w-full">
                            <MapPinIcon className="h-24 w-24" />
                            <div>
                                <h1 className="text-2xl font-semibold">Location</h1>
                                <p>Based in Montreal, Canada</p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 bg-indigo-800/50 shadow-lg rounded-lg p-6 flex gap-4 w-full">
                            <LanguageIcon className="h-24 w-24" />
                            <div>
                                <h1 className="text-2xl font-semibold">Location</h1>
                                <p>Based in Montreal, Canada</p>
                            </div>
                        </div>
                    </div>
                    <span className="font-bold text-2xl my-8">Specializing In</span>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="col-span-3 lg:col-span-1 bg-indigo-800/50 shadow-lg rounded-lg p-6 text-left w-full">
                            <div className="text-2xl font-semibold">
                                <span className="block">Full-Stack</span>
                                <span className="block">Development</span>
                            </div>
                            <p>6 years</p>
                            <div className="flex items-center justify-between">
                                <div className="flex-grow" />
                                <CircleStackIcon className="h-12 w-12" />
                            </div>
                        </div>
                        <div className="col-span-3 lg:col-span-1 bg-indigo-800/50 shadow-lg rounded-lg p-6 text-left w-full">
                            <div className="text-2xl font-semibold">
                                <span className="block">Software</span>
                                <span className="block">Development</span>
                            </div>
                            <p>6 years</p>
                            <div className="flex items-center justify-between">
                                <div className="flex-grow" />
                                <FingerPrintIcon className="h-12 w-12" />
                            </div>
                        </div>
                        <div className="col-span-3 lg:col-span-1 bg-indigo-800/50 shadow-lg rounded-lg p-6 text-left w-full">
                            <div className="text-2xl font-semibold">
                                <span className="block">Desktop & Mobile</span>
                                <span className="block">Development</span>
                            </div>
                            <p>2 years</p>
                            <div className="flex items-center justify-between">
                                <div className="flex-grow" />
                                <DevicePhoneMobileIcon className="h-12 w-12" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div
                className="bg-indigo-900/50 min-h-dvh p-4 lg:p-8 flex flex-col items-center"
                id="projects-div"
            >
                <header className="text-center mt-[72px]">
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
