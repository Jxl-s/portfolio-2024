import { Canvas } from "@react-three/fiber";
import Overlay from "./Interfaces/Overlay";
import { Suspense, lazy, useEffect, useState } from "react";
import Experience from "./Experience";
import CameraManager from "./Managers/CameraManager";
import SoundManager from "./Managers/SoundManager";
import { Leva } from "leva";

const Perf = lazy(() =>
    import("r3f-perf").then(({ Perf }) => ({ default: Perf }))
);

export default function App3D() {
    const [containerHeight, setContainerHeight] = useState("100dvh");
    useEffect(() => {
        // get closest even number (fix iOs bug)
        if (window.innerHeight % 2 === 1) {
            setContainerHeight(`calc(100dvh - 1px)`);
        }
    }, []);

    return (
        <>
            {/* Add leva and overlay */}
            <Leva hidden={window.location.hash !== "#debug"} />
            <Overlay />
            <div style={{ height: containerHeight }}>
                <Canvas
                    camera={{
                        position: [2, 0, 10],
                    }}
                >
                    {/* Load managers */}
                    <CameraManager />
                    <SoundManager />

                    {/* Load experience */}
                    <Experience />

                    {/* Debug mode performance monitor */}
                    {window.location.hash === "#debug" && (
                        <Suspense fallback={null}>
                            <Perf
                                position="top-left"
                                deepAnalyze={true}
                                matrixUpdate={true}
                            />
                        </Suspense>
                    )}
                </Canvas>
            </div>
        </>
    );
}
