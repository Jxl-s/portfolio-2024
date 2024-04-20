import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useEffect, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";

export default function Website3D() {
    const isLoaded = useLoaderStore((state) => state.isLoaded);
    const percentage = useLoaderStore((state) => state.percentage);
    const [isStarted, setStarted] = useState(false);

    useEffect(() => {
        startLoading();
    }, []);

    return (
        <>
            {!isStarted && (
                <div className="fixed w-full h-full z-20 flex items-center justify-center">
                    {!isLoaded && (
                        <section className="text-center">
                            <h1 className="text-3xl font-bold">
                                Loading market...
                            </h1>
                            <h2 className="mt-2">{percentage}%</h2>
                        </section>
                    )}
                    {isLoaded && (
                        <section className="text-center">
                            <span
                                className="mt-4 text-white cursor-pointer text-4xl block font-mono hover:text-blue-300 duration-300 tracking-widest"
                                onClick={() => setStarted(true)}
                            >
                                Enter
                            </span>
                            <span className="text-xs">
                                Use a computer with a decent GPU for the best experience
                            </span>
                        </section>
                    )}
                </div>
            )}
            <Canvas
                camera={{
                    position: [5, 1, 10],
                }}
            >
                {isStarted && <Experience />}
            </Canvas>
        </>
    );
}
