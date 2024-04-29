import { Html } from "@react-three/drei";
import About from "../Interfaces/About";

export default function ScreenAbout(props: JSX.IntrinsicElements["mesh"]) {
    return (
        <mesh {...props}>
            <Html
                center
                transform
                prepend
                position={[0, 0, -0.001]}
                rotation={[0, Math.PI, Math.PI * 0.5]}
                occlude={"blending"}
                className="text-white bg-indigo-800/50 rounded-md text-center p-3 select-none"
                style={{
                    width: "750px",
                    height: "516px",
                }}
                scale={[0.05, 0.05, 1]}
            >
                <About />
            </Html>
        </mesh>
    );
}
