import { ReactNode } from "react";
import {
    SiArduino,
    SiBlender,
    SiC,
    SiCss3,
    SiDocker,
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

export const iconMapping: Record<string, ReactNode> = {
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
    SvelteKit: (
        <a
            href="https://kit.svelte.dev/"
            target="_blank"
            key={Math.random().toString()}
        >
            <img
                src="/images/icons/svelte.png"
                alt="SvelteKit"
                className="w-6 h-6"
            />
        </a>
    ),
    Docker: (
        <a
            href="https://www.docker.com/"
            target="_blank"
            key={Math.random().toString()}
        >
            <SiDocker className="w-6 h-6" fill="#2496ED" title="Docker" />
        </a>
    ),
    Postgresql: (
        <a
            href="https://www.postgresql.org/"
            target="_blank"
            key={Math.random().toString()}
        >
            <img
                src="/images/icons/postgresql.png"
                alt="Postgresql"
                className="w-6 h-6"
            />
        </a>
    ),
};
