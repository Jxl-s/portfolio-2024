import { Html, useTexture } from "@react-three/drei";
import Journey from "../Interfaces/Journey";
import { menuGradient } from "../Data/gradients";
import { CameraFocus } from "../Data/cameraPositions";
import MaskedHTML from "../Components/MaskedHTML";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    // const { t } = useTranslation();
    const menuTexture = useTexture("/textures/screens/menu.webp");
    menuTexture.flipY = false;

    return (
        <mesh {...props}>
            <MaskedHTML
                focus={CameraFocus.Journey}
                maskProps={{
                    scale: [0.68, 1, 1],
                    position: [0, 0, -0.001],
                    rotation: [0, 0, Math.PI],
                }}
                maskTexture={menuTexture}
                html={() => (
                    <Html
                        center
                        transform
                        prepend
                        position={[0, -0.02, -0.001]}
                        rotation-y={Math.PI}
                        occlude={"blending"}
                        className="text-white text-3xl rounded-lg text-center p-2 select-none"
                        style={{
                            width: "546px",
                            height: "800px",
                            background: menuGradient,
                        }}
                        scale={[0.052, 0.052, 1]}
                    >
                        <Journey />
                    </Html>
                )}
            />
        </mesh>
    );
}
