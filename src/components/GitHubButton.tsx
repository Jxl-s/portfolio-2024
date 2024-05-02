import { SiGithub } from "react-icons/si";
import Button from "./ui/Button";

interface Props {
    url: string;
}

export default function GitHubButton({ url }: Props) {
    return (
        <Button
            color="black"
            className="flex items-center justify-center gap-2"
            href={url}
            target="_blank"
        >
            <SiGithub className="w-6 h-6" />
            <span className="font-semibold">GitHub</span>
        </Button>
    );
}
