import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import MacbookModel from "./models/Macbook";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HomeScene() {
    const macbookRef = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (!macbookRef.current) return;
        macbookRef.current.rotation.y += delta * 0.5;
    });

    return (
        <>
            <directionalLight position={[0, 0, 1]} />
            <ambientLight position={[0, 0, 2]} color="white" />
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <OrbitControls makeDefault />

            {/* <Stage> */}
            <Stage environment={"studio"}>
                <mesh visible={false} position-y={1}>
                    <boxGeometry args={[4, 0, 4]} />
                </mesh>
                <group ref={macbookRef}>
                    <MacbookModel />
                </group>
            </Stage>
        </>
    );
}
