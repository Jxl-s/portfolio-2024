import { Language } from "./i18n";

type IntlField<T> = { [K in Language]: T };
export interface Project {
    year: number;
    name: IntlField<string>;
    tags: IntlField<string>[];
    desc: IntlField<string>[];
    tech: string[];
    source: string | null;
    demo: string | null;
    image: string;
}

const projects: Project[] = [
    {
        year: 2024,
        name: {
            en: "Mini Pomodoro",
            fr: "Pomodoro mini",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "Utility", fr: "Utile" },
        ],
        desc: [
            {
                en: "A minimalistic Pomodoro timer with customizable work and break times, with a <b>dark mode</b> for eye comfort",
                fr: "Un minuteur Pomodoro minimaliste avec des temps de travail et de pause personnalisables, avec un <b>mode sombre</b> pour le confort des yeux",
            },
        ],
        tech: ["SvelteKit", "TailwindCSS"],
        source: "https://github.com/Jxl-s/svelte-pomodoro",
        demo: "https://pomodoro.jiaxuan-li.com",
        image: "/images/projects/2024/pomodoro.webp",
    },
    {
        year: 2024,
        name: {
            en: "AI Resume Builder",
            fr: "Constructeur de CV intelligent",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "AI", fr: "IA" },
            { en: "Utility", fr: "Utile" },
        ],
        desc: [
            {
                en: "A resume builder made using Next.JS which generates ATS compliant resumes, and provides suggestions for improvement.",
                fr: "Un constructeur de CV fait avec Next.JS qui génère des CV conformes aux ATS, et fournit des suggestions.",
            },
        ],
        tech: ["NextJS", "TypeScript", "TailwindCSS", "Python", "Flask"],
        source: "https://github.com/Jxl-s/resume-builder",
        demo: "https://resume-builder.demo.jiaxuan-li.com",
        image: "/images/projects/2024/resume-builder.webp",
    },
    {
        year: 2024,
        name: {
            en: "Algorithm Visualizer",
            fr: "Visualisateur d'algorithmes",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "3D", fr: "3D" },
            { en: "Visualization", fr: "Visualisation" },
        ],
        desc: [
            {
                en: "A 3D website to help computer science students visualize common algorithms, such as searching, sorting, and graphs.",
                fr: "Un site web 3D pour aider les étudiants en informatique à visualiser des algorithmes courants, tels que la recherche, le tri et les graphes.",
            },
            {
                en: "Optimized to support up to <b>thousands of meshes</b> without issues.",
                fr: "Optimisé pour supporter <b>des milliers d'objets</b> sans problèmes.",
            },
        ],
        tech: ["React", "TypeScript", "TailwindCSS", "ThreeJS"],
        source: "https://github.com/Jxl-s/algo-visualizations",
        demo: "https://algo-visualizations.vercel.app/",
        image: "/images/projects/2024/algo-visualizations.webp",
    },
    {
        year: 2024,
        name: {
            en: "Vanier Robotics Homepage",
            fr: "Page d'accueil de Vanier Robotique",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "3D", fr: "3D" },
            { en: "Education", fr: "Éducation" },
        ],
        desc: [
            {
                en: "A WebGL experience with many interactions, made for the home page of Vanier's 2024 robotics home page.",
                fr: "Une expérience WebGL avec de nombreuses interactions, créée pour la page d'accueil de la robotique 2024 de Vanier.",
            },
            {
                en: "Made with <b>custom GLSL shaders</b> to make the website more immersive.",
                fr: "Fabriqué avec des <b>shaders GLSL personnalisés</b> pour rendre le site Web plus immersif.",
            },
            {
                en: "Highly optimized on all devices, supports Safari.",
                fr: "Hautement optimisé sur tous les appareils, prend en charge Safari.",
            },
        ],
        tech: [
            "React",
            "JavaScript",
            "ThreeJS",
            "WebGL",
            "Blender",
            "TailwindCSS",
        ],
        source: "https://github.com/Jxl-s/vanier-robotics-2024-home",
        demo: "https://vanier-robotics-2024-home.vercel.app/",
        image: "/images/projects/2024/robotics-2024.webp",
    },
    {
        year: 2024,
        name: {
            en: "VirtuMarket",
            fr: "VirtuMarket",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "eCommerce", fr: "eCommerce" },
        ],
        desc: [
            {
                en: "Used NextJS's <b>SSR</b> and TypeScript to develop the design and features of a basic eCommerce platform.",
                fr: "A utilisé le <b>SSR</b> de NextJS et TypeScript pour développer le design et les fonctionnalités d'une plateforme eCommerce basique.",
            },
            {
                en: "Implements <b>theme</b> customization and <b>internationalization</b> for accessibility.",
                fr: "Implémente la personnalisation de <b>thème</b> et <b>l'internationalisation</b> pour l'accessibilité.",
            },
        ],
        tech: ["NextJS", "TypeScript", "TailwindCSS"],
        source: "https://github.com/Jxl-s/3d-ecommerce",
        demo: "https://virtu-market.vercel.app/",
        image: "/images/projects/2024/virtu-market.webp",
    },
    {
        year: 2024,
        name: {
            en: "Multi-window Canvas",
            fr: "Canvas multi-fenêtres",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "Fun", fr: "Amusement" },
        ],
        desc: [
            {
                en: "A demo of inter-window communication through the browser's local storage.",
                fr: "Une démo de communication inter-fenêtres via le stockage local du navigateur.",
            },
        ],
        tech: ["HTML5", "JavaScript"],
        source: "https://github.com/Jxl-s/multi-window-canvas",
        demo: "https://jxl-s.github.io/multi-window-canvas/",
        image: "/images/projects/2024/multiwindow-canvas.webp",
    },
    {
        year: 2023,
        name: {
            en: "IntelliHouse",
            fr: "IntelliHouse",
        },
        tags: [{ en: "IoT", fr: "IdO" }],
        desc: [
            {
                en: "A responsive and intuitive web application that allows users to monitor and control IoT devices, made without a web framework.",
                fr: "Une application web réactive et intuitive qui permet aux utilisateurs de surveiller et de contrôler des appareils IdO, créée sans framework web.",
            },
            {
                en: "Runs on a Raspberry Pi, ESP8266, and sensors and IoT protocols like MQTT and Bluetooth.",
                fr: "Fonctionne sur un Raspberry Pi, ESP8266, et des capteurs et protocoles IdO comme MQTT et Bluetooth.",
            },
        ],
        tech: ["HTML5", "JavaScript", "CSS3", "Python", "Flask", "Arduino"],
        source: "https://gituhb.com/Jxl-s/iot-dashboard",
        demo: null,
        image: "/images/projects/2023/intellihouse.webp",
    },
    {
        year: 2023,
        name: {
            en: "Color Switcher",
            fr: "Changeur de couleurs",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "3D", fr: "3D" },
            { en: "Game", fr: "Jeu" },
        ],
        desc: [
            {
                en: "A simple 3D game where you switch colors and avoid obstacles to pass levels.",
                fr: "Un jeu 3D simple où vous changez de couleurs et évitez les obstacles pour passer les niveaux.",
            },
            {
                en: "Uses a <b>physics engine</b> to simulate gravity and collisions.",
                fr: "Utilise un <b>moteur physique</b> pour simuler la gravité et les collisions.",
            },
        ],
        tech: ["React", "JavaScript", "TailwindCSS", "ThreeJS"],
        source: "https://github.com/Jxl-s/r3f-color-switcher",
        demo: "https://color-switcher-jxl-s.vercel.app/",
        image: "/images/projects/2023/color-switcher.webp",
    },
    {
        year: 2023,
        name: {
            en: "Crimes API",
            fr: "API de crimes",
        },
        tags: [{ en: "API", fr: "API" }],
        desc: [
            {
                en: "A RESTful API that provides information about crimes in Los Angeles.",
                fr: "Une API RESTful qui fournit des informations sur les crimes à Los Angeles.",
            },
            {
                en: "Follows the MVC pattern and adheres to RESTful principles.",
                fr: "Suit le modèle MVC et respecte les principes RESTful.",
            },
            {
                en: "Implements <b>JWT authentication</b>, and content-negotiation functionalities.",
                fr: "Implémente <b>l'authentification JWT</b>, et des fonctionnalités de négociation de contenu.",
            },
        ],
        tech: ["PHP", "MySQL"],
        source: "https://github.com/Jxl-s/crimes-api",
        demo: null,
        image: "/images/projects/2023/crimes-api.webp",
    },
    {
        year: 2023,
        name: {
            en: "Ghostly Echoes",
            fr: "Ghostly Echoes",
        },
        tags: [
            { en: "3D", fr: "3D" },
            { en: "Game", fr: "Jeu" },
        ],
        desc: [
            {
                en: "A game in <b>Unity</b> 3D, in a school horror setting.",
                fr: "Un jeu en <b>Unity</b> 3D, dans un environnement d'horreur d'école.",
            },
            {
                en: "The player must escape the school while they might encounter creatures on their way.",
                fr: "Le joueur doit s'échapper de l'école tout en pouvant rencontrer des créatures sur son chemin.",
            },
        ],
        tech: ["Unity", "Blender"],
        source: "https://github.com/Jxl-s/ghostly-echoes",
        demo: null,
        image: "/images/projects/2023/ghostly-echoes.webp",
    },
    {
        year: 2023,
        name: {
            en: "RenoZed",
            fr: "RenoZed",
        },
        tags: [
            { en: "Full-Stack", fr: "Full-Stack" },
            { en: "CMS", fr: "CMS" },
        ],
        desc: [
            {
                en: "A content management system, built under contract for a client who runs a renovation business.",
                fr: "Un système de gestion de contenu, construit sous contrat pour un client qui gère une entreprise de rénovation.",
            },
            {
                en: "Implements <b>internationalization</b>, and <b>multi-factor authentication</b> with QR codes.",
                fr: "Implémente <b>l'internationalisation</b>, et <b>l'authentification multi-facteurs</b> avec des codes QR.",
            },
        ],
        tech: ["PHP", "MySQL"],
        source: null,
        demo: null,
        image: "/images/projects/2023/renozed.webp",
    },
    {
        year: 2023,
        name: {
            en: "PinPoint",
            fr: "PinPoint",
        },
        tags: [{ en: "Mobile", fr: "Mobile" }],
        desc: [
            {
                en: "A mobile application that allows users to share pins on a map.",
                fr: "Une application mobile qui permet aux utilisateurs de partager des épingles sur une carte.",
            },
            {
                en: "Uses <b>Firebase</b> for authentication and storage.",
                fr: "Utilise <b>Firebase</b> pour l'authentification et le stockage.",
            },
        ],
        tech: ["Flutter", "Firebase"],
        source: "https://github.com/Jxl-s/pinpoint",
        demo: null,
        image: "/images/projects/2023/pinpoint.webp",
    },
    {
        year: 2022,
        name: {
            en: "Vanier Schedule Builder",
            fr: "Constructeur d'horaire à Vanier",
        },
        tags: [
            { en: "Demo", fr: "Démo" },
            { en: "Education", fr: "Éducation" },
            { en: "Utility", fr: "Utile" },
        ],
        desc: [
            {
                en: "Generates all possible schedules with the courses you want to take, with same format as Omnivox's.",
                fr: "Génère tous les horaires possibles avec les cours que vous voulez prendre, avec le même format qu'Omnivox.",
            },
            {
                en: "Could previously fetch courses in <b>real-time</b>, but due to restrictions, it now uses a periodic dump.",
                fr: "Pouvait auparavant récupérer les cours en <b>temps réel</b>, mais à cause des restrictions, il utilise maintenant un dump périodique.",
            },
        ],
        tech: ["React", "TypeScript", "TailwindCSS", "Rust"],
        source: "https://github.com/Jxl-s/vanier-courses-api",
        demo: "https://vanier-schedule-maker-2.vercel.app/",
        image: "/images/projects/2022/vanier-schedule-builder.webp",
    },
    {
        year: 2022,
        name: {
            en: "LuaJoin",
            fr: "LuaJoin",
        },
        tags: [{ en: "Utility", fr: "Utile" }],
        desc: [
            {
                en: "A <b>blazing fast</b> Lua project bundler that allows you to bundle Lua projects into an optimized single file.",
                fr: "Un assembleur de projets Lua <b>ultra-rapide</b> qui vous permet d'assembler des projets Lua en un seul fichier optimisé.",
            },
            {
                en: "Supports relative and absolute imports, and static type checking from Luau.",
                fr: "Supporte les imports relatifs et absolus, et la vérification de type statique de Luau.",
            },
        ],
        tech: ["Lua", "Rust"],
        source: "https://github.com/Jxl-s/luajoin",
        demo: null,
        image: "/images/projects/2022/luajoin.webp",
    },
];

export default projects;
