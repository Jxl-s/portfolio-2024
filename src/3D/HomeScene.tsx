import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HomeScene() {
    const boxRef1 = useRef<THREE.Mesh>(null);
    const boxRef2 = useRef<THREE.Mesh>(null);
    const boxRef3 = useRef<THREE.Mesh>(null);

    // make it move up down and rotate
    useFrame((_, delta) => {
        if (!boxRef1.current) return;
        if (!boxRef2.current) return;
        if (!boxRef3.current) return;

        boxRef1.current.rotation.x += delta;
        boxRef1.current.rotation.y += delta;

        boxRef2.current.rotation.y += delta;
        boxRef2.current.rotation.z += delta;

        boxRef3.current.rotation.z += delta;
        boxRef3.current.rotation.x += delta;
    });

    return (
        <>
            <directionalLight position={[0, 0, 1]} />
            <ambientLight position={[0, 0, 2]} color="white" />
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <OrbitControls makeDefault />

            {/* <Stage> */}
            <mesh position-x={-4} ref={boxRef1}>
                <torusKnotGeometry />
                <meshStandardMaterial color="yellow" />
            </mesh>
            <mesh ref={boxRef2}>
                <dodecahedronGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
            <mesh position-x={4} ref={boxRef3} scale={[2, 2, 2]}>
                <boxGeometry />
                <meshStandardMaterial color="lightblue" />
            </mesh>
            {/* </Stage> */}
        </>
    );
}
