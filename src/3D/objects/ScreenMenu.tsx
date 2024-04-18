import { Html } from "@react-three/drei";
import Welcome from "../interfaces/Welcome";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={0.75}
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude={"blending"}
            >
                <div
                    className="text-white text-3xl bg-blue-700/80 rounded-lg text-center p-2 select-none"
                    style={{
                        width: "366px",
                        height: "530px",
                    }}
                >
                    {/* Temporary */}
                    <Welcome />
                </div>
            </Html>
        </mesh>
    );
}
