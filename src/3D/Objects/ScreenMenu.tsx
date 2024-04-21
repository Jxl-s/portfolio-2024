import { Html } from "@react-three/drei";
import Welcome from "../Interfaces/Welcome";
import useCameraStore from "../Stores/useCameraStore";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    const setFocus = useCameraStore((state) => state.setFocus);

    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={0.75}
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude={"blending"}
                className="text-white text-3xl bg-blue-700 rounded-lg text-center p-2 select-none"
                style={{
                    width: "366px",
                    height: "530px",
                }}
            >
                {/* Temporary */}
                <Welcome
                    onHomeClick={() => {
                        setFocus("home");
                    }}
                    onAboutClick={() => {
                        setFocus("home");
                    }}
                    onProjectsClick={() => {
                        setFocus("home");
                    }}
                    onJourneyClick={() => {
                        setFocus("home");
                    }}
                    onContactClick={() => {
                        setFocus("home");
                    }}
                />
            </Html>
        </mesh>
    );
}
