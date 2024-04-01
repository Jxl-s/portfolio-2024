import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HomeScene() {
    const boxRef = useRef<THREE.Mesh>(null);

    // make it move up down and rotate
    useFrame((_, delta) => {
        if (!boxRef.current) return;
        boxRef.current.rotation.y += delta;
    });

    return (
        <>
            <directionalLight />
            <ambientLight />

            {/* <Stage> */}
            <mesh ref={boxRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
            {/* </Stage> */}
        </>
    );
}
