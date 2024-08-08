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
                    <div className="w-full max-w-3xl">
                        <h1 className="text-5xl font-bold">
                            Choose a Portfolio
                        </h1>
                        <p className="mt-4 text-lg opacity-75">
                            The 3D Portfolio provides an interactive and
                            immersive experience, while the 2D Portfolio is a
                            more traditional experience.
                        </p>
                        <div className="gap-4 justify-center mt-8 grid grid-cols-2">
                            <section className="border-2 border-white rounded-lg p-4">
                                <b className="text-xl mb-2 text-white">
                                    Normal 2D Portfolio
                                </b>
                                <img
                                    src="/images/og_image_2d.png"
                                    className="mt-2"
                                />
                            </section>
                            <section className="border-2 border-white rounded-lg p-4">
                                <b className="text-xl mb-2 text-purple-400">
                                    Market 3D Portfolio
                                </b>
                                <img
                                    src="/images/og_image.jpg"
                                    className="mt-2"
                                />
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
