import { Html } from "@react-three/drei";
import { CameraFocus } from "../Data/cameraPositions";
import useExperienceStore from "../Stores/useExperienceStore";
import { PropsWithChildren } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

interface Props {
    position: [number, number, number];
    focus: CameraFocus;
    className?: string;
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
        <Html position={position} center distanceFactor={1.5}>
            <span
                className={`text-white py-1 text-6xl flex items-center gap-4 ${
                    showLabel ? "block" : "hidden"
                } text-center rounded-lg font-semibold cursor-pointer duration-300 ${
                    className ?? ""
                }`}
                onClick={() => setCameraFocus(focus)}
            >
                <CursorArrowRaysIcon className="w-12 h-12 inline me-2" />
                {children}
            </span>
        </Html>
    );
}
