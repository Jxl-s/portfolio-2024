import { Html } from "@react-three/drei";
import Projects from "../Interfaces/Projects";

export default function ScreenVending(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={0.5}
                position={[0.001, 0, 0]}
                rotation-y={Math.PI * 0.5}
                occlude={"blending"}
                className="text-white text-3xl bg-blue-700 rounded-md text-center p-2 select-none"
                style={{
                    width: "504px",
                    height: "690px",
                }}
            >
                {/* Temporary */}
                <Projects />
            </Html>
        </mesh>
    );
}
