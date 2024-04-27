import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { startLoading, useLoaderStore } from "./Stores/useLoaderStore";
import LoadingPage from "./Interfaces/Loading";
import { Leva } from "leva";

const App3D = lazy(() => import("./App"));
export default function Website3D() {
    // Handle loading
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
                <Suspense fallback={<div>Please wait...</div>}>
                    <App3D />
                </Suspense>
            )}
        </>
    );
}
