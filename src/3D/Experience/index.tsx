import { OrbitControls, Stage, useGLTF, useTexture } from "@react-three/drei";
import Scene from "../models/Scene";
import * as THREE from "three";
import Effects from "./Effects";

export default function Experience() {
    const groundModel = useGLTF("/models/sceneGround.glb");

    const groundTexture = useTexture("/textures/bakedGround_2048x2048.jpg");
    groundTexture.flipY = false;
    groundTexture.colorSpace = THREE.SRGBColorSpace;

    const groundMaterial = new THREE.MeshBasicMaterial({ map: groundTexture });
    groundModel.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = groundMaterial;
        }
    });

    return (
        <>
            <OrbitControls
                maxAzimuthAngle={Math.PI * 0.5}
                maxPolarAngle={Math.PI * 0.5}
            />
            <Effects />
            <Stage environment={null}></Stage>
            <group rotation-y={-Math.PI * 0.5}>
                <Scene />
                <primitive object={groundModel.scene} />
            </group>
        </>
    );
}

useGLTF.preload("/models/sceneGround.glb");
