import { useEffect } from "react";
import * as THREE from "three";
import animatedMaterial from "../Utils/animatedMaterial";

const bannerColor1 = new THREE.Color(2, 0.9, 2);
const bannerColor2 = new THREE.Color(2, 2, 2);

const bannerMaterial = new THREE.MeshBasicMaterial({
    color: bannerColor1.clone(),
    toneMapped: false,
});

export default function BannerText(props: JSX.IntrinsicElements["mesh"]) {
    useEffect(() => {
        const interval = animatedMaterial({
            material: bannerMaterial,
            color1: bannerColor1,
            color2: bannerColor2,
            timeout: 1000,
        });

        return () => clearInterval(interval);
    }, [bannerMaterial]);

    return <mesh {...props} material={bannerMaterial} />;
}
