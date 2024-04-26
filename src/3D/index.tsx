import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";

const App3D = lazy(() => import("./App"));
export default function Website3D() {
    // Handle loading
    const isLoaded = useLoaderStore((state) => state.isLoaded);
    const percentage = useLoaderStore((state) => state.percentage);
    const musicPaused = useLoaderStore((state) => state.musicPaused);

    const [isStarted, setStarted] = useState(false);

    useEffect(() => {
        startLoading();
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
                <Suspense fallback={<div>Please wait...</div>}>
                    <App3D />
                </Suspense>
            )}
        </>
    );
}
