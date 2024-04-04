import { Float, PerspectiveCamera, Stage } from "@react-three/drei";
import { PropsWithChildren } from "react";

interface Props {
    box: [number, number, number];
    offset: [number, number, number];
}

export default function StageLayout({
    box,
    offset,
    children,
}: PropsWithChildren<Props>) {
    return (
        <>
            <directionalLight position={[0, 0, 1]} />
            <ambientLight position={[0, 0, 2]} color="white" />
            <PerspectiveCamera makeDefault position={[0, 3, 10]} />

            {/* <Stage> */}
            <Stage environment={"city"}>
                <mesh visible={false} position={offset}>
                    <boxGeometry args={box} />
                </mesh>
                <Float speed={5} floatingRange={[0, 0.5]}>
                    {children}
                </Float>
            </Stage>
        </>
    );
}
