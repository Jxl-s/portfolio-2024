import gsap from "gsap";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const color1 = new THREE.Color(0xdddddd);
const color2 = new THREE.Color(0xf59af6);

export default function BannerText(props: JSX.IntrinsicElements["mesh"]) {
    // Make it flicker from time to time

    const bannerMaterial = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: 0xf09af1,
            }),
        []
    );

    useEffect(() => {
        // Make it glow and glow down smoothly using gsap
        let i = 0;

        const interval = setInterval(() => {
            gsap.to(bannerMaterial.color, {
                r: i % 2 === 0 ? color1.r : color2.r,
                g: i % 2 === 0 ? color1.g : color2.g,
                b: i % 2 === 0 ? color1.b : color2.b,

                duration: 1,
                ease: "power2.inOut",
            });
            i++;
        }, 2000);

        return () => clearInterval(interval);
    }, [bannerMaterial]);

    return <mesh {...props} material={bannerMaterial} />;
}
