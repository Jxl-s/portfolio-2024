import React, { FunctionComponent } from "react";
import StageLayout from "../3D/Preview/StageLayout";
import KeyboardModel from "../3D/Models/Keyboard";
import ShelvesModel from "../3D/Models/Shelves";
import { Language } from "./i18n";

type IntlField<T> = { [K in Language]: T };
interface Journey {
    title: IntlField<string>;
    subtitle: IntlField<string>;
    date: IntlField<string>;
    location: IntlField<string>;
    description: IntlField<string>[];
    scene: React.ReactNode;
    id?: string;
    educationId?: string;
    color?: string;
}

const makeStageLayout = (
    box: [number, number, number],
    offset: [number, number, number],
    object: FunctionComponent<{ rotation?: [number, number, number] }>,
    rotation?: [number, number, number]
) => {
    return React.createElement(
        StageLayout,
        { box, offset },
        React.createElement(object, {
            rotation,
        })
    );
};

const journey: Journey[] = [
    {
        title: {
            en: "Software Developer Intern",
            fr: "Stagiaire en Logiciel",
        },
        subtitle: {
            en: "NDT Technologies",
            fr: "NDT Technologies",
        },
        date: {
            en: "Jan 2024 - Now",
            fr: "Jan 2024 - Présent",
        },
        location: {
            en: "Montreal, Canada",
            fr: "Montréal, Canada",
        },
        scene: makeStageLayout([4, 2, 4], [0, 1.5, 0], KeyboardModel, [
            Math.PI * 0.25,
            0,
            0,
        ]),

        description: [
            {
                en: "Reduce database query times by up to <b>99.96%</b>.",
                fr: "Réduire les temps de requête de base de données jusqu'à <b>99,96%</b>.",
            },
        ],
        educationId: "vanier_college",
    },
    {
        title: {
            en: "Full-Stack Developer",
            fr: "Développeur Full-Stack",
        },
        subtitle: {
            en: "Contract Work",
            fr: "Travail contractuel",
        },
        date: {
            en: "Jan 2023 - May 2023",
            fr: "Jan 2023 - Mai 2023",
        },
        location: {
            en: "Remote",
            fr: "À distance",
        },
        scene: makeStageLayout([2, 1.5, 2], [0, -1.5, 0], KeyboardModel, [
            Math.PI * 0.25,
            0,
            0,
        ]),
        description: [
            {
                en: "Reduced manual data entry time by <b>97%</b> by collaborating with a 3-member team to develop a user-friendly content-management system in PHP.",
                fr: "Réduit le temps de saisie manuelle des données de <b>97%</b> en collaborant avec une équipe de 3 membres pour développer un système de gestion de contenu convivial en PHP.",
            },
        ],
        educationId: "vanier_college",
    },
    {
        title: {
            en: "Vanier College",
            fr: "Vanier College",
        },
        subtitle: {
            en: "Technical DEC in Computer Science",
            fr: "Technique en Informatique",
        },
        date: {
            en: "Aug 2021 - Now",
            fr: "Août 2021 - Présent",
        },
        location: {
            en: "Montreal, Canada",
            fr: "Montréal, Canada",
        },
        scene: React.createElement(
            StageLayout,
            { box: [1.5, 1.5, 1.5], offset: [0, 2, 0] },
            React.createElement(ShelvesModel)
        ),
        description: [
            {
                en: "Achieved a computer science average of <b>97.7%</b> and a math average of <b>99.8%</b>",
                fr: "Obtenu une moyenne en informatique de <b>97,7%</b> et une moyenne en math de <b>99,8%</b>",
            },
        ],
        id: "vanier_college",
        educationId: "vanier_college",
        color: "bg-red-600",
    },
] as const;

// Ensure each journey item has an ID and set translations if missing
for (const journeyItem of journey) {
    // For those without ID, assign a random one
    if (!journeyItem.id) {
        journeyItem.id = Math.random().toString(36).substring(2, 15);
    }
}

export default journey;
