import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";
import Scene from "../Models/Scene";
import * as THREE from "three";
import Effects from "./Effects";
import NightMaterial from "../Materials/NightMaterial";
import useNightStore from "../Stores/useNightStore";
import { useEffect, useMemo } from "react";
import gsap from "gsap";
import { getAsset } from "../Stores/useLoaderStore";
import {
    GLTF,
    OrbitControls as TOrbitControls,
} from "three/examples/jsm/Addons.js";
import { button, useControls } from "leva";
import useCameraStore, { positions } from "../Stores/useCameraStore";
import { useThree } from "@react-three/fiber";
import Decoration from "./Decoration";

export default function Experience() {
    const { controls, camera } = useThree();
    const isNight = useNightStore((state) => state.isNight);
    const groundModel = getAsset("sceneGround") as GLTF;

    // Load ground material
    const groundTexture = getAsset("groundTexture") as THREE.Texture;
    groundTexture.flipY = false;
    groundTexture.colorSpace = THREE.SRGBColorSpace;

    const groundTextureNight = getAsset("groundTextureNight") as THREE.Texture;
    groundTextureNight.flipY = false;
    groundTextureNight.colorSpace = THREE.SRGBColorSpace;

    const groundMaterial = useMemo(
        () =>
            new NightMaterial({
                // @ts-expect-error Ignore this
                uTextureDay: groundTexture,
                uTextureNight: groundTextureNight,
                uNightMix: 0,
            }),
        [groundTexture, groundTextureNight]
    );

    useEffect(() => {
        groundModel.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = groundMaterial;
            }
        });
    }, [groundMaterial, groundModel, groundTexture, groundTextureNight]);

    // Load scene material
    const sceneTexture = getAsset("sceneTexture") as THREE.Texture;
    sceneTexture.flipY = false;
    sceneTexture.colorSpace = THREE.SRGBColorSpace;

    const sceneTextureNight = getAsset("sceneTextureNight") as THREE.Texture;
    sceneTextureNight.flipY = false;
    sceneTextureNight.colorSpace = THREE.SRGBColorSpace;

    const sceneMaterial = useMemo(
        () =>
            new NightMaterial({
                // @ts-expect-error Ignore this
                uTextureDay: sceneTexture,
                uTextureNight: sceneTextureNight,
                uNightMix: 0,
            }),
        [sceneTexture, sceneTextureNight]
    );

    // Handle night mode
    useEffect(() => {
        const fromValue = isNight ? 0 : 1;
        const toValue = isNight ? 1 : 0;

        gsap.fromTo(
            sceneMaterial.uniforms.uNightMix,
            { value: fromValue },
            { value: toValue, duration: 0.5, ease: "power2.inOut" }
        );

        gsap.fromTo(
            groundMaterial.uniforms.uNightMix,
            { value: fromValue },
            { value: toValue, duration: 0.5, ease: "power2.inOut" }
        );
    }, [
        groundMaterial.uniforms.uNightMix,
        isNight,
        sceneMaterial.uniforms.uNightMix,
    ]);

    // Handle camera transitions
    const focus = useCameraStore((state) => state.focus);
    useEffect(() => {
        if (!controls) return;
        if (focus === null) return;

        (controls as TOrbitControls).enableRotate = focus === "home";

        // Move the camera and target
        gsap.to(camera.position, {
            x: positions[focus].position[0],
            y: positions[focus].position[1],
            z: positions[focus].position[2],
            duration: 1,
            ease: "sine.inOut",
        });

        gsap.to((controls as TOrbitControls).target, {
            x: positions[focus].target[0],
            y: positions[focus].target[1],
            z: positions[focus].target[2],
            duration: 1,
            ease: "sine.inOut",
        });
    }, [camera.position, controls, focus]);

    // Debug UI
    const { enablePan } = useControls({
        enablePan: false,
        changeTime: button(() => {
            const isNight = useNightStore.getState().isNight;
            useNightStore.setState({ isNight: !isNight });
        }),
    });

    return (
        <>
            <OrbitControls
                maxAzimuthAngle={Math.PI * 0.5}
                maxPolarAngle={Math.PI * 0.5}
                enablePan={enablePan}
                makeDefault
            />
            <Effects />
            <Stage adjustCamera={0.6} environment={null} />
            <directionalLight position={[0, 10, 10]} intensity={10} />
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
            <Decoration />
        </>
    );
}
