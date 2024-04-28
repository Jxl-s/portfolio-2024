import { useState } from "react";
import projects, { Project } from "../../data/projects";
import { iconMapping } from "../../data/icons";
import playSound from "../Utils/playSound";
import { useTranslation } from "react-i18next";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";

export default function Projects() {
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const [page, setPage] = useState(1);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const { t, i18n } = useTranslation();

    const onClick = () => {
        if (cameraFocus !== CameraFocus.Projects) {
            setCameraFocus(CameraFocus.Projects);
        }
    };

    return (
        <>
            <div
                className={`absolute duration-500 w-full h-full z-10 py-6 px-8 bg-blue-500 grid grid-cols-2 gap-4 ${
                    cameraFocus === CameraFocus.Projects
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
                onClick={onClick}
            >
                {/* Just a normal dispenser */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        className="bg-blue-600 shadow-md w-full h-full rounded-lg p-2 font-semibold"
                        key={i}
                    >
                        {t("Drink")} #{i + 1}
                        <span className="block text-xl mt-1 opacity-50">
                            $2.50
                        </span>
                    </div>
                ))}
            </div>
            {activeProject ? (
                <div className="bg-inherit flex flex-col border-8 rounded-lg border-blue-500 w-full h-full p-3">
                    <a
                        className={`text-2xl font-bold duration-300 ${
                            activeProject.source
                                ? "hover:text-indigo-400 cursor-pointer"
                                : "text-white/50"
                        }`}
                        href={activeProject.source ?? undefined}
                        target="_blank"
                    >
                        {activeProject.name[i18n.language]}
                    </a>
                    <p className="text-base">{activeProject.year}</p>
                    <ul className="flex gap-4 w-full justify-center my-4">
                        {activeProject.tech.map((tech) => iconMapping[tech])}
                    </ul>
                    <a
                        className={`w-full h-[200px] rounded-lg ${
                            activeProject.demo &&
                            "border-2 border-transparent hover:border-indigo-400"
                        } duration-300 flex items-center justify-center overflow-hidden relative`}
                        href={
                            activeProject.demo ? activeProject.demo : undefined
                        }
                        target={activeProject.demo ? "_blank" : ""}
                    >
                        <img
                            src={activeProject.image}
                            className="w-full"
                            loading="lazy"
                            alt="activeProject Image"
                        />
                        {activeProject.demo && (
                            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-80 duration-300 bg-black flex items-center justify-center font-semibold text-xl">
                                {"Open Demo"}
                            </div>
                        )}
                    </a>
                    <ul className="list-disc text-start text-base mx-4 mt-4">
                        {activeProject.desc
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
                    <div className="flex-grow flex items-end justify-center w-full mb-4">
                        <span
                            className="text-xl font-semibold cursor-pointer duration-300 hover:text-blue-300"
                            onClick={() => {
                                playSound("clickAudio");
                                setActiveProject(null);
                            }}
                        >
                            {t("Back")}
                        </span>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col border-8 rounded-lg border-blue-500 w-full h-full p-3">
                    <div className="mb-3 flex justify-between clear-start text-2xl">
                        <div
                            className={`font-bold mx-2 ${
                                page === 1 ? "opacity-50" : "cursor-pointer"
                            }`}
                            onClick={() => {
                                if (page > 1) {
                                    playSound("clickAudio");
                                    setPage(page - 1);
                                }
                            }}
                        >
                            {"<"}
                        </div>
                        <h1 className="font-semibold text-2xl w-full text-center font-mono">
                            🥤 {page} {t("of")}{" "}
                            {Math.ceil(projects.length / 10)} 🧋
                        </h1>
                        <div
                            className={`font-bold mx-2 ${
                                page === Math.ceil(projects.length / 10)
                                    ? "opacity-50"
                                    : "cursor-pointer"
                            }`}
                            onClick={() => {
                                if (page < Math.ceil(projects.length / 10)) {
                                    playSound("clickAudio");
                                    setPage(page + 1);
                                }
                            }}
                        >
                            {">"}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {projects
                            .filter((_, i) => {
                                const minIndex = page * 8 - 8;
                                const maxIndex = page * 8;

                                return i >= minIndex && i < maxIndex;
                            })
                            .map((project, i) => {
                                return (
                                    <div
                                        className="bg-blue-600 shadow-md w-full rounded-lg p-2 font-semibold whitespace-nowrap overflow-hidden text-ellipsis h-[126px] cursor-pointer hover:bg-blue-700 duration-300"
                                        key={i}
                                        onClick={() => {
                                            playSound("cansAudio");
                                            setActiveProject(project);
                                        }}
                                    >
                                        <span className="text-base">
                                            {project.name[i18n.language]}
                                        </span>
                                        <span className="block text-xl mt-2 opacity-50">
                                            {project.year}
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                    <div
                        className="mt-3 text-2xl font-semibold w-full text-center cursor-pointer duration-300 hover:text-blue-300"
                        onClick={() => {
                            playSound("clickAudio");
                            setCameraFocus(CameraFocus.Home);
                        }}
                    >
                        {t("Back")}
                    </div>
                </div>
            )}
        </>
    );
}
