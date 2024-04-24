import { Html } from "@react-three/drei";
import Welcome from "../Interfaces/Welcome";
import useCameraStore from "../Stores/useCameraStore";
import { playSound } from "../../util/sound";

export default function ScreenWelcome(props: JSX.IntrinsicElements["mesh"]) {
    const setFocus = useCameraStore((state) => state.setFocus);

    return (
        <mesh {...props}>
            <Html
                center
                transform
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude="blending"
                className="text-white text-3xl bg-blue-700 rounded-lg text-center p-2 select-none"
                style={{
                    width: "378px",
                    height: "540px",
                }}
                scale={[0.1, 0.1, 1]}
            >
                <Welcome
                    onHomeClick={() => {
                        playSound("click.mp3");
                        setFocus("home");
                    }}
                    onAboutClick={() => {
                        playSound("click.mp3");
                        setFocus("aboutMe");
                    }}
                    onProjectsClick={() => {
                        playSound("click.mp3");
                        setFocus("projects");
                    }}
                    onJourneyClick={() => {
                        playSound("click.mp3");
                        setFocus("journey");
                    }}
                    on2DClick={() => {
                        playSound("click.mp3");
                        window.localStorage.setItem("DIMENSION", "2D");
                        window.location.reload();
                    }}
                />
            </Html>
        </mesh>
    );
}
