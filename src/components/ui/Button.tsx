import { PropsWithChildren } from "react";

interface Props {
    color: keyof typeof themes;
    className?: string;
    onClick?: () => void;

    // For anchor tags
    href?: string;
    target?: string;
    rel?: string;
}

const themes = {
    black: "bg-black hover:bg-black/50",
    blue: "bg-blue-600 hover:bg-blue-800",
    green: "bg-green-600 hover:bg-green-800",
    red: "bg-red-600 hover:bg-red-800",
};

export default function Button({
    children,
    color,
    onClick,
    className,

    href,
    target,
    rel,
}: PropsWithChildren<Props>) {
    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            className={`w-full duration-300 ${
                themes[color]
            } rounded-lg py-2 shadow-md ${
                className ?? ""
            } hover:-translate-y-0.5 pointer-events-auto`}
            onClick={onClick}
            target={target}
            rel={rel}
        >
            {children}
        </Component>
    );
}
