import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

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
    return (
        <motion.div
            // ref={divRef}
            initial={{
                opacity: 0,
                x: fromX ?? 0,
                y: fromY ?? (fromX ? 0 : 20),
            }}
            animate={
                flag && {
                    opacity: 1,
                    x: 0,
                    y: 0,
                }
            }
            transition={{
                duration: 1,
                delay: delay,
            }}
            className={className ?? ""}
        >
            {children}
        </motion.div>
    );
};

export default FadeInText;
