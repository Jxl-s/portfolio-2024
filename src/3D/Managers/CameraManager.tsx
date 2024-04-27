import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import type { OrbitControls } from "three/examples/jsm/Addons.js";
import gsap from "gsap";

import useCameraStore, { positions } from "../Stores/useCameraStore";
import { playSound } from "../../util/sound";

export default function CameraManager() {
    const { camera, controls } = useThree();

    // Handle camera transitions
    const focus = useCameraStore((state) => state.focus);
    useEffect(() => {
        if (!controls || !camera) return;
        if (!focus) return;

        // When focus changes, disable rotation
        (controls as OrbitControls).enableRotate = focus === "home";
        playSound("whoosh.mp3");

        // Move the camera and target
        gsap.to(camera.position, {
            x: positions[focus].position[0],
            y: positions[focus].position[1],
            z: positions[focus].position[2],
            duration: 1,
            ease: "sine.inOut",
        });

        gsap.to((controls as OrbitControls).target, {
            x: positions[focus].target[0],
            y: positions[focus].target[1],
            z: positions[focus].target[2],
            duration: 1,
            ease: "sine.inOut",
        });
    }, [controls, focus]);

    return null;
}
