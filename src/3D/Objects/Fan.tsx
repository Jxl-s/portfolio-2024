import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import playSound from "../Utils/playSound";

const hitboxGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
export default function Fan(props: JSX.IntrinsicElements["mesh"]) {
    const fanRef = useRef<THREE.Mesh>(null);
    const spinSpeed = useMemo(() => Math.random() * 4 + 4, []);
    const spinSpeedMult = useRef(1);

    useFrame((_, delta) => {
        if (!fanRef.current) return;
        fanRef.current.rotation.x += delta * spinSpeed * spinSpeedMult.current;
    });

    const onPointerEnter = () => {
        document.body.style.cursor = "pointer";
    };

    const onPointerLeave = () => {
        document.body.style.cursor = "auto";
    };

    const onClick = () => {
        if (spinSpeedMult.current === 1) {
            playSound("fanStopAudio");

            gsap.to(spinSpeedMult, {
                current: 0,
                duration: 1,
                ease: "power2.inOut",
            });
        } else if (spinSpeedMult.current === 0) {
            playSound("fanStartAudio");

            gsap.to(spinSpeedMult, {
                current: 1,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    };

    return (
        <mesh ref={fanRef} {...props}>
            <mesh
                geometry={hitboxGeometry}
                rotation={[Math.PI * 0.5, 0, Math.PI * 0.5]}
                visible={false}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onClick={onClick}
            />
        </mesh>
    );
}
