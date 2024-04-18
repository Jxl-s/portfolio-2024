import { Html } from "@react-three/drei";
import Welcome from "../interfaces/Welcome";

export default function ScreenWelcome(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={1}
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude={"blending"}
            >
                <div
                    className="text-white text-3xl bg-blue-700/80 rounded-lg text-center p-2 select-none"
                    style={{
                        width: "378px",
                        height: "540px",
                    }}
                >
                    <Welcome />
                </div>
            </Html>
        </mesh>
    );
}
