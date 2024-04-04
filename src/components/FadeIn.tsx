import { PropsWithChildren, useEffect, useRef } from "react";

interface Props {
    delay: number;
    flag?: boolean;
    fromX?: number;
    fromY?: number;
    className?: string;
}

const FadeInText = ({
    delay,
    flag = true,
    fromX,
    fromY,
    children,
    className,
}: PropsWithChildren<Props>) => {
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (flag) {
            setTimeout(() => {
                if (!divRef.current) return;

                divRef.current.style.opacity = "100%";
                divRef.current.style.transform = "translateY(0)";
            }, delay * 1000);
        }
    }, [delay, flag]);

    return (
        <div
            ref={divRef}
            style={{
                opacity: 0,
                transform: `translate(${fromX ?? 0}px, ${
                    fromY ?? (fromX ? 0 : 20)
                }px)`,
                transitionDuration: "1s",
            }}
            className={className ?? ''}
        >
            {children}
        </div>
    );
};

export default FadeInText;
