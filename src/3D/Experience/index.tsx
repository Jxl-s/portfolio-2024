import {
    MeshReflectorMaterial,
    OrbitControls,
    // useDetectGPU,
} from "@react-three/drei";
import Scene from "./Scene";
import * as THREE from "three";
import Effects from "./Effects";
import NightMaterial from "../Materials/NightMaterial";
import { useEffect, useMemo, useRef } from "react";
import { getAsset } from "../Stores/useLoaderStore";
import { GLTF } from "three/examples/jsm/Addons.js";
import { button, useControls } from "leva";
import Decoration from "./DynamicDecorations";
import useExperienceStore from "../Stores/useExperienceStore";
import { registerMaterial, setColorSpace, setDarkMode } from "../Materials";
import { CameraFocus } from "../Data/cameraPositions";

export default function Experience() {
    const isDarkMode = useExperienceStore((state) => state.isDarkMode);
    const detailLevel = useExperienceStore((state) => state.detailLevel);

    const groundModel = getAsset("sceneGround") as GLTF;

    // Load ground material
    const [groundTexture, groundTextureNight] = useMemo(() => {
        // day
        const texture = getAsset("groundTexture") as THREE.Texture;
        texture.flipY = false;

        // night
        const textureNight = getAsset("groundTextureNight") as THREE.Texture;
        textureNight.flipY = false;

        return [texture, textureNight];
    }, [detailLevel]);

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
    }, [groundMaterial, groundModel]);

    // Load scene material
    const [sceneTexture, sceneTextureNight] = useMemo(() => {
        // day
        const texture = getAsset("sceneTexture") as THREE.Texture;
        texture.flipY = false;

        // night
        const textureNight = getAsset("sceneTextureNight") as THREE.Texture;
        textureNight.flipY = false;

        return [texture, textureNight];
    }, [detailLevel]);

    // Handle detail levels
    useEffect(() => {
        const newColorSpace =
            detailLevel > 1 ? THREE.SRGBColorSpace : THREE.NoColorSpace;

        setColorSpace(newColorSpace);
    }, [detailLevel]);

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
        // Register materials
        registerMaterial(sceneMaterial);
        registerMaterial(groundMaterial);
    }, [sceneMaterial, groundMaterial]);

    // Handle night mode
    useEffect(() => {
        setDarkMode(isDarkMode);
    }, [isDarkMode]);

    // Handle default detail level
    // const GPUTier = useDetectGPU();
    // useEffect(() => {
    //     if (!GPUTier.isMobile) {
    //         useExperienceStore.setState({ detailLevel: 2 });
    //     }
    // }, []);

    // Debug UI
    const meshRef = useRef<THREE.Mesh>(null);
    const { enablePan } = useControls({
        enablePan: false,
        changeTime: button(() => {
            const isDarkMode = useExperienceStore.getState().isDarkMode;
            useExperienceStore.setState({ isDarkMode: !isDarkMode });
        }),
        pos: {
            value: [0, 0, 0],
            step: 0.1,
            onChange: (pos: [number, number, number]) => {
                if (meshRef.current) {
                    meshRef.current.position.set(...pos);
                }
            },
        },
    });

    useEffect(() => {
        setTimeout(() => {
            useExperienceStore.setState({
                cameraFocus: CameraFocus.Navigation,
                isReady: true,
            });
        }, 100);
    }, []);

    return (
        <>
            <OrbitControls
                maxAzimuthAngle={Math.PI * 0.5}
                maxPolarAngle={Math.PI * 0.5}
                enablePan={enablePan}
                makeDefault
            />
            {detailLevel > 1 && <Effects />}
            {/* This is for future debugging and finding positions */}
            {/* <mesh ref={meshRef}>
                <boxGeometry args={[0.1, 0.1, 0.1]} />
            </mesh> */}
            {/* <Stage adjustCamera={0.6} environment={null} /> */}
            <directionalLight position={[0, 10, 10]} intensity={10} />
            <group rotation-y={-Math.PI * 0.5} position-y={-2}>
                <Scene material={sceneMaterial} />
                <primitive object={groundModel.scene} />

                <mesh rotation-x={-Math.PI * 0.5} position-y={0.17}>
                    <MeshReflectorMaterial
                        mirror={1}
                        resolution={1024}
                        opacity={detailLevel > 1 ? 0.005 : 0.03}
                        transparent={true}
                    />
                    <planeGeometry args={[14.5, 16]} />
                </mesh>
            </group>
            <Decoration />
        </>
    );
}
