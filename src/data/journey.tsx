import StageLayout from "../3D/StageLayout";
import KeyboardModel from "../3D/models/Keyboard";
import ShelvesModel from "../3D/models/Shelves";

interface Journey {
    title: string;
    titleFr?: string;

    subtitle: string;
    subtitleFr?: string;

    date: string;

    location: string;
    locationFr?: string;

    description: string[];
    descriptionFr?: string[];

    scene: JSX.Element;
    id?: string;
    educationId?: string;
    color?: string;
}

const journey: Journey[] = [
    {
        title: "Software Developer Intern",
        subtitleFr: "Stagiaire en Logiciel",
        subtitle: "NDT Technologies",
        date: "Jan. 2024 - Now",
        location: "Montreal, Canada",
        scene: (
            <StageLayout box={[4, 2, 4]} offset={[0, 1.5, 0]}>
                <KeyboardModel rotation-x={Math.PI * 0.25} />
            </StageLayout>
        ),
        description: [
            "Reduce database query times by up to <b>99.96%</b>.",
            // "Contribute to the development and upgrade of <b>8 web dashboards</b>.",
            // "Revamp legacy systems to address common vulnerabilities of <b>4 projects</b>.",
        ],
        descriptionFr: [
            "Réduire les temps de requête de base de données jusqu'à <b>99,96%</b>.",
            // "Contribuer au développement et à la mise à jour de <b>8 tableaux de bord web</b>.",
            // "Modifier les vieux systèmes pour résoudre les vulnérabilités courantes de <b>4 projets</b>.",
        ],
        educationId: "vanier_college",
    },
    {
        title: "Full-Stack Developer",
        titleFr: "Développeur Full-Stack",
        subtitle: "Contract Work",
        subtitleFr: "Travail contractuel",
        date: "Jan. 2023 - May 2023",
        location: "Remote",
        locationFr: "À distance",
        scene: (
            <StageLayout box={[2, 1.5, 2]} offset={[0, -1.5, 0]}>
                <KeyboardModel rotation-x={Math.PI * 0.25} />
            </StageLayout>
        ),
        description: [
            "Reduced manual data entry time by <b>97%</b> by collaborating with a 3-member team to develop a user-friendly content-management system in PHP.",
            // "Developed a <b>full-stack</b> visually appealing web application for a client in the renovation industry.",
            // "Programmed a system featuring a robust <b>content-management system</b>.",
            // "Used <b>agile and waterfall</b> methodologies to plan, document, and develop the project.",
        ],
        descriptionFr: [
            "Réduit le temps de saisie manuelle des données de <b>97%</b> en collaborant avec une équipe de 3 membres pour développer un système de gestion de contenu convivial en PHP.",
            // "Développé une application web <b>full-stack</b> visuellement attrayante pour un client dans l'industrie de la rénovation.",
            // "Programmé un système doté d'un <b>système de gestion de contenu</b> robuste.",
            // "Utilisé des méthodologies <b>agiles et en cascade</b> pour planifier, documenter et développer le projet.",
        ],
        educationId: "vanier_college",
    },
    {
        title: "Vanier College",
        subtitle: "Comp. Sci. DEC",
        subtitleFr: "DEC en Informatique",
        date: "Aug. 2021 - Now",
        location: "Montreal, Canada",
        scene: (
            <StageLayout box={[1.5, 1.5, 1.5]} offset={[0, 2, 0]}>
                <ShelvesModel />
            </StageLayout>
        ),
        description: [
            "Achieved a computer science average of <b>97.7%</b> and a math average of <b>99.8%</b>",
        ],
        descriptionFr: [
            "Obtenu une moyenne en informatique de <b>97,7%</b> et une moyenne en math de <b>99,8%</b>",
        ],
        id: "vanier_college",
        educationId: "vanier_college",
        color: "bg-red-600",
    },
] as const;

for (const journeyItem of journey) {
    // For those without ID, assign a random one
    if (!journeyItem.id) {
        journeyItem.id = Math.random().toString(36).substring(2, 15);
    }

    // Set translations if there's none
    if (!journeyItem.titleFr) journeyItem.titleFr = journeyItem.title;
    if (!journeyItem.subtitleFr) journeyItem.subtitleFr = journeyItem.subtitle;
    if (!journeyItem.locationFr) journeyItem.locationFr = journeyItem.location;
    if (!journeyItem.descriptionFr)
        journeyItem.descriptionFr = journeyItem.description;
}

console.log(journey);
export default journey;
