import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _stop = (e: unknown) => (e as any).stopPropagation();
    const stopEvents = {
        onPointerEnter: (e: unknown) => _stop(e),
        onPointerLeave: (e: unknown) => _stop(e),
        onClick: (e: unknown) => _stop(e),
    };

    return (
        <mesh {...props} {...stopEvents}>
            <Html
                center
                transform
                distanceFactor={0.75}
                position={[0, 0, -0.01]}
                rotation={[0, Math.PI, Math.PI * 0.5]}
                occlude={"blending"}
                {...stopEvents}
            >
                <div
                    className="text-white text-3xl bg-blue-700 rounded-md text-center p-2 select-none"
                    style={{
                        width: "510px",
                        height: "345px",
                    }}
                    {...stopEvents}
                >
                    <div
                        className="w-full h-full fixed bg-black duration-500 opacity-100"
                        ref={coverRef}
                    />
                </div>
            </Html>
        </mesh>
    );
}
