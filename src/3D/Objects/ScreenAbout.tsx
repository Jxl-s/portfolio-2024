import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import About from "../Interfaces/About";

export default function ScreenAbout(props: JSX.IntrinsicElements["mesh"]) {
    const coverRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // give a random color to cover, use gsap to animate the color change. make it on intervals
        const interval = setInterval(() => {
            if (coverRef.current) {
                coverRef.current.style.backgroundColor = `hsl(${
                    Math.random() * 360
                }, 50%, 50%)`;
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <mesh {...props}>
            <Html
                center
                transform
                position={[0, 0, -0.01]}
                rotation={[0, Math.PI, Math.PI * 0.5]}
                occlude={"blending"}
                className="text-white bg-indigo-800/50 rounded-md text-center p-3 select-none"
                style={{
                    width: "750px",
                    height: "516px",
                }}
                scale={[0.05, 0.05, 1]}
            >
                <About />
            </Html>
        </mesh>
    );
}
