import playSound from "../Utils/playSound";
import useExperienceStore from "../Stores/useExperienceStore";
import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { registerMaterial } from "../Materials";

export default function PowerBank(props: JSX.IntrinsicElements["mesh"]) {
    const material = useMemo(() => {
        return (props.material as THREE.Material).clone();
    }, [props.material]) as THREE.ShaderMaterial;

    useEffect(() => {
        registerMaterial(material);
    }, [material]);

    const [isDarkMode, setIsDarkMode] = useExperienceStore((state) => [
        state.isDarkMode,
        state.setIsDarkMode,
    ]);

    const onPointerEnter = () => {
        document.body.style.cursor = "pointer";
        // material.uniforms.uTime.value = 0;
        // material.uniforms.uMakeBright.value = true;
    };

    const onPointerLeave = () => {
        document.body.style.cursor = "auto";
        // material.uniforms.uMakeBright.value = false;
    };

    const onClick = () => {
        if (!props.material) return;

        playSound("powerSwitchAudio");
        setIsDarkMode(!isDarkMode);
    };

    useFrame((_, delta) => {
        material.uniforms.uTime.value += delta;
        material.uniforms.uMakeBright.value = true;
    });

    return (
        <mesh
            {...props}
            material={material}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onClick={onClick}
        />
    );
}
