import gsap from "gsap";
import * as THREE from "three";

const allMaterials: THREE.ShaderMaterial[] = [];
export const registerMaterial = (material: THREE.ShaderMaterial) => {
    allMaterials.push(material);
};

const pulseMaterials: THREE.ShaderMaterial[] = [];
export const registerPulseMaterial = (material: THREE.ShaderMaterial) => {
    pulseMaterials.push(material);
};

export const setDarkMode = (isDarkMode: boolean) => {
    const fromValue = isDarkMode ? 0 : 1;
    const toValue = isDarkMode ? 1 : 0;

    for (const material of allMaterials) {
        gsap.fromTo(
            material.uniforms.uNightMix,
            { value: fromValue },
            { value: toValue, duration: 0.5, ease: "power2.inOut" }
        );
    }
};

export const setColorSpace = (colorSpace: THREE.ColorSpace) => {
    for (const material of allMaterials) {
        material.uniforms.uTextureDay.value.colorSpace = colorSpace;
        material.uniforms.uTextureDay.value.needsUpdate = true;

        material.uniforms.uTextureNight.value.colorSpace = colorSpace;
        material.uniforms.uTextureNight.value.needsUpdate = true;
    }

    for (const material of pulseMaterials) {
        material.uniforms.uTexture.value.colorSpace = colorSpace;
        material.uniforms.uTexture.value.needsUpdate = true;
    }
};
