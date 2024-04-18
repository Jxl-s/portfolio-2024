import {
    MeshReflectorMaterial,
    OrbitControls,
    Stage,
    useGLTF,
    useTexture,
} from "@react-three/drei";
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
            <Stage>
                <mesh position={[0, 2, 0]} visible={false}>
                    <boxGeometry args={[8, 4, 8]} />
                </mesh>
            </Stage>
            <group rotation-y={-Math.PI * 0.5} position-y={-2}>
                <Scene />
                <primitive object={groundModel.scene} />
                <mesh rotation-x={-Math.PI * 0.5} position-y={0.17}>
                    <MeshReflectorMaterial
                        mirror={1}
                        opacity={0.01}
                        transparent={true}
                    />
                    {/* <meshBasicMaterial color="red" /> */}
                    <planeGeometry args={[14.5, 16]} />
                </mesh>
            </group>
        </>
    );
}

useGLTF.preload("/models/sceneGround.glb");
