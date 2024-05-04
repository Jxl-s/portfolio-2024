import { Html } from "@react-three/drei";
import About from "../Interfaces/About";
import { CameraFocus } from "../Data/cameraPositions";
import Help3D from "../Components/Help3D";
import { useTranslation } from "react-i18next";
import { aboutGradient } from "../Data/gradients";

export default function ScreenAbout(props: JSX.IntrinsicElements["mesh"]) {
    const { t } = useTranslation();

    return (
        <mesh {...props}>
            <Help3D
                position={[0.45, 0, 0]}
                focus={CameraFocus.AboutMe}
                className="bg-blue-800/50 hover:bg-blue-800/100"
            >
                {t("about")}
            </Help3D>
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
                scale={[0.05, 0.05, 1]}
            >
                <About />
            </Html>
        </mesh>
    );
}
