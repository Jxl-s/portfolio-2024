import * as THREE from "three";
import gsap from "gsap";
import type { OrbitControls } from "three/examples/jsm/Addons.js";

export const positions = {
    home: [[2.5, 0.5, 5], [0, 0, 0], 1],
    aboutMe: [[0.1, 2.05, -0.8], [0.05, 2.05, -2], 1],
    projects: [[-1.2, -0.9, -3], [-1.2, -0.9, 1], 1],
    journey: [[2.3, -0.25, 0.8], [2.3, -0.25, -2], 1],
    contact: [[0.1, 2.05, 0], [0.05, 2.05, -2], 1],
} as {
    [key: string]: [[number, number, number], [number, number, number], number];
};

export const moveTo = (
    camera: THREE.Camera,
    controls: OrbitControls,
    position: [number[], number[], number]
) => {
    let zMult = 1;

    if (window.innerWidth < 600) {
        zMult = 1.5;
    }

    gsap.to(camera.position, {
        x: position[0][0],
        y: position[0][1],
        z: position[0][2] * zMult,
        duration: 1,
        ease: "sine.inOut"
    });

    gsap.to(controls.target, {
        x: position[1][0],
        y: position[1][1],
        z: position[1][2],
        duration: 1,
        ease: "sine.inOut",
    });
};
