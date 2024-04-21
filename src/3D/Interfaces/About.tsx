import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import useCameraStore from "../Stores/useCameraStore";
import sleep from "../../util/sleep";
import { TYPING_DELAY, TYPING_SPEED, TYPING_TEXTS } from "../../data/home";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
    const focus = useCameraStore((state) => state.focus);
    const setFocus = useCameraStore((state) => state.setFocus);

    const csRef = useRef<HTMLSpanElement>(null);
    const { i18n } = useTranslation();

    useEffect(() => {
        const titles = TYPING_TEXTS.map(
            (text) => text[i18n.language as "en" | "fr"]
        );

        // make it delete the current text letter-by-letter, and type the next one
        let animate = true;
        async function startAnim() {
            if (!csRef.current) return;
            csRef.current.textContent = "";

            let i = 0; // current word
            let j = 0; // current character

            while (animate) {
                if (!csRef.current) continue;

                // Type the letter
                const nextLetter = titles[j][i];
                if (nextLetter === undefined) {
                    await sleep(TYPING_DELAY);
                    while (i > 0 && animate) {
                        i--;
                        csRef.current.textContent =
                            csRef.current.textContent.slice(0, -1);
                        await sleep(TYPING_SPEED);
                    }

                    j++;
                    if (j > titles.length - 1) {
                        j = 0;
                    }
                } else {
                    csRef.current.textContent += nextLetter;
                    i++;
                }

                await sleep(TYPING_SPEED);
            }
        }

        startAnim();
        return () => {
            animate = false;
        };
    });

    return (
        <>
            {/* mask */}
            <div
                className={`absolute bg-indigo-500 duration-500 w-full h-full z-10 ${
                    focus === "aboutMe"
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
            />
            <div className="border-8 rounded-lg border-blue-300 w-full h-full p-3 flex flex-col">
                <h1 className="text-xl">HELLO</h1>
                <p className="font-semibold text-6xl">
                    I'm <span className="text-indigo-300">Jia</span>
                </p>
                <span className="text-xl block">
                    a{" "}
                    <span ref={csRef} className="text-indigo-500">
                        Full-Stack Developer
                    </span>
                </span>
                <hr className="my-4 mx-4" />
                <p className="text-base">
                    Passionate in problem solving, creative full-stack
                    development and software engineering, with SaaS experience
                    and a foundation in networking and cybersecurity.
                </p>
                <section className="mt-4 flex flex-col gap-4 mx-auto">
                    <a
                        href="mailto: jiaxuanli.6231@gmail.com"
                        className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                    >
                        <SiGmail
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#d14836"
                        />
                        <span>jiaxuanli.6231@gmail.com</span>
                    </a>
                    <a
                        href="https://github.com/Jxl-s"
                        target="_blank"
                        className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                    >
                        <SiGithub
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#000"
                        />
                        <span>@Jxl_s</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/li-jiaxuan"
                        target="_blank"
                        className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                    >
                        <SiLinkedin
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#0077b5"
                        />
                        <span>@li-jiaxuan</span>
                    </a>
                </section>

                <div className="flex-grow flex items-end justify-center">
                    <p
                        className="col-span-2 font-semibold text-indigo-500 text-sm lg:text-base hover:text-indigo-700 duration-300 cursor-pointer"
                        onClick={() => setFocus("home")}
                    >
                        Go Back
                    </p>
                </div>
            </div>
        </>
    );
}
