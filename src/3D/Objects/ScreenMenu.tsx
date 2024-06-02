import { Html, useTexture } from "@react-three/drei";
import Journey from "../Interfaces/Journey";
// import { CameraFocus } from "../Data/cameraPositions";
// import Help3D from "../Components/Help3D";
// import { useTranslation } from "react-i18next";
import { menuGradient } from "../Data/gradients";
import { registerPulseMaterial } from "../Materials";
import { CameraFocus } from "../Data/cameraPositions";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useExperienceStore from "../Stores/useExperienceStore";
import PulseMaterial from "../Materials/PulseMaterial";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    // const { t } = useTranslation();
    const menuTexture = useTexture("/textures/screens/menu.webp");
    menuTexture.flipY = false;

    const menuMaterial = new PulseMaterial({
        // @ts-expect-error Ignore this
        uTexture: menuTexture,
        uTime: 0,
    });

    menuMaterial.side = THREE.BackSide;
    registerPulseMaterial(menuMaterial);

    useFrame((_, delta) => {
        if (menuMaterial.uniforms.uPause.value) return;
        menuMaterial.uniforms.uTime.value += delta;
    });

    const handleMeshEnter = () => {
        menuMaterial.uniforms.uPause.value = true;
        document.body.style.cursor = "pointer";
    };

    const handleMeshLeave = () => {
        menuMaterial.uniforms.uPause.value = false;
        document.body.style.cursor = "auto";
    };

    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const handleMeshClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        setCameraFocus(CameraFocus.Journey);
        document.body.style.cursor = "auto";
    };

    return (
        <mesh {...props}>
            {cameraFocus !== CameraFocus.Journey && (
                <mesh
                    scale={[0.68, 1, 1]}
                    position={[0, 0, -0.001]}
                    rotation={[0, 0, Math.PI]}
                    onPointerEnter={handleMeshEnter}
                    onPointerLeave={handleMeshLeave}
                    onClick={handleMeshClick}
                    material={menuMaterial}
                >
                    <planeGeometry args={[1, 1]} />
                </mesh>
            )}
            {cameraFocus === CameraFocus.Journey && (
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
        </mesh>
    );
}
