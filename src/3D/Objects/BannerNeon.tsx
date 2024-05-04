import { useEffect } from "react";
import * as THREE from "three";
import animatedMaterial from "../Utils/animatedMaterial";

const bannerColor1 = new THREE.Color(0x76e8ff);
const bannerColor2 = new THREE.Color(0xffffff);

const bannerNeonMaterial = new THREE.MeshBasicMaterial({
    color: bannerColor1.clone(),
    toneMapped: false,
});

export default function BannerNeon(props: JSX.IntrinsicElements["mesh"]) {
    useEffect(() => {
        const interval = animatedMaterial({
            material: bannerNeonMaterial,
            color1: bannerColor1,
            color2: bannerColor2,
            timeout: 1000,
        });

        return () => clearInterval(interval);
    }, [bannerNeonMaterial]);

    return <mesh {...props} material={bannerNeonMaterial} />;
}
