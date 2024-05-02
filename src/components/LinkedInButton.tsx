import { SiLinkedin } from "react-icons/si";
import Button from "./ui/Button";

interface Props {
    url: string;
}

export default function LinkedInButton({ url }: Props) {
    return (
        <Button
            color="blue"
            className="flex items-center justify-center gap-2"
            href={url}
            target="_blank"
        >
            <SiLinkedin className="w-6 h-6" />
            <span className="font-semibold">LinkedIn</span>
        </Button>
    );
}
