import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function Website3D() {
    return (
        <>
            <Canvas
                camera={{
                    position: [2, 1, 2],
                }}
            >
                <Experience />
            </Canvas>
        </>
    );
}
