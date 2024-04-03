import { PropsWithChildren, useEffect, useState } from "react";

interface Props {
    delay: number;
}

const FadeInText = ({ delay, children }: PropsWithChildren<Props>) => {
    const [startFade, setStartFade] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStartFade(true);
        }, delay * 1000);
    });

    return (
        <div className={startFade ? "fade-in" : "opacity-0 translate-y-0"}>
            {children}
        </div>
    );
};

export default FadeInText;
