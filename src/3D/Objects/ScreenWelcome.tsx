import { Html } from "@react-three/drei";
import Welcome from "../Interfaces/Welcome";
import playSound from "../Utils/playSound";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";
// import Help3D from "../Components/Help3D";
import { welcomeGradient } from "../Data/gradients";

export default function ScreenWelcome(props: JSX.IntrinsicElements["mesh"]) {
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const onPageClick = (focus: CameraFocus) => {
        playSound("clickAudio");
        setCameraFocus(focus);
    };

    return (
        <>
            <mesh {...props}>
                {/* <Help3D
                    position={[0, 0.85, 0]}
                    focus={CameraFocus.Navigation}
                    // className="bg-blue-700/50 hover:bg-blue-700/100"
                >
                    Navigation
                </Help3D> */}
                <Html
                    center
                    transform
                    prepend
                    position={[0, 0, -0.001]}
                    rotation-y={Math.PI}
                    occlude="blending"
                    className="text-white text-3xl rounded-lg text-center p-2 select-none"
                    style={{
                        width: "378px",
                        height: "540px",
                        background: welcomeGradient,
                    }}
                    scale={[0.1, 0.1, 1]}
                >
                    <Welcome
                        onNavigationClick={() => {
                            onPageClick(
                                cameraFocus === CameraFocus.Navigation
                                    ? CameraFocus.Home
                                    : CameraFocus.Navigation
                            );
                        }}
                        onAboutClick={() => onPageClick(CameraFocus.AboutMe)}
                        onProjectsClick={() =>
                            onPageClick(CameraFocus.Projects)
                        }
                        onJourneyClick={() => onPageClick(CameraFocus.Journey)}
                        // Transition to 2D mode
                        on2DClick={() => {
                            playSound("clickAudio");
                            window.localStorage.setItem("DIMENSION", "2D");
                            window.location.reload();
                        }}
                    />
                </Html>
            </mesh>
        </>
    );
}
