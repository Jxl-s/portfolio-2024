import { BriefcaseIcon } from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { PropsWithChildren, Fragment, ReactNode, useState } from "react";
import projects from "../data/projects.json";

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

interface ProjectCardProps {
    title: string;
    year: number;
    techStack: ReactNode;
    tags: string[];
    urls: [string, string | null];
}

function ProjectCard({
    title,
    year,
    techStack,
    tags,
    urls,
    children,
}: PropsWithChildren<ProjectCardProps>) {
    return (
        <div className="bg-black bg-indigo-800/50 rounded-lg shadow-lg p-4 text-center col-span-3 lg:col-span-1 flex flex-col">
            <div className="w-full flex justify-between mb-2">
                <span className="text-start text-indigo-400">
                    {tags.map((t) => "#" + t).join("\t")}
                </span>
                <span className="text-end text-indigo-400">{year}</span>
            </div>
            <a
                className={`w-full h-[200px] bg-black rounded-lg ${
                    urls[1] && "border-2 border-transparent hover:border-indigo-400"
                } duration-300`}
                href={urls[1] ? urls[1] : undefined}
                target={urls[1] ? "_blank" : ""}
            />
            <a
                className="text-xl font-bold mt-2 hover:text-indigo-400 cursor-pointer duration-300"
                href={urls[0]}
                target="_blank"
            >
                {title}
            </a>
            <ul className="flex gap-4 w-100 justify-center my-4">{techStack}</ul>
            <ul className="list-disc text-start px-4 text-base">{children}</ul>
        </div>
    );
}

// TODO: Use this along with the tags search
const tags = new Set<string>();
projects.forEach((project) => {
    project.tech.forEach((tech) => tags.add(tech));
    project.tags.forEach((tag) => tags.add(tag));
});

export default function Projects() {
    const { t } = useTranslation();
    const [searchInput, setSearchInput] = useState("");

    const iconMapping: Record<string, ReactNode> = {
        // make sure the text is white
        React: (
            <a href="https://react.dev/" target="_blank">
                <SiReact className="w-6 h-6" fill="#61DAFB" title="React" />
            </a>
        ),
        TypeScript: (
            <a href="https://www.typescriptlang.org/" target="_blank">
                <SiTypescript className="w-6 h-6" fill="#007ACC" title="TypeScript" />
            </a>
        ),
        TailwindCSS: (
            <a href="https://tailwindcss.com/" target="_blank">
                <SiTailwindcss className="w-6 h-6" fill="#06B6D4" title="TailwindCSS" />
            </a>
        ),
        ThreeJS: (
            <a href="https://threejs.org/" target="_blank">
                <SiThreedotjs className="w-6 h-6" fill="#FFFFFF " title="ThreeJS" />
            </a>
        ),
        Rust: (
            <a href="https://www.rust-lang.org/" target="_blank">
                <SiRust className="w-6 h-6" fill="#FFFF" title="Rust" />
            </a>
        ),
        HTML5: (
            <a href="https://html.spec.whatwg.org/multipage/" target="_blank">
                <SiHtml5 className="w-6 h-6" fill="#E34F26" title="HTML5" />
            </a>
        ),
        JavaScript: (
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <SiJavascript className="w-6 h-6" fill="#F7DF1E" title="JavaScript" />
            </a>
        ),
        CSS3: (
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                <SiCss3 className="w-6 h-6" fill="#1572B6" title="CSS3" />
            </a>
        ),
        Python: (
            <a href="https://www.python.org/" target="_blank">
                <SiPython className="w-6 h-6" fill="#3776AB" title="Python" />
            </a>
        ),
        Flask: (
            <a href="https://flask.palletsprojects.com/en/3.0.x/" target="_blank">
                <SiFlask className="w-6 h-6" fill="#FFFFFF" title="Flask" />
            </a>
        ),
        Arduino: (
            <a href="https://www.arduino.cc/" target="_blank">
                <SiArduino className="w-6 h-6" fill="#00979D" title="Arduino" />
            </a>
        ),
        WebGL: (
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" target="_blank">
                <SiWebgl className="w-6 h-6" fill="#FFFFFF" title="WebGL" />
            </a>
        ),
        Blender: (
            <a href="https://www.blender.org/" target="_blank">
                <SiBlender className="w-6 h-6" fill="#F5792A" title="Blender" />
            </a>
        ),
        Firebase: (
            <a href="https://firebase.google.com/" target="_blank">
                <SiFirebase className="w-6 h-6" fill="#FFCA28" title="Firebase" />
            </a>
        ),
        Flutter: (
            <a href="https://flutter.dev/" target="_blank">
                <SiFlutter className="w-6 h-6" fill="#02569B" title="Flutter" />
            </a>
        ),
        MySQL: (
            <a href="https://www.mysql.com/" target="_blank">
                <SiMysql className="w-6 h-6" fill="#4479A1" title="MySQL" />
            </a>
        ),
        PHP: (
            <a href="https://www.php.net/" target="_blank">
                <SiPhp className="w-6 h-6" fill="#777BB4" title="PHP" />
            </a>
        ),
        Lua: (
            <a href="https://www.lua.org/" target="_blank">
                <SiLua className="w-6 h-6" fill="#A0A0FF" title="Lua" />
            </a>
        ),
        Unity: (
            <a href="https://unity.com/" target="_blank">
                <SiUnity className="w-6 h-6" fill="#FFFFFF" title="Unity" />
            </a>
        ),
        C: (
            <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                <SiC className="w-6 h-6" fill="#A8B9CC" title="C" />
            </a>
        ),
    };

    return (
        <PageLayout
            icon={<BriefcaseIcon className="h-6 w-6 text-indigo-400" />}
            label={t("projects")}
            title={t("My Projects")}
            divId="projects-div"
            i={2}
        >
            <p className="max-w-2xl text-center">
                Here are some of the cool public projects I made. You can filter through them with
                tags.
            </p>
            <div className="w-full grid grid-cols-2 mt-2 gap-4">
                <div className="h-full col-span-2">
                    <label className="text-sm">Search (title, description, tech stack, tag)</label>
                    <input
                        type="text"
                        placeholder="e.g. React"
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

            <div className="grid grid-cols-3 gap-4 w-full mt-4">
                {projects
                    .filter((project) => {
                        if (searchInput === "") return true;

                        // do search per word, make sure it contains each word
                        const search = searchInput.toLowerCase();
                        const searchParts = search.split(" ");

                        for (const part of searchParts) {
                            if (
                                !project.name.toLowerCase().includes(part) &&
                                !project.desc.some((desc) => desc.toLowerCase().includes(part)) &&
                                !project.tech.some((tech) => tech.toLowerCase().includes(part))
                            )
                                return false;
                        }

                        return true;
                    })
                    .map((project, i) => (
                        <ProjectCard
                            title={project.name}
                            techStack={
                                <Fragment>{project.tech.map((tech) => iconMapping[tech])}</Fragment>
                            }
                            year={project.year}
                            tags={project.tags}
                            urls={[project.source, project.demo]}
                            key={i}
                        >
                            {project.desc.map((desc, i) => (
                                <li className="my-2" key={i}>{desc}</li>
                            ))}
                        </ProjectCard>
                    ))}
            </div>
        </PageLayout>
    );
}
