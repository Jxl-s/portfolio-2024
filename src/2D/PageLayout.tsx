import { PropsWithChildren, ReactNode } from "react";
import scrollTo from "../util/scrollTo";

interface Props {
    icon: ReactNode;
    label: string;
    title: string;
    divId: string;
    i: number;
}

export default function PageLayout({
    icon,
    label,
    title,
    divId,
    children,
    i,
}: PropsWithChildren<Props>) {
    return (
        <div
            className={`${
                i % 2 === 0 ? "bg-indigo-900/50" : "bg-indigo-900/70"
            } p-4 lg:p-8 flex flex-col items-center`}
            id={divId}
            style={{
                minHeight: "calc(100vh - 72px)",
            }}
        >
            <header
                className="text-center cursor-pointer duration-300 hover:opacity-70"
                onClick={() => scrollTo(divId)}
                id={divId + "-header"}
            >
                <span className="flex gap-4 w-full justify-center">
                    {icon}
                    <span className="font-bold text-indigo-400">{label.toUpperCase()}</span>
                    {icon}
                </span>
                <span className="font-bold text-4xl">{title}</span>
                <div className="my-4" />
                <div className="flex items-center justify-center">
                    <div className="h-2 bg-indigo-500 w-[90px]" />
                </div>
            </header>
            <main className="mt-4 flex flex-col items-center w-full max-w-7xl">{children}</main>
        </div>
    );
}
