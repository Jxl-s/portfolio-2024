import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { ReactNode, useState } from "react";
import projects, { Project } from "../data/projects";

import {
    SiArduino,
    SiBlender,
    SiC,
    SiCss3,
    SiFirebase,
    SiFlask,
    SiFlutter,
    SiHtml5,
    SiJavascript,
    SiLua,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPython,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiThreedotjs,
    SiTypescript,
    SiUnity,
    SiWebgl,
} from "react-icons/si";

const iconMapping: Record<string, ReactNode> = {
    // make sure the text is white
    React: (
        <a
            href="https://react.dev/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiReact className="w-6 h-6" fill="#61DAFB" title="React" />
        </a>
    ),
    NextJS: (
        <a
            href="https://nextjs.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiNextdotjs className="w-6 h-6" fill="#fff" title="NextJS" />
        </a>
    ),
    TypeScript: (
        <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiTypescript
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#007ACC"
                title="TypeScript"
            />
        </a>
    ),
    TailwindCSS: (
        <a
            href="https://tailwindcss.com/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiTailwindcss
                className="w-6 h-6"
                fill="#06B6D4"
                title="TailwindCSS"
            />
        </a>
    ),
    ThreeJS: (
        <a
            href="https://threejs.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiThreedotjs className="w-6 h-6" fill="#FFFFFF " title="ThreeJS" />
        </a>
    ),
    Rust: (
        <a
            href="https://www.rust-lang.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiRust className="w-6 h-6" fill="#FFFF" title="Rust" />
        </a>
    ),
    HTML5: (
        <a
            href="https://html.spec.whatwg.org/multipage/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiHtml5
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#E34F26"
                title="HTML5"
            />
        </a>
    ),
    JavaScript: (
        <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiJavascript
                className="w-6 h-6"
                fill="#F7DF1E"
                title="JavaScript"
            />
        </a>
    ),
    CSS3: (
        <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiCss3
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#1572B6"
                title="CSS3"
            />
        </a>
    ),
    Python: (
        <a
            href="https://www.python.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiPython className="w-6 h-6" fill="#3776AB" title="Python" />
        </a>
    ),
    Flask: (
        <a
            href="https://flask.palletsprojects.com/en/3.0.x/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiFlask className="w-6 h-6" fill="#FFFFFF" title="Flask" />
        </a>
    ),
    Arduino: (
        <a
            href="https://www.arduino.cc/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiArduino className="w-6 h-6" fill="#00979D" title="Arduino" />
        </a>
    ),
    WebGL: (
        <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiWebgl className="w-6 h-6" fill="#FFFFFF" title="WebGL" />
        </a>
    ),
    Blender: (
        <a
            href="https://www.blender.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiBlender
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#F5792A"
                title="Blender"
            />
        </a>
    ),
    Firebase: (
        <a
            href="https://firebase.google.com/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiFirebase className="w-6 h-6" fill="#FFCA28" title="Firebase" />
        </a>
    ),
    Flutter: (
        <a
            href="https://flutter.dev/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiFlutter
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#02569B"
                title="Flutter"
            />
        </a>
    ),
    MySQL: (
        <a
            href="https://www.mysql.com/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiMysql
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#4479A1"
                title="MySQL"
            />
        </a>
    ),
    PHP: (
        <a
            href="https://www.php.net/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiPhp className="w-6 h-6" fill="#777BB4" title="PHP" />
        </a>
    ),
    Lua: (
        <a
            href="https://www.lua.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiLua className="w-6 h-6" fill="#A0A0FF" title="Lua" />
        </a>
    ),
    Unity: (
        <a
            href="https://unity.com/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiUnity
                className="w-6 h-6 bg-white p-0.5 rounded-md"
                fill="#000"
                title="Unity"
            />
        </a>
    ),
    C: (
        <a
            href="https://en.wikipedia.org/wiki/C_(programming_language)"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiC className="w-6 h-6" fill="#A8B9CC" title="C" />
        </a>
    ),
};

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    const { t, i18n } = useTranslation();

    const tags = i18n.language === "fr" ? project.tagsFr! : project.tags;
    const desc = i18n.language === "fr" ? project.descFr! : project.desc;
    const name = i18n.language === "fr" ? project.nameFr! : project.name;

    return (
        <div className="bg-black bg-indigo-800/50 rounded-lg shadow-lg p-4 text-center col-span-6 md:col-span-3 xl:col-span-2 flex flex-col">
            <div className="w-full flex justify-between mb-2">
                <div className="text-start text-indigo-400 flex gap-1">
                    {tags.map((tag, i) => (
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
            <a
                className={`w-full h-[200px] rounded-lg ${
                    project.demo &&
                    "border-2 border-transparent hover:border-indigo-400"
                } duration-300 flex items-center justify-center overflow-hidden relative`}
                href={project.demo ? project.demo : undefined}
                target={project.demo ? "_blank" : ""}
            >
                <img src={project.image} className="w-full" loading="lazy" />
                {project.demo && (
                    <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-80 duration-300 bg-black flex items-center justify-center font-semibold text-xl">
                        {t("Open Demo")}
                    </div>
                )}
            </a>
            <a
                className={`text-xl font-bold mt-2 duration-300 ${
                    project.source
                        ? "hover:text-indigo-400 cursor-pointer"
                        : "text-white/50"
                }`}
                href={project.source ?? undefined}
                target="_blank"
            >
                {name}
            </a>
            <ul className="flex gap-4 w-100 justify-center my-4">
                {project.tech.map((tech) => iconMapping[tech])}
            </ul>
            <ul className="list-disc text-start px-4 text-base">
                {desc.map((desc, i) => (
                    <li className="my-2" key={i} dangerouslySetInnerHTML={{
                        __html: desc
                    }} />
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

                        const tags =
                            i18n.language === "fr"
                                ? project.tagsFr!
                                : project.tags;
                        const desc =
                            i18n.language === "fr"
                                ? project.descFr!
                                : project.desc;
                        const name =
                            i18n.language === "fr"
                                ? project.nameFr!
                                : project.name;

                        // do search per word, make sure it contains each word
                        const search = searchInput.toLowerCase();
                        const searchParts = search.split(" ");

                        for (const part of searchParts) {
                            if (
                                !name.toLowerCase().includes(part) &&
                                !desc.some((desc) =>
                                    desc.toLowerCase().includes(part)
                                ) &&
                                !project.tech.some((tech) =>
                                    tech.toLowerCase().includes(part)
                                ) &&
                                !tags.some((tag) =>
                                    tag.toLowerCase().includes(part)
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
