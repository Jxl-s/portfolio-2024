import { playSound } from "../../util/sound";
import useExperienceStore from "../Stores/useExperienceStore";

export default function PowerBank(props: JSX.IntrinsicElements["mesh"]) {
    const [isDarkMode, setIsDarkMode] = useExperienceStore((state) => [
        state.isDarkMode,
        state.setIsDarkMode,
    ]);

    const onPointerEnter = () => {
        document.body.style.cursor = "pointer";
    };

    const onPointerLeave = () => {
        document.body.style.cursor = "auto";
    };

    const onClick = () => {
        if (!props.material) return;

        playSound("power_switch.mp3");
        setIsDarkMode(!isDarkMode);
    };

    return (
        <mesh
            {...props}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onClick={onClick}
        />
    );
}
