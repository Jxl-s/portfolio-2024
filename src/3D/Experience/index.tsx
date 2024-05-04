import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";
import Scene from "./Scene";
import * as THREE from "three";
import Effects from "./Effects";
import NightMaterial from "../Materials/NightMaterial";
import { useEffect, useMemo } from "react";
import { getAsset } from "../Stores/useLoaderStore";
import { GLTF } from "three/examples/jsm/Addons.js";
import { button, useControls } from "leva";
import Decoration from "./DynamicDecorations";
import useExperienceStore from "../Stores/useExperienceStore";
import { registerMaterial, setDarkMode } from "../Materials";

export default function Experience() {
    const isDarkMode = useExperienceStore((state) => state.isDarkMode);
    const isLowDetailMode = useExperienceStore(
        (state) => state.isLowDetailMode
    );
    const groundModel = getAsset("sceneGround") as GLTF;

    // Load ground material
    const groundTexture = getAsset("groundTexture") as THREE.Texture;
    groundTexture.flipY = false;
    if (!isLowDetailMode) groundTexture.colorSpace = THREE.SRGBColorSpace;

    const groundTextureNight = getAsset("groundTextureNight") as THREE.Texture;
    groundTextureNight.flipY = false;
    if (!isLowDetailMode) groundTextureNight.colorSpace = THREE.SRGBColorSpace;

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
    if (!isLowDetailMode) sceneTexture.colorSpace = THREE.SRGBColorSpace;

    const sceneTextureNight = getAsset("sceneTextureNight") as THREE.Texture;
    sceneTextureNight.flipY = false;
    if (!isLowDetailMode) sceneTextureNight.colorSpace = THREE.SRGBColorSpace;

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

    useEffect(() => {
        registerMaterial(sceneMaterial);
        registerMaterial(groundMaterial);
    }, []);

    // Handle night mode
    useEffect(() => {
        setDarkMode(isDarkMode);
    }, [isDarkMode]);

    // Debug UI
    const { enablePan } = useControls({
        enablePan: false,
        changeTime: button(() => {
            const isDarkMode = useExperienceStore.getState().isDarkMode;
            useExperienceStore.setState({ isDarkMode: !isDarkMode });
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
            {!isLowDetailMode && <Effects />}
            <Stage adjustCamera={0.6} environment={null} />
            <directionalLight position={[0, 10, 10]} intensity={10} />
            <group rotation-y={-Math.PI * 0.5} position-y={-2}>
                <Scene material={sceneMaterial} />
                <primitive object={groundModel.scene} />

                <mesh rotation-x={-Math.PI * 0.5} position-y={0.17}>
                    <MeshReflectorMaterial
                        mirror={1}
                        resolution={1024}
                        opacity={!isLowDetailMode ? 0.01 : 0.05}
                        transparent={true}
                    />
                    <planeGeometry args={[14.5, 16]} />
                </mesh>
            </group>
            <Decoration />
        </>
    );
}
