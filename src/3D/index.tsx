import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useEffect, useMemo, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";
import { Perf } from "r3f-perf";
import Overlay from "./Interfaces/Overlay";

export default function Website3D() {
    // Handle loading
    const isLoaded = useLoaderStore((state) => state.isLoaded);
    const percentage = useLoaderStore((state) => state.percentage);
    const musicPaused = useLoaderStore((state) => state.musicPaused);

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

    const bgTrack = useMemo(() => {
        const audio = new Audio("/sounds/background.mp3");
        audio.loop = true;
        audio.volume = 0.5;

        return audio;
    }, []);

    const rain = useMemo(() => {
        const audio = new Audio("/sounds/rain.mp3");
        audio.loop = true;
        audio.volume = 0.1;

        return audio;
    }, []);

    // load audio background.mp3, play it if it's started only
    useEffect(() => {
        if (!isStarted) return;
        if (musicPaused) {
            bgTrack.pause();
            rain.pause();
        } else {
            bgTrack.play();
            rain.play();
        }

        return () => {
            bgTrack.pause();
            rain.pause();
        };
    }, [musicPaused, isStarted, bgTrack, rain]);

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
                <>
                    <Overlay />
                    <div style={{ height: containerHeight }}>
                        <Canvas
                            camera={{
                                position: [5, 1, 10],
                            }}
                            eventSource={document.getElementById("root")!}
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
                </>
            )}
        </>
    );
}
