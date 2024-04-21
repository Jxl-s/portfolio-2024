import { Html } from "@react-three/drei";
import Journey from "../Interfaces/Journey";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={0.5}
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude={"blending"}
                className="text-white text-3xl bg-cyan-600 rounded-lg text-center p-2 select-none"
                style={{
                    width: "546px",
                    height: "800px",
                }}
            >
                <Journey />
            </Html>
        </mesh>
    );
}
