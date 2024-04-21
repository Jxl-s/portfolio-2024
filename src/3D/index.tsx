import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { useEffect, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";

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
                <LoadingPage
                    isLoaded={isLoaded}
                    percentage={percentage}
                    setStarted={setStarted}
                />
            )}
            <Leva hidden={window.location.hash !== "#debug"} />
            {isStarted && (
                <Canvas
                    camera={{
                        position: [5, 1, 10],
                    }}
                >
                    <Experience />
                </Canvas>
            )}
        </>
    );
}
