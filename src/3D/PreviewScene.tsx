// import { Text3D } from "@react-three/drei";
import { useGLTF, useTexture } from "@react-three/drei";
import StageLayout from "./StageLayout";
import * as THREE from "three";

const whiteMaterial = new THREE.MeshBasicMaterial({ color: "white" });
export default function PreviewScene() {
    const sceneModel = useGLTF("/models/scene.glb");
    const sceneTexture = useTexture("/textures/bakedScene_4096x4096.jpg");

    sceneTexture.flipY = false;
    sceneTexture.colorSpace = THREE.SRGBColorSpace;

    const sceneMaterial = new THREE.MeshBasicMaterial({ map: sceneTexture });
    sceneModel.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = sceneMaterial;
            if (child.name.toLowerCase().includes("screen")) {
                child.material = whiteMaterial;
            }
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
