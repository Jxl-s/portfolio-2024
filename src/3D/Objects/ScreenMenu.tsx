import { Html } from "@react-three/drei";
import Journey from "../Interfaces/Journey";
import { CameraFocus } from "../Data/cameraPositions";
import Help3D from "../Components/Help3D";
import { useTranslation } from "react-i18next";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    const { t } = useTranslation();

    return (
        <mesh {...props}>
            <Help3D
                position={[0, 0.7, 0]}
                focus={CameraFocus.Journey}
                className="bg-cyan-600/75 hover:bg-cyan-600/100"
            >
                {t("journey")}
            </Help3D>
            <Html
                center
                transform
                prepend
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude={"blending"}
                className="text-white text-3xl bg-cyan-600 rounded-lg text-center p-2 select-none"
                style={{
                    width: "546px",
                    height: "800px",
                }}
                scale={[0.05, 0.05, 1]}
            >
                <Journey />
            </Html>
        </mesh>
    );
}
