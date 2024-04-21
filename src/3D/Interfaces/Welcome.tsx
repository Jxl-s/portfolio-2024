interface Props {
    onHomeClick: () => void;
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onJourneyClick: () => void;
    on2DClick: () => void;
}

export default function Welcome({
    onHomeClick,
    onAboutClick,
    onProjectsClick,
    onJourneyClick,
    on2DClick,
}: Props) {
    return (
        <div className="border-4 rounded-lg border-blue-300 w-full h-full p-4 flex flex-col">
            <div
                className="hover:text-blue-300 duration-300 cursor-pointer"
                onClick={onHomeClick}
            >
                <b>🍎 Jia's Market 🥟</b>
                <span className="text-2xl block">
                    We are <b className="text-green-500">OPEN</b>
                </span>
            </div>

            <hr className="border-2 my-4" />
            <ul className="text-4xl mt-10 flex items-center justify-center flex-col gap-8 font-mono">
                <li
                    className=" hover:text-blue-300 duration-300 cursor-pointer"
                    onClick={onAboutClick}
                >
                    <b>ABOUT ME</b>
                </li>
                <li
                    className=" hover:text-blue-300 duration-300 cursor-pointer"
                    onClick={onProjectsClick}
                >
                    <b>PROJECTS</b>
                </li>
                <li
                    className=" hover:text-blue-300 duration-300 cursor-pointer"
                    onClick={onJourneyClick}
                >
                    <b>JOURNEY</b>
                </li>
            </ul>
            <div className="flex-grow flex flex-col justify-end">
                <hr className="border-2 my-4" />
                <span
                    className="text-blue-500 duration-300 cursor-pointer text-3xl hover:text-blue-300 mt-4"
                    onClick={on2DClick}
                >
                    <b>Back to 2D</b>
                </span>
                <p className="text-base mt-2">
                    © 2024 Jia Xuan Li. All rights reserved.
                </p>
            </div>
        </div>
    );
}
