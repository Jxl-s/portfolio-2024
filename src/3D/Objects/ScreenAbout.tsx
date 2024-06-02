import { Html, useTexture } from "@react-three/drei";
import About from "../Interfaces/About";
// import { CameraFocus } from "../Data/cameraPositions";
// import Help3D from "../Components/Help3D";
// import { useTranslation } from "react-i18next";
import * as THREE from "three";
import PulseMaterial from "../Materials/PulseMaterial";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { aboutGradient } from "../Data/gradients";
import useExperienceStore from "../Stores/useExperienceStore";
import { useRef } from "react";
import { CameraFocus } from "../Data/cameraPositions";
import { registerPulseMaterial } from "../Materials";

export default function ScreenAbout(props: JSX.IntrinsicElements["mesh"]) {
    // const { t } = useTranslation();
    const welcomeTexture = useTexture("/textures/screens/welcome.webp");
    welcomeTexture.flipY = false;

    const welcomeMaterial = new PulseMaterial({
        // @ts-expect-error Ignore this
        uTexture: welcomeTexture,
        uTime: 0,
    });

    welcomeMaterial.side = THREE.BackSide;
    registerPulseMaterial(welcomeMaterial);

    useFrame((_, delta) => {
        if (welcomeMaterial.uniforms.uPause.value) return;
        welcomeMaterial.uniforms.uTime.value += delta;
    });

    const handleMeshEnter = () => {
        welcomeMaterial.uniforms.uPause.value = true;
        document.body.style.cursor = "pointer";
    };

    const handleMeshLeave = () => {
        welcomeMaterial.uniforms.uPause.value = false;
        document.body.style.cursor = "auto";
    };

    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const maskRef = useRef<THREE.Mesh>(null);
    const handleMeshClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        setCameraFocus(CameraFocus.AboutMe);
        document.body.style.cursor = "auto";
    };

    return (
        <mesh {...props}>
            {cameraFocus !== CameraFocus.AboutMe && (
                <mesh
                    position={[0, 0, -0.002]}
                    scale={[0.95, 0.65, 1]}
                    rotation={[0, 0, Math.PI * 0.5]}
                    material={welcomeMaterial}
                    onPointerEnter={handleMeshEnter}
                    onPointerLeave={handleMeshLeave}
                    onClick={handleMeshClick}
                    ref={maskRef}
                >
                    <planeGeometry args={[1, 1]} />
                </mesh>
            )}
            {cameraFocus === CameraFocus.AboutMe && (
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
        </mesh>
    );
}
