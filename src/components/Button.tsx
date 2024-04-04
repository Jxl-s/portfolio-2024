import { PropsWithChildren } from "react";

interface Props {
    color: keyof typeof themes;
    className?: string;
}

const themes = {
    black: "bg-black hover:bg-black/50",
    blue: "bg-blue-500 hover:bg-blue-700",
};

export default function Button({
    children,
    color,
    className,
}: PropsWithChildren<Props>) {
    return (
        <button
            className={`w-full duration-300 ${
                themes[color]
            } rounded-lg py-2 shadow-md ${className ?? ""} hover:-translate-y-0.5`}
        >
            {children}
        </button>
    );
}
