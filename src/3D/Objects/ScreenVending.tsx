import { Html, useTexture } from "@react-three/drei";
import Projects from "../Interfaces/Projects";
// import { CameraFocus } from "../Data/cameraPositions";
// import Help3D from "../Components/Help3D";
// import { useTranslation } from "react-i18next";
import { registerPulseMaterial } from "../Materials";
import { CameraFocus } from "../Data/cameraPositions";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useExperienceStore from "../Stores/useExperienceStore";
import PulseMaterial from "../Materials/PulseMaterial";

export default function ScreenVending(props: JSX.IntrinsicElements["mesh"]) {
    // const { t } = useTranslation();
    const vendingTexture = useTexture("/textures/screens/vending.png");
    vendingTexture.flipY = false;

    const vendingMaterial = new PulseMaterial({
        // @ts-expect-error Ignore this
        uTexture: vendingTexture,
        uTime: 0,
    });

    vendingMaterial.side = THREE.BackSide;
    registerPulseMaterial(vendingMaterial);

    useFrame((_, delta) => {
        if (vendingMaterial.uniforms.uPause.value) return;
        vendingMaterial.uniforms.uTime.value += delta;
    });

    const handleMeshEnter = () => {
        vendingMaterial.uniforms.uPause.value = true;
        document.body.style.cursor = "pointer";
    };

    const handleMeshLeave = () => {
        vendingMaterial.uniforms.uPause.value = false;
        document.body.style.cursor = "auto";
    };

    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const handleMeshClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        setCameraFocus(CameraFocus.Projects);
        document.body.style.cursor = "auto";
    };

    return (
        <mesh {...props}>
            {cameraFocus !== CameraFocus.Projects && (
                <mesh
                    scale={[0.63, 0.86, 1]}
                    position={[0.002, 0, 0]}
                    rotation={[0, -Math.PI * 0.5, Math.PI]}
                    onPointerEnter={handleMeshEnter}
                    onPointerLeave={handleMeshLeave}
                    onClick={handleMeshClick}
                    material={vendingMaterial}
                >
                    <planeGeometry args={[1, 1]} />
                </mesh>
            )}
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
                    display:
                        cameraFocus === CameraFocus.Projects ? "block" : "none",
                }}
            >
                <Projects />
            </Html>
        </mesh>
    );
}
