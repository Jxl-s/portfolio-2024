import { Html, useTexture } from "@react-three/drei";
import About from "../Interfaces/About";
import { aboutGradient } from "../Data/gradients";
import { CameraFocus } from "../Data/cameraPositions";
import MaskedHTML from "../Components/MaskedHTML";

export default function ScreenAbout(props: JSX.IntrinsicElements["mesh"]) {
    const welcomeTexture = useTexture("/textures/screens/welcome.webp");
    welcomeTexture.flipY = false;

    return (
        <mesh {...props}>
            <MaskedHTML
                focus={CameraFocus.AboutMe}
                maskProps={{
                    position: [0, 0, -0.002],
                    scale: [0.95, 0.65, 1],
                    rotation: [0, 0, Math.PI * 0.5],
                }}
                maskTexture={welcomeTexture}
                html={() => (
                    <Html
                        center
                        transform
                        prepend
                        position={[0, 0, -0.001]}
                        rotation={[0, Math.PI, Math.PI * 0.5]}
                        occlude={"blending"}
                        className="text-white rounded-md text-center p-3 select-none"
                        style={{
                            width: "750px",
                            height: "516px",
                            background: aboutGradient,
                        }}
                        scale={[0.05, 0.051, 1]}
                    >
                        <About />
                    </Html>
                )}
            />
        </mesh>
    );
}
