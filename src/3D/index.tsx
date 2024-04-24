import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useEffect, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";
import { Perf } from "r3f-perf";

export default function Website3D() {
    // Handle loading
    const isLoaded = useLoaderStore((state) => state.isLoaded);
    const percentage = useLoaderStore((state) => state.percentage);
    const [isStarted, setStarted] = useState(false);
    const [containerHeight, setContainerHeight] = useState("100dvh");

    useEffect(() => {
        startLoading();
    }, []);

    useEffect(() => {
        // get closest even number (fix iOs bug)
        if (window.innerHeight % 2 === 1) {
            setContainerHeight(`calc(100dvh - 1px)`);
        }
    }, []);

    // load audio background.mp3, play it if it's started only
    useEffect(() => {
        const audio = new Audio("/sounds/background.mp3");
        audio.loop = true;
        audio.volume = 0.5;

        const rain = new Audio("/sounds/rain.mp3");
        rain.loop = true;
        rain.volume = 0.1;

        if (isStarted) {
            audio.play();
            rain.play();
        }

        return () => {
            audio.pause();
            rain.pause();
        };
    }, [isStarted]);

    return (
        <>
            {!isStarted && (
                <LoadingPage
                    isLoaded={isLoaded}
                    percentage={percentage}
                    setStarted={setStarted}
                />
            )}
            <Leva hidden={window.location.hash !== "#debug"} />
            {isStarted && (
                <div style={{ height: containerHeight }}>
                    <Canvas
                        camera={{
                            position: [5, 1, 10],
                        }}
                    >
                        {window.location.hash === "#debug" && (
                            <Perf
                                position="top-left"
                                deepAnalyze={true}
                                matrixUpdate={true}
                            />
                        )}
                        <Experience />
                    </Canvas>
                </div>
            )}
        </>
    );
}
