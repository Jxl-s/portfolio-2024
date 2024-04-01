import { Canvas } from "@react-three/fiber";
import Button from "../components/Button";
import HomeScene from "../3D/HomeScene";
import { useEffect, useRef } from "react";

export default function Home() {
    const csRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const titles = ["Computer Science Student", "Web Developer", "Software Developer"];

        // make it delete the current text letter-by-letter, and type the next one
        let animate = true;
        async function sleep(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        async function startAnim() {
            if (!csRef.current) return;
            csRef.current.textContent = "";

            let i = 0;
            let j = 0;

            while (animate) {
                if (!csRef.current) continue;

                // Type the letter
                const nextLetter = titles[j][i];
                if (nextLetter === undefined) {
                    await sleep(1000);
                    while (i > 0 && animate) {
                        csRef.current.textContent = csRef.current.textContent.slice(0, -1);
                        i--;
                        await sleep(100);
                    }

                    j++;
                    if (j > titles.length - 1) {
                        j = 0;
                    }
                } else {
                    csRef.current.textContent += nextLetter;
                    i++;
                }

                await sleep(100);
            }
        }

        startAnim();
        return () => {
            animate = false;
        };
    });

    return (
        <div className="bg-indigo-900/50 min-h-dvh p-4 lg:p-8 flex flex-col" id="home-div">
            <main className="grid grid-cols-2 flex-grow items-center mt-[72px] lg:mt-0 gap-4">
                <section className="text-center col-span-2 lg:col-span-1 items-center justify-center flex">
                    <div className="max-w-xl">
                        <h2 className="text-xl">HELLO</h2>
                        <h1 className="text-6xl font-bold mt-2">
                            I'm <span className="text-indigo-500">Jia</span>
                        </h1>
                        <h2 className="text-xl">
                            a <span className="text-indigo-500" ref={csRef}></span>
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
                            <a href="https://github.com/Jxl-s/" target="_blank">
                                <Button color="black">
                                    <span className="font-semibold">GitHub</span>
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/li-jiaxuan/" target="_blank">
                                <Button color="blue">
                                    <span className="font-semibold">LinkedIn</span>
                                </Button>
                            </a>

                            <a
                                className="col-span-2 font-semibold text-indigo-500 text-sm lg:text-base hover:text-indigo-700 duration-300"
                                href="resume.pdf"
                                target="_blank"
                            >
                                Download my Resume (PDF)
                            </a>
                        </div>
                    </div>
                </section>
                <section className="text-center col-span-2 lg:col-span-1">
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
                Note: I am still developing this website. If you happened to find this by accident,
                it's not complete :D
            </div>
        </div>
    );
}
