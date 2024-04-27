import * as THREE from "three";
import gsap from "gsap";

interface Props {
    material: THREE.MeshBasicMaterial;
    color1: THREE.Color;
    color2: THREE.Color;
    timeout: number;
    delay?: number;
}

export default function animatedMaterial({
    material,
    color1,
    color2,
    timeout,
}: Props) {
    let i = 0;

    const interval = setInterval(() => {
        gsap.to(material.color, {
            r: i % 2 === 0 ? color1.r : color2.r,
            g: i % 2 === 0 ? color1.g : color2.g,
            b: i % 2 === 0 ? color1.b : color2.b,

            duration: timeout * 0.001,
            ease: "power2.inOut",
        });

        i++;
        i = i % 2;
    }, timeout);

    return interval;
}
