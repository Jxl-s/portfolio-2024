import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import projects, { Project } from "../data/projects";
import { iconMapping } from "../data/icons";

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    const { t, i18n } = useTranslation();

    const imageClassName = `w-full h-[200px] rounded-lg ${
        project.demo && "border-2 border-transparent hover:border-indigo-400"
    } duration-300 flex items-center justify-center overflow-hidden relative`;
    const imageHref = project.demo ? project.demo : undefined;

    const labelClassName = `text-xl font-bold mt-2 duration-300 ${
        project.source
            ? "hover:text-indigo-400 cursor-pointer"
            : "text-white/50"
    }`;
    const labelHref = project.source ?? undefined;

    const imageChildren = () => {
        return (
            <>
                <img
                    src={project.image}
                    className="w-full"
                    loading="lazy"
                    alt="Project Image"
                />
                {project.demo && (
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-80 duration-300 bg-black flex items-center justify-center font-semibold text-xl">
                        {t("Open Demo")}
                    </div>
                )}
            </>
        );
    };

    return (
        <div className="bg-black bg-indigo-800/50 rounded-lg shadow-lg p-4 text-center col-span-6 md:col-span-3 xl:col-span-2 flex flex-col">
            <div className="w-full flex justify-between mb-2">
                <div className="text-start text-indigo-400 flex gap-1">
                    {project.tags
                        .map((t) => t[i18n.language])
                        .map((tag, i) => (
                            <span
                                className="cursor-pointer hover:text-indigo-500 duration-300"
                                key={i}
                            >
                                #{tag}
                            </span>
                        ))}
                </div>
                <span className="text-end text-indigo-400">{project.year}</span>
            </div>
            {imageHref ? (
                <a
                    className={imageClassName}
                    href={imageHref}
                    target={project.demo ? "_blank" : undefined}
                >
                    {imageChildren()}
                </a>
            ) : (
                <div className={imageClassName}>{imageChildren()}</div>
            )}

            {labelHref ? (
                <a className={labelClassName} href={labelHref} target="_blank">
                    {project.name[i18n.language]}
                </a>
            ) : (
                <span className={labelClassName}>
                    {project.name[i18n.language]}
                </span>
            )}
            <ul className="flex gap-4 w-full justify-center my-4">
                {project.tech.map((tech, i) => (
                    <li key={i}>{iconMapping[tech]}</li>
                ))}
            </ul>
            <ul className="list-disc text-start px-4 text-base">
                {project.desc
                    .map((d) => d[i18n.language])
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
    );
}

export default function Projects() {
    const { t, i18n } = useTranslation();
    const [searchInput, setSearchInput] = useState("");

    return (
        <PageLayout
            icon={<DocumentDuplicateIcon className="h-6 w-6 text-indigo-400" />}
            label={t("projects")}
            title={t("My Projects")}
            divId="projects-div"
            i={2}
        >
            <p className="max-w-2xl text-center">{t("projects_desc")}</p>
            <div className="w-full grid grid-cols-2 mt-2 gap-4">
                <div className="h-full col-span-2">
                    <label className="text-sm">{t("projects_search")}</label>
                    <input
                        type="text"
                        placeholder={t("projects_search_placeholder")}
                        className="w-full py-2 px-4 rounded-lg bg-indigo-900"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                {/* <div className="h-full">
                    <label className="text-sm">Tags (currently disabled)</label>
                    <div className="w-full py-2 ps-4 px-8 rounded-lg bg-indigo-900 flex justify-between opacity-50">
                        <ul className="flex gap-2">
                            <li className="bg-indigo-400 px-2 flex justify-between gap-4 rounded-md">
                                <span className="font-medium">All</span>
                                <span className="text-sm">x</span>
                            </li>
                            <span className="opacity-50">Press on the (+) to add a tag</span>
                        </ul>

                        <span className="h-full w-6 text-center">+</span>
                    </div>
                </div> */}
            </div>

            <div className="grid grid-cols-6 gap-4 w-full mt-4">
                {projects
                    .filter((project) => {
                        if (searchInput === "") return true;

                        // do search per word, make sure it contains each word
                        const search = searchInput.toLowerCase();
                        const searchParts = search.split(" ");

                        for (const part of searchParts) {
                            if (
                                !project.name[i18n.language]
                                    .toLowerCase()
                                    .includes(part) &&
                                !project.desc
                                    .map((d) => d[i18n.language])
                                    .some((desc) =>
                                        desc.toLowerCase().includes(part)
                                    ) &&
                                !project.tags
                                    .map((t) => t[i18n.language])
                                    .some((tag) =>
                                        tag.toLowerCase().includes(part)
                                    ) &&
                                !project.tech.some((tech) =>
                                    tech.toLowerCase().includes(part)
                                ) &&
                                !project.year.toString().includes(part)
                            )
                                return false;
                        }

                        return true;
                    })
                    .map((project, i) => (
                        <ProjectCard project={project} key={i} />
                    ))}
            </div>
        </PageLayout>
    );
}
