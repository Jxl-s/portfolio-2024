import * as THREE from "three";
import gsap from "gsap";
import type { OrbitControls } from "three/examples/jsm/Addons.js";

export const positions = {
    aboutMe: [
        [0, 0, 0],
        [0, 0, -1],
    ],
    projects: [
        [-1.2, -0.9, -3],
        [-1.2, -0.9, -0.05],
    ],
    journey: [
        [2, 0, -5],
        [0, 0, 1],
    ],
    contact: [
        [0, 0, 0],
        [0, 0, -1],
    ],
};

export const moveTo = (
    camera: THREE.Camera,
    controls: OrbitControls,
    position: number[][]
) => {
    gsap.to(camera.position, {
        x: position[0][0],
        y: position[0][1],
        z: position[0][2],
        duration: 2,
        ease: "power2.inOut",
    });

    gsap.to(controls.target, {
        x: position[1][0],
        y: position[1][1],
        z: position[1][2],
        duration: 2,
        ease: "power2.inOut",
    });
};