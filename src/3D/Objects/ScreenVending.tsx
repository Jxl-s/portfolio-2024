import { Html } from "@react-three/drei";
import Projects from "../Interfaces/Projects";
import { CameraFocus } from "../Data/cameraPositions";
import Help3D from "../Components/Help3D";
import { useTranslation } from "react-i18next";

export default function ScreenVending(props: JSX.IntrinsicElements["mesh"]) {
    const { t } = useTranslation();

    return (
        <mesh {...props}>
            <Help3D
                position={[0, 0.65, 0]}
                focus={CameraFocus.Projects}
                className="bg-blue-700/50 hover:bg-blue-700/100"
            >
                {t("projects")}
            </Help3D>
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
        </mesh>
    );
}
