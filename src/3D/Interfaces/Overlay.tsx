import { useTranslation } from "react-i18next";
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import gsap from "gsap";
import playSound from "../Utils/playSound";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";

export default function Overlay() {
    const { t, i18n } = useTranslation();
    const cameraFocus = useExperienceStore((state) => state.cameraFocus);
    const [isAudioPaused, setIsAudioPaused] = useExperienceStore((state) => [
        state.isAudioPaused,
        state.setIsAudioPaused,
    ]);

    const [hideWelcome, setHideWelcome] = useState(false);
    const welcomeRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="fixed w-full h-full pointer-events-none"
            style={{
                zIndex: 100000000,
            }}
        >
            {/* One UI at the corner to indicate music that is playing */}
            {(cameraFocus === CameraFocus.Home ||
                cameraFocus === CameraFocus.None) && (
                <>
                    {!hideWelcome && (
                        <div
                            className="absolute bottom-0 left-0 p-4 pointer-events-auto max-w-lg"
                            ref={welcomeRef}
                        >
                            <div className="bg-zinc-900/75 shadow-lg rounded-lg px-4 py-3 ms-2 me-4 hidden lg:block">
                                {
                                    <span className="font-semibold w-full flex justify-between items-center">
                                        {t("welcome_portfolio")}
                                        <span
                                            className="font-mono text-red-500 font-bold cursor-pointer hover:text-red-300 duration-300"
                                            onClick={() => {
                                                // move the div to the side
                                                playSound("whooshAudio");
                                                gsap.to(welcomeRef.current, {
                                                    xPercent: -100,
                                                    duration: 0.5,
                                                    ease: "power2.in",
                                                    onComplete: () => {
                                                        setHideWelcome(true);
                                                    },
                                                });
                                            }}
                                        >
                                            x
                                        </span>
                                    </span>
                                }
                                <span className="text-xs font-semibold text-blue-400 block mb-1">
                                    {t("welcome_portfolio_sub")}
                                </span>
                                <ul className="list-disc ms-4 text-sm text-blue-100/50">
                                    <li>{t("welcome_list_1")}</li>
                                    <li>{t("welcome_list_2")}</li>
                                    <li>
                                        <span className="font-semibold">
                                            {t("Hint")}
                                        </span>
                                        {": "}
                                        {t("welcome_list_3")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <div className="absolute top-0 right-0 mt-2 me-1 pointer-events-auto max-w-lg">
                        <div className="shadow-lg rounded-lg hidden lg:block">
                            <div className="flex gap-2 w-full">
                                <button
                                    className={`${
                                        i18n.language === "en"
                                            ? "bg-blue-500"
                                            : "bg-gray-500"
                                    } text-white px-4 py-2 rounded-lg text-sm font-semibold w-full`}
                                    onClick={() => {
                                        i18n.changeLanguage("en");
                                        localStorage.setItem("LOCALE", "en");
                                    }}
                                >
                                    English
                                </button>
                                <button
                                    className={`${
                                        i18n.language === "fr"
                                            ? "bg-blue-500"
                                            : "bg-gray-500"
                                    } text-white px-4 py-2 rounded-lg text-sm font-semibold w-full`}
                                    onClick={() => {
                                        i18n.changeLanguage("fr");
                                        localStorage.setItem("LOCALE", "fr");
                                    }}
                                >
                                    Français
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 p-4 pointer-events-auto max-w-lg">
                        <div className="bg-zinc-900/75 shadow-lg rounded-lg p-4 gap-4 ms-2 me-4 mt-2 hidden lg:flex">
                            <div className="flex items-center justify-center">
                                {isAudioPaused ? (
                                    <PlayCircleIcon
                                        className="w-8 h-8 text-red-500 cursor-pointer hover:text-red-300 duration-300"
                                        onClick={() => {
                                            playSound("clickAudio");
                                            setIsAudioPaused(false);
                                        }}
                                    />
                                ) : (
                                    <PauseCircleIcon
                                        className="w-8 h-8 text-red-500 cursor-pointer hover:text-red-300 duration-300"
                                        onClick={() => {
                                            playSound("clickAudio");
                                            setIsAudioPaused(true);
                                        }}
                                    />
                                )}
                            </div>
                            <div>
                                <a
                                    className="text-red-500 text-sm block font-semibold hover:text-red-400 duration-300"
                                    href="https://www.youtube.com/watch?v=jmrvDx4okis"
                                    target="_blank"
                                >
                                    Beautiful Soft Piano Music
                                </a>
                                <span className="text-white/50 text-xs block">
                                    {t("by")}{" "}
                                    <a
                                        className="text-blue-300 hover:text-blue-200 duration-300"
                                        href="https://www.youtube.com/channel/UCHJVYelCXpsV8P4EVWBgj0A"
                                        target="_blank"
                                    >
                                        Jonny Easton
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4 pointer-events-auto max-w-lg">
                        Source code can be found {" "}
                        <a
                            href="https://github.com/Jxl-s/portfolio-2024"
                            target="_blank"
                            className="underline"
                        >
                            here
                        </a>
                    </div>
                </>
            )}
        </div>
    );
}
