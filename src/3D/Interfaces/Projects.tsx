import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import useCameraStore from "../Stores/useCameraStore";

export default function Projects() {
    const focus = useCameraStore((state) => state.focus);
    const setFocus = useCameraStore((state) => state.setFocus);

    const onClick = () => {
        if (focus !== "projects") setFocus("projects");
    };

    return (
        <>
            <div
                className={`absolute duration-500 w-full h-full z-10 items-center justify-start  py-6 px-8 bg-blue-500 grid grid-cols-2 gap-4 ${
                    focus === "projects"
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
                onClick={onClick}
            >
                {/* Just a normal dispenser */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div className="bg-blue-600 shadow-md w-full h-full rounded-lg p-2 font-semibold">
                        Drink #{i + 1}
                        <span className="block text-xl mt-1 opacity-50">
                            $2.50
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col border-8 rounded-lg border-blue-500 w-full h-full p-3">
                <div className="mb-3 flex justify-between clear-start text-2xl">
                    <div className="font-bold mx-2">{"<"}</div>
                    <h1 className="font-semibold text-2xl w-full text-center">
                        1 of 4
                    </h1>
                    <div className="font-bold mx-2">{">"}</div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div className="bg-blue-600 shadow-md w-full h-full rounded-lg p-2 font-semibold">
                            Drink #{i + 1}
                            <span className="block text-xl mt-1 opacity-50">
                                $2.50
                            </span>
                        </div>
                    ))}
                </div>
                <div
                    className="mt-3 text-2xl font-semibold w-full text-center cursor-pointer duration-300 hover:text-blue-300"
                    onClick={() => setFocus("home")}
                >
                    Back
                </div>
            </div>
        </>
    );
}
