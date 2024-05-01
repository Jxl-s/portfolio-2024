import { Html } from "@react-three/drei";
import { CameraFocus } from "../Data/cameraPositions";
import useExperienceStore from "../Stores/useExperienceStore";
import { PropsWithChildren } from "react";
import "./Help3D.css";

interface Props {
    position: [number, number, number];
    focus: CameraFocus;
    className: string;
}

export default function Help3D({
    position,
    className,
    focus,
    children,
}: PropsWithChildren<Props>) {
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const showLabel =
        cameraFocus === CameraFocus.None || cameraFocus === CameraFocus.Home;

    return (
        <Html position={position} center distanceFactor={6}>
            <span
                className={`help3D text-white py-1 ${
                    showLabel ? "block" : "hidden"
                } text-center rounded-lg font-semibold cursor-pointer duration-300 ${className}`}
                style={{ width: "120px" }}
                onClick={() => setCameraFocus(focus)}
            >
                {children}
            </span>
        </Html>
    );
}
