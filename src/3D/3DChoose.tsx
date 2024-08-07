import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function ThreeDChoose() {
    const boxRef = useRef<Mesh>(null);
    useFrame((_, delta) => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.1 * delta;
            boxRef.current.rotation.y += 0.1 * delta;
        }
    });

    return (
        <>
            <directionalLight intensity={0.5} position={[1, 1, 1]} />
            <ambientLight intensity={0.5} />
            <Box args={[1, 1, 1]} position={[0, 0, 0]} ref={boxRef}>
                <meshStandardMaterial color="yellow" />
            </Box>
        </>
    );
}

export default ThreeDChoose;
