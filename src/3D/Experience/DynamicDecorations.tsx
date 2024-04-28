import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import CoffeeMaterial from "../Materials/CoffeeMaterial";
import { getAsset } from "../Stores/useLoaderStore";

const floaterGeometry = new THREE.IcosahedronGeometry(1, 1);

export default function Decoration() {
    // Little boxes
    const boxRef = useRef<THREE.Mesh>(null);
    const boxRef2 = useRef<THREE.Mesh>(null);

    // Coffee
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
            {/* Balls floating on top of barrels */}
            <mesh
                scale={[0.1, 0.1, 0.1]}
                position={[2.09, -1.3, 1.05]}
                ref={boxRef}
                geometry={floaterGeometry}
            >
                <meshStandardMaterial
                    color="#9C9443"
                    flatShading={true}
                    roughness={1}
                    metalness={0}
                />
            </mesh>
            <mesh
                scale={[0.15, 0.15, 0.15]}
                position={[-1.6, -1, 1.2]}
                ref={boxRef2}
                geometry={floaterGeometry}
            >
                <meshStandardMaterial
                    color="#999999"
                    flatShading={true}
                    roughness={1}
                    metalness={0}
                />
            </mesh>

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
