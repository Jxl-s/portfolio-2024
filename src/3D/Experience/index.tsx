import {
    MeshReflectorMaterial,
    OrbitControls,
    Stage,
    useGLTF,
    useTexture,
} from "@react-three/drei";
import Scene from "../Models/Scene";
import * as THREE from "three";
import Effects from "./Effects";
import NightMaterial from "../Materials/NightMaterial";
import useNightStore from "../Stores/useNightStore";
import { useEffect } from "react";
import gsap from "gsap";

export default function Experience() {
    const isNight = useNightStore((state) => state.isNight);
    const groundModel = useGLTF("/models/sceneGround.glb");

    // Load ground material
    const groundTexture = useTexture("/textures/bakedGround_2048x2048.jpg");
    groundTexture.flipY = false;
    groundTexture.colorSpace = THREE.SRGBColorSpace;

    const groundTextureNight = useTexture(
        "/textures/bakedGroundNight_2048x2048.jpg"
    );
    groundTextureNight.flipY = false;
    groundTextureNight.colorSpace = THREE.SRGBColorSpace;

    const groundMaterial = new NightMaterial({
        // @ts-expect-error Ignore this
        uTextureDay: groundTexture,
        uTextureNight: groundTextureNight,
        uNightMix: 0,
    });

    groundModel.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = groundMaterial;
        }
    });

    // Load scene material
    const sceneTexture = useTexture("/textures/baked_8192x8192.jpg");
    sceneTexture.flipY = false;
    sceneTexture.colorSpace = THREE.SRGBColorSpace;

    const sceneTextureNight = useTexture("/textures/bakedNight_8192x8192.jpg");
    sceneTextureNight.flipY = false;
    sceneTextureNight.colorSpace = THREE.SRGBColorSpace;

    const sceneMaterial = new NightMaterial({
        // @ts-expect-error Ignore this
        uTextureDay: sceneTexture,
        uTextureNight: sceneTextureNight,
        uNightMix: 0,
    });

    useEffect(() => {
        const fromValue = isNight ? 0 : 1;
        const toValue = isNight ? 1 : 0;

        gsap.fromTo(
            sceneMaterial.uniforms.uNightMix,
            { value: fromValue },
            { value: toValue, duration: 1 }
        );

        gsap.fromTo(
            groundMaterial.uniforms.uNightMix,
            { value: fromValue },
            { value: toValue, duration: 1 }
        );
    }, [groundMaterial.uniforms.uNightMix, isNight, sceneMaterial.uniforms.uNightMix]);

    return (
        <>
            <OrbitControls
                maxAzimuthAngle={Math.PI * 0.5}
                maxPolarAngle={Math.PI * 0.5}
                enablePan={false}
                makeDefault
            />
            <Effects />
            <Stage adjustCamera={0.6} />

            <group rotation-y={-Math.PI * 0.5} position-y={-2}>
                <Scene material={sceneMaterial} />
                <primitive object={groundModel.scene} />

                <mesh rotation-x={-Math.PI * 0.5} position-y={0.17}>
                    <MeshReflectorMaterial
                        mirror={1}
                        resolution={1024}
                        opacity={0.01}
                        transparent={true}
                    />
                    <planeGeometry args={[14.5, 16]} />
                </mesh>
            </group>
        </>
    );
}

useGLTF.preload("/models/sceneGround.glb");
