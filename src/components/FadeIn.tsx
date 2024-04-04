import { PropsWithChildren, useEffect, useRef } from "react";

interface Props {
    delay: number;
}

const FadeInText = ({ delay, children }: PropsWithChildren<Props>) => {
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if (!divRef.current) return;

            divRef.current.style.opacity = "100%";
            divRef.current.style.transform = "translateY(0)";
        }, delay * 1000);
    });

    return (
        <div
            ref={divRef}
            style={{
                opacity: 0,
                transform: "translateY(20px)",
                transitionDuration: "1s",
            }}
        >
            {children}
        </div>
    );
};

export default FadeInText;
