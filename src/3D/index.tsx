import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useEffect, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";

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
                        <Experience />
                    </Canvas>
                </div>
            )}
        </>
    );
}
