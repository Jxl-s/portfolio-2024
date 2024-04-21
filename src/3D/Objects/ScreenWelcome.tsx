import { Html } from "@react-three/drei";
import Welcome from "../Interfaces/Welcome";
import useCameraStore from "../Stores/useCameraStore";

export default function ScreenWelcome(props: JSX.IntrinsicElements["mesh"]) {
    const setFocus = useCameraStore((state) => state.setFocus);
    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={1}
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude="blending"
                className="text-white text-3xl bg-blue-700 rounded-lg text-center p-2 select-none"
                style={{
                    width: "378px",
                    height: "540px",
                }}
            >
                <Welcome
                    onHomeClick={() => {
                        setFocus("home");
                    }}
                    onAboutClick={() => {
                        setFocus("aboutMe");
                    }}
                    onProjectsClick={() => {
                        setFocus("projects");
                    }}
                    onJourneyClick={() => {
                        setFocus("journey");
                    }}
                    onContactClick={() => {
                        setFocus("contact");
                    }}
                />
            </Html>
        </mesh>
    );
}
