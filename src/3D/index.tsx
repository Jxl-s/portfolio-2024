import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function Website3D() {
    return (
        <>
            <Canvas
                camera={{
                    position: [5, 3, 10],
                }}
            >
                <Experience />
            </Canvas>
        </>
    );
}
