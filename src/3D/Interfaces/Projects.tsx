import { useMemo, useState } from "react";
import projects, { Project } from "../../data/projects";
import { iconMapping } from "../../data/icons";
import playSound from "../Utils/playSound";
import { useTranslation } from "react-i18next";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";
import { Apple, BubbleTea, Drink, Dumpling } from "../Emojis";
import { getAsset } from "../Stores/useLoaderStore";

interface ProjectCardProps {
    index: number;
    year: string;
    image: string;
    name: string;
    onClick?: () => void;
}

function ProjectCard({ index, year, image, name, onClick }: ProjectCardProps) {
    return (
        <div
            className={`bg-blue-600 p-2 rounded-md shadow-md ${
                onClick ? "cursor-pointer hover:bg-blue-700 duration-300" : ""
            }`}
            onClick={onClick}
        >
            <div className="flex justify-between">
                <span className="w-12 bg-blue-500 shadow-md text-blue-200 font-bold rounded-md">
                    {index + 1}
                </span>
                <span className="font-semibold">{year}</span>
            </div>
            <img
                src={image}
                className="rounded-md my-2 mx-auto h-16 pointer-events-none"
            />
            <span className="block text-xs text-ellipsis overflow-hidden text-nowrap">
                {name}
            </span>
        </div>
    );
}

const drinkOptions = [
    {
        image: "spriteImage",
        name: "Sprite",
        price: "$1.99",
    },
    {
        image: "cocacolaImage",
        name: "Coca-Cola",
        price: "$2.99",
    },
    { image: "fantaImage", name: "Fanta", price: "$2.49" },
    {
        image: "mountainDewImage",
        name: "Mountain Dew",
        price: "$2.19",
    },
    {
        image: "redBullImage",
        name: "Red Bull",
        price: "$4.99",
    },
] as const;

interface ScreenHeaderProps {
    onClick?: () => void;
}

function ScreenHeader({ onClick }: ScreenHeaderProps) {
    const { t } = useTranslation();

    return (
        <>
            <header
                className={`flex justify-between items-center`}
                onClick={onClick}
            >
                <article
                    className={`font-bold text-xl flex items-center gap-2 ${
                        onClick && "animate-pulse cursor-pointer"
                    }`}
                >
                    {onClick ? (
                        t("Back")
                    ) : (
                        <>
                            <Dumpling className="w-8 h-8" />
                            Jia's Market
                            <Apple className="w-8 h-8" />
                        </>
                    )}
                </article>
                <article className="text-xl font-semibold flex items-center gap-2">
                    <Drink className="w-8 h-8" />
                    <BubbleTea className="w-8 h-8" />
                </article>
            </header>
            <hr className="my-2 border-white/25" />
        </>
    );
}

function UnfocusedScreen() {
    const { t } = useTranslation();
    const chosenDrinks = useMemo(() => {
        const arr = Array.from({ length: 12 });
        return arr.map((_, i) => drinkOptions[i % drinkOptions.length]);
    }, []);

    return (
        <>
            {/* Just a normal dispenser */}
            {/* grid of 3 items per row */}
            <section className="grid grid-cols-3 text-sm gap-4">
                {chosenDrinks.map((drink, i) => (
                    <ProjectCard
                        image={getAsset<string>(drink.image)}
                        key={i}
                        index={i}
                        year={drink.price}
                        name={drink.name}
                    />
                ))}
            </section>
            <h1 className="font-semibold text-xl mt-3 font-mono text-yellow-400 animate-pulse">
                {t("insert_coins")}
            </h1>
        </>
    );
}

interface FocusedProjectProps {
    project: Project;
}

function FocusedProject({ project }: FocusedProjectProps) {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="bg-blue-600 rounded-md shadow-md py-2 px-4 pb-4">
                <div className="flex justify-between items-center mt-1 mb-2">
                    <p className="text-base font-semibold">{project.year}</p>
                    <ul className="flex gap-4 w-full justify-end">
                        {project.tech.map((tech) => iconMapping[tech])}
                    </ul>
                </div>
                <a
                    className={`w-full h-[200px] rounded-lg ${
                        project.demo &&
                        "border-2 border-transparent hover:border-indigo-400"
                    } duration-300 flex items-center justify-center overflow-hidden relative`}
                    href={project.demo ? project.demo : undefined}
                    target={project.demo ? "_blank" : ""}
                >
                    <img
                        src={getAsset<string>(project.image as never)}
                        className="w-full"
                        loading="lazy"
                        alt="project Image"
                    />
                    {project.demo && (
                        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-80 duration-300 bg-black flex items-center justify-center font-semibold text-xl">
                            {t("Open Demo")}
                        </div>
                    )}
                </a>
            </div>
            <div className="bg-blue-600 rounded-md shadow-md mt-4 p-2">
                <a
                    className={`text-xl font-bold duration-300 ${
                        project.source
                            ? "hover:text-indigo-400 cursor-pointer"
                            : "text-white/50"
                    }`}
                    href={project.source ?? undefined}
                    target="_blank"
                >
                    {project.name[i18n.language]}
                </a>
                <ul className="list-disc text-start text-base mx-8 mt-4">
                    {project.desc
                        .map((desc) => desc[i18n.language])
                        .map((desc, i) => (
                            <li
                                className="my-2"
                                key={i}
                                dangerouslySetInnerHTML={{
                                    __html: desc,
                                }}
                            />
                        ))}
                </ul>
            </div>
        </>
    );
}

interface FocusedScreenProps {
    setProject: (project: Project | null) => void;
}

function FocusedScreen({ setProject }: FocusedScreenProps) {
    const { i18n } = useTranslation();

    const onCardClick = (project: Project) => {
        playSound("cansAudio");
        setProject(project);
    };
    return (
        <div className="flex flex-col border-8 rounded-lg border-blue-500 w-full h-full pointer-events-auto">
            <section
                className="grid grid-cols-3 text-sm gap-4"
                style={{ height: "580px" }}
            >
                {projects.map((project, i) => (
                    <ProjectCard
                        image={getAsset<string>(project.image as never)}
                        key={i}
                        index={i}
                        year={project.year.toString()}
                        name={project.name[i18n.language]}
                        onClick={() => onCardClick(project)}
                    />
                ))}
            </section>
        </div>
    );
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const onClick = () => {
        if (cameraFocus !== CameraFocus.Projects) {
            setCameraFocus(CameraFocus.Projects);
        }
    };

    const onBackClick = () => {
        playSound("clickAudio");
        setCameraFocus(CameraFocus.Home);
    };

    const onBackProjectClick = () => {
        playSound("clickAudio");
        setActiveProject(null);
    };

    return (
        <>
            <div
                className={`absolute duration-500 w-full h-full z-10 pb-2 pt-2 px-8 bg-blue-500 ${
                    cameraFocus === CameraFocus.Projects
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
                onClick={onClick}
            >
                <ScreenHeader />
                <UnfocusedScreen />
            </div>
            <div
                className={`absolute duration-500 w-full h-full pb-2 pt-2 px-8 bg-blue-500`}
                onClick={onClick}
            >
                {activeProject ? (
                    <>
                        <ScreenHeader onClick={onBackProjectClick} />
                        <FocusedProject project={activeProject} />
                    </>
                ) : (
                    <>
                        <ScreenHeader onClick={onBackClick} />
                        <FocusedScreen setProject={setActiveProject} />
                    </>
                )}
            </div>
        </>
    );
}
