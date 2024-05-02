import { PropsWithChildren } from "react";

export default function SectionSubtitle({ children }: PropsWithChildren) {
    return <p className="max-w-2xl text-center">{children}</p>;
}
