import { Html } from "@react-three/drei";
import Projects from "../Interfaces/Projects";

export default function ScreenVending(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                position={[0.001, 0, 0]}
                rotation-y={Math.PI * 0.5}
                occlude={"blending"}
                className="text-white text-3xl bg-blue-700 rounded-md text-center p-2 select-none"
                scale={[0.046, 0.0497, 1]}
            >
                {/* Temporary */}
                <Projects />
            </Html>
        </mesh>
    );
}
