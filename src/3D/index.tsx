import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

export default function Website3D() {
    return (
        <>
            <Canvas
                camera={{
                    position: [5, 1, 10],
                }}
            >
                <Suspense
                    fallback={
                        <Html>
                            <span className="w-full">Please wait...</span>
                        </Html>
                    }
                >
                    <Experience />
                </Suspense>
            </Canvas>
        </>
    );
}
