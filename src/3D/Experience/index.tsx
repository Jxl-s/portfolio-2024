import {
    Icosahedron,
    MeshReflectorMaterial,
    OrbitControls,
    Stage,
} from "@react-three/drei";
import Scene from "../Models/Scene";
import * as THREE from "three";
import Effects from "./Effects";
import NightMaterial from "../Materials/NightMaterial";
import useNightStore from "../Stores/useNightStore";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { getAsset } from "../Stores/useLoaderStore";
import {
    GLTF,
    OrbitControls as TOrbitControls,
} from "three/examples/jsm/Addons.js";
import { button, useControls } from "leva";
import useCameraStore, { positions } from "../Stores/useCameraStore";
import { useFrame, useThree } from "@react-three/fiber";
import CoffeeMaterial from "../Materials/CoffeeMaterial";

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

    const coffeeMaterial = useMemo(
        () =>
            new CoffeeMaterial({
                side: THREE.DoubleSide,
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTime: { value: 0 },
                    uPerlinTexture: { value: getAsset("perlin") },
                },
            }),
        []
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
    const boxRef2 = useRef<THREE.Mesh>(null);
    const { enablePan } = useControls({
        enablePan: false,
        changeTime: button(() => {
            const isNight = useNightStore.getState().isNight;
            useNightStore.setState({ isNight: !isNight });
        }),
    });

    // Little box flying
    const boxRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!boxRef.current) return;
        if (!boxRef2.current) return;

        boxRef.current.position.y =
            Math.abs(Math.sin(clock.getElapsedTime())) * 0.1 - 1.31;
        boxRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 2) * 0.5;
        boxRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 2) * 0.5;

        boxRef2.current.position.y =
            Math.abs(Math.sin(clock.getElapsedTime())) * 0.1 - 1;
        boxRef2.current.rotation.y = Math.sin(clock.getElapsedTime() * 2) * 0.5;
        boxRef2.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.5;

        coffeeMaterial.uniforms.uTime.value = clock.getElapsedTime();
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
            {/* Some parts moving up down */}
            <Icosahedron
                args={[0.1]}
                position={[2.09, -1.3, 1.05]}
                ref={boxRef}
            >
                <meshStandardMaterial color="#9C9443" flatShading={true} />
            </Icosahedron>
            <Icosahedron args={[0.15]} position={[-1.6, -1, 1.2]} ref={boxRef2}>
                <meshStandardMaterial color="#999999" flatShading={true} />
            </Icosahedron>

            <mesh
                position={[-1.05, -0.4, 0.1]}
                material={coffeeMaterial}
                rotation-y={Math.PI * 0.5}
            >
                <planeGeometry args={[1.7, 0.7, 16, 64]} />
            </mesh>
        </>
    );
}
