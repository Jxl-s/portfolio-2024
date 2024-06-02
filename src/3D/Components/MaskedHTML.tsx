import { MeshProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { CameraFocus } from "../Data/cameraPositions";
import useExperienceStore from "../Stores/useExperienceStore";
import * as THREE from "three";
import PulseMaterial from "../Materials/PulseMaterial";
import { registerPulseMaterial } from "../Materials";

interface Props {
    focus: CameraFocus;
    maskProps: MeshProps;
    maskTexture: THREE.Texture;
    html: () => React.ReactElement;
}

export default function MaskedHTML({
    focus,
    maskProps,
    maskTexture,
    html,
}: Props) {
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const showMask = cameraFocus !== focus;
    const screenMaterial = new PulseMaterial({
        // @ts-expect-error Ignore this
        uTexture: maskTexture,
        uTime: 0,
    });

    screenMaterial.side = THREE.BackSide;
    registerPulseMaterial(screenMaterial);

    useFrame((_, delta) => {
        if (screenMaterial.uniforms.uPause.value) return;
        screenMaterial.uniforms.uTime.value += delta;
    });

    const handleMeshEnter = () => {
        screenMaterial.uniforms.uPause.value = true;
        document.body.style.cursor = "pointer";
    };

    const handleMeshLeave = () => {
        screenMaterial.uniforms.uPause.value = false;
        document.body.style.cursor = "auto";
    };

    const handleMeshClick = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        setCameraFocus(focus);
        document.body.style.cursor = "auto";
    };

    return (
        <>
            <mesh
                {...maskProps}
                onPointerEnter={handleMeshEnter}
                onPointerLeave={handleMeshLeave}
                onClick={handleMeshClick}
                material={screenMaterial}
                visible={showMask}
            >
                <planeGeometry args={[1, 1]} />
            </mesh>
            {!showMask && html()}
        </>
    );
}
