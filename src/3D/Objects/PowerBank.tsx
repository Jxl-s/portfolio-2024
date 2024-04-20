import useNightStore from "../Stores/useNightStore";

export default function PowerBank(props: JSX.IntrinsicElements["mesh"]) {
    const isNight = useNightStore((state) => state.isNight);
    const setNight = useNightStore((state) => state.setNight);

    const onPointerEnter = () => {
        document.body.style.cursor = "pointer";
    };

    const onPointerLeave = () => {
        document.body.style.cursor = "auto";
    };

    const onClick = () => {
        if (!props.material) return;
        setNight(!isNight);
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
