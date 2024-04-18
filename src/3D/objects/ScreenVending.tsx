import { Html } from "@react-three/drei";
import Welcome from "../interfaces/Welcome";

export default function ScreenVending(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={0.75}
                position={[0.001, 0, 0]}
                rotation-y={Math.PI * 0.5}
                occlude={"blending"}
            >
                <div
                    className="text-white text-3xl bg-blue-700/80 rounded-md text-center p-2 select-none"
                    style={{
                        width: "334px",
                        height: "464px",
                    }}
                >
                    {/* Temporary */}
                    <Welcome />
                </div>
            </Html>
        </mesh>
    );
}
