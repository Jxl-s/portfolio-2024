export interface Project {
    year: number;
    name: string;

    tech: string[];
    tags: string[];

    tagsFr?: string[];
    nameFr?: string;
    descFr?: string[];

    desc: string[];
    source: string | null;
    demo: string | null;
    image: string;
}

const projects: Project[] = [
    {
        year: 2024,
        name: "Algorithm Visualizer",
        nameFr: "Visualisateur d'algorithmes",

        tags: ["Demo", "3D", "Visualization"],
        tagsFr: ["Démo", "3D", "Visualisation"],

        desc: [
            "A 3D website to help computer science students visualize common algorithms, such as searching, sorting, and graphs.",
            "Optimized to support up to <b>thousands of meshes</b> without issues.",
        ],
        descFr: [
            "Un site web 3D pour aider les étudiants en informatique à visualiser des algorithmes courants, tels que la recherche, le tri et les graphes.",
            "Optimisé pour supporter <b>des milliers d'objets</b> sans problèmes.",
        ],

        tech: ["React", "TypeScript", "TailwindCSS", "ThreeJS"],
        source: "https://github.com/Jxl-s/algo-visualizations",
        demo: "https://algo-visualizations.vercel.app/",
        image: "/images/projects/2024/algo-visualizations.webp",
    },
    {
        year: 2024,
        name: "Vanier Robotics Homepage",
        nameFr: "Vanier Robotiques (Accueil)",
        tech: [
            "React",
            "JavaScript",
            "ThreeJS",
            "WebGL",
            "Blender",
            "TailwindCSS",
        ],
        tags: ["Demo", "3D", "Education"],
        tagsFr: ["Démo", "3D", "Éducation"],
        desc: [
            "A WebGL experience with many interactions, made for the home page of Vanier's 2024 robotics home page.",
            "Made with <b>custom GLSL shaders</b> to make the website more immersive.",
            "Highly optimized on all devices, supports Safari.",
        ],
        descFr: [
            "Une expérience WebGL avec de nombreuses interactions, conçue pour la page d'accueil de la robotique 2024 du Vanier.",
            "Fait avec des <b>shaders GLSL personnalisés</b> pour rendre le site Web plus immersif.",
            "Optimisé sur tous les appareils, fonctionne aussi sur Safari.",
        ],
        source: "https://github.com/Jxl-s/vanier-robotics-2024-home",
        demo: "https://vanier-robotics-2024-home.vercel.app/",
        image: "/images/projects/2024/robotics-2024.webp",
    },
    {
        year: 2024,
        name: "VirtuMarket",
        tech: ["NextJS", "TypeScript", "TailwindCSS"],
        tags: ["Demo", "eCommerce"],
        tagsFr: ["Démo", "eCommerce"],
        desc: [
            "Used NextJS's <b>SSR</b> and TypeScript to develop the design and features of a basic eCommerce platform.",
            "Implements <b>theme</b> customization and <b>internationalization</b> for accessibility.",
        ],
        descFr: [
            "A utilisé le <b>SSR</b> de NextJS et TypeScript pour développer le design et les fonctionnalités d'une plateforme eCommerce basique.",
            "Implémente la personnalisation de <b>thème</b> et <b>l'internationalisation</b> pour l'accessibilité.",
        ],
        source: "https://github.com/Jxl-s/3d-ecommerce",
        demo: "https://virtu-market.vercel.app/",
        image: "/images/projects/2024/virtu-market.webp",
    },
    {
        year: 2024,
        name: "Multi-window Canvas",
        nameFr: "Canvas multi-fenêtres",
        tech: ["HTML5", "JavaScript"],
        tags: ["Demo", "Fun"],
        tagsFr: ["Démo", "Fun"],
        desc: [
            "A demo of inter-window communication through the browser's local storage.",
        ],
        descFr: [
            "Une démo de communication inter-fenêtres via le local storage du navigateur.",
        ],
        source: "https://github.com/Jxl-s/multi-window-canvas",
        demo: "https://jxl-s.github.io/multi-window-canvas/",
        image: "/images/projects/2024/multiwindow-canvas.webp",
    },
    {
        year: 2023,
        name: "IntelliHouse",
        tech: ["HTML5", "JavaScript", "CSS3", "Python", "Flask", "Arduino"],
        tags: ["IoT"],
        tagsFr: ["IdO"],
        desc: [
            "A responsive and intuitive web application that allows users to monitor and control IoT devices, made without a web framework.",
            "Runs on a Raspberry Pi, ESP8266, and sensors and IoT protocols like MQTT and Bluetooth.",
        ],
        descFr: [
            "Une application intuitive qui permet aux utilisateurs de surveiller et de contrôler des appareils IdO. Crée sans framework web.",
            "Fonctionne sur un Raspberry Pi, ESP8266, et des senseurs et protocoles IdO comme MQTT et Bluetooth.",
        ],
        source: "https://gituhb.com/Jxl-s/iot-dashboard",
        demo: null,
        image: "/images/projects/2023/intellihouse.webp",
    },
    {
        year: 2023,
        name: "Color Switcher",
        nameFr: "Changeur de couleurs",
        tech: ["React", "JavaScript", "TailwindCSS", "ThreeJS"],
        tags: ["Demo", "3D", "Game"],
        tagsFr: ["Démo", "3D", "Jeu"],
        desc: [
            "A simple 3D game where you switch colors and avoid obstacles to pass levels.",
            "Uses a <b>physics engine</b> to simulate gravity and collisions.",
        ],
        descFr: [
            "Un jeu 3D simple où vous changez de couleurs et évitez les obstacles pour passer les niveaux.",
            "Utilise un <b>moteur physique</b> pour simuler la gravité et les collisions.",
        ],
        source: "https://github.com/Jxl-s/r3f-color-switcher",
        demo: "https://color-switcher-jxl-s.vercel.app/",
        image: "/images/projects/2023/color-switcher.webp",
    },
    {
        year: 2023,
        name: "Crimes API",
        nameFr: "API de crimes",
        tech: ["PHP", "MySQL"],
        tags: ["API"],
        desc: [
            "A RESTful API that provides information about crimes in Los Angeles.",
            "Follows the MVC pattern and adheres to RESTful principles.",
            "Implements <b>JWT authentication</b>, and content-negociation functionalities.",
        ],
        descFr: [
            "Une API RESTful qui fournit des informations sur les crimes à Los Angeles.",
            "Suit le modèle MVC et respecte les principes RESTful.",
            "Implémente <b>l'authentification JWT</b>, et des fonctionnalités de négociation de contenu.",
        ],
        source: "https://github.com/Jxl-s/crimes-api",
        demo: null,
        image: "/images/projects/2023/crimes-api.webp",
    },
    {
        year: 2023,
        name: "Ghostly Echoes",
        tech: ["Unity", "Blender"],
        tags: ["3D", "Game"],
        tagsFr: ["3D", "Jeu"],
        desc: [
            "A game in <b>Unity</b> 3D, in a school horror setting.",
            "The player must escape the school while they might encounter creatures on their way.",
        ],
        descFr: [
            "Un jeu en <b>Unity</b> 3D, dans un environnement d'horreur dans un école.",
            "Le joueur doit s'échapper de l'école tout en pouvant rencontrer des créatures sur son chemin.",
        ],
        source: "https://github.com/Jxl-s/ghostly-echoes",
        demo: null,
        image: "/images/projects/2023/ghostly-echoes.webp",
    },
    {
        year: 2023,
        name: "RenoZed",
        tech: ["PHP", "MySQL"],
        tags: ["Full-Stack", "CMS"],
        desc: [
            "A content management system, built under contract for a client who runs a renovation business.",
            "Implements <b>internationalization</b>, and <b>multi-factor authentication</b> with QR codes.",
        ],
        descFr: [
            "Un système de gestion de contenu, fait pour un client qui gère une entreprise de rénovation.",
            "Implémente <b>l'internationalisation</b>, et <b>l'authentification multi-facteurs</b> avec des codes QR.",
        ],
        source: null,
        demo: null,
        image: "/images/projects/2023/renozed.webp",
    },
    {
        year: 2023,
        name: "PinPoint",
        tech: ["Flutter", "Firebase"],
        tags: ["Mobile"],
        desc: [
            "A mobile application that allows users to share pins on a map.",
            "Uses <b>Firebase</b> for authentication and storage.",
        ],
        descFr: [
            "Une application mobile qui permet aux utilisateurs de partager des épingles sur une carte.",
            "Utilise <b>Firebase</b> pour l'authentification et le stockage.",
        ],
        source: "https://github.com/Jxl-s/pinpoint",
        demo: null,
        image: "/images/projects/2023/pinpoint.webp",
    },
    {
        year: 2022,
        name: "Vanier Schedule Builder",
        nameFr: "Constructeur d'horaire à Vanier",
        tech: ["React", "TypeScript", "TailwindCSS", "Rust"],
        tags: ["Demo", "Education", "Utility"],
        tagsFr: ["Démo", "Horaire", "Éducation", "Utile"],
        desc: [
            "Generates all possible schedules with the courses you want to take, with same format as Omnivox's.",
            "Could previously fetch courses in <b>real-time</b>, but due to restrictions, it now uses a periodic dump.",
        ],
        descFr: [
            "Génère tous les horaires possibles avec les cours que vous voulez prendre, avec le même format qu'Omnivox.",
            "Pouvait auparavant récupérer les cours en <b>temps réel</b>, mais à cause des restrictions, il utilise maintenant un dump périodique.",
        ],
        source: "https://github.com/Jxl-s/vanier-courses-api",
        demo: "https://vanier-schedule-maker-2.vercel.app/",
        image: "/images/projects/2022/vanier-schedule-builder.webp",
    },
    {
        year: 2022,
        name: "LuaJoin",
        tech: ["Lua", "Rust"],
        tags: ["Utility"],
        tagsFr: ["Utile"],
        desc: [
            "A <b>blazing fast</b> Lua project bundler that allows you to bundle Lua projects into an optimized single file.",
            "Supports relative and absolute imports, and static type checking from Luau.",
        ],
        descFr: [
            "Un assembleur de projets Lua <b>ultra-rapide</b> qui vous permet d'assembler des projets Lua en un seul fichier optimisé.",
            "Supporte les imports relatifs et absolus, et la vérification de type statique de Luau.",
        ],
        source: "https://github.com/Jxl-s/luajoin",
        demo: null,
        image: "/images/projects/2022/luajoin.webp",
    },
];

for (const project of projects) {
    if (!project.tagsFr) project.tagsFr = project.tags;
    if (!project.nameFr) project.nameFr = project.name;
    if (!project.descFr) project.descFr = project.desc;
}

export default projects;
