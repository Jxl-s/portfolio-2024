import { Canvas } from "@react-three/fiber";
import Website2D from "./2D";
import Website3D from "./3D";
import { i18nInit } from "./data/i18n";
import useDimensionStore from "./stores/useDimensionStore";
import {
    Bounds,
    Box,
    OrbitControls,
    Stage,
    Text,
    Text3D,
} from "@react-three/drei";
import ThreeDChoose from "./3D/3DChoose";

i18nInit();
function App() {
    // check if ?3d=true
    const dimension = useDimensionStore((state) => state.dimension);

    return (
        <>
            {dimension === "3D" && <Website3D />}
            {dimension === "2D" && <Website2D />}
            {dimension === "None" && (
                <div className="w-full h-full bg-black flex items-center justify-center text-center">
                    <div className="w-full max-w-xl">
                        <h1 className="text-5xl font-bold">Select Website</h1>
                        <div className="flex gap-4 justify-center mt-8">
                            <section className="border border-red-500 rounded-lg p-4">
                                <div
                                    style={{
                                        height: "200px",
                                        width: "200px",
                                    }}
                                >
                                    My House
                                </div>
                                <p>Normal 2D Website</p>
                            </section>
                            <section className="border border-red-500 rounded-lg p-4">
                                <Canvas
                                    style={{
                                        height: "200px",
                                        width: "200px",
                                    }}
                                    camera={{
                                        position: [0.5, 0.5, 2],
                                    }}
                                >
                                    <Bounds>
                                        <ThreeDChoose />
                                    </Bounds>
                                </Canvas>
                                <p>Market 3D Website</p>
                            </section>
                        </div>
                    </div>
                </div>
            )}
            {/* <Website3D /> */}
        </>
    );
}

export default App;
