export default function PowerBank(props: JSX.IntrinsicElements["mesh"]) {
    const onPointerEnter = () => {
        document.body.style.cursor = "pointer";
    };

    const onPointerLeave = () => {
        document.body.style.cursor = "auto";
    };

    const onClick = () => {};

    return (
        <mesh
            {...props}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onClick={onClick}
        />
    );
}
