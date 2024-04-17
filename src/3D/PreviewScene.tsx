// import { Text3D } from "@react-three/drei";
import { useGLTF, useTexture } from "@react-three/drei";
import StageLayout from "./StageLayout";
import * as THREE from "three";

// const indigoMaterial = new THREE.MeshStandardMaterial({ color: "#6f55b7" });
// const whiteMaterial = new THREE.MeshStandardMaterial({ color: "#b7556f" });

export default function PreviewScene() {
    const sceneModel = useGLTF("/models/scene.glb");
    const sceneTexture = useTexture("/textures/baked.jpg");

    sceneTexture.flipY = false;
    sceneTexture.colorSpace = THREE.SRGBColorSpace;

    const sceneMaterial = new THREE.MeshBasicMaterial({ map: sceneTexture });
    sceneModel.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = sceneMaterial;
        }
    });

    return (
        <>
            <StageLayout box={[8, 4, 8]} offset={[0, 2, 0]}>
                <primitive
                    object={sceneModel.scene}
                    rotation-y={-Math.PI * 0.5}
                />
            </StageLayout>
        </>
    );
}
