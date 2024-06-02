import { Html, useTexture } from "@react-three/drei";
import Projects from "../Interfaces/Projects";
import { CameraFocus } from "../Data/cameraPositions";
import MaskedHTML from "../Components/MaskedHTML";

export default function ScreenVending(props: JSX.IntrinsicElements["mesh"]) {
    const vendingTexture = useTexture("/textures/screens/vending.png");
    vendingTexture.flipY = false;

    return (
        <mesh {...props}>
            <MaskedHTML
                focus={CameraFocus.Projects}
                maskProps={{
                    scale: [0.63, 0.86, 1],
                    position: [0.002, 0, 0],
                    rotation: [0, -Math.PI * 0.5, Math.PI],
                }}
                maskTexture={vendingTexture}
                html={() => (
                    <Html
                        center
                        transform
                        prepend
                        position={[0.001, 0, 0]}
                        rotation-y={Math.PI * 0.5}
                        occlude={"blending"}
                        className="text-white text-3xl bg-blue-500 rounded-md text-center p-2 select-none"
                        scale={[0.05, 0.05, 1]}
                        style={{
                            width: "504px",
                            height: "690px",
                        }}
                    >
                        <Projects />
                    </Html>
                )}
            />
        </mesh>
    );
}
