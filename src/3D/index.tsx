import { Suspense, lazy, useEffect, useState } from "react";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";
import { startLoading } from "./Stores/useLoaderStore";

const App3D = lazy(() => import("./App"));
export default function Website3D() {
    // Handle loading
    const [isStarted, setStarted] = useState(false);

    // Handle WebGL enabled && loading
    useEffect(() => {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");

        // No webgl context, then we can't run the 3D version
        if (!gl) {
            console.error("WebGL2 not supported");
            return;
        }

        // Handle low-end device max texture size
        const textureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);

        let chosenSize = 4096;
        if (textureSize < 4096) {
            chosenSize = 2048;
        }

        startLoading(chosenSize);
    }, []);

    return (
        <>
            {!isStarted && <LoadingPage setStarted={setStarted} />}
            <Leva hidden={window.location.hash !== "#debug"} />
            {isStarted && (
                <Suspense fallback={<div>Please wait...</div>}>
                    <App3D />
                </Suspense>
            )}
        </>
    );
}
