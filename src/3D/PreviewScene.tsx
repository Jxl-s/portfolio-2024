import { Float, PerspectiveCamera, Stage } from "@react-three/drei";
import MacbookModel from "./models/Macbook";

export default function PreviewScene() {
    return (
        <>
            <directionalLight position={[0, 0, 1]} />
            <ambientLight position={[0, 0, 2]} color="white" />
            <PerspectiveCamera makeDefault position={[0, 3, 10]} />

            {/* <Stage> */}
            <Stage environment={"city"}>
                <mesh visible={false} position-y={1}>
                    <boxGeometry args={[4, 2, 4]} />
                </mesh>
                <Float speed={5} floatingRange={[0, 0.5]}>
                    <MacbookModel />
                </Float>
            </Stage>
        </>
    );
}
